//这个模块里面封装了所有对数据库的常用操作
//不管数据库什么操作都是先连接数据库 所以我们可以把连接数据库封装成为函数

var MongoClient = require("mongodb").MongoClient;

function _connectDB(callback){
    var url = "mongodb://localhost:27017/demo1";
    MongoClient.connect(url,function (err,db) {
        //回调函数表示连接成功做的事情，db参数就是连接上的数据库实体
        if(err){
            console.log("数据库连接失败");
            return;
        }
        // assert.equal(null,err);
        console.log("数据库连接成功");
        callback(err,db);
    })
}

//插入数据
exports.insertOne = function (collectionName,json,callback) {
    _connectDB(function (err,db) {
        if(err){
            callback(err,db)
            return;
        }
        db.collection(collectionName).insertOne(json,function (err,result) {
           callback(err,result);
           db.close();
        })
    })
};
//查找数据，找到所有数据
exports.find = function (collectionName,json,callback) {
    var result =[];
    if(arguments.length !=3){
        callback("find函数接受3个参数",null);
        return;
    }
    _connectDB(function (err,db) {
        var cursor = db.collection(collectionName).find(json);
        cursor.each(function (err,doc) {
            if(err){
                callback(err,null)
                return;
            }
            if(doc!=null){
                result.push(doc);
            }else{
                callback(null,result);
            }
        })
    })
};