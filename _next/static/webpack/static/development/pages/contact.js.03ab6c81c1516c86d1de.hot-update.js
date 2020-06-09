webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/irshadalijan/Desktop/React Apps/nextjs/components/Layout.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Layout = function Layout(props) {\n  var _props$metaInfo = props.metaInfo,\n      title = _props$metaInfo.title,\n      metaKeywords = _props$metaInfo.metaKeywords,\n      metaDesc = _props$metaInfo.metaDesc;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, title), __jsx(\"meta\", {\n    name: \"description\",\n    content: metaDesc,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"keywords\",\n    content: metaKeywords,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    href: \"/static/styles.css\",\n    rel: \"stylesheet\",\n    key: \"mainstyle\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  })), __jsx(\"body\", {\n    className: \"flex flex-col min-h-screen bg-gray-100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    id: \"content\",\n    className: \"flex-grow mx-auto p-8 w-full shadow rounded bg-white\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, props.children), __jsx(\"footer\", {\n    className: \"w-full text-center border-t bg-blue-700 text-white p-4 pin-b\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    className: \"text-xl\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }, \" \\xA9 Irshad Ali Jan 2020 \"))));\n};\n\n_c = Layout;\nLayout.defaultProps = {\n  metaInfo: {\n    title: \"Default Title\",\n    metaKeywords: \"Default metaKeywords\",\n    metaDesc: \"Default metaDesc\"\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwibWV0YUluZm8iLCJ0aXRsZSIsIm1ldGFLZXl3b3JkcyIsIm1ldGFEZXNjIiwiY2hpbGRyZW4iLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQSx3QkFDa0JBLEtBQUssQ0FBQ0MsUUFEeEI7QUFBQSxNQUNoQkMsS0FEZ0IsbUJBQ2hCQSxLQURnQjtBQUFBLE1BQ1RDLFlBRFMsbUJBQ1RBLFlBRFM7QUFBQSxNQUNLQyxRQURMLG1CQUNLQSxRQURMO0FBRXhCLFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRRixLQUFSLENBREYsRUFFRTtBQUFNLFFBQUksRUFBQyxhQUFYO0FBQXlCLFdBQU8sRUFBRUUsUUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUVELFlBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFO0FBQU0sUUFBSSxFQUFDLG9CQUFYO0FBQWdDLE9BQUcsRUFBQyxZQUFwQztBQUFpRCxPQUFHLEVBQUMsV0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBREYsRUFPRTtBQUFNLGFBQVMsRUFBQyx3Q0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFDRSxNQUFFLEVBQUMsU0FETDtBQUVFLGFBQVMsRUFBQyxzREFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUdILEtBQUssQ0FBQ0ssUUFKVCxDQUZGLEVBU0U7QUFBUSxhQUFTLEVBQUMsOERBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLENBVEYsQ0FQRixDQURGO0FBdUJELENBekJEOztLQUFNTixNO0FBMkJOQSxNQUFNLENBQUNPLFlBQVAsR0FBc0I7QUFDcEJMLFVBQVEsRUFBRTtBQUNSQyxTQUFLLEVBQUUsZUFEQztBQUVSQyxnQkFBWSxFQUFFLHNCQUZOO0FBR1JDLFlBQVEsRUFBRTtBQUhGO0FBRFUsQ0FBdEI7QUFRZUwscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBtZXRhS2V5d29yZHMsIG1ldGFEZXNjIH0gPSBwcm9wcy5tZXRhSW5mbztcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17bWV0YURlc2N9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e21ldGFLZXl3b3Jkc30gLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvc3R5bGVzLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiBrZXk9XCJtYWluc3R5bGVcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGJvZHkgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW4gYmctZ3JheS0xMDBcIj5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgaWQ9XCJjb250ZW50XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWdyb3cgbXgtYXV0byBwLTggdy1mdWxsIHNoYWRvdyByb3VuZGVkIGJnLXdoaXRlXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXIgYm9yZGVyLXQgYmctYmx1ZS03MDAgdGV4dC13aGl0ZSBwLTQgcGluLWJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+ICZjb3B5OyBJcnNoYWQgQWxpIEphbiAyMDIwIDwvc3Bhbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2JvZHk+XG4gICAgPC8+XG4gICk7XG59O1xuXG5MYXlvdXQuZGVmYXVsdFByb3BzID0ge1xuICBtZXRhSW5mbzoge1xuICAgIHRpdGxlOiBcIkRlZmF1bHQgVGl0bGVcIixcbiAgICBtZXRhS2V5d29yZHM6IFwiRGVmYXVsdCBtZXRhS2V5d29yZHNcIixcbiAgICBtZXRhRGVzYzogXCJEZWZhdWx0IG1ldGFEZXNjXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

})