import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Home from 'Pages/home'
import Detail from 'Pages/detail'
import Layout from 'Components/Layout'

const onEnter = (innerOnEnter) => async (nextState, replace, callback) => {
  callback()
}

export default (
  <Router history={browserHistory}>
    <Route path='/rc' component={Layout}>
      <IndexRoute redirect='home' /> 
      <Route path='home' component={Home} onEnter={onEnter()} />
      <Route path='detail' component={Detail} onEnter={onEnter()} />
    </Route>
  </Router>
)
