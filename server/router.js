import Router from 'koa-router'
import fs from 'fs'
import serverRender from './serverRender'
import { apiPrefix } from 'Config/common'

export default () => {
  const router = new Router()

  const res = require.context('Controllers')

  // api接口
  res.keys().forEach(mod => {
    Object.values(res(mod)).forEach(item => {
      router[item.method](`${apiPrefix}/${item.route}`, item)
    })
  })

  // 页面接口
  router.get('*', async (ctx, next) => {
    await serverRender(ctx, next)
  })

  return router
}
