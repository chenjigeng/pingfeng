exports.id = 0;
exports.modules = {

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _renderReactTemplate = __webpack_require__(44);\n\nObject.keys(_renderReactTemplate).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _renderReactTemplate[key];\n    }\n  });\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/helpers/index.js\n// module id = 43\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/helpers/index.js?");

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.renderReactTemplate = renderReactTemplate;\n\nvar _reactRouter = __webpack_require__(5);\n\nvar _App = __webpack_require__(3);\n\nvar _server = __webpack_require__(6);\n\nfunction renderReactTemplate(context, url) {\n\n  return (0, _server.renderToString)(React.createElement(\n    _reactRouter.StaticRouter,\n    {\n      location: url,\n      context: context\n    },\n    React.createElement(_App.App, null)\n  ));\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/helpers/renderReactTemplate.js\n// module id = 44\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/helpers/renderReactTemplate.js?");

/***/ })

};