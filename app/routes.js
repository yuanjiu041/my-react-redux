import React from 'react'
import onEnter from 'Lib/on-enter'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Home from 'Pages/home'
import Detail from 'Pages/detail'
import Layout from 'Components/Layout'

export default (
  <Router history={browserHistory}>
    <Route path='/rc' component={Layout}>
      <Route path='home' component={Home} onEnter={onEnter()} />
      <Route path='detail' component={Detail} onEnter={onEnter()} />
    </Route>
  </Router>
)
