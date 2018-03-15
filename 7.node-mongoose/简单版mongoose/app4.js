var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test4");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("数据库连接成功");
//创建一个schema结构
    var playerSchema = new mongoose.Schema({
        name:String,
        age:Number,
        sex:String
    });
    // //类是基于schema创建的
    var Player  = mongoose.model("Student",playerSchema);
    //增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增

    // //实例化一个Player类
    // // var p1 = new Player({
    // //     name: 'tom',
    // //     age:18,
    // //     sex:"男"
    // // });
    // var p1 = new Player({
    //     name: 'lucy',
    //     age:18,
    //     sex:"女"
    // });
    // // console.log(silence.name);
    // p1.save(function (err, p1) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log(p1)
    // });
    //增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增增

    //查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查
    // Player.find({age:{$gte :12}},function(err, doc){
    //     if(err) {
    //         console.log(err.message)
    //     }else{
    //         console.log(doc)
    //     }
    // })
    //查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查查
    //改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改
    Player.update({name:'tom'},{$set:{name:'gary'}},function(err, doc){
        if(err) {
            console.log(err.message)
        }else{
            console.log(doc)
        }
    })
    //改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改改
});
