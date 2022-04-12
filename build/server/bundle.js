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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./client/components/App/style.scss\");\n/* harmony import */ var _StartBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StartBar */ \"./client/components/StartBar/index.jsx\");\n/* harmony import */ var _Folder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Folder */ \"./client/components/Folder/index.jsx\");\n\n\n\n // import Window from './window';\n// import StartMenu from './startMenu';\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].app\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StartBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Folder__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    position: {\n      left: 5,\n      top: 5\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Folder__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    position: {\n      left: 5,\n      top: 75\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Folder__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    position: {\n      left: 5,\n      top: 145\n    }\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://personal-site/./client/components/App/index.jsx?");

/***/ }),

/***/ "./client/components/Clock/index.jsx":
/*!*******************************************!*\
  !*** ./client/components/Clock/index.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Clock)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _internet_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internet.png */ \"./client/components/Clock/internet.png\");\n/* harmony import */ var _sound_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sound.png */ \"./client/components/Clock/sound.png\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./client/components/Clock/style.scss\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nfunction Clock() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('text--visible'),\n      _useState2 = _slicedToArray(_useState, 2),\n      textClass = _useState2[0],\n      setTextClass = _useState2[1];\n\n  var today = new Date();\n  var hour = today.getHours();\n  var minute = today.getMinutes();\n  var seconds = today.getSeconds();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var timer = setTimeout(function () {\n      if (textClass === 'text--visible') {\n        setTextClass('text--invisible');\n      } else {\n        setTextClass('text--visible');\n      }\n    }, 1000);\n    return function () {\n      return clearTimeout(timer);\n    };\n  }, [textClass, seconds]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3__[\"default\"].clock\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: _internet_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    alt: \"Internet\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: _sound_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    alt: \"Sound\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_3__[\"default\"].clockText\n  }, hour, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: textClass\n  }, \":\"), minute));\n}\n\n//# sourceURL=webpack://personal-site/./client/components/Clock/index.jsx?");

/***/ }),

/***/ "./client/components/Folder/index.jsx":
/*!********************************************!*\
  !*** ./client/components/Folder/index.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Folder)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _folder_closed_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder_closed.png */ \"./client/components/Folder/folder_closed.png\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./client/components/Folder/style.scss\");\n\n // import ClickedFolder from './folder_closed_selected.png';\n\n\nfunction Folder(_ref) {\n  var position = _ref.position;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_2__[\"default\"].folder,\n    style: position\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    alt: \"Folder\",\n    src: _folder_closed_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Folder\"));\n}\n\n//# sourceURL=webpack://personal-site/./client/components/Folder/index.jsx?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StartBarButton)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./client/components/StartBarButton/style.scss\");\n/* harmony import */ var _startBarButton_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startBarButton.png */ \"./client/components/StartBarButton/startBarButton.png\");\n\n\n\nfunction StartBarButton() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].startBarButton\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].startBarButtonWrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: _style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].startBarButton__logo,\n    alt: \"Logo\",\n    src: _startBarButton_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  })));\n}\n\n//# sourceURL=webpack://personal-site/./client/components/StartBarButton/index.jsx?");

/***/ }),

/***/ "./server/index.jsx":
/*!**************************!*\
  !*** ./server/index.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_components_App_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/components/App/index */ \"./client/components/App/index.jsx\");\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\nvar port = 3000;\napp.get('/', function (req, res) {\n  var jsx = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_client_components_App_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n  var clientBundleScript = '<script src=\"http://localhost:8080/scripts/bundle.js\"></script>';\n  var clientBundleStyle = '<link rel=\"stylesheet\" href=\"http://localhost:8080/styles/bundle.css\">';\n  res.send(\"\\n    <!DOCTYPE html>\\n      <html lang=\\\"en\\\">\\n      <head>\\n        <meta charset=\\\"UTF-8\\\">\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n        <title>Eric Heinmiller's site</title>\\n        <style>\\n          html, body, #ssr-app {\\n            width: 100%;\\n            height: 100%;\\n            margin: 0px;\\n          }\\n        </style>\\n        \".concat(clientBundleStyle, \"\\n      </head>\\n      <body>\\n        <div id='ssr-app'>\").concat(jsx, \"</div>\\n        \").concat(clientBundleScript, \"\\n      </body>\\n    </html>\\n  \"));\n});\napp.listen(port, function () {\n  console.log(\"App listening on http://localhost:\".concat(port));\n});\n\n//# sourceURL=webpack://personal-site/./server/index.jsx?");

/***/ }),

/***/ "./client/components/App/style.scss":
/*!******************************************!*\
  !*** ./client/components/App/style.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"app\": \"app_GM3v5\"\n});\n\n\n//# sourceURL=webpack://personal-site/./client/components/App/style.scss?");

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

/***/ "./client/components/Clock/internet.png":
/*!**********************************************!*\
  !*** ./client/components/Clock/internet.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"http://localhost:8080/internet.png\");\n\n//# sourceURL=webpack://personal-site/./client/components/Clock/internet.png?");

/***/ }),

/***/ "./client/components/Clock/sound.png":
/*!*******************************************!*\
  !*** ./client/components/Clock/sound.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"http://localhost:8080/sound.png\");\n\n//# sourceURL=webpack://personal-site/./client/components/Clock/sound.png?");

/***/ }),

/***/ "./client/components/Folder/folder_closed.png":
/*!****************************************************!*\
  !*** ./client/components/Folder/folder_closed.png ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"http://localhost:8080/folder_closed.png\");\n\n//# sourceURL=webpack://personal-site/./client/components/Folder/folder_closed.png?");

/***/ }),

/***/ "./client/components/StartBarButton/startBarButton.png":
/*!*************************************************************!*\
  !*** ./client/components/StartBarButton/startBarButton.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"http://localhost:8080/startBarButton.png\");\n\n//# sourceURL=webpack://personal-site/./client/components/StartBarButton/startBarButton.png?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.jsx");
/******/ 	
/******/ })()
;