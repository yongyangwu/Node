var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test3");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("数据库连接成功");
    //创建一个schema结构
    var kittySchema = new mongoose.Schema({
        name:String,
    });
    kittySchema.methods.speak = function () {
        var greeting = this.name
            ? "My name is " + this.name
            : "I don't have a name";
        console.log(greeting);
    };
    //类是基于schema创建的
    var Kitten  = mongoose.model("Student",kittySchema);
    //实例化一个Kitten类
    // var fluffy = new Kitten({ name: 'fluffy' });
    // // console.log(silence.name);
    // fluffy.save(function (err, fluffy) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log(fluffy)
    // });
    Kitten.find({name:/flu/},function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
    })

});
