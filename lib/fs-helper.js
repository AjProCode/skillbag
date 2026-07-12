const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;
const FILE_PATH = path.join(__dirname, 'landing-page-data.json');

const server = http.createServer((req, res) => {
  // Set CORS headers for cross-origin access from dev server
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/save') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const parsed = JSON.parse(body);
        
        // Basic schema verification
        if (!parsed.hero || !parsed.courses || !parsed.testimonials || !parsed.faqs || !parsed.pasGrid) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: "Invalid landing page data format" }));
          return;
        }

        // Write directly to disk
        fs.writeFileSync(FILE_PATH, JSON.stringify(parsed, null, 2), 'utf-8');
        console.log(`[FS Helper] Saved configuration to ${FILE_PATH}`);
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      } catch (err) {
        console.error("[FS Helper] Save error:", err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`[FS Helper] Running on http://127.0.0.1:${PORT}`);
});
