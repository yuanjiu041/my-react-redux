const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.base.config')
const AssetsPlugin = require('assets-webpack-plugin')
const path = require('path')

module.exports = merge(baseConfig, {

  entry: {
    app: ['babel-polyfill', './app/app.js'],
    vendor: ['react', 'react-dom', 'react-router', 'redux', 'react-redux', 'redux-thunk']
  },

  output: {
    filename: '[name].js'
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
    }),

    new AssetsPlugin({
      path: path.resolve('./dist'),
      filename: 'assets.json',
      prettyPrint: true
    })
  ]
})
