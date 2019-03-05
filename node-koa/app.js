const Koa = require('koa');
const app = new Koa();

app.listen(8888,function () {
    console.log('server is running');
});