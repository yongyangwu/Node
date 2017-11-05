var express = require("express");
var bodyparser = require("body-parser");

var app = express();
app.use(bodyparser.json());

app.get("/",function (req,res) {
    console.log(req.query);
    res.send("收到")

});

app.listen(3000,()=>{
    console.log("server is running")
});