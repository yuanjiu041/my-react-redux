import React from 'react'
import rem from 'Lib/rem'
import serialize from 'serialize-javascript'
import baseStyle from 'Common/main'
import { getCss } from 'Lib/universal-css'

export default class extends React.Component {
  render () {
    const { title, children } = this.props
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
          <script src='/app.js'></script>
        </body>
      </html>
    )
  }
}