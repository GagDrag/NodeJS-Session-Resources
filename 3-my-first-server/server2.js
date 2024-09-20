const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (req.url === '/') {
    res.write('<h1>Welcome to the Homepage</h1>');
  } else if (req.url === '/contact') {
    res.write('<h1>Contact Us at: contact@example.com</h1>');
  } else {
    res.write('<h1>404 Page Not Found</h1>');
  }

  res.end();
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
