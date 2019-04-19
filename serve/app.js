const Koa = require('koa');
const controller = require('./controller');
const bodyParser = require('koa-bodyparser');
// 解决跨域问题
const cors = require('koa2-cors');

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

app.use(cors());
app.use(bodyParser());
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');