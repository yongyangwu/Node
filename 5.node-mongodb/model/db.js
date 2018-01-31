//这个模块封装了所以对数据库的常用操作
//不管数据库什么操作 都是先连接数据库 所以我们把数据库封装成为函数
var MongoClient = require('mongodb').MongoClient;
function _connectionDB(callback){
    var url = 'mongodb://localhost:27017/myproject';
    MongoClient.connect(url,function (err,db) {
        console.log("连接数据库成功");
        callback(err,db);
    })
}
// _connectionDB(function (err,db) {
//     // 表示连接成功后做的事情
//
// });

//插入数据
exports.insertOne = function (collectionName,json,callback) {
    _connectionDB(function (err,db) {
        db.db("myproject").collection(collectionName).insertOne(json,function (err,result) {
            callback(err,result);
            db.close();
        })
    })
};
//查找数据 找到所有数据
exports.find = function(collectionName,json,callback){
    // var json = json || {};
    var result = [];
    if(arguments.length != 3){
        callback("find函数接受3个参数",null);
        return;
    }
    _connectionDB(function (err,db){
        var cursor = db.db("myproject").collection(collectionName).find(json);
        cursor.each(function(err,doc){
            if(err){
                callback(err,null)
            }
            if(doc != null){
                result.push(doc);
                // console.log(doc)
            }else{
                callback(null,result);
            }
        })

    })

};