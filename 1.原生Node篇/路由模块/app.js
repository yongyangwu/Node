// var server = require('./server');
// var router = require('./router');
// var handler = require('./handler');
// var handle = { };
// handle['/'] = handler.home;
// handle['/home'] = handler.home;
// handle['/review'] = handler.review;
// handle['/api/vi/records'] = handler.api_records;
// server.startServer(router.route,handle);


// var http = require('http');
// var fs = require('fs');
// function startServer(route,handle) {
//     var onRequest = function(req,res){
//         if(req.url==='/favicon.ico'){
//             return;
//         }
//         route(handle,req.url); // if(req.url ==='/' || req.url === '/home'){
//     };
//     var server =http.createServer(onRequest);
//     server.listen(3000,'127.0.0.1');
//     console.log("server is running at 3000");
// }
// function route(handle,pathname) {
//     console.log("routing a request for"+ pathname);
//     if(typeof handle[pathname]==='function'){
//         handle[pathname]();
//     }else{
//         console.log("no handler for" + pathname);
//     }
// }
// function home() {
//     console.log("executing 'home' handler");
// }
// function review() {
//     console.log("executing 'review' handler");
// }
// function api_records() {
//     console.log("executing 'api_records' handler");
// }
// var handle = { };
// handle['/'] = home;
// handle['/home'] = home;
// handle['/review'] = review;
// handle['/api/vi/records'] =api_records;
// startServer(route,handle);

