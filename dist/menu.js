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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\r\n\r\n\r\n\r\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWtDO0FBQ0E7QUFDQTtBQUNsQztBQUNBLHlEQUFJO0FBQ0oseURBQUk7QUFDSix5REFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QtZGVsaXZlcnkvLi9zcmMvbWVudS5qcz9hYjA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRoIGZyb20gXCIuL21vZHVsZXMvYXV0aFwiO1xyXG5pbXBvcnQgY2FydCBmcm9tIFwiLi9tb2R1bGVzL2NhcnRcIjtcclxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbW9kdWxlcy9tZW51XCI7XHJcblxyXG5hdXRoKCk7XHJcbm1lbnUoKTtcclxuY2FydCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\r\n\tconst buttonAuth = document.querySelector('.button-auth');\r\n\tconst modalAuth = document.querySelector('.modal-auth');\r\n\tconst closeAuth = document.querySelector('.close-auth');\r\n\tconst logInForm = document.getElementById('logInForm');\r\n\tconst inputLogin = document.getElementById('login');\r\n\tconst inputPassword = document.getElementById('password');\r\n\tconst buttonOut = document.querySelector('.button-out');\r\n\tconst userName = document.querySelector('.user-name');\r\n\tconst modalDialogAuth = document.querySelector('.modal-dialog-auth');\r\n\tconst buttonCart = document.querySelector('.button-cart');\r\n\r\n\tconst incorrectInput = () => {\r\n\t\tconst span = document.createElement('span');\r\n\t\tspan.style.color = 'red';\r\n\t\tspan.style.position = 'absolute';\r\n\t\tspan.style.top = '43%';\r\n\t\tspan.style.right = '25%';\r\n\t\tspan.textContent = 'Некорректный ввод';\r\n\t\tmodalDialogAuth.append(span);\r\n\r\n\t\tinputLogin.addEventListener('click', () => {\r\n\t\t\tspan.style.display = 'none';\r\n\t\t})\r\n\t\tinputPassword.addEventListener('click', () => {\r\n\t\t\tspan.style.display = 'none';\r\n\t\t})\r\n\r\n\t\tcloseAuth.addEventListener('click', () => {\r\n\t\t\tspan.style.display = 'none';\r\n\t\t})\r\n\r\n\t}\r\n\r\n\tconst login = (user) => {\r\n\t\tbuttonAuth.style.display = 'none';\r\n\r\n\t\tbuttonOut.style.display = 'flex';\r\n\t\tuserName.style.display = 'flex';\r\n\t\tbuttonCart.style.display = 'flex';\r\n\r\n\t\tmodalAuth.style.display = 'none';\r\n\t\tuserName.textContent = user.login;\r\n\r\n\t}\r\n\tconst logout = (user) => {\r\n\t\tbuttonAuth.style.display = 'flex';\r\n\r\n\t\tbuttonOut.style.display = 'none';\r\n\t\tuserName.style.display = 'none';\r\n\t\tmodalAuth.style.display = 'none';\r\n\t\tbuttonCart.style.display = 'none';\r\n\r\n\t\tuserName.textContent = '';\r\n\t\tlocalStorage.removeItem('user');\r\n\t}\r\n\r\n\tbuttonAuth.addEventListener('click', () => {\r\n\t\tmodalAuth.style.display = 'flex';\r\n\t})\r\n\tcloseAuth.addEventListener('click', () => {\r\n\t\tmodalAuth.style.display = 'none';\r\n\r\n\t})\r\n\r\n\tlogInForm.addEventListener('submit', (event) => {\r\n\t\tevent.preventDefault();\r\n\r\n\t\tconst user = {\r\n\t\t\tlogin: inputLogin.value,\r\n\t\t\tpassword: inputPassword.value\r\n\t\t}\r\n\t\tif (user.login || user.password) {\r\n\t\t\tlocalStorage.setItem('user', JSON.stringify(user));\r\n\t\t\tlogin(user);\r\n\t\t} else {\r\n\t\t\tincorrectInput();\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t})\r\n\r\n\tbuttonOut.addEventListener('click', () => {\r\n\t\tlogout();\r\n\t})\r\n\r\n\tif (localStorage.getItem('user')) {\r\n\t\tlogin(JSON.parse(localStorage.getItem('user')));\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1kZWxpdmVyeS8uL3NyYy9tb2R1bGVzL2F1dGguanM/ZTdiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhdXRoID0gKCkgPT4ge1xyXG5cdGNvbnN0IGJ1dHRvbkF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWF1dGgnKTtcclxuXHRjb25zdCBtb2RhbEF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYXV0aCcpO1xyXG5cdGNvbnN0IGNsb3NlQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1hdXRoJyk7XHJcblx0Y29uc3QgbG9nSW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ0luRm9ybScpO1xyXG5cdGNvbnN0IGlucHV0TG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4nKTtcclxuXHRjb25zdCBpbnB1dFBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJyk7XHJcblx0Y29uc3QgYnV0dG9uT3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1vdXQnKTtcclxuXHRjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLW5hbWUnKTtcclxuXHRjb25zdCBtb2RhbERpYWxvZ0F1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGlhbG9nLWF1dGgnKTtcclxuXHRjb25zdCBidXR0b25DYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1jYXJ0Jyk7XHJcblxyXG5cdGNvbnN0IGluY29ycmVjdElucHV0ID0gKCkgPT4ge1xyXG5cdFx0Y29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHRcdHNwYW4uc3R5bGUuY29sb3IgPSAncmVkJztcclxuXHRcdHNwYW4uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cdFx0c3Bhbi5zdHlsZS50b3AgPSAnNDMlJztcclxuXHRcdHNwYW4uc3R5bGUucmlnaHQgPSAnMjUlJztcclxuXHRcdHNwYW4udGV4dENvbnRlbnQgPSAn0J3QtdC60L7RgNGA0LXQutGC0L3Ri9C5INCy0LLQvtC0JztcclxuXHRcdG1vZGFsRGlhbG9nQXV0aC5hcHBlbmQoc3Bhbik7XHJcblxyXG5cdFx0aW5wdXRMb2dpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0c3Bhbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0fSlcclxuXHRcdGlucHV0UGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdHNwYW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdH0pXHJcblxyXG5cdFx0Y2xvc2VBdXRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRzcGFuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHR9KVxyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGxvZ2luID0gKHVzZXIpID0+IHtcclxuXHRcdGJ1dHRvbkF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcblx0XHRidXR0b25PdXQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuXHRcdHVzZXJOYW1lLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcblx0XHRidXR0b25DYXJ0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcblxyXG5cdFx0bW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHR1c2VyTmFtZS50ZXh0Q29udGVudCA9IHVzZXIubG9naW47XHJcblxyXG5cdH1cclxuXHRjb25zdCBsb2dvdXQgPSAodXNlcikgPT4ge1xyXG5cdFx0YnV0dG9uQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG5cclxuXHRcdGJ1dHRvbk91dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0dXNlck5hbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0YnV0dG9uQ2FydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuXHRcdHVzZXJOYW1lLnRleHRDb250ZW50ID0gJyc7XHJcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG5cdH1cclxuXHJcblx0YnV0dG9uQXV0aC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG5cdH0pXHJcblx0Y2xvc2VBdXRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0bW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG5cdH0pXHJcblxyXG5cdGxvZ0luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0Y29uc3QgdXNlciA9IHtcclxuXHRcdFx0bG9naW46IGlucHV0TG9naW4udmFsdWUsXHJcblx0XHRcdHBhc3N3b3JkOiBpbnB1dFBhc3N3b3JkLnZhbHVlXHJcblx0XHR9XHJcblx0XHRpZiAodXNlci5sb2dpbiB8fCB1c2VyLnBhc3N3b3JkKSB7XHJcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG5cdFx0XHRsb2dpbih1c2VyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGluY29ycmVjdElucHV0KCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0fSlcclxuXHJcblx0YnV0dG9uT3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0bG9nb3V0KCk7XHJcblx0fSlcclxuXHJcblx0aWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpIHtcclxuXHRcdGxvZ2luKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cart = () => {\r\n\tconst buttonCart = document.getElementById('cart-button');\r\n\tconst modalCart = document.querySelector('.modal-cart');\r\n\tconst close = modalCart.querySelector('.close');\r\n\r\n\tbuttonCart.addEventListener('click', () => {\r\n\t\tmodalCart.classList.add('is-open');\r\n\t})\r\n\r\n\tclose.addEventListener('click', () => {\r\n\t\tmodalCart.classList.remove('is-open');\r\n\t})\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9jYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QtZGVsaXZlcnkvLi9zcmMvbW9kdWxlcy9jYXJ0LmpzP2FjMGUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FydCA9ICgpID0+IHtcclxuXHRjb25zdCBidXR0b25DYXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQtYnV0dG9uJyk7XHJcblx0Y29uc3QgbW9kYWxDYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcnQnKTtcclxuXHRjb25zdCBjbG9zZSA9IG1vZGFsQ2FydC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcclxuXHJcblx0YnV0dG9uQ2FydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdG1vZGFsQ2FydC5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJyk7XHJcblx0fSlcclxuXHJcblx0Y2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRtb2RhbENhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG5cdH0pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXJ0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/cart.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./src/modules/cart.js\");\n\r\n\r\nconst menu = () => {\r\n\tconst cardsMenu = document.querySelector('.cards-menu');\r\n\tconst cartArray = localStorage.getItem('cart') ?\r\n\t\tJSON.parse(localStorage.getItem('cart')) :\r\n\t\t[];\r\n\r\n\tconst addToCart = (cartItem) => {\r\n\t\tif (cartArray.some((item) => item.id === cartItem.id)) {\r\n\t\t\tcartArray.map((item => {\r\n\t\t\t\tif (item.id === cartItem.id) {\r\n\t\t\t\t\titem.count++;\r\n\t\t\t\t}\r\n\t\t\t\treturn item;\r\n\t\t\t}))\r\n\t\t} else {\r\n\t\t\tcartArray.push(cartItem);\r\n\t\t}\r\n\r\n\r\n\t\tlocalStorage.setItem('cart', JSON.stringify(cartArray));\r\n\t}\r\n\tconst changeTitle = (restaurant) => {\r\n\t\tconst restaurantTitle = document.querySelector('.restaurant-title');\r\n\t\tconst rating = document.querySelector('.rating');\r\n\t\tconst category = document.querySelector('.category');\r\n\r\n\t\trestaurantTitle.textContent = restaurant.name;\r\n\t\trating.textContent = restaurant.stars;\r\n\t\tcategory.textContent = restaurant.kitchen;\r\n\r\n\t}\r\n\r\n\tconst renderItems = (data) => {\r\n\t\tdata.forEach(({ id, image, description, name, price }) => {\r\n\t\t\tconst card = document.createElement('div');\r\n\r\n\t\t\tcard.classList.add('card');\r\n\t\t\tcard.innerHTML = `\r\n\t\t\t\t<img src=\"${image}\" alt=\"${name}\" class=\"card-image\" />\r\n\t\t\t\t<div class=\"card-text\">\r\n\t\t\t\t\t<div class=\"card-heading\">\r\n\t\t\t\t\t\t<h3 class=\"card-title card-title-reg\">${name}</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card-info\">\r\n\t\t\t\t\t\t<div class=\"ingredients\">${description}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card-buttons\">\r\n\t\t\t\t\t\t<button class=\"button button-primary button-add-cart\">\r\n\t\t\t\t\t\t\t<span class=\"button-card-text\">В корзину</span>\r\n\t\t\t\t\t\t\t<span class=\"button-cart-svg\"></span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<strong class=\"card-price-bold\">${price} ₽</strong>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t`\r\n\t\t\tcard.querySelector('.button-card-text').addEventListener('click', () => {\r\n\t\t\t\taddToCart({ name, price, id, count: 1 });\r\n\t\t\t})\r\n\r\n\t\t\tcardsMenu.append(card);\r\n\t\t});\r\n\t}\r\n\r\n\tif (localStorage.getItem('restaurant')) {\r\n\r\n\t\tconst restaurant = JSON.parse(localStorage.getItem('restaurant'));\r\n\r\n\t\tchangeTitle(restaurant);\r\n\r\n\t\tfetch(`./db/${restaurant.products}`)\r\n\t\t\t.then((Response) => Response.json())\r\n\t\t\t.then((data) => {\r\n\t\t\t\trenderItems(data);\r\n\t\t\t})\r\n\t\t\t.catch((error) => {\r\n\t\t\t\tconsole.log(error);\r\n\t\t\t})\r\n\t} else {\r\n\t\twindow.location.href = \"/\";\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQ0FBcUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTSxTQUFTLEtBQUs7QUFDcEM7QUFDQTtBQUNBLDhDQUE4QyxLQUFLO0FBQ25EO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsT0FBTztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyQkFBMkI7QUFDM0MsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvQkFBb0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QtZGVsaXZlcnkvLi9zcmMvbW9kdWxlcy9tZW51LmpzPzJmYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNhcnQgZnJvbSBcIi4vY2FydFwiO1xyXG5cclxuY29uc3QgbWVudSA9ICgpID0+IHtcclxuXHRjb25zdCBjYXJkc01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMtbWVudScpO1xyXG5cdGNvbnN0IGNhcnRBcnJheSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykgP1xyXG5cdFx0SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpKSA6XHJcblx0XHRbXTtcclxuXHJcblx0Y29uc3QgYWRkVG9DYXJ0ID0gKGNhcnRJdGVtKSA9PiB7XHJcblx0XHRpZiAoY2FydEFycmF5LnNvbWUoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGNhcnRJdGVtLmlkKSkge1xyXG5cdFx0XHRjYXJ0QXJyYXkubWFwKChpdGVtID0+IHtcclxuXHRcdFx0XHRpZiAoaXRlbS5pZCA9PT0gY2FydEl0ZW0uaWQpIHtcclxuXHRcdFx0XHRcdGl0ZW0uY291bnQrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGl0ZW07XHJcblx0XHRcdH0pKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y2FydEFycmF5LnB1c2goY2FydEl0ZW0pO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KGNhcnRBcnJheSkpO1xyXG5cdH1cclxuXHRjb25zdCBjaGFuZ2VUaXRsZSA9IChyZXN0YXVyYW50KSA9PiB7XHJcblx0XHRjb25zdCByZXN0YXVyYW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGF1cmFudC10aXRsZScpO1xyXG5cdFx0Y29uc3QgcmF0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhdGluZycpO1xyXG5cdFx0Y29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnknKTtcclxuXHJcblx0XHRyZXN0YXVyYW50VGl0bGUudGV4dENvbnRlbnQgPSByZXN0YXVyYW50Lm5hbWU7XHJcblx0XHRyYXRpbmcudGV4dENvbnRlbnQgPSByZXN0YXVyYW50LnN0YXJzO1xyXG5cdFx0Y2F0ZWdvcnkudGV4dENvbnRlbnQgPSByZXN0YXVyYW50LmtpdGNoZW47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgcmVuZGVySXRlbXMgPSAoZGF0YSkgPT4ge1xyXG5cdFx0ZGF0YS5mb3JFYWNoKCh7IGlkLCBpbWFnZSwgZGVzY3JpcHRpb24sIG5hbWUsIHByaWNlIH0pID0+IHtcclxuXHRcdFx0Y29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRcdFx0Y2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcblx0XHRcdGNhcmQuaW5uZXJIVE1MID0gYFxyXG5cdFx0XHRcdDxpbWcgc3JjPVwiJHtpbWFnZX1cIiBhbHQ9XCIke25hbWV9XCIgY2xhc3M9XCJjYXJkLWltYWdlXCIgLz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkaW5nXCI+XHJcblx0XHRcdFx0XHRcdDxoMyBjbGFzcz1cImNhcmQtdGl0bGUgY2FyZC10aXRsZS1yZWdcIj4ke25hbWV9PC9oMz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5ncmVkaWVudHNcIj4ke2Rlc2NyaXB0aW9ufVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtYnV0dG9uc1wiPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5IGJ1dHRvbi1hZGQtY2FydFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiYnV0dG9uLWNhcmQtdGV4dFwiPtCSINC60L7RgNC30LjQvdGDPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiYnV0dG9uLWNhcnQtc3ZnXCI+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PHN0cm9uZyBjbGFzcz1cImNhcmQtcHJpY2UtYm9sZFwiPiR7cHJpY2V9IOKCvTwvc3Ryb25nPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdGBcclxuXHRcdFx0Y2FyZC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWNhcmQtdGV4dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRcdGFkZFRvQ2FydCh7IG5hbWUsIHByaWNlLCBpZCwgY291bnQ6IDEgfSk7XHJcblx0XHRcdH0pXHJcblxyXG5cdFx0XHRjYXJkc01lbnUuYXBwZW5kKGNhcmQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Jlc3RhdXJhbnQnKSkge1xyXG5cclxuXHRcdGNvbnN0IHJlc3RhdXJhbnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZXN0YXVyYW50JykpO1xyXG5cclxuXHRcdGNoYW5nZVRpdGxlKHJlc3RhdXJhbnQpO1xyXG5cclxuXHRcdGZldGNoKGAuL2RiLyR7cmVzdGF1cmFudC5wcm9kdWN0c31gKVxyXG5cdFx0XHQudGhlbigoUmVzcG9uc2UpID0+IFJlc3BvbnNlLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0XHRyZW5kZXJJdGVtcyhkYXRhKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSlcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

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