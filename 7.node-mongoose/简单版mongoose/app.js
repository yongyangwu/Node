//没有schema 也能创建成功
var mongoose = require("mongoose");
mongoose.connect("mongodb://xjtlu:xjtlu978866@47.98.148.97/xjtlu");//xjtlu是数据库的名字
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("we're connected!")
    //创建一个模型
    var Animal =  mongoose.model("Animal",{ name : String});
    //然后实例化这个模型
    var dog = new Animal({ name:"kitty1"});
    dog.save().then(function () {
        console.log('插入成功');
    });
});


