exports.id = 0;
exports.modules = {

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

eval("var http = __webpack_require__(7);\r\n\r\nvar express = __webpack_require__(8);\r\n\r\nvar app = express();\r\n// var hotModule = require('./hotModule');\r\n\r\napp.use(__webpack_require__(9)('short'));\r\n\r\n// ************************************\r\n// This is the real meat of the example\r\n// ************************************\r\n(function() {\r\n\r\n  // Step 1: Create & configure a webpack compiler\r\n  var webpack = __webpack_require__(1);\r\n  var webpackConfig = __webpack_require__(10);\r\n  var compiler = webpack(webpackConfig);\r\n\r\n  // Step 2: Attach the dev middleware to the compiler & the server\r\n  app.use(__webpack_require__(17)(compiler, {\r\n    noInfo: true, \r\n    publicPath: webpackConfig.output.publicPath,\r\n    reload: true,\r\n    stats: { colors: true },\r\n  }));\r\n\r\n  // Step 3: Attach the hot middleware to the compiler & the server\r\n  app.use(__webpack_require__(18)(compiler, {\r\n    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000\r\n  }));\r\n})();\r\n\r\n// Do anything you like with the rest of your express application.\r\n\r\napp.get(\"/\", function(req, res) {\r\n  res.sendFile(__dirname + '/index.html');\r\n});\r\napp.get(\"/multientry\", function(req, res) {\r\n  res.sendFile(__dirname + '/index-multientry.html');\r\n});\r\nconsole.log('123');\r\n\r\nvar server = http.createServer(app);\r\nconsole.log('123123');\r\nserver.listen(process.env.PORT || 8000, function() {\r\n  console.log(\"Listening on %j\", server.address());\r\n});\r\n\r\n\r\nif (true) {\r\n  // module.hot.accept('./hotModule.js', function() {\r\n  //     // var newHotModule = require('./hotModule.js');\r\n  //     // do something else\r\n  // });\r\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/index.js\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ 6:
false

};