var http  =require('http');
var fs  = require('fs');
var server  = http.createServer(function (req,res) {
  if(req.url=="/"){
      var fileList = fs.readdirSync('./');
      console.log(fileList);
      res.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});
      res.end(fileList.toString());
  }else if(req.url != '/favicon.ico'){
      var path = req.url;
      console.log(path)
      fs.readFile('.'+ path,function (err,data) {
          if(err){
              res.end("internal error");
              throw err;
          }
          res.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});
          res.end(data);
      })
  }
    
})
server.listen(3000,function () {
    console.log('server is running');
})
