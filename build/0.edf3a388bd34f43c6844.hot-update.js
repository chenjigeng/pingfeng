exports.id = 0;
exports.modules = {

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.renderReactTemplate = renderReactTemplate;\n\nvar _reactRouter = __webpack_require__(5);\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(6);\n\nvar _App = __webpack_require__(3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction renderReactTemplate(context, url) {\n\n  return (0, _server.renderToString)(_react2.default.createElement(\n    _reactRouter.StaticRouter,\n    {\n      location: url,\n      context: context\n    },\n    _react2.default.createElement(_App.App, null)\n  ));\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/helpers/renderReactTemplate.js\n// module id = 44\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/helpers/renderReactTemplate.js?");

/***/ })

};