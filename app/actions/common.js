import fetch from 'Lib/fetch'
import actionFactory from 'Lib/action-factory'

const promise = (ctx) => fetch('test')
export const commonFetch = actionFactory(promise, 'common')
