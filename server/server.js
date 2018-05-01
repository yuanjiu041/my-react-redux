import koa from 'koa'
import path from 'path'
import koaBody from 'koa-body'
import router from './router'
// 移除，改用自己实现的
// import koaStatic from 'koa-static'

const staticMid = require('./middleware/static')

const app = new koa()
const myRouter = router()

app.use(koaBody())

// 静态资源中间件
app.use(staticMid({
  rule: '/static/*',
  filePath: path.join(__dirname, '../dist')
}))

app.use(myRouter.routes())
app.use(myRouter.allowedMethods())

app.listen(3000, () => {
  console.log('listen localhost:3000!')
})
