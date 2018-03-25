var express  = require('express');
var bodyParser = require('body-parser');
var fs  = require('fs');
var app = express();
var multer  = require('multer');
var createFolder = function(folder){
    try{
        fs.accessSync(folder);
    }catch(e){
        fs.mkdirSync(folder);
    }
}
var uploadFolder = "./upload/";-
createFolder(uploadFolder);
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage })
app.use(bodyParser.urlencoded({extended:false}));
app.get('/',function(req,res){
    console.dir(req.query);
    res.send("home page: "+ req.query.find)
});
app.post('/',function(req,res){
    console.log(req.body);
    res.send('ok')
});
// var jsonParser = bodyParser.json();
app.get('/form',function(req,res){
    var form = fs.readFileSync('./form.html',{encoding:'utf8'});
    res.send(form)
});
app.post('/uploads',upload.single('logo'),function(req,res){
    console.dir(req.file)
    res.send({'ret_code':0})
});
app.listen(3000,function(){
    console.log("server is running ")
})
