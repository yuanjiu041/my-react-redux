import reducerFactory from 'Lib/reducer-factory'
import { CHANGE_PAGE_TITLE } from 'Actions/action-types'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_PAGE_TITLE:
      return {
        ...state,
        title: action.value
      }
    default:
      return state
  }
}

export default reducerFactory(reducer, 'common')
