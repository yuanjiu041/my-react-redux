import { getStore } from '../store'
import { CHANGE_PAGE_TITLE } from 'Actions/action-types'

export default (innerOnEnter) => async (nextState, replace, callback) => {
  let pageComponent
  for (let route of nextState.routes) {
    // 通过__title__属性确定pageComponent
    if (route.component && route.component.__title__) {
      pageComponent = route.component
      break
    }
  }

  if (!pageComponent) {
    throw new Error('no pageComponent')
  }

  const store = getStore()
  // 切换header组件里面的title
  store.dispatch({
    type: CHANGE_PAGE_TITLE,
    value: pageComponent.__title__
  })
  
  if (!__SERVER__) {
    // 切换页面本身的title
    document.title = pageComponent.__title__

    const noFetch =  +nextState.location.query['no_fetch']
    if (!noFetch) {
      // 获取页面需要的数据
      const fetchTask = pageComponent.fetch(null, store.dispatch)
      await Promise.all(fetchTask)
    }
  }

  callback()
}