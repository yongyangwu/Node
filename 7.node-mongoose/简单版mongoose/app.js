var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/test1");//animal是数据库的名字
mongoose.connect("mongodb://xjtlu:xjtlu978866@47.98.148.97/xjtlu");//animal是数据库的名字
// mongoose.connect("mongodb://frisbee:frisbee978866@47.98.148.97/frisbee");//animal是数据库的名字
//创建一个模型
var Animal =  mongoose.model("Animal",{ name : String });
//然后实例化这个模型
var dog = new Animal({ name:"kitty1"});
dog.save().then(function () {
    console.log('插入成功');
});
