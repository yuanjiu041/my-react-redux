const path = require('path')
const webpack = require('webpack')

const contextPath = path.resolve(__dirname, '..')

module.exports = {
  devtool: "source-map",

  context: contextPath,

  output: {
    path: path.resolve(contextPath, 'dist')
  },

  resolve: {
    extensions: ['.js', '.css', '.less', 'json'],
    alias: {
      Pages: path.resolve(contextPath, 'app/pages'),
      Components: path.resolve(contextPath, 'app/components'),
      Lib: path.resolve(contextPath, 'app/lib'),
      Common: path.resolve(contextPath, 'app/common'),
      Resources: path.resolve(contextPath, 'app/resources'),
      Actions: path.resolve(contextPath, 'app/actions'),
      Controllers: path.resolve(contextPath, 'apis/controllers'),
      Config: path.resolve(contextPath, 'config')
    }
  },
  
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.jsx?$/,
        // exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: 'isomorphic-style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true, // 启用/禁用 css-modules 模式
              localIdentName: '[hash:base64:5]',
              minimize: true
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga|ico|jpg|jpeg|png|gif|eot|otf|webp|svg)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  }
}
