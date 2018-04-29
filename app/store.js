import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

let store
let modules = {}

// 通过require.context批量导入reducer
const req = require.context('./reducers', true, /^\.\/[\w-]+\.js$/)
req.keys().forEach(mod => {
  const name = mod.match(/^\.\/([\w-]+)\.js$/)[1]
  modules[name] = req(mod).default
})

const reducers = combineReducers(modules)

// 添加thunk插件，支持异步action
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)

export default function configureStore (initialState = {}) {
  store = createStoreWithMiddleware(reducers, initialState)
  return store
}

export const getStore = () => {
  if (!store)
    throw new Error('no store')
  return store
}
