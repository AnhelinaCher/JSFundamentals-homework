const http = require('http');
const os = require('os');
const path = require('path');
const { greetUser } = require('./personalmodul');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

  const username = os.userInfo().username;
  const currentTime = new Date();
  const greeting = greetUser(username);

  const html = `
    <html>
      <head>
        <title>System Information</title>
      </head>
      <body>
        <h1>System Information</h1>
        <p>Date of request: ${currentTime}</p>
        <p>${greeting}</p>
      </body>
    </html>
  `;

  res.end(html);
});

server.listen(5001, 'localhost', () => {
  console.log('Server running at http://localhost:5001/');
});
