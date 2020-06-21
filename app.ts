import * as Koa from 'koa'
const  app = new Koa()

//记录hello从开始到写完所用时长

app.use(async (ctx,next)=>{
    await next();
    const time = ctx.response.get('X-Response-Time');
    console.log(`${ctx.url}-${time}`);
})

app.use(async (ctx,next)=>{
    const start = Date.now()
    await next()
    const time = Date.now() - start;
    ctx.set('X-Response-Time',`${time}ms`);
})


app.use(async (ctx)=>{
    ctx.body = 'hello world'
})

app.listen(3000)