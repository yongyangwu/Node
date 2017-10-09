var path  =require("path"),
    express = require("express");

var app = express();
app.use(express.static(path.join(__dirname,'www')));
app.listen(8388,function (err) {
    if(err){
        throw err;
    }
    console.log("server is running at 8388")
})