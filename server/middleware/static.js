const send = require('koa-send')
const path = require('path')

// 自己实现一个简易的koa静态文件中间件
const staticMid = (options) => {
  const { rule, filePath } = options
  const ruleReg = stringPathToReg(rule)

  return async (ctx, next) => {
    let done = false
    const rlt = ctx.url.match(ruleReg)
    if (ctx.method === 'GET' || ctx.method === 'HEAD') {
      if (rlt !== null) {
        await send(ctx, path.join(filePath, rlt[1])).catch(async (err) => {
          await next()
        })
        done = true
      }
    }

    if (!done) {
      await next()
    }
  }
}

module.exports = staticMid

function stringPathToReg (path) {
  const pathArray = path.split('/')
  let regString = '^'
  let pathSegment
  for (let i = 0; i < pathArray.length; i++) {
    pathSegment = pathArray[i]
    if (pathSegment === '') {
      continue
    } else if (pathSegment.indexOf(':') === 0) {
      regString += '\/([^\/]*)'
    } else if (pathSegment === '*') {
      regString += '(\/?.*)'
      break // * 号为结束
    }else {
      regString +='\/' + pathSegment
    }
  }

  regString += '$'

  return new RegExp(regString, 'i')
}