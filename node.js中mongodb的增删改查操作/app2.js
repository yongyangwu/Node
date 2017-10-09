var express = require("express");
var app = express();
var db =require("./model/db");


app.get("/",function (req,res) {
    db.insertOne("teacher",{"name":"小红"},function (err,result) {
        if(err){
            console.log("插入失败");
            return;
        }
        res.send("数据库插入成功")
    })

});
app.get("/du",function (req,res) {
    db.find("restaurants",{},function (err,result) {
        console.log(result);
        res.json(result)
    })
})
app.listen(2323);
