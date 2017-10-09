var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/haha");
var Cat = mongoose.model("Cat",{name:String});
var kitty = new Cat({name:"zhangsan"});
kitty.save(function(err){
    if(err){
        console.log(err)
    }
    console.log("插入成功");
});
var tom = new Cat({name:"李四"});
tom.save(function (err) {
    console.log("存入tom成功")
})