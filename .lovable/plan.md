## Why it builds but shows 404 on Vercel

Your Vercel log shows the project compiles successfully, but the compiled files are in this shape:

```text
dist/client/...      browser assets
dist/server/...      server bundle for the current Lovable server runtime
```

That is the core problem: **Vercel is successfully building files, but it is not being told what to serve for `/`.** With the current TanStack Start + Lovable config, the server bundle is produced for Lovable hosting, not as a Vercel Build Output API function. So Vercel deploys, but no valid Vercel route/function is mounted for the homepage, which results in `404: NOT_FOUND`.

In plain English: **this is not a React page problem; it is a deployment adapter/routing problem.**

## Plan to fix it while keeping TanStack Start

1. **Add a Vercel-only output bridge**
   - Create a small post-build script that converts the existing build output into the Vercel Build Output API layout:

   ```text
   .vercel/output/
     config.json
     static/...
     functions/index.func/...
   ```

2. **Route all traffic through the server entry**
   - Add `.vercel/output/config.json` routes so `/`, deep links, and assets resolve correctly.
   - Static assets will be served from the copied client build.
   - App routes will fall through to the server handler.

3. **Update `package.json` for Vercel only**
   - Keep the normal Lovable build command intact where possible.
   - Add a Vercel-compatible build command, for example:

   ```json
   "build:vercel": "vite build && node scripts/prepare-vercel-output.mjs"
   ```

4. **Add `vercel.json`**
   - Tell Vercel to use the Build Output API result instead of guessing a static output directory.
   - Keep it minimal so the Vercel “Other” preset can deploy `.vercel/output`.

5. **Do not convert to SPA**
   - No `BrowserRouter`.
   - No `HashRouter`.
   - No flattening everything into `dist/index.html`.
   - TanStack Start route files stay as-is.

## Technical caveat

This project’s current server output is optimized for Lovable hosting, so the Vercel bridge may need one verification pass after deployment. If Vercel rejects the generated server function because of runtime incompatibility, the clean long-term fix is to switch the server adapter to a Vercel-native TanStack Start output. But the first fix I’d implement is the least invasive bridge above, because it keeps your current app structure and avoids the SPA conversion you rejected.