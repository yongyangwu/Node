var http = require("http");
var url = require("url");
var querystring = require("querystring");
http.createServer(function (req,res) {
    res.setHeader("Access-Control-Allow-Origin","*");//在本地直接打开ajax.html 然后发送ajax请求的话涉及到跨域问题
    console.log(req.url);//req.url = /?username=wu&password=123456&sex=male
    var obj = url.parse(req.url);
    console.log(url.parse(req.url));
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
    console.log(querystring.parse(obj.query));//把obj.query属性值解析为对象格式
    obj = {name:"bob"};
    //如果服务器返回的是对象数据的话需要JSON.stringfy()
    res.write(JSON.stringify(obj));
    res.end();
}).listen(3000,()=>{
    console.log("server is running")
});