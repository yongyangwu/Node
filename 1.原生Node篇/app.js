var http = require('http');
var i =1;
http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/html
    response.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
    console.log(request.url)
    // 发送响应数据 "Hello World"
    i++;
    console.log(i)
    response.write("qqq"+i)
    response.end();

}).listen(8888,function () {
    // 终端打印如下信息
    console.log('Server running at http://127.0.0.1:8888/');
});

