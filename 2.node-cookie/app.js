var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
app.get("/",function (req,res) {
    res.cookie('xihao','tfboys',{maxAge:900000,httpOnly:true});
    console.log(req.cookies)
    res.send()
});
app.get("/gonglue",function (req,res) {
    //请求get请求 用户查询的目的地
    var mudidi = req.query.mudidi;
    //记录用户喜好
    //先读取用户喜好 然后把新的数据push进入数组 然后设置新的cookie
    var mudidiarray = req.cookies.mudidi || [];
    mudidiarray.push(mudidi);
    res.cookie("mudidi",mudidiarray,{maxAge:900000,httpOnly:true})
    res.send(mudidiarray + "旅游攻略");
})
app.listen(3002,function () {
    console.log("server is running");
})