var express =require('express');
var router = require('./router/router');


var app = express();
app.get('/',router.showIndex);
app.set('view engine','ejs');
app.get('/addbook',router.addbook);
app.get('/doadd',router.doadd);
app.get('/edit',router.edit);
app.listen(3000);