const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

let webpackConfig = require('./../webpack.config')

webpackConfig.entry = [
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server',
  'babel-polyfill',
  path.resolve(__dirname, '../src/app.js')
]

webpackConfig.output = {
  path: path.resolve(__dirname, '../temp'),
  publicPath: '/',
  filename: './js/bundle.js'
}

webpackConfig.devServer = {
  contentBase: path.resolve(__dirname, '../temp'),
  publicPath: '/',
  hot: true,
  historyApiFallback: {
    disableDotRule: true
  },
  https: true
}

webpackConfig.devtool = 'source-map'

webpackConfig.plugins.unshift(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new CopyWebpackPlugin([
    { from: './src/assets/img', to: 'img' },
  ], {
    ignore: [
      'index.html'
    ]
  })
)

module.exports = webpackConfig
