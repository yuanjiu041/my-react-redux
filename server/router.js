import Router from 'koa-router'

export default () => {
  const router = new Router()

  router.get('/', async (ctx) => {
    ctx.body = 'hh'
  })

  router.all('*', async (ctx) => {
    ctx.body = 'ok'
  })

  return router
}
