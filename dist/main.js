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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather */ \"./src/modules/weather.js\");\n/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui */ \"./src/modules/ui.js\");\n\r\n\r\n\r\nconst weather = new _modules_weather__WEBPACK_IMPORTED_MODULE_0__.default('london');\r\n\r\nconst ui = new _modules_ui__WEBPACK_IMPORTED_MODULE_1__.default();\r\n\r\nconst getWeather = () => {\r\n  weather.getweather()\r\n  .then(res =>{ \r\n    ui.content(res)\r\n  })\r\n  .catch(err => err)\r\n}\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', getWeather);\r\n\r\ndocument.getElementById('search').addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  const city = document.getElementById('city').value;\r\n\r\n  weather.changeLocation(city);\r\n\r\n  getWeather();\r\n});\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\nclass UI {\r\n  constructor() {\r\n    this.location = document.getElementById('w-location');\r\n    this.desc = document.getElementById('w-description');\r\n    this.string = document.getElementById('w-string');\r\n    this.details = document.getElementById('w-details');\r\n    this.icon = document.getElementById('w-icon');\r\n    this.humidity = document.getElementById('w-humidity');\r\n    this.feelsLike = document.getElementById('w-feels-like');\r\n    this.dewpoint = document.getElementById('w-dewpoint');\r\n    this.wind = document.getElementById('w-wind');\r\n  }\r\n\r\n  content(results){\r\n    this.location.textContent = `${results.name}`;\r\n    this.desc.textContent = `${results.weather[0].description}`;\r\n    this.string.textContent = `${results.main.temp}°C `;\r\n    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png`);\r\n    this.humidity.textContent = `Relative Humidity: ${results.main.humidity}`;\r\n    this.feelsLike.textContent = `Feels Like: ${results.main.feels_like}`;\r\n    this.dewpoint.textContent = `Visibility: ${results.visibility}`;\r\n    this.wind.textContent = `Wind speed: ${results.wind.speed}`;\r\n  }\r\n}\n\n//# sourceURL=webpack://weather-app/./src/modules/ui.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Weather)\n/* harmony export */ });\nclass Weather {\r\n  constructor(city){\r\n    this.api = '1bf7ab913a3e3c155665a70688f42c53';\r\n    this.city = city;\r\n  }\r\n\r\n  async getweather() {\r\n    const responseData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.api}`)\r\n\r\n    const response = await responseData.json();\r\n\r\n    return response;\r\n  }\r\n\r\n\r\n  changeLocation(city) {\r\n    this.city = city;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/modules/weather.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;