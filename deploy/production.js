const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const PreloadWebpackPlugin = require('preload-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const BabelMinifyWebpackPlugin = require('babel-minify-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const HTMLCriticalPlugin = require('html-critical-webpack-plugin')

let webpackConfig = require('../webpack.config')

// webpackConfig.entry = [ 'babel-polyfill', './src/app.js' ]
webpackConfig.entry = './src/app.js'

webpackConfig.output = {
  path: path.resolve(__dirname, '../dist'),
  publicPath: '',
  filename: 'bundle.[chunkhash:8].js',
  chunkFilename: '[name].bundle.[chunkhash:8].js'
}

webpackConfig.module.rules[1].use = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  { loader: 'postcss-loader', options: { config: { path: './postcss.config.js' }, sourceMap: 'inline' } },
  'sass-loader?sourceMap'
]

webpackConfig.module.rules[2].use = [
  MiniCssExtractPlugin.loader,
  'css-loader?sourceMap'
]

webpackConfig.devtool = 'none'

webpackConfig.optimization = {
  splitChunks: {
    chunks: 'all',
    name: false
  },
  runtimeChunk: true,
  splitChunks: {
    cacheGroups: {
      styles: {
        name: 'styles',
        test: /\.css$/,
        chunks: 'all',
        enforce: true
      }
    }
  },
  minimizer: [
    new BabelMinifyWebpackPlugin({
      keepFnName: true,
      keepClassName: true,
      removeConsole: true
    }, {
      mangle: {
        topLevel: true
      },
      comments: false,
      sourceMap: false,
    }),
  ]
}

webpackConfig.plugins.push(
  new webpack.NoEmitOnErrorsPlugin(),
  new CleanWebpackPlugin([
    path.resolve(__dirname, '../dist')
  ], {
    root: path.resolve(__dirname, '..'),
    verbose: true
  }),
  new CopyWebpackPlugin([
    { from: './src/_redirects' }
  ]),
  new webpack.DefinePlugin({
    'process.env': {'NODE_ENV': JSON.stringify(process.env.NODE_ENV)},
    '__DEVTOOLS__': process.env.NODE_ENV == "development"
  }),
  // new BabelMinifyWebpackPlugin({
  //   keepFnName: true,
  //   keepClassName: true,
  //   removeConsole: true
  // }, {
  //   topLevel: true,
  //   comments: false,
  //   sourceMap: null
  // }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css'
  }),
  // new PreloadWebpackPlugin({
  //   include: 'asyncChunks',
  //   rel: 'preload'
  // }),
  new WebpackPwaManifest({
    name: "WWWID PWA React Material UI",
    short_name: "WWWID React",
    description: "PWA to read RSS from medium.com/wwwid",
    start_url: "/?utm_source=pwa",
    icons: [
      {
        src: path.resolve('./src/assets/icons/icon512.png'),
        "sizes": [ 144, 192, 512 ]
      }
    ],
    theme_color: "#3f51b5",
    background_color: "#ffffff",
    display: "standalone"
  }),
  new HTMLCriticalPlugin({
    base: path.resolve(__dirname, '../dist'),
    src: 'index.html',
    dest: 'index.html',
    inline: true,
    minify: true,
    extract: true,
    timeout: 90000,
    dimensions: [{
      height: 640,
      width: 360
    }, {
      height: 1024,
      width: 768
    }, {
      height: 720,
      width: 1280
    }],
    penthouse: {
      blockJSRequest: false
    }
  }),
  new CompressionPlugin({
    test: /\.(js|css)/,
    cache: true
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: './../report.html'
  })
)

module.exports = webpackConfig
