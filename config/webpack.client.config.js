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
    new HtmlWebpackPlugin({
      filename: 'app.html',
      template: './app/app.html',
      chunks: ['app']
    })
  ]
})
