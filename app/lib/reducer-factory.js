import { DATA_FETCH_SUCCESS } from 'Actions/action-types'

export default (reducer, stateKey) => {
  if (typeof reducer !== 'function')
    throw new Error('reducer must be a function')

  // 对reducer进行一层封装，处理DATA_FETCH_SUCCESS的情况
  return (state = {}, action) => {
    let nextState = reducer(state, action)
    if (action.type === DATA_FETCH_SUCCESS && action.stateKey === stateKey) {
      nextState = {
        ...nextState,
        __PAGEDATA__: action.data
      }
    }

    // 没有浏览器插件，这个将就一下o(*￣︶￣*)o
    console.log(action)
    console.log(nextState)

    return nextState
  }
}
