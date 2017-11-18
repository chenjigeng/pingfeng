const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = "asdasda";
})

app.listen(8000);