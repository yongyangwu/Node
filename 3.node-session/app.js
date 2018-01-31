var express = require('express');
var app = express();
var session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));
app.set('view engine','ejs');
app.get('/',function (req,res) {
    if( req.session.login){
        var login = true;

    } else {
        // 没登录
        var login = false;
    }
    res.render('index',{login:login,name:"bob"});
});

app.get('/login',function (req,res) {
    var user = {login:true,name:"bob"};
    req.session.login = true;
    res.render('index',user);
});

app.listen(3000);

