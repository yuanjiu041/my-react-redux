import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import styles from './styles.less'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

@withStyles(styles)
class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string
  }

  render () {
    const { title = '我的', renderLeft, renderRight } = this.props
    return (
      <div className={styles['container']}>
        {
          renderLeft ? 
            <div className={styles['left']}>
            { typeof renderLeft === 'function' ? renderLeft() : renderLeft }
            </div> : <div className={styles['left-icon']} onClick={() => browserHistory.goBack()} /> // 默认渲染返回按钮
        }
        {title}
        {
          renderRight
            ? <div className={styles['right']}>
              { typeof renderRight === 'function' ? renderRight() : renderRight }
              </div>
            : null // 默认不渲染
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.common.title
  }
}

export default connect(mapStateToProps)(Header)
