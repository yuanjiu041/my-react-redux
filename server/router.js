import Router from 'koa-router'
import fs from 'fs'
import serverRender from './serverRender'

export default () => {
  const router = new Router()

  router.get('*', async (ctx, next) => {
    await serverRender(ctx, next)
  })

  return router
}
