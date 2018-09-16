const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.base.config')
const nodeExternals = require('webpack-node-externals')

const { context } = baseConfig

module.exports = merge(baseConfig, {
  entry: [
    'babel-polyfill',
    './server/server'
  ],

  output: {
    filename: 'server.js',
    path: path.resolve(context, 'dist/server')
  },

  target: 'node',

  externals: [nodeExternals()], // node端有的模块不应该被打包，例如'fs'

  node: {
    fs: 'empty',
    __dirname: true,
    __filename: true,
    console: true,
    global: true,
    process: true,
    path: true,
    http: true
  },

  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: true
    })
  ]
})
