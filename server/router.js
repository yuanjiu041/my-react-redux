import Router from 'koa-router'
import fs from 'fs'
import serverRender from './serverRender'
import { apiPrefix } from 'Config/common'

export default () => {
  const router = new Router()

  const res = require.context('Controllers')
  res.keys().forEach(mod => {
    Object.values(res(mod)).forEach(item => {
      router[item.method](`${apiPrefix}/${item.route}`, item)
    })
  })

  router.get('*', async (ctx, next) => {
    await serverRender(ctx, next)
  })

  return router
}
