import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from '../app/routes'
import Html from 'Components/Html'

export default async (ctx, next) => {
  const { redirectLocation, renderProps } = await _match({ routes, location: ctx.url })
  if (redirectLocation) {
    ctx.redirect(redirectLocation.pathname + redirectLocation.search)
  } else if (renderProps) {
    await renderCmp(ctx, next, renderProps)
  } else {
    await next()
  }
}

const _match = (location) => {
  return new Promise((resolve, reject) => {
    match(location, (err, redirectLocation, renderProps) => {
      if (err) {
        console.log(err)
        return reject(err)
      }
      resolve({
        redirectLocation,
        renderProps
      })
    })
  })
}

const renderCmp = async (ctx, next, renderProps) => {
  const children = renderToString(
    <div>
      <RouterContext {...renderProps} />
    </div>
  )
  const htmlProps = {
    title: 'hahaha',
    children
  }

  const html = renderToStaticMarkup(<Html {...htmlProps} />)
  ctx.status = 200
  ctx.body = `<!DOCTYPE html>${html}`

  await next()
}