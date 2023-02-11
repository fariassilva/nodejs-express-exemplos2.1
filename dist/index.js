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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_user_userController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/user/userController */ \"./src/modules/user/userController.js\");\n/* harmony import */ var _modules_post_postController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/post/postController */ \"./src/modules/post/postController.js\");\n\r\n\r\n\r\nconst app = express__WEBPACK_IMPORTED_MODULE_0__()\r\napp.use(express__WEBPACK_IMPORTED_MODULE_0__.json())\r\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_1__())\r\n\r\n;\r\n\r\n\r\napp.use('/user',_modules_user_userController__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\r\napp.use('/post',_modules_post_postController__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\r\n\r\n\r\napp.listen(3000, () => console.log('ONLINE http://localhost:3000'))\n\n//# sourceURL=webpack://projeto2/./src/index.js?");

/***/ }),

/***/ "./src/modules/post/postController.js":
/*!********************************************!*\
  !*** ./src/modules/post/postController.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/auth */ \"./src/utils/auth.js\");\n/* harmony import */ var _postService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postService */ \"./src/modules/post/postService.js\");\n\r\n\r\n\r\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)()\r\n\r\nrouter.post('/',_utils_auth__WEBPACK_IMPORTED_MODULE_1__.verifyAcessToken, (req, res) => {\r\n  try {\r\n    const post = (0,_postService__WEBPACK_IMPORTED_MODULE_2__.createPost)(req.body,req.user)\r\n    res.status(200).send(post)\r\n  } catch (err) {\r\n    res.status(500).send(err.message)\r\n  }\r\n})\r\n\r\nrouter.get('/:id?',_utils_auth__WEBPACK_IMPORTED_MODULE_1__.verifyAcessToken, (req, res) => {\r\n  try {\r\n    const posts = (0,_postService__WEBPACK_IMPORTED_MODULE_2__.getPosts)(req.params.id)\r\n    res.status(200).send(posts)\r\n  } catch (err) {\r\n    res.status(500).send(err.message)\r\n  }\r\n  \r\n})\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://projeto2/./src/modules/post/postController.js?");

/***/ }),

/***/ "./src/modules/post/postService.js":
/*!*****************************************!*\
  !*** ./src/modules/post/postService.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPost\": () => (/* binding */ createPost),\n/* harmony export */   \"getPosts\": () => (/* binding */ getPosts)\n/* harmony export */ });\nlet posts = []\r\n\r\n\r\nconst createPost = (data, user) => {\r\nconsole.log({\r\n  data,\r\n  user\r\n})\r\n  const post = {\r\n    createdBy: user.email,\r\n    ...data\r\n  }\r\n  posts.push(post)\r\n\r\n  return post\r\n\r\n\r\n\r\n}\r\nconst getPosts = (id) => {\r\n\r\n  if (id) {\r\n    const post = posts[id]\r\n return\r\n  }\r\n  return posts\r\n\r\n\r\n}\n\n//# sourceURL=webpack://projeto2/./src/modules/post/postService.js?");

/***/ }),

/***/ "./src/modules/user/userController.js":
/*!********************************************!*\
  !*** ./src/modules/user/userController.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _userService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userService */ \"./src/modules/user/userService.js\");\n\r\n\r\n\r\n\r\nconst AUTH_COOKIE_NAME = 'autorizado'\r\n\r\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)()\r\n\r\nrouter.post('/signup', (req, res) => {\r\ntry{\r\n  const token = (0,_userService__WEBPACK_IMPORTED_MODULE_1__.signup)(req.body)\r\n  res.cookie(AUTH_COOKIE_NAME,token).status(201).send(token)\r\n} catch (err) {\r\n  if(err.message === 'email_existente')\r\n  return res.status(400).send(err.message)\r\n  res.status(500).send(err.message)\r\n\r\n\r\n}\r\n\r\n})\r\n\r\nrouter.post('/login', (req, res) => {\r\n try {\r\n  const token = (0,_userService__WEBPACK_IMPORTED_MODULE_1__.login)(req.body)\r\n  res.cookie(AUTH_COOKIE_NAME,token).status(200).send(token)\r\n } catch (err) {\r\n  if(err.message === 'email_nao_encontrado' || err.message === 'senha_incorreta')\r\n  return res.status(400).send(err.message)\r\n\r\n  res.status(500).send()\r\n }\r\n})\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://projeto2/./src/modules/user/userController.js?");

/***/ }),

/***/ "./src/modules/user/userService.js":
/*!*****************************************!*\
  !*** ./src/modules/user/userService.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signup\": () => (/* binding */ signup),\n/* harmony export */   \"login\": () => (/* binding */ login)\n/* harmony export */ });\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/auth */ \"./src/utils/auth.js\");\n\r\n\r\nlet users = []\r\n\r\n\r\n\r\nconst getUserByEmail = (searchEmail) =>\r\n users.find((obj) => obj.email === searchEmail)\r\n\r\nconst signup = (data) => {\r\n  if(getUserByEmail(data.email)) throw new Error('email_existente')\r\n\r\n    users.push(data)\r\n  \r\n  return (0,_utils_auth__WEBPACK_IMPORTED_MODULE_0__.generateAccessToken)({email: data.email})\r\n}\r\n\r\nconst login = (data) =>{\r\n\r\n  const user = getUserByEmail(data.email)\r\n  if(!user) throw new Error('email_nao_encontrado')\r\n\r\n  if(user.password !== data.password) throw new Error('senha_incorreta')\r\n\r\n\r\nreturn (0,_utils_auth__WEBPACK_IMPORTED_MODULE_0__.generateAccessToken)({email: data.email})\r\n}\n\n//# sourceURL=webpack://projeto2/./src/modules/user/userService.js?");

/***/ }),

/***/ "./src/utils/auth.js":
/*!***************************!*\
  !*** ./src/utils/auth.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateAccessToken\": () => (/* binding */ generateAccessToken),\n/* harmony export */   \"verifyAcessToken\": () => (/* binding */ verifyAcessToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\nconst AUTH_SECRET = 'secret'\r\n\r\n const generateAccessToken = (data) => (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.sign)(data, AUTH_SECRET)\r\n\r\n const verifyAcessToken = (req,res,next) =>{\r\n\r\n  try {\r\n    const {autorizado} = req.cookies\r\n\r\n    if(!autorizado) throw new Error('nao_autorizado')\r\n\r\n    const user = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(autorizado, AUTH_SECRET)\r\n    req.user = user\r\n    next()\r\n  } catch (err) {\r\n\r\n    res.status(401).send()\r\n    \r\n  }\r\n }\n\n//# sourceURL=webpack://projeto2/./src/utils/auth.js?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;