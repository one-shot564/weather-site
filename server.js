const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const stream = fs.createReadStream('./index.html');

  if (stream) stream.pipe(res);
})

server.listen( 3005, () => { console.log('Server started at port 3005') } );