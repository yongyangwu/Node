const express = require("express");
const app = express();
app.use(express.static("./public"));
app.get("/",(req,res)=> {
    res.end("hello world")
});
app.get("/haha",(req,res)=> {
    res.end("haha")
});
app.get(/\/student\/([\d]{10})/,(req,res)=> {
    res.end("学生信息学号："+req.params[0])
});

var server = app.listen(3000,()=>{
    console.log("server is running");
});