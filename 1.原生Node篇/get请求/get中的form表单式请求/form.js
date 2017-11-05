var http = require("http");
var url = require("url");
var querystring = require("querystring");
var a =0;
http.createServer(function (req,res) {
    // form 表单的get是通过地址栏请求的会请求两次第二次就是那个/favicon.ico 请求
    console.log(req.url);//req.url = /?username=wu&password=123456&sex=male
    a++;
    // var obj = url.parse(req.url);
    // console.log(url.parse(req.url));
    // Url {
    //     protocol: null,
    //         slashes: null,
    //         auth: null,
    //         host: null,
    //         port: null,
    //         hostname: null,
    //         hash: null,
    //         search: '?username=wu&password=male&sex=male',
    //         query: 'username=wu&password=male&sex=male',
    //         pathname: '/',
    //         path: '/?username=wu&password=male&sex=male',
    //         href: '/?username=wu&password=male&sex=male' }
    // console.log(querystring.parse(obj.query));//把obj.query属性值解析为对象格式
    console.log(a)
    res.end();
}).listen(3000,()=>{
    console.log("server is running")
});