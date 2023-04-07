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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Submenu\": function() { return /* binding */ Submenu; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuButton */ \"./components/common/SubMenu/MenuButton.js\");\n/* harmony import */ var _HiddenMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HiddenMenu */ \"./components/common/SubMenu/HiddenMenu.js\");\n/* harmony import */ var _ButtonViolet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ButtonViolet */ \"./components/common/SubMenu/ButtonViolet.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background-color: #bbbbbb;\\n  color: var(--gray3);\\n  height: 5rem;\\n  display: flex;\\n  align-items: center;\\n  position: relative;\\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\\n  justify-content: space-between;\\n  .categories {\\n    padding: 0rem 4rem;\\n    user-select: none;\\n    display: flex;\\n    gap: 10px;\\n    cursor: pointer;\\n    align-items: center;\\n    height: 100%;\\n\\n    p {\\n      font-weight: 700;\\n      font-size: 14px;\\n      color: #454545;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Submenu = ()=>{\n    _s();\n    const [open, cycleOpen] = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useCycle)(false, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n        initial: {\n            opacity: 1,\n            height: \"0\"\n        },\n        animate: {\n            opacity: 1,\n            height: \"5rem\"\n        },\n        exit: {\n            opacity: 0\n        },\n        transition: {\n            duration: 0.7,\n            delay: 1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                initial: {\n                    opacity: 0\n                },\n                animate: {\n                    opacity: 1\n                },\n                transition: {\n                    duration: 0.5,\n                    delay: 1.5\n                },\n                className: \"categories\",\n                onClick: cycleOpen,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MenuButton__WEBPACK_IMPORTED_MODULE_2__.MenuButton, {\n                        isOpen: open\n                    }, void 0, false, {\n                        fileName: \"/Users/antoniov/Documents/NoCountry/UntimoMerge/s7-14-t-Java-React/Client/components/common/SubMenu/Submenu.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: \"PubliShare\"\n                    }, void 0, false, {\n                        fileName: \"/Users/antoniov/Documents/NoCountry/UntimoMerge/s7-14-t-Java-React/Client/components/common/SubMenu/Submenu.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/antoniov/Documents/NoCountry/UntimoMerge/s7-14-t-Java-React/Client/components/common/SubMenu/Submenu.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ButtonViolet__WEBPACK_IMPORTED_MODULE_4__.ButtonViolet, {}, void 0, false, {\n                fileName: \"/Users/antoniov/Documents/NoCountry/UntimoMerge/s7-14-t-Java-React/Client/components/common/SubMenu/Submenu.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_HiddenMenu__WEBPACK_IMPORTED_MODULE_3__.HiddenMenu, {\n                open: open,\n                action: cycleOpen\n            }, void 0, false, {\n                fileName: \"/Users/antoniov/Documents/NoCountry/UntimoMerge/s7-14-t-Java-React/Client/components/common/SubMenu/Submenu.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/antoniov/Documents/NoCountry/UntimoMerge/s7-14-t-Java-React/Client/components/common/SubMenu/Submenu.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Submenu, \"2W50SNqrlLJ8r/W3UUemx8uuYU8=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useCycle\n    ];\n});\n_c = Submenu;\nconst Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div).withConfig({\n    displayName: \"Submenu__Container\",\n    componentId: \"sc-bdff5dfd-0\"\n})(_templateObject());\n_c1 = Container;\nvar _c, _c1;\n$RefreshReg$(_c, \"Submenu\");\n$RefreshReg$(_c1, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9TdWJNZW51L1N1Ym1lbnUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0U7QUFDQztBQUNBO0FBQ0k7QUFDUDtBQUUvQixNQUFNTSxVQUFVLElBQU07O0lBQzNCLE1BQU0sQ0FBQ0MsTUFBTUMsVUFBVSxHQUFHUCx1REFBUUEsQ0FBQyxLQUFLLEVBQUUsSUFBSTtJQUM5QyxxQkFDRSw4REFBQ1E7UUFDQ0MsU0FBUztZQUFFQyxTQUFTO1lBQUdDLFFBQVE7UUFBSTtRQUNuQ0MsU0FBUztZQUFFRixTQUFTO1lBQUdDLFFBQVE7UUFBTztRQUN0Q0UsTUFBTTtZQUFFSCxTQUFTO1FBQUU7UUFDbkJJLFlBQVk7WUFBRUMsVUFBVTtZQUFLQyxPQUFPO1FBQUU7OzBCQUV0Qyw4REFBQ1oscURBQVU7Z0JBQ1RLLFNBQVM7b0JBQUVDLFNBQVM7Z0JBQUU7Z0JBQ3RCRSxTQUFTO29CQUFFRixTQUFTO2dCQUFFO2dCQUN0QkksWUFBWTtvQkFBRUMsVUFBVTtvQkFBS0MsT0FBTztnQkFBSTtnQkFDeENFLFdBQVU7Z0JBQ1ZDLFNBQVNaOztrQ0FFVCw4REFBQ04sbURBQVVBO3dCQUFDbUIsUUFBUWQ7Ozs7OztrQ0FDcEIsOERBQUNlO2tDQUFFOzs7Ozs7Ozs7Ozs7MEJBRUwsOERBQUNsQix1REFBWUE7Ozs7OzBCQUViLDhEQUFDRCxtREFBVUE7Z0JBQUNJLE1BQU1BO2dCQUFNZ0IsUUFBUWY7Ozs7Ozs7Ozs7OztBQUd0QyxFQUFDO0dBeEJZRjs7UUFDZUwsbURBQVFBOzs7S0FEdkJLO0FBMEJiLE1BQU1HLFlBQVlULDZEQUFNQSxDQUFDSyxxREFBVTs7OztNQUE3QkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vU3ViTWVudS9TdWJtZW51LmpzPzY0MzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHVzZUN5Y2xlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuL01lbnVCdXR0b24nXG5pbXBvcnQgeyBIaWRkZW5NZW51IH0gZnJvbSAnLi9IaWRkZW5NZW51J1xuaW1wb3J0IHsgQnV0dG9uVmlvbGV0IH0gZnJvbSAnLi9CdXR0b25WaW9sZXQnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5leHBvcnQgY29uc3QgU3VibWVudSA9ICgpID0+IHtcbiAgY29uc3QgW29wZW4sIGN5Y2xlT3Blbl0gPSB1c2VDeWNsZShmYWxzZSwgdHJ1ZSlcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyXG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDEsIGhlaWdodDogJzAnIH19XG4gICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIGhlaWdodDogJzVyZW0nIH19XG4gICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNywgZGVsYXk6IDEgfX1cbiAgICA+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgZGVsYXk6IDEuNSB9fVxuICAgICAgICBjbGFzc05hbWU9XCJjYXRlZ29yaWVzXCJcbiAgICAgICAgb25DbGljaz17Y3ljbGVPcGVufVxuICAgICAgPlxuICAgICAgICA8TWVudUJ1dHRvbiBpc09wZW49e29wZW59IC8+XG4gICAgICAgIDxwPlB1YmxpU2hhcmU8L3A+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8QnV0dG9uVmlvbGV0IC8+XG5cbiAgICAgIDxIaWRkZW5NZW51IG9wZW49e29wZW59IGFjdGlvbj17Y3ljbGVPcGVufSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChtb3Rpb24uZGl2KWBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYmJiYjtcbiAgY29sb3I6IHZhcigtLWdyYXkzKTtcbiAgaGVpZ2h0OiA1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLmNhdGVnb3JpZXMge1xuICAgIHBhZGRpbmc6IDByZW0gNHJlbTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzQ1NDU0NTtcbiAgICB9XG4gIH1cbmBcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJ1c2VDeWNsZSIsIk1lbnVCdXR0b24iLCJIaWRkZW5NZW51IiwiQnV0dG9uVmlvbGV0IiwibW90aW9uIiwiU3VibWVudSIsIm9wZW4iLCJjeWNsZU9wZW4iLCJDb250YWluZXIiLCJpbml0aWFsIiwib3BhY2l0eSIsImhlaWdodCIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaXNPcGVuIiwicCIsImFjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/common/SubMenu/Submenu.js\n"));

/***/ })

});