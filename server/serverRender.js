import React from 'react'
import { Provider } from 'react-redux'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from '../app/routes'
import configureStore, { getStore } from '../app/store'
import Html from 'Components/Html'

export default async (ctx, next) => {
  // 先创建store，在onEnter里需要用到store
  const store = configureStore()
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
  const store = getStore()

  const { components } = renderProps
  let fetchTasks = []

  for (let component of components) {
    // connect包裹
    if (component && component.WrappedComponent && component.WrappedComponent.fetch) {
      const cmpFetchs = component.WrappedComponent.fetch(ctx, store.dispatch)
      fetchTasks = fetchTasks.concat(cmpFetchs)
    }
  }

  let title

  for (let component of components) {
    if (component && component.WrappedComponent) {
      title = component.__title__ || component.WrappedComponent.__title__ || 'HOME'
    }
  }

  await Promise.all(fetchTasks)

  const children = renderToString(
    <Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>
  )

  const htmlProps = {
    title,
    app: {
      __REDUX_STATE__: store.getState()
    },
    children
  }

  const html = renderToStaticMarkup(<Html {...htmlProps} />)
  ctx.status = 200
  ctx.body = `<!DOCTYPE html>${html}`

  await next()
}
