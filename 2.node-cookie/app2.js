var express = require('express');
var app = express();
// app.get("/",function (req,res) {
//     //设置cookie
//     // res.cookie('xihao','tfboys',{ maxAge:900000, httpOnly:true });
//     //读取cookies
//     // console.log(req.cookies);
//     res.send("设置cookie成功:");
// });
app.get("/",function (req,res) {
    console.log(req.ip);
    res.send("hello world");
});

app.listen(3000,function () {
    console.log("server is running");
});
