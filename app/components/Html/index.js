import React from 'react'
import PropTypes from 'prop-types'
import rem from 'Lib/rem'
import serialize from 'serialize-javascript'
import baseStyle from 'Common/main'
import { getCss } from 'Lib/universal-css'

export default class extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    app: PropTypes.object
  }

  render () {
    const { title, children, app } = this.props
    const css = getCss()
    
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>{title}</title>
          <style dangerouslySetInnerHTML={{ __html: baseStyle._getCss() }}></style>
          <style dangerouslySetInnerHTML={{ __html: [...css].join('') }}></style>
          <script dangerouslySetInnerHTML={{ __html: `!(${serialize(rem)})(this)`}} />
        </head>
        <body>
          <div id='app' dangerouslySetInnerHTML={{ __html: children }} />
          <script dangerouslySetInnerHTML={{ __html:  `window.__APP__=${serialize(app)}` }} />
          <script src='/static/vensor.js' />
          <script src='/static/app.js' />
        </body>
      </html>
    )
  }
}
