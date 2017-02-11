var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log('Request URL: ' + req.url);
    if(req.url === '/home' || req.url === '/') {
         res.writeHead('200', { 'Content-Type': 'text/html'});
         fs.createReadStream(__dirname + '/head.html', 'utf8').pipe(res);
    } else if(req.url === '/api/n') {
        var ninjas = [
            {name: 'Nitin', age: 28},
            {name:'Puja', age: 26}
        ];
        res.writeHead('200', { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas));
    } else {
        res.writeHead('200', { 'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
    }
    
});

server.listen(3000, '127.0.0.1');
console.log('yeah now listening to port 3000');