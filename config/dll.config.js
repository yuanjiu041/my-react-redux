const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const AssetsPlugin = require('assets-webpack-plugin')
const baseConfig = require('./webpack.base.config');

const vendor = [
  'babel-polyfill',
  'react',
  'react-dom',
  'react-router',
  'redux',
  'react-redux',
  'redux-thunk',
  'ora',
];

const { context } = baseConfig

const config = merge(baseConfig, {
  entry: {
    vendor,
  },

  output: {
    filename: 'vendor_[chunkHash:16].js',
    path: path.resolve(context, 'dist/client')
  },

  plugins: [

    new webpack.DefinePlugin({
      __SERVER__: false
    }),

    new webpack.DllPlugin({
      path: path.resolve(context, 'dist', '[name]-manifest.json'),
      name: 'vendor_[chunkHash:16].js',
    })
  ]
})

module.exports = config;
