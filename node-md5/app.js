var crypto = require('crypto');
var md5 = crypto.createHash('md5');
var password = md5.update('123456').digest('base64');
console.log(password)