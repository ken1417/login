"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/login/page.tsx":
/*!********************************!*\
  !*** ./src/app/login/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/./node_modules/next/dist/api/router.js\");\n/* harmony import */ var _hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/auth */ \"(app-pages-browser)/./src/app/hooks/auth.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Login = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const session = useSession();\n    const { data: session, status: sessionStatus } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const { login, isLoading, user } = (0,_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuth)({\n        middleware: \"guest\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (sessionStatus === \"authenticated\") {\n            router.replace(\"/dashboard\");\n        }\n    }, [\n        sessionStatus,\n        router\n    ]);\n    const isValidEmail = (email)=>{\n        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i;\n        return emailRegex.test(email);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const email = e.target[0].value;\n        const password = e.target[1].value;\n        if (!isValidEmail(email)) {\n            setError(\"Email is invalid\");\n            return;\n        }\n        if (!password || password.length < 8) {\n            setError(\"Password is invalid\");\n            return;\n        }\n        const res = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)(\"credentials\", {\n            redirect: false,\n            email,\n            password\n        });\n        if (res === null || res === void 0 ? void 0 : res.error) {\n            setError(\"Invalid email or password\");\n            if (res === null || res === void 0 ? void 0 : res.url) router.replace(\"/dashboard\");\n        } else {\n            setError(\"\");\n        }\n    };\n    if (sessionStatus === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Rio\\\\Documents\\\\GitHub\\\\login\\\\login\\\\src\\\\app\\\\login\\\\page.tsx\",\n            lineNumber: 59,\n            columnNumber: 12\n        }, undefined);\n    }\n    return sessionStatus !== \"authenticated\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-[#212121] p-8 rounded shadow-md w-96\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-4xl text-center font-semibold mb-8\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Rio\\\\Documents\\\\GitHub\\\\login\\\\login\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black\",\n                            placeholder: \"Email\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Rio\\\\Documents\\\\GitHub\\\\login\\\\login\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            className: \"w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black\",\n                            placeholder: \"Password\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Rio\\\\Documents\\\\GitHub\\\\login\\\\login\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600\",\n                            children: [\n                                \" \",\n                                \"Sign In\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Rio\\\\Documents\\\\GitHub\\\\login\\\\login\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-red-600 text-[16px] mb-4\",\n                            children: error && error\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Rio\\\\Documents\\\\GitHub\\\\login\\\\login\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Rio\\\\Documents\\\\GitHub\\\\login\\\\login\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center text-gray-500 mt-4\",\n                    children: \"- OR -\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Rio\\\\Documents\\\\GitHub\\\\login\\\\login\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"block text-center text-blue-500 hover:underline mt-2\",\n                    href: \"/register\",\n                    children: \"Register Here\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Rio\\\\Documents\\\\GitHub\\\\login\\\\login\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Rio\\\\Documents\\\\GitHub\\\\login\\\\login\\\\src\\\\app\\\\login\\\\page.tsx\",\n            lineNumber: 65,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Rio\\\\Documents\\\\GitHub\\\\login\\\\login\\\\src\\\\app\\\\login\\\\page.tsx\",\n        lineNumber: 64,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Login, \"KQbEdgnrPvTv2IRVlNmkdA6AU8A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        _hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuth\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDdEI7QUFDd0I7QUFDYjtBQUNBO0FBRXhDLE1BQU1RLFFBQVE7O0lBQ1osTUFBTUMsU0FBU0gsc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ25DLGdDQUFnQztJQUNoQyxNQUFNLEVBQUVjLE1BQU1DLE9BQU8sRUFBRUMsUUFBUUMsYUFBYSxFQUFFLEdBQUdkLDJEQUFVQTtJQUUzRCxNQUFNLEVBQUVlLEtBQUssRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUUsR0FBR2Ysb0RBQU9BLENBQUM7UUFBRWdCLFlBQVk7SUFBUTtJQUVqRXRCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSWtCLGtCQUFrQixpQkFBaUI7WUFDckNWLE9BQU9lLE9BQU8sQ0FBQztRQUNqQjtJQUNGLEdBQUc7UUFBQ0w7UUFBZVY7S0FBTztJQUUxQixNQUFNZ0IsZUFBZSxDQUFDZjtRQUNwQixNQUFNZ0IsYUFBYTtRQUNuQixPQUFPQSxXQUFXQyxJQUFJLENBQUNqQjtJQUN6QjtJQUVBLE1BQU1rQixlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1wQixRQUFRbUIsRUFBRUUsTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsS0FBSztRQUMvQixNQUFNcEIsV0FBV2lCLEVBQUVFLE1BQU0sQ0FBQyxFQUFFLENBQUNDLEtBQUs7UUFFbEMsSUFBSSxDQUFDUCxhQUFhZixRQUFRO1lBQ3hCSyxTQUFTO1lBQ1Q7UUFDRjtRQUVBLElBQUksQ0FBQ0gsWUFBWUEsU0FBU3FCLE1BQU0sR0FBRyxHQUFHO1lBQ3BDbEIsU0FBUztZQUNUO1FBQ0Y7UUFFQSxNQUFNbUIsTUFBTSxNQUFNOUIsdURBQU1BLENBQUMsZUFBZTtZQUN0QytCLFVBQVU7WUFDVnpCO1lBQ0FFO1FBQ0Y7UUFFQSxJQUFJc0IsZ0JBQUFBLDBCQUFBQSxJQUFLcEIsS0FBSyxFQUFFO1lBQ2RDLFNBQVM7WUFDVCxJQUFJbUIsZ0JBQUFBLDBCQUFBQSxJQUFLRSxHQUFHLEVBQUUzQixPQUFPZSxPQUFPLENBQUM7UUFDL0IsT0FBTztZQUNMVCxTQUFTO1FBQ1g7SUFDRjtJQUVBLElBQUlJLGtCQUFrQixXQUFXO1FBQy9CLHFCQUFPLDhEQUFDa0I7c0JBQUc7Ozs7OztJQUNiO0lBRUEsT0FDRWxCLGtCQUFrQixpQ0FDaEIsOERBQUNtQjtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Y7b0JBQUdFLFdBQVU7OEJBQTBDOzs7Ozs7OEJBQ3hELDhEQUFDQztvQkFBS0MsVUFBVWI7O3NDQUNkLDhEQUFDYzs0QkFDQ0MsTUFBSzs0QkFDTEosV0FBVTs0QkFDVkssYUFBWTs0QkFDWkMsUUFBUTs7Ozs7O3NDQUVWLDhEQUFDSDs0QkFDQ0MsTUFBSzs0QkFDTEosV0FBVTs0QkFDVkssYUFBWTs0QkFDWkMsUUFBUTs7Ozs7O3NDQUVWLDhEQUFDQzs0QkFDQ0gsTUFBSzs0QkFDTEosV0FBVTs7Z0NBRVQ7Z0NBQUk7Ozs7Ozs7c0NBR1AsOERBQUNROzRCQUFFUixXQUFVO3NDQUFpQ3pCLFNBQVNBOzs7Ozs7Ozs7Ozs7OEJBVXpELDhEQUFDd0I7b0JBQUlDLFdBQVU7OEJBQWlDOzs7Ozs7OEJBQ2hELDhEQUFDcEMsaURBQUlBO29CQUNIb0MsV0FBVTtvQkFDVlMsTUFBSzs4QkFDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQXBHTXhDOztRQUNXRixrREFBU0E7UUFLeUJELHVEQUFVQTtRQUV4QkUsZ0RBQU9BOzs7S0FSdENDO0FBc0dOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3g/ZmM2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBzaWduSW4sIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uL2hvb2tzL2F1dGhcIjtcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKCk7XHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXM6IHNlc3Npb25TdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcclxuXHJcbiAgY29uc3QgeyBsb2dpbiwgaXNMb2FkaW5nLCB1c2VyIH0gPSB1c2VBdXRoKHsgbWlkZGxld2FyZTogXCJndWVzdFwiIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNlc3Npb25TdGF0dXMgPT09IFwiYXV0aGVudGljYXRlZFwiKSB7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgIH1cclxuICB9LCBbc2Vzc2lvblN0YXR1cywgcm91dGVyXSk7XHJcblxyXG4gIGNvbnN0IGlzVmFsaWRFbWFpbCA9IChlbWFpbDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBlbWFpbFJlZ2V4ID0gL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsfSQvaTtcclxuICAgIHJldHVybiBlbWFpbFJlZ2V4LnRlc3QoZW1haWwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBhbnkpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGVtYWlsID0gZS50YXJnZXRbMF0udmFsdWU7XHJcbiAgICBjb25zdCBwYXNzd29yZCA9IGUudGFyZ2V0WzFdLnZhbHVlO1xyXG5cclxuICAgIGlmICghaXNWYWxpZEVtYWlsKGVtYWlsKSkge1xyXG4gICAgICBzZXRFcnJvcihcIkVtYWlsIGlzIGludmFsaWRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXBhc3N3b3JkIHx8IHBhc3N3b3JkLmxlbmd0aCA8IDgpIHtcclxuICAgICAgc2V0RXJyb3IoXCJQYXNzd29yZCBpcyBpbnZhbGlkXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2lnbkluKFwiY3JlZGVudGlhbHNcIiwge1xyXG4gICAgICByZWRpcmVjdDogZmFsc2UsXHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChyZXM/LmVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yKFwiSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZFwiKTtcclxuICAgICAgaWYgKHJlcz8udXJsKSByb3V0ZXIucmVwbGFjZShcIi9kYXNoYm9hcmRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFcnJvcihcIlwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoc2Vzc2lvblN0YXR1cyA9PT0gXCJsb2FkaW5nXCIpIHtcclxuICAgIHJldHVybiA8aDE+TG9hZGluZy4uLjwvaDE+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIHNlc3Npb25TdGF0dXMgIT09IFwiYXV0aGVudGljYXRlZFwiICYmIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMjRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMjEyMTIxXSBwLTggcm91bmRlZCBzaGFkb3ctbWQgdy05NlwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtY2VudGVyIGZvbnQtc2VtaWJvbGQgbWItOFwiPkxvZ2luPC9oMT5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ibGFjayByb3VuZGVkIHB4LTMgcHktMiBtYi00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS00MDAgZm9jdXM6dGV4dC1ibGFja1wiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWJsYWNrIHJvdW5kZWQgcHgtMyBweS0yIG1iLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTQwMCBmb2N1czp0ZXh0LWJsYWNrXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHktMiByb3VuZGVkIGhvdmVyOmJnLWJsdWUtNjAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICBTaWduIEluXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1bMTZweF0gbWItNFwiPntlcnJvciAmJiBlcnJvcn08L3A+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmxhY2sgdGV4dC13aGl0ZSBweS0yIHJvdW5kZWQgaG92ZXI6YmctZ3JheS04MDBcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2lnbkluKFwiZ2l0aHViXCIpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTaWduIEluIHdpdGggR2l0aHViXHJcbiAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JheS01MDAgbXQtNFwiPi0gT1IgLTwvZGl2PlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1jZW50ZXIgdGV4dC1ibHVlLTUwMCBob3Zlcjp1bmRlcmxpbmUgbXQtMlwiXHJcbiAgICAgICAgICAgIGhyZWY9XCIvcmVnaXN0ZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBSZWdpc3RlciBIZXJlXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwic2lnbkluIiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsInVzZUF1dGgiLCJMb2dpbiIsInJvdXRlciIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyb3IiLCJzZXRFcnJvciIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwic2Vzc2lvblN0YXR1cyIsImxvZ2luIiwiaXNMb2FkaW5nIiwidXNlciIsIm1pZGRsZXdhcmUiLCJyZXBsYWNlIiwiaXNWYWxpZEVtYWlsIiwiZW1haWxSZWdleCIsInRlc3QiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsInJlcyIsInJlZGlyZWN0IiwidXJsIiwiaDEiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYnV0dG9uIiwicCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.tsx\n"));

/***/ })

});