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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather */ \"./src/modules/weather.js\");\n/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui */ \"./src/modules/ui.js\");\n\n\n\nconst weather = new _modules_weather__WEBPACK_IMPORTED_MODULE_0__.default('london');\n\nconst ui = new _modules_ui__WEBPACK_IMPORTED_MODULE_1__.default();\n\nconst getWeather = () => {\n  weather.getweather()\n    .then((res) => {\n      ui.content(res);\n    })\n    .catch((err) => {\n      const error = document.querySelector('#error');\n      error.setAttribute('class', 'alert alert-danger alert-dismissible fade show');\n      error.setAttribute('role', 'alert');\n      error.textContent = err;\n      setTimeout(() =>{\n        error.remove()\n      }, 3000)\n    });\n};\n\ndocument.addEventListener('DOMContentLoaded', getWeather);\n\ndocument.getElementById('search').addEventListener('click', (e) => {\n  e.preventDefault();\n  const city = document.getElementById('city').value;\n\n  weather.changeLocation(city);\n\n  getWeather();\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\nclass UI {\n  constructor() {\n    this.location = document.getElementById('w-location');\n    this.desc = document.getElementById('w-description');\n    this.string = document.getElementById('w-string');\n    this.details = document.getElementById('w-details');\n    this.icon = document.getElementById('w-icon');\n    this.humidity = document.getElementById('w-humidity');\n    this.feelsLike = document.getElementById('w-feels-like');\n    this.dewpoint = document.getElementById('w-dewpoint');\n    this.wind = document.getElementById('w-wind');\n  }\n\n  content(results) {\n    this.location.textContent = `${results.name}`;\n    this.desc.textContent = `${results.weather[0].description}`;\n    this.string.textContent = document.querySelector('#temp-btn').addEventListener('click', () => {\n      const x = document.getElementById('w-string');\n      if (x.innerHTML === `${results.main.temp}°C`) {\n        x.innerText = `${results.main.temp * 1.8 + 32}°F`;\n      } else {\n        x.innerHTML = `${results.main.temp}°C`;\n      }\n    });\n    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png`);\n    this.humidity.textContent = `Relative Humidity: ${results.main.humidity}`;\n    this.feelsLike.textContent = `Feels Like: ${results.main.feels_like}`;\n    this.dewpoint.textContent = `Visibility: ${results.visibility}`;\n    this.wind.textContent = `Wind speed: ${results.wind.speed}`;\n  }\n}\n\n//# sourceURL=webpack://weather-app/./src/modules/ui.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Weather)\n/* harmony export */ });\nclass Weather {\n  constructor(city) {\n    this.api = '1bf7ab913a3e3c155665a70688f42c53';\n    this.city = city;\n  }\n\n  async getweather() {\n    const responseData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.api}`);\n\n    if(responseData.status !== 200) {\n      throw new Error('Enter Valid city name.')\n    }\n\n    const response = await responseData.json();\n\n    return response;\n  }\n\n  changeLocation(city) {\n    this.city = city;\n  }\n}\n\n\n//# sourceURL=webpack://weather-app/./src/modules/weather.js?");

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