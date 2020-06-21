import * as Koa from 'koa'
const  app = new Koa()
/**
 * koa 的执行过程是一个 U 型的模型
 * 所以下面代码的执行顺序是：
 * 先执行第10行，再执行第16行，最后回过来再执行第12行（见页面输出）
 */

app.use(async (ctx,next)=>{
    ctx.body = 'hello'
    await next()
    ctx.body += ' callback'
})

app.use(async (ctx)=>{
    ctx.body += ' koa'
})

app.listen(3000)