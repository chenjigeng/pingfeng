exports.id = 0;
exports.modules = {

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _App = __webpack_require__(3);\n\nvar _helpers = __webpack_require__(22);\n\nvar _server = __webpack_require__(6);\n\nvar _reactRouter = __webpack_require__(5);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar http = __webpack_require__(32);\n\nvar express = __webpack_require__(33);\nvar app = express();\n\n\napp.use(__webpack_require__(34)('short'));\n\n// ************************************\n// This is the real meat of the example\n// ************************************\n(function () {\n\n  // Step 1: Create & configure a webpack compiler\n  var webpack = __webpack_require__(14);\n  var webpackConfig = __webpack_require__(35);\n  var compiler = webpack(webpackConfig);\n\n  // Step 2: Attach the dev middleware to the compiler & the server\n  app.use(__webpack_require__(42)(compiler, {\n    noInfo: true,\n    publicPath: webpackConfig.output.publicPath,\n    reload: true,\n    stats: { colors: true }\n  }));\n\n  // Step 3: Attach the hot middleware to the compiler & the server\n  app.use(__webpack_require__(43)(compiler, {\n    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000\n  }));\n})();\n\n// app.get('/column', (req, res) => {\n//   const context = {};\n//   const html = renderReactTemplate(context, req.url);\n\n//   if (context.url) {\n//     res.writeHead(301, {\n//       Location: context.url\n//     })\n//     res.end()\n//   } else {\n//     res.write(`\n//       <!doctype html>\n//       <div id=\"app\">${html}</div>\n//     `)\n//     res.end()\n//   }\n// })\n// Do anything you like with the rest of your express application.\n\napp.get(\"*\", function (req, res) {\n  res.sendFile(__dirname + '/../dist/index.html');\n});\napp.get(\"/multientry\", function (req, res) {\n  res.sendFile(__dirname + '/index-multientry.html');\n});\n\nvar server = http.createServer(app);\nserver.listen(process.env.PORT || 8000, function () {\n  console.log(\"Listening on %j\", server.address());\n});\n\nif (true) {\n  console.log('123123');\n  // module.hot.accept('./hotModule.js', function() {\n  //     // var newHotModule = require('./hotModule.js');\n  //     // do something else\n  // });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/index.js\n// module id = 18\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ })

};