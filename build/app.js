/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	eval("/**\n * Created by itay on 08/11/16.\n */\n// import ngRedux from 'ng-redux';\n// import thunk from 'redux-thunk';\n// import {default as DevTools, runDevTools} from './utils/devTools';\n\nimport MainController from './mainController';\n\n// import rootReducer from './reducers';\n//\n// angular.module('undo-redo',[ngRedux])\n//   .config(($ngReduxProvider) => {\n//     var state = {};\n//\n//     //Creates the Redux store, and allow connect() to access it.\n//     $ngReduxProvider.createStoreWith(rootReducer, [thunk], [DevTools.instrument()],state);\n//   })\n//   //run the dev tool (will run only on dev mode)\n//   .run(runDevTools)\n//   //TODO: take the feature type constants from a shared file between the server and the client.\n//\n//   .controller('mainController',MainController);\n//\n//\n//\n//\n// //kick start angular on doc ready.\n// angular.element(document).ready(() => {\n//   angular.bootstrap(document,['unde-redo']);\n// });\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///./src/index.js?");

/***/ }
/******/ ]);