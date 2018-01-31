var MongoClient = require('mongodb').MongoClient;

// Connection URL
var url = 'mongodb://localhost:27017/myproject';

MongoClient.connect(url, function(err, db) {
    if(err){
        console.log("连接数据库失败");
    }else{
        console.log("Connected successfully to server");
        db.collection("demo1").insertOne({
            "number":"bob"
        },function (err,result) {
            console.log(err);
        });
        db.close();
    }

});