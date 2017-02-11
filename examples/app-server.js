var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log('Request URL: ' + req.url);
    res.writeHead('200', { 'Content-Type': 'text/html'});
    // var readStream = fs.createReadStream(__dirname + '/test.txt');
    var readStream = fs.createReadStream(__dirname + '/head.html', 'utf8');
    readStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('yeah now listening to port 3000');