const koa = require("koa");
const app = new koa();
app.use(async (ctx,next)=>{
   ctx.response.body={
       url:ctx.request.url,
       query:ctx.request.query,
   };
})
app.listen(3000,()=>{
    console.log("server is running at 3000")
})