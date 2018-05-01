import React from 'react'
import page from 'Lib/page'
import styles from './styles.less'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

@page({
  title: 'detail'
})
@withStyles(styles)
export default class extends React.Component {
  render () {
    return <div className={styles['test']}>detail</div>
  }
}
