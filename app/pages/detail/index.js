import React from 'react'
import styles from './styles.less'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

@withStyles(styles)
export default class extends React.Component {
  render () {
    return <div className={styles['test']}>detail</div>
  }
}
