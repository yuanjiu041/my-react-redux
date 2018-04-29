import { DATA_FETCHING, DATA_FETCH_SUCCESS, DATA_FETCH_ERROR } from 'Actions/action-types'

// 异步action，获取页面数据并dispatch
const actionFactory = (promiseTask, stateKey) => {
  if (!stateKey)
    throw new Error('no stateKey!')
  return (ctx) => async (dispatch, getState) => {
    dispatch({ type: DATA_FETCHING })

    try {
      const res = await promiseTask(ctx)
      if (res.code === 0) {
        dispatch({
          type: DATA_FETCH_SUCCESS,
          stateKey: stateKey,
          data: res.data
        })
      } else {
        dispatch({
          type: DATA_FETCH_ERROR,
          stateKey: stateKey,
          error: res.error
        })
      }
    } catch (err) {
      dispatch({
        type: DATA_FETCH_ERROR,
        stateKey: stateKey,
        error: err
      })

      throw err
    }
  }
}

export default actionFactory
