const webpack = require('webpack')
const path = require('path')
const ora = require('ora')
const webpackDevServer = require('webpack-dev-server')
const dllConfig = require('../config/dll.config');

function compileDll(dllconfig) {
  return new Promise((resolve, reject) => {
    const spinner = ora('webpack dll...\n').start()
    const compiler = webpack(dllconfig)
    compiler.run((err, stats) =>{
      if (err) {
        spinner.fail(err)
        return reject(err)
      }
      spinner.succeed('dll compile success\n')
      resolve(stats)
    })
  })
}

async function start() {
  await compileDll(dllConfig)

  const wbConfig = require('../config/webpack.config.js')

  const compiler = webpack(wbConfig)

  compiler.watch({
    aggregateTimeout: 50
  }, (error, stats) => {
    if (error || stats.hasErrors()) {
      return console.log('webpack build failed\n', error)
    }

    console.log('compile success!!!')
  })
}

start()
