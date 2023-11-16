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

/***/ "./src/sortWorker.ts":
/*!***************************!*\
  !*** ./src/sortWorker.ts ***!
  \***************************/
/***/ (() => {

eval("\nconst bubbleSort = (arr) => {\n    for (let i = 0; i < arr.length; i++) {\n        for (let j = 0; j < arr.length; j++) {\n            if (arr[i] < arr[j]) {\n                [arr[i], arr[j]] = [arr[j], arr[i]];\n            }\n        }\n    }\n    return arr;\n};\nconst arr1 = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 100000));\nconsole.time('Bubble sort:');\nconsole.log(bubbleSort(arr1));\nconsole.timeEnd('Bubble sort:');\nonmessage = (e) => [\n    postMessage(bubbleSort(arr1))\n];\n\n\n//# sourceURL=webpack://cw-webpack/./src/sortWorker.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/sortWorker.ts"]();
/******/ 	
/******/ })()
;