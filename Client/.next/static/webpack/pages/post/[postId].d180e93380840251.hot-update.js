"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[postId]",{

/***/ "./components/public/PostComments.js":
/*!*******************************************!*\
  !*** ./components/public/PostComments.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    margin-top: 200px;\\n    width: 90%;\\n    height: auto;\\n    border-radius: 8px;\\n    background: #FFFFFF;\\n    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);\\n    display: flex;\\n    flex-direction: column;\\n    padding: 16px;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    gap: 6px;\\n    align-items: center;\\n\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    font-style: normal;\\n    font-weight: 500;\\n    font-size: 12px;\\n    line-height: 24px;\\n    color: #5673BF;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    width: 100%;\\n    border: 1px solid #5673BF;\\n    margin: 16px 0;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nconst Card = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].article.withConfig({\n    displayName: \"PostComments__Card\",\n    componentId: \"sc-568d1d4f-0\"\n})(_templateObject());\n_c = Card;\nconst LikeCommentContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"PostComments__LikeCommentContainer\",\n    componentId: \"sc-568d1d4f-1\"\n})(_templateObject1());\n_c1 = LikeCommentContainer;\nconst LikeCommentCount = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].span.withConfig({\n    displayName: \"PostComments__LikeCommentCount\",\n    componentId: \"sc-568d1d4f-2\"\n})(_templateObject2());\n_c2 = LikeCommentCount;\nconst Separator = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"PostComments__Separator\",\n    componentId: \"sc-568d1d4f-3\"\n})(_templateObject3());\n_c3 = Separator;\nconst AddCommentContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"PostComments__AddCommentContainer\",\n    componentId: \"sc-568d1d4f-4\"\n})(_templateObject4());\n_c4 = AddCommentContainer;\nconst PostComments = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Card, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LikeCommentContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: \"/../public/icons/comment-icon.png\",\n                        width: 18,\n                        height: 18\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rober\\\\Documents\\\\proyectos\\\\s7-14-t-Java-React\\\\Client\\\\components\\\\public\\\\PostComments.js\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LikeCommentCount, {\n                        children: \"27\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rober\\\\Documents\\\\proyectos\\\\s7-14-t-Java-React\\\\Client\\\\components\\\\public\\\\PostComments.js\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rober\\\\Documents\\\\proyectos\\\\s7-14-t-Java-React\\\\Client\\\\components\\\\public\\\\PostComments.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Separator, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rober\\\\Documents\\\\proyectos\\\\s7-14-t-Java-React\\\\Client\\\\components\\\\public\\\\PostComments.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AddCommentContainer, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    src: \"/../public/images/profile-image.png\",\n                    width: 40,\n                    height: 40\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rober\\\\Documents\\\\proyectos\\\\s7-14-t-Java-React\\\\Client\\\\components\\\\public\\\\PostComments.js\",\n                    lineNumber: 50,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rober\\\\Documents\\\\proyectos\\\\s7-14-t-Java-React\\\\Client\\\\components\\\\public\\\\PostComments.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\rober\\\\Documents\\\\proyectos\\\\s7-14-t-Java-React\\\\Client\\\\components\\\\public\\\\PostComments.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_c5 = PostComments;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostComments);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c1, \"LikeCommentContainer\");\n$RefreshReg$(_c2, \"LikeCommentCount\");\n$RefreshReg$(_c3, \"Separator\");\n$RefreshReg$(_c4, \"AddCommentContainer\");\n$RefreshReg$(_c5, \"PostComments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3B1YmxpYy9Qb3N0Q29tbWVudHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDYTtBQUNSO0FBRTlCLE1BQU1HLE9BQU9GLDRFQUFjOzs7O0tBQXJCRTtBQVlOLE1BQU1FLHVCQUF1Qkosd0VBQVU7Ozs7TUFBakNJO0FBTU4sTUFBTUUsbUJBQW1CTix5RUFBVzs7OztNQUE5Qk07QUFPTixNQUFNRSxZQUFZUix3RUFBVTs7OztNQUF0QlE7QUFLTixNQUFNQyxzQkFBc0JULHdFQUFVOzs7O01BQWhDUztBQUlOLE1BQU1DLGVBQWUsSUFBTTtJQUN6QixxQkFDRSw4REFBQ1I7OzBCQUNHLDhEQUFDRTs7a0NBQ0csOERBQUNILG1EQUFLQTt3QkFBQ1UsS0FBSTt3QkFBb0NDLE9BQU87d0JBQUlDLFFBQVE7Ozs7OztrQ0FDbEUsOERBQUNQO2tDQUFpQjs7Ozs7Ozs7Ozs7OzBCQUl0Qiw4REFBQ0U7Ozs7OzBCQUNELDhEQUFDQzswQkFDRyw0RUFBQ1IsbURBQUtBO29CQUFDVSxLQUFJO29CQUFzQ0MsT0FBTztvQkFBSUMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEY7TUFmTUg7QUFpQk4sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvUG9zdENvbW1lbnRzLmpzP2IzOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmNvbnN0IENhcmQgPSBzdHlsZWQuYXJ0aWNsZWBcclxuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG5gXHJcblxyXG5jb25zdCBMaWtlQ29tbWVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiA2cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuYFxyXG5jb25zdCBMaWtlQ29tbWVudENvdW50ID0gc3R5bGVkLnNwYW5gXHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBjb2xvcjogIzU2NzNCRjtcclxuYFxyXG5jb25zdCBTZXBhcmF0b3IgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTY3M0JGO1xyXG4gICAgbWFyZ2luOiAxNnB4IDA7XHJcbmBcclxuY29uc3QgQWRkQ29tbWVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcblxyXG5gXHJcblxyXG5jb25zdCBQb3N0Q29tbWVudHMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkPlxyXG4gICAgICAgIDxMaWtlQ29tbWVudENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi8uLi9wdWJsaWMvaWNvbnMvY29tbWVudC1pY29uLnBuZ1wiIHdpZHRoPXsxOH0gaGVpZ2h0PXsxOH0vPlxyXG4gICAgICAgICAgICA8TGlrZUNvbW1lbnRDb3VudD5cclxuICAgICAgICAgICAgICAgIDI3XHJcbiAgICAgICAgICAgIDwvTGlrZUNvbW1lbnRDb3VudD5cclxuICAgICAgICA8L0xpa2VDb21tZW50Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZXBhcmF0b3IgLz5cclxuICAgICAgICA8QWRkQ29tbWVudENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi8uLi9wdWJsaWMvaW1hZ2VzL3Byb2ZpbGUtaW1hZ2UucG5nXCIgd2lkdGg9ezQwfSBoZWlnaHQ9ezQwfS8+XHJcbiAgICAgICAgPC9BZGRDb21tZW50Q29udGFpbmVyPlxyXG4gICAgPC9DYXJkPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENvbW1lbnRzIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiSW1hZ2UiLCJDYXJkIiwiYXJ0aWNsZSIsIkxpa2VDb21tZW50Q29udGFpbmVyIiwiZGl2IiwiTGlrZUNvbW1lbnRDb3VudCIsInNwYW4iLCJTZXBhcmF0b3IiLCJBZGRDb21tZW50Q29udGFpbmVyIiwiUG9zdENvbW1lbnRzIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/public/PostComments.js\n"));

/***/ })

});