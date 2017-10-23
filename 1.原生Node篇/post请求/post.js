var http = require("http");
var querystring  = require("querystring");
http.createServer(function (req,res) {
   if(req.url =="/dopost" && req.method.toLocaleLowerCase()=="post"){
       var postData = "";
       req.addListener("data",function (chunk) {
           postData +=chunk;
       })
       req.addListener("end",function () {
           console.log(postData.toString());
           var datastring = postData.toString();
           var dataObj = querystring.parse(datastring)
           console.log(dataObj.name)
           console.log(dataObj.sex);
       })

   }
}).listen(3000,"127.0.0.1",function () {
    console.log("server is running")
});