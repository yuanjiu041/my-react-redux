const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {

  entry: {
    app: ['babel-polyfill', './app/app.js']
  },

  output: {
    filename: 'app.js'
  },

  plugins: [
    // 取消HTML模板，通过用react component来渲染页面
    /* new HtmlWebpackPlugin({
      filename: 'app.html',
      template: './app/app.html',
      chunks: ['app']
    }), */

    new webpack.DefinePlugin({
      __SERVER__: false
    })
  ]
})
