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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/auth */ \"(app-pages-browser)/./src/app/hooks/auth.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Login = ()=>{\n    _s();\n    const router = useRouter();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const session = useSession();\n    const { data: session, status: sessionStatus } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const { login, isLoading, user } = (0,_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuth)({\n        middleware: \"guest\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (sessionStatus === \"authenticated\") {\n            router.replace(\"/dashboard\");\n        }\n    }, [\n        sessionStatus,\n        router\n    ]);\n    const isValidEmail = (email)=>{\n        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i;\n        return emailRegex.test(email);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const email = e.target[0].value;\n        const password = e.target[1].value;\n        if (!isValidEmail(email)) {\n            setError(\"Email is invalid\");\n            return;\n        }\n        if (!password || password.length < 8) {\n            setError(\"Password is invalid\");\n            return;\n        }\n        const res = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)(\"credentials\", {\n            redirect: false,\n            email,\n            password\n        });\n        if (res === null || res === void 0 ? void 0 : res.error) {\n            setError(\"Invalid email or password\");\n            if (res === null || res === void 0 ? void 0 : res.url) router.replace(\"/dashboard\");\n        } else {\n            setError(\"\");\n        }\n    };\n    if (sessionStatus === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Rio\\\\Documents\\\\GitHub\\\\login\\\\login\\\\src\\\\app\\\\login\\\\page.tsx\",\n            lineNumber: 58,\n            columnNumber: 12\n        }, undefined);\n    }\n    return sessionStatus !== \"authenticated\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-[#212121] p-8 rounded shadow-md w-96\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-4xl text-center font-semibold mb-8\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Rio\\\\Documents\\\\GitHub\\\\login\\\\login\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black\",\n                            placeholder: \"Email\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Rio\\\\Documents\\\\GitHub\\\\login\\\\login\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            className: \"w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black\",\n                            placeholder: \"Password\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Rio\\\\Documents\\\\GitHub\\\\login\\\\login\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600\",\n                            children: [\n                                \" \",\n                                \"Sign In\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Rio\\\\Documents\\\\GitHub\\\\login\\\\login\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-red-600 text-[16px] mb-4\",\n                            children: error && error\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Rio\\\\Documents\\\\GitHub\\\\login\\\\login\\\\src\\\\app\\\\login\\\\page.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Rio\\\\Documents\\\\GitHub\\\\login\\\\login\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center text-gray-500 mt-4\",\n                    children: \"- OR -\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Rio\\\\Documents\\\\GitHub\\\\login\\\\login\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"block text-center text-blue-500 hover:underline mt-2\",\n                    href: \"/register\",\n                    children: \"Register Here\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Rio\\\\Documents\\\\GitHub\\\\login\\\\login\\\\src\\\\app\\\\login\\\\page.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Rio\\\\Documents\\\\GitHub\\\\login\\\\login\\\\src\\\\app\\\\login\\\\page.tsx\",\n            lineNumber: 64,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Rio\\\\Documents\\\\GitHub\\\\login\\\\login\\\\src\\\\app\\\\login\\\\page.tsx\",\n        lineNumber: 63,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Login, \"KQbEdgnrPvTv2IRVlNmkdA6AU8A=\", true, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        _hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuth\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNtRDtBQUN0QjtBQUN3QjtBQUNiO0FBRXhDLE1BQU1PLFFBQVE7O0lBQ1osTUFBTUMsU0FBU0M7SUFDZixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1ksT0FBT0MsU0FBUyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUNuQyxnQ0FBZ0M7SUFDaEMsTUFBTSxFQUFFYyxNQUFNQyxPQUFPLEVBQUVDLFFBQVFDLGFBQWEsRUFBRSxHQUFHZCwyREFBVUE7SUFFM0QsTUFBTSxFQUFFZSxLQUFLLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFLEdBQUdoQixvREFBT0EsQ0FBQztRQUFFaUIsWUFBWTtJQUFRO0lBRWpFdEIsZ0RBQVNBLENBQUM7UUFDUixJQUFJa0Isa0JBQWtCLGlCQUFpQjtZQUNyQ1gsT0FBT2dCLE9BQU8sQ0FBQztRQUNqQjtJQUNGLEdBQUc7UUFBQ0w7UUFBZVg7S0FBTztJQUUxQixNQUFNaUIsZUFBZSxDQUFDZjtRQUNwQixNQUFNZ0IsYUFBYTtRQUNuQixPQUFPQSxXQUFXQyxJQUFJLENBQUNqQjtJQUN6QjtJQUVBLE1BQU1rQixlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1wQixRQUFRbUIsRUFBRUUsTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsS0FBSztRQUMvQixNQUFNcEIsV0FBV2lCLEVBQUVFLE1BQU0sQ0FBQyxFQUFFLENBQUNDLEtBQUs7UUFFbEMsSUFBSSxDQUFDUCxhQUFhZixRQUFRO1lBQ3hCSyxTQUFTO1lBQ1Q7UUFDRjtRQUVBLElBQUksQ0FBQ0gsWUFBWUEsU0FBU3FCLE1BQU0sR0FBRyxHQUFHO1lBQ3BDbEIsU0FBUztZQUNUO1FBQ0Y7UUFFQSxNQUFNbUIsTUFBTSxNQUFNOUIsdURBQU1BLENBQUMsZUFBZTtZQUN0QytCLFVBQVU7WUFDVnpCO1lBQ0FFO1FBQ0Y7UUFFQSxJQUFJc0IsZ0JBQUFBLDBCQUFBQSxJQUFLcEIsS0FBSyxFQUFFO1lBQ2RDLFNBQVM7WUFDVCxJQUFJbUIsZ0JBQUFBLDBCQUFBQSxJQUFLRSxHQUFHLEVBQUU1QixPQUFPZ0IsT0FBTyxDQUFDO1FBQy9CLE9BQU87WUFDTFQsU0FBUztRQUNYO0lBQ0Y7SUFFQSxJQUFJSSxrQkFBa0IsV0FBVztRQUMvQixxQkFBTyw4REFBQ2tCO3NCQUFHOzs7Ozs7SUFDYjtJQUVBLE9BQ0VsQixrQkFBa0IsaUNBQ2hCLDhEQUFDbUI7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNGO29CQUFHRSxXQUFVOzhCQUEwQzs7Ozs7OzhCQUN4RCw4REFBQ0M7b0JBQUtDLFVBQVViOztzQ0FDZCw4REFBQ2M7NEJBQ0NDLE1BQUs7NEJBQ0xKLFdBQVU7NEJBQ1ZLLGFBQVk7NEJBQ1pDLFFBQVE7Ozs7OztzQ0FFViw4REFBQ0g7NEJBQ0NDLE1BQUs7NEJBQ0xKLFdBQVU7NEJBQ1ZLLGFBQVk7NEJBQ1pDLFFBQVE7Ozs7OztzQ0FFViw4REFBQ0M7NEJBQ0NILE1BQUs7NEJBQ0xKLFdBQVU7O2dDQUVUO2dDQUFJOzs7Ozs7O3NDQUdQLDhEQUFDUTs0QkFBRVIsV0FBVTtzQ0FBaUN6QixTQUFTQTs7Ozs7Ozs7Ozs7OzhCQVV6RCw4REFBQ3dCO29CQUFJQyxXQUFVOzhCQUFpQzs7Ozs7OzhCQUNoRCw4REFBQ3BDLGlEQUFJQTtvQkFDSG9DLFdBQVU7b0JBQ1ZTLE1BQUs7OEJBQ047Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0FwR016Qzs7UUFNNkNGLHVEQUFVQTtRQUV4QkMsZ0RBQU9BOzs7S0FSdENDO0FBc0dOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3g/ZmM2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBzaWduSW4sIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vaG9va3MvYXV0aFwiO1xyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgLy8gY29uc3Qgc2Vzc2lvbiA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1czogc2Vzc2lvblN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xyXG5cclxuICBjb25zdCB7IGxvZ2luLCBpc0xvYWRpbmcsIHVzZXIgfSA9IHVzZUF1dGgoeyBtaWRkbGV3YXJlOiBcImd1ZXN0XCIgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2Vzc2lvblN0YXR1cyA9PT0gXCJhdXRoZW50aWNhdGVkXCIpIHtcclxuICAgICAgcm91dGVyLnJlcGxhY2UoXCIvZGFzaGJvYXJkXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtzZXNzaW9uU3RhdHVzLCByb3V0ZXJdKTtcclxuXHJcbiAgY29uc3QgaXNWYWxpZEVtYWlsID0gKGVtYWlsOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGVtYWlsUmVnZXggPSAvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Mix9JC9pO1xyXG4gICAgcmV0dXJuIGVtYWlsUmVnZXgudGVzdChlbWFpbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IGFueSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZW1haWwgPSBlLnRhcmdldFswXS52YWx1ZTtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gZS50YXJnZXRbMV0udmFsdWU7XHJcblxyXG4gICAgaWYgKCFpc1ZhbGlkRW1haWwoZW1haWwpKSB7XHJcbiAgICAgIHNldEVycm9yKFwiRW1haWwgaXMgaW52YWxpZFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcGFzc3dvcmQgfHwgcGFzc3dvcmQubGVuZ3RoIDwgOCkge1xyXG4gICAgICBzZXRFcnJvcihcIlBhc3N3b3JkIGlzIGludmFsaWRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7XHJcbiAgICAgIHJlZGlyZWN0OiBmYWxzZSxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHJlcz8uZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3IoXCJJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkXCIpO1xyXG4gICAgICBpZiAocmVzPy51cmwpIHJvdXRlci5yZXBsYWNlKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEVycm9yKFwiXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGlmIChzZXNzaW9uU3RhdHVzID09PSBcImxvYWRpbmdcIikge1xyXG4gICAgcmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgc2Vzc2lvblN0YXR1cyAhPT0gXCJhdXRoZW50aWNhdGVkXCIgJiYgKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMyMTIxMjFdIHAtOCByb3VuZGVkIHNoYWRvdy1tZCB3LTk2XCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgdGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZCBtYi04XCI+TG9naW48L2gxPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWJsYWNrIHJvdW5kZWQgcHgtMyBweS0yIG1iLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTQwMCBmb2N1czp0ZXh0LWJsYWNrXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtYmxhY2sgcm91bmRlZCBweC0zIHB5LTIgbWItNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNDAwIGZvY3VzOnRleHQtYmxhY2tcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweS0yIHJvdW5kZWQgaG92ZXI6YmctYmx1ZS02MDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIFNpZ24gSW5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCB0ZXh0LVsxNnB4XSBtYi00XCI+e2Vycm9yICYmIGVycm9yfTwvcD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjayB0ZXh0LXdoaXRlIHB5LTIgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTgwMFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzaWduSW4oXCJnaXRodWJcIik7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFNpZ24gSW4gd2l0aCBHaXRodWJcclxuICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1ncmF5LTUwMCBtdC00XCI+LSBPUiAtPC9kaXY+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWNlbnRlciB0ZXh0LWJsdWUtNTAwIGhvdmVyOnVuZGVybGluZSBtdC0yXCJcclxuICAgICAgICAgICAgaHJlZj1cIi9yZWdpc3RlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFJlZ2lzdGVyIEhlcmVcclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJzaWduSW4iLCJ1c2VTZXNzaW9uIiwidXNlQXV0aCIsIkxvZ2luIiwicm91dGVyIiwidXNlUm91dGVyIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvciIsInNldEVycm9yIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0dXMiLCJzZXNzaW9uU3RhdHVzIiwibG9naW4iLCJpc0xvYWRpbmciLCJ1c2VyIiwibWlkZGxld2FyZSIsInJlcGxhY2UiLCJpc1ZhbGlkRW1haWwiLCJlbWFpbFJlZ2V4IiwidGVzdCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwicmVzIiwicmVkaXJlY3QiLCJ1cmwiLCJoMSIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJidXR0b24iLCJwIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.tsx\n"));

/***/ })

});