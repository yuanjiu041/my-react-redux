import koa from 'koa'
import path from 'path'
import koaBody from 'koa-body'
import router from './router'
import koaStatic from 'koa-static'

const app = new koa()
const myRouter = router()

app.use(koaBody())

app.use(koaStatic(path.join(__dirname, '../dist')))

app.use(myRouter.routes())
app.use(myRouter.allowedMethods())

app.listen(3000, () => {
  console.log('listen localhost:3000!')
})
