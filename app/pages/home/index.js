import React from 'react'
import page from 'Lib/page'
import { commonFetch } from 'Actions/common'
import { connect } from 'react-redux'
import styles from './styles.less'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

@page({
  title: 'home',
  fetchActions: [ commonFetch ]
})
@withStyles(styles)
class Home extends React.Component {
  render () {
    const { data } = this.props

    return <div className={styles['content']}>{data}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.common.__PAGEDATA__
  }
}

export default connect(mapStateToProps)(Home)
