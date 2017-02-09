var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead('200', { 'Content-Type': 'text/plain'});
    res.end('Hey bro');
});

server.listen(3000, '127.0.0.1');
console.log('yeah now listening to port 3000');