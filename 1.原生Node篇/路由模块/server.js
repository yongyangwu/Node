var http = require('http');
var fs = require('fs');
function startServer(route,handle) {
    // route(req.url);
    var onRequest = function(req,res){
        if(req.url==='/favicon.ico'){
            return;
        }
        route(handle,req.url); // if(req.url ==='/' || req.url === '/home'){
        //     res.writeHead(200,{'Content-Type':'text/html'});
        //     var myReadStream = fs.createReadStream(__dirname +'/index.html','utf8');
        //     myReadStream.pipe(res);
        // }else if(req.url==='/review'){
        //     res.writeHead(200,{'Content-Type':'text/html'});
        //     var myReadStream = fs.createReadStream(__dirname +'/review.html','utf8');
        //     myReadStream.pipe(res);
        // }else if(req.url==='/api/v1/records'){
        //     res.writeHead(200,{'Content-Type':'text/json'});
        //     var jsonObj = {
        //         name:'hfpp2012'
        //     };
        //     res.end(JSON.stringify(jsonObj));
        // }else{
        //     res.writeHead(200,{'Content-Type':'text/html'});
        //     var myReadStream = fs.createReadStream(__dirname +'/404.html','utf8');
        //     myReadStream.pipe(res);
        // }


    };
    var server =http.createServer(onRequest);
    server.listen(3000,'127.0.0.1');
    console.log("server is running at 3000");
}
module.exports.startServer = startServer;