var express = require('express');
var app = express();
var shujuku = [
    {
        "biaoti":"我是1号新闻啊",
        "shijian":'2015年9月23日',
        "zuozhe":"考拉",
        "neirong":"<p>1111dsfsfdddsdf</p>"
    },
    {
        "biaoti":"我是2号新闻啊",
        "shijian":'2015年9月23日',
        "zuozhe":"考拉2",
        "neirong":"<p>2222dsfsfdddsdf</p>"
    },
    {
        "biaoti":"我是3号新闻啊",
        "shijian":'2015年9月23日',
        "zuozhe":"考拉3",
        "neirong":"<p>3333dsfsfdddsdf</p>"
    }
];
app.set('view engine','ejs');
app.get("/news/:id",function (req,res) {
   var id = req.params.id;
   res.render("content",shujuku[id])
});
app.listen(3000);