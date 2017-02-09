var fs = require('fs');


/**
 * Creates a directory and then writes a data into the file
 */
fs.mkdir('stuff', () => {
    fs.readFile('test.txt', (err, data) => {
        fs.writeFile('./stuff/write.txt');
    })
});

/**
 * Deletes a file and then removes the directory
 */
fs.unlink('./stuff/write.txt', () => {
    fs.rmdir('stuff');
});