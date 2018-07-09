const Koa = require('koa');
const app = new Koa();
// const main = ctx => {
//     ctx.response.body = 'Hello World';
// };
const main = function(ctx){
    ctx.response.body = 'Hello World2';
};

app.use(main);
app.listen(8888,function () {
    console.log('server is running');
});