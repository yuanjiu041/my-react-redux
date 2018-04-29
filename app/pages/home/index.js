import React from 'react'
import page from 'Lib/page'
import { commonFetch } from 'Actions/common'
import { connect } from 'react-redux'

@page({
  title: 'home',
  fetchActions: [ commonFetch ]
})
class Home extends React.Component {
  render () {
    return <div>home</div>
  }
}

export default connect()(Home)
