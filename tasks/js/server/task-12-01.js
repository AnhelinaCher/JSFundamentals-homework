const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html;  charset=utf-8' });

  const username = os.userInfo().username;
  const osType = os.type();
  const uptime = Math.floor(os.uptime() / 60);
  const currentDir = process.cwd();
  const serverFilename = path.basename(__filename);

  const html = `
    <html>
      <head>
        <title>System Information</title>
      </head>
      <body>
        <h1>System Information</h1>
        <p>Username: ${username}</p>
        <p>OS Type: ${osType}</p>
        <p>Uptime (minutes): ${uptime}</p>
        <p>Current Directory: ${currentDir}</p>
        <p>Server File Name: ${serverFilename}</p>
      </body>
    </html>
  `;

  res.end(html);
});

server.listen(5000, 'localhost', () => {
  console.log('Server running at http://localhost:5000/');
});
