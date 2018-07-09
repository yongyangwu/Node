//用pipe改写的静态文件服务器
var http  =require('http');
var fs  = require('fs');
var server  = http.createServer(function (req,res) {
    // console.log(req.headers)
  if(req.url=="/"){
      var fileList = fs.readdirSync('./');
      // console.log(fileList);
      res.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});
      res.end(fileList.toString());
  }else if(req.url != '/favicon.ico'){
      var path ='.'+ req.url;
      console.log(path)
      var readStream = fs.createReadStream(path).pipe(res);
      //pipe方法接收一个writable对象，当readable对象调用pipe方法时会在内部调用writable对象的write方法写入 
  }
    
})
server.listen(3000,function () {
    console.log('server is running');
})
