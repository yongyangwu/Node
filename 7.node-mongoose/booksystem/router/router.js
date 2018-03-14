var Book = require('../models/Book');
exports.showIndex = function (req,res,next) {
    Book.liechusuoyoushu(function (err,result) {
        res.render('index',{
            'tushu':result
        })
    });
};
exports.addbook = function (req,res,next) {
    res.render('addbook');
};
exports.doadd = function (req,res,next) {
    console.log(req.query);
    Book.create(req.query,function(err){
      if(err){
          res.send("失败");
      }
      res.send("保存成功");
    })
};
exports.edit = function (req,res,next) {
    Book.finfBookByIf(req.query.id,function (err,result) {
        res.render('edit');
    });
};
