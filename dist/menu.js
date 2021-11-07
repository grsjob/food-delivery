/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\r\n\r\n\r\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBa0M7QUFDQTtBQUNsQztBQUNBLHlEQUFJO0FBQ0oseURBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLWRlbGl2ZXJ5Ly4vc3JjL21lbnUuanM/YWIwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0aCBmcm9tIFwiLi9tb2R1bGVzL2F1dGhcIjtcclxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbW9kdWxlcy9tZW51XCI7XHJcblxyXG5hdXRoKCk7XHJcbm1lbnUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\r\n\tconst buttonAuth = document.querySelector('.button-auth');\r\n\tconst modalAuth = document.querySelector('.modal-auth');\r\n\tconst closeAuth = document.querySelector('.close-auth');\r\n\tconst logInForm = document.getElementById('logInForm');\r\n\tconst inputLogin = document.getElementById('login');\r\n\tconst inputPassword = document.getElementById('password');\r\n\tconst buttonOut = document.querySelector('.button-out');\r\n\tconst userName = document.querySelector('.user-name');\r\n\r\n\r\n\r\n\tconst login = (user) => {\r\n\t\tbuttonAuth.style.display = 'none';\r\n\t\tbuttonOut.style.display = 'flex';\r\n\t\tuserName.style.display = 'flex';\r\n\t\tmodalAuth.style.display = 'none';\r\n\t\tuserName.textContent = user.login;\r\n\t}\r\n\tconst logout = (user) => {\r\n\t\tbuttonAuth.style.display = 'flex';\r\n\t\tbuttonOut.style.display = 'none';\r\n\t\tuserName.style.display = 'none';\r\n\t\tmodalAuth.style.display = 'none';\r\n\t\tuserName.textContent = '';\r\n\t\tlocalStorage.removeItem('user');\r\n\r\n\t}\r\n\r\n\tbuttonAuth.addEventListener('click', () => {\r\n\t\tmodalAuth.style.display = 'flex';\r\n\t})\r\n\tcloseAuth.addEventListener('click', () => {\r\n\t\tmodalAuth.style.display = 'none';\r\n\t})\r\n\r\n\tlogInForm.addEventListener('submit', (event) => {\r\n\t\tevent.preventDefault();\r\n\r\n\t\tconst user = {\r\n\t\t\tlogin: inputLogin.value,\r\n\t\t\tpassword: inputPassword.value\r\n\t\t}\r\n\t\tif (user.login === '' || user.password === '') {\r\n\t\t\talert('Введите логин/пароль');\r\n\t\t\tmodalAuth.style.display = 'none';\r\n\t\t\treturn;\r\n\t\t}\r\n\t\tlocalStorage.setItem('user', JSON.stringify(user));\r\n\t\tlogin(user);\r\n\r\n\t})\r\n\r\n\tbuttonOut.addEventListener('click', () => {\r\n\t\tlogout();\r\n\t})\r\n\r\n\tif (localStorage.getItem('user')) {\r\n\t\tlogin(JSON.parse(localStorage.getItem('user')));\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1kZWxpdmVyeS8uL3NyYy9tb2R1bGVzL2F1dGguanM/ZTdiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhdXRoID0gKCkgPT4ge1xyXG5cdGNvbnN0IGJ1dHRvbkF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWF1dGgnKTtcclxuXHRjb25zdCBtb2RhbEF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYXV0aCcpO1xyXG5cdGNvbnN0IGNsb3NlQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1hdXRoJyk7XHJcblx0Y29uc3QgbG9nSW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ0luRm9ybScpO1xyXG5cdGNvbnN0IGlucHV0TG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4nKTtcclxuXHRjb25zdCBpbnB1dFBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJyk7XHJcblx0Y29uc3QgYnV0dG9uT3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1vdXQnKTtcclxuXHRjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLW5hbWUnKTtcclxuXHJcblxyXG5cclxuXHRjb25zdCBsb2dpbiA9ICh1c2VyKSA9PiB7XHJcblx0XHRidXR0b25BdXRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRidXR0b25PdXQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuXHRcdHVzZXJOYW1lLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcblx0XHRtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdHVzZXJOYW1lLnRleHRDb250ZW50ID0gdXNlci5sb2dpbjtcclxuXHR9XHJcblx0Y29uc3QgbG9nb3V0ID0gKHVzZXIpID0+IHtcclxuXHRcdGJ1dHRvbkF1dGguc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuXHRcdGJ1dHRvbk91dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0dXNlck5hbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0dXNlck5hbWUudGV4dENvbnRlbnQgPSAnJztcclxuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcblxyXG5cdH1cclxuXHJcblx0YnV0dG9uQXV0aC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG5cdH0pXHJcblx0Y2xvc2VBdXRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0bW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0fSlcclxuXHJcblx0bG9nSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRjb25zdCB1c2VyID0ge1xyXG5cdFx0XHRsb2dpbjogaW5wdXRMb2dpbi52YWx1ZSxcclxuXHRcdFx0cGFzc3dvcmQ6IGlucHV0UGFzc3dvcmQudmFsdWVcclxuXHRcdH1cclxuXHRcdGlmICh1c2VyLmxvZ2luID09PSAnJyB8fCB1c2VyLnBhc3N3b3JkID09PSAnJykge1xyXG5cdFx0XHRhbGVydCgn0JLQstC10LTQuNGC0LUg0LvQvtCz0LjQvS/Qv9Cw0YDQvtC70YwnKTtcclxuXHRcdFx0bW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG5cdFx0bG9naW4odXNlcik7XHJcblxyXG5cdH0pXHJcblxyXG5cdGJ1dHRvbk91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdGxvZ291dCgpO1xyXG5cdH0pXHJcblxyXG5cdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSB7XHJcblx0XHRsb2dpbihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGg7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n\tconst restourant = 'tanuki';\r\n\r\n\tconst renderItems = (date) => {\r\n\t\tdate.forEach((elem) => {\r\n\t\t\tconsole.log(elem);\r\n\t\t});\r\n\t}\r\n\r\n\tfetch(`./db/${restourant}.json`)\r\n\t\t.then((Response) => Response.json())\r\n\t\t.then((date) => {\r\n\t\t\trenderItems(date);\r\n\t\t})\r\n\r\n\t\t.catch((error) => {\r\n\t\t\tconsole.log(error);\r\n\t\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1kZWxpdmVyeS8uL3NyYy9tb2R1bGVzL21lbnUuanM/MmZhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZW51ID0gKCkgPT4ge1xyXG5cdGNvbnN0IHJlc3RvdXJhbnQgPSAndGFudWtpJztcclxuXHJcblx0Y29uc3QgcmVuZGVySXRlbXMgPSAoZGF0ZSkgPT4ge1xyXG5cdFx0ZGF0ZS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVsZW0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmZXRjaChgLi9kYi8ke3Jlc3RvdXJhbnR9Lmpzb25gKVxyXG5cdFx0LnRoZW4oKFJlc3BvbnNlKSA9PiBSZXNwb25zZS5qc29uKCkpXHJcblx0XHQudGhlbigoZGF0ZSkgPT4ge1xyXG5cdFx0XHRyZW5kZXJJdGVtcyhkYXRlKTtcclxuXHRcdH0pXHJcblxyXG5cdFx0LmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHR9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;