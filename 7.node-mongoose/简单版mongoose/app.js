var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/animal");//animal是数据库的名字
//创建一个模型
var Animal = mongoose.model("Animal",{ name : String });
//然后实例化这个模型
var dog = new Animal({ name:"kitty"});
dog.save().then(function () {
    console.log('插入成功');
});