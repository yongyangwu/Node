//基于schema创建model
var mongoose = require("mongoose");
mongoose.connect("mongodb://xjtlu:xjtlu978866@47.98.148.97/xjtlu");//xjtlu是数据库的名字
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("数据库连接成功");
    //创建一个schema结构
    var studentSchema = new mongoose.Schema({
        name:String,
        age:{type:Number,default:20},
        time:{type:Date,default:Date.now}
    });
    //创建一个Model
    var Student  = mongoose.model("Student",studentSchema);
    //实例化一个学生类
    var student = new Student({
        name:"小白",
        age:30
    });
    //保存这个学生
    student.save(function () {
        console.log("存储成功")
    });
});

