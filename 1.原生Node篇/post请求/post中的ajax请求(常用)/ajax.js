var http = require("http");

http.createServer(function (req,res) {
    res.setHeader("Access-Control-Allow-Origin","*");//在本地直接打开ajax.html 然后发送ajax请求的话涉及到跨域问题
    if(req.url =="/dopost" && req.method.toLocaleLowerCase()=="post"){
        var postData = "";
        req.addListener("data",function (chunk) {
            postData +=chunk;
        });
        req.addListener("end",function () {
            console.log(postData.toString());
            var datastring = postData.toString();
            var dataObj = querystring.parse(datastring);
            console.log(dataObj.name)
            console.log(dataObj.sex);
        })

    }

}).listen(3000,function () {
    console.log("server is running ")
});