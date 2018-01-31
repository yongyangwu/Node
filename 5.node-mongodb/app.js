var express =require('express');
// var mongodb = require('mongodb');
var app = express();

var db = require("./model/db.js");



app.get("/",function (req,res) {
    // parseInt(Math.random()*100 +10)
    db.insertOne("teacher",{"name":"小红","age": parseInt(Math.random()*100 +10)},function(err,result){
       if(err){
           console.log("插入失败");
           return;
       }
       res.send("插入成功");
    });
});
app.get("/du",function (req,res) {
    // parseInt(Math.random()*100 +10)
    db.find("teacher",{},function(err,result){
        if(err){
            console.log("查询失败");
            return;
        }
        console.log(result);
        res.send("查询成功");
    });
});

app.listen(3000);