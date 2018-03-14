//创建一个学生类的Schema
var mongoose  = require('mongoose');
var db = require('./db');
var studentSchema = new mongoose.Schema({
    name:{type:String},
    age:{type:Number}
});
var studentModel = db.model('Student',studentSchema);
module.exports = studentModel;