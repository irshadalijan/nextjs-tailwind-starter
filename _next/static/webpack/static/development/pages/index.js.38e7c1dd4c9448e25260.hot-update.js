webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/irshadalijan/Desktop/React Apps/nextjs/components/Navbar.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Navbar = function Navbar() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showNav = _useState[0],\n      setShowNav = _useState[1];\n\n  return __jsx(\"header\", {\n    className: \"flex items-center p-3 flex-wrap text-white bg-blue-700\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    id: \"logo\",\n    className: \"lg:text-xl p-2 mr-4 inline-flex items-center font-serif font-bold\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 11\n    }\n  }, \"NextJS with Tailwind\"))), __jsx(\"button\", {\n    onClick: function onClick() {\n      return setShowNav(!showNav);\n    },\n    type: \"button\",\n    className: \"inline-flex p-3 text-white hover:text-gray-300 focus:text-white focus:outline-none lg:hidden ml-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(\"svg\", {\n    className: \"h-6 w-6 fill-current\",\n    viewBox: \"0 -53 384 384\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(\"path\", {\n    d: \"m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }), __jsx(\"path\", {\n    d: \"m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }), __jsx(\"path\", {\n    d: \"m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    className: \"w-full flex-grow lg:inline-flex lg:flex-grow lg:w-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"lg:inline-flex lg:flex-row lg:ml-auto flex flex-col \" + (showNav ? \"\" : \"hidden\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-800 hover:bg-gray-900\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, \"Home\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/about\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-800 hover:bg-gray-900\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, \"About\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/contact\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-800 hover:bg-gray-900\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }, \"Contact Us\")))));\n};\n\n_s(Navbar, \"a3zpZv3Q/5BAXsC/YOXmjosS+lQ=\");\n\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmJhci5qcz9jZDgyIl0sIm5hbWVzIjpbIk5hdmJhciIsInVzZVN0YXRlIiwic2hvd05hdiIsInNldFNob3dOYXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1dDLHNEQUFRLENBQUMsS0FBRCxDQURuQjtBQUFBLE1BQ1pDLE9BRFk7QUFBQSxNQUNIQyxVQURHOztBQUduQixTQUNFO0FBQVEsYUFBUyxFQUFDLHdEQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxNQUFFLEVBQUMsTUFETDtBQUVFLGFBQVMsRUFBQyxtRUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLENBSkYsQ0FERixFQVNFO0FBQ0UsV0FBTyxFQUFFO0FBQUEsYUFBTUEsVUFBVSxDQUFDLENBQUNELE9BQUYsQ0FBaEI7QUFBQSxLQURYO0FBRUUsUUFBSSxFQUFDLFFBRlA7QUFHRSxhQUFTLEVBQUMsc0dBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQ0UsYUFBUyxFQUFDLHNCQURaO0FBRUUsV0FBTyxFQUFDLGVBRlY7QUFHRSxTQUFLLEVBQUMsNEJBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQU0sS0FBQyxFQUFDLCtIQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FO0FBQU0sS0FBQyxFQUFDLHVIQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQU9FO0FBQU0sS0FBQyxFQUFDLCtIQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQUxGLENBVEYsRUF5QkU7QUFBSyxhQUFTLEVBQUMsd0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUNQLDBEQUNDQSxPQUFPLEdBQUcsRUFBSCxHQUFRLFFBRGhCLENBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsZ0ZBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBTkYsRUFZRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGdGQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixDQVpGLEVBaUJFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsZ0ZBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQWpCRixDQURGLENBekJGLENBREY7QUFxREQsQ0F4REQ7O0dBQU1GLE07O0tBQUFBLE07QUEwRFNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXZiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtzaG93TmF2LCBzZXRTaG93TmF2XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC0zIGZsZXgtd3JhcCB0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGlkPVwibG9nb1wiXG4gICAgICAgIGNsYXNzTmFtZT1cImxnOnRleHQteGwgcC0yIG1yLTQgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGZvbnQtc2VyaWYgZm9udC1ib2xkXCJcbiAgICAgID5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT5OZXh0SlMgd2l0aCBUYWlsd2luZDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dOYXYoIXNob3dOYXYpfVxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggcC0zIHRleHQtd2hpdGUgaG92ZXI6dGV4dC1ncmF5LTMwMCBmb2N1czp0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBsZzpoaWRkZW4gbWwtYXV0b1wiXG4gICAgICA+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02IGZpbGwtY3VycmVudFwiXG4gICAgICAgICAgdmlld0JveD1cIjAgLTUzIDM4NCAzODRcIlxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGggZD1cIm0zNjggMTU0LjY2Nzk2OWgtMzUyYy04LjgzMjAzMSAwLTE2LTcuMTY3OTY5LTE2LTE2czcuMTY3OTY5LTE2IDE2LTE2aDM1MmM4LjgzMjAzMSAwIDE2IDcuMTY3OTY5IDE2IDE2cy03LjE2Nzk2OSAxNi0xNiAxNnptMCAwXCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwibTM2OCAzMmgtMzUyYy04LjgzMjAzMSAwLTE2LTcuMTY3OTY5LTE2LTE2czcuMTY3OTY5LTE2IDE2LTE2aDM1MmM4LjgzMjAzMSAwIDE2IDcuMTY3OTY5IDE2IDE2cy03LjE2Nzk2OSAxNi0xNiAxNnptMCAwXCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwibTM2OCAyNzcuMzMyMDMxaC0zNTJjLTguODMyMDMxIDAtMTYtNy4xNjc5NjktMTYtMTZzNy4xNjc5NjktMTYgMTYtMTZoMzUyYzguODMyMDMxIDAgMTYgNy4xNjc5NjkgMTYgMTZzLTcuMTY3OTY5IDE2LTE2IDE2em0wIDBcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4LWdyb3cgbGc6aW5saW5lLWZsZXggbGc6ZmxleC1ncm93IGxnOnctYXV0b1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIFwibGc6aW5saW5lLWZsZXggbGc6ZmxleC1yb3cgbGc6bWwtYXV0byBmbGV4IGZsZXgtY29sIFwiICtcbiAgICAgICAgICAgIChzaG93TmF2ID8gXCJcIiA6IFwiaGlkZGVuXCIpXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxnOmlubGluZS1mbGV4IGxnOnctYXV0byBweC0zIHB5LTIgcm91bmRlZCBob3ZlcjpiZy1ibHVlLTgwMCBob3ZlcjpiZy1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy1hdXRvIHB4LTMgcHktMiByb3VuZGVkIGhvdmVyOmJnLWJsdWUtODAwIGhvdmVyOmJnLWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGc6aW5saW5lLWZsZXggbGc6dy1hdXRvIHB4LTMgcHktMiByb3VuZGVkIGhvdmVyOmJnLWJsdWUtODAwIGhvdmVyOmJnLWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgIENvbnRhY3QgVXNcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ })

})