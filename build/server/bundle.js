/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/components/App/index.jsx":
/*!*****************************************!*\
  !*** ./client/components/App/index.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./client/components/App/style.scss\");\n/* harmony import */ var _StartBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StartBar */ \"./client/components/StartBar/index.jsx\");\n/* harmony import */ var _Folder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Folder */ \"./client/components/Folder/index.jsx\");\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/index */ \"./client/context/index.jsx\");\n/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Window */ \"./client/components/Window/index.jsx\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n // import StartMenu from './startMenu';\n\nfunction App() {\n  var state = (0,_context_index__WEBPACK_IMPORTED_MODULE_4__.useState)();\n  var dispatch = (0,_context_index__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState([]),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      windows = _React$useState2[0],\n      setWindows = _React$useState2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {\n    windows.forEach(function (window) {\n      if (window.title === state.title) {\n        setWindows(windows.filter(function (item) {\n          return item.title !== state.title;\n        }));\n      }\n    });\n  }, [state.title]);\n\n  var handleMouseMove = function handleMouseMove(e) {\n    console.log('here', state);\n    if (state.targetElement === null) return;\n    var left = e.clientX;\n    var top = e.clientY;\n    dispatch({\n      type: 'moveTarget',\n      payload: {\n        top: top,\n        left: left\n      }\n    });\n  };\n\n  var handleMouseUp = function handleMouseUp() {\n    dispatch({\n      type: 'unSelectTarget'\n    });\n  };\n\n  var handleWindow = function handleWindow(title) {\n    if (windows.length === 0) {\n      setWindows([{\n        title: title,\n        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Window__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          initial: {\n            left: 100,\n            top: 150\n          },\n          title: title,\n          key: title\n        })\n      }]);\n      return;\n    }\n\n    var exists = false;\n    windows.forEach(function (window) {\n      if (window.title === title) {\n        exists = true;\n      }\n    });\n\n    if (!exists) {\n      setWindows([].concat(_toConsumableArray(windows), [{\n        title: title,\n        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Window__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          initial: {\n            left: 100,\n            top: 150\n          },\n          title: title,\n          key: title\n        })\n      }]));\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onMouseMove: function onMouseMove(e) {\n      return handleMouseMove(e);\n    },\n    onMouseUp: function onMouseUp() {\n      return handleMouseUp();\n    },\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].app\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StartBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Folder__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    initial: {\n      left: 30,\n      top: 5\n    },\n    title: \"Resume\",\n    window: handleWindow\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Folder__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    initial: {\n      left: 30,\n      top: 75\n    },\n    title: \"Social\",\n    window: handleWindow\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Folder__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    initial: {\n      left: 30,\n      top: 145\n    },\n    title: \"Contact\",\n    window: handleWindow\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Folder__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    initial: {\n      left: 30,\n      top: 215\n    },\n    title: \"Explorer\",\n    window: handleWindow\n  }), windows.map(function (window) {\n    return window.content;\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://personal-site/./client/components/App/index.jsx?");

/***/ }),

/***/ "./client/components/Bar/index.jsx":
/*!*****************************************!*\
  !*** ./client/components/Bar/index.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bar)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _items_directory_closed_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../items/directory_closed-1.png */ \"./client/items/directory_closed-1.png\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./client/components/Bar/style.scss\");\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/index */ \"./client/context/index.jsx\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nfunction Bar(_ref) {\n  var title = _ref.title;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      pressed = _React$useState2[0],\n      setPressed = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null),\n      _React$useState4 = _slicedToArray(_React$useState3, 2),\n      modification = _React$useState4[0],\n      setModification = _React$useState4[1];\n\n  var dispatch = (0,_context_index__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n\n  var handleButtonDown = function handleButtonDown() {\n    setPressed(true);\n  };\n\n  var handleButtonUp = function handleButtonUp() {\n    dispatch({\n      type: 'closeWindow',\n      payload: {\n        title: title\n      }\n    });\n    setPressed(false);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].windowBar,\n    style: modification\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].windowTitle\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: _items_directory_closed_1_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].windowTitle_icon,\n    alt: \"Icon\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].windowTitle__title\n  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\",\n    onMouseDown: function onMouseDown() {\n      return handleButtonDown();\n    },\n    onMouseUp: function onMouseUp() {\n      return handleButtonUp();\n    },\n    className: pressed ? _style_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].windowButton__pressed : _style_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].windowButton\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].windowButton__icon\n  }, \"x\")));\n}\n\n//# sourceURL=webpack://personal-site/./client/components/Bar/index.jsx?");

/***/ }),

/***/ "./client/components/Clock/index.jsx":
/*!*******************************************!*\
  !*** ./client/components/Clock/index.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Clock)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _items_internet_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../items/internet.png */ \"./client/items/internet.png\");\n/* harmony import */ var _items_sound_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../items/sound.png */ \"./client/items/sound.png\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./client/components/Clock/style.scss\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nfunction Clock() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('text--visible'),\n      _useState2 = _slicedToArray(_useState, 2),\n      textClass = _useState2[0],\n      setTextClass = _useState2[1];\n\n  var today = new Date();\n  var hour = today.getHours();\n  var minute = today.getMinutes();\n  var seconds = today.getSeconds();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var timer = setTimeout(function () {\n      if (textClass === 'text--visible') {\n        setTextClass('text--invisible');\n      } else {\n        setTextClass('text--visible');\n      }\n    }, 1000);\n    return function () {\n      return clearTimeout(timer);\n    };\n  }, [textClass, seconds]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3__[\"default\"].clock\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: _items_internet_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    alt: \"Internet\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: _items_sound_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    alt: \"Sound\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3__[\"default\"].clockText\n  }, hour, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: textClass\n  }, \":\"), minute));\n}\n\n//# sourceURL=webpack://personal-site/./client/components/Clock/index.jsx?");

/***/ }),

/***/ "./client/components/Folder/index.jsx":
/*!********************************************!*\
  !*** ./client/components/Folder/index.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Folder)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _items_folder_closed_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../items/folder_closed.png */ \"./client/items/folder_closed.png\");\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/index */ \"./client/context/index.jsx\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./client/components/Folder/style.scss\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar timer = null;\nfunction Folder(_ref) {\n  var initial = _ref.initial,\n      title = _ref.title,\n      window = _ref.window;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(initial),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      modification = _React$useState2[0],\n      setModification = _React$useState2[1];\n\n  var targetElement = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  var state = (0,_context_index__WEBPACK_IMPORTED_MODULE_2__.useState)();\n  var dispatch = (0,_context_index__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {\n    console.log('state', state);\n\n    if (state.targetElement === targetElement && state.top !== null) {\n      setModification({\n        top: state.top,\n        left: state.left\n      });\n    }\n  }, [state]);\n\n  var handleClick = function handleClick(e) {\n    if (timer) {\n      clearTimeout(timer);\n      timer = null;\n      window(title);\n    } else {\n      timer = setTimeout(100);\n      return function () {\n        return clearTimeout(timer);\n      };\n    }\n  };\n\n  var handleMouseDown = function handleMouseDown(e) {\n    var left = e.clientX - parseInt(targetElement.current.style.left, 10);\n    var top = e.clientY - parseInt(targetElement.current.style.top, 10);\n    dispatch({\n      type: 'SelectTarget',\n      payload: {\n        left: left,\n        top: top,\n        targetElement: targetElement\n      }\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: function onClick(e) {\n      return handleClick(e);\n    },\n    draggable: \"false\",\n    ref: targetElement,\n    onMouseDown: function onMouseDown(e) {\n      return handleMouseDown(e);\n    },\n    type: \"button\",\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3__[\"default\"].folder,\n    style: modification\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    draggable: \"false\",\n    alt: \"Folder\",\n    src: _items_folder_closed_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, title));\n}\n\n//# sourceURL=webpack://personal-site/./client/components/Folder/index.jsx?");

/***/ }),

/***/ "./client/components/Icon/index.jsx":
/*!******************************************!*\
  !*** ./client/components/Icon/index.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Icon)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./client/components/Icon/style.scss\");\n\n\nfunction Icon(_ref) {\n  var icon = _ref.icon;\n  var noUrl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].icon\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: icon.file,\n    download: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: icon.icon,\n    alt: \"icon\",\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].icon__icon\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].icon__title\n  }, icon.title)));\n  var withUrl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].icon\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: icon.url\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: icon.icon,\n    alt: \"icon\",\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].icon__icon\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].icon__title\n  }, icon.title)));\n  return icon.url ? withUrl : noUrl;\n}\n\n//# sourceURL=webpack://personal-site/./client/components/Icon/index.jsx?");

/***/ }),

/***/ "./client/components/StartBar/index.jsx":
/*!**********************************************!*\
  !*** ./client/components/StartBar/index.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StartBar)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./client/components/StartBar/style.scss\");\n/* harmony import */ var _StartBarButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StartBarButton */ \"./client/components/StartBarButton/index.jsx\");\n/* harmony import */ var _Clock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Clock */ \"./client/components/Clock/index.jsx\");\n\n\n\n // import StartBarButton from '../components/startBarButton';\n// import { toggleStartMenu } from '../actions/folderActions';\n\nfunction StartBar() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].startBar\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StartBarButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].breakLeft\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"break\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Clock__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n}\n\n//# sourceURL=webpack://personal-site/./client/components/StartBar/index.jsx?");

/***/ }),

/***/ "./client/components/StartBarButton/index.jsx":
/*!****************************************************!*\
  !*** ./client/components/StartBarButton/index.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StartBarButton)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./client/components/StartBarButton/style.scss\");\n/* harmony import */ var _items_startBarButton_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../items/startBarButton.png */ \"./client/items/startBarButton.png\");\n\n\n\nfunction StartBarButton() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].startBarButton\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].startBarButtonWrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].startBarButton__logo,\n    alt: \"Logo\",\n    src: _items_startBarButton_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  })));\n}\n\n//# sourceURL=webpack://personal-site/./client/components/StartBarButton/index.jsx?");

/***/ }),

/***/ "./client/components/Window/index.jsx":
/*!********************************************!*\
  !*** ./client/components/Window/index.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./client/components/Window/style.scss\");\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon */ \"./client/components/Icon/index.jsx\");\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../content */ \"./client/content.js\");\n/* harmony import */ var _Bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Bar */ \"./client/components/Bar/index.jsx\");\n/* harmony import */ var _context_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/index */ \"./client/context/index.jsx\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nfunction Window(_ref) {\n  var title = _ref.title,\n      initial = _ref.initial;\n  var targetElement = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(initial),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      modification = _React$useState2[0],\n      setModification = _React$useState2[1];\n\n  var state = (0,_context_index__WEBPACK_IMPORTED_MODULE_5__.useState)();\n  var dispatch = (0,_context_index__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {\n    if (state.targetElement === targetElement && state.top !== null) {\n      setModification(_objectSpread(_objectSpread({}, modification), {}, {\n        top: state.top,\n        left: state.left\n      }));\n    }\n  }, [state]);\n\n  var handleMouseDown = function handleMouseDown(e) {\n    var left = e.clientX - parseInt(targetElement.current.style.left, 10);\n    var top = e.clientY - parseInt(targetElement.current.style.top, 10);\n    dispatch({\n      type: 'selectTarget',\n      payload: {\n        left: left,\n        top: top,\n        targetElement: targetElement,\n        title: title\n      }\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onMouseDown: function onMouseDown(e) {\n      return handleMouseDown(e);\n    },\n    ref: targetElement,\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].window,\n    style: modification\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Bar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: title\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].windowWindow\n  }, _content__WEBPACK_IMPORTED_MODULE_3__[\"default\"][title].map(function (icon) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      icon: icon\n    });\n  })));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Window);\n\n//# sourceURL=webpack://personal-site/./client/components/Window/index.jsx?");

/***/ }),

/***/ "./client/content.js":
/*!***************************!*\
  !*** ./client/content.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _items_resume_pdf_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items/resume-pdf.png */ \"./client/items/resume-pdf.png\");\n/* harmony import */ var _items_Eric_Heinmiller_resume_pdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items/Eric_Heinmiller_resume.pdf */ \"./client/items/Eric_Heinmiller_resume.pdf\");\n/* harmony import */ var _items_resume_text_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items/resume-text.png */ \"./client/items/resume-text.png\");\n/* harmony import */ var _items_Eric_Heinmiller_resume_txt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items/Eric_Heinmiller_resume.txt */ \"./client/items/Eric_Heinmiller_resume.txt\");\n/* harmony import */ var _items_resume_word_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./items/resume-word.png */ \"./client/items/resume-word.png\");\n/* harmony import */ var _items_Eric_Heinmiller_resume_docx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items/Eric_Heinmiller_resume.docx */ \"./client/items/Eric_Heinmiller_resume.docx\");\n/* harmony import */ var _items_webpage_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./items/webpage.png */ \"./client/items/webpage.png\");\n/* harmony import */ var _items_email_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./items/email.png */ \"./client/items/email.png\");\n/* harmony import */ var _items_phone_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./items/phone.png */ \"./client/items/phone.png\");\n/* harmony import */ var _items_Windows_icon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./items/Windows-icon.png */ \"./client/items/Windows-icon.png\");\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  Resume: [{\n    icon: _items_resume_pdf_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    title: 'resume.pdf',\n    file: _items_Eric_Heinmiller_resume_pdf__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }, {\n    icon: _items_resume_text_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    title: 'resume.txt',\n    file: _items_Eric_Heinmiller_resume_txt__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }, {\n    icon: _items_resume_word_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    title: 'resume.word',\n    file: _items_Eric_Heinmiller_resume_docx__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }],\n  Social: [{\n    icon: _items_webpage_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    title: 'Github.com',\n    url: 'https://www.github.com/ericheinmiller'\n  }, {\n    icon: _items_webpage_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    title: 'Linkedin.com',\n    url: 'https://www.linkedin.com/in/ericheinmiller'\n  }],\n  Contact: [{\n    icon: _items_email_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    title: 'Email me',\n    url: 'mailto:ericheinmiller@gmail.com'\n  }, {\n    icon: _items_phone_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    title: '408-660-9990'\n  }],\n  Apps: [{\n    icon: _items_Windows_icon_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    title: 'The Wall',\n    url: 'http://localhost:8080'\n  }],\n  Iterm: [{\n    icon: _items_Windows_icon_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    title: 'Mini posts',\n    url: 'http://localhost:8080'\n  }]\n});\n\n//# sourceURL=webpack://personal-site/./client/content.js?");

/***/ }),

/***/ "./client/context/index.jsx":
/*!**********************************!*\
  !*** ./client/context/index.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CombinedProviders),\n/* harmony export */   \"useDispatch\": () => (/* binding */ useDispatch),\n/* harmony export */   \"useState\": () => (/* binding */ useState)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./position */ \"./client/context/position.jsx\");\n/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window */ \"./client/context/window.jsx\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar combineDispatch = function combineDispatch() {\n  for (var _len = arguments.length, dispatches = new Array(_len), _key = 0; _key < _len; _key++) {\n    dispatches[_key] = arguments[_key];\n  }\n\n  return function (action) {\n    dispatches.forEach(function (dispatch) {\n      return dispatch(action);\n    });\n  };\n};\n\nvar DispatchContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();\nvar StateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();\nfunction CombinedProviders(_ref) {\n  var children = _ref.children;\n\n  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0___default().useReducer(_position__WEBPACK_IMPORTED_MODULE_1__.positionReducer, _position__WEBPACK_IMPORTED_MODULE_1__.positionState),\n      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),\n      s1 = _React$useReducer2[0],\n      d1 = _React$useReducer2[1];\n\n  var _React$useReducer3 = react__WEBPACK_IMPORTED_MODULE_0___default().useReducer(_window__WEBPACK_IMPORTED_MODULE_2__.windowReducer, _window__WEBPACK_IMPORTED_MODULE_2__.windowState),\n      _React$useReducer4 = _slicedToArray(_React$useReducer3, 2),\n      s2 = _React$useReducer4[0],\n      d2 = _React$useReducer4[1];\n\n  var combinedDispatch = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(combineDispatch(d1, d2), [d1, d2]);\n  var combinedState = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(function () {\n    return _objectSpread(_objectSpread({}, s1), s2);\n  }, [s1, s2]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DispatchContext.Provider, {\n    value: combinedDispatch\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StateContext.Provider, {\n    value: combinedState\n  }, children));\n}\n\nfunction useState() {\n  var context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(StateContext);\n\n  if (context === undefined) {\n    throw new Error('useCount must be used within a CountProvider');\n  }\n\n  return context;\n}\n\nfunction useDispatch() {\n  var context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(DispatchContext);\n\n  if (context === undefined) {\n    throw new Error('useCount must be used within a CountProvider');\n  }\n\n  return context;\n}\n\n\n\n//# sourceURL=webpack://personal-site/./client/context/index.jsx?");

/***/ }),

/***/ "./client/context/position.jsx":
/*!*************************************!*\
  !*** ./client/context/position.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"positionReducer\": () => (/* binding */ positionReducer),\n/* harmony export */   \"positionState\": () => (/* binding */ positionState)\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar positionState = {\n  initialLeft: null,\n  initialTop: null,\n  top: null,\n  left: null,\n  targetElement: null\n};\n\nfunction positionReducer(state, action) {\n  console.log('action type: ', action.type);\n  console.log('payload: ', action.payload);\n\n  switch (action.type) {\n    case 'selectTarget':\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          initialLeft: action.payload.left,\n          initialTop: action.payload.top,\n          targetElement: action.payload.targetElement\n        });\n      }\n\n    case 'unSelectTarget':\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          top: null,\n          left: null,\n          initialLeft: null,\n          initialTop: null,\n          targetElement: null\n        });\n      }\n\n    case 'moveTarget':\n      {\n        var left = action.payload.left - state.initialLeft;\n        var top = action.payload.top - state.initialTop;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          left: left,\n          top: top\n        });\n      }\n\n    default:\n      {\n        return state;\n      }\n  }\n}\n\n\n\n//# sourceURL=webpack://personal-site/./client/context/position.jsx?");

/***/ }),

/***/ "./client/context/window.jsx":
/*!***********************************!*\
  !*** ./client/context/window.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"windowReducer\": () => (/* binding */ windowReducer),\n/* harmony export */   \"windowState\": () => (/* binding */ windowState)\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar windowState = {\n  title: null,\n  highlight: null\n};\n\nfunction windowReducer(state, action) {\n  switch (action.type) {\n    case 'closeWindow':\n      {\n        return {\n          title: action.payload.title\n        };\n      }\n\n    case 'set':\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          highlight: action.payload.title\n        });\n      }\n\n    default:\n      {\n        return state;\n      }\n  }\n}\n\n\n\n//# sourceURL=webpack://personal-site/./client/context/window.jsx?");

/***/ }),

/***/ "./server/index.jsx":
/*!**************************!*\
  !*** ./server/index.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_components_App_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/components/App/index */ \"./client/components/App/index.jsx\");\n/* harmony import */ var _client_context_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/context/index */ \"./client/context/index.jsx\");\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\nvar port = 3000;\napp.get('/', function (req, res) {\n  var jsx = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_client_context_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_client_components_App_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)));\n  var clientBundleScript = '<script src=\"http://localhost:8080/scripts/bundle.js\"></script>';\n  var clientBundleStyle = '<link rel=\"stylesheet\" href=\"http://localhost:8080/styles/bundle.css\">';\n  res.send(\"\\n    <!DOCTYPE html>\\n      <html lang=\\\"en\\\">\\n      <head>\\n        <meta charset=\\\"UTF-8\\\">\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n        <title>Eric Heinmiller's site</title>\\n        <style>\\n          html, body, #ssr-app {\\n            width: 100%;\\n            height: 100%;\\n            margin: 0px;\\n          }\\n        </style>\\n        \".concat(clientBundleStyle, \"\\n      </head>\\n      <body>\\n        <div id='ssr-app'>\").concat(jsx, \"</div>\\n        \").concat(clientBundleScript, \"\\n      </body>\\n    </html>\\n  \"));\n});\napp.listen(port, function () {\n  console.log(\"App listening on http://localhost:\".concat(port));\n});\n\n//# sourceURL=webpack://personal-site/./server/index.jsx?");

/***/ }),

/***/ "./client/components/App/style.scss":
/*!******************************************!*\
  !*** ./client/components/App/style.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"app\": \"app_GM3v5\"\n});\n\n\n//# sourceURL=webpack://personal-site/./client/components/App/style.scss?");

/***/ }),

/***/ "./client/components/Bar/style.scss":
/*!******************************************!*\
  !*** ./client/components/Bar/style.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"windowBar\": \"windowBar_C2YtK\",\n\t\"windowTitle\": \"windowTitle_azMrp\",\n\t\"windowTitle__title\": \"windowTitle__title_gSoVU\",\n\t\"windowTitleTitle\": \"windowTitle__title_gSoVU\",\n\t\"windowTitle__icon\": \"windowTitle__icon_xmeAS\",\n\t\"windowTitleIcon\": \"windowTitle__icon_xmeAS\",\n\t\"windowButton\": \"windowButton_qIWLt\",\n\t\"windowButton__pressed\": \"windowButton__pressed_Xu3YE\",\n\t\"windowButtonPressed\": \"windowButton__pressed_Xu3YE\",\n\t\"windowButton__icon\": \"windowButton__icon_THM5f\",\n\t\"windowButtonIcon\": \"windowButton__icon_THM5f\"\n});\n\n\n//# sourceURL=webpack://personal-site/./client/components/Bar/style.scss?");

/***/ }),

/***/ "./client/components/Clock/style.scss":
/*!********************************************!*\
  !*** ./client/components/Clock/style.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"text--visible\": \"text--visible_FjxxN\",\n\t\"textVisible\": \"text--visible_FjxxN\",\n\t\"text--invisible\": \"text--invisible_sj36B\",\n\t\"textInvisible\": \"text--invisible_sj36B\",\n\t\"clock\": \"clock_CV9cx\",\n\t\"clockText\": \"clockText_FrWDk\"\n});\n\n\n//# sourceURL=webpack://personal-site/./client/components/Clock/style.scss?");

/***/ }),

/***/ "./client/components/Folder/style.scss":
/*!*********************************************!*\
  !*** ./client/components/Folder/style.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"folder\": \"folder_RToYm\",\n\t\"clickedText\": \"clickedText_aQZvW\"\n});\n\n\n//# sourceURL=webpack://personal-site/./client/components/Folder/style.scss?");

/***/ }),

/***/ "./client/components/Icon/style.scss":
/*!*******************************************!*\
  !*** ./client/components/Icon/style.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"icon\": \"icon_YP4x6\",\n\t\"icon__icon\": \"icon__icon_ZZ5JC\",\n\t\"iconIcon\": \"icon__icon_ZZ5JC\",\n\t\"icon__title\": \"icon__title_CZ3wt\",\n\t\"iconTitle\": \"icon__title_CZ3wt\"\n});\n\n\n//# sourceURL=webpack://personal-site/./client/components/Icon/style.scss?");

/***/ }),

/***/ "./client/components/StartBar/style.scss":
/*!***********************************************!*\
  !*** ./client/components/StartBar/style.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"startBar\": \"startBar_MaJfq\",\n\t\"break\": \"break_uLb1W\",\n\t\"breakLeft\": \"breakLeft_h3WoI\"\n});\n\n\n//# sourceURL=webpack://personal-site/./client/components/StartBar/style.scss?");

/***/ }),

/***/ "./client/components/StartBarButton/style.scss":
/*!*****************************************************!*\
  !*** ./client/components/StartBarButton/style.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"startBarButton\": \"startBarButton_eGMYv\",\n\t\"startBarButtonWrapper\": \"startBarButtonWrapper_YTP2M\",\n\t\"startBarButton__logo\": \"startBarButton__logo_uTsK_\",\n\t\"startBarButtonLogo\": \"startBarButton__logo_uTsK_\"\n});\n\n\n//# sourceURL=webpack://personal-site/./client/components/StartBarButton/style.scss?");

/***/ }),

/***/ "./client/components/Window/style.scss":
/*!*********************************************!*\
  !*** ./client/components/Window/style.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"window\": \"window_NRwjS\",\n\t\"highlight\": \"highlight_RagKO\",\n\t\"windowWindow\": \"windowWindow_x32dg\"\n});\n\n\n//# sourceURL=webpack://personal-site/./client/components/Window/style.scss?");

/***/ }),

/***/ "./client/items/Windows-icon.png":
/*!***************************************!*\
  !*** ./client/items/Windows-icon.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"http://localhost:8080/Windows-icon.png\");\n\n//# sourceURL=webpack://personal-site/./client/items/Windows-icon.png?");

/***/ }),

/***/ "./client/items/directory_closed-1.png":
/*!*********************************************!*\
  !*** ./client/items/directory_closed-1.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"http://localhost:8080/directory_closed-1.png\");\n\n//# sourceURL=webpack://personal-site/./client/items/directory_closed-1.png?");

/***/ }),

/***/ "./client/items/email.png":
/*!********************************!*\
  !*** ./client/items/email.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"http://localhost:8080/email.png\");\n\n//# sourceURL=webpack://personal-site/./client/items/email.png?");

/***/ }),

/***/ "./client/items/folder_closed.png":
/*!****************************************!*\
  !*** ./client/items/folder_closed.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"http://localhost:8080/folder_closed.png\");\n\n//# sourceURL=webpack://personal-site/./client/items/folder_closed.png?");

/***/ }),

/***/ "./client/items/internet.png":
/*!***********************************!*\
  !*** ./client/items/internet.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"http://localhost:8080/internet.png\");\n\n//# sourceURL=webpack://personal-site/./client/items/internet.png?");

/***/ }),

/***/ "./client/items/phone.png":
/*!********************************!*\
  !*** ./client/items/phone.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"http://localhost:8080/phone.png\");\n\n//# sourceURL=webpack://personal-site/./client/items/phone.png?");

/***/ }),

/***/ "./client/items/resume-pdf.png":
/*!*************************************!*\
  !*** ./client/items/resume-pdf.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"http://localhost:8080/resume-pdf.png\");\n\n//# sourceURL=webpack://personal-site/./client/items/resume-pdf.png?");

/***/ }),

/***/ "./client/items/resume-text.png":
/*!**************************************!*\
  !*** ./client/items/resume-text.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"http://localhost:8080/resume-text.png\");\n\n//# sourceURL=webpack://personal-site/./client/items/resume-text.png?");

/***/ }),

/***/ "./client/items/resume-word.png":
/*!**************************************!*\
  !*** ./client/items/resume-word.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"http://localhost:8080/resume-word.png\");\n\n//# sourceURL=webpack://personal-site/./client/items/resume-word.png?");

/***/ }),

/***/ "./client/items/sound.png":
/*!********************************!*\
  !*** ./client/items/sound.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"http://localhost:8080/sound.png\");\n\n//# sourceURL=webpack://personal-site/./client/items/sound.png?");

/***/ }),

/***/ "./client/items/startBarButton.png":
/*!*****************************************!*\
  !*** ./client/items/startBarButton.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"http://localhost:8080/startBarButton.png\");\n\n//# sourceURL=webpack://personal-site/./client/items/startBarButton.png?");

/***/ }),

/***/ "./client/items/webpage.png":
/*!**********************************!*\
  !*** ./client/items/webpage.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"http://localhost:8080/webpage.png\");\n\n//# sourceURL=webpack://personal-site/./client/items/webpage.png?");

/***/ }),

/***/ "./client/items/Eric_Heinmiller_resume.docx":
/*!**************************************************!*\
  !*** ./client/items/Eric_Heinmiller_resume.docx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Eric_Heinmiller_resume.docx\");\n\n//# sourceURL=webpack://personal-site/./client/items/Eric_Heinmiller_resume.docx?");

/***/ }),

/***/ "./client/items/Eric_Heinmiller_resume.pdf":
/*!*************************************************!*\
  !*** ./client/items/Eric_Heinmiller_resume.pdf ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Eric_Heinmiller_resume.pdf\");\n\n//# sourceURL=webpack://personal-site/./client/items/Eric_Heinmiller_resume.pdf?");

/***/ }),

/***/ "./client/items/Eric_Heinmiller_resume.txt":
/*!*************************************************!*\
  !*** ./client/items/Eric_Heinmiller_resume.txt ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"Eric_Heinmiller_resume.txt\");\n\n//# sourceURL=webpack://personal-site/./client/items/Eric_Heinmiller_resume.txt?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.jsx");
/******/ 	
/******/ })()
;