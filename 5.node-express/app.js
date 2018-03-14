var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/test2');
// 用户
var usersSchema = new mongoose.Schema({
    username: String,
    password: String,
    isAdmin:{
        type: Boolean,
        default: false
    },
    time: {
        type: String,
        default: Date.now()
    }
});

Model = {
    User: mongoose.model('User', usersSchema),
};
const app = express();
app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 注册
var date = new Date(),
    yy = date.getFullYear(),
    MM = date.getMonth() + 1,
    dd = date.getDate(),
    hh = date.getHours(),
    mm = date.getMinutes(),
    ss = date.getSeconds();

router.post('/register', function(req, res, next){
    console.log(222222)
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;
    var newUser = {
        username: username,
        password: password,
        time : yy + '-' + MM + '-' + dd + ' ' + hh + ':' + mm + ':' + ss
    }
    Model.User.findOne({username: username}).then(function(userInfo){
        if(userInfo){
            responseData.code = 1;
            responseData.message ='用户名已被注册';
            res.json(responseData);
            return;
        }
        Model.User.create(newUser).then(function(newUserInfo){
            responseData.code = 200;
            responseData.message = '注册成功';
            res.json(responseData);
        })
    })
})
app.use("/",router);
app.listen(8288,()=>{
    console.log("server is running");
});