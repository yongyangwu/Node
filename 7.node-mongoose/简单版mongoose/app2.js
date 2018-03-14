var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test4");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("数据库连接成功");
});
//创建一个schema结构
var studentSchema = new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    sex:{type:String}
});
//类是基于schema创建的
var Student  = mongoose.model("Student",studentSchema);
//实例化一个学生类
var xiaoming = new Student({
    name:"小明",
    age:12,
    sex:"男"
});
//保存这个学生类
xiaoming.save(function () {
    console.log("存储成功")
});
