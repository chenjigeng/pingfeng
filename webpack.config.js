/* build/webpack.config.js */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = {
  entry: './app/index.tsx',
  output: {
    filename: '[name].[chunkhash].js',
    path: '/public',
    publicPath: '/assets'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css") //提取出来的样式放在style.css文件中
  ],
  devtool: 'eval'
}

module.exports = config