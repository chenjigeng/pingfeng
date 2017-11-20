/* build/webpack.config.js */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
      return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
      nodeModules[mod] = 'commonjs ' + mod;
  });
const config = {
  entry: [
    'webpack/hot/poll?1000',
    './server/index.js'
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  context: __dirname,
  node: {
      __filename: false,
      __dirname: false
  },
  externals: nodeModules,
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      '__isServer__': true,
      '__isClient__': false
    })
  ]
}

module.exports = config