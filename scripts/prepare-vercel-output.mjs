// Convert Lovable's TanStack Start build (dist/client + dist/server worker bundle)
// into the Vercel Build Output API layout (.vercel/output) so Vercel can serve it.
//
// Layout produced:
//   .vercel/output/
//     config.json
//     static/...           <- copy of dist/client
//     functions/index.func/
//       .vc-config.json
//       index.mjs          <- Node-runtime adapter that calls the worker fetch()
//       server/...         <- copy of dist/server bundle
import { cp, mkdir, writeFile, rm, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const clientDir = path.join(dist, "client");
const serverDir = path.join(dist, "server");
const outDir = path.join(root, ".vercel", "output");
const staticDir = path.join(outDir, "static");
const fnDir = path.join(outDir, "functions", "index.func");

if (!existsSync(clientDir) || !existsSync(serverDir)) {
  console.error("[prepare-vercel-output] dist/client or dist/server missing — run `vite build` first.");
  process.exit(1);
}

await rm(outDir, { recursive: true, force: true });
await mkdir(staticDir, { recursive: true });
await mkdir(fnDir, { recursive: true });

// 1. Static assets (browser bundle)
await cp(clientDir, staticDir, { recursive: true });

// 2. Server bundle inside the function
await cp(serverDir, path.join(fnDir, "server"), { recursive: true });

// 3. Find the server entry file (dist/server/index.js re-exports the worker handler)
const serverEntry = "./server/index.js";

// 4. Vercel Node function config
await writeFile(
  path.join(fnDir, ".vc-config.json"),
  JSON.stringify(
    {
      runtime: "nodejs20.x",
      handler: "index.mjs",
      launcherType: "Nodejs",
      shouldAddHelpers: false,
      supportsResponseStreaming: true,
    },
    null,
    2,
  ),
);

// 5. package.json so Node treats .mjs/handler as ESM
await writeFile(
  path.join(fnDir, "package.json"),
  JSON.stringify({ type: "module" }, null, 2),
);

// 6. Adapter: convert Node req/res to Web Request/Response and invoke the worker handler.
const adapter = `import handler from "${serverEntry}";

function buildRequest(req) {
  const proto = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host || "localhost";
  const url = new URL(req.url || "/", \`\${proto}://\${host}\`);

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (Array.isArray(value)) value.forEach((v) => headers.append(key, v));
    else if (value != null) headers.set(key, String(value));
  }

  const method = req.method || "GET";
  const init = { method, headers };
  if (method !== "GET" && method !== "HEAD") {
    init.body = new ReadableStream({
      start(controller) {
        req.on("data", (chunk) => controller.enqueue(chunk));
        req.on("end", () => controller.close());
        req.on("error", (err) => controller.error(err));
      },
    });
    init.duplex = "half";
  }
  return new Request(url, init);
}

async function sendResponse(res, response) {
  res.statusCode = response.status;
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });
  if (!response.body) {
    res.end();
    return;
  }
  const reader = response.body.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    res.write(Buffer.from(value));
  }
  res.end();
}

export default async function (req, res) {
  try {
    const request = buildRequest(req);
    const response = await handler.fetch(request, process.env, {});
    await sendResponse(res, response);
  } catch (err) {
    console.error("[vercel-adapter] handler error:", err);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader("content-type", "text/plain; charset=utf-8");
    }
    res.end("Internal Server Error");
  }
}
`;
await writeFile(path.join(fnDir, "index.mjs"), adapter);

// 7. Build the routing config: serve static assets directly, fall through to the function.
const staticEntries = await readdir(staticDir, { withFileTypes: true });
const staticTopLevel = staticEntries.map((e) => e.name);
// Match anything that begins with a top-level static name (assets/, favicon.ico, etc.)
const staticRegex = `^/(?:${staticTopLevel.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})(?:/.*)?$`;

const config = {
  version: 3,
  routes: [
    { handle: "filesystem" },
    { src: staticRegex, status: 404, continue: false, dest: "$0" }, // never reach here; filesystem handles
    { src: "/(.*)", dest: "/index" },
  ],
};
// Simpler & correct: rely on the filesystem handler for static, then route everything else to the function.
config.routes = [
  { handle: "filesystem" },
  { src: "/(.*)", dest: "/index" },
];

await writeFile(path.join(outDir, "config.json"), JSON.stringify(config, null, 2));

console.log("[prepare-vercel-output] .vercel/output ready");
console.log(`  static files: ${staticTopLevel.length} top-level entries`);
console.log("  function: index.func (nodejs20.x)");
