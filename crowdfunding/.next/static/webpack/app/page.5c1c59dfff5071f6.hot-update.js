"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/utils/index.tsx":
/*!*****************************!*\
  !*** ./src/utils/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateBarPercentage: function() { return /* binding */ calculateBarPercentage; },\n/* harmony export */   checkIfImage: function() { return /* binding */ checkIfImage; },\n/* harmony export */   daysLeft: function() { return /* binding */ daysLeft; }\n/* harmony export */ });\nconst daysLeft = (deadline)=>{\n    const difference = new Date(deadline).getTime() - Date.now();\n    const remainingDays = difference / (1000 * 3600 * 24);\n    return remainingDays.toFixed(0);\n};\nconst calculateBarPercentage = (goal, raisedAmount)=>{\n    const percentage = Math.round(raisedAmount * 100 / goal);\n    return percentage;\n};\nconst checkIfImage = (url, callback)=>{\n    const img = new Image();\n    img.src = url;\n    if (img.complete) callback(true);\n    img.onload = ()=>callback(true);\n    img.onerror = ()=>callback(false);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy91dGlscy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sTUFBTUEsV0FBVyxDQUFDQztJQUNyQixNQUFNQyxhQUFhLElBQUlDLEtBQUtGLFVBQVVHLE9BQU8sS0FBS0QsS0FBS0UsR0FBRztJQUMxRCxNQUFNQyxnQkFBZ0JKLGFBQWMsUUFBTyxPQUFPLEVBQUM7SUFFbkQsT0FBT0ksY0FBY0MsT0FBTyxDQUFDO0FBQy9CLEVBQUU7QUFFSyxNQUFNQyx5QkFBeUIsQ0FBQ0MsTUFBVUM7SUFDL0MsTUFBTUMsYUFBYUMsS0FBS0MsS0FBSyxDQUFDLGVBQWdCLE1BQU9KO0lBRXJELE9BQU9FO0FBQ1QsRUFBRTtBQUVLLE1BQU1HLGVBQWUsQ0FBQ0MsS0FBU0M7SUFDcEMsTUFBTUMsTUFBTSxJQUFJQztJQUNoQkQsSUFBSUUsR0FBRyxHQUFHSjtJQUVWLElBQUlFLElBQUlHLFFBQVEsRUFBRUosU0FBUztJQUUzQkMsSUFBSUksTUFBTSxHQUFHLElBQU1MLFNBQVM7SUFDNUJDLElBQUlLLE9BQU8sR0FBRyxJQUFNTixTQUFTO0FBQy9CLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2luZGV4LnRzeD84MDMzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBkYXlzTGVmdCA9IChkZWFkbGluZTphbnkpID0+IHtcbiAgICBjb25zdCBkaWZmZXJlbmNlID0gbmV3IERhdGUoZGVhZGxpbmUpLmdldFRpbWUoKSAtIERhdGUubm93KCk7XG4gICAgY29uc3QgcmVtYWluaW5nRGF5cyA9IGRpZmZlcmVuY2UgLyAoMTAwMCAqIDM2MDAgKiAyNCk7XG4gIFxuICAgIHJldHVybiByZW1haW5pbmdEYXlzLnRvRml4ZWQoMCk7XG4gIH07XG4gIFxuICBleHBvcnQgY29uc3QgY2FsY3VsYXRlQmFyUGVyY2VudGFnZSA9IChnb2FsOmFueSwgcmFpc2VkQW1vdW50OmFueSkgPT4ge1xuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBNYXRoLnJvdW5kKChyYWlzZWRBbW91bnQgKiAxMDApIC8gZ29hbCk7XG4gIFxuICAgIHJldHVybiBwZXJjZW50YWdlO1xuICB9O1xuICBcbiAgZXhwb3J0IGNvbnN0IGNoZWNrSWZJbWFnZSA9ICh1cmw6YW55LCBjYWxsYmFjazphbnkpID0+IHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gdXJsO1xuICBcbiAgICBpZiAoaW1nLmNvbXBsZXRlKSBjYWxsYmFjayh0cnVlKTtcbiAgXG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IGNhbGxiYWNrKHRydWUpO1xuICAgIGltZy5vbmVycm9yID0gKCkgPT4gY2FsbGJhY2soZmFsc2UpO1xuICB9OyJdLCJuYW1lcyI6WyJkYXlzTGVmdCIsImRlYWRsaW5lIiwiZGlmZmVyZW5jZSIsIkRhdGUiLCJnZXRUaW1lIiwibm93IiwicmVtYWluaW5nRGF5cyIsInRvRml4ZWQiLCJjYWxjdWxhdGVCYXJQZXJjZW50YWdlIiwiZ29hbCIsInJhaXNlZEFtb3VudCIsInBlcmNlbnRhZ2UiLCJNYXRoIiwicm91bmQiLCJjaGVja0lmSW1hZ2UiLCJ1cmwiLCJjYWxsYmFjayIsImltZyIsIkltYWdlIiwic3JjIiwiY29tcGxldGUiLCJvbmxvYWQiLCJvbmVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/utils/index.tsx\n"));

/***/ })

});