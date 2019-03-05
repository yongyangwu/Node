// var db = require('./model/db');
// var Student = require('./model/Student.js');
var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://localhost/feirui');
db.once('open',function (callback) {
    console.log('数据库成功连接');
});
var registerSchema = new mongoose.Schema({
    name:{ type: String },
    age: { type: Number }
});

var Register = db.model('Student',registerSchema);

var xiaoming = new Register({ "name":"小明","age":12});
xiaoming.save(function () {
    console.log('存储成功');
});

Register.create({ "name":"小红","age":27},function(error){
    console.log("存入数据库成功");
});

