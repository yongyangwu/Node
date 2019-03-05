// var express = require("express");
// var app = express();
var path = require("path");
// app.set('views',path.join(__dirname,'views'));
// app.set('view engine','ejs');
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// app.get("/",function (req,res) {
//     res.send("收到")
// });



//graphMagick
// const gm = require('gm');
//imageMagick
// const gm = require('gm').subClass({imageMagick: true});
// var imgObj = gm("./querenhan.jpg").resize(827, 1169)
// const font = "./fontawesome-webfont.ttf";
// let x = 0, y = 0, color = "white";
// var imgObj = gm("./querenhan.jpg").fill(color).font(font,120).drawText(x, y, "硬件百科");
//
// const co = require('co');
// const thunkify = require('thunkify');
// co(function*(){
//     // imgObj就是上面介绍的随便一种操作后的对象
//     // let buffer = yield thunkify(imgObj.toBuffer).call(imgObj, "PNG");
//     yield thunkify(imgObj.write).call(imgObj, './');
// })



// app.listen(3000,()=>{
//     console.log("server is running")

// });

console.log(__dirname)
// var fs = require('fs')
//     , gm = require('gm').subClass({imageMagick: true});
//
// // resize and remove EXIF profile data
// gm("querenhan.jpg").resize(827, 1169).write("resize.jpg", function (err) {
//         if (!err) {
//             console.log('done')
//         }
//     });



var sharp = require('sharp');

// sharp('querenhan.jpg').resize(1654, 2339).toFile('output.jpg', function(err) {
//     if (err) {
//         throw err;
//
//     }
// })

// const TextToSVG = require('text-to-svg');
// const textToSVG = TextToSVG.loadSync();
//
// const attributes = {fill: 'blue', stroke: 'black'};
// const options = {fontSize: 50,anchor:'top', attributes: attributes};
//
// const svg = textToSVG.getSVG('中文', options);
//
// console.log(svg);

var svg ='<svg xmlns="http://www.w3.org/2000/svg" version="1.1"><text fill="blue" font-size="74">I love SVG</text></svg>';
const roundedCorners = Buffer.from(
    svg
);
// const roundedCornerResizer =
    sharp('querenhan.jpg')
        .resize(2481, 3509)
        .overlayWith(roundedCorners)
        .toFile('output.png', function(err) {
            if (err) {
        throw err;
        }
    })
//         .png();

// readableStream
//     .pipe(roundedCornerResizer)
//     .pipe(writableStream);
// output.jpg is a 300 pixels wide and 200 pixels high image
// containing a scaled and cropped version of input.jpg
