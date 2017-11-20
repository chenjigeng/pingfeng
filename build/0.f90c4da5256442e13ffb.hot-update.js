exports.id = 0;
exports.modules = {

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React;\r\nvar react_router_1 = __webpack_require__(5);\r\nvar App_1 = __webpack_require__(3);\r\nvar server_1 = __webpack_require__(6);\r\nconsole.log(App_1.App);\r\nconsole.log(react_router_1.StaticRouter);\r\nexports.default = function (context, url) {\r\n    console.log(context, url);\r\n    console.log(new App_1.App(null, null));\r\n    return server_1.renderToString(React.createElement(\"div\", null, \"asdasdasd\"));\r\n};\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./server/ServerHtml.tsx\n// module id = 22\n// module chunks = 0\n\n//# sourceURL=webpack:///./server/ServerHtml.tsx?");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __assign = (this && this.__assign) || Object.assign || function(t) {\r\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n        s = arguments[i];\r\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n            t[p] = s[p];\r\n    }\r\n    return t;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(0);\r\nvar react_router_dom_1 = __webpack_require__(4);\r\nvar Routes_1 = __webpack_require__(19);\r\nvar App = /** @class */ (function (_super) {\r\n    __extends(App, _super);\r\n    function App() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    App.prototype.render = function () {\r\n        return (React.createElement(\"div\", null, Routes_1.default.map(function (router, index) { return (React.createElement(react_router_dom_1.Route, __assign({ key: index }, router))); })));\r\n    };\r\n    return App;\r\n}(React.Component));\r\nexports.App = App;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/App.tsx\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ })

};