var express = require("express");
var app = express();


// app.use("/admin",function (req,res) {
//     console.log("1");
//     res.send("你好");
// });
app.get("/admin",function (req,res) {
    console.log("1");
    res.send("你好");
});



app.listen(3000);