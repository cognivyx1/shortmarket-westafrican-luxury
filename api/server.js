// Vercel serverless function for TanStack Start
import { createServer } from '../dist/server/server.js';

export default async function handler(req, res) {
  const server = await createServer();
  const url = new URL(req.url, `http://${req.headers.host}`);
  
  const response = await server.fetch(url.toString(), {
    method: req.method,
    headers: req.headers,
    body: req.method !== 'GET' && req.method !== 'HEAD' ? req.body : undefined,
  });
  
  // Set response headers
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });
  
  // Send response
  res.status(response.status);
  
  if (response.body) {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(decoder.decode(value));
    }
    res.end();
  } else {
    res.end();
  }
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
