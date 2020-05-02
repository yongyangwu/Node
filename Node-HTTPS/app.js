const https = require('https');
const fs = require('fs');
// 引入证书
let options = {
    key: fs.readFileSync('./server-key.pem'),
    ca: [fs.readFileSync('./ca-cert.pem')],
    cert: fs.readFileSync('./server-cert.pem')
};
// 创建https服务
https.createServer(options, function (req, res) {
    // 获取请求文件路径

    res.writeHead(200);
    res.end('333');

    // 监听本地3000端口
}).listen(3000,function(){
    console.log('server is running in 3000')
});