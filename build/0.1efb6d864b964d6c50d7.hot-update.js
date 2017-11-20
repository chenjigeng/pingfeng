exports.id = 0;
exports.modules = {

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar path = __webpack_require__(38);\nvar CleanWebpackPlugin = __webpack_require__(39);\nvar HtmlWebpackPlugin = __webpack_require__(40);\nvar ExtractTextPlugin = __webpack_require__(41);\nvar webpack = __webpack_require__(14);\n\nmodule.exports = _defineProperty({\n  entry: {\n    app: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index']\n  },\n  devtool: 'source-map',\n  resolve: {\n    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']\n  },\n  output: {\n    filename: '[name].[hash].js',\n    path: path.resolve(__dirname, 'dist'),\n    publicPath: '/'\n  },\n  node: {\n    fs: \"empty\"\n  },\n  module: {\n    loaders: [{\n      test: /\\.js$/,\n      loader: 'babel-loader',\n      exclude: /node_modules/,\n      include: ['./server', './src']\n    }, {\n      test: /\\.tsx?$/,\n      loader: 'ts-loader'\n    }, {\n      test: /\\.css$/,\n      use: ExtractTextPlugin.extract({\n        fallback: 'style-loader',\n        use: ['css-loader']\n      })\n    }, {\n      test: /\\.less$/,\n      use: ExtractTextPlugin.extract({\n        fallback: 'style-loader',\n        use: ['css-loader', 'less-loader']\n      })\n    }]\n  },\n  plugins: [new CleanWebpackPlugin(['dist']), new HtmlWebpackPlugin({\n    title: 'Production',\n    template: './index.html'\n  }), new ExtractTextPlugin(\"style.css\"), new webpack.optimize.CommonsChunkPlugin({\n    name: 'common'\n  }), new webpack.optimize.OccurrenceOrderPlugin(), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n}, 'devtool', 'eval');\n\n//////////////////\n// WEBPACK FOOTER\n// ./webpack.common.js\n// module id = 37\n// module chunks = 0\n\n//# sourceURL=webpack:///./webpack.common.js?");

/***/ })

};