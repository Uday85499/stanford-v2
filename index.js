import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import server from './dist/server/server.js';

const port = process.env.PORT || process.env.port || 3000;
const CLIENT_DIR = join(process.cwd(), 'dist', 'client');

// Elegant MIME types map for production assets
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
};

createServer(async (req, res) => {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers.host || 'localhost';
    const url = new URL(req.url, `${protocol}://${host}`);
    
    // 1. Resolve asset path and check if the static asset exists in dist/client
    const decodedPath = decodeURIComponent(url.pathname);
    const filePath = join(CLIENT_DIR, decodedPath);
    
    // Prevent directory traversal attacks by making sure path is within CLIENT_DIR
    if (filePath.startsWith(CLIENT_DIR) && existsSync(filePath) && statSync(filePath).isFile()) {
      const ext = extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      
      res.statusCode = 200;
      res.setHeader('content-type', contentType);
      
      // Cache assets for 1 year in production
      res.setHeader('cache-control', 'public, max-age=31536000, immutable');
      
      createReadStream(filePath).pipe(res);
      return;
    }

    // 2. Construct web standard Request object for TanStack Start Fetch handler
    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (value !== undefined) {
        if (Array.isArray(value)) {
          value.forEach(v => headers.append(key, v));
        } else {
          headers.set(key, value);
        }
      }
    }

    let body = null;
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      body = req;
    }

    const webRequest = new Request(url.toString(), {
      method: req.method,
      headers,
      body,
      duplex: 'half',
    });

    // 3. Dispatch to the TanStack Start request processor
    const webResponse = await server.fetch(webRequest);

    // 4. Write standard Web Response back to the Node response stream
    res.statusCode = webResponse.status;
    res.statusMessage = webResponse.statusText;
    
    webResponse.headers.forEach((value, key) => {
      if (key.toLowerCase() === 'set-cookie') {
        const cookies = webResponse.headers.getSetCookie 
          ? webResponse.headers.getSetCookie() 
          : [value];
        res.setHeader(key, cookies);
      } else {
        res.setHeader(key, value);
      }
    });

    if (webResponse.body) {
      const reader = webResponse.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
    }
    res.end();
  } catch (error) {
    console.error('[Production Server Error]:', error);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader('content-type', 'text/html; charset=utf-8');
      res.end(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Internal Server Error</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; color: #dc2626; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; }
      button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; background: #111; color: #fff; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Internal Server Error</h1>
      <p>Something went wrong running the application server. Please try refreshing or check the application logs in hPanel.</p>
      <div class="actions">
        <button onclick="location.reload()">Try again</button>
      </div>
    </div>
  </body>
</html>`);
    }
  }
}).listen(port, () => {
  console.log(`> Production server successfully listening on http://localhost:${port}`);
});
