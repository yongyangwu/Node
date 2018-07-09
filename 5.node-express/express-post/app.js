var express = require("express");
var bodyParser = require("body-parser");
var app = express();
// 1.parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// 2.parse application/json
app.use(bodyParser.json())

// var jsonParser = bodyParser.json()

//3.同时处理两种情况的
// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
//
// // POST /login gets urlencoded bodies
// app.post('/', urlencodedParser, function (req, res) {

// })

app.post("/",function (req,res) {
    console.dir(req.body);
    res.send(req.body)

});

app.listen(3000,()=>{
    console.log("server is running")
});