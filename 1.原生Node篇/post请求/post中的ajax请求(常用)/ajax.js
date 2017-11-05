var http = require("http");

http.createServer(function (req,res) {
    res.setHeader("Access-Control-Allow-Origin","*");//在本地直接打开ajax.html 然后发送ajax请求的话涉及到跨域问题
    console.log(req);

 // res.write(req.toString());
    var obj = {name:"tom"};
 res.end(JSON.stringify(obj));

}).listen(3000,function () {
    console.log("server is running ")
});