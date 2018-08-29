const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

let name = process.env.NODE_ENV ? "[hash].[ext]" : 'font/[hash].[ext]'

// let template = process.env.NODE_ENV === 'production'
//   ? '!!prerender-loader?string!./src/index.html'
//   : './src/index.html'
let template = './src/index.html'

module.exports = {
  entry: './src/app.js',
  mode: process.env.NODE_ENV == "production" ? "production" : "development",
  performance: { hints: false },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        query: { cacheDirectory: true }
      }]
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        { loader: 'postcss-loader', options: { config: { path: './postcss.config.js' } } },
        'sass-loader'
      ]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ]
    }, {
      test: /.*\.(png|jpg|svg)$/i,
      use: [{
        loader: 'url-loader',
        options: { name: process.env.NODE_ENV ? '[hash].[ext]' : './img/[hash].[ext]', limit: 5120 }
      }, {
        loader: 'image-webpack-loader',
        options: { bypassOnDebug: true }
      }]
    }, {
      test:  /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
      use: [{
        loader: 'file-loader',
        options: { name }
      }]
    }, {
      test: /\.woff(2)?(\?[\s\S]+)?$/,
      use: [{
        loader: 'url-loader',
        options: { limit: 10000, mimetype: 'application/font-woff', name }
      }]
    }, {
      enforce: 'pre',
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
          loader: 'standard-loader',
          options: {
            error: false,
            snazzy: true
          }
      }]
    }]
  },
  resolve: {
    modules: [__dirname, 'node_modules', 'src'],
    extensions: ['.js'],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer()
      ],
        sassLoader: { includePaths: path.resolve(__dirname, 'src', 'assets', 'css-preprocessors') }
      }
    }),
    new HtmlWebpackPlugin({
      template,
      inject: 'body',
      hash: process.env.NODE_ENV == "production",
      minify: {
        removeComments: true
      }
    }),
    new WorkboxPlugin.GenerateSW({
      importWorkboxFrom: 'local',
      clientsClaim: true,
      skipWaiting: true,
      include: [
        /\.html$/,
        /\.js$/,
        /\.css$/,
        /\.woff$/,
        /\.woff2$/,
        /\.json$/,
        /\.webmanifest$/,
        /\.gz$/
      ]
    }),
  ]
}
