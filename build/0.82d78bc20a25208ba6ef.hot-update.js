exports.id = 0;
exports.modules = [
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_App__ = __webpack_require__(20);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_App__);\nvar http = __webpack_require__(7);\r\n\r\nvar express = __webpack_require__(1);\r\nvar app = express();\r\n\r\nconsole.log(__WEBPACK_IMPORTED_MODULE_0__src_App__[\"App\"]);\r\n// var hotModule = require('./hotModule');\r\n\r\napp.use(__webpack_require__(8)('short'));\r\n\r\n// ************************************\r\n// This is the real meat of the example\r\n// ************************************\r\n(function() {\r\n\r\n  // Step 1: Create & configure a webpack compiler\r\n  var webpack = __webpack_require__(2);\r\n  var webpackConfig = __webpack_require__(9);\r\n  var compiler = webpack(webpackConfig);\r\n\r\n  // Step 2: Attach the dev middleware to the compiler & the server\r\n  app.use(__webpack_require__(16)(compiler, {\r\n    noInfo: true, \r\n    publicPath: webpackConfig.output.publicPath,\r\n    reload: true,\r\n    stats: { colors: true },\r\n  }));\r\n\r\n  // Step 3: Attach the hot middleware to the compiler & the server\r\n  app.use(__webpack_require__(17)(compiler, {\r\n    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000\r\n  }));\r\n})();\r\n\r\napp.use(function(req, res, next) {\r\n  console.log(122);\r\n  next();\r\n})\r\n\r\n// Do anything you like with the rest of your express application.\r\n\r\napp.get(\"/\", function(req, res) {\r\n  console.log('1111');\r\n  res.sendFile(__dirname + '/index.html');\r\n});\r\napp.get(\"/multientry\", function(req, res) {\r\n  res.sendFile(__dirname + '/index-multientry.html');\r\n});\r\nconsole.log('123');\r\n\r\nvar server = http.createServer(app);\r\nconsole.log('123123');\r\nserver.listen(process.env.PORT || 8000, function() {\r\n  console.log(\"Listening on %j\", server.address());\r\n});\r\n\r\n\r\nif (true) {\r\n  // module.hot.accept('./hotModule.js', function() {\r\n  //     // var newHotModule = require('./hotModule.js');\r\n  //     // do something else\r\n  // });\r\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/index.js\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react\"\n// module id = 18\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-router-dom\"\n// module id = 19\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __assign = (this && this.__assign) || Object.assign || function(t) {\r\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n        s = arguments[i];\r\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n            t[p] = s[p];\r\n    }\r\n    return t;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(18);\r\nvar react_router_dom_1 = __webpack_require__(19);\r\nvar Routes_1 = __webpack_require__(21);\r\nvar App = /** @class */ (function (_super) {\r\n    __extends(App, _super);\r\n    function App() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    App.prototype.render = function () {\r\n        return (React.createElement(\"div\", null, Routes_1.default.map(function (router, index) { return (React.createElement(react_router_dom_1.Route, __assign({ key: index }, router))); })));\r\n    };\r\n    return App;\r\n}(React.Component));\r\nexports.App = App;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/App.tsx\n// module id = 20\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom__ = __webpack_require__(19);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router_dom__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__System__ = __webpack_require__(22);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__System___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__System__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Column__ = __webpack_require__(23);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Column___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Column__);\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\r\n  {\r\n    path: '/',\r\n    exact: true,\r\n    component: __WEBPACK_IMPORTED_MODULE_1__System__[\"System\"]\r\n  },\r\n  {\r\n    path: '/column',\r\n    component: __WEBPACK_IMPORTED_MODULE_2__Column__[\"Column\"]\r\n  }\r\n]);\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/Routes.js\n// module id = 21\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(18);\r\nvar System = /** @class */ (function (_super) {\r\n    __extends(System, _super);\r\n    function System() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    System.prototype.render = function () {\r\n        return React.createElement(\"div\", null, \"Systssem\");\r\n    };\r\n    return System;\r\n}(React.Component));\r\nexports.System = System;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/System.tsx\n// module id = 22\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/System.tsx?");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(18);\r\nvar Column = /** @class */ (function (_super) {\r\n    __extends(Column, _super);\r\n    function Column() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    Column.prototype.render = function () {\r\n        return React.createElement(\"div\", null, \"Column\");\r\n    };\r\n    return Column;\r\n}(React.Component));\r\nexports.Column = Column;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/Column.tsx\n// module id = 23\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/Column.tsx?");

/***/ })
];