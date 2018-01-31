var http = require('http');
// var queryString =require('querystring');
var formidable = require('formidable');

var server = http.createServer(function (req,res){
 if(req.url == "/dopost" && req.method.toLowerCase() =="post"){
     var form = new formidable.IncomingForm();
     form.uploadDir = "./uploads";
     //执行里面的回调函数的时候 表单已经全部接受完毕了
     form.parse(req,function (err,fields,files) {
         //所有的文本域，单选框，都放在fileds存放
         // 所有的文件域，全在files
         console.log(fields);
         console.log(files);

     });
     res.writeHead(200,{"content-type":"text/html"})
     res.end("成功")

 }

}).listen(3000);