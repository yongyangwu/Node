var express = require("express");
var app = express();
// app.use(express.static('./dist'));
app.get("/api",function (req,res) {
    // res.setHeader("Access-Control-Allow-Origin","*");//或者下面的也可以
    res.send("收到")
});

app.listen(3000,()=>{
    console.log("server is running 3000")
});