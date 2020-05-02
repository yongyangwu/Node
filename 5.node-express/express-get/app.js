var express = require("express");
var app = express();
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// let options = {
//     setHeaders: function (res, path, stat) {
//       res.set('Access-Control-Allow-Origin', '*')
//     }
//   }
app.use(express.static('./dist'));
// app.get("/api",function (req,res) {
//     // res.setHeader("Access-Control-Allow-Origin","*");//或者下面的也可以
//     res.send("收到")
// });

app.listen(3000,()=>{
    console.log("server is running 3000")
});