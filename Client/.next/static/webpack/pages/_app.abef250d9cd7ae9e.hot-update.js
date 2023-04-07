"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/common/SubMenu/Submenu.js":
/*!**********************************************!*\
  !*** ./components/common/SubMenu/Submenu.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Submenu\": function() { return /* binding */ Submenu; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuButton */ \"./components/common/SubMenu/MenuButton.js\");\n/* harmony import */ var _HiddenMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HiddenMenu */ \"./components/common/SubMenu/HiddenMenu.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background-color: #bbbbbb;\\n  color: var(--gray3);\\n  height: 5rem;\\n  display: flex;\\n  align-items: center;\\n  position: relative;\\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\\n  justify-content: space-between;\\n  .categories {\\n    padding: 0rem 4rem;\\n    user-select: none;\\n    display: flex;\\n    gap: 10px;\\n    cursor: pointer;\\n    align-items: center;\\n    height: 100%;\\n\\n    p {\\n      font-weight: 600;\\n      font-size: 20px;\\n      color: #454545;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Submenu = ()=>{\n    _s();\n    const [open, cycleOpen] = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useCycle)(false, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n        initial: {\n            opacity: 1,\n            height: \"0\"\n        },\n        animate: {\n            opacity: 1,\n            height: \"5rem\"\n        },\n        exit: {\n            opacity: 0\n        },\n        transition: {\n            duration: 0.7,\n            delay: 1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                initial: {\n                    opacity: 0\n                },\n                animate: {\n                    opacity: 1\n                },\n                transition: {\n                    duration: 0.5,\n                    delay: 1.5\n                },\n                className: \"categories\",\n                onClick: cycleOpen,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MenuButton__WEBPACK_IMPORTED_MODULE_2__.MenuButton, {\n                        isOpen: open\n                    }, void 0, false, {\n                        fileName: \"/Users/antoniov/Documents/NoCountry/NextjsNoCountryMoon/s7-14-t-Java-React/Client/components/common/SubMenu/Submenu.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: \"PubliShare\"\n                    }, void 0, false, {\n                        fileName: \"/Users/antoniov/Documents/NoCountry/NextjsNoCountryMoon/s7-14-t-Java-React/Client/components/common/SubMenu/Submenu.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/antoniov/Documents/NoCountry/NextjsNoCountryMoon/s7-14-t-Java-React/Client/components/common/SubMenu/Submenu.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_HiddenMenu__WEBPACK_IMPORTED_MODULE_3__.HiddenMenu, {\n                open: open,\n                action: cycleOpen\n            }, void 0, false, {\n                fileName: \"/Users/antoniov/Documents/NoCountry/NextjsNoCountryMoon/s7-14-t-Java-React/Client/components/common/SubMenu/Submenu.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/antoniov/Documents/NoCountry/NextjsNoCountryMoon/s7-14-t-Java-React/Client/components/common/SubMenu/Submenu.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Submenu, \"2W50SNqrlLJ8r/W3UUemx8uuYU8=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useCycle\n    ];\n});\n_c = Submenu;\nconst Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div).withConfig({\n    displayName: \"Submenu__Container\",\n    componentId: \"sc-93cc30f3-0\"\n})(_templateObject());\n_c1 = Container;\nvar _c, _c1;\n$RefreshReg$(_c, \"Submenu\");\n$RefreshReg$(_c1, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9TdWJNZW51L1N1Ym1lbnUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDRTtBQUNDO0FBQ0E7QUFDSDtBQUUvQixNQUFNSyxVQUFVLElBQU07O0lBQzNCLE1BQU0sQ0FBQ0MsTUFBTUMsVUFBVSxHQUFHTix1REFBUUEsQ0FBQyxLQUFLLEVBQUUsSUFBSTtJQUM5QyxxQkFDRSw4REFBQ087UUFDQ0MsU0FBUztZQUFFQyxTQUFTO1lBQUdDLFFBQVE7UUFBSTtRQUNuQ0MsU0FBUztZQUFFRixTQUFTO1lBQUdDLFFBQVE7UUFBTztRQUN0Q0UsTUFBTTtZQUFFSCxTQUFTO1FBQUU7UUFDbkJJLFlBQVk7WUFBRUMsVUFBVTtZQUFLQyxPQUFPO1FBQUU7OzBCQUV0Qyw4REFBQ1oscURBQVU7Z0JBQ1RLLFNBQVM7b0JBQUVDLFNBQVM7Z0JBQUU7Z0JBQ3RCRSxTQUFTO29CQUFFRixTQUFTO2dCQUFFO2dCQUN0QkksWUFBWTtvQkFBRUMsVUFBVTtvQkFBS0MsT0FBTztnQkFBSTtnQkFDeENFLFdBQVU7Z0JBQ1ZDLFNBQVNaOztrQ0FFVCw4REFBQ0wsbURBQVVBO3dCQUFDa0IsUUFBUWQ7Ozs7OztrQ0FDcEIsOERBQUNlO2tDQUFFOzs7Ozs7Ozs7Ozs7MEJBR0wsOERBQUNsQixtREFBVUE7Z0JBQUNHLE1BQU1BO2dCQUFNZ0IsUUFBUWY7Ozs7Ozs7Ozs7OztBQUd0QyxFQUFDO0dBdkJZRjs7UUFDZUosbURBQVFBOzs7S0FEdkJJO0FBeUJiLE1BQU1HLFlBQVlSLDZEQUFNQSxDQUFDSSxxREFBVTs7OztNQUE3QkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vU3ViTWVudS9TdWJtZW51LmpzPzY0MzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHVzZUN5Y2xlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuL01lbnVCdXR0b24nXG5pbXBvcnQgeyBIaWRkZW5NZW51IH0gZnJvbSAnLi9IaWRkZW5NZW51J1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuZXhwb3J0IGNvbnN0IFN1Ym1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuLCBjeWNsZU9wZW5dID0gdXNlQ3ljbGUoZmFsc2UsIHRydWUpXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lclxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAxLCBoZWlnaHQ6ICcwJyB9fVxuICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBoZWlnaHQ6ICc1cmVtJyB9fVxuICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjcsIGRlbGF5OiAxIH19XG4gICAgPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUsIGRlbGF5OiAxLjUgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiY2F0ZWdvcmllc1wiXG4gICAgICAgIG9uQ2xpY2s9e2N5Y2xlT3Blbn1cbiAgICAgID5cbiAgICAgICAgPE1lbnVCdXR0b24gaXNPcGVuPXtvcGVufSAvPlxuICAgICAgICA8cD5QdWJsaVNoYXJlPC9wPlxuICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICA8SGlkZGVuTWVudSBvcGVuPXtvcGVufSBhY3Rpb249e2N5Y2xlT3Blbn0gLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQobW90aW9uLmRpdilgXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmJiYmI7XG4gIGNvbG9yOiB2YXIoLS1ncmF5Myk7XG4gIGhlaWdodDogNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC5jYXRlZ29yaWVzIHtcbiAgICBwYWRkaW5nOiAwcmVtIDRyZW07XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgcCB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgY29sb3I6ICM0NTQ1NDU7XG4gICAgfVxuICB9XG5gXG4iXSwibmFtZXMiOlsic3R5bGVkIiwidXNlQ3ljbGUiLCJNZW51QnV0dG9uIiwiSGlkZGVuTWVudSIsIm1vdGlvbiIsIlN1Ym1lbnUiLCJvcGVuIiwiY3ljbGVPcGVuIiwiQ29udGFpbmVyIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJoZWlnaHQiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5IiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImlzT3BlbiIsInAiLCJhY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/common/SubMenu/Submenu.js\n"));

/***/ })

});