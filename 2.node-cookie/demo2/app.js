var express = require('express');
var cookieParser = require('cookie-parser');
var path = require('path');
var app = express();
app.use(cookieParser());

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));
//如果public里面有相应的文件就会提前拦截
app.get('/',function (req,res,next) {
    res.cookie('xihao','tfboys',{ maxAge:900000, httpOnly:true });
    res.render('home');
});

app.listen(3000,function () {
    console.log("server is running");
});