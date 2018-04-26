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
    extensions: ['.js', '.css', '.less'],
    alias: {
      Pages: path.resolve(contextPath, 'app/pages'),
      Components: path.resolve(contextPath, 'app/components')
    }
  },
  
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // exclude: /node_modules/,
        loader: 'babel-loader'
      }/* ,
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      }*/
    ]
  }
}