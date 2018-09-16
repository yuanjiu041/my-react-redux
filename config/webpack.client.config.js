const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.base.config')
const AssetsPlugin = require('assets-webpack-plugin')
const path = require('path')

const { context } = baseConfig

module.exports = merge(baseConfig, {

  entry: {
    app: ['./app/app.js'],
    vendor: ['babel-polyfill', 'react', 'react-dom', 'react-router', 'redux', 'react-redux', 'redux-thunk']
  },

  output: {
    filename: '[name]_[chunkhash:16].js',
    path: path.resolve(context, 'dist/client')
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
    }),

    new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor'],
    }),

    new webpack.optimize.UglifyJsPlugin(),

    new CleanWebpackPlugin(
      ['./dist/client'],
      context
    )
  ]
})
