//直接用node 对mongodg 数据库进行操作
var MongoClient = require('mongodb').MongoClient;
// Connection URL
// const url = 'mongodb://localhost:27017';
var url = "mongodb://xjtlu:xjtlu978866@47.98.148.97/xjtlu";
//连接远程数据服务器
const dbName = 'xjtlu';
// const client = new MongoClient(url);
// // Use connect method to connect to the server
// client.connect(function(err) {
//     console.log("Connected successfully to server");
//     const db = client.db(dbName);
//     const collection = db.collection('site');
//     // Insert some documents
//     collection.insertMany([
//         {a : 1}, {a : 2}, {a : 3}
//     ], function(err, result) {
//         console.log("Inserted 3 documents into the collection");
//         client.close();
//     });
// });

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log('数据库已创建');
    var dbo = db.db("xjtlu");
    var myobj = { name: "菜鸟教程", url: "www.runoob" };
    dbo.collection("site").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });
});
