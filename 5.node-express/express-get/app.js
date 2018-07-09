var express = require("express");
var app = express();
app.use(express.static('./dist'));
// app.get("/",function (req,res) {
//     res.send("收到")
// });




app.listen(3000,()=>{
    console.log("server is running")
});