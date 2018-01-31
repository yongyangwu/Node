var express = require('express');
var app = express();
var formidable = require('formidable');
app.set("view engine",'ejs');
app.use(express.static("public"));
app.get("/register",function (req,res,next) {
    res.render("register")
});
app.post("/doregister",function (req,res,next) {

    var form = new formidable.IncomingForm();
    // form.writeHead(200,{'content-type':'text/plain'});
    // res.write('received upload:\n\n');
    // res.end(util.inspect({fields:fields,files:files}));
    form.parse(req,function (err,fields,files) {
        console.log("我是node服务器，我收到表单域名"+files);
    })
    
});

app.listen(3000);