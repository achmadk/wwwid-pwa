const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const PreloadWebpackPlugin = require('preload-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const BabelMinifyWebpackPlugin = require('babel-minify-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

let webpackConfig = require('../webpack.config')

let extractSCSS = new ExtractTextPlugin({ filename: '[contenthash].css', allChunks: true })
let extractCSS = new ExtractTextPlugin({ filename: '[contenthash].css', allChunks: true })

webpackConfig.entry = [ 'babel-polyfill', './src/app.js' ]

webpackConfig.output = {
  path: path.resolve(__dirname, '../dist'),
  publicPath: '',
  filename: 'bundle.[chunkhash:8].js',
  chunkFilename: '[name].bundle.[chunkhash:8].js',
  libraryTarget: 'umd',
  jsonpFunction:'webpackJsonp'
}

webpackConfig.module.rules[1].use = extractSCSS.extract({
  fallback: 'style-loader',
  use: [
    'css-loader',
    { loader: 'postcss-loader', options: { config: { path: './postcss.config.js' }, sourceMap: 'inline' } },
    'sass-loader?sourceMap'
  ]
})

webpackConfig.module.rules[2].use = extractSCSS.extract({
  fallback: 'style-loader',
  use: [
    'css-loader?sourceMap',
  ]
})

webpackConfig.devtool = 'none'

webpackConfig.plugins.push(
  new webpack.NoEmitOnErrorsPlugin(),
  new CleanWebpackPlugin([path.resolve(__dirname, '../dist')], {
    root: path.resolve(__dirname, '..'),
    verbose: true
  }),
  new webpack.DefinePlugin({
    'process.env': {'NODE_ENV': JSON.stringify(process.env.NODE_ENV)},
    '__DEVTOOLS__': process.env.NODE_ENV == "development"
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.bundle.[chunkhash:8].js',
    minChunks: function({resource}) {
      return resource &&
      resource.includes('node_modules') &&
      resource.match(/\.js$/)
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: "manifest",
    filename: 'manifest.bundle.js',
    minChunks: Infinity
  }),
  new webpack.optimize.CommonsChunkPlugin({
    chunks: [ 'home', 'about', 'products', 'menu', 'faq', 'contact' ],
    async: true
  }),
  new webpack.optimize.CommonsChunkPlugin({
    chunks: [ 'home', 'products' ],
    async: true
  }),
  new webpack.optimize.CommonsChunkPlugin({
    chunks: [ 'menu', 'products' ],
    async: true
  }),
  new BabelMinifyWebpackPlugin({
    keepFnName: true,
    keepClassName: true,
    removeConsole: true
  }, {
    topLevel: true,
    comments: false,
    sourceMap: null
  }),
  extractSCSS,
  new CompressionPlugin({
    test: /\.(js|css)/,
    cache: true
  }),
  // new HTMLCriticalPlugin({
  //   base: path.resolve(__dirname, '../dist'),
  //   src: 'index.html',
  //   dest: 'index.html',
  //   inline: true,
  //   minify: true,
  //   timeout: 90000,
  //   dimensions: [{
  //     height: 640,
  //     width: 360
  //   }, {
  //     height: 1024,
  //     width: 768
  //   }, {
  //     height: 720,
  //     width: 1280
  //   }, {
  //     height: 1080,
  //     width: 1920
  //   }],
  //   penthouse: {
  //     blockJSRequest: false
  //   }
  // }),
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: './../report.html'
  })
)

module.exports = webpackConfig
