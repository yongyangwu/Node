var mongoose = require("mongoose");
var db = mongoose.createConnection("mongodb://localhost/haha");
db.once("open",function (callback) {
    console.log("数据库成功连接");
});
module.exports=db;