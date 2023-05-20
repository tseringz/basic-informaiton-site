const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function(req, res) {
  const q = url.parse(req.url, true);
  let filename = '.' + q.pathname;

  if (filename === './') {
    filename = './index.html';
  }


fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end('404 Not Found');
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  })

}).listen(8080);

