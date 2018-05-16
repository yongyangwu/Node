var net = require('net');
var server = net.createServer(function (socket) {
    socket.on('data',function(data){
        socket.write('hello');
    })
    socket.on('end',function(data){
       console.log("kill")
    })
    socket.write("welcome\n")
})
server.listen(8124,function(){
    console.log('server bound');
})
