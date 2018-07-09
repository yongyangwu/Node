var stream = require('stream');

var fs = require('fs');

var readStream = fs.createReadStream('./input.txt','utf-8');
readStream.on('data',function (data) {
    console.log(data);
});
readStream.on('close',function () {
    console.log('closed');
});
readStream.on('error',function () {
    console.log('error');
});