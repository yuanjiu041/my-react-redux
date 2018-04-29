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
    const { data } = this.props

    return <div>{data}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.common.__PAGEDATA__
  }
}

export default connect(mapStateToProps)(Home)
