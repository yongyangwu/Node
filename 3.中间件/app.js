const express = require("express");
const app = express();
// app.use(express.static("./public"));

var a = 100;
// app.get("/",(req,res)=> {
//     res.end("hello world")
// });
// app.get("/haha",(req,res)=> {
//     res.end("haha")
// });

var server = app.listen(3000,()=>{
    console.log("server is running");
});