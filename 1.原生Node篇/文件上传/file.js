var http = require("http");
var querystring  = require("querystring");
var formidable = require("formidable");
var util =require("util");
http.createServer(function (req,res) {
   if(req.url =="/dopost" && req.method.toLocaleLowerCase()=="post"){
       var form = new formidable.IncomingForm();
       form.uploadDir ="./uploads";
       form.parse(req,function (err,fields,files) {
           console.log(fields);
           console.log(files);

           res.end("success")
       })

   }
}).listen(3000,"127.0.0.1",function () {
    console.log("server is running")
});