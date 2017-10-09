var mongoose = require("mongoose");
var db= require("./db")
//创建一个schema结构
var studentSchema = new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    sex:{type:String}
});
//创建一个模型 就是学生模型 就是学生类
//类是基于schema创建的
var studentModel = db.model("student",studentSchema);
//
module.exports = studentModel;