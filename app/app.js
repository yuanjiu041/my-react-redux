import React from 'react'
import configureStore from './store'
import { Provider } from 'react-redux'
import routes from './routes'
import { CHANGE_PAGE_TITLE } from 'Actions/action-types'
import ReactDOM from 'react-dom'
import fetch from 'Lib/fetch'

const store = configureStore(window.__APP__.__REDUX_STATE__)

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
)

// 没有redux的浏览器插件，绑定到window上方便控制台调试，o(*￣︶￣*)o
window.store = store
