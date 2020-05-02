var http = require('http');
http.createServer(function (req, res) {
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/html
    res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
    // 发送响应数据 "Hello World"
    res.end("收到");
}).listen(80,function () {
    // 终端打印如下信息
    console.log('Server running at http://127.0.0.1:8388/');
});

