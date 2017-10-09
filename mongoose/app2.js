var db = require("./model/db")
//定义了一个模型 学生模型 “学生类”
var Student = require("./model/Student");
//实例化一个学生类
var xiaoming = new Student({
    name:"小明",
    age:12,
    sex:"男"
});
//保存这个学生类
xiaoming.save(function () {
    console.log("存储成功")
})
