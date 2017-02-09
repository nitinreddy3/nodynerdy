/*
    Synchronous code execution
*/

var fs = require('fs');

var readMe = fs.readFileSync('test.txt','utf8');

//Writes data to new file 'write.txt'
fs.writeFileSync('write.txt', readMe); 