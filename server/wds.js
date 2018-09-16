const webpack = require('webpack')
const path = require('path')
const webpackDevServer = require('webpack-dev-server')
const wbConfig = require('../config/webpack.config.js')

const compiler = webpack(wbConfig)

compiler.plugin('compile', () => {
  console.log('webpack compiling...')
})

compiler.watch({
  aggregateTimeout: 50
}, (error, stats) => {
  if (error || stats.hasErrors()) {
    return console.log('webpack build failed', error)
  }

  console.log('compile success!!!')
})
