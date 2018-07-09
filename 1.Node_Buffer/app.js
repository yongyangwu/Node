var fs = require('fs');
fs.readFile("test.txt",function (err,results) {
    console.log(results.toString());
});