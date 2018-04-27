import React from 'react'
import styles from './styles.less'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

@withStyles(styles)
export default class extends React.Component {
  render () {
    const { title = '我的', renderLeft, renderRight } = this.props

    return (
      <div className={styles['container']}>
        {
          renderLeft ? 
            <div className={styles['left']}>
            { typeof renderLeft === 'function' ? renderLeft() : renderLeft }
            </div> : <div className={styles['left-icon']} onClick={() => console.log('0')} />
        }
        {title}
        {
          renderRight
            ? <div className={styles['right']}>
              { typeof renderRight === 'function' ? renderRight() : renderRight }
              </div>
            : null
        }
      </div>
    )
  }
}
