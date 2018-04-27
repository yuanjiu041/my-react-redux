import React from 'react'
import { Link } from 'react-router'
import { insertCss } from 'Lib/universal-css'
import PropTypes from 'prop-types'
import Header from 'Components/Header'

class Layout extends React.Component {
  static propTypes = {}

  static childContextTypes = {
    insertCss: PropTypes.func
  }

  getChildContext () {
    return {
      insertCss
    }
  }

  render () {
    return (
      <div>
        <Header />
        <div>
          <Link to={'/rc/home'}>HOME</Link>
          <Link to={'/rc/detail'}>DETAIL</Link>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Layout
