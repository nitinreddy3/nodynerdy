var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log('Request URL: ' + req.url);
    res.writeHead('200', { 'Content-Type': 'application/json'});
    // var readStream = fs.createReadStream(__dirname + '/test.txt');
    // var readStream = fs.createReadStream(__dirname + '/head.html', 'utf8');
    var myObj = {
        name: 'Nitin',
        age: 28
    }
    // readStream.pipe(res);
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('yeah now listening to port 3000');