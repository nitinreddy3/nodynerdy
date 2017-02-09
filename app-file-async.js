/*
    Asynchronous code execution
*/

var fs = require('fs');

fs.readFile('test.txt', 'utf8', function(err, data) {
    //Writes data to new file 'write-async.txt'
    fs.writeFile('write-async.txt', data);
});
