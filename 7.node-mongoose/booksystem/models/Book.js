var mongoose = require('mongoose');
var db = require('./db');
var bookSchema = new mongoose.Schema({
    name:{type: String},
    author:{type:String},
    price:{type:Number}
});
bookSchema.statics.liechusuoyoushu =function (callback) {
    this.model('Book').find({ },callback);
};
//根据_id 查找图书
bookSchema.statics.findBookById =function (id,callback) {
    this.model('Book').find({"_id":ObjectId(id)},callback);

    
}
//模型需要用到Schema
var bookModel = db.model('Book',bookSchema);
module.exports = bookModel;