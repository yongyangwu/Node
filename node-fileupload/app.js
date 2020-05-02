var express = require('express')
var multer  = require('multer')
var path =require('path')
// var upload = multer({ dest: 'uploads/' })
var app = express();
// req.files[0].path + pathLib.parse(req.files[0].originalname).ext
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname+'/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + path.parse(file.originalname).ext)
    }
})
var upload = multer({ storage: storage });
app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file 是 `avatar` 文件的信息
    // req.body 将具有文本域数据，如果存在的话
})

app.listen(3000,()=>{
    console.log("server is running 3000")
});