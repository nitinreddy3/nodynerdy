var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/test.txt', 'utf8');
var writeStream = fs.createWriteStream(__dirname + '/write.txt');

readStream.on('data', (chunk) => {
    console.log('<---------------New Chunk Received---------------->');
    writeStream.write(chunk);
});