// var db = require('./model/db');
// var Student = require('./model/Student.js');
var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://localhost/haha');
db.once('open',function (callback) {
    console.log('数据库成功连接');
});
var studentSchema = new mongoose.Schema({
    name:{ type: String },
    age: { type: Number }
});
//创建静态方法
studentSchema.statics.zhaoren = function (name,callback) {
    this.model('Student').find({name:name},callback);
};
var Student = db.model('Student',studentSchema);
Student.zhaoren('小明',function (err,result) {
    console.log(result);
});
var xiaoming = new Student({ "name":"小明","age":12});
xiaoming.save(function () {
    console.log('存储成功');
});

Student.create({ "name":"小红","age":27},function(error){
    console.log("存入数据库成功");
});

