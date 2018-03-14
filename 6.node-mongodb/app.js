//直接用node 对mongodg 数据库进行操作
var mongodb = require('mongodb');//
var MongoClient = mongodb.MongoClient;//
// Connection URL
var url = 'mongodb://localhost:27017/test1';
MongoClient.connect(url, function(err, db) {
    if (err){
        throw err;
    }
    var dbo = db.db("test1");
    var myobj = { name: "bob", age: 27 };
    dbo.collection("site").insertOne(myobj, function(err, res) {
        if (err){
            throw err;
        }
        console.log("文档插入成功");
        db.close();
    });
});
