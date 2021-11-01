/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/@noodl/noodl-sdk/index.js":
/*!************************************************!*\
  !*** ./node_modules/@noodl/noodl-sdk/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _colors = {
  "purple": "component",
  "green": "data",
  "default": "default",
  "grey": "default"
};

Noodl.defineNode = function (def) {
  var _def = {};
  _def.name = def.name;
  _def.displayNodeName = def.displayName;
  _def.usePortAsLabel = def.useInputAsLabel;
  _def.color = _colors[def.color || 'default'];
  _def.category = def.category || 'Modules';

  _def.initialize = function () {
    this.inputs = {};

    var _outputs = this.outputs = {};

    var _this = this;

    this.setOutputs = function (o) {
      for (var key in o) {
        _outputs[key] = o[key];

        _this.flagOutputDirty(key);
      }
    };

    if (typeof def.initialize === 'function') def.initialize.apply(this);
  };

  _def.inputs = {};
  _def.outputs = {};

  for (var key in def.inputs) {
    _def.inputs[key] = {
      type: _typeof(def.inputs[key]) === 'object' ? def.inputs[key].type : def.inputs[key],
      displayName: _typeof(def.inputs[key]) === 'object' ? def.inputs[key].displayName : undefined,
      group: _typeof(def.inputs[key]) === 'object' ? def.inputs[key].group : undefined,
      "default": _typeof(def.inputs[key]) === 'object' ? def.inputs[key]["default"] : undefined,
      set: function () {
        var _key = key;
        return function (value) {
          this.inputs[_key] = value;

          if (def.changed && typeof def.changed[_key] === 'function') {
            def.changed[_key].apply(this, [value]);
          }
        };
      }()
    };
  }

  for (var key in def.signals) {
    _def.inputs[key] = {
      type: 'signal',
      displayName: _typeof(def.signals[key]) === 'object' ? def.signals[key].displayName : undefined,
      valueChangedToTrue: function () {
        var _key = key;
        return function () {
          var _this2 = this;

          var _fn = _typeof(def.signals[_key]) === 'object' ? def.signals[_key].signal : def.signals[_key];

          if (typeof _fn === 'function') {
            this.scheduleAfterInputsHaveUpdated(function () {
              _fn.apply(_this2);
            });
          }
        };
      }()
    };
  }

  for (var key in def.outputs) {
    if (def.outputs[key] === 'signal') {
      _def.outputs[key] = {
        type: 'signal'
      };
    } else {
      _def.outputs[key] = {
        type: _typeof(def.outputs[key]) === 'object' ? def.outputs[key].type : def.outputs[key],
        displayName: _typeof(def.outputs[key]) === 'object' ? def.outputs[key].displayName : undefined,
        group: _typeof(def.outputs[key]) === 'object' ? def.outputs[key].group : undefined,
        getter: function () {
          var _key = key;
          return function () {
            return this.outputs[_key];
          };
        }()
      };
    }
  }

  _def.methods = _def.prototypeExtensions = {};

  for (var key in def.methods) {
    _def.prototypeExtensions[key] = def.methods[key];
  }

  if (_def.methods.onNodeDeleted) {
    // Override the onNodeDeleted if required
    _def.methods._onNodeDeleted = function () {
      this.__proto__.__proto__._onNodeDeleted.call(this);

      _def.methods.onNodeDeleted.value.call(this);
    };
  }

  return {
    node: _def,
    setup: def.setup
  };
};

Noodl.defineCollectionNode = function (def) {
  var _def = {
    name: def.name,
    category: def.category,
    color: 'data',
    inputs: def.inputs,
    outputs: Object.assign({
      Items: 'array',
      'Fetch Started': 'signal',
      'Fetch Completed': 'signal'
    }, def.outputs || {}),
    signals: Object.assign({
      Fetch: function Fetch() {
        var _this = this;

        this.sendSignalOnOutput('Fetch Started');
        var a = def.fetch.call(this, function () {
          _this.sendSignalOnOutput('Fetch Completed');
        });
        this.setOutputs({
          Items: a
        });
      }
    }, def.signals || {})
  };
  return Noodl.defineNode(_def);
};

Noodl.defineModelNode = function (def) {
  var _def = {
    name: def.name,
    category: def.category,
    color: 'data',
    inputs: {
      Id: 'string'
    },
    outputs: {
      Fetched: 'signal'
    },
    changed: {
      Id: function Id(value) {
        var _this3 = this;

        if (this._object && this._changeListener) this._object.off('change', this._changeListener);
        this._object = Noodl.Object.get(value);

        this._changeListener = function (name, value) {
          var _o = {};
          _o[name] = value;

          _this3.setOutputs(_o);
        };

        this._object.on('change', this._changeListener);

        this.setOutputs(this._object.data);
        this.sendSignalOnOutput('Fetched');
      }
    },
    initialize: function initialize() {}
  };

  for (var key in def.properties) {
    _def.inputs[key] = def.properties[key];
    _def.outputs[key] = def.properties[key];

    _def.changed[key] = function () {
      var _key = key;
      return function (value) {
        if (!this._object) return;

        this._object.set(_key, value);
      };
    }();
  }

  return Noodl.defineNode(_def);
};

Noodl.defineReactNode = function (def) {
  var _def = Noodl.defineNode(def);

  _def.node.getReactComponent = def.getReactComponent;
  _def.node.inputProps = def.inputProps;
  _def.node.inputCss = def.inputCss;
  _def.node.outputProps = def.outputProps;
  _def.node.setup = def.setup;
  return _def.node;
};

module.exports = Noodl;

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
} // Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications


revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens(b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  } // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42


  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
} // base64 is 4/3 + up to two characters of the original data


function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
  var i;

  for (i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];

  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }

  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3
  // go through the array every three bytes, we'll deal with trailing stuff later

  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  } // pad the end with zeros, but make sure to not forget the extra bytes


  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }

  return parts.join('');
}

/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */

/* eslint-disable no-proto */


var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js");

var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js");

var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */

Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
/*
 * Export kMaxLength after typed array support is determined.
 */

exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function foo() {
        return 42;
      }
    };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }

    that.length = length;
  }

  return that;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */


function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  } // Common case.


  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }

    return allocUnsafe(this, arg);
  }

  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation
// TODO: Legacy, not needed anymore. Remove in next major version.

Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/


Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;

  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);

  if (size <= 0) {
    return createBuffer(that, size);
  }

  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }

  return createBuffer(that, size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/


Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }

  return that;
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */


Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */


Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }

  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }

  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }

      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }

  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }

  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;
  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;

  if (length === undefined) {
    length = 0;

    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;

  for (i = 0; i < list.length; ++i) {
    var buf = list[i];

    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    buf.copy(buffer, pos);
    pos += buf.length;
  }

  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }

  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }

  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0; // Use a for loop to avoid recursion

  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;

      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;

      case 'hex':
        return len >>> 1;

      case 'base64':
        return base64ToBytes(string).length;

      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8

        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}

Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.
  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

  if (start === undefined || start < 0) {
    start = 0;
  } // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.


  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
} // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.


Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;

  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }

  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }

  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;

  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }

  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }

  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;

  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }

  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }

  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;

  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }

  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }

  if (end === undefined) {
    end = target ? target.length : 0;
  }

  if (thisStart === undefined) {
    thisStart = 0;
  }

  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }

  if (thisStart >= thisEnd) {
    return -1;
  }

  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
}; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf


function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1; // Normalize byteOffset

  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }

  byteOffset = +byteOffset; // Coerce to Number.

  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  } // Normalize byteOffset: negative offsets start from the end of the buffer


  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  } // Normalize val


  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  } // Finally, search either indexOf (if dir is true) or lastIndexOf


  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }

    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]

    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }

    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();

    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }

      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;

  if (dir) {
    var foundIndex = -1;

    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

    for (i = byteOffset; i >= 0; i--) {
      var found = true;

      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }

      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  } // must be an even number of digits


  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }

  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }

  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0; // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0; // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;

    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    } // legacy write(string, encoding, offset, length) - remove in v0.13

  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';
  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;

  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }

          break;

        case 2:
          secondByte = buf[i + 1];

          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }

      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
} // Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety


var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;

  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  } // Decode in chunks to avoid "call stack size exceeded".


  var res = '';
  var i = 0;

  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }

  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }

  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }

  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';

  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }

  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';

  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }

  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;
  var newBuf;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);

    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */


function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;

  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];

  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }

  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;

  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
}; // Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])


Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }

    if (val.length === 1) {
      var code = val.charCodeAt(0);

      if (code < 256) {
        val = code;
      }
    }

    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }

    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } // Invalid ranges are not set to a default, so can range check early.


  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;

  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;

    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
}; // HELPER FUNCTIONS
// ================


var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

  if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

  while (str.length % 4 !== 0) {
    str = str + '=';
  }

  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i); // is surrogate component

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } // valid lead


        leadSurrogate = codePoint;
        continue;
      } // 2 leads in a row


      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      } // valid surrogate pair


      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null; // encode utf8

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }

  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".custom-class {\n    background-color: #e06f6f;\n}\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),

/***/ "./node_modules/make-cancellable-promise/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/make-cancellable-promise/dist/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = makeCancellablePromise;

function makeCancellablePromise(promise) {
  var isCancelled = false;
  var wrappedPromise = new Promise(function (resolve, reject) {
    promise.then(function () {
      return !isCancelled && resolve.apply(void 0, arguments);
    })["catch"](function (error) {
      return !isCancelled && reject(error);
    });
  });
  return {
    promise: wrappedPromise,
    cancel: function cancel() {
      isCancelled = true;
    }
  };
}

/***/ }),

/***/ "./node_modules/make-event-props/dist/entry.js":
/*!*****************************************************!*\
  !*** ./node_modules/make-event-props/dist/entry.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.focusEvents = exports.keyboardEvents = exports.touchEvents = exports.mouseEvents = void 0; // As defined on the list of supported mouse events: https://reactjs.org/docs/events.html#mouse-events

var mouseEvents = ['onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp']; // As defined on the list of supported touch events: https://reactjs.org/docs/events.html#touch-events

exports.mouseEvents = mouseEvents;
var touchEvents = ['onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart']; // As defined on the list of supported keyboard events: https://reactjs.org/docs/events.html#keyboard-events

exports.touchEvents = touchEvents;
var keyboardEvents = ['onKeyDown', 'onKeyPress', 'onKeyUp']; // As defined on the list of supported keyboard events: https://reactjs.org/docs/events.html#focus-events

exports.keyboardEvents = keyboardEvents;
var focusEvents = ['onFocus', 'onBlur'];
/**
 * Returns an object with on-event callback props curried with provided args.
 * @param {Object} props Props passed to a component.
 * @param {Function=} getArgs A function that returns argument(s) on-event callbacks
 *   shall be curried with.
 */

exports.focusEvents = focusEvents;

var makeEventProps = function makeEventProps(props, getArgs) {
  var eventProps = {};
  [].concat(mouseEvents, touchEvents, keyboardEvents, focusEvents).forEach(function (eventName) {
    if (props[eventName]) {
      eventProps[eventName] = function (event) {
        return getArgs ? props[eventName](event, getArgs(eventName)) : props[eventName](event);
      };
    }
  });
  return eventProps;
};

var _default = makeEventProps;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/merge-class-names/dist/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/merge-class-names/dist/esm/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeClassNames; });
function mergeClassNames() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (classList, arg) {
    return typeof arg === 'string' || arg instanceof Array ? classList.concat(arg) : classList;
  }, []).filter(Boolean).join(' ');
}

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "./node_modules/pdfjs-dist/build/pdf.js":
/*!**********************************************!*\
  !*** ./node_modules/pdfjs-dist/build/pdf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, Buffer, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2020 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __w_pdfjs_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __w_pdfjs_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __w_pdfjs_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __w_pdfjs_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __w_pdfjs_require__.d = function (exports, name, getter) {
        /******/
        if (!__w_pdfjs_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __w_pdfjs_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __w_pdfjs_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __w_pdfjs_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __w_pdfjs_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __w_pdfjs_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __w_pdfjs_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __w_pdfjs_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __w_pdfjs_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __w_pdfjs_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __w_pdfjs_require__(__w_pdfjs_require__.s = 0);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      var pdfjsVersion = '2.4.456';
      var pdfjsBuild = '228a591c';

      var pdfjsSharedUtil = __w_pdfjs_require__(1);

      var pdfjsDisplayAPI = __w_pdfjs_require__(3);

      var pdfjsDisplayTextLayer = __w_pdfjs_require__(16);

      var pdfjsDisplayAnnotationLayer = __w_pdfjs_require__(17);

      var pdfjsDisplayDisplayUtils = __w_pdfjs_require__(4);

      var pdfjsDisplaySVG = __w_pdfjs_require__(18);

      var pdfjsDisplayWorkerOptions = __w_pdfjs_require__(10);

      var pdfjsDisplayAPICompatibility = __w_pdfjs_require__(6);

      {
        var _w_pdfjs_require__ = __w_pdfjs_require__(7),
            isNodeJS = _w_pdfjs_require__.isNodeJS;

        if (isNodeJS) {
          var PDFNodeStream = __w_pdfjs_require__(19).PDFNodeStream;

          pdfjsDisplayAPI.setPDFNetworkStreamFactory(function (params) {
            return new PDFNodeStream(params);
          });
        } else {
          var PDFNetworkStream = __w_pdfjs_require__(22).PDFNetworkStream;

          var PDFFetchStream;

          if (pdfjsDisplayDisplayUtils.isFetchSupported()) {
            PDFFetchStream = __w_pdfjs_require__(23).PDFFetchStream;
          }

          pdfjsDisplayAPI.setPDFNetworkStreamFactory(function (params) {
            if (PDFFetchStream && pdfjsDisplayDisplayUtils.isValidFetchUrl(params.url)) {
              return new PDFFetchStream(params);
            }

            return new PDFNetworkStream(params);
          });
        }
      }
      exports.build = pdfjsDisplayAPI.build;
      exports.version = pdfjsDisplayAPI.version;
      exports.getDocument = pdfjsDisplayAPI.getDocument;
      exports.LoopbackPort = pdfjsDisplayAPI.LoopbackPort;
      exports.PDFDataRangeTransport = pdfjsDisplayAPI.PDFDataRangeTransport;
      exports.PDFWorker = pdfjsDisplayAPI.PDFWorker;
      exports.renderTextLayer = pdfjsDisplayTextLayer.renderTextLayer;
      exports.AnnotationLayer = pdfjsDisplayAnnotationLayer.AnnotationLayer;
      exports.createPromiseCapability = pdfjsSharedUtil.createPromiseCapability;
      exports.PasswordResponses = pdfjsSharedUtil.PasswordResponses;
      exports.InvalidPDFException = pdfjsSharedUtil.InvalidPDFException;
      exports.MissingPDFException = pdfjsSharedUtil.MissingPDFException;
      exports.SVGGraphics = pdfjsDisplaySVG.SVGGraphics;
      exports.NativeImageDecoding = pdfjsSharedUtil.NativeImageDecoding;
      exports.CMapCompressionType = pdfjsSharedUtil.CMapCompressionType;
      exports.PermissionFlag = pdfjsSharedUtil.PermissionFlag;
      exports.UnexpectedResponseException = pdfjsSharedUtil.UnexpectedResponseException;
      exports.OPS = pdfjsSharedUtil.OPS;
      exports.VerbosityLevel = pdfjsSharedUtil.VerbosityLevel;
      exports.UNSUPPORTED_FEATURES = pdfjsSharedUtil.UNSUPPORTED_FEATURES;
      exports.createValidAbsoluteUrl = pdfjsSharedUtil.createValidAbsoluteUrl;
      exports.createObjectURL = pdfjsSharedUtil.createObjectURL;
      exports.removeNullCharacters = pdfjsSharedUtil.removeNullCharacters;
      exports.shadow = pdfjsSharedUtil.shadow;
      exports.Util = pdfjsSharedUtil.Util;
      exports.RenderingCancelledException = pdfjsDisplayDisplayUtils.RenderingCancelledException;
      exports.getFilenameFromUrl = pdfjsDisplayDisplayUtils.getFilenameFromUrl;
      exports.LinkTarget = pdfjsDisplayDisplayUtils.LinkTarget;
      exports.addLinkAttributes = pdfjsDisplayDisplayUtils.addLinkAttributes;
      exports.loadScript = pdfjsDisplayDisplayUtils.loadScript;
      exports.PDFDateString = pdfjsDisplayDisplayUtils.PDFDateString;
      exports.GlobalWorkerOptions = pdfjsDisplayWorkerOptions.GlobalWorkerOptions;
      exports.apiCompatibilityParams = pdfjsDisplayAPICompatibility.apiCompatibilityParams;
      /***/
    },
    /* 1 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.arrayByteLength = arrayByteLength;
      exports.arraysToBytes = arraysToBytes;
      exports.assert = assert;
      exports.bytesToString = bytesToString;
      exports.createPromiseCapability = createPromiseCapability;
      exports.getVerbosityLevel = getVerbosityLevel;
      exports.info = info;
      exports.isArrayBuffer = isArrayBuffer;
      exports.isArrayEqual = isArrayEqual;
      exports.isBool = isBool;
      exports.isEmptyObj = isEmptyObj;
      exports.isNum = isNum;
      exports.isString = isString;
      exports.isSameOrigin = isSameOrigin;
      exports.createValidAbsoluteUrl = createValidAbsoluteUrl;
      exports.removeNullCharacters = removeNullCharacters;
      exports.setVerbosityLevel = setVerbosityLevel;
      exports.shadow = shadow;
      exports.string32 = string32;
      exports.stringToBytes = stringToBytes;
      exports.stringToPDFString = stringToPDFString;
      exports.stringToUTF8String = stringToUTF8String;
      exports.utf8StringToString = utf8StringToString;
      exports.warn = warn;
      exports.unreachable = unreachable;
      exports.IsEvalSupportedCached = exports.IsLittleEndianCached = exports.createObjectURL = exports.FormatError = exports.Util = exports.UnknownErrorException = exports.UnexpectedResponseException = exports.TextRenderingMode = exports.StreamType = exports.PermissionFlag = exports.PasswordResponses = exports.PasswordException = exports.NativeImageDecoding = exports.MissingPDFException = exports.InvalidPDFException = exports.AbortException = exports.CMapCompressionType = exports.ImageKind = exports.FontType = exports.AnnotationType = exports.AnnotationStateModelType = exports.AnnotationReviewState = exports.AnnotationReplyType = exports.AnnotationMarkedState = exports.AnnotationFlag = exports.AnnotationFieldFlag = exports.AnnotationBorderStyleType = exports.UNSUPPORTED_FEATURES = exports.VerbosityLevel = exports.OPS = exports.IDENTITY_MATRIX = exports.FONT_IDENTITY_MATRIX = exports.BaseException = void 0;

      __w_pdfjs_require__(2);

      var IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
      exports.IDENTITY_MATRIX = IDENTITY_MATRIX;
      var FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
      exports.FONT_IDENTITY_MATRIX = FONT_IDENTITY_MATRIX;
      var NativeImageDecoding = {
        NONE: "none",
        DECODE: "decode",
        DISPLAY: "display"
      };
      exports.NativeImageDecoding = NativeImageDecoding;
      var PermissionFlag = {
        PRINT: 0x04,
        MODIFY_CONTENTS: 0x08,
        COPY: 0x10,
        MODIFY_ANNOTATIONS: 0x20,
        FILL_INTERACTIVE_FORMS: 0x100,
        COPY_FOR_ACCESSIBILITY: 0x200,
        ASSEMBLE: 0x400,
        PRINT_HIGH_QUALITY: 0x800
      };
      exports.PermissionFlag = PermissionFlag;
      var TextRenderingMode = {
        FILL: 0,
        STROKE: 1,
        FILL_STROKE: 2,
        INVISIBLE: 3,
        FILL_ADD_TO_PATH: 4,
        STROKE_ADD_TO_PATH: 5,
        FILL_STROKE_ADD_TO_PATH: 6,
        ADD_TO_PATH: 7,
        FILL_STROKE_MASK: 3,
        ADD_TO_PATH_FLAG: 4
      };
      exports.TextRenderingMode = TextRenderingMode;
      var ImageKind = {
        GRAYSCALE_1BPP: 1,
        RGB_24BPP: 2,
        RGBA_32BPP: 3
      };
      exports.ImageKind = ImageKind;
      var AnnotationType = {
        TEXT: 1,
        LINK: 2,
        FREETEXT: 3,
        LINE: 4,
        SQUARE: 5,
        CIRCLE: 6,
        POLYGON: 7,
        POLYLINE: 8,
        HIGHLIGHT: 9,
        UNDERLINE: 10,
        SQUIGGLY: 11,
        STRIKEOUT: 12,
        STAMP: 13,
        CARET: 14,
        INK: 15,
        POPUP: 16,
        FILEATTACHMENT: 17,
        SOUND: 18,
        MOVIE: 19,
        WIDGET: 20,
        SCREEN: 21,
        PRINTERMARK: 22,
        TRAPNET: 23,
        WATERMARK: 24,
        THREED: 25,
        REDACT: 26
      };
      exports.AnnotationType = AnnotationType;
      var AnnotationStateModelType = {
        MARKED: "Marked",
        REVIEW: "Review"
      };
      exports.AnnotationStateModelType = AnnotationStateModelType;
      var AnnotationMarkedState = {
        MARKED: "Marked",
        UNMARKED: "Unmarked"
      };
      exports.AnnotationMarkedState = AnnotationMarkedState;
      var AnnotationReviewState = {
        ACCEPTED: "Accepted",
        REJECTED: "Rejected",
        CANCELLED: "Cancelled",
        COMPLETED: "Completed",
        NONE: "None"
      };
      exports.AnnotationReviewState = AnnotationReviewState;
      var AnnotationReplyType = {
        GROUP: "Group",
        REPLY: "R"
      };
      exports.AnnotationReplyType = AnnotationReplyType;
      var AnnotationFlag = {
        INVISIBLE: 0x01,
        HIDDEN: 0x02,
        PRINT: 0x04,
        NOZOOM: 0x08,
        NOROTATE: 0x10,
        NOVIEW: 0x20,
        READONLY: 0x40,
        LOCKED: 0x80,
        TOGGLENOVIEW: 0x100,
        LOCKEDCONTENTS: 0x200
      };
      exports.AnnotationFlag = AnnotationFlag;
      var AnnotationFieldFlag = {
        READONLY: 0x0000001,
        REQUIRED: 0x0000002,
        NOEXPORT: 0x0000004,
        MULTILINE: 0x0001000,
        PASSWORD: 0x0002000,
        NOTOGGLETOOFF: 0x0004000,
        RADIO: 0x0008000,
        PUSHBUTTON: 0x0010000,
        COMBO: 0x0020000,
        EDIT: 0x0040000,
        SORT: 0x0080000,
        FILESELECT: 0x0100000,
        MULTISELECT: 0x0200000,
        DONOTSPELLCHECK: 0x0400000,
        DONOTSCROLL: 0x0800000,
        COMB: 0x1000000,
        RICHTEXT: 0x2000000,
        RADIOSINUNISON: 0x2000000,
        COMMITONSELCHANGE: 0x4000000
      };
      exports.AnnotationFieldFlag = AnnotationFieldFlag;
      var AnnotationBorderStyleType = {
        SOLID: 1,
        DASHED: 2,
        BEVELED: 3,
        INSET: 4,
        UNDERLINE: 5
      };
      exports.AnnotationBorderStyleType = AnnotationBorderStyleType;
      var StreamType = {
        UNKNOWN: "UNKNOWN",
        FLATE: "FLATE",
        LZW: "LZW",
        DCT: "DCT",
        JPX: "JPX",
        JBIG: "JBIG",
        A85: "A85",
        AHX: "AHX",
        CCF: "CCF",
        RLX: "RLX"
      };
      exports.StreamType = StreamType;
      var FontType = {
        UNKNOWN: "UNKNOWN",
        TYPE1: "TYPE1",
        TYPE1C: "TYPE1C",
        CIDFONTTYPE0: "CIDFONTTYPE0",
        CIDFONTTYPE0C: "CIDFONTTYPE0C",
        TRUETYPE: "TRUETYPE",
        CIDFONTTYPE2: "CIDFONTTYPE2",
        TYPE3: "TYPE3",
        OPENTYPE: "OPENTYPE",
        TYPE0: "TYPE0",
        MMTYPE1: "MMTYPE1"
      };
      exports.FontType = FontType;
      var VerbosityLevel = {
        ERRORS: 0,
        WARNINGS: 1,
        INFOS: 5
      };
      exports.VerbosityLevel = VerbosityLevel;
      var CMapCompressionType = {
        NONE: 0,
        BINARY: 1,
        STREAM: 2
      };
      exports.CMapCompressionType = CMapCompressionType;
      var OPS = {
        dependency: 1,
        setLineWidth: 2,
        setLineCap: 3,
        setLineJoin: 4,
        setMiterLimit: 5,
        setDash: 6,
        setRenderingIntent: 7,
        setFlatness: 8,
        setGState: 9,
        save: 10,
        restore: 11,
        transform: 12,
        moveTo: 13,
        lineTo: 14,
        curveTo: 15,
        curveTo2: 16,
        curveTo3: 17,
        closePath: 18,
        rectangle: 19,
        stroke: 20,
        closeStroke: 21,
        fill: 22,
        eoFill: 23,
        fillStroke: 24,
        eoFillStroke: 25,
        closeFillStroke: 26,
        closeEOFillStroke: 27,
        endPath: 28,
        clip: 29,
        eoClip: 30,
        beginText: 31,
        endText: 32,
        setCharSpacing: 33,
        setWordSpacing: 34,
        setHScale: 35,
        setLeading: 36,
        setFont: 37,
        setTextRenderingMode: 38,
        setTextRise: 39,
        moveText: 40,
        setLeadingMoveText: 41,
        setTextMatrix: 42,
        nextLine: 43,
        showText: 44,
        showSpacedText: 45,
        nextLineShowText: 46,
        nextLineSetSpacingShowText: 47,
        setCharWidth: 48,
        setCharWidthAndBounds: 49,
        setStrokeColorSpace: 50,
        setFillColorSpace: 51,
        setStrokeColor: 52,
        setStrokeColorN: 53,
        setFillColor: 54,
        setFillColorN: 55,
        setStrokeGray: 56,
        setFillGray: 57,
        setStrokeRGBColor: 58,
        setFillRGBColor: 59,
        setStrokeCMYKColor: 60,
        setFillCMYKColor: 61,
        shadingFill: 62,
        beginInlineImage: 63,
        beginImageData: 64,
        endInlineImage: 65,
        paintXObject: 66,
        markPoint: 67,
        markPointProps: 68,
        beginMarkedContent: 69,
        beginMarkedContentProps: 70,
        endMarkedContent: 71,
        beginCompat: 72,
        endCompat: 73,
        paintFormXObjectBegin: 74,
        paintFormXObjectEnd: 75,
        beginGroup: 76,
        endGroup: 77,
        beginAnnotations: 78,
        endAnnotations: 79,
        beginAnnotation: 80,
        endAnnotation: 81,
        paintJpegXObject: 82,
        paintImageMaskXObject: 83,
        paintImageMaskXObjectGroup: 84,
        paintImageXObject: 85,
        paintInlineImageXObject: 86,
        paintInlineImageXObjectGroup: 87,
        paintImageXObjectRepeat: 88,
        paintImageMaskXObjectRepeat: 89,
        paintSolidColorImageMask: 90,
        constructPath: 91
      };
      exports.OPS = OPS;
      var UNSUPPORTED_FEATURES = {
        unknown: "unknown",
        forms: "forms",
        javaScript: "javaScript",
        smask: "smask",
        shadingPattern: "shadingPattern",
        font: "font"
      };
      exports.UNSUPPORTED_FEATURES = UNSUPPORTED_FEATURES;
      var PasswordResponses = {
        NEED_PASSWORD: 1,
        INCORRECT_PASSWORD: 2
      };
      exports.PasswordResponses = PasswordResponses;
      var verbosity = VerbosityLevel.WARNINGS;

      function setVerbosityLevel(level) {
        if (Number.isInteger(level)) {
          verbosity = level;
        }
      }

      function getVerbosityLevel() {
        return verbosity;
      }

      function info(msg) {
        if (verbosity >= VerbosityLevel.INFOS) {
          console.log("Info: ".concat(msg));
        }
      }

      function warn(msg) {
        if (verbosity >= VerbosityLevel.WARNINGS) {
          console.log("Warning: ".concat(msg));
        }
      }

      function unreachable(msg) {
        throw new Error(msg);
      }

      function assert(cond, msg) {
        if (!cond) {
          unreachable(msg);
        }
      }

      function isSameOrigin(baseUrl, otherUrl) {
        var base;

        try {
          base = new URL(baseUrl);

          if (!base.origin || base.origin === "null") {
            return false;
          }
        } catch (e) {
          return false;
        }

        var other = new URL(otherUrl, base);
        return base.origin === other.origin;
      }

      function _isValidProtocol(url) {
        if (!url) {
          return false;
        }

        switch (url.protocol) {
          case "http:":
          case "https:":
          case "ftp:":
          case "mailto:":
          case "tel:":
            return true;

          default:
            return false;
        }
      }

      function createValidAbsoluteUrl(url, baseUrl) {
        if (!url) {
          return null;
        }

        try {
          var absoluteUrl = baseUrl ? new URL(url, baseUrl) : new URL(url);

          if (_isValidProtocol(absoluteUrl)) {
            return absoluteUrl;
          }
        } catch (ex) {}

        return null;
      }

      function shadow(obj, prop, value) {
        Object.defineProperty(obj, prop, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: false
        });
        return value;
      }

      var BaseException = function BaseExceptionClosure() {
        function BaseException(message) {
          if (this.constructor === BaseException) {
            unreachable("Cannot initialize BaseException.");
          }

          this.message = message;
          this.name = this.constructor.name;
        }

        BaseException.prototype = new Error();
        BaseException.constructor = BaseException;
        return BaseException;
      }();

      exports.BaseException = BaseException;

      var PasswordException = /*#__PURE__*/function (_BaseException) {
        _inherits(PasswordException, _BaseException);

        var _super = _createSuper(PasswordException);

        function PasswordException(msg, code) {
          var _this;

          _classCallCheck(this, PasswordException);

          _this = _super.call(this, msg);
          _this.code = code;
          return _this;
        }

        return PasswordException;
      }(BaseException);

      exports.PasswordException = PasswordException;

      var UnknownErrorException = /*#__PURE__*/function (_BaseException2) {
        _inherits(UnknownErrorException, _BaseException2);

        var _super2 = _createSuper(UnknownErrorException);

        function UnknownErrorException(msg, details) {
          var _this2;

          _classCallCheck(this, UnknownErrorException);

          _this2 = _super2.call(this, msg);
          _this2.details = details;
          return _this2;
        }

        return UnknownErrorException;
      }(BaseException);

      exports.UnknownErrorException = UnknownErrorException;

      var InvalidPDFException = /*#__PURE__*/function (_BaseException3) {
        _inherits(InvalidPDFException, _BaseException3);

        var _super3 = _createSuper(InvalidPDFException);

        function InvalidPDFException() {
          _classCallCheck(this, InvalidPDFException);

          return _super3.apply(this, arguments);
        }

        return InvalidPDFException;
      }(BaseException);

      exports.InvalidPDFException = InvalidPDFException;

      var MissingPDFException = /*#__PURE__*/function (_BaseException4) {
        _inherits(MissingPDFException, _BaseException4);

        var _super4 = _createSuper(MissingPDFException);

        function MissingPDFException() {
          _classCallCheck(this, MissingPDFException);

          return _super4.apply(this, arguments);
        }

        return MissingPDFException;
      }(BaseException);

      exports.MissingPDFException = MissingPDFException;

      var UnexpectedResponseException = /*#__PURE__*/function (_BaseException5) {
        _inherits(UnexpectedResponseException, _BaseException5);

        var _super5 = _createSuper(UnexpectedResponseException);

        function UnexpectedResponseException(msg, status) {
          var _this3;

          _classCallCheck(this, UnexpectedResponseException);

          _this3 = _super5.call(this, msg);
          _this3.status = status;
          return _this3;
        }

        return UnexpectedResponseException;
      }(BaseException);

      exports.UnexpectedResponseException = UnexpectedResponseException;

      var FormatError = /*#__PURE__*/function (_BaseException6) {
        _inherits(FormatError, _BaseException6);

        var _super6 = _createSuper(FormatError);

        function FormatError() {
          _classCallCheck(this, FormatError);

          return _super6.apply(this, arguments);
        }

        return FormatError;
      }(BaseException);

      exports.FormatError = FormatError;

      var AbortException = /*#__PURE__*/function (_BaseException7) {
        _inherits(AbortException, _BaseException7);

        var _super7 = _createSuper(AbortException);

        function AbortException() {
          _classCallCheck(this, AbortException);

          return _super7.apply(this, arguments);
        }

        return AbortException;
      }(BaseException);

      exports.AbortException = AbortException;
      var NullCharactersRegExp = /\x00/g;

      function removeNullCharacters(str) {
        if (typeof str !== "string") {
          warn("The argument for removeNullCharacters must be a string.");
          return str;
        }

        return str.replace(NullCharactersRegExp, "");
      }

      function bytesToString(bytes) {
        assert(bytes !== null && _typeof(bytes) === "object" && bytes.length !== undefined, "Invalid argument for bytesToString");
        var length = bytes.length;
        var MAX_ARGUMENT_COUNT = 8192;

        if (length < MAX_ARGUMENT_COUNT) {
          return String.fromCharCode.apply(null, bytes);
        }

        var strBuf = [];

        for (var i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
          var chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
          var chunk = bytes.subarray(i, chunkEnd);
          strBuf.push(String.fromCharCode.apply(null, chunk));
        }

        return strBuf.join("");
      }

      function stringToBytes(str) {
        assert(typeof str === "string", "Invalid argument for stringToBytes");
        var length = str.length;
        var bytes = new Uint8Array(length);

        for (var i = 0; i < length; ++i) {
          bytes[i] = str.charCodeAt(i) & 0xff;
        }

        return bytes;
      }

      function arrayByteLength(arr) {
        if (arr.length !== undefined) {
          return arr.length;
        }

        assert(arr.byteLength !== undefined);
        return arr.byteLength;
      }

      function arraysToBytes(arr) {
        var length = arr.length;

        if (length === 1 && arr[0] instanceof Uint8Array) {
          return arr[0];
        }

        var resultLength = 0;

        for (var i = 0; i < length; i++) {
          resultLength += arrayByteLength(arr[i]);
        }

        var pos = 0;
        var data = new Uint8Array(resultLength);

        for (var _i = 0; _i < length; _i++) {
          var item = arr[_i];

          if (!(item instanceof Uint8Array)) {
            if (typeof item === "string") {
              item = stringToBytes(item);
            } else {
              item = new Uint8Array(item);
            }
          }

          var itemLength = item.byteLength;
          data.set(item, pos);
          pos += itemLength;
        }

        return data;
      }

      function string32(value) {
        return String.fromCharCode(value >> 24 & 0xff, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff);
      }

      function isLittleEndian() {
        var buffer8 = new Uint8Array(4);
        buffer8[0] = 1;
        var view32 = new Uint32Array(buffer8.buffer, 0, 1);
        return view32[0] === 1;
      }

      var IsLittleEndianCached = {
        get value() {
          return shadow(this, "value", isLittleEndian());
        }

      };
      exports.IsLittleEndianCached = IsLittleEndianCached;

      function isEvalSupported() {
        try {
          new Function("");
          return true;
        } catch (e) {
          return false;
        }
      }

      var IsEvalSupportedCached = {
        get value() {
          return shadow(this, "value", isEvalSupported());
        }

      };
      exports.IsEvalSupportedCached = IsEvalSupportedCached;
      var rgbBuf = ["rgb(", 0, ",", 0, ",", 0, ")"];

      var Util = /*#__PURE__*/function () {
        function Util() {
          _classCallCheck(this, Util);
        }

        _createClass(Util, null, [{
          key: "makeCssRgb",
          value: function makeCssRgb(r, g, b) {
            rgbBuf[1] = r;
            rgbBuf[3] = g;
            rgbBuf[5] = b;
            return rgbBuf.join("");
          }
        }, {
          key: "transform",
          value: function transform(m1, m2) {
            return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
          }
        }, {
          key: "applyTransform",
          value: function applyTransform(p, m) {
            var xt = p[0] * m[0] + p[1] * m[2] + m[4];
            var yt = p[0] * m[1] + p[1] * m[3] + m[5];
            return [xt, yt];
          }
        }, {
          key: "applyInverseTransform",
          value: function applyInverseTransform(p, m) {
            var d = m[0] * m[3] - m[1] * m[2];
            var xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
            var yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
            return [xt, yt];
          }
        }, {
          key: "getAxialAlignedBoundingBox",
          value: function getAxialAlignedBoundingBox(r, m) {
            var p1 = Util.applyTransform(r, m);
            var p2 = Util.applyTransform(r.slice(2, 4), m);
            var p3 = Util.applyTransform([r[0], r[3]], m);
            var p4 = Util.applyTransform([r[2], r[1]], m);
            return [Math.min(p1[0], p2[0], p3[0], p4[0]), Math.min(p1[1], p2[1], p3[1], p4[1]), Math.max(p1[0], p2[0], p3[0], p4[0]), Math.max(p1[1], p2[1], p3[1], p4[1])];
          }
        }, {
          key: "inverseTransform",
          value: function inverseTransform(m) {
            var d = m[0] * m[3] - m[1] * m[2];
            return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
          }
        }, {
          key: "apply3dTransform",
          value: function apply3dTransform(m, v) {
            return [m[0] * v[0] + m[1] * v[1] + m[2] * v[2], m[3] * v[0] + m[4] * v[1] + m[5] * v[2], m[6] * v[0] + m[7] * v[1] + m[8] * v[2]];
          }
        }, {
          key: "singularValueDecompose2dScale",
          value: function singularValueDecompose2dScale(m) {
            var transpose = [m[0], m[2], m[1], m[3]];
            var a = m[0] * transpose[0] + m[1] * transpose[2];
            var b = m[0] * transpose[1] + m[1] * transpose[3];
            var c = m[2] * transpose[0] + m[3] * transpose[2];
            var d = m[2] * transpose[1] + m[3] * transpose[3];
            var first = (a + d) / 2;
            var second = Math.sqrt((a + d) * (a + d) - 4 * (a * d - c * b)) / 2;
            var sx = first + second || 1;
            var sy = first - second || 1;
            return [Math.sqrt(sx), Math.sqrt(sy)];
          }
        }, {
          key: "normalizeRect",
          value: function normalizeRect(rect) {
            var r = rect.slice(0);

            if (rect[0] > rect[2]) {
              r[0] = rect[2];
              r[2] = rect[0];
            }

            if (rect[1] > rect[3]) {
              r[1] = rect[3];
              r[3] = rect[1];
            }

            return r;
          }
        }, {
          key: "intersect",
          value: function intersect(rect1, rect2) {
            function compare(a, b) {
              return a - b;
            }

            var orderedX = [rect1[0], rect1[2], rect2[0], rect2[2]].sort(compare);
            var orderedY = [rect1[1], rect1[3], rect2[1], rect2[3]].sort(compare);
            var result = [];
            rect1 = Util.normalizeRect(rect1);
            rect2 = Util.normalizeRect(rect2);

            if (orderedX[0] === rect1[0] && orderedX[1] === rect2[0] || orderedX[0] === rect2[0] && orderedX[1] === rect1[0]) {
              result[0] = orderedX[1];
              result[2] = orderedX[2];
            } else {
              return null;
            }

            if (orderedY[0] === rect1[1] && orderedY[1] === rect2[1] || orderedY[0] === rect2[1] && orderedY[1] === rect1[1]) {
              result[1] = orderedY[1];
              result[3] = orderedY[2];
            } else {
              return null;
            }

            return result;
          }
        }]);

        return Util;
      }();

      exports.Util = Util;
      var PDFStringTranslateTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2D8, 0x2C7, 0x2C6, 0x2D9, 0x2DD, 0x2DB, 0x2DA, 0x2DC, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2022, 0x2020, 0x2021, 0x2026, 0x2014, 0x2013, 0x192, 0x2044, 0x2039, 0x203A, 0x2212, 0x2030, 0x201E, 0x201C, 0x201D, 0x2018, 0x2019, 0x201A, 0x2122, 0xFB01, 0xFB02, 0x141, 0x152, 0x160, 0x178, 0x17D, 0x131, 0x142, 0x153, 0x161, 0x17E, 0, 0x20AC];

      function stringToPDFString(str) {
        var length = str.length,
            strBuf = [];

        if (str[0] === "\xFE" && str[1] === "\xFF") {
          for (var i = 2; i < length; i += 2) {
            strBuf.push(String.fromCharCode(str.charCodeAt(i) << 8 | str.charCodeAt(i + 1)));
          }
        } else if (str[0] === "\xFF" && str[1] === "\xFE") {
          for (var _i2 = 2; _i2 < length; _i2 += 2) {
            strBuf.push(String.fromCharCode(str.charCodeAt(_i2 + 1) << 8 | str.charCodeAt(_i2)));
          }
        } else {
          for (var _i3 = 0; _i3 < length; ++_i3) {
            var code = PDFStringTranslateTable[str.charCodeAt(_i3)];
            strBuf.push(code ? String.fromCharCode(code) : str.charAt(_i3));
          }
        }

        return strBuf.join("");
      }

      function stringToUTF8String(str) {
        return decodeURIComponent(escape(str));
      }

      function utf8StringToString(str) {
        return unescape(encodeURIComponent(str));
      }

      function isEmptyObj(obj) {
        for (var key in obj) {
          return false;
        }

        return true;
      }

      function isBool(v) {
        return typeof v === "boolean";
      }

      function isNum(v) {
        return typeof v === "number";
      }

      function isString(v) {
        return typeof v === "string";
      }

      function isArrayBuffer(v) {
        return _typeof(v) === "object" && v !== null && v.byteLength !== undefined;
      }

      function isArrayEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) {
          return false;
        }

        return arr1.every(function (element, index) {
          return element === arr2[index];
        });
      }

      function createPromiseCapability() {
        var capability = Object.create(null);
        var isSettled = false;
        Object.defineProperty(capability, "settled", {
          get: function get() {
            return isSettled;
          }
        });
        capability.promise = new Promise(function (resolve, reject) {
          capability.resolve = function (data) {
            isSettled = true;
            resolve(data);
          };

          capability.reject = function (reason) {
            isSettled = true;
            reject(reason);
          };
        });
        return capability;
      }

      var createObjectURL = function createObjectURLClosure() {
        var digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        return function createObjectURL(data, contentType) {
          var forceDataSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (!forceDataSchema && URL.createObjectURL) {
            var blob = new Blob([data], {
              type: contentType
            });
            return URL.createObjectURL(blob);
          }

          var buffer = "data:".concat(contentType, ";base64,");

          for (var i = 0, ii = data.length; i < ii; i += 3) {
            var b1 = data[i] & 0xff;
            var b2 = data[i + 1] & 0xff;
            var b3 = data[i + 2] & 0xff;
            var d1 = b1 >> 2,
                d2 = (b1 & 3) << 4 | b2 >> 4;
            var d3 = i + 1 < ii ? (b2 & 0xf) << 2 | b3 >> 6 : 64;
            var d4 = i + 2 < ii ? b3 & 0x3f : 64;
            buffer += digits[d1] + digits[d2] + digits[d3] + digits[d4];
          }

          return buffer;
        };
      }();

      exports.createObjectURL = createObjectURL;
      /***/
    },
    /* 2 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      ;
      /***/
    },
    /* 3 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getDocument = getDocument;
      exports.setPDFNetworkStreamFactory = setPDFNetworkStreamFactory;
      exports.build = exports.version = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFWorker = exports.PDFDataRangeTransport = exports.LoopbackPort = void 0;

      var _util = __w_pdfjs_require__(1);

      var _display_utils = __w_pdfjs_require__(4);

      var _font_loader = __w_pdfjs_require__(5);

      var _api_compatibility = __w_pdfjs_require__(6);

      var _canvas = __w_pdfjs_require__(8);

      var _worker_options = __w_pdfjs_require__(10);

      var _is_node = __w_pdfjs_require__(7);

      var _message_handler = __w_pdfjs_require__(11);

      var _metadata = __w_pdfjs_require__(12);

      var _transport_stream = __w_pdfjs_require__(14);

      var _webgl = __w_pdfjs_require__(15);

      var DEFAULT_RANGE_CHUNK_SIZE = 65536;
      var RENDERING_CANCELLED_TIMEOUT = 100;
      var createPDFNetworkStream;

      function setPDFNetworkStreamFactory(pdfNetworkStreamFactory) {
        createPDFNetworkStream = pdfNetworkStreamFactory;
      }

      function getDocument(src) {
        var task = new PDFDocumentLoadingTask();
        var source;

        if (typeof src === "string") {
          source = {
            url: src
          };
        } else if ((0, _util.isArrayBuffer)(src)) {
          source = {
            data: src
          };
        } else if (src instanceof PDFDataRangeTransport) {
          source = {
            range: src
          };
        } else {
          if (_typeof(src) !== "object") {
            throw new Error("Invalid parameter in getDocument, " + "need either Uint8Array, string or a parameter object");
          }

          if (!src.url && !src.data && !src.range) {
            throw new Error("Invalid parameter object: need either .data, .range or .url");
          }

          source = src;
        }

        var params = Object.create(null);
        var rangeTransport = null,
            worker = null;

        for (var key in source) {
          if (key === "url" && typeof window !== "undefined") {
            params[key] = new URL(source[key], window.location).href;
            continue;
          } else if (key === "range") {
            rangeTransport = source[key];
            continue;
          } else if (key === "worker") {
            worker = source[key];
            continue;
          } else if (key === "data" && !(source[key] instanceof Uint8Array)) {
            var pdfBytes = source[key];

            if (typeof pdfBytes === "string") {
              params[key] = (0, _util.stringToBytes)(pdfBytes);
            } else if (_typeof(pdfBytes) === "object" && pdfBytes !== null && !isNaN(pdfBytes.length)) {
              params[key] = new Uint8Array(pdfBytes);
            } else if ((0, _util.isArrayBuffer)(pdfBytes)) {
              params[key] = new Uint8Array(pdfBytes);
            } else {
              throw new Error("Invalid PDF binary data: either typed array, " + "string or array-like object is expected in the " + "data property.");
            }

            continue;
          }

          params[key] = source[key];
        }

        params.rangeChunkSize = params.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE;
        params.CMapReaderFactory = params.CMapReaderFactory || _display_utils.DOMCMapReaderFactory;
        params.ignoreErrors = params.stopAtErrors !== true;
        params.pdfBug = params.pdfBug === true;
        var NativeImageDecoderValues = Object.values(_util.NativeImageDecoding);

        if (params.nativeImageDecoderSupport === undefined || !NativeImageDecoderValues.includes(params.nativeImageDecoderSupport)) {
          params.nativeImageDecoderSupport = _api_compatibility.apiCompatibilityParams.nativeImageDecoderSupport || _util.NativeImageDecoding.DECODE;
        }

        if (!Number.isInteger(params.maxImageSize)) {
          params.maxImageSize = -1;
        }

        if (typeof params.isEvalSupported !== "boolean") {
          params.isEvalSupported = true;
        }

        if (typeof params.disableFontFace !== "boolean") {
          params.disableFontFace = _api_compatibility.apiCompatibilityParams.disableFontFace || false;
        }

        if (typeof params.disableRange !== "boolean") {
          params.disableRange = false;
        }

        if (typeof params.disableStream !== "boolean") {
          params.disableStream = false;
        }

        if (typeof params.disableAutoFetch !== "boolean") {
          params.disableAutoFetch = false;
        }

        if (typeof params.disableCreateObjectURL !== "boolean") {
          params.disableCreateObjectURL = _api_compatibility.apiCompatibilityParams.disableCreateObjectURL || false;
        }

        (0, _util.setVerbosityLevel)(params.verbosity);

        if (!worker) {
          var workerParams = {
            verbosity: params.verbosity,
            port: _worker_options.GlobalWorkerOptions.workerPort
          };
          worker = workerParams.port ? PDFWorker.fromPort(workerParams) : new PDFWorker(workerParams);
          task._worker = worker;
        }

        var docId = task.docId;
        worker.promise.then(function () {
          if (task.destroyed) {
            throw new Error("Loading aborted");
          }

          return _fetchDocument(worker, params, rangeTransport, docId).then(function (workerId) {
            if (task.destroyed) {
              throw new Error("Loading aborted");
            }

            var networkStream;

            if (rangeTransport) {
              networkStream = new _transport_stream.PDFDataTransportStream({
                length: params.length,
                initialData: params.initialData,
                progressiveDone: params.progressiveDone,
                disableRange: params.disableRange,
                disableStream: params.disableStream
              }, rangeTransport);
            } else if (!params.data) {
              networkStream = createPDFNetworkStream({
                url: params.url,
                length: params.length,
                httpHeaders: params.httpHeaders,
                withCredentials: params.withCredentials,
                rangeChunkSize: params.rangeChunkSize,
                disableRange: params.disableRange,
                disableStream: params.disableStream
              });
            }

            var messageHandler = new _message_handler.MessageHandler(docId, workerId, worker.port);
            messageHandler.postMessageTransfers = worker.postMessageTransfers;
            var transport = new WorkerTransport(messageHandler, task, networkStream, params);
            task._transport = transport;
            messageHandler.send("Ready", null);
          });
        })["catch"](task._capability.reject);
        return task;
      }

      function _fetchDocument(worker, source, pdfDataRangeTransport, docId) {
        if (worker.destroyed) {
          return Promise.reject(new Error("Worker was destroyed"));
        }

        if (pdfDataRangeTransport) {
          source.length = pdfDataRangeTransport.length;
          source.initialData = pdfDataRangeTransport.initialData;
          source.progressiveDone = pdfDataRangeTransport.progressiveDone;
        }

        return worker.messageHandler.sendWithPromise("GetDocRequest", {
          docId: docId,
          apiVersion: '2.4.456',
          source: {
            data: source.data,
            url: source.url,
            password: source.password,
            disableAutoFetch: source.disableAutoFetch,
            rangeChunkSize: source.rangeChunkSize,
            length: source.length
          },
          maxImageSize: source.maxImageSize,
          disableFontFace: source.disableFontFace,
          disableCreateObjectURL: source.disableCreateObjectURL,
          postMessageTransfers: worker.postMessageTransfers,
          docBaseUrl: source.docBaseUrl,
          nativeImageDecoderSupport: source.nativeImageDecoderSupport,
          ignoreErrors: source.ignoreErrors,
          isEvalSupported: source.isEvalSupported
        }).then(function (workerId) {
          if (worker.destroyed) {
            throw new Error("Worker was destroyed");
          }

          return workerId;
        });
      }

      var PDFDocumentLoadingTask = function PDFDocumentLoadingTaskClosure() {
        var nextDocumentId = 0;

        var PDFDocumentLoadingTask = /*#__PURE__*/function () {
          function PDFDocumentLoadingTask() {
            _classCallCheck(this, PDFDocumentLoadingTask);

            this._capability = (0, _util.createPromiseCapability)();
            this._transport = null;
            this._worker = null;
            this.docId = "d" + nextDocumentId++;
            this.destroyed = false;
            this.onPassword = null;
            this.onProgress = null;
            this.onUnsupportedFeature = null;
          }

          _createClass(PDFDocumentLoadingTask, [{
            key: "destroy",
            value: function destroy() {
              var _this4 = this;

              this.destroyed = true;
              var transportDestroyed = !this._transport ? Promise.resolve() : this._transport.destroy();
              return transportDestroyed.then(function () {
                _this4._transport = null;

                if (_this4._worker) {
                  _this4._worker.destroy();

                  _this4._worker = null;
                }
              });
            }
          }, {
            key: "then",
            value: function then(onFulfilled, onRejected) {
              throw new Error("Removed API method: " + "PDFDocumentLoadingTask.then, use the `promise` getter instead.");
            }
          }, {
            key: "promise",
            get: function get() {
              return this._capability.promise;
            }
          }]);

          return PDFDocumentLoadingTask;
        }();

        return PDFDocumentLoadingTask;
      }();

      var PDFDataRangeTransport = /*#__PURE__*/function () {
        function PDFDataRangeTransport(length, initialData) {
          var progressiveDone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          _classCallCheck(this, PDFDataRangeTransport);

          this.length = length;
          this.initialData = initialData;
          this.progressiveDone = progressiveDone;
          this._rangeListeners = [];
          this._progressListeners = [];
          this._progressiveReadListeners = [];
          this._progressiveDoneListeners = [];
          this._readyCapability = (0, _util.createPromiseCapability)();
        }

        _createClass(PDFDataRangeTransport, [{
          key: "addRangeListener",
          value: function addRangeListener(listener) {
            this._rangeListeners.push(listener);
          }
        }, {
          key: "addProgressListener",
          value: function addProgressListener(listener) {
            this._progressListeners.push(listener);
          }
        }, {
          key: "addProgressiveReadListener",
          value: function addProgressiveReadListener(listener) {
            this._progressiveReadListeners.push(listener);
          }
        }, {
          key: "addProgressiveDoneListener",
          value: function addProgressiveDoneListener(listener) {
            this._progressiveDoneListeners.push(listener);
          }
        }, {
          key: "onDataRange",
          value: function onDataRange(begin, chunk) {
            var _iterator = _createForOfIteratorHelper(this._rangeListeners),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var listener = _step.value;
                listener(begin, chunk);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "onDataProgress",
          value: function onDataProgress(loaded, total) {
            var _this5 = this;

            this._readyCapability.promise.then(function () {
              var _iterator2 = _createForOfIteratorHelper(_this5._progressListeners),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var listener = _step2.value;
                  listener(loaded, total);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            });
          }
        }, {
          key: "onDataProgressiveRead",
          value: function onDataProgressiveRead(chunk) {
            var _this6 = this;

            this._readyCapability.promise.then(function () {
              var _iterator3 = _createForOfIteratorHelper(_this6._progressiveReadListeners),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var listener = _step3.value;
                  listener(chunk);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            });
          }
        }, {
          key: "onDataProgressiveDone",
          value: function onDataProgressiveDone() {
            var _this7 = this;

            this._readyCapability.promise.then(function () {
              var _iterator4 = _createForOfIteratorHelper(_this7._progressiveDoneListeners),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var listener = _step4.value;
                  listener();
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            });
          }
        }, {
          key: "transportReady",
          value: function transportReady() {
            this._readyCapability.resolve();
          }
        }, {
          key: "requestDataRange",
          value: function requestDataRange(begin, end) {
            (0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
          }
        }, {
          key: "abort",
          value: function abort() {}
        }]);

        return PDFDataRangeTransport;
      }();

      exports.PDFDataRangeTransport = PDFDataRangeTransport;

      var PDFDocumentProxy = /*#__PURE__*/function () {
        function PDFDocumentProxy(pdfInfo, transport) {
          _classCallCheck(this, PDFDocumentProxy);

          this._pdfInfo = pdfInfo;
          this._transport = transport;
        }

        _createClass(PDFDocumentProxy, [{
          key: "getPage",
          value: function getPage(pageNumber) {
            return this._transport.getPage(pageNumber);
          }
        }, {
          key: "getPageIndex",
          value: function getPageIndex(ref) {
            return this._transport.getPageIndex(ref);
          }
        }, {
          key: "getDestinations",
          value: function getDestinations() {
            return this._transport.getDestinations();
          }
        }, {
          key: "getDestination",
          value: function getDestination(id) {
            return this._transport.getDestination(id);
          }
        }, {
          key: "getPageLabels",
          value: function getPageLabels() {
            return this._transport.getPageLabels();
          }
        }, {
          key: "getPageLayout",
          value: function getPageLayout() {
            return this._transport.getPageLayout();
          }
        }, {
          key: "getPageMode",
          value: function getPageMode() {
            return this._transport.getPageMode();
          }
        }, {
          key: "getViewerPreferences",
          value: function getViewerPreferences() {
            return this._transport.getViewerPreferences();
          }
        }, {
          key: "getOpenAction",
          value: function getOpenAction() {
            return this._transport.getOpenAction();
          }
        }, {
          key: "getOpenActionDestination",
          value: function getOpenActionDestination() {
            (0, _display_utils.deprecated)("getOpenActionDestination, use getOpenAction instead.");
            return this.getOpenAction().then(function (openAction) {
              return openAction && openAction.dest ? openAction.dest : null;
            });
          }
        }, {
          key: "getAttachments",
          value: function getAttachments() {
            return this._transport.getAttachments();
          }
        }, {
          key: "getJavaScript",
          value: function getJavaScript() {
            return this._transport.getJavaScript();
          }
        }, {
          key: "getOutline",
          value: function getOutline() {
            return this._transport.getOutline();
          }
        }, {
          key: "getPermissions",
          value: function getPermissions() {
            return this._transport.getPermissions();
          }
        }, {
          key: "getMetadata",
          value: function getMetadata() {
            return this._transport.getMetadata();
          }
        }, {
          key: "getData",
          value: function getData() {
            return this._transport.getData();
          }
        }, {
          key: "getDownloadInfo",
          value: function getDownloadInfo() {
            return this._transport.downloadInfoCapability.promise;
          }
        }, {
          key: "getStats",
          value: function getStats() {
            return this._transport.getStats();
          }
        }, {
          key: "cleanup",
          value: function cleanup() {
            return this._transport.startCleanup();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            return this.loadingTask.destroy();
          }
        }, {
          key: "numPages",
          get: function get() {
            return this._pdfInfo.numPages;
          }
        }, {
          key: "fingerprint",
          get: function get() {
            return this._pdfInfo.fingerprint;
          }
        }, {
          key: "loadingParams",
          get: function get() {
            return this._transport.loadingParams;
          }
        }, {
          key: "loadingTask",
          get: function get() {
            return this._transport.loadingTask;
          }
        }]);

        return PDFDocumentProxy;
      }();

      exports.PDFDocumentProxy = PDFDocumentProxy;

      var PDFPageProxy = /*#__PURE__*/function () {
        function PDFPageProxy(pageIndex, pageInfo, transport) {
          var pdfBug = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

          _classCallCheck(this, PDFPageProxy);

          this._pageIndex = pageIndex;
          this._pageInfo = pageInfo;
          this._transport = transport;
          this._stats = pdfBug ? new _display_utils.StatTimer() : null;
          this._pdfBug = pdfBug;
          this.commonObjs = transport.commonObjs;
          this.objs = new PDFObjects();
          this.cleanupAfterRender = false;
          this.pendingCleanup = false;
          this.intentStates = Object.create(null);
          this.destroyed = false;
        }

        _createClass(PDFPageProxy, [{
          key: "getViewport",
          value: function getViewport() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                scale = _ref.scale,
                _ref$rotation = _ref.rotation,
                rotation = _ref$rotation === void 0 ? this.rotate : _ref$rotation,
                _ref$offsetX = _ref.offsetX,
                offsetX = _ref$offsetX === void 0 ? 0 : _ref$offsetX,
                _ref$offsetY = _ref.offsetY,
                offsetY = _ref$offsetY === void 0 ? 0 : _ref$offsetY,
                _ref$dontFlip = _ref.dontFlip,
                dontFlip = _ref$dontFlip === void 0 ? false : _ref$dontFlip;

            if (arguments.length > 1 || typeof arguments[0] === "number") {
              throw new Error("PDFPageProxy.getViewport is called with obsolete arguments.");
            }

            return new _display_utils.PageViewport({
              viewBox: this.view,
              scale: scale,
              rotation: rotation,
              offsetX: offsetX,
              offsetY: offsetY,
              dontFlip: dontFlip
            });
          }
        }, {
          key: "getAnnotations",
          value: function getAnnotations() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref2$intent = _ref2.intent,
                intent = _ref2$intent === void 0 ? null : _ref2$intent;

            if (!this.annotationsPromise || this.annotationsIntent !== intent) {
              this.annotationsPromise = this._transport.getAnnotations(this._pageIndex, intent);
              this.annotationsIntent = intent;
            }

            return this.annotationsPromise;
          }
        }, {
          key: "render",
          value: function render(_ref3) {
            var _this8 = this;

            var canvasContext = _ref3.canvasContext,
                viewport = _ref3.viewport,
                _ref3$intent = _ref3.intent,
                intent = _ref3$intent === void 0 ? "display" : _ref3$intent,
                _ref3$enableWebGL = _ref3.enableWebGL,
                enableWebGL = _ref3$enableWebGL === void 0 ? false : _ref3$enableWebGL,
                _ref3$renderInteracti = _ref3.renderInteractiveForms,
                renderInteractiveForms = _ref3$renderInteracti === void 0 ? false : _ref3$renderInteracti,
                _ref3$transform = _ref3.transform,
                transform = _ref3$transform === void 0 ? null : _ref3$transform,
                _ref3$imageLayer = _ref3.imageLayer,
                imageLayer = _ref3$imageLayer === void 0 ? null : _ref3$imageLayer,
                _ref3$canvasFactory = _ref3.canvasFactory,
                canvasFactory = _ref3$canvasFactory === void 0 ? null : _ref3$canvasFactory,
                _ref3$background = _ref3.background,
                background = _ref3$background === void 0 ? null : _ref3$background;

            if (this._stats) {
              this._stats.time("Overall");
            }

            var renderingIntent = intent === "print" ? "print" : "display";
            this.pendingCleanup = false;

            if (!this.intentStates[renderingIntent]) {
              this.intentStates[renderingIntent] = Object.create(null);
            }

            var intentState = this.intentStates[renderingIntent];

            if (intentState.streamReaderCancelTimeout) {
              clearTimeout(intentState.streamReaderCancelTimeout);
              intentState.streamReaderCancelTimeout = null;
            }

            var canvasFactoryInstance = canvasFactory || new _display_utils.DOMCanvasFactory();
            var webGLContext = new _webgl.WebGLContext({
              enable: enableWebGL
            });

            if (!intentState.displayReadyCapability) {
              intentState.displayReadyCapability = (0, _util.createPromiseCapability)();
              intentState.operatorList = {
                fnArray: [],
                argsArray: [],
                lastChunk: false
              };

              if (this._stats) {
                this._stats.time("Page Request");
              }

              this._pumpOperatorList({
                pageIndex: this._pageIndex,
                intent: renderingIntent,
                renderInteractiveForms: renderInteractiveForms === true
              });
            }

            var complete = function complete(error) {
              var i = intentState.renderTasks.indexOf(internalRenderTask);

              if (i >= 0) {
                intentState.renderTasks.splice(i, 1);
              }

              if (_this8.cleanupAfterRender || renderingIntent === "print") {
                _this8.pendingCleanup = true;
              }

              _this8._tryCleanup();

              if (error) {
                internalRenderTask.capability.reject(error);

                _this8._abortOperatorList({
                  intentState: intentState,
                  reason: error
                });
              } else {
                internalRenderTask.capability.resolve();
              }

              if (_this8._stats) {
                _this8._stats.timeEnd("Rendering");

                _this8._stats.timeEnd("Overall");
              }
            };

            var internalRenderTask = new InternalRenderTask({
              callback: complete,
              params: {
                canvasContext: canvasContext,
                viewport: viewport,
                transform: transform,
                imageLayer: imageLayer,
                background: background
              },
              objs: this.objs,
              commonObjs: this.commonObjs,
              operatorList: intentState.operatorList,
              pageIndex: this._pageIndex,
              canvasFactory: canvasFactoryInstance,
              webGLContext: webGLContext,
              useRequestAnimationFrame: renderingIntent !== "print",
              pdfBug: this._pdfBug
            });

            if (!intentState.renderTasks) {
              intentState.renderTasks = [];
            }

            intentState.renderTasks.push(internalRenderTask);
            var renderTask = internalRenderTask.task;
            intentState.displayReadyCapability.promise.then(function (transparency) {
              if (_this8.pendingCleanup) {
                complete();
                return;
              }

              if (_this8._stats) {
                _this8._stats.time("Rendering");
              }

              internalRenderTask.initializeGraphics(transparency);
              internalRenderTask.operatorListChanged();
            })["catch"](complete);
            return renderTask;
          }
        }, {
          key: "getOperatorList",
          value: function getOperatorList() {
            function operatorListChanged() {
              if (intentState.operatorList.lastChunk) {
                intentState.opListReadCapability.resolve(intentState.operatorList);
                var i = intentState.renderTasks.indexOf(opListTask);

                if (i >= 0) {
                  intentState.renderTasks.splice(i, 1);
                }
              }
            }

            var renderingIntent = "oplist";

            if (!this.intentStates[renderingIntent]) {
              this.intentStates[renderingIntent] = Object.create(null);
            }

            var intentState = this.intentStates[renderingIntent];
            var opListTask;

            if (!intentState.opListReadCapability) {
              opListTask = {};
              opListTask.operatorListChanged = operatorListChanged;
              intentState.opListReadCapability = (0, _util.createPromiseCapability)();
              intentState.renderTasks = [];
              intentState.renderTasks.push(opListTask);
              intentState.operatorList = {
                fnArray: [],
                argsArray: [],
                lastChunk: false
              };

              if (this._stats) {
                this._stats.time("Page Request");
              }

              this._pumpOperatorList({
                pageIndex: this._pageIndex,
                intent: renderingIntent
              });
            }

            return intentState.opListReadCapability.promise;
          }
        }, {
          key: "streamTextContent",
          value: function streamTextContent() {
            var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref4$normalizeWhites = _ref4.normalizeWhitespace,
                normalizeWhitespace = _ref4$normalizeWhites === void 0 ? false : _ref4$normalizeWhites,
                _ref4$disableCombineT = _ref4.disableCombineTextItems,
                disableCombineTextItems = _ref4$disableCombineT === void 0 ? false : _ref4$disableCombineT;

            var TEXT_CONTENT_CHUNK_SIZE = 100;
            return this._transport.messageHandler.sendWithStream("GetTextContent", {
              pageIndex: this._pageIndex,
              normalizeWhitespace: normalizeWhitespace === true,
              combineTextItems: disableCombineTextItems !== true
            }, {
              highWaterMark: TEXT_CONTENT_CHUNK_SIZE,
              size: function size(textContent) {
                return textContent.items.length;
              }
            });
          }
        }, {
          key: "getTextContent",
          value: function getTextContent() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var readableStream = this.streamTextContent(params);
            return new Promise(function (resolve, reject) {
              function pump() {
                reader.read().then(function (_ref5) {
                  var _textContent$items;

                  var value = _ref5.value,
                      done = _ref5.done;

                  if (done) {
                    resolve(textContent);
                    return;
                  }

                  Object.assign(textContent.styles, value.styles);

                  (_textContent$items = textContent.items).push.apply(_textContent$items, _toConsumableArray(value.items));

                  pump();
                }, reject);
              }

              var reader = readableStream.getReader();
              var textContent = {
                items: [],
                styles: Object.create(null)
              };
              pump();
            });
          }
        }, {
          key: "_destroy",
          value: function _destroy() {
            var _this9 = this;

            this.destroyed = true;
            this._transport.pageCache[this._pageIndex] = null;
            var waitOn = [];
            Object.keys(this.intentStates).forEach(function (intent) {
              var intentState = _this9.intentStates[intent];

              _this9._abortOperatorList({
                intentState: intentState,
                reason: new Error("Page was destroyed."),
                force: true
              });

              if (intent === "oplist") {
                return;
              }

              intentState.renderTasks.forEach(function (renderTask) {
                var renderCompleted = renderTask.capability.promise["catch"](function () {});
                waitOn.push(renderCompleted);
                renderTask.cancel();
              });
            });
            this.objs.clear();
            this.annotationsPromise = null;
            this.pendingCleanup = false;
            return Promise.all(waitOn);
          }
        }, {
          key: "cleanup",
          value: function cleanup() {
            var resetStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.pendingCleanup = true;
            return this._tryCleanup(resetStats);
          }
        }, {
          key: "_tryCleanup",
          value: function _tryCleanup() {
            var _this10 = this;

            var resetStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (!this.pendingCleanup || Object.keys(this.intentStates).some(function (intent) {
              var intentState = _this10.intentStates[intent];
              return intentState.renderTasks.length !== 0 || !intentState.operatorList.lastChunk;
            })) {
              return false;
            }

            Object.keys(this.intentStates).forEach(function (intent) {
              delete _this10.intentStates[intent];
            });
            this.objs.clear();
            this.annotationsPromise = null;

            if (resetStats && this._stats) {
              this._stats = new _display_utils.StatTimer();
            }

            this.pendingCleanup = false;
            return true;
          }
        }, {
          key: "_startRenderPage",
          value: function _startRenderPage(transparency, intent) {
            var intentState = this.intentStates[intent];

            if (!intentState) {
              return;
            }

            if (this._stats) {
              this._stats.timeEnd("Page Request");
            }

            if (intentState.displayReadyCapability) {
              intentState.displayReadyCapability.resolve(transparency);
            }
          }
        }, {
          key: "_renderPageChunk",
          value: function _renderPageChunk(operatorListChunk, intentState) {
            for (var i = 0, ii = operatorListChunk.length; i < ii; i++) {
              intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
              intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i]);
            }

            intentState.operatorList.lastChunk = operatorListChunk.lastChunk;

            for (var _i4 = 0; _i4 < intentState.renderTasks.length; _i4++) {
              intentState.renderTasks[_i4].operatorListChanged();
            }

            if (operatorListChunk.lastChunk) {
              this._tryCleanup();
            }
          }
        }, {
          key: "_pumpOperatorList",
          value: function _pumpOperatorList(args) {
            var _this11 = this;

            (0, _util.assert)(args.intent, 'PDFPageProxy._pumpOperatorList: Expected "intent" argument.');

            var readableStream = this._transport.messageHandler.sendWithStream("GetOperatorList", args);

            var reader = readableStream.getReader();
            var intentState = this.intentStates[args.intent];
            intentState.streamReader = reader;

            var pump = function pump() {
              reader.read().then(function (_ref6) {
                var value = _ref6.value,
                    done = _ref6.done;

                if (done) {
                  intentState.streamReader = null;
                  return;
                }

                if (_this11._transport.destroyed) {
                  return;
                }

                _this11._renderPageChunk(value, intentState);

                pump();
              }, function (reason) {
                intentState.streamReader = null;

                if (_this11._transport.destroyed) {
                  return;
                }

                if (intentState.operatorList) {
                  intentState.operatorList.lastChunk = true;

                  for (var i = 0; i < intentState.renderTasks.length; i++) {
                    intentState.renderTasks[i].operatorListChanged();
                  }

                  _this11._tryCleanup();
                }

                if (intentState.displayReadyCapability) {
                  intentState.displayReadyCapability.reject(reason);
                } else if (intentState.opListReadCapability) {
                  intentState.opListReadCapability.reject(reason);
                } else {
                  throw reason;
                }
              });
            };

            pump();
          }
        }, {
          key: "_abortOperatorList",
          value: function _abortOperatorList(_ref7) {
            var _this12 = this;

            var intentState = _ref7.intentState,
                reason = _ref7.reason,
                _ref7$force = _ref7.force,
                force = _ref7$force === void 0 ? false : _ref7$force;
            (0, _util.assert)(reason instanceof Error || _typeof(reason) === "object" && reason !== null, 'PDFPageProxy._abortOperatorList: Expected "reason" argument.');

            if (!intentState.streamReader) {
              return;
            }

            if (!force) {
              if (intentState.renderTasks.length !== 0) {
                return;
              }

              if (reason instanceof _display_utils.RenderingCancelledException) {
                intentState.streamReaderCancelTimeout = setTimeout(function () {
                  _this12._abortOperatorList({
                    intentState: intentState,
                    reason: reason,
                    force: true
                  });

                  intentState.streamReaderCancelTimeout = null;
                }, RENDERING_CANCELLED_TIMEOUT);
                return;
              }
            }

            intentState.streamReader.cancel(new _util.AbortException(reason && reason.message));
            intentState.streamReader = null;

            if (this._transport.destroyed) {
              return;
            }

            Object.keys(this.intentStates).some(function (intent) {
              if (_this12.intentStates[intent] === intentState) {
                delete _this12.intentStates[intent];
                return true;
              }

              return false;
            });
            this.cleanup();
          }
        }, {
          key: "pageNumber",
          get: function get() {
            return this._pageIndex + 1;
          }
        }, {
          key: "rotate",
          get: function get() {
            return this._pageInfo.rotate;
          }
        }, {
          key: "ref",
          get: function get() {
            return this._pageInfo.ref;
          }
        }, {
          key: "userUnit",
          get: function get() {
            return this._pageInfo.userUnit;
          }
        }, {
          key: "view",
          get: function get() {
            return this._pageInfo.view;
          }
        }, {
          key: "stats",
          get: function get() {
            return this._stats;
          }
        }]);

        return PDFPageProxy;
      }();

      exports.PDFPageProxy = PDFPageProxy;

      var LoopbackPort = /*#__PURE__*/function () {
        function LoopbackPort() {
          var defer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          _classCallCheck(this, LoopbackPort);

          this._listeners = [];
          this._defer = defer;
          this._deferred = Promise.resolve(undefined);
        }

        _createClass(LoopbackPort, [{
          key: "postMessage",
          value: function postMessage(obj, transfers) {
            var _this13 = this;

            function cloneValue(value) {
              if (_typeof(value) !== "object" || value === null) {
                return value;
              }

              if (cloned.has(value)) {
                return cloned.get(value);
              }

              var buffer, result;

              if ((buffer = value.buffer) && (0, _util.isArrayBuffer)(buffer)) {
                var transferable = transfers && transfers.includes(buffer);

                if (transferable) {
                  result = new value.constructor(buffer, value.byteOffset, value.byteLength);
                } else {
                  result = new value.constructor(value);
                }

                cloned.set(value, result);
                return result;
              }

              result = Array.isArray(value) ? [] : {};
              cloned.set(value, result);

              for (var i in value) {
                var desc = void 0,
                    p = value;

                while (!(desc = Object.getOwnPropertyDescriptor(p, i))) {
                  p = Object.getPrototypeOf(p);
                }

                if (typeof desc.value === "undefined") {
                  continue;
                }

                if (typeof desc.value === "function") {
                  if (value.hasOwnProperty && value.hasOwnProperty(i)) {
                    throw new Error("LoopbackPort.postMessage - cannot clone: ".concat(value[i]));
                  }

                  continue;
                }

                result[i] = cloneValue(desc.value);
              }

              return result;
            }

            if (!this._defer) {
              this._listeners.forEach(function (listener) {
                listener.call(_this13, {
                  data: obj
                });
              });

              return;
            }

            var cloned = new WeakMap();
            var e = {
              data: cloneValue(obj)
            };

            this._deferred.then(function () {
              _this13._listeners.forEach(function (listener) {
                listener.call(_this13, e);
              });
            });
          }
        }, {
          key: "addEventListener",
          value: function addEventListener(name, listener) {
            this._listeners.push(listener);
          }
        }, {
          key: "removeEventListener",
          value: function removeEventListener(name, listener) {
            var i = this._listeners.indexOf(listener);

            this._listeners.splice(i, 1);
          }
        }, {
          key: "terminate",
          value: function terminate() {
            this._listeners.length = 0;
          }
        }]);

        return LoopbackPort;
      }();

      exports.LoopbackPort = LoopbackPort;

      var PDFWorker = function PDFWorkerClosure() {
        var pdfWorkerPorts = new WeakMap();
        var isWorkerDisabled = false;
        var fallbackWorkerSrc;
        var nextFakeWorkerId = 0;
        var fakeWorkerCapability;

        if (_is_node.isNodeJS && "function" === "function") {
          isWorkerDisabled = true;
          fallbackWorkerSrc = "./pdf.worker.js";
        } else if ((typeof document === "undefined" ? "undefined" : _typeof(document)) === "object" && "currentScript" in document) {
          var pdfjsFilePath = document.currentScript && document.currentScript.src;

          if (pdfjsFilePath) {
            fallbackWorkerSrc = pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2");
          }
        }

        function _getWorkerSrc() {
          if (_worker_options.GlobalWorkerOptions.workerSrc) {
            return _worker_options.GlobalWorkerOptions.workerSrc;
          }

          if (typeof fallbackWorkerSrc !== "undefined") {
            if (!_is_node.isNodeJS) {
              (0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.');
            }

            return fallbackWorkerSrc;
          }

          throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
        }

        function getMainThreadWorkerMessageHandler() {
          var mainWorkerMessageHandler;

          try {
            mainWorkerMessageHandler = globalThis.pdfjsWorker && globalThis.pdfjsWorker.WorkerMessageHandler;
          } catch (ex) {}

          return mainWorkerMessageHandler || null;
        }

        function setupFakeWorkerGlobal() {
          if (fakeWorkerCapability) {
            return fakeWorkerCapability.promise;
          }

          fakeWorkerCapability = (0, _util.createPromiseCapability)();

          var loader = /*#__PURE__*/function () {
            var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var mainWorkerMessageHandler, worker;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      mainWorkerMessageHandler = getMainThreadWorkerMessageHandler();

                      if (!mainWorkerMessageHandler) {
                        _context.next = 3;
                        break;
                      }

                      return _context.abrupt("return", mainWorkerMessageHandler);

                    case 3:
                      if (!(_is_node.isNodeJS && "function" === "function")) {
                        _context.next = 6;
                        break;
                      }

                      worker = eval("require")(_getWorkerSrc());
                      return _context.abrupt("return", worker.WorkerMessageHandler);

                    case 6:
                      _context.next = 8;
                      return (0, _display_utils.loadScript)(_getWorkerSrc());

                    case 8:
                      return _context.abrupt("return", window.pdfjsWorker.WorkerMessageHandler);

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function loader() {
              return _ref8.apply(this, arguments);
            };
          }();

          loader().then(fakeWorkerCapability.resolve, fakeWorkerCapability.reject);
          return fakeWorkerCapability.promise;
        }

        function createCDNWrapper(url) {
          var wrapper = "importScripts('" + url + "');";
          return URL.createObjectURL(new Blob([wrapper]));
        }

        var PDFWorker = /*#__PURE__*/function () {
          function PDFWorker() {
            var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref9$name = _ref9.name,
                name = _ref9$name === void 0 ? null : _ref9$name,
                _ref9$port = _ref9.port,
                port = _ref9$port === void 0 ? null : _ref9$port,
                _ref9$verbosity = _ref9.verbosity,
                verbosity = _ref9$verbosity === void 0 ? (0, _util.getVerbosityLevel)() : _ref9$verbosity;

            _classCallCheck(this, PDFWorker);

            if (port && pdfWorkerPorts.has(port)) {
              throw new Error("Cannot use more than one PDFWorker per port");
            }

            this.name = name;
            this.destroyed = false;
            this.postMessageTransfers = true;
            this.verbosity = verbosity;
            this._readyCapability = (0, _util.createPromiseCapability)();
            this._port = null;
            this._webWorker = null;
            this._messageHandler = null;

            if (port) {
              pdfWorkerPorts.set(port, this);

              this._initializeFromPort(port);

              return;
            }

            this._initialize();
          }

          _createClass(PDFWorker, [{
            key: "_initializeFromPort",
            value: function _initializeFromPort(port) {
              this._port = port;
              this._messageHandler = new _message_handler.MessageHandler("main", "worker", port);

              this._messageHandler.on("ready", function () {});

              this._readyCapability.resolve();
            }
          }, {
            key: "_initialize",
            value: function _initialize() {
              var _this14 = this;

              if (typeof Worker !== "undefined" && !isWorkerDisabled && !getMainThreadWorkerMessageHandler()) {
                var workerSrc = _getWorkerSrc();

                try {
                  if (!(0, _util.isSameOrigin)(window.location.href, workerSrc)) {
                    workerSrc = createCDNWrapper(new URL(workerSrc, window.location).href);
                  }

                  var worker = new Worker(workerSrc);
                  var messageHandler = new _message_handler.MessageHandler("main", "worker", worker);

                  var terminateEarly = function terminateEarly() {
                    worker.removeEventListener("error", onWorkerError);
                    messageHandler.destroy();
                    worker.terminate();

                    if (_this14.destroyed) {
                      _this14._readyCapability.reject(new Error("Worker was destroyed"));
                    } else {
                      _this14._setupFakeWorker();
                    }
                  };

                  var onWorkerError = function onWorkerError() {
                    if (!_this14._webWorker) {
                      terminateEarly();
                    }
                  };

                  worker.addEventListener("error", onWorkerError);
                  messageHandler.on("test", function (data) {
                    worker.removeEventListener("error", onWorkerError);

                    if (_this14.destroyed) {
                      terminateEarly();
                      return;
                    }

                    if (data) {
                      _this14._messageHandler = messageHandler;
                      _this14._port = worker;
                      _this14._webWorker = worker;

                      if (!data.supportTransfers) {
                        _this14.postMessageTransfers = false;
                      }

                      _this14._readyCapability.resolve();

                      messageHandler.send("configure", {
                        verbosity: _this14.verbosity
                      });
                    } else {
                      _this14._setupFakeWorker();

                      messageHandler.destroy();
                      worker.terminate();
                    }
                  });
                  messageHandler.on("ready", function (data) {
                    worker.removeEventListener("error", onWorkerError);

                    if (_this14.destroyed) {
                      terminateEarly();
                      return;
                    }

                    try {
                      sendTest();
                    } catch (e) {
                      _this14._setupFakeWorker();
                    }
                  });

                  var sendTest = function sendTest() {
                    var testObj = new Uint8Array([_this14.postMessageTransfers ? 255 : 0]);

                    try {
                      messageHandler.send("test", testObj, [testObj.buffer]);
                    } catch (ex) {
                      (0, _util.warn)("Cannot use postMessage transfers.");
                      testObj[0] = 0;
                      messageHandler.send("test", testObj);
                    }
                  };

                  sendTest();
                  return;
                } catch (e) {
                  (0, _util.info)("The worker has been disabled.");
                }
              }

              this._setupFakeWorker();
            }
          }, {
            key: "_setupFakeWorker",
            value: function _setupFakeWorker() {
              var _this15 = this;

              if (!isWorkerDisabled) {
                (0, _util.warn)("Setting up fake worker.");
                isWorkerDisabled = true;
              }

              setupFakeWorkerGlobal().then(function (WorkerMessageHandler) {
                if (_this15.destroyed) {
                  _this15._readyCapability.reject(new Error("Worker was destroyed"));

                  return;
                }

                var port = new LoopbackPort();
                _this15._port = port;
                var id = "fake" + nextFakeWorkerId++;
                var workerHandler = new _message_handler.MessageHandler(id + "_worker", id, port);
                WorkerMessageHandler.setup(workerHandler, port);
                var messageHandler = new _message_handler.MessageHandler(id, id + "_worker", port);
                _this15._messageHandler = messageHandler;

                _this15._readyCapability.resolve();

                messageHandler.send("configure", {
                  verbosity: _this15.verbosity
                });
              })["catch"](function (reason) {
                _this15._readyCapability.reject(new Error("Setting up fake worker failed: \"".concat(reason.message, "\".")));
              });
            }
          }, {
            key: "destroy",
            value: function destroy() {
              this.destroyed = true;

              if (this._webWorker) {
                this._webWorker.terminate();

                this._webWorker = null;
              }

              pdfWorkerPorts["delete"](this._port);
              this._port = null;

              if (this._messageHandler) {
                this._messageHandler.destroy();

                this._messageHandler = null;
              }
            }
          }, {
            key: "promise",
            get: function get() {
              return this._readyCapability.promise;
            }
          }, {
            key: "port",
            get: function get() {
              return this._port;
            }
          }, {
            key: "messageHandler",
            get: function get() {
              return this._messageHandler;
            }
          }], [{
            key: "fromPort",
            value: function fromPort(params) {
              if (!params || !params.port) {
                throw new Error("PDFWorker.fromPort - invalid method signature.");
              }

              if (pdfWorkerPorts.has(params.port)) {
                return pdfWorkerPorts.get(params.port);
              }

              return new PDFWorker(params);
            }
          }, {
            key: "getWorkerSrc",
            value: function getWorkerSrc() {
              return _getWorkerSrc();
            }
          }]);

          return PDFWorker;
        }();

        return PDFWorker;
      }();

      exports.PDFWorker = PDFWorker;

      var WorkerTransport = /*#__PURE__*/function () {
        function WorkerTransport(messageHandler, loadingTask, networkStream, params) {
          _classCallCheck(this, WorkerTransport);

          this.messageHandler = messageHandler;
          this.loadingTask = loadingTask;
          this.commonObjs = new PDFObjects();
          this.fontLoader = new _font_loader.FontLoader({
            docId: loadingTask.docId,
            onUnsupportedFeature: this._onUnsupportedFeature.bind(this)
          });
          this._params = params;
          this.CMapReaderFactory = new params.CMapReaderFactory({
            baseUrl: params.cMapUrl,
            isCompressed: params.cMapPacked
          });
          this.destroyed = false;
          this.destroyCapability = null;
          this._passwordCapability = null;
          this._networkStream = networkStream;
          this._fullReader = null;
          this._lastProgress = null;
          this.pageCache = [];
          this.pagePromises = [];
          this.downloadInfoCapability = (0, _util.createPromiseCapability)();
          this.setupMessageHandler();
        }

        _createClass(WorkerTransport, [{
          key: "destroy",
          value: function destroy() {
            var _this16 = this;

            if (this.destroyCapability) {
              return this.destroyCapability.promise;
            }

            this.destroyed = true;
            this.destroyCapability = (0, _util.createPromiseCapability)();

            if (this._passwordCapability) {
              this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));
            }

            var waitOn = [];
            this.pageCache.forEach(function (page) {
              if (page) {
                waitOn.push(page._destroy());
              }
            });
            this.pageCache.length = 0;
            this.pagePromises.length = 0;
            var terminated = this.messageHandler.sendWithPromise("Terminate", null);
            waitOn.push(terminated);
            Promise.all(waitOn).then(function () {
              _this16.fontLoader.clear();

              if (_this16._networkStream) {
                _this16._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated."));
              }

              if (_this16.messageHandler) {
                _this16.messageHandler.destroy();

                _this16.messageHandler = null;
              }

              _this16.destroyCapability.resolve();
            }, this.destroyCapability.reject);
            return this.destroyCapability.promise;
          }
        }, {
          key: "setupMessageHandler",
          value: function setupMessageHandler() {
            var _this17 = this;

            var messageHandler = this.messageHandler,
                loadingTask = this.loadingTask;
            messageHandler.on("GetReader", function (data, sink) {
              (0, _util.assert)(_this17._networkStream);
              _this17._fullReader = _this17._networkStream.getFullReader();

              _this17._fullReader.onProgress = function (evt) {
                _this17._lastProgress = {
                  loaded: evt.loaded,
                  total: evt.total
                };
              };

              sink.onPull = function () {
                _this17._fullReader.read().then(function (_ref10) {
                  var value = _ref10.value,
                      done = _ref10.done;

                  if (done) {
                    sink.close();
                    return;
                  }

                  (0, _util.assert)((0, _util.isArrayBuffer)(value));
                  sink.enqueue(new Uint8Array(value), 1, [value]);
                })["catch"](function (reason) {
                  sink.error(reason);
                });
              };

              sink.onCancel = function (reason) {
                _this17._fullReader.cancel(reason);
              };
            });
            messageHandler.on("ReaderHeadersReady", function (data) {
              var headersCapability = (0, _util.createPromiseCapability)();
              var fullReader = _this17._fullReader;
              fullReader.headersReady.then(function () {
                if (!fullReader.isStreamingSupported || !fullReader.isRangeSupported) {
                  if (_this17._lastProgress && loadingTask.onProgress) {
                    loadingTask.onProgress(_this17._lastProgress);
                  }

                  fullReader.onProgress = function (evt) {
                    if (loadingTask.onProgress) {
                      loadingTask.onProgress({
                        loaded: evt.loaded,
                        total: evt.total
                      });
                    }
                  };
                }

                headersCapability.resolve({
                  isStreamingSupported: fullReader.isStreamingSupported,
                  isRangeSupported: fullReader.isRangeSupported,
                  contentLength: fullReader.contentLength
                });
              }, headersCapability.reject);
              return headersCapability.promise;
            });
            messageHandler.on("GetRangeReader", function (data, sink) {
              (0, _util.assert)(_this17._networkStream);

              var rangeReader = _this17._networkStream.getRangeReader(data.begin, data.end);

              if (!rangeReader) {
                sink.close();
                return;
              }

              sink.onPull = function () {
                rangeReader.read().then(function (_ref11) {
                  var value = _ref11.value,
                      done = _ref11.done;

                  if (done) {
                    sink.close();
                    return;
                  }

                  (0, _util.assert)((0, _util.isArrayBuffer)(value));
                  sink.enqueue(new Uint8Array(value), 1, [value]);
                })["catch"](function (reason) {
                  sink.error(reason);
                });
              };

              sink.onCancel = function (reason) {
                rangeReader.cancel(reason);
              };
            });
            messageHandler.on("GetDoc", function (_ref12) {
              var pdfInfo = _ref12.pdfInfo;
              _this17._numPages = pdfInfo.numPages;

              loadingTask._capability.resolve(new PDFDocumentProxy(pdfInfo, _this17));
            });
            messageHandler.on("DocException", function (ex) {
              var reason;

              switch (ex.name) {
                case "PasswordException":
                  reason = new _util.PasswordException(ex.message, ex.code);
                  break;

                case "InvalidPDFException":
                  reason = new _util.InvalidPDFException(ex.message);
                  break;

                case "MissingPDFException":
                  reason = new _util.MissingPDFException(ex.message);
                  break;

                case "UnexpectedResponseException":
                  reason = new _util.UnexpectedResponseException(ex.message, ex.status);
                  break;

                case "UnknownErrorException":
                  reason = new _util.UnknownErrorException(ex.message, ex.details);
                  break;
              }

              loadingTask._capability.reject(reason);
            });
            messageHandler.on("PasswordRequest", function (exception) {
              _this17._passwordCapability = (0, _util.createPromiseCapability)();

              if (loadingTask.onPassword) {
                var updatePassword = function updatePassword(password) {
                  _this17._passwordCapability.resolve({
                    password: password
                  });
                };

                try {
                  loadingTask.onPassword(updatePassword, exception.code);
                } catch (ex) {
                  _this17._passwordCapability.reject(ex);
                }
              } else {
                _this17._passwordCapability.reject(new _util.PasswordException(exception.message, exception.code));
              }

              return _this17._passwordCapability.promise;
            });
            messageHandler.on("DataLoaded", function (data) {
              if (loadingTask.onProgress) {
                loadingTask.onProgress({
                  loaded: data.length,
                  total: data.length
                });
              }

              _this17.downloadInfoCapability.resolve(data);
            });
            messageHandler.on("StartRenderPage", function (data) {
              if (_this17.destroyed) {
                return;
              }

              var page = _this17.pageCache[data.pageIndex];

              page._startRenderPage(data.transparency, data.intent);
            });
            messageHandler.on("commonobj", function (data) {
              if (_this17.destroyed) {
                return;
              }

              var _data = _slicedToArray(data, 3),
                  id = _data[0],
                  type = _data[1],
                  exportedData = _data[2];

              if (_this17.commonObjs.has(id)) {
                return;
              }

              switch (type) {
                case "Font":
                  var params = _this17._params;

                  if ("error" in exportedData) {
                    var exportedError = exportedData.error;
                    (0, _util.warn)("Error during font loading: ".concat(exportedError));

                    _this17.commonObjs.resolve(id, exportedError);

                    break;
                  }

                  var fontRegistry = null;

                  if (params.pdfBug && globalThis.FontInspector && globalThis.FontInspector.enabled) {
                    fontRegistry = {
                      registerFont: function registerFont(font, url) {
                        globalThis.FontInspector.fontAdded(font, url);
                      }
                    };
                  }

                  var font = new _font_loader.FontFaceObject(exportedData, {
                    isEvalSupported: params.isEvalSupported,
                    disableFontFace: params.disableFontFace,
                    ignoreErrors: params.ignoreErrors,
                    onUnsupportedFeature: _this17._onUnsupportedFeature.bind(_this17),
                    fontRegistry: fontRegistry
                  });

                  _this17.fontLoader.bind(font).then(function () {
                    _this17.commonObjs.resolve(id, font);
                  }, function (reason) {
                    messageHandler.sendWithPromise("FontFallback", {
                      id: id
                    })["finally"](function () {
                      _this17.commonObjs.resolve(id, font);
                    });
                  });

                  break;

                case "FontPath":
                case "FontType3Res":
                  _this17.commonObjs.resolve(id, exportedData);

                  break;

                default:
                  throw new Error("Got unknown common object type ".concat(type));
              }
            });
            messageHandler.on("obj", function (data) {
              if (_this17.destroyed) {
                return undefined;
              }

              var _data2 = _slicedToArray(data, 4),
                  id = _data2[0],
                  pageIndex = _data2[1],
                  type = _data2[2],
                  imageData = _data2[3];

              var pageProxy = _this17.pageCache[pageIndex];

              if (pageProxy.objs.has(id)) {
                return undefined;
              }

              switch (type) {
                case "JpegStream":
                  return new Promise(function (resolve, reject) {
                    var img = new Image();

                    img.onload = function () {
                      resolve(img);
                    };

                    img.onerror = function () {
                      reject(new Error("Error during JPEG image loading"));
                      (0, _display_utils.releaseImageResources)(img);
                    };

                    img.src = imageData;
                  }).then(function (img) {
                    pageProxy.objs.resolve(id, img);
                  });

                case "Image":
                  pageProxy.objs.resolve(id, imageData);
                  var MAX_IMAGE_SIZE_TO_STORE = 8000000;

                  if (imageData && "data" in imageData && imageData.data.length > MAX_IMAGE_SIZE_TO_STORE) {
                    pageProxy.cleanupAfterRender = true;
                  }

                  break;

                default:
                  throw new Error("Got unknown object type ".concat(type));
              }

              return undefined;
            });
            messageHandler.on("DocProgress", function (data) {
              if (_this17.destroyed) {
                return;
              }

              if (loadingTask.onProgress) {
                loadingTask.onProgress({
                  loaded: data.loaded,
                  total: data.total
                });
              }
            });
            messageHandler.on("UnsupportedFeature", this._onUnsupportedFeature.bind(this));
            messageHandler.on("JpegDecode", function (data) {
              if (_this17.destroyed) {
                return Promise.reject(new Error("Worker was destroyed"));
              }

              if (typeof document === "undefined") {
                return Promise.reject(new Error('"document" is not defined.'));
              }

              var _data3 = _slicedToArray(data, 2),
                  imageUrl = _data3[0],
                  components = _data3[1];

              if (components !== 3 && components !== 1) {
                return Promise.reject(new Error("Only 3 components or 1 component can be returned"));
              }

              return new Promise(function (resolve, reject) {
                var img = new Image();

                img.onload = function () {
                  var width = img.width,
                      height = img.height;
                  var size = width * height;
                  var rgbaLength = size * 4;
                  var buf = new Uint8ClampedArray(size * components);
                  var tmpCanvas = document.createElement("canvas");
                  tmpCanvas.width = width;
                  tmpCanvas.height = height;
                  var tmpCtx = tmpCanvas.getContext("2d");
                  tmpCtx.drawImage(img, 0, 0);
                  var data = tmpCtx.getImageData(0, 0, width, height).data;

                  if (components === 3) {
                    for (var i = 0, j = 0; i < rgbaLength; i += 4, j += 3) {
                      buf[j] = data[i];
                      buf[j + 1] = data[i + 1];
                      buf[j + 2] = data[i + 2];
                    }
                  } else if (components === 1) {
                    for (var _i5 = 0, _j = 0; _i5 < rgbaLength; _i5 += 4, _j++) {
                      buf[_j] = data[_i5];
                    }
                  }

                  resolve({
                    data: buf,
                    width: width,
                    height: height
                  });
                  (0, _display_utils.releaseImageResources)(img);
                  tmpCanvas.width = 0;
                  tmpCanvas.height = 0;
                  tmpCanvas = null;
                  tmpCtx = null;
                };

                img.onerror = function () {
                  reject(new Error("JpegDecode failed to load image"));
                  (0, _display_utils.releaseImageResources)(img);
                };

                img.src = imageUrl;
              });
            });
            messageHandler.on("FetchBuiltInCMap", function (data, sink) {
              if (_this17.destroyed) {
                sink.error(new Error("Worker was destroyed"));
                return;
              }

              var fetched = false;

              sink.onPull = function () {
                if (fetched) {
                  sink.close();
                  return;
                }

                fetched = true;

                _this17.CMapReaderFactory.fetch(data).then(function (builtInCMap) {
                  sink.enqueue(builtInCMap, 1, [builtInCMap.cMapData.buffer]);
                })["catch"](function (reason) {
                  sink.error(reason);
                });
              };
            });
          }
        }, {
          key: "_onUnsupportedFeature",
          value: function _onUnsupportedFeature(_ref13) {
            var featureId = _ref13.featureId;

            if (this.destroyed) {
              return;
            }

            if (this.loadingTask.onUnsupportedFeature) {
              this.loadingTask.onUnsupportedFeature(featureId);
            }
          }
        }, {
          key: "getData",
          value: function getData() {
            return this.messageHandler.sendWithPromise("GetData", null);
          }
        }, {
          key: "getPage",
          value: function getPage(pageNumber) {
            var _this18 = this;

            if (!Number.isInteger(pageNumber) || pageNumber <= 0 || pageNumber > this._numPages) {
              return Promise.reject(new Error("Invalid page request"));
            }

            var pageIndex = pageNumber - 1;

            if (pageIndex in this.pagePromises) {
              return this.pagePromises[pageIndex];
            }

            var promise = this.messageHandler.sendWithPromise("GetPage", {
              pageIndex: pageIndex
            }).then(function (pageInfo) {
              if (_this18.destroyed) {
                throw new Error("Transport destroyed");
              }

              var page = new PDFPageProxy(pageIndex, pageInfo, _this18, _this18._params.pdfBug);
              _this18.pageCache[pageIndex] = page;
              return page;
            });
            this.pagePromises[pageIndex] = promise;
            return promise;
          }
        }, {
          key: "getPageIndex",
          value: function getPageIndex(ref) {
            return this.messageHandler.sendWithPromise("GetPageIndex", {
              ref: ref
            })["catch"](function (reason) {
              return Promise.reject(new Error(reason));
            });
          }
        }, {
          key: "getAnnotations",
          value: function getAnnotations(pageIndex, intent) {
            return this.messageHandler.sendWithPromise("GetAnnotations", {
              pageIndex: pageIndex,
              intent: intent
            });
          }
        }, {
          key: "getDestinations",
          value: function getDestinations() {
            return this.messageHandler.sendWithPromise("GetDestinations", null);
          }
        }, {
          key: "getDestination",
          value: function getDestination(id) {
            if (typeof id !== "string") {
              return Promise.reject(new Error("Invalid destination request."));
            }

            return this.messageHandler.sendWithPromise("GetDestination", {
              id: id
            });
          }
        }, {
          key: "getPageLabels",
          value: function getPageLabels() {
            return this.messageHandler.sendWithPromise("GetPageLabels", null);
          }
        }, {
          key: "getPageLayout",
          value: function getPageLayout() {
            return this.messageHandler.sendWithPromise("GetPageLayout", null);
          }
        }, {
          key: "getPageMode",
          value: function getPageMode() {
            return this.messageHandler.sendWithPromise("GetPageMode", null);
          }
        }, {
          key: "getViewerPreferences",
          value: function getViewerPreferences() {
            return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
          }
        }, {
          key: "getOpenAction",
          value: function getOpenAction() {
            return this.messageHandler.sendWithPromise("GetOpenAction", null);
          }
        }, {
          key: "getAttachments",
          value: function getAttachments() {
            return this.messageHandler.sendWithPromise("GetAttachments", null);
          }
        }, {
          key: "getJavaScript",
          value: function getJavaScript() {
            return this.messageHandler.sendWithPromise("GetJavaScript", null);
          }
        }, {
          key: "getOutline",
          value: function getOutline() {
            return this.messageHandler.sendWithPromise("GetOutline", null);
          }
        }, {
          key: "getPermissions",
          value: function getPermissions() {
            return this.messageHandler.sendWithPromise("GetPermissions", null);
          }
        }, {
          key: "getMetadata",
          value: function getMetadata() {
            var _this19 = this;

            return this.messageHandler.sendWithPromise("GetMetadata", null).then(function (results) {
              return {
                info: results[0],
                metadata: results[1] ? new _metadata.Metadata(results[1]) : null,
                contentDispositionFilename: _this19._fullReader ? _this19._fullReader.filename : null
              };
            });
          }
        }, {
          key: "getStats",
          value: function getStats() {
            return this.messageHandler.sendWithPromise("GetStats", null);
          }
        }, {
          key: "startCleanup",
          value: function startCleanup() {
            var _this20 = this;

            return this.messageHandler.sendWithPromise("Cleanup", null).then(function () {
              for (var i = 0, ii = _this20.pageCache.length; i < ii; i++) {
                var page = _this20.pageCache[i];

                if (page) {
                  var cleanupSuccessful = page.cleanup();

                  if (!cleanupSuccessful) {
                    throw new Error("startCleanup: Page ".concat(i + 1, " is currently rendering."));
                  }
                }
              }

              _this20.commonObjs.clear();

              _this20.fontLoader.clear();
            });
          }
        }, {
          key: "loadingParams",
          get: function get() {
            var params = this._params;
            return (0, _util.shadow)(this, "loadingParams", {
              disableAutoFetch: params.disableAutoFetch,
              disableCreateObjectURL: params.disableCreateObjectURL,
              disableFontFace: params.disableFontFace,
              nativeImageDecoderSupport: params.nativeImageDecoderSupport
            });
          }
        }]);

        return WorkerTransport;
      }();

      var PDFObjects = /*#__PURE__*/function () {
        function PDFObjects() {
          _classCallCheck(this, PDFObjects);

          this._objs = Object.create(null);
        }

        _createClass(PDFObjects, [{
          key: "_ensureObj",
          value: function _ensureObj(objId) {
            if (this._objs[objId]) {
              return this._objs[objId];
            }

            return this._objs[objId] = {
              capability: (0, _util.createPromiseCapability)(),
              data: null,
              resolved: false
            };
          }
        }, {
          key: "get",
          value: function get(objId) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (callback) {
              this._ensureObj(objId).capability.promise.then(callback);

              return null;
            }

            var obj = this._objs[objId];

            if (!obj || !obj.resolved) {
              throw new Error("Requesting object that isn't resolved yet ".concat(objId, "."));
            }

            return obj.data;
          }
        }, {
          key: "has",
          value: function has(objId) {
            var obj = this._objs[objId];
            return obj ? obj.resolved : false;
          }
        }, {
          key: "resolve",
          value: function resolve(objId, data) {
            var obj = this._ensureObj(objId);

            obj.resolved = true;
            obj.data = data;
            obj.capability.resolve(data);
          }
        }, {
          key: "clear",
          value: function clear() {
            for (var objId in this._objs) {
              var data = this._objs[objId].data;

              if (typeof Image !== "undefined" && data instanceof Image) {
                (0, _display_utils.releaseImageResources)(data);
              }
            }

            this._objs = Object.create(null);
          }
        }]);

        return PDFObjects;
      }();

      var RenderTask = /*#__PURE__*/function () {
        function RenderTask(internalRenderTask) {
          _classCallCheck(this, RenderTask);

          this._internalRenderTask = internalRenderTask;
          this.onContinue = null;
        }

        _createClass(RenderTask, [{
          key: "cancel",
          value: function cancel() {
            this._internalRenderTask.cancel();
          }
        }, {
          key: "then",
          value: function then(onFulfilled, onRejected) {
            throw new Error("Removed API method: " + "RenderTask.then, use the `promise` getter instead.");
          }
        }, {
          key: "promise",
          get: function get() {
            return this._internalRenderTask.capability.promise;
          }
        }]);

        return RenderTask;
      }();

      var InternalRenderTask = function InternalRenderTaskClosure() {
        var canvasInRendering = new WeakSet();

        var InternalRenderTask = /*#__PURE__*/function () {
          function InternalRenderTask(_ref14) {
            var callback = _ref14.callback,
                params = _ref14.params,
                objs = _ref14.objs,
                commonObjs = _ref14.commonObjs,
                operatorList = _ref14.operatorList,
                pageIndex = _ref14.pageIndex,
                canvasFactory = _ref14.canvasFactory,
                webGLContext = _ref14.webGLContext,
                _ref14$useRequestAnim = _ref14.useRequestAnimationFrame,
                useRequestAnimationFrame = _ref14$useRequestAnim === void 0 ? false : _ref14$useRequestAnim,
                _ref14$pdfBug = _ref14.pdfBug,
                pdfBug = _ref14$pdfBug === void 0 ? false : _ref14$pdfBug;

            _classCallCheck(this, InternalRenderTask);

            this.callback = callback;
            this.params = params;
            this.objs = objs;
            this.commonObjs = commonObjs;
            this.operatorListIdx = null;
            this.operatorList = operatorList;
            this._pageIndex = pageIndex;
            this.canvasFactory = canvasFactory;
            this.webGLContext = webGLContext;
            this._pdfBug = pdfBug;
            this.running = false;
            this.graphicsReadyCallback = null;
            this.graphicsReady = false;
            this._useRequestAnimationFrame = useRequestAnimationFrame === true && typeof window !== "undefined";
            this.cancelled = false;
            this.capability = (0, _util.createPromiseCapability)();
            this.task = new RenderTask(this);
            this._continueBound = this._continue.bind(this);
            this._scheduleNextBound = this._scheduleNext.bind(this);
            this._nextBound = this._next.bind(this);
            this._canvas = params.canvasContext.canvas;
          }

          _createClass(InternalRenderTask, [{
            key: "initializeGraphics",
            value: function initializeGraphics() {
              var transparency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

              if (this.cancelled) {
                return;
              }

              if (this._canvas) {
                if (canvasInRendering.has(this._canvas)) {
                  throw new Error("Cannot use the same canvas during multiple render() operations. " + "Use different canvas or ensure previous operations were " + "cancelled or completed.");
                }

                canvasInRendering.add(this._canvas);
              }

              if (this._pdfBug && globalThis.StepperManager && globalThis.StepperManager.enabled) {
                this.stepper = globalThis.StepperManager.create(this._pageIndex);
                this.stepper.init(this.operatorList);
                this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
              }

              var _this$params = this.params,
                  canvasContext = _this$params.canvasContext,
                  viewport = _this$params.viewport,
                  transform = _this$params.transform,
                  imageLayer = _this$params.imageLayer,
                  background = _this$params.background;
              this.gfx = new _canvas.CanvasGraphics(canvasContext, this.commonObjs, this.objs, this.canvasFactory, this.webGLContext, imageLayer);
              this.gfx.beginDrawing({
                transform: transform,
                viewport: viewport,
                transparency: transparency,
                background: background
              });
              this.operatorListIdx = 0;
              this.graphicsReady = true;

              if (this.graphicsReadyCallback) {
                this.graphicsReadyCallback();
              }
            }
          }, {
            key: "cancel",
            value: function cancel() {
              var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
              this.running = false;
              this.cancelled = true;

              if (this.gfx) {
                this.gfx.endDrawing();
              }

              if (this._canvas) {
                canvasInRendering["delete"](this._canvas);
              }

              this.callback(error || new _display_utils.RenderingCancelledException("Rendering cancelled, page ".concat(this._pageIndex + 1), "canvas"));
            }
          }, {
            key: "operatorListChanged",
            value: function operatorListChanged() {
              if (!this.graphicsReady) {
                if (!this.graphicsReadyCallback) {
                  this.graphicsReadyCallback = this._continueBound;
                }

                return;
              }

              if (this.stepper) {
                this.stepper.updateOperatorList(this.operatorList);
              }

              if (this.running) {
                return;
              }

              this._continue();
            }
          }, {
            key: "_continue",
            value: function _continue() {
              this.running = true;

              if (this.cancelled) {
                return;
              }

              if (this.task.onContinue) {
                this.task.onContinue(this._scheduleNextBound);
              } else {
                this._scheduleNext();
              }
            }
          }, {
            key: "_scheduleNext",
            value: function _scheduleNext() {
              var _this21 = this;

              if (this._useRequestAnimationFrame) {
                window.requestAnimationFrame(function () {
                  _this21._nextBound()["catch"](_this21.cancel.bind(_this21));
                });
              } else {
                Promise.resolve().then(this._nextBound)["catch"](this.cancel.bind(this));
              }
            }
          }, {
            key: "_next",
            value: function () {
              var _next2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!this.cancelled) {
                          _context2.next = 2;
                          break;
                        }

                        return _context2.abrupt("return");

                      case 2:
                        this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);

                        if (this.operatorListIdx === this.operatorList.argsArray.length) {
                          this.running = false;

                          if (this.operatorList.lastChunk) {
                            this.gfx.endDrawing();

                            if (this._canvas) {
                              canvasInRendering["delete"](this._canvas);
                            }

                            this.callback();
                          }
                        }

                      case 4:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));

              function _next() {
                return _next2.apply(this, arguments);
              }

              return _next;
            }()
          }]);

          return InternalRenderTask;
        }();

        return InternalRenderTask;
      }();

      var version = '2.4.456';
      exports.version = version;
      var build = '228a591c';
      exports.build = build;
      /***/
    },
    /* 4 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.addLinkAttributes = addLinkAttributes;
      exports.getFilenameFromUrl = getFilenameFromUrl;
      exports.isFetchSupported = isFetchSupported;
      exports.isValidFetchUrl = isValidFetchUrl;
      exports.loadScript = loadScript;
      exports.deprecated = deprecated;
      exports.releaseImageResources = releaseImageResources;
      exports.PDFDateString = exports.StatTimer = exports.DOMSVGFactory = exports.DOMCMapReaderFactory = exports.DOMCanvasFactory = exports.DEFAULT_LINK_REL = exports.LinkTarget = exports.RenderingCancelledException = exports.PageViewport = void 0;

      var _util = __w_pdfjs_require__(1);

      var DEFAULT_LINK_REL = "noopener noreferrer nofollow";
      exports.DEFAULT_LINK_REL = DEFAULT_LINK_REL;
      var SVG_NS = "http://www.w3.org/2000/svg";

      var DOMCanvasFactory = /*#__PURE__*/function () {
        function DOMCanvasFactory() {
          _classCallCheck(this, DOMCanvasFactory);
        }

        _createClass(DOMCanvasFactory, [{
          key: "create",
          value: function create(width, height) {
            if (width <= 0 || height <= 0) {
              throw new Error("Invalid canvas size");
            }

            var canvas = document.createElement("canvas");
            var context = canvas.getContext("2d");
            canvas.width = width;
            canvas.height = height;
            return {
              canvas: canvas,
              context: context
            };
          }
        }, {
          key: "reset",
          value: function reset(canvasAndContext, width, height) {
            if (!canvasAndContext.canvas) {
              throw new Error("Canvas is not specified");
            }

            if (width <= 0 || height <= 0) {
              throw new Error("Invalid canvas size");
            }

            canvasAndContext.canvas.width = width;
            canvasAndContext.canvas.height = height;
          }
        }, {
          key: "destroy",
          value: function destroy(canvasAndContext) {
            if (!canvasAndContext.canvas) {
              throw new Error("Canvas is not specified");
            }

            canvasAndContext.canvas.width = 0;
            canvasAndContext.canvas.height = 0;
            canvasAndContext.canvas = null;
            canvasAndContext.context = null;
          }
        }]);

        return DOMCanvasFactory;
      }();

      exports.DOMCanvasFactory = DOMCanvasFactory;

      var DOMCMapReaderFactory = /*#__PURE__*/function () {
        function DOMCMapReaderFactory(_ref15) {
          var _ref15$baseUrl = _ref15.baseUrl,
              baseUrl = _ref15$baseUrl === void 0 ? null : _ref15$baseUrl,
              _ref15$isCompressed = _ref15.isCompressed,
              isCompressed = _ref15$isCompressed === void 0 ? false : _ref15$isCompressed;

          _classCallCheck(this, DOMCMapReaderFactory);

          this.baseUrl = baseUrl;
          this.isCompressed = isCompressed;
        }

        _createClass(DOMCMapReaderFactory, [{
          key: "fetch",
          value: function (_fetch) {
            function fetch(_x) {
              return _fetch.apply(this, arguments);
            }

            fetch.toString = function () {
              return _fetch.toString();
            };

            return fetch;
          }( /*#__PURE__*/function () {
            var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref16) {
              var _this22 = this;

              var name, url, compressionType;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      name = _ref16.name;

                      if (this.baseUrl) {
                        _context4.next = 3;
                        break;
                      }

                      throw new Error('The CMap "baseUrl" parameter must be specified, ensure that ' + 'the "cMapUrl" and "cMapPacked" API parameters are provided.');

                    case 3:
                      if (name) {
                        _context4.next = 5;
                        break;
                      }

                      throw new Error("CMap name must be specified.");

                    case 5:
                      url = this.baseUrl + name + (this.isCompressed ? ".bcmap" : "");
                      compressionType = this.isCompressed ? _util.CMapCompressionType.BINARY : _util.CMapCompressionType.NONE;

                      if (!(isFetchSupported() && isValidFetchUrl(url, document.baseURI))) {
                        _context4.next = 9;
                        break;
                      }

                      return _context4.abrupt("return", fetch(url).then( /*#__PURE__*/function () {
                        var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(response) {
                          var cMapData;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  if (response.ok) {
                                    _context3.next = 2;
                                    break;
                                  }

                                  throw new Error(response.statusText);

                                case 2:
                                  if (!_this22.isCompressed) {
                                    _context3.next = 10;
                                    break;
                                  }

                                  _context3.t0 = Uint8Array;
                                  _context3.next = 6;
                                  return response.arrayBuffer();

                                case 6:
                                  _context3.t1 = _context3.sent;
                                  cMapData = new _context3.t0(_context3.t1);
                                  _context3.next = 15;
                                  break;

                                case 10:
                                  _context3.t2 = (0, _util.stringToBytes);
                                  _context3.next = 13;
                                  return response.text();

                                case 13:
                                  _context3.t3 = _context3.sent;
                                  cMapData = (0, _context3.t2)(_context3.t3);

                                case 15:
                                  return _context3.abrupt("return", {
                                    cMapData: cMapData,
                                    compressionType: compressionType
                                  });

                                case 16:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3);
                        }));

                        return function (_x3) {
                          return _ref18.apply(this, arguments);
                        };
                      }())["catch"](function (reason) {
                        throw new Error("Unable to load ".concat(_this22.isCompressed ? "binary " : "") + "CMap at: ".concat(url));
                      }));

                    case 9:
                      return _context4.abrupt("return", new Promise(function (resolve, reject) {
                        var request = new XMLHttpRequest();
                        request.open("GET", url, true);

                        if (_this22.isCompressed) {
                          request.responseType = "arraybuffer";
                        }

                        request.onreadystatechange = function () {
                          if (request.readyState !== XMLHttpRequest.DONE) {
                            return;
                          }

                          if (request.status === 200 || request.status === 0) {
                            var cMapData;

                            if (_this22.isCompressed && request.response) {
                              cMapData = new Uint8Array(request.response);
                            } else if (!_this22.isCompressed && request.responseText) {
                              cMapData = (0, _util.stringToBytes)(request.responseText);
                            }

                            if (cMapData) {
                              resolve({
                                cMapData: cMapData,
                                compressionType: compressionType
                              });
                              return;
                            }
                          }

                          reject(new Error(request.statusText));
                        };

                        request.send(null);
                      })["catch"](function (reason) {
                        throw new Error("Unable to load ".concat(_this22.isCompressed ? "binary " : "") + "CMap at: ".concat(url));
                      }));

                    case 10:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            return function (_x2) {
              return _ref17.apply(this, arguments);
            };
          }())
        }]);

        return DOMCMapReaderFactory;
      }();

      exports.DOMCMapReaderFactory = DOMCMapReaderFactory;

      var DOMSVGFactory = /*#__PURE__*/function () {
        function DOMSVGFactory() {
          _classCallCheck(this, DOMSVGFactory);
        }

        _createClass(DOMSVGFactory, [{
          key: "create",
          value: function create(width, height) {
            (0, _util.assert)(width > 0 && height > 0, "Invalid SVG dimensions");
            var svg = document.createElementNS(SVG_NS, "svg:svg");
            svg.setAttribute("version", "1.1");
            svg.setAttribute("width", width + "px");
            svg.setAttribute("height", height + "px");
            svg.setAttribute("preserveAspectRatio", "none");
            svg.setAttribute("viewBox", "0 0 " + width + " " + height);
            return svg;
          }
        }, {
          key: "createElement",
          value: function createElement(type) {
            (0, _util.assert)(typeof type === "string", "Invalid SVG element type");
            return document.createElementNS(SVG_NS, type);
          }
        }]);

        return DOMSVGFactory;
      }();

      exports.DOMSVGFactory = DOMSVGFactory;

      var PageViewport = /*#__PURE__*/function () {
        function PageViewport(_ref19) {
          var viewBox = _ref19.viewBox,
              scale = _ref19.scale,
              rotation = _ref19.rotation,
              _ref19$offsetX = _ref19.offsetX,
              offsetX = _ref19$offsetX === void 0 ? 0 : _ref19$offsetX,
              _ref19$offsetY = _ref19.offsetY,
              offsetY = _ref19$offsetY === void 0 ? 0 : _ref19$offsetY,
              _ref19$dontFlip = _ref19.dontFlip,
              dontFlip = _ref19$dontFlip === void 0 ? false : _ref19$dontFlip;

          _classCallCheck(this, PageViewport);

          this.viewBox = viewBox;
          this.scale = scale;
          this.rotation = rotation;
          this.offsetX = offsetX;
          this.offsetY = offsetY;
          var centerX = (viewBox[2] + viewBox[0]) / 2;
          var centerY = (viewBox[3] + viewBox[1]) / 2;
          var rotateA, rotateB, rotateC, rotateD;
          rotation = rotation % 360;
          rotation = rotation < 0 ? rotation + 360 : rotation;

          switch (rotation) {
            case 180:
              rotateA = -1;
              rotateB = 0;
              rotateC = 0;
              rotateD = 1;
              break;

            case 90:
              rotateA = 0;
              rotateB = 1;
              rotateC = 1;
              rotateD = 0;
              break;

            case 270:
              rotateA = 0;
              rotateB = -1;
              rotateC = -1;
              rotateD = 0;
              break;

            default:
              rotateA = 1;
              rotateB = 0;
              rotateC = 0;
              rotateD = -1;
              break;
          }

          if (dontFlip) {
            rotateC = -rotateC;
            rotateD = -rotateD;
          }

          var offsetCanvasX, offsetCanvasY;
          var width, height;

          if (rotateA === 0) {
            offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
            offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
            width = Math.abs(viewBox[3] - viewBox[1]) * scale;
            height = Math.abs(viewBox[2] - viewBox[0]) * scale;
          } else {
            offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
            offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
            width = Math.abs(viewBox[2] - viewBox[0]) * scale;
            height = Math.abs(viewBox[3] - viewBox[1]) * scale;
          }

          this.transform = [rotateA * scale, rotateB * scale, rotateC * scale, rotateD * scale, offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY, offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY];
          this.width = width;
          this.height = height;
        }

        _createClass(PageViewport, [{
          key: "clone",
          value: function clone() {
            var _ref20 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref20$scale = _ref20.scale,
                scale = _ref20$scale === void 0 ? this.scale : _ref20$scale,
                _ref20$rotation = _ref20.rotation,
                rotation = _ref20$rotation === void 0 ? this.rotation : _ref20$rotation,
                _ref20$offsetX = _ref20.offsetX,
                offsetX = _ref20$offsetX === void 0 ? this.offsetX : _ref20$offsetX,
                _ref20$offsetY = _ref20.offsetY,
                offsetY = _ref20$offsetY === void 0 ? this.offsetY : _ref20$offsetY,
                _ref20$dontFlip = _ref20.dontFlip,
                dontFlip = _ref20$dontFlip === void 0 ? false : _ref20$dontFlip;

            return new PageViewport({
              viewBox: this.viewBox.slice(),
              scale: scale,
              rotation: rotation,
              offsetX: offsetX,
              offsetY: offsetY,
              dontFlip: dontFlip
            });
          }
        }, {
          key: "convertToViewportPoint",
          value: function convertToViewportPoint(x, y) {
            return _util.Util.applyTransform([x, y], this.transform);
          }
        }, {
          key: "convertToViewportRectangle",
          value: function convertToViewportRectangle(rect) {
            var topLeft = _util.Util.applyTransform([rect[0], rect[1]], this.transform);

            var bottomRight = _util.Util.applyTransform([rect[2], rect[3]], this.transform);

            return [topLeft[0], topLeft[1], bottomRight[0], bottomRight[1]];
          }
        }, {
          key: "convertToPdfPoint",
          value: function convertToPdfPoint(x, y) {
            return _util.Util.applyInverseTransform([x, y], this.transform);
          }
        }]);

        return PageViewport;
      }();

      exports.PageViewport = PageViewport;

      var RenderingCancelledException = /*#__PURE__*/function (_util$BaseException) {
        _inherits(RenderingCancelledException, _util$BaseException);

        var _super8 = _createSuper(RenderingCancelledException);

        function RenderingCancelledException(msg, type) {
          var _this23;

          _classCallCheck(this, RenderingCancelledException);

          _this23 = _super8.call(this, msg);
          _this23.type = type;
          return _this23;
        }

        return RenderingCancelledException;
      }(_util.BaseException);

      exports.RenderingCancelledException = RenderingCancelledException;
      var LinkTarget = {
        NONE: 0,
        SELF: 1,
        BLANK: 2,
        PARENT: 3,
        TOP: 4
      };
      exports.LinkTarget = LinkTarget;

      function addLinkAttributes(link) {
        var _ref21 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            url = _ref21.url,
            target = _ref21.target,
            rel = _ref21.rel,
            _ref21$enabled = _ref21.enabled,
            enabled = _ref21$enabled === void 0 ? true : _ref21$enabled;

        (0, _util.assert)(url && typeof url === "string", 'addLinkAttributes: A valid "url" parameter must provided.');
        var urlNullRemoved = (0, _util.removeNullCharacters)(url);

        if (enabled) {
          link.href = link.title = urlNullRemoved;
        } else {
          link.href = "";
          link.title = "Disabled: ".concat(urlNullRemoved);

          link.onclick = function () {
            return false;
          };
        }

        var targetStr = "";

        switch (target) {
          case LinkTarget.NONE:
            break;

          case LinkTarget.SELF:
            targetStr = "_self";
            break;

          case LinkTarget.BLANK:
            targetStr = "_blank";
            break;

          case LinkTarget.PARENT:
            targetStr = "_parent";
            break;

          case LinkTarget.TOP:
            targetStr = "_top";
            break;
        }

        link.target = targetStr;
        link.rel = typeof rel === "string" ? rel : DEFAULT_LINK_REL;
      }

      function getFilenameFromUrl(url) {
        var anchor = url.indexOf("#");
        var query = url.indexOf("?");
        var end = Math.min(anchor > 0 ? anchor : url.length, query > 0 ? query : url.length);
        return url.substring(url.lastIndexOf("/", end) + 1, end);
      }

      var StatTimer = /*#__PURE__*/function () {
        function StatTimer() {
          _classCallCheck(this, StatTimer);

          this.started = Object.create(null);
          this.times = [];
        }

        _createClass(StatTimer, [{
          key: "time",
          value: function time(name) {
            if (name in this.started) {
              (0, _util.warn)("Timer is already running for ".concat(name));
            }

            this.started[name] = Date.now();
          }
        }, {
          key: "timeEnd",
          value: function timeEnd(name) {
            if (!(name in this.started)) {
              (0, _util.warn)("Timer has not been started for ".concat(name));
            }

            this.times.push({
              name: name,
              start: this.started[name],
              end: Date.now()
            });
            delete this.started[name];
          }
        }, {
          key: "toString",
          value: function toString() {
            var outBuf = [];
            var longest = 0;

            var _iterator5 = _createForOfIteratorHelper(this.times),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var time = _step5.value;
                var name = time.name;

                if (name.length > longest) {
                  longest = name.length;
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            var _iterator6 = _createForOfIteratorHelper(this.times),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _time = _step6.value;
                var duration = _time.end - _time.start;
                outBuf.push("".concat(_time.name.padEnd(longest), " ").concat(duration, "ms\n"));
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            return outBuf.join("");
          }
        }]);

        return StatTimer;
      }();

      exports.StatTimer = StatTimer;

      function isFetchSupported() {
        return typeof fetch !== "undefined" && typeof Response !== "undefined" && "body" in Response.prototype && typeof ReadableStream !== "undefined";
      }

      function isValidFetchUrl(url, baseUrl) {
        try {
          var _ref22 = baseUrl ? new URL(url, baseUrl) : new URL(url),
              protocol = _ref22.protocol;

          return protocol === "http:" || protocol === "https:";
        } catch (ex) {
          return false;
        }
      }

      function loadScript(src) {
        return new Promise(function (resolve, reject) {
          var script = document.createElement("script");
          script.src = src;
          script.onload = resolve;

          script.onerror = function () {
            reject(new Error("Cannot load script at: ".concat(script.src)));
          };

          (document.head || document.documentElement).appendChild(script);
        });
      }

      function deprecated(details) {
        console.log("Deprecated API usage: " + details);
      }

      function releaseImageResources(img) {
        (0, _util.assert)(img instanceof Image, "Invalid `img` parameter.");
        var url = img.src;

        if (typeof url === "string" && url.startsWith("blob:") && URL.revokeObjectURL) {
          URL.revokeObjectURL(url);
        }

        img.removeAttribute("src");
      }

      var pdfDateStringRegex;

      var PDFDateString = /*#__PURE__*/function () {
        function PDFDateString() {
          _classCallCheck(this, PDFDateString);
        }

        _createClass(PDFDateString, null, [{
          key: "toDateObject",
          value: function toDateObject(input) {
            if (!input || !(0, _util.isString)(input)) {
              return null;
            }

            if (!pdfDateStringRegex) {
              pdfDateStringRegex = new RegExp("^D:" + "(\\d{4})" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "([Z|+|-])?" + "(\\d{2})?" + "'?" + "(\\d{2})?" + "'?");
            }

            var matches = pdfDateStringRegex.exec(input);

            if (!matches) {
              return null;
            }

            var year = parseInt(matches[1], 10);
            var month = parseInt(matches[2], 10);
            month = month >= 1 && month <= 12 ? month - 1 : 0;
            var day = parseInt(matches[3], 10);
            day = day >= 1 && day <= 31 ? day : 1;
            var hour = parseInt(matches[4], 10);
            hour = hour >= 0 && hour <= 23 ? hour : 0;
            var minute = parseInt(matches[5], 10);
            minute = minute >= 0 && minute <= 59 ? minute : 0;
            var second = parseInt(matches[6], 10);
            second = second >= 0 && second <= 59 ? second : 0;
            var universalTimeRelation = matches[7] || "Z";
            var offsetHour = parseInt(matches[8], 10);
            offsetHour = offsetHour >= 0 && offsetHour <= 23 ? offsetHour : 0;
            var offsetMinute = parseInt(matches[9], 10) || 0;
            offsetMinute = offsetMinute >= 0 && offsetMinute <= 59 ? offsetMinute : 0;

            if (universalTimeRelation === "-") {
              hour += offsetHour;
              minute += offsetMinute;
            } else if (universalTimeRelation === "+") {
              hour -= offsetHour;
              minute -= offsetMinute;
            }

            return new Date(Date.UTC(year, month, day, hour, minute, second));
          }
        }]);

        return PDFDateString;
      }();

      exports.PDFDateString = PDFDateString;
      /***/
    },
    /* 5 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.FontLoader = exports.FontFaceObject = void 0;

      var _util = __w_pdfjs_require__(1);

      var BaseFontLoader = /*#__PURE__*/function () {
        function BaseFontLoader(_ref23) {
          var docId = _ref23.docId,
              onUnsupportedFeature = _ref23.onUnsupportedFeature;

          _classCallCheck(this, BaseFontLoader);

          if (this.constructor === BaseFontLoader) {
            (0, _util.unreachable)("Cannot initialize BaseFontLoader.");
          }

          this.docId = docId;
          this._onUnsupportedFeature = onUnsupportedFeature;
          this.nativeFontFaces = [];
          this.styleElement = null;
        }

        _createClass(BaseFontLoader, [{
          key: "addNativeFontFace",
          value: function addNativeFontFace(nativeFontFace) {
            this.nativeFontFaces.push(nativeFontFace);
            document.fonts.add(nativeFontFace);
          }
        }, {
          key: "insertRule",
          value: function insertRule(rule) {
            var styleElement = this.styleElement;

            if (!styleElement) {
              styleElement = this.styleElement = document.createElement("style");
              styleElement.id = "PDFJS_FONT_STYLE_TAG_".concat(this.docId);
              document.documentElement.getElementsByTagName("head")[0].appendChild(styleElement);
            }

            var styleSheet = styleElement.sheet;
            styleSheet.insertRule(rule, styleSheet.cssRules.length);
          }
        }, {
          key: "clear",
          value: function clear() {
            this.nativeFontFaces.forEach(function (nativeFontFace) {
              document.fonts["delete"](nativeFontFace);
            });
            this.nativeFontFaces.length = 0;

            if (this.styleElement) {
              this.styleElement.remove();
              this.styleElement = null;
            }
          }
        }, {
          key: "bind",
          value: function () {
            var _bind = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(font) {
              var _this24 = this;

              var nativeFontFace, rule;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!(font.attached || font.missingFile)) {
                        _context5.next = 2;
                        break;
                      }

                      return _context5.abrupt("return");

                    case 2:
                      font.attached = true;

                      if (!this.isFontLoadingAPISupported) {
                        _context5.next = 19;
                        break;
                      }

                      nativeFontFace = font.createNativeFontFace();

                      if (!nativeFontFace) {
                        _context5.next = 18;
                        break;
                      }

                      this.addNativeFontFace(nativeFontFace);
                      _context5.prev = 7;
                      _context5.next = 10;
                      return nativeFontFace.loaded;

                    case 10:
                      _context5.next = 18;
                      break;

                    case 12:
                      _context5.prev = 12;
                      _context5.t0 = _context5["catch"](7);

                      this._onUnsupportedFeature({
                        featureId: _util.UNSUPPORTED_FEATURES.font
                      });

                      (0, _util.warn)("Failed to load font '".concat(nativeFontFace.family, "': '").concat(_context5.t0, "'."));
                      font.disableFontFace = true;
                      throw _context5.t0;

                    case 18:
                      return _context5.abrupt("return");

                    case 19:
                      rule = font.createFontFaceRule();

                      if (!rule) {
                        _context5.next = 26;
                        break;
                      }

                      this.insertRule(rule);

                      if (!this.isSyncFontLoadingSupported) {
                        _context5.next = 24;
                        break;
                      }

                      return _context5.abrupt("return");

                    case 24:
                      _context5.next = 26;
                      return new Promise(function (resolve) {
                        var request = _this24._queueLoadingCallback(resolve);

                        _this24._prepareFontLoadEvent([rule], [font], request);
                      });

                    case 26:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[7, 12]]);
            }));

            function bind(_x4) {
              return _bind.apply(this, arguments);
            }

            return bind;
          }()
        }, {
          key: "_queueLoadingCallback",
          value: function _queueLoadingCallback(callback) {
            (0, _util.unreachable)("Abstract method `_queueLoadingCallback`.");
          }
        }, {
          key: "_prepareFontLoadEvent",
          value: function _prepareFontLoadEvent(rules, fontsToLoad, request) {
            (0, _util.unreachable)("Abstract method `_prepareFontLoadEvent`.");
          }
        }, {
          key: "isFontLoadingAPISupported",
          get: function get() {
            var supported = typeof document !== "undefined" && !!document.fonts;
            return (0, _util.shadow)(this, "isFontLoadingAPISupported", supported);
          }
        }, {
          key: "isSyncFontLoadingSupported",
          get: function get() {
            (0, _util.unreachable)("Abstract method `isSyncFontLoadingSupported`.");
          }
        }, {
          key: "_loadTestFont",
          get: function get() {
            (0, _util.unreachable)("Abstract method `_loadTestFont`.");
          }
        }]);

        return BaseFontLoader;
      }();

      var FontLoader;
      exports.FontLoader = FontLoader;
      {
        exports.FontLoader = FontLoader = /*#__PURE__*/function (_BaseFontLoader) {
          _inherits(GenericFontLoader, _BaseFontLoader);

          var _super9 = _createSuper(GenericFontLoader);

          function GenericFontLoader(docId) {
            var _this25;

            _classCallCheck(this, GenericFontLoader);

            _this25 = _super9.call(this, docId);
            _this25.loadingContext = {
              requests: [],
              nextRequestId: 0
            };
            _this25.loadTestFontId = 0;
            return _this25;
          }

          _createClass(GenericFontLoader, [{
            key: "_queueLoadingCallback",
            value: function _queueLoadingCallback(callback) {
              function completeRequest() {
                (0, _util.assert)(!request.done, "completeRequest() cannot be called twice.");
                request.done = true;

                while (context.requests.length > 0 && context.requests[0].done) {
                  var otherRequest = context.requests.shift();
                  setTimeout(otherRequest.callback, 0);
                }
              }

              var context = this.loadingContext;
              var request = {
                id: "pdfjs-font-loading-".concat(context.nextRequestId++),
                done: false,
                complete: completeRequest,
                callback: callback
              };
              context.requests.push(request);
              return request;
            }
          }, {
            key: "_prepareFontLoadEvent",
            value: function _prepareFontLoadEvent(rules, fonts, request) {
              function int32(data, offset) {
                return data.charCodeAt(offset) << 24 | data.charCodeAt(offset + 1) << 16 | data.charCodeAt(offset + 2) << 8 | data.charCodeAt(offset + 3) & 0xff;
              }

              function spliceString(s, offset, remove, insert) {
                var chunk1 = s.substring(0, offset);
                var chunk2 = s.substring(offset + remove);
                return chunk1 + insert + chunk2;
              }

              var i, ii;
              var canvas = document.createElement("canvas");
              canvas.width = 1;
              canvas.height = 1;
              var ctx = canvas.getContext("2d");
              var called = 0;

              function isFontReady(name, callback) {
                called++;

                if (called > 30) {
                  (0, _util.warn)("Load test font never loaded.");
                  callback();
                  return;
                }

                ctx.font = "30px " + name;
                ctx.fillText(".", 0, 20);
                var imageData = ctx.getImageData(0, 0, 1, 1);

                if (imageData.data[3] > 0) {
                  callback();
                  return;
                }

                setTimeout(isFontReady.bind(null, name, callback));
              }

              var loadTestFontId = "lt".concat(Date.now()).concat(this.loadTestFontId++);
              var data = this._loadTestFont;
              var COMMENT_OFFSET = 976;
              data = spliceString(data, COMMENT_OFFSET, loadTestFontId.length, loadTestFontId);
              var CFF_CHECKSUM_OFFSET = 16;
              var XXXX_VALUE = 0x58585858;
              var checksum = int32(data, CFF_CHECKSUM_OFFSET);

              for (i = 0, ii = loadTestFontId.length - 3; i < ii; i += 4) {
                checksum = checksum - XXXX_VALUE + int32(loadTestFontId, i) | 0;
              }

              if (i < loadTestFontId.length) {
                checksum = checksum - XXXX_VALUE + int32(loadTestFontId + "XXX", i) | 0;
              }

              data = spliceString(data, CFF_CHECKSUM_OFFSET, 4, (0, _util.string32)(checksum));
              var url = "url(data:font/opentype;base64,".concat(btoa(data), ");");
              var rule = "@font-face {font-family:\"".concat(loadTestFontId, "\";src:").concat(url, "}");
              this.insertRule(rule);
              var names = [];

              for (i = 0, ii = fonts.length; i < ii; i++) {
                names.push(fonts[i].loadedName);
              }

              names.push(loadTestFontId);
              var div = document.createElement("div");
              div.style.visibility = "hidden";
              div.style.width = div.style.height = "10px";
              div.style.position = "absolute";
              div.style.top = div.style.left = "0px";

              for (i = 0, ii = names.length; i < ii; ++i) {
                var span = document.createElement("span");
                span.textContent = "Hi";
                span.style.fontFamily = names[i];
                div.appendChild(span);
              }

              document.body.appendChild(div);
              isFontReady(loadTestFontId, function () {
                document.body.removeChild(div);
                request.complete();
              });
            }
          }, {
            key: "isSyncFontLoadingSupported",
            get: function get() {
              var supported = false;

              if (typeof navigator === "undefined") {
                supported = true;
              } else {
                var m = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);

                if (m && m[1] >= 14) {
                  supported = true;
                }
              }

              return (0, _util.shadow)(this, "isSyncFontLoadingSupported", supported);
            }
          }, {
            key: "_loadTestFont",
            get: function get() {
              var getLoadTestFont = function getLoadTestFont() {
                return atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQA" + "FQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAA" + "ALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgA" + "AAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1" + "AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD" + "6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACM" + "AooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4D" + "IP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAA" + "AAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUA" + "AQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgAB" + "AAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABY" + "AAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAA" + "AC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAA" + "AAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQAC" + "AQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3" + "Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTj" + "FQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
              };

              return (0, _util.shadow)(this, "_loadTestFont", getLoadTestFont());
            }
          }]);

          return GenericFontLoader;
        }(BaseFontLoader);
      }

      var FontFaceObject = /*#__PURE__*/function () {
        function FontFaceObject(translatedData, _ref24) {
          var _ref24$isEvalSupporte = _ref24.isEvalSupported,
              isEvalSupported = _ref24$isEvalSupporte === void 0 ? true : _ref24$isEvalSupporte,
              _ref24$disableFontFac = _ref24.disableFontFace,
              disableFontFace = _ref24$disableFontFac === void 0 ? false : _ref24$disableFontFac,
              _ref24$ignoreErrors = _ref24.ignoreErrors,
              ignoreErrors = _ref24$ignoreErrors === void 0 ? false : _ref24$ignoreErrors,
              _ref24$onUnsupportedF = _ref24.onUnsupportedFeature,
              onUnsupportedFeature = _ref24$onUnsupportedF === void 0 ? null : _ref24$onUnsupportedF,
              _ref24$fontRegistry = _ref24.fontRegistry,
              fontRegistry = _ref24$fontRegistry === void 0 ? null : _ref24$fontRegistry;

          _classCallCheck(this, FontFaceObject);

          this.compiledGlyphs = Object.create(null);

          for (var i in translatedData) {
            this[i] = translatedData[i];
          }

          this.isEvalSupported = isEvalSupported !== false;
          this.disableFontFace = disableFontFace === true;
          this.ignoreErrors = ignoreErrors === true;
          this._onUnsupportedFeature = onUnsupportedFeature;
          this.fontRegistry = fontRegistry;
        }

        _createClass(FontFaceObject, [{
          key: "createNativeFontFace",
          value: function createNativeFontFace() {
            if (!this.data || this.disableFontFace) {
              return null;
            }

            var nativeFontFace = new FontFace(this.loadedName, this.data, {});

            if (this.fontRegistry) {
              this.fontRegistry.registerFont(this);
            }

            return nativeFontFace;
          }
        }, {
          key: "createFontFaceRule",
          value: function createFontFaceRule() {
            if (!this.data || this.disableFontFace) {
              return null;
            }

            var data = (0, _util.bytesToString)(new Uint8Array(this.data));
            var url = "url(data:".concat(this.mimetype, ";base64,").concat(btoa(data), ");");
            var rule = "@font-face {font-family:\"".concat(this.loadedName, "\";src:").concat(url, "}");

            if (this.fontRegistry) {
              this.fontRegistry.registerFont(this, url);
            }

            return rule;
          }
        }, {
          key: "getPathGenerator",
          value: function getPathGenerator(objs, character) {
            if (this.compiledGlyphs[character] !== undefined) {
              return this.compiledGlyphs[character];
            }

            var cmds, current;

            try {
              cmds = objs.get(this.loadedName + "_path_" + character);
            } catch (ex) {
              if (!this.ignoreErrors) {
                throw ex;
              }

              if (this._onUnsupportedFeature) {
                this._onUnsupportedFeature({
                  featureId: _util.UNSUPPORTED_FEATURES.font
                });
              }

              (0, _util.warn)("getPathGenerator - ignoring character: \"".concat(ex, "\"."));
              return this.compiledGlyphs[character] = function (c, size) {};
            }

            if (this.isEvalSupported && _util.IsEvalSupportedCached.value) {
              var args,
                  js = "";

              for (var i = 0, ii = cmds.length; i < ii; i++) {
                current = cmds[i];

                if (current.args !== undefined) {
                  args = current.args.join(",");
                } else {
                  args = "";
                }

                js += "c." + current.cmd + "(" + args + ");\n";
              }

              return this.compiledGlyphs[character] = new Function("c", "size", js);
            }

            return this.compiledGlyphs[character] = function (c, size) {
              for (var _i6 = 0, _ii = cmds.length; _i6 < _ii; _i6++) {
                current = cmds[_i6];

                if (current.cmd === "scale") {
                  current.args = [size, -size];
                }

                c[current.cmd].apply(c, current.args);
              }
            };
          }
        }]);

        return FontFaceObject;
      }();

      exports.FontFaceObject = FontFaceObject;
      /***/
    },
    /* 6 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      var compatibilityParams = Object.create(null);
      {
        var _w_pdfjs_require__2 = __w_pdfjs_require__(7),
            isNodeJS = _w_pdfjs_require__2.isNodeJS;

        var userAgent = typeof navigator !== "undefined" && navigator.userAgent || "";
        var isIE = /Trident/.test(userAgent);
        var isIOSChrome = /CriOS/.test(userAgent);

        (function checkOnBlobSupport() {
          if (isIE || isIOSChrome) {
            compatibilityParams.disableCreateObjectURL = true;
          }
        })();

        (function checkFontFaceAndImage() {
          if (isNodeJS) {
            compatibilityParams.disableFontFace = true;
            compatibilityParams.nativeImageDecoderSupport = "none";
          }
        })();
      }
      exports.apiCompatibilityParams = Object.freeze(compatibilityParams);
      /***/
    },
    /* 7 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isNodeJS = void 0;
      var isNodeJS = (typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process + "" === "[object process]" && !process.versions["nw"] && !process.versions["electron"];
      exports.isNodeJS = isNodeJS;
      /***/
    },
    /* 8 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CanvasGraphics = void 0;

      var _util = __w_pdfjs_require__(1);

      var _pattern_helper = __w_pdfjs_require__(9);

      var MIN_FONT_SIZE = 16;
      var MAX_FONT_SIZE = 100;
      var MAX_GROUP_SIZE = 4096;
      var MIN_WIDTH_FACTOR = 0.65;
      var COMPILE_TYPE3_GLYPHS = true;
      var MAX_SIZE_TO_COMPILE = 1000;
      var FULL_CHUNK_HEIGHT = 16;

      function addContextCurrentTransform(ctx) {
        if (!ctx.mozCurrentTransform) {
          ctx._originalSave = ctx.save;
          ctx._originalRestore = ctx.restore;
          ctx._originalRotate = ctx.rotate;
          ctx._originalScale = ctx.scale;
          ctx._originalTranslate = ctx.translate;
          ctx._originalTransform = ctx.transform;
          ctx._originalSetTransform = ctx.setTransform;
          ctx._transformMatrix = ctx._transformMatrix || [1, 0, 0, 1, 0, 0];
          ctx._transformStack = [];
          Object.defineProperty(ctx, "mozCurrentTransform", {
            get: function getCurrentTransform() {
              return this._transformMatrix;
            }
          });
          Object.defineProperty(ctx, "mozCurrentTransformInverse", {
            get: function getCurrentTransformInverse() {
              var m = this._transformMatrix;
              var a = m[0],
                  b = m[1],
                  c = m[2],
                  d = m[3],
                  e = m[4],
                  f = m[5];
              var ad_bc = a * d - b * c;
              var bc_ad = b * c - a * d;
              return [d / ad_bc, b / bc_ad, c / bc_ad, a / ad_bc, (d * e - c * f) / bc_ad, (b * e - a * f) / ad_bc];
            }
          });

          ctx.save = function ctxSave() {
            var old = this._transformMatrix;

            this._transformStack.push(old);

            this._transformMatrix = old.slice(0, 6);

            this._originalSave();
          };

          ctx.restore = function ctxRestore() {
            var prev = this._transformStack.pop();

            if (prev) {
              this._transformMatrix = prev;

              this._originalRestore();
            }
          };

          ctx.translate = function ctxTranslate(x, y) {
            var m = this._transformMatrix;
            m[4] = m[0] * x + m[2] * y + m[4];
            m[5] = m[1] * x + m[3] * y + m[5];

            this._originalTranslate(x, y);
          };

          ctx.scale = function ctxScale(x, y) {
            var m = this._transformMatrix;
            m[0] = m[0] * x;
            m[1] = m[1] * x;
            m[2] = m[2] * y;
            m[3] = m[3] * y;

            this._originalScale(x, y);
          };

          ctx.transform = function ctxTransform(a, b, c, d, e, f) {
            var m = this._transformMatrix;
            this._transformMatrix = [m[0] * a + m[2] * b, m[1] * a + m[3] * b, m[0] * c + m[2] * d, m[1] * c + m[3] * d, m[0] * e + m[2] * f + m[4], m[1] * e + m[3] * f + m[5]];

            ctx._originalTransform(a, b, c, d, e, f);
          };

          ctx.setTransform = function ctxSetTransform(a, b, c, d, e, f) {
            this._transformMatrix = [a, b, c, d, e, f];

            ctx._originalSetTransform(a, b, c, d, e, f);
          };

          ctx.rotate = function ctxRotate(angle) {
            var cosValue = Math.cos(angle);
            var sinValue = Math.sin(angle);
            var m = this._transformMatrix;
            this._transformMatrix = [m[0] * cosValue + m[2] * sinValue, m[1] * cosValue + m[3] * sinValue, m[0] * -sinValue + m[2] * cosValue, m[1] * -sinValue + m[3] * cosValue, m[4], m[5]];

            this._originalRotate(angle);
          };
        }
      }

      var CachedCanvases = function CachedCanvasesClosure() {
        function CachedCanvases(canvasFactory) {
          this.canvasFactory = canvasFactory;
          this.cache = Object.create(null);
        }

        CachedCanvases.prototype = {
          getCanvas: function CachedCanvases_getCanvas(id, width, height, trackTransform) {
            var canvasEntry;

            if (this.cache[id] !== undefined) {
              canvasEntry = this.cache[id];
              this.canvasFactory.reset(canvasEntry, width, height);
              canvasEntry.context.setTransform(1, 0, 0, 1, 0, 0);
            } else {
              canvasEntry = this.canvasFactory.create(width, height);
              this.cache[id] = canvasEntry;
            }

            if (trackTransform) {
              addContextCurrentTransform(canvasEntry.context);
            }

            return canvasEntry;
          },
          clear: function clear() {
            for (var id in this.cache) {
              var canvasEntry = this.cache[id];
              this.canvasFactory.destroy(canvasEntry);
              delete this.cache[id];
            }
          }
        };
        return CachedCanvases;
      }();

      function compileType3Glyph(imgData) {
        var POINT_TO_PROCESS_LIMIT = 1000;
        var width = imgData.width,
            height = imgData.height;
        var i,
            j,
            j0,
            width1 = width + 1;
        var points = new Uint8Array(width1 * (height + 1));
        var POINT_TYPES = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]);
        var lineSize = width + 7 & ~7,
            data0 = imgData.data;
        var data = new Uint8Array(lineSize * height),
            pos = 0,
            ii;

        for (i = 0, ii = data0.length; i < ii; i++) {
          var mask = 128,
              elem = data0[i];

          while (mask > 0) {
            data[pos++] = elem & mask ? 0 : 255;
            mask >>= 1;
          }
        }

        var count = 0;
        pos = 0;

        if (data[pos] !== 0) {
          points[0] = 1;
          ++count;
        }

        for (j = 1; j < width; j++) {
          if (data[pos] !== data[pos + 1]) {
            points[j] = data[pos] ? 2 : 1;
            ++count;
          }

          pos++;
        }

        if (data[pos] !== 0) {
          points[j] = 2;
          ++count;
        }

        for (i = 1; i < height; i++) {
          pos = i * lineSize;
          j0 = i * width1;

          if (data[pos - lineSize] !== data[pos]) {
            points[j0] = data[pos] ? 1 : 8;
            ++count;
          }

          var sum = (data[pos] ? 4 : 0) + (data[pos - lineSize] ? 8 : 0);

          for (j = 1; j < width; j++) {
            sum = (sum >> 2) + (data[pos + 1] ? 4 : 0) + (data[pos - lineSize + 1] ? 8 : 0);

            if (POINT_TYPES[sum]) {
              points[j0 + j] = POINT_TYPES[sum];
              ++count;
            }

            pos++;
          }

          if (data[pos - lineSize] !== data[pos]) {
            points[j0 + j] = data[pos] ? 2 : 4;
            ++count;
          }

          if (count > POINT_TO_PROCESS_LIMIT) {
            return null;
          }
        }

        pos = lineSize * (height - 1);
        j0 = i * width1;

        if (data[pos] !== 0) {
          points[j0] = 8;
          ++count;
        }

        for (j = 1; j < width; j++) {
          if (data[pos] !== data[pos + 1]) {
            points[j0 + j] = data[pos] ? 4 : 8;
            ++count;
          }

          pos++;
        }

        if (data[pos] !== 0) {
          points[j0 + j] = 4;
          ++count;
        }

        if (count > POINT_TO_PROCESS_LIMIT) {
          return null;
        }

        var steps = new Int32Array([0, width1, -1, 0, -width1, 0, 0, 0, 1]);
        var outlines = [];

        for (i = 0; count && i <= height; i++) {
          var p = i * width1;
          var end = p + width;

          while (p < end && !points[p]) {
            p++;
          }

          if (p === end) {
            continue;
          }

          var coords = [p % width1, i];
          var type = points[p],
              p0 = p,
              pp;

          do {
            var step = steps[type];

            do {
              p += step;
            } while (!points[p]);

            pp = points[p];

            if (pp !== 5 && pp !== 10) {
              type = pp;
              points[p] = 0;
            } else {
              type = pp & 0x33 * type >> 4;
              points[p] &= type >> 2 | type << 2;
            }

            coords.push(p % width1);
            coords.push(p / width1 | 0);

            if (!points[p]) {
              --count;
            }
          } while (p0 !== p);

          outlines.push(coords);
          --i;
        }

        var drawOutline = function drawOutline(c) {
          c.save();
          c.scale(1 / width, -1 / height);
          c.translate(0, -height);
          c.beginPath();

          for (var i = 0, ii = outlines.length; i < ii; i++) {
            var o = outlines[i];
            c.moveTo(o[0], o[1]);

            for (var j = 2, jj = o.length; j < jj; j += 2) {
              c.lineTo(o[j], o[j + 1]);
            }
          }

          c.fill();
          c.beginPath();
          c.restore();
        };

        return drawOutline;
      }

      var CanvasExtraState = function CanvasExtraStateClosure() {
        function CanvasExtraState() {
          this.alphaIsShape = false;
          this.fontSize = 0;
          this.fontSizeScale = 1;
          this.textMatrix = _util.IDENTITY_MATRIX;
          this.textMatrixScale = 1;
          this.fontMatrix = _util.FONT_IDENTITY_MATRIX;
          this.leading = 0;
          this.x = 0;
          this.y = 0;
          this.lineX = 0;
          this.lineY = 0;
          this.charSpacing = 0;
          this.wordSpacing = 0;
          this.textHScale = 1;
          this.textRenderingMode = _util.TextRenderingMode.FILL;
          this.textRise = 0;
          this.fillColor = "#000000";
          this.strokeColor = "#000000";
          this.patternFill = false;
          this.fillAlpha = 1;
          this.strokeAlpha = 1;
          this.lineWidth = 1;
          this.activeSMask = null;
          this.resumeSMaskCtx = null;
        }

        CanvasExtraState.prototype = {
          clone: function CanvasExtraState_clone() {
            return Object.create(this);
          },
          setCurrentPoint: function CanvasExtraState_setCurrentPoint(x, y) {
            this.x = x;
            this.y = y;
          }
        };
        return CanvasExtraState;
      }();

      var CanvasGraphics = function CanvasGraphicsClosure() {
        var EXECUTION_TIME = 15;
        var EXECUTION_STEPS = 10;

        function CanvasGraphics(canvasCtx, commonObjs, objs, canvasFactory, webGLContext, imageLayer) {
          this.ctx = canvasCtx;
          this.current = new CanvasExtraState();
          this.stateStack = [];
          this.pendingClip = null;
          this.pendingEOFill = false;
          this.res = null;
          this.xobjs = null;
          this.commonObjs = commonObjs;
          this.objs = objs;
          this.canvasFactory = canvasFactory;
          this.webGLContext = webGLContext;
          this.imageLayer = imageLayer;
          this.groupStack = [];
          this.processingType3 = null;
          this.baseTransform = null;
          this.baseTransformStack = [];
          this.groupLevel = 0;
          this.smaskStack = [];
          this.smaskCounter = 0;
          this.tempSMask = null;
          this.cachedCanvases = new CachedCanvases(this.canvasFactory);

          if (canvasCtx) {
            addContextCurrentTransform(canvasCtx);
          }

          this._cachedGetSinglePixelWidth = null;
        }

        function putBinaryImageData(ctx, imgData) {
          if (typeof ImageData !== "undefined" && imgData instanceof ImageData) {
            ctx.putImageData(imgData, 0, 0);
            return;
          }

          var height = imgData.height,
              width = imgData.width;
          var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
          var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
          var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
          var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
          var srcPos = 0,
              destPos;
          var src = imgData.data;
          var dest = chunkImgData.data;
          var i, j, thisChunkHeight, elemsInThisChunk;

          if (imgData.kind === _util.ImageKind.GRAYSCALE_1BPP) {
            var srcLength = src.byteLength;
            var dest32 = new Uint32Array(dest.buffer, 0, dest.byteLength >> 2);
            var dest32DataLength = dest32.length;
            var fullSrcDiff = width + 7 >> 3;
            var white = 0xffffffff;
            var black = _util.IsLittleEndianCached.value ? 0xff000000 : 0x000000ff;

            for (i = 0; i < totalChunks; i++) {
              thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
              destPos = 0;

              for (j = 0; j < thisChunkHeight; j++) {
                var srcDiff = srcLength - srcPos;
                var k = 0;
                var kEnd = srcDiff > fullSrcDiff ? width : srcDiff * 8 - 7;
                var kEndUnrolled = kEnd & ~7;
                var mask = 0;
                var srcByte = 0;

                for (; k < kEndUnrolled; k += 8) {
                  srcByte = src[srcPos++];
                  dest32[destPos++] = srcByte & 128 ? white : black;
                  dest32[destPos++] = srcByte & 64 ? white : black;
                  dest32[destPos++] = srcByte & 32 ? white : black;
                  dest32[destPos++] = srcByte & 16 ? white : black;
                  dest32[destPos++] = srcByte & 8 ? white : black;
                  dest32[destPos++] = srcByte & 4 ? white : black;
                  dest32[destPos++] = srcByte & 2 ? white : black;
                  dest32[destPos++] = srcByte & 1 ? white : black;
                }

                for (; k < kEnd; k++) {
                  if (mask === 0) {
                    srcByte = src[srcPos++];
                    mask = 128;
                  }

                  dest32[destPos++] = srcByte & mask ? white : black;
                  mask >>= 1;
                }
              }

              while (destPos < dest32DataLength) {
                dest32[destPos++] = 0;
              }

              ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
            }
          } else if (imgData.kind === _util.ImageKind.RGBA_32BPP) {
            j = 0;
            elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;

            for (i = 0; i < fullChunks; i++) {
              dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
              srcPos += elemsInThisChunk;
              ctx.putImageData(chunkImgData, 0, j);
              j += FULL_CHUNK_HEIGHT;
            }

            if (i < totalChunks) {
              elemsInThisChunk = width * partialChunkHeight * 4;
              dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
              ctx.putImageData(chunkImgData, 0, j);
            }
          } else if (imgData.kind === _util.ImageKind.RGB_24BPP) {
            thisChunkHeight = FULL_CHUNK_HEIGHT;
            elemsInThisChunk = width * thisChunkHeight;

            for (i = 0; i < totalChunks; i++) {
              if (i >= fullChunks) {
                thisChunkHeight = partialChunkHeight;
                elemsInThisChunk = width * thisChunkHeight;
              }

              destPos = 0;

              for (j = elemsInThisChunk; j--;) {
                dest[destPos++] = src[srcPos++];
                dest[destPos++] = src[srcPos++];
                dest[destPos++] = src[srcPos++];
                dest[destPos++] = 255;
              }

              ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
            }
          } else {
            throw new Error("bad image kind: ".concat(imgData.kind));
          }
        }

        function putBinaryImageMask(ctx, imgData) {
          var height = imgData.height,
              width = imgData.width;
          var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
          var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
          var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
          var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
          var srcPos = 0;
          var src = imgData.data;
          var dest = chunkImgData.data;

          for (var i = 0; i < totalChunks; i++) {
            var thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
            var destPos = 3;

            for (var j = 0; j < thisChunkHeight; j++) {
              var mask = 0;

              for (var k = 0; k < width; k++) {
                if (!mask) {
                  var elem = src[srcPos++];
                  mask = 128;
                }

                dest[destPos] = elem & mask ? 0 : 255;
                destPos += 4;
                mask >>= 1;
              }
            }

            ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
          }
        }

        function copyCtxState(sourceCtx, destCtx) {
          var properties = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font"];

          for (var i = 0, ii = properties.length; i < ii; i++) {
            var property = properties[i];

            if (sourceCtx[property] !== undefined) {
              destCtx[property] = sourceCtx[property];
            }
          }

          if (sourceCtx.setLineDash !== undefined) {
            destCtx.setLineDash(sourceCtx.getLineDash());
            destCtx.lineDashOffset = sourceCtx.lineDashOffset;
          }
        }

        function resetCtxToDefault(ctx) {
          ctx.strokeStyle = "#000000";
          ctx.fillStyle = "#000000";
          ctx.fillRule = "nonzero";
          ctx.globalAlpha = 1;
          ctx.lineWidth = 1;
          ctx.lineCap = "butt";
          ctx.lineJoin = "miter";
          ctx.miterLimit = 10;
          ctx.globalCompositeOperation = "source-over";
          ctx.font = "10px sans-serif";

          if (ctx.setLineDash !== undefined) {
            ctx.setLineDash([]);
            ctx.lineDashOffset = 0;
          }
        }

        function composeSMaskBackdrop(bytes, r0, g0, b0) {
          var length = bytes.length;

          for (var i = 3; i < length; i += 4) {
            var alpha = bytes[i];

            if (alpha === 0) {
              bytes[i - 3] = r0;
              bytes[i - 2] = g0;
              bytes[i - 1] = b0;
            } else if (alpha < 255) {
              var alpha_ = 255 - alpha;
              bytes[i - 3] = bytes[i - 3] * alpha + r0 * alpha_ >> 8;
              bytes[i - 2] = bytes[i - 2] * alpha + g0 * alpha_ >> 8;
              bytes[i - 1] = bytes[i - 1] * alpha + b0 * alpha_ >> 8;
            }
          }
        }

        function composeSMaskAlpha(maskData, layerData, transferMap) {
          var length = maskData.length;
          var scale = 1 / 255;

          for (var i = 3; i < length; i += 4) {
            var alpha = transferMap ? transferMap[maskData[i]] : maskData[i];
            layerData[i] = layerData[i] * alpha * scale | 0;
          }
        }

        function composeSMaskLuminosity(maskData, layerData, transferMap) {
          var length = maskData.length;

          for (var i = 3; i < length; i += 4) {
            var y = maskData[i - 3] * 77 + maskData[i - 2] * 152 + maskData[i - 1] * 28;
            layerData[i] = transferMap ? layerData[i] * transferMap[y >> 8] >> 8 : layerData[i] * y >> 16;
          }
        }

        function genericComposeSMask(maskCtx, layerCtx, width, height, subtype, backdrop, transferMap) {
          var hasBackdrop = !!backdrop;
          var r0 = hasBackdrop ? backdrop[0] : 0;
          var g0 = hasBackdrop ? backdrop[1] : 0;
          var b0 = hasBackdrop ? backdrop[2] : 0;
          var composeFn;

          if (subtype === "Luminosity") {
            composeFn = composeSMaskLuminosity;
          } else {
            composeFn = composeSMaskAlpha;
          }

          var PIXELS_TO_PROCESS = 1048576;
          var chunkSize = Math.min(height, Math.ceil(PIXELS_TO_PROCESS / width));

          for (var row = 0; row < height; row += chunkSize) {
            var chunkHeight = Math.min(chunkSize, height - row);
            var maskData = maskCtx.getImageData(0, row, width, chunkHeight);
            var layerData = layerCtx.getImageData(0, row, width, chunkHeight);

            if (hasBackdrop) {
              composeSMaskBackdrop(maskData.data, r0, g0, b0);
            }

            composeFn(maskData.data, layerData.data, transferMap);
            maskCtx.putImageData(layerData, 0, row);
          }
        }

        function composeSMask(ctx, smask, layerCtx, webGLContext) {
          var mask = smask.canvas;
          var maskCtx = smask.context;
          ctx.setTransform(smask.scaleX, 0, 0, smask.scaleY, smask.offsetX, smask.offsetY);
          var backdrop = smask.backdrop || null;

          if (!smask.transferMap && webGLContext.isEnabled) {
            var composed = webGLContext.composeSMask({
              layer: layerCtx.canvas,
              mask: mask,
              properties: {
                subtype: smask.subtype,
                backdrop: backdrop
              }
            });
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.drawImage(composed, smask.offsetX, smask.offsetY);
            return;
          }

          genericComposeSMask(maskCtx, layerCtx, mask.width, mask.height, smask.subtype, backdrop, smask.transferMap);
          ctx.drawImage(mask, 0, 0);
        }

        var LINE_CAP_STYLES = ["butt", "round", "square"];
        var LINE_JOIN_STYLES = ["miter", "round", "bevel"];
        var NORMAL_CLIP = {};
        var EO_CLIP = {};
        CanvasGraphics.prototype = {
          beginDrawing: function beginDrawing(_ref25) {
            var transform = _ref25.transform,
                viewport = _ref25.viewport,
                _ref25$transparency = _ref25.transparency,
                transparency = _ref25$transparency === void 0 ? false : _ref25$transparency,
                _ref25$background = _ref25.background,
                background = _ref25$background === void 0 ? null : _ref25$background;
            var width = this.ctx.canvas.width;
            var height = this.ctx.canvas.height;
            this.ctx.save();
            this.ctx.fillStyle = background || "rgb(255, 255, 255)";
            this.ctx.fillRect(0, 0, width, height);
            this.ctx.restore();

            if (transparency) {
              var transparentCanvas = this.cachedCanvases.getCanvas("transparent", width, height, true);
              this.compositeCtx = this.ctx;
              this.transparentCanvas = transparentCanvas.canvas;
              this.ctx = transparentCanvas.context;
              this.ctx.save();
              this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform);
            }

            this.ctx.save();
            resetCtxToDefault(this.ctx);

            if (transform) {
              this.ctx.transform.apply(this.ctx, transform);
            }

            this.ctx.transform.apply(this.ctx, viewport.transform);
            this.baseTransform = this.ctx.mozCurrentTransform.slice();

            if (this.imageLayer) {
              this.imageLayer.beginLayout();
            }
          },
          executeOperatorList: function CanvasGraphics_executeOperatorList(operatorList, executionStartIdx, continueCallback, stepper) {
            var argsArray = operatorList.argsArray;
            var fnArray = operatorList.fnArray;
            var i = executionStartIdx || 0;
            var argsArrayLen = argsArray.length;

            if (argsArrayLen === i) {
              return i;
            }

            var chunkOperations = argsArrayLen - i > EXECUTION_STEPS && typeof continueCallback === "function";
            var endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
            var steps = 0;
            var commonObjs = this.commonObjs;
            var objs = this.objs;
            var fnId;

            while (true) {
              if (stepper !== undefined && i === stepper.nextBreakPoint) {
                stepper.breakIt(i, continueCallback);
                return i;
              }

              fnId = fnArray[i];

              if (fnId !== _util.OPS.dependency) {
                this[fnId].apply(this, argsArray[i]);
              } else {
                var _iterator7 = _createForOfIteratorHelper(argsArray[i]),
                    _step7;

                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    var depObjId = _step7.value;
                    var objsPool = depObjId.startsWith("g_") ? commonObjs : objs;

                    if (!objsPool.has(depObjId)) {
                      objsPool.get(depObjId, continueCallback);
                      return i;
                    }
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }
              }

              i++;

              if (i === argsArrayLen) {
                return i;
              }

              if (chunkOperations && ++steps > EXECUTION_STEPS) {
                if (Date.now() > endTime) {
                  continueCallback();
                  return i;
                }

                steps = 0;
              }
            }
          },
          endDrawing: function CanvasGraphics_endDrawing() {
            if (this.current.activeSMask !== null) {
              this.endSMaskGroup();
            }

            this.ctx.restore();

            if (this.transparentCanvas) {
              this.ctx = this.compositeCtx;
              this.ctx.save();
              this.ctx.setTransform(1, 0, 0, 1, 0, 0);
              this.ctx.drawImage(this.transparentCanvas, 0, 0);
              this.ctx.restore();
              this.transparentCanvas = null;
            }

            this.cachedCanvases.clear();
            this.webGLContext.clear();

            if (this.imageLayer) {
              this.imageLayer.endLayout();
            }
          },
          setLineWidth: function CanvasGraphics_setLineWidth(width) {
            this.current.lineWidth = width;
            this.ctx.lineWidth = width;
          },
          setLineCap: function CanvasGraphics_setLineCap(style) {
            this.ctx.lineCap = LINE_CAP_STYLES[style];
          },
          setLineJoin: function CanvasGraphics_setLineJoin(style) {
            this.ctx.lineJoin = LINE_JOIN_STYLES[style];
          },
          setMiterLimit: function CanvasGraphics_setMiterLimit(limit) {
            this.ctx.miterLimit = limit;
          },
          setDash: function CanvasGraphics_setDash(dashArray, dashPhase) {
            var ctx = this.ctx;

            if (ctx.setLineDash !== undefined) {
              ctx.setLineDash(dashArray);
              ctx.lineDashOffset = dashPhase;
            }
          },
          setRenderingIntent: function setRenderingIntent(intent) {},
          setFlatness: function setFlatness(flatness) {},
          setGState: function CanvasGraphics_setGState(states) {
            for (var i = 0, ii = states.length; i < ii; i++) {
              var state = states[i];
              var key = state[0];
              var value = state[1];

              switch (key) {
                case "LW":
                  this.setLineWidth(value);
                  break;

                case "LC":
                  this.setLineCap(value);
                  break;

                case "LJ":
                  this.setLineJoin(value);
                  break;

                case "ML":
                  this.setMiterLimit(value);
                  break;

                case "D":
                  this.setDash(value[0], value[1]);
                  break;

                case "RI":
                  this.setRenderingIntent(value);
                  break;

                case "FL":
                  this.setFlatness(value);
                  break;

                case "Font":
                  this.setFont(value[0], value[1]);
                  break;

                case "CA":
                  this.current.strokeAlpha = state[1];
                  break;

                case "ca":
                  this.current.fillAlpha = state[1];
                  this.ctx.globalAlpha = state[1];
                  break;

                case "BM":
                  this.ctx.globalCompositeOperation = value;
                  break;

                case "SMask":
                  if (this.current.activeSMask) {
                    if (this.stateStack.length > 0 && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask) {
                      this.suspendSMaskGroup();
                    } else {
                      this.endSMaskGroup();
                    }
                  }

                  this.current.activeSMask = value ? this.tempSMask : null;

                  if (this.current.activeSMask) {
                    this.beginSMaskGroup();
                  }

                  this.tempSMask = null;
                  break;
              }
            }
          },
          beginSMaskGroup: function CanvasGraphics_beginSMaskGroup() {
            var activeSMask = this.current.activeSMask;
            var drawnWidth = activeSMask.canvas.width;
            var drawnHeight = activeSMask.canvas.height;
            var cacheId = "smaskGroupAt" + this.groupLevel;
            var scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
            var currentCtx = this.ctx;
            var currentTransform = currentCtx.mozCurrentTransform;
            this.ctx.save();
            var groupCtx = scratchCanvas.context;
            groupCtx.scale(1 / activeSMask.scaleX, 1 / activeSMask.scaleY);
            groupCtx.translate(-activeSMask.offsetX, -activeSMask.offsetY);
            groupCtx.transform.apply(groupCtx, currentTransform);
            activeSMask.startTransformInverse = groupCtx.mozCurrentTransformInverse;
            copyCtxState(currentCtx, groupCtx);
            this.ctx = groupCtx;
            this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
            this.groupStack.push(currentCtx);
            this.groupLevel++;
          },
          suspendSMaskGroup: function CanvasGraphics_endSMaskGroup() {
            var groupCtx = this.ctx;
            this.groupLevel--;
            this.ctx = this.groupStack.pop();
            composeSMask(this.ctx, this.current.activeSMask, groupCtx, this.webGLContext);
            this.ctx.restore();
            this.ctx.save();
            copyCtxState(groupCtx, this.ctx);
            this.current.resumeSMaskCtx = groupCtx;

            var deltaTransform = _util.Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);

            this.ctx.transform.apply(this.ctx, deltaTransform);
            groupCtx.save();
            groupCtx.setTransform(1, 0, 0, 1, 0, 0);
            groupCtx.clearRect(0, 0, groupCtx.canvas.width, groupCtx.canvas.height);
            groupCtx.restore();
          },
          resumeSMaskGroup: function CanvasGraphics_endSMaskGroup() {
            var groupCtx = this.current.resumeSMaskCtx;
            var currentCtx = this.ctx;
            this.ctx = groupCtx;
            this.groupStack.push(currentCtx);
            this.groupLevel++;
          },
          endSMaskGroup: function CanvasGraphics_endSMaskGroup() {
            var groupCtx = this.ctx;
            this.groupLevel--;
            this.ctx = this.groupStack.pop();
            composeSMask(this.ctx, this.current.activeSMask, groupCtx, this.webGLContext);
            this.ctx.restore();
            copyCtxState(groupCtx, this.ctx);

            var deltaTransform = _util.Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);

            this.ctx.transform.apply(this.ctx, deltaTransform);
          },
          save: function CanvasGraphics_save() {
            this.ctx.save();
            var old = this.current;
            this.stateStack.push(old);
            this.current = old.clone();
            this.current.resumeSMaskCtx = null;
          },
          restore: function CanvasGraphics_restore() {
            if (this.current.resumeSMaskCtx) {
              this.resumeSMaskGroup();
            }

            if (this.current.activeSMask !== null && (this.stateStack.length === 0 || this.stateStack[this.stateStack.length - 1].activeSMask !== this.current.activeSMask)) {
              this.endSMaskGroup();
            }

            if (this.stateStack.length !== 0) {
              this.current = this.stateStack.pop();
              this.ctx.restore();
              this.pendingClip = null;
              this._cachedGetSinglePixelWidth = null;
            }
          },
          transform: function CanvasGraphics_transform(a, b, c, d, e, f) {
            this.ctx.transform(a, b, c, d, e, f);
            this._cachedGetSinglePixelWidth = null;
          },
          constructPath: function CanvasGraphics_constructPath(ops, args) {
            var ctx = this.ctx;
            var current = this.current;
            var x = current.x,
                y = current.y;

            for (var i = 0, j = 0, ii = ops.length; i < ii; i++) {
              switch (ops[i] | 0) {
                case _util.OPS.rectangle:
                  x = args[j++];
                  y = args[j++];
                  var width = args[j++];
                  var height = args[j++];

                  if (width === 0) {
                    width = this.getSinglePixelWidth();
                  }

                  if (height === 0) {
                    height = this.getSinglePixelWidth();
                  }

                  var xw = x + width;
                  var yh = y + height;
                  this.ctx.moveTo(x, y);
                  this.ctx.lineTo(xw, y);
                  this.ctx.lineTo(xw, yh);
                  this.ctx.lineTo(x, yh);
                  this.ctx.lineTo(x, y);
                  this.ctx.closePath();
                  break;

                case _util.OPS.moveTo:
                  x = args[j++];
                  y = args[j++];
                  ctx.moveTo(x, y);
                  break;

                case _util.OPS.lineTo:
                  x = args[j++];
                  y = args[j++];
                  ctx.lineTo(x, y);
                  break;

                case _util.OPS.curveTo:
                  x = args[j + 4];
                  y = args[j + 5];
                  ctx.bezierCurveTo(args[j], args[j + 1], args[j + 2], args[j + 3], x, y);
                  j += 6;
                  break;

                case _util.OPS.curveTo2:
                  ctx.bezierCurveTo(x, y, args[j], args[j + 1], args[j + 2], args[j + 3]);
                  x = args[j + 2];
                  y = args[j + 3];
                  j += 4;
                  break;

                case _util.OPS.curveTo3:
                  x = args[j + 2];
                  y = args[j + 3];
                  ctx.bezierCurveTo(args[j], args[j + 1], x, y, x, y);
                  j += 4;
                  break;

                case _util.OPS.closePath:
                  ctx.closePath();
                  break;
              }
            }

            current.setCurrentPoint(x, y);
          },
          closePath: function CanvasGraphics_closePath() {
            this.ctx.closePath();
          },
          stroke: function CanvasGraphics_stroke(consumePath) {
            consumePath = typeof consumePath !== "undefined" ? consumePath : true;
            var ctx = this.ctx;
            var strokeColor = this.current.strokeColor;
            ctx.globalAlpha = this.current.strokeAlpha;

            if (strokeColor && strokeColor.hasOwnProperty("type") && strokeColor.type === "Pattern") {
              ctx.save();
              var transform = ctx.mozCurrentTransform;

              var scale = _util.Util.singularValueDecompose2dScale(transform)[0];

              ctx.strokeStyle = strokeColor.getPattern(ctx, this);
              ctx.lineWidth = Math.max(this.getSinglePixelWidth() * MIN_WIDTH_FACTOR, this.current.lineWidth * scale);
              ctx.stroke();
              ctx.restore();
            } else {
              ctx.lineWidth = Math.max(this.getSinglePixelWidth() * MIN_WIDTH_FACTOR, this.current.lineWidth);
              ctx.stroke();
            }

            if (consumePath) {
              this.consumePath();
            }

            ctx.globalAlpha = this.current.fillAlpha;
          },
          closeStroke: function CanvasGraphics_closeStroke() {
            this.closePath();
            this.stroke();
          },
          fill: function CanvasGraphics_fill(consumePath) {
            consumePath = typeof consumePath !== "undefined" ? consumePath : true;
            var ctx = this.ctx;
            var fillColor = this.current.fillColor;
            var isPatternFill = this.current.patternFill;
            var needRestore = false;

            if (isPatternFill) {
              ctx.save();

              if (this.baseTransform) {
                ctx.setTransform.apply(ctx, this.baseTransform);
              }

              ctx.fillStyle = fillColor.getPattern(ctx, this);
              needRestore = true;
            }

            if (this.pendingEOFill) {
              ctx.fill("evenodd");
              this.pendingEOFill = false;
            } else {
              ctx.fill();
            }

            if (needRestore) {
              ctx.restore();
            }

            if (consumePath) {
              this.consumePath();
            }
          },
          eoFill: function CanvasGraphics_eoFill() {
            this.pendingEOFill = true;
            this.fill();
          },
          fillStroke: function CanvasGraphics_fillStroke() {
            this.fill(false);
            this.stroke(false);
            this.consumePath();
          },
          eoFillStroke: function CanvasGraphics_eoFillStroke() {
            this.pendingEOFill = true;
            this.fillStroke();
          },
          closeFillStroke: function CanvasGraphics_closeFillStroke() {
            this.closePath();
            this.fillStroke();
          },
          closeEOFillStroke: function CanvasGraphics_closeEOFillStroke() {
            this.pendingEOFill = true;
            this.closePath();
            this.fillStroke();
          },
          endPath: function CanvasGraphics_endPath() {
            this.consumePath();
          },
          clip: function CanvasGraphics_clip() {
            this.pendingClip = NORMAL_CLIP;
          },
          eoClip: function CanvasGraphics_eoClip() {
            this.pendingClip = EO_CLIP;
          },
          beginText: function CanvasGraphics_beginText() {
            this.current.textMatrix = _util.IDENTITY_MATRIX;
            this.current.textMatrixScale = 1;
            this.current.x = this.current.lineX = 0;
            this.current.y = this.current.lineY = 0;
          },
          endText: function CanvasGraphics_endText() {
            var paths = this.pendingTextPaths;
            var ctx = this.ctx;

            if (paths === undefined) {
              ctx.beginPath();
              return;
            }

            ctx.save();
            ctx.beginPath();

            for (var i = 0; i < paths.length; i++) {
              var path = paths[i];
              ctx.setTransform.apply(ctx, path.transform);
              ctx.translate(path.x, path.y);
              path.addToPath(ctx, path.fontSize);
            }

            ctx.restore();
            ctx.clip();
            ctx.beginPath();
            delete this.pendingTextPaths;
          },
          setCharSpacing: function CanvasGraphics_setCharSpacing(spacing) {
            this.current.charSpacing = spacing;
          },
          setWordSpacing: function CanvasGraphics_setWordSpacing(spacing) {
            this.current.wordSpacing = spacing;
          },
          setHScale: function CanvasGraphics_setHScale(scale) {
            this.current.textHScale = scale / 100;
          },
          setLeading: function CanvasGraphics_setLeading(leading) {
            this.current.leading = -leading;
          },
          setFont: function CanvasGraphics_setFont(fontRefName, size) {
            var fontObj = this.commonObjs.get(fontRefName);
            var current = this.current;

            if (!fontObj) {
              throw new Error("Can't find font for ".concat(fontRefName));
            }

            current.fontMatrix = fontObj.fontMatrix ? fontObj.fontMatrix : _util.FONT_IDENTITY_MATRIX;

            if (current.fontMatrix[0] === 0 || current.fontMatrix[3] === 0) {
              (0, _util.warn)("Invalid font matrix for font " + fontRefName);
            }

            if (size < 0) {
              size = -size;
              current.fontDirection = -1;
            } else {
              current.fontDirection = 1;
            }

            this.current.font = fontObj;
            this.current.fontSize = size;

            if (fontObj.isType3Font) {
              return;
            }

            var name = fontObj.loadedName || "sans-serif";
            var bold = "normal";

            if (fontObj.black) {
              bold = "900";
            } else if (fontObj.bold) {
              bold = "bold";
            }

            var italic = fontObj.italic ? "italic" : "normal";
            var typeface = "\"".concat(name, "\", ").concat(fontObj.fallbackName);
            var browserFontSize = size;

            if (size < MIN_FONT_SIZE) {
              browserFontSize = MIN_FONT_SIZE;
            } else if (size > MAX_FONT_SIZE) {
              browserFontSize = MAX_FONT_SIZE;
            }

            this.current.fontSizeScale = size / browserFontSize;
            this.ctx.font = "".concat(italic, " ").concat(bold, " ").concat(browserFontSize, "px ").concat(typeface);
          },
          setTextRenderingMode: function CanvasGraphics_setTextRenderingMode(mode) {
            this.current.textRenderingMode = mode;
          },
          setTextRise: function CanvasGraphics_setTextRise(rise) {
            this.current.textRise = rise;
          },
          moveText: function CanvasGraphics_moveText(x, y) {
            this.current.x = this.current.lineX += x;
            this.current.y = this.current.lineY += y;
          },
          setLeadingMoveText: function CanvasGraphics_setLeadingMoveText(x, y) {
            this.setLeading(-y);
            this.moveText(x, y);
          },
          setTextMatrix: function CanvasGraphics_setTextMatrix(a, b, c, d, e, f) {
            this.current.textMatrix = [a, b, c, d, e, f];
            this.current.textMatrixScale = Math.sqrt(a * a + b * b);
            this.current.x = this.current.lineX = 0;
            this.current.y = this.current.lineY = 0;
          },
          nextLine: function CanvasGraphics_nextLine() {
            this.moveText(0, this.current.leading);
          },
          paintChar: function paintChar(character, x, y, patternTransform) {
            var ctx = this.ctx;
            var current = this.current;
            var font = current.font;
            var textRenderingMode = current.textRenderingMode;
            var fontSize = current.fontSize / current.fontSizeScale;
            var fillStrokeMode = textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;
            var isAddToPathSet = !!(textRenderingMode & _util.TextRenderingMode.ADD_TO_PATH_FLAG);
            var patternFill = current.patternFill && font.data;
            var addToPath;

            if (font.disableFontFace || isAddToPathSet || patternFill) {
              addToPath = font.getPathGenerator(this.commonObjs, character);
            }

            if (font.disableFontFace || patternFill) {
              ctx.save();
              ctx.translate(x, y);
              ctx.beginPath();
              addToPath(ctx, fontSize);

              if (patternTransform) {
                ctx.setTransform.apply(ctx, patternTransform);
              }

              if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                ctx.fill();
              }

              if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                ctx.stroke();
              }

              ctx.restore();
            } else {
              if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                ctx.fillText(character, x, y);
              }

              if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                ctx.strokeText(character, x, y);
              }
            }

            if (isAddToPathSet) {
              var paths = this.pendingTextPaths || (this.pendingTextPaths = []);
              paths.push({
                transform: ctx.mozCurrentTransform,
                x: x,
                y: y,
                fontSize: fontSize,
                addToPath: addToPath
              });
            }
          },

          get isFontSubpixelAAEnabled() {
            var _this$cachedCanvases$ = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10),
                ctx = _this$cachedCanvases$.context;

            ctx.scale(1.5, 1);
            ctx.fillText("I", 0, 10);
            var data = ctx.getImageData(0, 0, 10, 10).data;
            var enabled = false;

            for (var i = 3; i < data.length; i += 4) {
              if (data[i] > 0 && data[i] < 255) {
                enabled = true;
                break;
              }
            }

            return (0, _util.shadow)(this, "isFontSubpixelAAEnabled", enabled);
          },

          showText: function CanvasGraphics_showText(glyphs) {
            var current = this.current;
            var font = current.font;

            if (font.isType3Font) {
              return this.showType3Text(glyphs);
            }

            var fontSize = current.fontSize;

            if (fontSize === 0) {
              return undefined;
            }

            var ctx = this.ctx;
            var fontSizeScale = current.fontSizeScale;
            var charSpacing = current.charSpacing;
            var wordSpacing = current.wordSpacing;
            var fontDirection = current.fontDirection;
            var textHScale = current.textHScale * fontDirection;
            var glyphsLength = glyphs.length;
            var vertical = font.vertical;
            var spacingDir = vertical ? 1 : -1;
            var defaultVMetrics = font.defaultVMetrics;
            var widthAdvanceScale = fontSize * current.fontMatrix[0];
            var simpleFillText = current.textRenderingMode === _util.TextRenderingMode.FILL && !font.disableFontFace && !current.patternFill;
            ctx.save();
            var patternTransform;

            if (current.patternFill) {
              ctx.save();
              var pattern = current.fillColor.getPattern(ctx, this);
              patternTransform = ctx.mozCurrentTransform;
              ctx.restore();
              ctx.fillStyle = pattern;
            }

            ctx.transform.apply(ctx, current.textMatrix);
            ctx.translate(current.x, current.y + current.textRise);

            if (fontDirection > 0) {
              ctx.scale(textHScale, -1);
            } else {
              ctx.scale(textHScale, 1);
            }

            var lineWidth = current.lineWidth;
            var scale = current.textMatrixScale;

            if (scale === 0 || lineWidth === 0) {
              var fillStrokeMode = current.textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;

              if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                this._cachedGetSinglePixelWidth = null;
                lineWidth = this.getSinglePixelWidth() * MIN_WIDTH_FACTOR;
              }
            } else {
              lineWidth /= scale;
            }

            if (fontSizeScale !== 1.0) {
              ctx.scale(fontSizeScale, fontSizeScale);
              lineWidth /= fontSizeScale;
            }

            ctx.lineWidth = lineWidth;
            var x = 0,
                i;

            for (i = 0; i < glyphsLength; ++i) {
              var glyph = glyphs[i];

              if ((0, _util.isNum)(glyph)) {
                x += spacingDir * glyph * fontSize / 1000;
                continue;
              }

              var restoreNeeded = false;
              var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
              var character = glyph.fontChar;
              var accent = glyph.accent;
              var scaledX, scaledY, scaledAccentX, scaledAccentY;
              var width = glyph.width;

              if (vertical) {
                var vmetric, vx, vy;
                vmetric = glyph.vmetric || defaultVMetrics;
                vx = glyph.vmetric ? vmetric[1] : width * 0.5;
                vx = -vx * widthAdvanceScale;
                vy = vmetric[2] * widthAdvanceScale;
                width = vmetric ? -vmetric[0] : width;
                scaledX = vx / fontSizeScale;
                scaledY = (x + vy) / fontSizeScale;
              } else {
                scaledX = x / fontSizeScale;
                scaledY = 0;
              }

              if (font.remeasure && width > 0) {
                var measuredWidth = ctx.measureText(character).width * 1000 / fontSize * fontSizeScale;

                if (width < measuredWidth && this.isFontSubpixelAAEnabled) {
                  var characterScaleX = width / measuredWidth;
                  restoreNeeded = true;
                  ctx.save();
                  ctx.scale(characterScaleX, 1);
                  scaledX /= characterScaleX;
                } else if (width !== measuredWidth) {
                  scaledX += (width - measuredWidth) / 2000 * fontSize / fontSizeScale;
                }
              }

              if (glyph.isInFont || font.missingFile) {
                if (simpleFillText && !accent) {
                  ctx.fillText(character, scaledX, scaledY);
                } else {
                  this.paintChar(character, scaledX, scaledY, patternTransform);

                  if (accent) {
                    scaledAccentX = scaledX + accent.offset.x / fontSizeScale;
                    scaledAccentY = scaledY - accent.offset.y / fontSizeScale;
                    this.paintChar(accent.fontChar, scaledAccentX, scaledAccentY, patternTransform);
                  }
                }
              }

              var charWidth;

              if (vertical) {
                charWidth = width * widthAdvanceScale - spacing * fontDirection;
              } else {
                charWidth = width * widthAdvanceScale + spacing * fontDirection;
              }

              x += charWidth;

              if (restoreNeeded) {
                ctx.restore();
              }
            }

            if (vertical) {
              current.y -= x;
            } else {
              current.x += x * textHScale;
            }

            ctx.restore();
          },
          showType3Text: function CanvasGraphics_showType3Text(glyphs) {
            var ctx = this.ctx;
            var current = this.current;
            var font = current.font;
            var fontSize = current.fontSize;
            var fontDirection = current.fontDirection;
            var spacingDir = font.vertical ? 1 : -1;
            var charSpacing = current.charSpacing;
            var wordSpacing = current.wordSpacing;
            var textHScale = current.textHScale * fontDirection;
            var fontMatrix = current.fontMatrix || _util.FONT_IDENTITY_MATRIX;
            var glyphsLength = glyphs.length;
            var isTextInvisible = current.textRenderingMode === _util.TextRenderingMode.INVISIBLE;
            var i, glyph, width, spacingLength;

            if (isTextInvisible || fontSize === 0) {
              return;
            }

            this._cachedGetSinglePixelWidth = null;
            ctx.save();
            ctx.transform.apply(ctx, current.textMatrix);
            ctx.translate(current.x, current.y);
            ctx.scale(textHScale, fontDirection);

            for (i = 0; i < glyphsLength; ++i) {
              glyph = glyphs[i];

              if ((0, _util.isNum)(glyph)) {
                spacingLength = spacingDir * glyph * fontSize / 1000;
                this.ctx.translate(spacingLength, 0);
                current.x += spacingLength * textHScale;
                continue;
              }

              var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
              var operatorList = font.charProcOperatorList[glyph.operatorListId];

              if (!operatorList) {
                (0, _util.warn)("Type3 character \"".concat(glyph.operatorListId, "\" is not available."));
                continue;
              }

              this.processingType3 = glyph;
              this.save();
              ctx.scale(fontSize, fontSize);
              ctx.transform.apply(ctx, fontMatrix);
              this.executeOperatorList(operatorList);
              this.restore();

              var transformed = _util.Util.applyTransform([glyph.width, 0], fontMatrix);

              width = transformed[0] * fontSize + spacing;
              ctx.translate(width, 0);
              current.x += width * textHScale;
            }

            ctx.restore();
            this.processingType3 = null;
          },
          setCharWidth: function CanvasGraphics_setCharWidth(xWidth, yWidth) {},
          setCharWidthAndBounds: function CanvasGraphics_setCharWidthAndBounds(xWidth, yWidth, llx, lly, urx, ury) {
            this.ctx.rect(llx, lly, urx - llx, ury - lly);
            this.clip();
            this.endPath();
          },
          getColorN_Pattern: function CanvasGraphics_getColorN_Pattern(IR) {
            var _this26 = this;

            var pattern;

            if (IR[0] === "TilingPattern") {
              var color = IR[1];
              var baseTransform = this.baseTransform || this.ctx.mozCurrentTransform.slice();
              var canvasGraphicsFactory = {
                createCanvasGraphics: function createCanvasGraphics(ctx) {
                  return new CanvasGraphics(ctx, _this26.commonObjs, _this26.objs, _this26.canvasFactory, _this26.webGLContext);
                }
              };
              pattern = new _pattern_helper.TilingPattern(IR, color, this.ctx, canvasGraphicsFactory, baseTransform);
            } else {
              pattern = (0, _pattern_helper.getShadingPatternFromIR)(IR);
            }

            return pattern;
          },
          setStrokeColorN: function CanvasGraphics_setStrokeColorN() {
            this.current.strokeColor = this.getColorN_Pattern(arguments);
          },
          setFillColorN: function CanvasGraphics_setFillColorN() {
            this.current.fillColor = this.getColorN_Pattern(arguments);
            this.current.patternFill = true;
          },
          setStrokeRGBColor: function CanvasGraphics_setStrokeRGBColor(r, g, b) {
            var color = _util.Util.makeCssRgb(r, g, b);

            this.ctx.strokeStyle = color;
            this.current.strokeColor = color;
          },
          setFillRGBColor: function CanvasGraphics_setFillRGBColor(r, g, b) {
            var color = _util.Util.makeCssRgb(r, g, b);

            this.ctx.fillStyle = color;
            this.current.fillColor = color;
            this.current.patternFill = false;
          },
          shadingFill: function CanvasGraphics_shadingFill(patternIR) {
            var ctx = this.ctx;
            this.save();
            var pattern = (0, _pattern_helper.getShadingPatternFromIR)(patternIR);
            ctx.fillStyle = pattern.getPattern(ctx, this, true);
            var inv = ctx.mozCurrentTransformInverse;

            if (inv) {
              var canvas = ctx.canvas;
              var width = canvas.width;
              var height = canvas.height;

              var bl = _util.Util.applyTransform([0, 0], inv);

              var br = _util.Util.applyTransform([0, height], inv);

              var ul = _util.Util.applyTransform([width, 0], inv);

              var ur = _util.Util.applyTransform([width, height], inv);

              var x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
              var y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
              var x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
              var y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
              this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
            } else {
              this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
            }

            this.restore();
          },
          beginInlineImage: function CanvasGraphics_beginInlineImage() {
            (0, _util.unreachable)("Should not call beginInlineImage");
          },
          beginImageData: function CanvasGraphics_beginImageData() {
            (0, _util.unreachable)("Should not call beginImageData");
          },
          paintFormXObjectBegin: function CanvasGraphics_paintFormXObjectBegin(matrix, bbox) {
            this.save();
            this.baseTransformStack.push(this.baseTransform);

            if (Array.isArray(matrix) && matrix.length === 6) {
              this.transform.apply(this, matrix);
            }

            this.baseTransform = this.ctx.mozCurrentTransform;

            if (bbox) {
              var width = bbox[2] - bbox[0];
              var height = bbox[3] - bbox[1];
              this.ctx.rect(bbox[0], bbox[1], width, height);
              this.clip();
              this.endPath();
            }
          },
          paintFormXObjectEnd: function CanvasGraphics_paintFormXObjectEnd() {
            this.restore();
            this.baseTransform = this.baseTransformStack.pop();
          },
          beginGroup: function CanvasGraphics_beginGroup(group) {
            this.save();
            var currentCtx = this.ctx;

            if (!group.isolated) {
              (0, _util.info)("TODO: Support non-isolated groups.");
            }

            if (group.knockout) {
              (0, _util.warn)("Knockout groups not supported.");
            }

            var currentTransform = currentCtx.mozCurrentTransform;

            if (group.matrix) {
              currentCtx.transform.apply(currentCtx, group.matrix);
            }

            if (!group.bbox) {
              throw new Error("Bounding box is required.");
            }

            var bounds = _util.Util.getAxialAlignedBoundingBox(group.bbox, currentCtx.mozCurrentTransform);

            var canvasBounds = [0, 0, currentCtx.canvas.width, currentCtx.canvas.height];
            bounds = _util.Util.intersect(bounds, canvasBounds) || [0, 0, 0, 0];
            var offsetX = Math.floor(bounds[0]);
            var offsetY = Math.floor(bounds[1]);
            var drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
            var drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
            var scaleX = 1,
                scaleY = 1;

            if (drawnWidth > MAX_GROUP_SIZE) {
              scaleX = drawnWidth / MAX_GROUP_SIZE;
              drawnWidth = MAX_GROUP_SIZE;
            }

            if (drawnHeight > MAX_GROUP_SIZE) {
              scaleY = drawnHeight / MAX_GROUP_SIZE;
              drawnHeight = MAX_GROUP_SIZE;
            }

            var cacheId = "groupAt" + this.groupLevel;

            if (group.smask) {
              cacheId += "_smask_" + this.smaskCounter++ % 2;
            }

            var scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
            var groupCtx = scratchCanvas.context;
            groupCtx.scale(1 / scaleX, 1 / scaleY);
            groupCtx.translate(-offsetX, -offsetY);
            groupCtx.transform.apply(groupCtx, currentTransform);

            if (group.smask) {
              this.smaskStack.push({
                canvas: scratchCanvas.canvas,
                context: groupCtx,
                offsetX: offsetX,
                offsetY: offsetY,
                scaleX: scaleX,
                scaleY: scaleY,
                subtype: group.smask.subtype,
                backdrop: group.smask.backdrop,
                transferMap: group.smask.transferMap || null,
                startTransformInverse: null
              });
            } else {
              currentCtx.setTransform(1, 0, 0, 1, 0, 0);
              currentCtx.translate(offsetX, offsetY);
              currentCtx.scale(scaleX, scaleY);
            }

            copyCtxState(currentCtx, groupCtx);
            this.ctx = groupCtx;
            this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
            this.groupStack.push(currentCtx);
            this.groupLevel++;
            this.current.activeSMask = null;
          },
          endGroup: function CanvasGraphics_endGroup(group) {
            this.groupLevel--;
            var groupCtx = this.ctx;
            this.ctx = this.groupStack.pop();

            if (this.ctx.imageSmoothingEnabled !== undefined) {
              this.ctx.imageSmoothingEnabled = false;
            } else {
              this.ctx.mozImageSmoothingEnabled = false;
            }

            if (group.smask) {
              this.tempSMask = this.smaskStack.pop();
            } else {
              this.ctx.drawImage(groupCtx.canvas, 0, 0);
            }

            this.restore();
          },
          beginAnnotations: function CanvasGraphics_beginAnnotations() {
            this.save();

            if (this.baseTransform) {
              this.ctx.setTransform.apply(this.ctx, this.baseTransform);
            }
          },
          endAnnotations: function CanvasGraphics_endAnnotations() {
            this.restore();
          },
          beginAnnotation: function CanvasGraphics_beginAnnotation(rect, transform, matrix) {
            this.save();
            resetCtxToDefault(this.ctx);
            this.current = new CanvasExtraState();

            if (Array.isArray(rect) && rect.length === 4) {
              var width = rect[2] - rect[0];
              var height = rect[3] - rect[1];
              this.ctx.rect(rect[0], rect[1], width, height);
              this.clip();
              this.endPath();
            }

            this.transform.apply(this, transform);
            this.transform.apply(this, matrix);
          },
          endAnnotation: function CanvasGraphics_endAnnotation() {
            this.restore();
          },
          paintJpegXObject: function CanvasGraphics_paintJpegXObject(objId, w, h) {
            var domImage = this.processingType3 ? this.commonObjs.get(objId) : this.objs.get(objId);

            if (!domImage) {
              (0, _util.warn)("Dependent image isn't ready yet");
              return;
            }

            this.save();
            var ctx = this.ctx;
            ctx.scale(1 / w, -1 / h);
            ctx.drawImage(domImage, 0, 0, domImage.width, domImage.height, 0, -h, w, h);

            if (this.imageLayer) {
              var currentTransform = ctx.mozCurrentTransformInverse;
              var position = this.getCanvasPosition(0, 0);
              this.imageLayer.appendImage({
                objId: objId,
                left: position[0],
                top: position[1],
                width: w / currentTransform[0],
                height: h / currentTransform[3]
              });
            }

            this.restore();
          },
          paintImageMaskXObject: function CanvasGraphics_paintImageMaskXObject(img) {
            var ctx = this.ctx;
            var width = img.width,
                height = img.height;
            var fillColor = this.current.fillColor;
            var isPatternFill = this.current.patternFill;
            var glyph = this.processingType3;

            if (COMPILE_TYPE3_GLYPHS && glyph && glyph.compiled === undefined) {
              if (width <= MAX_SIZE_TO_COMPILE && height <= MAX_SIZE_TO_COMPILE) {
                glyph.compiled = compileType3Glyph({
                  data: img.data,
                  width: width,
                  height: height
                });
              } else {
                glyph.compiled = null;
              }
            }

            if (glyph && glyph.compiled) {
              glyph.compiled(ctx);
              return;
            }

            var maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
            var maskCtx = maskCanvas.context;
            maskCtx.save();
            putBinaryImageMask(maskCtx, img);
            maskCtx.globalCompositeOperation = "source-in";
            maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
            maskCtx.fillRect(0, 0, width, height);
            maskCtx.restore();
            this.paintInlineImageXObject(maskCanvas.canvas);
          },
          paintImageMaskXObjectRepeat: function CanvasGraphics_paintImageMaskXObjectRepeat(imgData, scaleX, scaleY, positions) {
            var width = imgData.width;
            var height = imgData.height;
            var fillColor = this.current.fillColor;
            var isPatternFill = this.current.patternFill;
            var maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
            var maskCtx = maskCanvas.context;
            maskCtx.save();
            putBinaryImageMask(maskCtx, imgData);
            maskCtx.globalCompositeOperation = "source-in";
            maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
            maskCtx.fillRect(0, 0, width, height);
            maskCtx.restore();
            var ctx = this.ctx;

            for (var i = 0, ii = positions.length; i < ii; i += 2) {
              ctx.save();
              ctx.transform(scaleX, 0, 0, scaleY, positions[i], positions[i + 1]);
              ctx.scale(1, -1);
              ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
              ctx.restore();
            }
          },
          paintImageMaskXObjectGroup: function CanvasGraphics_paintImageMaskXObjectGroup(images) {
            var ctx = this.ctx;
            var fillColor = this.current.fillColor;
            var isPatternFill = this.current.patternFill;

            for (var i = 0, ii = images.length; i < ii; i++) {
              var image = images[i];
              var width = image.width,
                  height = image.height;
              var maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
              var maskCtx = maskCanvas.context;
              maskCtx.save();
              putBinaryImageMask(maskCtx, image);
              maskCtx.globalCompositeOperation = "source-in";
              maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
              maskCtx.fillRect(0, 0, width, height);
              maskCtx.restore();
              ctx.save();
              ctx.transform.apply(ctx, image.transform);
              ctx.scale(1, -1);
              ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
              ctx.restore();
            }
          },
          paintImageXObject: function CanvasGraphics_paintImageXObject(objId) {
            var imgData = this.processingType3 ? this.commonObjs.get(objId) : this.objs.get(objId);

            if (!imgData) {
              (0, _util.warn)("Dependent image isn't ready yet");
              return;
            }

            this.paintInlineImageXObject(imgData);
          },
          paintImageXObjectRepeat: function CanvasGraphics_paintImageXObjectRepeat(objId, scaleX, scaleY, positions) {
            var imgData = this.processingType3 ? this.commonObjs.get(objId) : this.objs.get(objId);

            if (!imgData) {
              (0, _util.warn)("Dependent image isn't ready yet");
              return;
            }

            var width = imgData.width;
            var height = imgData.height;
            var map = [];

            for (var i = 0, ii = positions.length; i < ii; i += 2) {
              map.push({
                transform: [scaleX, 0, 0, scaleY, positions[i], positions[i + 1]],
                x: 0,
                y: 0,
                w: width,
                h: height
              });
            }

            this.paintInlineImageXObjectGroup(imgData, map);
          },
          paintInlineImageXObject: function CanvasGraphics_paintInlineImageXObject(imgData) {
            var width = imgData.width;
            var height = imgData.height;
            var ctx = this.ctx;
            this.save();
            ctx.scale(1 / width, -1 / height);
            var currentTransform = ctx.mozCurrentTransformInverse;
            var a = currentTransform[0],
                b = currentTransform[1];
            var widthScale = Math.max(Math.sqrt(a * a + b * b), 1);
            var c = currentTransform[2],
                d = currentTransform[3];
            var heightScale = Math.max(Math.sqrt(c * c + d * d), 1);
            var imgToPaint, tmpCanvas;

            if (typeof HTMLElement === "function" && imgData instanceof HTMLElement || !imgData.data) {
              imgToPaint = imgData;
            } else {
              tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", width, height);
              var tmpCtx = tmpCanvas.context;
              putBinaryImageData(tmpCtx, imgData);
              imgToPaint = tmpCanvas.canvas;
            }

            var paintWidth = width,
                paintHeight = height;
            var tmpCanvasId = "prescale1";

            while (widthScale > 2 && paintWidth > 1 || heightScale > 2 && paintHeight > 1) {
              var newWidth = paintWidth,
                  newHeight = paintHeight;

              if (widthScale > 2 && paintWidth > 1) {
                newWidth = Math.ceil(paintWidth / 2);
                widthScale /= paintWidth / newWidth;
              }

              if (heightScale > 2 && paintHeight > 1) {
                newHeight = Math.ceil(paintHeight / 2);
                heightScale /= paintHeight / newHeight;
              }

              tmpCanvas = this.cachedCanvases.getCanvas(tmpCanvasId, newWidth, newHeight);
              tmpCtx = tmpCanvas.context;
              tmpCtx.clearRect(0, 0, newWidth, newHeight);
              tmpCtx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, 0, newWidth, newHeight);
              imgToPaint = tmpCanvas.canvas;
              paintWidth = newWidth;
              paintHeight = newHeight;
              tmpCanvasId = tmpCanvasId === "prescale1" ? "prescale2" : "prescale1";
            }

            ctx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, -height, width, height);

            if (this.imageLayer) {
              var position = this.getCanvasPosition(0, -height);
              this.imageLayer.appendImage({
                imgData: imgData,
                left: position[0],
                top: position[1],
                width: width / currentTransform[0],
                height: height / currentTransform[3]
              });
            }

            this.restore();
          },
          paintInlineImageXObjectGroup: function CanvasGraphics_paintInlineImageXObjectGroup(imgData, map) {
            var ctx = this.ctx;
            var w = imgData.width;
            var h = imgData.height;
            var tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", w, h);
            var tmpCtx = tmpCanvas.context;
            putBinaryImageData(tmpCtx, imgData);

            for (var i = 0, ii = map.length; i < ii; i++) {
              var entry = map[i];
              ctx.save();
              ctx.transform.apply(ctx, entry.transform);
              ctx.scale(1, -1);
              ctx.drawImage(tmpCanvas.canvas, entry.x, entry.y, entry.w, entry.h, 0, -1, 1, 1);

              if (this.imageLayer) {
                var position = this.getCanvasPosition(entry.x, entry.y);
                this.imageLayer.appendImage({
                  imgData: imgData,
                  left: position[0],
                  top: position[1],
                  width: w,
                  height: h
                });
              }

              ctx.restore();
            }
          },
          paintSolidColorImageMask: function CanvasGraphics_paintSolidColorImageMask() {
            this.ctx.fillRect(0, 0, 1, 1);
          },
          paintXObject: function CanvasGraphics_paintXObject() {
            (0, _util.warn)("Unsupported 'paintXObject' command.");
          },
          markPoint: function CanvasGraphics_markPoint(tag) {},
          markPointProps: function CanvasGraphics_markPointProps(tag, properties) {},
          beginMarkedContent: function CanvasGraphics_beginMarkedContent(tag) {},
          beginMarkedContentProps: function CanvasGraphics_beginMarkedContentProps(tag, properties) {},
          endMarkedContent: function CanvasGraphics_endMarkedContent() {},
          beginCompat: function CanvasGraphics_beginCompat() {},
          endCompat: function CanvasGraphics_endCompat() {},
          consumePath: function CanvasGraphics_consumePath() {
            var ctx = this.ctx;

            if (this.pendingClip) {
              if (this.pendingClip === EO_CLIP) {
                ctx.clip("evenodd");
              } else {
                ctx.clip();
              }

              this.pendingClip = null;
            }

            ctx.beginPath();
          },
          getSinglePixelWidth: function getSinglePixelWidth(scale) {
            if (this._cachedGetSinglePixelWidth === null) {
              var inverse = this.ctx.mozCurrentTransformInverse;
              this._cachedGetSinglePixelWidth = Math.sqrt(Math.max(inverse[0] * inverse[0] + inverse[1] * inverse[1], inverse[2] * inverse[2] + inverse[3] * inverse[3]));
            }

            return this._cachedGetSinglePixelWidth;
          },
          getCanvasPosition: function CanvasGraphics_getCanvasPosition(x, y) {
            var transform = this.ctx.mozCurrentTransform;
            return [transform[0] * x + transform[2] * y + transform[4], transform[1] * x + transform[3] * y + transform[5]];
          }
        };

        for (var op in _util.OPS) {
          CanvasGraphics.prototype[_util.OPS[op]] = CanvasGraphics.prototype[op];
        }

        return CanvasGraphics;
      }();

      exports.CanvasGraphics = CanvasGraphics;
      /***/
    },
    /* 9 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getShadingPatternFromIR = getShadingPatternFromIR;
      exports.TilingPattern = void 0;

      var _util = __w_pdfjs_require__(1);

      var ShadingIRs = {};

      function applyBoundingBox(ctx, bbox) {
        if (!bbox || typeof Path2D === "undefined") {
          return;
        }

        var width = bbox[2] - bbox[0];
        var height = bbox[3] - bbox[1];
        var region = new Path2D();
        region.rect(bbox[0], bbox[1], width, height);
        ctx.clip(region);
      }

      ShadingIRs.RadialAxial = {
        fromIR: function RadialAxial_fromIR(raw) {
          var type = raw[1];
          var bbox = raw[2];
          var colorStops = raw[3];
          var p0 = raw[4];
          var p1 = raw[5];
          var r0 = raw[6];
          var r1 = raw[7];
          return {
            type: "Pattern",
            getPattern: function RadialAxial_getPattern(ctx) {
              applyBoundingBox(ctx, bbox);
              var grad;

              if (type === "axial") {
                grad = ctx.createLinearGradient(p0[0], p0[1], p1[0], p1[1]);
              } else if (type === "radial") {
                grad = ctx.createRadialGradient(p0[0], p0[1], r0, p1[0], p1[1], r1);
              }

              for (var i = 0, ii = colorStops.length; i < ii; ++i) {
                var c = colorStops[i];
                grad.addColorStop(c[0], c[1]);
              }

              return grad;
            }
          };
        }
      };

      var createMeshCanvas = function createMeshCanvasClosure() {
        function drawTriangle(data, context, p1, p2, p3, c1, c2, c3) {
          var coords = context.coords,
              colors = context.colors;
          var bytes = data.data,
              rowSize = data.width * 4;
          var tmp;

          if (coords[p1 + 1] > coords[p2 + 1]) {
            tmp = p1;
            p1 = p2;
            p2 = tmp;
            tmp = c1;
            c1 = c2;
            c2 = tmp;
          }

          if (coords[p2 + 1] > coords[p3 + 1]) {
            tmp = p2;
            p2 = p3;
            p3 = tmp;
            tmp = c2;
            c2 = c3;
            c3 = tmp;
          }

          if (coords[p1 + 1] > coords[p2 + 1]) {
            tmp = p1;
            p1 = p2;
            p2 = tmp;
            tmp = c1;
            c1 = c2;
            c2 = tmp;
          }

          var x1 = (coords[p1] + context.offsetX) * context.scaleX;
          var y1 = (coords[p1 + 1] + context.offsetY) * context.scaleY;
          var x2 = (coords[p2] + context.offsetX) * context.scaleX;
          var y2 = (coords[p2 + 1] + context.offsetY) * context.scaleY;
          var x3 = (coords[p3] + context.offsetX) * context.scaleX;
          var y3 = (coords[p3 + 1] + context.offsetY) * context.scaleY;

          if (y1 >= y3) {
            return;
          }

          var c1r = colors[c1],
              c1g = colors[c1 + 1],
              c1b = colors[c1 + 2];
          var c2r = colors[c2],
              c2g = colors[c2 + 1],
              c2b = colors[c2 + 2];
          var c3r = colors[c3],
              c3g = colors[c3 + 1],
              c3b = colors[c3 + 2];
          var minY = Math.round(y1),
              maxY = Math.round(y3);
          var xa, car, cag, cab;
          var xb, cbr, cbg, cbb;

          for (var y = minY; y <= maxY; y++) {
            if (y < y2) {
              var _k = void 0;

              if (y < y1) {
                _k = 0;
              } else if (y1 === y2) {
                _k = 1;
              } else {
                _k = (y1 - y) / (y1 - y2);
              }

              xa = x1 - (x1 - x2) * _k;
              car = c1r - (c1r - c2r) * _k;
              cag = c1g - (c1g - c2g) * _k;
              cab = c1b - (c1b - c2b) * _k;
            } else {
              var _k2 = void 0;

              if (y > y3) {
                _k2 = 1;
              } else if (y2 === y3) {
                _k2 = 0;
              } else {
                _k2 = (y2 - y) / (y2 - y3);
              }

              xa = x2 - (x2 - x3) * _k2;
              car = c2r - (c2r - c3r) * _k2;
              cag = c2g - (c2g - c3g) * _k2;
              cab = c2b - (c2b - c3b) * _k2;
            }

            var k = void 0;

            if (y < y1) {
              k = 0;
            } else if (y > y3) {
              k = 1;
            } else {
              k = (y1 - y) / (y1 - y3);
            }

            xb = x1 - (x1 - x3) * k;
            cbr = c1r - (c1r - c3r) * k;
            cbg = c1g - (c1g - c3g) * k;
            cbb = c1b - (c1b - c3b) * k;
            var x1_ = Math.round(Math.min(xa, xb));
            var x2_ = Math.round(Math.max(xa, xb));
            var j = rowSize * y + x1_ * 4;

            for (var x = x1_; x <= x2_; x++) {
              var _k3 = (xa - x) / (xa - xb);

              if (_k3 < 0) {
                _k3 = 0;
              } else if (_k3 > 1) {
                _k3 = 1;
              }

              bytes[j++] = car - (car - cbr) * _k3 | 0;
              bytes[j++] = cag - (cag - cbg) * _k3 | 0;
              bytes[j++] = cab - (cab - cbb) * _k3 | 0;
              bytes[j++] = 255;
            }
          }
        }

        function drawFigure(data, figure, context) {
          var ps = figure.coords;
          var cs = figure.colors;
          var i, ii;

          switch (figure.type) {
            case "lattice":
              var verticesPerRow = figure.verticesPerRow;
              var rows = Math.floor(ps.length / verticesPerRow) - 1;
              var cols = verticesPerRow - 1;

              for (i = 0; i < rows; i++) {
                var q = i * verticesPerRow;

                for (var j = 0; j < cols; j++, q++) {
                  drawTriangle(data, context, ps[q], ps[q + 1], ps[q + verticesPerRow], cs[q], cs[q + 1], cs[q + verticesPerRow]);
                  drawTriangle(data, context, ps[q + verticesPerRow + 1], ps[q + 1], ps[q + verticesPerRow], cs[q + verticesPerRow + 1], cs[q + 1], cs[q + verticesPerRow]);
                }
              }

              break;

            case "triangles":
              for (i = 0, ii = ps.length; i < ii; i += 3) {
                drawTriangle(data, context, ps[i], ps[i + 1], ps[i + 2], cs[i], cs[i + 1], cs[i + 2]);
              }

              break;

            default:
              throw new Error("illegal figure");
          }
        }

        function createMeshCanvas(bounds, combinesScale, coords, colors, figures, backgroundColor, cachedCanvases, webGLContext) {
          var EXPECTED_SCALE = 1.1;
          var MAX_PATTERN_SIZE = 3000;
          var BORDER_SIZE = 2;
          var offsetX = Math.floor(bounds[0]);
          var offsetY = Math.floor(bounds[1]);
          var boundsWidth = Math.ceil(bounds[2]) - offsetX;
          var boundsHeight = Math.ceil(bounds[3]) - offsetY;
          var width = Math.min(Math.ceil(Math.abs(boundsWidth * combinesScale[0] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
          var height = Math.min(Math.ceil(Math.abs(boundsHeight * combinesScale[1] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
          var scaleX = boundsWidth / width;
          var scaleY = boundsHeight / height;
          var context = {
            coords: coords,
            colors: colors,
            offsetX: -offsetX,
            offsetY: -offsetY,
            scaleX: 1 / scaleX,
            scaleY: 1 / scaleY
          };
          var paddedWidth = width + BORDER_SIZE * 2;
          var paddedHeight = height + BORDER_SIZE * 2;
          var canvas, tmpCanvas, i, ii;

          if (webGLContext.isEnabled) {
            canvas = webGLContext.drawFigures({
              width: width,
              height: height,
              backgroundColor: backgroundColor,
              figures: figures,
              context: context
            });
            tmpCanvas = cachedCanvases.getCanvas("mesh", paddedWidth, paddedHeight, false);
            tmpCanvas.context.drawImage(canvas, BORDER_SIZE, BORDER_SIZE);
            canvas = tmpCanvas.canvas;
          } else {
            tmpCanvas = cachedCanvases.getCanvas("mesh", paddedWidth, paddedHeight, false);
            var tmpCtx = tmpCanvas.context;
            var data = tmpCtx.createImageData(width, height);

            if (backgroundColor) {
              var bytes = data.data;

              for (i = 0, ii = bytes.length; i < ii; i += 4) {
                bytes[i] = backgroundColor[0];
                bytes[i + 1] = backgroundColor[1];
                bytes[i + 2] = backgroundColor[2];
                bytes[i + 3] = 255;
              }
            }

            for (i = 0; i < figures.length; i++) {
              drawFigure(data, figures[i], context);
            }

            tmpCtx.putImageData(data, BORDER_SIZE, BORDER_SIZE);
            canvas = tmpCanvas.canvas;
          }

          return {
            canvas: canvas,
            offsetX: offsetX - BORDER_SIZE * scaleX,
            offsetY: offsetY - BORDER_SIZE * scaleY,
            scaleX: scaleX,
            scaleY: scaleY
          };
        }

        return createMeshCanvas;
      }();

      ShadingIRs.Mesh = {
        fromIR: function Mesh_fromIR(raw) {
          var coords = raw[2];
          var colors = raw[3];
          var figures = raw[4];
          var bounds = raw[5];
          var matrix = raw[6];
          var bbox = raw[7];
          var background = raw[8];
          return {
            type: "Pattern",
            getPattern: function Mesh_getPattern(ctx, owner, shadingFill) {
              applyBoundingBox(ctx, bbox);
              var scale;

              if (shadingFill) {
                scale = _util.Util.singularValueDecompose2dScale(ctx.mozCurrentTransform);
              } else {
                scale = _util.Util.singularValueDecompose2dScale(owner.baseTransform);

                if (matrix) {
                  var matrixScale = _util.Util.singularValueDecompose2dScale(matrix);

                  scale = [scale[0] * matrixScale[0], scale[1] * matrixScale[1]];
                }
              }

              var temporaryPatternCanvas = createMeshCanvas(bounds, scale, coords, colors, figures, shadingFill ? null : background, owner.cachedCanvases, owner.webGLContext);

              if (!shadingFill) {
                ctx.setTransform.apply(ctx, owner.baseTransform);

                if (matrix) {
                  ctx.transform.apply(ctx, matrix);
                }
              }

              ctx.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
              ctx.scale(temporaryPatternCanvas.scaleX, temporaryPatternCanvas.scaleY);
              return ctx.createPattern(temporaryPatternCanvas.canvas, "no-repeat");
            }
          };
        }
      };
      ShadingIRs.Dummy = {
        fromIR: function Dummy_fromIR() {
          return {
            type: "Pattern",
            getPattern: function Dummy_fromIR_getPattern() {
              return "hotpink";
            }
          };
        }
      };

      function getShadingPatternFromIR(raw) {
        var shadingIR = ShadingIRs[raw[0]];

        if (!shadingIR) {
          throw new Error("Unknown IR type: ".concat(raw[0]));
        }

        return shadingIR.fromIR(raw);
      }

      var TilingPattern = function TilingPatternClosure() {
        var PaintType = {
          COLORED: 1,
          UNCOLORED: 2
        };
        var MAX_PATTERN_SIZE = 3000;

        function TilingPattern(IR, color, ctx, canvasGraphicsFactory, baseTransform) {
          this.operatorList = IR[2];
          this.matrix = IR[3] || [1, 0, 0, 1, 0, 0];
          this.bbox = IR[4];
          this.xstep = IR[5];
          this.ystep = IR[6];
          this.paintType = IR[7];
          this.tilingType = IR[8];
          this.color = color;
          this.canvasGraphicsFactory = canvasGraphicsFactory;
          this.baseTransform = baseTransform;
          this.type = "Pattern";
          this.ctx = ctx;
        }

        TilingPattern.prototype = {
          createPatternCanvas: function TilinPattern_createPatternCanvas(owner) {
            var operatorList = this.operatorList;
            var bbox = this.bbox;
            var xstep = this.xstep;
            var ystep = this.ystep;
            var paintType = this.paintType;
            var tilingType = this.tilingType;
            var color = this.color;
            var canvasGraphicsFactory = this.canvasGraphicsFactory;
            (0, _util.info)("TilingType: " + tilingType);
            var x0 = bbox[0],
                y0 = bbox[1],
                x1 = bbox[2],
                y1 = bbox[3];

            var matrixScale = _util.Util.singularValueDecompose2dScale(this.matrix);

            var curMatrixScale = _util.Util.singularValueDecompose2dScale(this.baseTransform);

            var combinedScale = [matrixScale[0] * curMatrixScale[0], matrixScale[1] * curMatrixScale[1]];
            var dimx = this.getSizeAndScale(xstep, this.ctx.canvas.width, combinedScale[0]);
            var dimy = this.getSizeAndScale(ystep, this.ctx.canvas.height, combinedScale[1]);
            var tmpCanvas = owner.cachedCanvases.getCanvas("pattern", dimx.size, dimy.size, true);
            var tmpCtx = tmpCanvas.context;
            var graphics = canvasGraphicsFactory.createCanvasGraphics(tmpCtx);
            graphics.groupLevel = owner.groupLevel;
            this.setFillAndStrokeStyleToContext(graphics, paintType, color);
            graphics.transform(dimx.scale, 0, 0, dimy.scale, 0, 0);
            graphics.transform(1, 0, 0, 1, -x0, -y0);
            this.clipBbox(graphics, bbox, x0, y0, x1, y1);
            graphics.executeOperatorList(operatorList);
            this.ctx.transform(1, 0, 0, 1, x0, y0);
            this.ctx.scale(1 / dimx.scale, 1 / dimy.scale);
            return tmpCanvas.canvas;
          },
          getSizeAndScale: function TilingPattern_getSizeAndScale(step, realOutputSize, scale) {
            step = Math.abs(step);
            var maxSize = Math.max(MAX_PATTERN_SIZE, realOutputSize);
            var size = Math.ceil(step * scale);

            if (size >= maxSize) {
              size = maxSize;
            } else {
              scale = size / step;
            }

            return {
              scale: scale,
              size: size
            };
          },
          clipBbox: function clipBbox(graphics, bbox, x0, y0, x1, y1) {
            if (Array.isArray(bbox) && bbox.length === 4) {
              var bboxWidth = x1 - x0;
              var bboxHeight = y1 - y0;
              graphics.ctx.rect(x0, y0, bboxWidth, bboxHeight);
              graphics.clip();
              graphics.endPath();
            }
          },
          setFillAndStrokeStyleToContext: function setFillAndStrokeStyleToContext(graphics, paintType, color) {
            var context = graphics.ctx,
                current = graphics.current;

            switch (paintType) {
              case PaintType.COLORED:
                var ctx = this.ctx;
                context.fillStyle = ctx.fillStyle;
                context.strokeStyle = ctx.strokeStyle;
                current.fillColor = ctx.fillStyle;
                current.strokeColor = ctx.strokeStyle;
                break;

              case PaintType.UNCOLORED:
                var cssColor = _util.Util.makeCssRgb(color[0], color[1], color[2]);

                context.fillStyle = cssColor;
                context.strokeStyle = cssColor;
                current.fillColor = cssColor;
                current.strokeColor = cssColor;
                break;

              default:
                throw new _util.FormatError("Unsupported paint type: ".concat(paintType));
            }
          },
          getPattern: function TilingPattern_getPattern(ctx, owner) {
            ctx = this.ctx;
            ctx.setTransform.apply(ctx, this.baseTransform);
            ctx.transform.apply(ctx, this.matrix);
            var temporaryPatternCanvas = this.createPatternCanvas(owner);
            return ctx.createPattern(temporaryPatternCanvas, "repeat");
          }
        };
        return TilingPattern;
      }();

      exports.TilingPattern = TilingPattern;
      /***/
    },
    /* 10 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.GlobalWorkerOptions = void 0;
      var GlobalWorkerOptions = Object.create(null);
      exports.GlobalWorkerOptions = GlobalWorkerOptions;
      GlobalWorkerOptions.workerPort = GlobalWorkerOptions.workerPort === undefined ? null : GlobalWorkerOptions.workerPort;
      GlobalWorkerOptions.workerSrc = GlobalWorkerOptions.workerSrc === undefined ? "" : GlobalWorkerOptions.workerSrc;
      /***/
    },
    /* 11 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.MessageHandler = void 0;

      var _util = __w_pdfjs_require__(1);

      var CallbackKind = {
        UNKNOWN: 0,
        DATA: 1,
        ERROR: 2
      };
      var StreamKind = {
        UNKNOWN: 0,
        CANCEL: 1,
        CANCEL_COMPLETE: 2,
        CLOSE: 3,
        ENQUEUE: 4,
        ERROR: 5,
        PULL: 6,
        PULL_COMPLETE: 7,
        START_COMPLETE: 8
      };

      function wrapReason(reason) {
        if (_typeof(reason) !== "object" || reason === null) {
          return reason;
        }

        switch (reason.name) {
          case "AbortException":
            return new _util.AbortException(reason.message);

          case "MissingPDFException":
            return new _util.MissingPDFException(reason.message);

          case "UnexpectedResponseException":
            return new _util.UnexpectedResponseException(reason.message, reason.status);

          case "UnknownErrorException":
            return new _util.UnknownErrorException(reason.message, reason.details);

          default:
            return new _util.UnknownErrorException(reason.message, reason.toString());
        }
      }

      var MessageHandler = /*#__PURE__*/function () {
        function MessageHandler(sourceName, targetName, comObj) {
          var _this27 = this;

          _classCallCheck(this, MessageHandler);

          this.sourceName = sourceName;
          this.targetName = targetName;
          this.comObj = comObj;
          this.callbackId = 1;
          this.streamId = 1;
          this.postMessageTransfers = true;
          this.streamSinks = Object.create(null);
          this.streamControllers = Object.create(null);
          this.callbackCapabilities = Object.create(null);
          this.actionHandler = Object.create(null);

          this._onComObjOnMessage = function (event) {
            var data = event.data;

            if (data.targetName !== _this27.sourceName) {
              return;
            }

            if (data.stream) {
              _this27._processStreamMessage(data);

              return;
            }

            if (data.callback) {
              var callbackId = data.callbackId;
              var capability = _this27.callbackCapabilities[callbackId];

              if (!capability) {
                throw new Error("Cannot resolve callback ".concat(callbackId));
              }

              delete _this27.callbackCapabilities[callbackId];

              if (data.callback === CallbackKind.DATA) {
                capability.resolve(data.data);
              } else if (data.callback === CallbackKind.ERROR) {
                capability.reject(wrapReason(data.reason));
              } else {
                throw new Error("Unexpected callback case");
              }

              return;
            }

            var action = _this27.actionHandler[data.action];

            if (!action) {
              throw new Error("Unknown action from worker: ".concat(data.action));
            }

            if (data.callbackId) {
              var _sourceName = _this27.sourceName;
              var _targetName = data.sourceName;
              new Promise(function (resolve) {
                resolve(action(data.data));
              }).then(function (result) {
                comObj.postMessage({
                  sourceName: _sourceName,
                  targetName: _targetName,
                  callback: CallbackKind.DATA,
                  callbackId: data.callbackId,
                  data: result
                });
              }, function (reason) {
                comObj.postMessage({
                  sourceName: _sourceName,
                  targetName: _targetName,
                  callback: CallbackKind.ERROR,
                  callbackId: data.callbackId,
                  reason: wrapReason(reason)
                });
              });
              return;
            }

            if (data.streamId) {
              _this27._createStreamSink(data);

              return;
            }

            action(data.data);
          };

          comObj.addEventListener("message", this._onComObjOnMessage);
        }

        _createClass(MessageHandler, [{
          key: "on",
          value: function on(actionName, handler) {
            var ah = this.actionHandler;

            if (ah[actionName]) {
              throw new Error("There is already an actionName called \"".concat(actionName, "\""));
            }

            ah[actionName] = handler;
          }
        }, {
          key: "send",
          value: function send(actionName, data, transfers) {
            this._postMessage({
              sourceName: this.sourceName,
              targetName: this.targetName,
              action: actionName,
              data: data
            }, transfers);
          }
        }, {
          key: "sendWithPromise",
          value: function sendWithPromise(actionName, data, transfers) {
            var callbackId = this.callbackId++;
            var capability = (0, _util.createPromiseCapability)();
            this.callbackCapabilities[callbackId] = capability;

            try {
              this._postMessage({
                sourceName: this.sourceName,
                targetName: this.targetName,
                action: actionName,
                callbackId: callbackId,
                data: data
              }, transfers);
            } catch (ex) {
              capability.reject(ex);
            }

            return capability.promise;
          }
        }, {
          key: "sendWithStream",
          value: function sendWithStream(actionName, data, queueingStrategy, transfers) {
            var _this28 = this;

            var streamId = this.streamId++;
            var sourceName = this.sourceName;
            var targetName = this.targetName;
            var comObj = this.comObj;
            return new ReadableStream({
              start: function start(controller) {
                var startCapability = (0, _util.createPromiseCapability)();
                _this28.streamControllers[streamId] = {
                  controller: controller,
                  startCall: startCapability,
                  pullCall: null,
                  cancelCall: null,
                  isClosed: false
                };

                _this28._postMessage({
                  sourceName: sourceName,
                  targetName: targetName,
                  action: actionName,
                  streamId: streamId,
                  data: data,
                  desiredSize: controller.desiredSize
                }, transfers);

                return startCapability.promise;
              },
              pull: function pull(controller) {
                var pullCapability = (0, _util.createPromiseCapability)();
                _this28.streamControllers[streamId].pullCall = pullCapability;
                comObj.postMessage({
                  sourceName: sourceName,
                  targetName: targetName,
                  stream: StreamKind.PULL,
                  streamId: streamId,
                  desiredSize: controller.desiredSize
                });
                return pullCapability.promise;
              },
              cancel: function cancel(reason) {
                (0, _util.assert)(reason instanceof Error, "cancel must have a valid reason");
                var cancelCapability = (0, _util.createPromiseCapability)();
                _this28.streamControllers[streamId].cancelCall = cancelCapability;
                _this28.streamControllers[streamId].isClosed = true;
                comObj.postMessage({
                  sourceName: sourceName,
                  targetName: targetName,
                  stream: StreamKind.CANCEL,
                  streamId: streamId,
                  reason: wrapReason(reason)
                });
                return cancelCapability.promise;
              }
            }, queueingStrategy);
          }
        }, {
          key: "_createStreamSink",
          value: function _createStreamSink(data) {
            var self = this;
            var action = this.actionHandler[data.action];
            var streamId = data.streamId;
            var sourceName = this.sourceName;
            var targetName = data.sourceName;
            var comObj = this.comObj;
            var streamSink = {
              enqueue: function enqueue(chunk) {
                var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                var transfers = arguments.length > 2 ? arguments[2] : undefined;

                if (this.isCancelled) {
                  return;
                }

                var lastDesiredSize = this.desiredSize;
                this.desiredSize -= size;

                if (lastDesiredSize > 0 && this.desiredSize <= 0) {
                  this.sinkCapability = (0, _util.createPromiseCapability)();
                  this.ready = this.sinkCapability.promise;
                }

                self._postMessage({
                  sourceName: sourceName,
                  targetName: targetName,
                  stream: StreamKind.ENQUEUE,
                  streamId: streamId,
                  chunk: chunk
                }, transfers);
              },
              close: function close() {
                if (this.isCancelled) {
                  return;
                }

                this.isCancelled = true;
                comObj.postMessage({
                  sourceName: sourceName,
                  targetName: targetName,
                  stream: StreamKind.CLOSE,
                  streamId: streamId
                });
                delete self.streamSinks[streamId];
              },
              error: function error(reason) {
                (0, _util.assert)(reason instanceof Error, "error must have a valid reason");

                if (this.isCancelled) {
                  return;
                }

                this.isCancelled = true;
                comObj.postMessage({
                  sourceName: sourceName,
                  targetName: targetName,
                  stream: StreamKind.ERROR,
                  streamId: streamId,
                  reason: wrapReason(reason)
                });
              },
              sinkCapability: (0, _util.createPromiseCapability)(),
              onPull: null,
              onCancel: null,
              isCancelled: false,
              desiredSize: data.desiredSize,
              ready: null
            };
            streamSink.sinkCapability.resolve();
            streamSink.ready = streamSink.sinkCapability.promise;
            this.streamSinks[streamId] = streamSink;
            new Promise(function (resolve) {
              resolve(action(data.data, streamSink));
            }).then(function () {
              comObj.postMessage({
                sourceName: sourceName,
                targetName: targetName,
                stream: StreamKind.START_COMPLETE,
                streamId: streamId,
                success: true
              });
            }, function (reason) {
              comObj.postMessage({
                sourceName: sourceName,
                targetName: targetName,
                stream: StreamKind.START_COMPLETE,
                streamId: streamId,
                reason: wrapReason(reason)
              });
            });
          }
        }, {
          key: "_processStreamMessage",
          value: function _processStreamMessage(data) {
            var streamId = data.streamId;
            var sourceName = this.sourceName;
            var targetName = data.sourceName;
            var comObj = this.comObj;

            switch (data.stream) {
              case StreamKind.START_COMPLETE:
                if (data.success) {
                  this.streamControllers[streamId].startCall.resolve();
                } else {
                  this.streamControllers[streamId].startCall.reject(wrapReason(data.reason));
                }

                break;

              case StreamKind.PULL_COMPLETE:
                if (data.success) {
                  this.streamControllers[streamId].pullCall.resolve();
                } else {
                  this.streamControllers[streamId].pullCall.reject(wrapReason(data.reason));
                }

                break;

              case StreamKind.PULL:
                if (!this.streamSinks[streamId]) {
                  comObj.postMessage({
                    sourceName: sourceName,
                    targetName: targetName,
                    stream: StreamKind.PULL_COMPLETE,
                    streamId: streamId,
                    success: true
                  });
                  break;
                }

                if (this.streamSinks[streamId].desiredSize <= 0 && data.desiredSize > 0) {
                  this.streamSinks[streamId].sinkCapability.resolve();
                }

                this.streamSinks[streamId].desiredSize = data.desiredSize;
                var onPull = this.streamSinks[data.streamId].onPull;
                new Promise(function (resolve) {
                  resolve(onPull && onPull());
                }).then(function () {
                  comObj.postMessage({
                    sourceName: sourceName,
                    targetName: targetName,
                    stream: StreamKind.PULL_COMPLETE,
                    streamId: streamId,
                    success: true
                  });
                }, function (reason) {
                  comObj.postMessage({
                    sourceName: sourceName,
                    targetName: targetName,
                    stream: StreamKind.PULL_COMPLETE,
                    streamId: streamId,
                    reason: wrapReason(reason)
                  });
                });
                break;

              case StreamKind.ENQUEUE:
                (0, _util.assert)(this.streamControllers[streamId], "enqueue should have stream controller");

                if (this.streamControllers[streamId].isClosed) {
                  break;
                }

                this.streamControllers[streamId].controller.enqueue(data.chunk);
                break;

              case StreamKind.CLOSE:
                (0, _util.assert)(this.streamControllers[streamId], "close should have stream controller");

                if (this.streamControllers[streamId].isClosed) {
                  break;
                }

                this.streamControllers[streamId].isClosed = true;
                this.streamControllers[streamId].controller.close();

                this._deleteStreamController(streamId);

                break;

              case StreamKind.ERROR:
                (0, _util.assert)(this.streamControllers[streamId], "error should have stream controller");
                this.streamControllers[streamId].controller.error(wrapReason(data.reason));

                this._deleteStreamController(streamId);

                break;

              case StreamKind.CANCEL_COMPLETE:
                if (data.success) {
                  this.streamControllers[streamId].cancelCall.resolve();
                } else {
                  this.streamControllers[streamId].cancelCall.reject(wrapReason(data.reason));
                }

                this._deleteStreamController(streamId);

                break;

              case StreamKind.CANCEL:
                if (!this.streamSinks[streamId]) {
                  break;
                }

                var onCancel = this.streamSinks[data.streamId].onCancel;
                new Promise(function (resolve) {
                  resolve(onCancel && onCancel(wrapReason(data.reason)));
                }).then(function () {
                  comObj.postMessage({
                    sourceName: sourceName,
                    targetName: targetName,
                    stream: StreamKind.CANCEL_COMPLETE,
                    streamId: streamId,
                    success: true
                  });
                }, function (reason) {
                  comObj.postMessage({
                    sourceName: sourceName,
                    targetName: targetName,
                    stream: StreamKind.CANCEL_COMPLETE,
                    streamId: streamId,
                    reason: wrapReason(reason)
                  });
                });
                this.streamSinks[streamId].sinkCapability.reject(wrapReason(data.reason));
                this.streamSinks[streamId].isCancelled = true;
                delete this.streamSinks[streamId];
                break;

              default:
                throw new Error("Unexpected stream case");
            }
          }
        }, {
          key: "_deleteStreamController",
          value: function () {
            var _deleteStreamController2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(streamId) {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return Promise.allSettled([this.streamControllers[streamId].startCall, this.streamControllers[streamId].pullCall, this.streamControllers[streamId].cancelCall].map(function (capability) {
                        return capability && capability.promise;
                      }));

                    case 2:
                      delete this.streamControllers[streamId];

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function _deleteStreamController(_x5) {
              return _deleteStreamController2.apply(this, arguments);
            }

            return _deleteStreamController;
          }()
        }, {
          key: "_postMessage",
          value: function _postMessage(message, transfers) {
            if (transfers && this.postMessageTransfers) {
              this.comObj.postMessage(message, transfers);
            } else {
              this.comObj.postMessage(message);
            }
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.comObj.removeEventListener("message", this._onComObjOnMessage);
          }
        }]);

        return MessageHandler;
      }();

      exports.MessageHandler = MessageHandler;
      /***/
    },
    /* 12 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Metadata = void 0;

      var _util = __w_pdfjs_require__(1);

      var _xml_parser = __w_pdfjs_require__(13);

      var Metadata = /*#__PURE__*/function () {
        function Metadata(data) {
          _classCallCheck(this, Metadata);

          (0, _util.assert)(typeof data === "string", "Metadata: input is not a string");
          data = this._repair(data);
          var parser = new _xml_parser.SimpleXMLParser();
          var xmlDocument = parser.parseFromString(data);
          this._metadataMap = new Map();

          if (xmlDocument) {
            this._parse(xmlDocument);
          }
        }

        _createClass(Metadata, [{
          key: "_repair",
          value: function _repair(data) {
            return data.replace(/^[^<]+/, "").replace(/>\\376\\377([^<]+)/g, function (all, codes) {
              var bytes = codes.replace(/\\([0-3])([0-7])([0-7])/g, function (code, d1, d2, d3) {
                return String.fromCharCode(d1 * 64 + d2 * 8 + d3 * 1);
              }).replace(/&(amp|apos|gt|lt|quot);/g, function (str, name) {
                switch (name) {
                  case "amp":
                    return "&";

                  case "apos":
                    return "'";

                  case "gt":
                    return ">";

                  case "lt":
                    return "<";

                  case "quot":
                    return '"';
                }

                throw new Error("_repair: ".concat(name, " isn't defined."));
              });
              var chars = "";

              for (var i = 0, ii = bytes.length; i < ii; i += 2) {
                var code = bytes.charCodeAt(i) * 256 + bytes.charCodeAt(i + 1);

                if (code >= 32 && code < 127 && code !== 60 && code !== 62 && code !== 38) {
                  chars += String.fromCharCode(code);
                } else {
                  chars += "&#x" + (0x10000 + code).toString(16).substring(1) + ";";
                }
              }

              return ">" + chars;
            });
          }
        }, {
          key: "_parse",
          value: function _parse(xmlDocument) {
            var rdf = xmlDocument.documentElement;

            if (rdf.nodeName.toLowerCase() !== "rdf:rdf") {
              rdf = rdf.firstChild;

              while (rdf && rdf.nodeName.toLowerCase() !== "rdf:rdf") {
                rdf = rdf.nextSibling;
              }
            }

            var nodeName = rdf ? rdf.nodeName.toLowerCase() : null;

            if (!rdf || nodeName !== "rdf:rdf" || !rdf.hasChildNodes()) {
              return;
            }

            var children = rdf.childNodes;

            for (var i = 0, ii = children.length; i < ii; i++) {
              var desc = children[i];

              if (desc.nodeName.toLowerCase() !== "rdf:description") {
                continue;
              }

              for (var j = 0, jj = desc.childNodes.length; j < jj; j++) {
                if (desc.childNodes[j].nodeName.toLowerCase() !== "#text") {
                  var entry = desc.childNodes[j];
                  var name = entry.nodeName.toLowerCase();

                  this._metadataMap.set(name, entry.textContent.trim());
                }
              }
            }
          }
        }, {
          key: "get",
          value: function get(name) {
            return this._metadataMap.has(name) ? this._metadataMap.get(name) : null;
          }
        }, {
          key: "getAll",
          value: function getAll() {
            var obj = Object.create(null);

            var _iterator8 = _createForOfIteratorHelper(this._metadataMap),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var _step8$value = _slicedToArray(_step8.value, 2),
                    key = _step8$value[0],
                    value = _step8$value[1];

                obj[key] = value;
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }

            return obj;
          }
        }, {
          key: "has",
          value: function has(name) {
            return this._metadataMap.has(name);
          }
        }]);

        return Metadata;
      }();

      exports.Metadata = Metadata;
      /***/
    },
    /* 13 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SimpleXMLParser = void 0;
      var XMLParserErrorCode = {
        NoError: 0,
        EndOfDocument: -1,
        UnterminatedCdat: -2,
        UnterminatedXmlDeclaration: -3,
        UnterminatedDoctypeDeclaration: -4,
        UnterminatedComment: -5,
        MalformedElement: -6,
        OutOfMemory: -7,
        UnterminatedAttributeValue: -8,
        UnterminatedElement: -9,
        ElementNeverBegun: -10
      };

      function isWhitespace(s, index) {
        var ch = s[index];
        return ch === " " || ch === "\n" || ch === "\r" || ch === "\t";
      }

      function isWhitespaceString(s) {
        for (var i = 0, ii = s.length; i < ii; i++) {
          if (!isWhitespace(s, i)) {
            return false;
          }
        }

        return true;
      }

      var XMLParserBase = /*#__PURE__*/function () {
        function XMLParserBase() {
          _classCallCheck(this, XMLParserBase);
        }

        _createClass(XMLParserBase, [{
          key: "_resolveEntities",
          value: function _resolveEntities(s) {
            var _this29 = this;

            return s.replace(/&([^;]+);/g, function (all, entity) {
              if (entity.substring(0, 2) === "#x") {
                return String.fromCharCode(parseInt(entity.substring(2), 16));
              } else if (entity.substring(0, 1) === "#") {
                return String.fromCharCode(parseInt(entity.substring(1), 10));
              }

              switch (entity) {
                case "lt":
                  return "<";

                case "gt":
                  return ">";

                case "amp":
                  return "&";

                case "quot":
                  return '"';
              }

              return _this29.onResolveEntity(entity);
            });
          }
        }, {
          key: "_parseContent",
          value: function _parseContent(s, start) {
            var attributes = [];
            var pos = start;

            function skipWs() {
              while (pos < s.length && isWhitespace(s, pos)) {
                ++pos;
              }
            }

            while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== ">" && s[pos] !== "/") {
              ++pos;
            }

            var name = s.substring(start, pos);
            skipWs();

            while (pos < s.length && s[pos] !== ">" && s[pos] !== "/" && s[pos] !== "?") {
              skipWs();
              var attrName = "",
                  attrValue = "";

              while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== "=") {
                attrName += s[pos];
                ++pos;
              }

              skipWs();

              if (s[pos] !== "=") {
                return null;
              }

              ++pos;
              skipWs();
              var attrEndChar = s[pos];

              if (attrEndChar !== '"' && attrEndChar !== "'") {
                return null;
              }

              var attrEndIndex = s.indexOf(attrEndChar, ++pos);

              if (attrEndIndex < 0) {
                return null;
              }

              attrValue = s.substring(pos, attrEndIndex);
              attributes.push({
                name: attrName,
                value: this._resolveEntities(attrValue)
              });
              pos = attrEndIndex + 1;
              skipWs();
            }

            return {
              name: name,
              attributes: attributes,
              parsed: pos - start
            };
          }
        }, {
          key: "_parseProcessingInstruction",
          value: function _parseProcessingInstruction(s, start) {
            var pos = start;

            function skipWs() {
              while (pos < s.length && isWhitespace(s, pos)) {
                ++pos;
              }
            }

            while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== ">" && s[pos] !== "/") {
              ++pos;
            }

            var name = s.substring(start, pos);
            skipWs();
            var attrStart = pos;

            while (pos < s.length && (s[pos] !== "?" || s[pos + 1] !== ">")) {
              ++pos;
            }

            var value = s.substring(attrStart, pos);
            return {
              name: name,
              value: value,
              parsed: pos - start
            };
          }
        }, {
          key: "parseXml",
          value: function parseXml(s) {
            var i = 0;

            while (i < s.length) {
              var ch = s[i];
              var j = i;

              if (ch === "<") {
                ++j;
                var ch2 = s[j];
                var q = void 0;

                switch (ch2) {
                  case "/":
                    ++j;
                    q = s.indexOf(">", j);

                    if (q < 0) {
                      this.onError(XMLParserErrorCode.UnterminatedElement);
                      return;
                    }

                    this.onEndElement(s.substring(j, q));
                    j = q + 1;
                    break;

                  case "?":
                    ++j;

                    var pi = this._parseProcessingInstruction(s, j);

                    if (s.substring(j + pi.parsed, j + pi.parsed + 2) !== "?>") {
                      this.onError(XMLParserErrorCode.UnterminatedXmlDeclaration);
                      return;
                    }

                    this.onPi(pi.name, pi.value);
                    j += pi.parsed + 2;
                    break;

                  case "!":
                    if (s.substring(j + 1, j + 3) === "--") {
                      q = s.indexOf("-->", j + 3);

                      if (q < 0) {
                        this.onError(XMLParserErrorCode.UnterminatedComment);
                        return;
                      }

                      this.onComment(s.substring(j + 3, q));
                      j = q + 3;
                    } else if (s.substring(j + 1, j + 8) === "[CDATA[") {
                      q = s.indexOf("]]>", j + 8);

                      if (q < 0) {
                        this.onError(XMLParserErrorCode.UnterminatedCdat);
                        return;
                      }

                      this.onCdata(s.substring(j + 8, q));
                      j = q + 3;
                    } else if (s.substring(j + 1, j + 8) === "DOCTYPE") {
                      var q2 = s.indexOf("[", j + 8);
                      var complexDoctype = false;
                      q = s.indexOf(">", j + 8);

                      if (q < 0) {
                        this.onError(XMLParserErrorCode.UnterminatedDoctypeDeclaration);
                        return;
                      }

                      if (q2 > 0 && q > q2) {
                        q = s.indexOf("]>", j + 8);

                        if (q < 0) {
                          this.onError(XMLParserErrorCode.UnterminatedDoctypeDeclaration);
                          return;
                        }

                        complexDoctype = true;
                      }

                      var doctypeContent = s.substring(j + 8, q + (complexDoctype ? 1 : 0));
                      this.onDoctype(doctypeContent);
                      j = q + (complexDoctype ? 2 : 1);
                    } else {
                      this.onError(XMLParserErrorCode.MalformedElement);
                      return;
                    }

                    break;

                  default:
                    var content = this._parseContent(s, j);

                    if (content === null) {
                      this.onError(XMLParserErrorCode.MalformedElement);
                      return;
                    }

                    var isClosed = false;

                    if (s.substring(j + content.parsed, j + content.parsed + 2) === "/>") {
                      isClosed = true;
                    } else if (s.substring(j + content.parsed, j + content.parsed + 1) !== ">") {
                      this.onError(XMLParserErrorCode.UnterminatedElement);
                      return;
                    }

                    this.onBeginElement(content.name, content.attributes, isClosed);
                    j += content.parsed + (isClosed ? 2 : 1);
                    break;
                }
              } else {
                while (j < s.length && s[j] !== "<") {
                  j++;
                }

                var text = s.substring(i, j);
                this.onText(this._resolveEntities(text));
              }

              i = j;
            }
          }
        }, {
          key: "onResolveEntity",
          value: function onResolveEntity(name) {
            return "&".concat(name, ";");
          }
        }, {
          key: "onPi",
          value: function onPi(name, value) {}
        }, {
          key: "onComment",
          value: function onComment(text) {}
        }, {
          key: "onCdata",
          value: function onCdata(text) {}
        }, {
          key: "onDoctype",
          value: function onDoctype(doctypeContent) {}
        }, {
          key: "onText",
          value: function onText(text) {}
        }, {
          key: "onBeginElement",
          value: function onBeginElement(name, attributes, isEmpty) {}
        }, {
          key: "onEndElement",
          value: function onEndElement(name) {}
        }, {
          key: "onError",
          value: function onError(code) {}
        }]);

        return XMLParserBase;
      }();

      var SimpleDOMNode = /*#__PURE__*/function () {
        function SimpleDOMNode(nodeName, nodeValue) {
          _classCallCheck(this, SimpleDOMNode);

          this.nodeName = nodeName;
          this.nodeValue = nodeValue;
          Object.defineProperty(this, "parentNode", {
            value: null,
            writable: true
          });
        }

        _createClass(SimpleDOMNode, [{
          key: "hasChildNodes",
          value: function hasChildNodes() {
            return this.childNodes && this.childNodes.length > 0;
          }
        }, {
          key: "firstChild",
          get: function get() {
            return this.childNodes && this.childNodes[0];
          }
        }, {
          key: "nextSibling",
          get: function get() {
            var childNodes = this.parentNode.childNodes;

            if (!childNodes) {
              return undefined;
            }

            var index = childNodes.indexOf(this);

            if (index === -1) {
              return undefined;
            }

            return childNodes[index + 1];
          }
        }, {
          key: "textContent",
          get: function get() {
            if (!this.childNodes) {
              return this.nodeValue || "";
            }

            return this.childNodes.map(function (child) {
              return child.textContent;
            }).join("");
          }
        }]);

        return SimpleDOMNode;
      }();

      var SimpleXMLParser = /*#__PURE__*/function (_XMLParserBase) {
        _inherits(SimpleXMLParser, _XMLParserBase);

        var _super10 = _createSuper(SimpleXMLParser);

        function SimpleXMLParser() {
          var _this30;

          _classCallCheck(this, SimpleXMLParser);

          _this30 = _super10.call(this);
          _this30._currentFragment = null;
          _this30._stack = null;
          _this30._errorCode = XMLParserErrorCode.NoError;
          return _this30;
        }

        _createClass(SimpleXMLParser, [{
          key: "parseFromString",
          value: function parseFromString(data) {
            this._currentFragment = [];
            this._stack = [];
            this._errorCode = XMLParserErrorCode.NoError;
            this.parseXml(data);

            if (this._errorCode !== XMLParserErrorCode.NoError) {
              return undefined;
            }

            var _this$_currentFragmen = _slicedToArray(this._currentFragment, 1),
                documentElement = _this$_currentFragmen[0];

            if (!documentElement) {
              return undefined;
            }

            return {
              documentElement: documentElement
            };
          }
        }, {
          key: "onResolveEntity",
          value: function onResolveEntity(name) {
            switch (name) {
              case "apos":
                return "'";
            }

            return _get(_getPrototypeOf(SimpleXMLParser.prototype), "onResolveEntity", this).call(this, name);
          }
        }, {
          key: "onText",
          value: function onText(text) {
            if (isWhitespaceString(text)) {
              return;
            }

            var node = new SimpleDOMNode("#text", text);

            this._currentFragment.push(node);
          }
        }, {
          key: "onCdata",
          value: function onCdata(text) {
            var node = new SimpleDOMNode("#text", text);

            this._currentFragment.push(node);
          }
        }, {
          key: "onBeginElement",
          value: function onBeginElement(name, attributes, isEmpty) {
            var node = new SimpleDOMNode(name);
            node.childNodes = [];

            this._currentFragment.push(node);

            if (isEmpty) {
              return;
            }

            this._stack.push(this._currentFragment);

            this._currentFragment = node.childNodes;
          }
        }, {
          key: "onEndElement",
          value: function onEndElement(name) {
            this._currentFragment = this._stack.pop() || [];
            var lastElement = this._currentFragment[this._currentFragment.length - 1];

            if (!lastElement) {
              return;
            }

            for (var i = 0, ii = lastElement.childNodes.length; i < ii; i++) {
              lastElement.childNodes[i].parentNode = lastElement;
            }
          }
        }, {
          key: "onError",
          value: function onError(code) {
            this._errorCode = code;
          }
        }]);

        return SimpleXMLParser;
      }(XMLParserBase);

      exports.SimpleXMLParser = SimpleXMLParser;
      /***/
    },
    /* 14 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PDFDataTransportStream = void 0;

      var _util = __w_pdfjs_require__(1);

      var PDFDataTransportStream = /*#__PURE__*/function () {
        function PDFDataTransportStream(params, pdfDataRangeTransport) {
          var _this31 = this;

          _classCallCheck(this, PDFDataTransportStream);

          (0, _util.assert)(pdfDataRangeTransport);
          this._queuedChunks = [];
          this._progressiveDone = params.progressiveDone || false;
          var initialData = params.initialData;

          if (initialData && initialData.length > 0) {
            var buffer = new Uint8Array(initialData).buffer;

            this._queuedChunks.push(buffer);
          }

          this._pdfDataRangeTransport = pdfDataRangeTransport;
          this._isStreamingSupported = !params.disableStream;
          this._isRangeSupported = !params.disableRange;
          this._contentLength = params.length;
          this._fullRequestReader = null;
          this._rangeReaders = [];

          this._pdfDataRangeTransport.addRangeListener(function (begin, chunk) {
            _this31._onReceiveData({
              begin: begin,
              chunk: chunk
            });
          });

          this._pdfDataRangeTransport.addProgressListener(function (loaded, total) {
            _this31._onProgress({
              loaded: loaded,
              total: total
            });
          });

          this._pdfDataRangeTransport.addProgressiveReadListener(function (chunk) {
            _this31._onReceiveData({
              chunk: chunk
            });
          });

          this._pdfDataRangeTransport.addProgressiveDoneListener(function () {
            _this31._onProgressiveDone();
          });

          this._pdfDataRangeTransport.transportReady();
        }

        _createClass(PDFDataTransportStream, [{
          key: "_onReceiveData",
          value: function _onReceiveData(args) {
            var buffer = new Uint8Array(args.chunk).buffer;

            if (args.begin === undefined) {
              if (this._fullRequestReader) {
                this._fullRequestReader._enqueue(buffer);
              } else {
                this._queuedChunks.push(buffer);
              }
            } else {
              var found = this._rangeReaders.some(function (rangeReader) {
                if (rangeReader._begin !== args.begin) {
                  return false;
                }

                rangeReader._enqueue(buffer);

                return true;
              });

              (0, _util.assert)(found);
            }
          }
        }, {
          key: "_onProgress",
          value: function _onProgress(evt) {
            if (evt.total === undefined) {
              var firstReader = this._rangeReaders[0];

              if (firstReader && firstReader.onProgress) {
                firstReader.onProgress({
                  loaded: evt.loaded
                });
              }
            } else {
              var fullReader = this._fullRequestReader;

              if (fullReader && fullReader.onProgress) {
                fullReader.onProgress({
                  loaded: evt.loaded,
                  total: evt.total
                });
              }
            }
          }
        }, {
          key: "_onProgressiveDone",
          value: function _onProgressiveDone() {
            if (this._fullRequestReader) {
              this._fullRequestReader.progressiveDone();
            }

            this._progressiveDone = true;
          }
        }, {
          key: "_removeRangeReader",
          value: function _removeRangeReader(reader) {
            var i = this._rangeReaders.indexOf(reader);

            if (i >= 0) {
              this._rangeReaders.splice(i, 1);
            }
          }
        }, {
          key: "getFullReader",
          value: function getFullReader() {
            (0, _util.assert)(!this._fullRequestReader);
            var queuedChunks = this._queuedChunks;
            this._queuedChunks = null;
            return new PDFDataTransportStreamReader(this, queuedChunks, this._progressiveDone);
          }
        }, {
          key: "getRangeReader",
          value: function getRangeReader(begin, end) {
            if (end <= this._progressiveDataLength) {
              return null;
            }

            var reader = new PDFDataTransportStreamRangeReader(this, begin, end);

            this._pdfDataRangeTransport.requestDataRange(begin, end);

            this._rangeReaders.push(reader);

            return reader;
          }
        }, {
          key: "cancelAllRequests",
          value: function cancelAllRequests(reason) {
            if (this._fullRequestReader) {
              this._fullRequestReader.cancel(reason);
            }

            var readers = this._rangeReaders.slice(0);

            readers.forEach(function (rangeReader) {
              rangeReader.cancel(reason);
            });

            this._pdfDataRangeTransport.abort();
          }
        }, {
          key: "_progressiveDataLength",
          get: function get() {
            return this._fullRequestReader ? this._fullRequestReader._loaded : 0;
          }
        }]);

        return PDFDataTransportStream;
      }();

      exports.PDFDataTransportStream = PDFDataTransportStream;

      var PDFDataTransportStreamReader = /*#__PURE__*/function () {
        function PDFDataTransportStreamReader(stream, queuedChunks) {
          var progressiveDone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          _classCallCheck(this, PDFDataTransportStreamReader);

          this._stream = stream;
          this._done = progressiveDone || false;
          this._filename = null;
          this._queuedChunks = queuedChunks || [];
          this._loaded = 0;

          var _iterator9 = _createForOfIteratorHelper(this._queuedChunks),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var chunk = _step9.value;
              this._loaded += chunk.byteLength;
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          this._requests = [];
          this._headersReady = Promise.resolve();
          stream._fullRequestReader = this;
          this.onProgress = null;
        }

        _createClass(PDFDataTransportStreamReader, [{
          key: "_enqueue",
          value: function _enqueue(chunk) {
            if (this._done) {
              return;
            }

            if (this._requests.length > 0) {
              var requestCapability = this._requests.shift();

              requestCapability.resolve({
                value: chunk,
                done: false
              });
            } else {
              this._queuedChunks.push(chunk);
            }

            this._loaded += chunk.byteLength;
          }
        }, {
          key: "read",
          value: function () {
            var _read = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var chunk, requestCapability;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      if (!(this._queuedChunks.length > 0)) {
                        _context7.next = 3;
                        break;
                      }

                      chunk = this._queuedChunks.shift();
                      return _context7.abrupt("return", {
                        value: chunk,
                        done: false
                      });

                    case 3:
                      if (!this._done) {
                        _context7.next = 5;
                        break;
                      }

                      return _context7.abrupt("return", {
                        value: undefined,
                        done: true
                      });

                    case 5:
                      requestCapability = (0, _util.createPromiseCapability)();

                      this._requests.push(requestCapability);

                      return _context7.abrupt("return", requestCapability.promise);

                    case 8:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function read() {
              return _read.apply(this, arguments);
            }

            return read;
          }()
        }, {
          key: "cancel",
          value: function cancel(reason) {
            this._done = true;

            this._requests.forEach(function (requestCapability) {
              requestCapability.resolve({
                value: undefined,
                done: true
              });
            });

            this._requests = [];
          }
        }, {
          key: "progressiveDone",
          value: function progressiveDone() {
            if (this._done) {
              return;
            }

            this._done = true;
          }
        }, {
          key: "headersReady",
          get: function get() {
            return this._headersReady;
          }
        }, {
          key: "filename",
          get: function get() {
            return this._filename;
          }
        }, {
          key: "isRangeSupported",
          get: function get() {
            return this._stream._isRangeSupported;
          }
        }, {
          key: "isStreamingSupported",
          get: function get() {
            return this._stream._isStreamingSupported;
          }
        }, {
          key: "contentLength",
          get: function get() {
            return this._stream._contentLength;
          }
        }]);

        return PDFDataTransportStreamReader;
      }();

      var PDFDataTransportStreamRangeReader = /*#__PURE__*/function () {
        function PDFDataTransportStreamRangeReader(stream, begin, end) {
          _classCallCheck(this, PDFDataTransportStreamRangeReader);

          this._stream = stream;
          this._begin = begin;
          this._end = end;
          this._queuedChunk = null;
          this._requests = [];
          this._done = false;
          this.onProgress = null;
        }

        _createClass(PDFDataTransportStreamRangeReader, [{
          key: "_enqueue",
          value: function _enqueue(chunk) {
            if (this._done) {
              return;
            }

            if (this._requests.length === 0) {
              this._queuedChunk = chunk;
            } else {
              var requestsCapability = this._requests.shift();

              requestsCapability.resolve({
                value: chunk,
                done: false
              });

              this._requests.forEach(function (requestCapability) {
                requestCapability.resolve({
                  value: undefined,
                  done: true
                });
              });

              this._requests = [];
            }

            this._done = true;

            this._stream._removeRangeReader(this);
          }
        }, {
          key: "read",
          value: function () {
            var _read2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var chunk, requestCapability;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (!this._queuedChunk) {
                        _context8.next = 4;
                        break;
                      }

                      chunk = this._queuedChunk;
                      this._queuedChunk = null;
                      return _context8.abrupt("return", {
                        value: chunk,
                        done: false
                      });

                    case 4:
                      if (!this._done) {
                        _context8.next = 6;
                        break;
                      }

                      return _context8.abrupt("return", {
                        value: undefined,
                        done: true
                      });

                    case 6:
                      requestCapability = (0, _util.createPromiseCapability)();

                      this._requests.push(requestCapability);

                      return _context8.abrupt("return", requestCapability.promise);

                    case 9:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function read() {
              return _read2.apply(this, arguments);
            }

            return read;
          }()
        }, {
          key: "cancel",
          value: function cancel(reason) {
            this._done = true;

            this._requests.forEach(function (requestCapability) {
              requestCapability.resolve({
                value: undefined,
                done: true
              });
            });

            this._requests = [];

            this._stream._removeRangeReader(this);
          }
        }, {
          key: "isStreamingSupported",
          get: function get() {
            return false;
          }
        }]);

        return PDFDataTransportStreamRangeReader;
      }();
      /***/

    },
    /* 15 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WebGLContext = void 0;

      var _util = __w_pdfjs_require__(1);

      var WebGLContext = /*#__PURE__*/function () {
        function WebGLContext(_ref26) {
          var _ref26$enable = _ref26.enable,
              enable = _ref26$enable === void 0 ? false : _ref26$enable;

          _classCallCheck(this, WebGLContext);

          this._enabled = enable === true;
        }

        _createClass(WebGLContext, [{
          key: "composeSMask",
          value: function composeSMask(_ref27) {
            var layer = _ref27.layer,
                mask = _ref27.mask,
                properties = _ref27.properties;
            return WebGLUtils.composeSMask(layer, mask, properties);
          }
        }, {
          key: "drawFigures",
          value: function drawFigures(_ref28) {
            var width = _ref28.width,
                height = _ref28.height,
                backgroundColor = _ref28.backgroundColor,
                figures = _ref28.figures,
                context = _ref28.context;
            return WebGLUtils.drawFigures(width, height, backgroundColor, figures, context);
          }
        }, {
          key: "clear",
          value: function clear() {
            WebGLUtils.cleanup();
          }
        }, {
          key: "isEnabled",
          get: function get() {
            var enabled = this._enabled;

            if (enabled) {
              enabled = WebGLUtils.tryInitGL();
            }

            return (0, _util.shadow)(this, "isEnabled", enabled);
          }
        }]);

        return WebGLContext;
      }();

      exports.WebGLContext = WebGLContext;

      var WebGLUtils = function WebGLUtilsClosure() {
        function loadShader(gl, code, shaderType) {
          var shader = gl.createShader(shaderType);
          gl.shaderSource(shader, code);
          gl.compileShader(shader);
          var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

          if (!compiled) {
            var errorMsg = gl.getShaderInfoLog(shader);
            throw new Error("Error during shader compilation: " + errorMsg);
          }

          return shader;
        }

        function createVertexShader(gl, code) {
          return loadShader(gl, code, gl.VERTEX_SHADER);
        }

        function createFragmentShader(gl, code) {
          return loadShader(gl, code, gl.FRAGMENT_SHADER);
        }

        function createProgram(gl, shaders) {
          var program = gl.createProgram();

          for (var i = 0, ii = shaders.length; i < ii; ++i) {
            gl.attachShader(program, shaders[i]);
          }

          gl.linkProgram(program);
          var linked = gl.getProgramParameter(program, gl.LINK_STATUS);

          if (!linked) {
            var errorMsg = gl.getProgramInfoLog(program);
            throw new Error("Error during program linking: " + errorMsg);
          }

          return program;
        }

        function createTexture(gl, image, textureId) {
          gl.activeTexture(textureId);
          var texture = gl.createTexture();
          gl.bindTexture(gl.TEXTURE_2D, texture);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
          return texture;
        }

        var currentGL, currentCanvas;

        function generateGL() {
          if (currentGL) {
            return;
          }

          currentCanvas = document.createElement("canvas");
          currentGL = currentCanvas.getContext("webgl", {
            premultipliedalpha: false
          });
        }

        var smaskVertexShaderCode = "\
  attribute vec2 a_position;                                    \
  attribute vec2 a_texCoord;                                    \
                                                                \
  uniform vec2 u_resolution;                                    \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;   \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_texCoord = a_texCoord;                                    \
  }                                                             ";
        var smaskFragmentShaderCode = "\
  precision mediump float;                                      \
                                                                \
  uniform vec4 u_backdrop;                                      \
  uniform int u_subtype;                                        \
  uniform sampler2D u_image;                                    \
  uniform sampler2D u_mask;                                     \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec4 imageColor = texture2D(u_image, v_texCoord);           \
    vec4 maskColor = texture2D(u_mask, v_texCoord);             \
    if (u_backdrop.a > 0.0) {                                   \
      maskColor.rgb = maskColor.rgb * maskColor.a +             \
                      u_backdrop.rgb * (1.0 - maskColor.a);     \
    }                                                           \
    float lum;                                                  \
    if (u_subtype == 0) {                                       \
      lum = maskColor.a;                                        \
    } else {                                                    \
      lum = maskColor.r * 0.3 + maskColor.g * 0.59 +            \
            maskColor.b * 0.11;                                 \
    }                                                           \
    imageColor.a *= lum;                                        \
    imageColor.rgb *= imageColor.a;                             \
    gl_FragColor = imageColor;                                  \
  }                                                             ";
        var smaskCache = null;

        function initSmaskGL() {
          var canvas, gl;
          generateGL();
          canvas = currentCanvas;
          currentCanvas = null;
          gl = currentGL;
          currentGL = null;
          var vertexShader = createVertexShader(gl, smaskVertexShaderCode);
          var fragmentShader = createFragmentShader(gl, smaskFragmentShaderCode);
          var program = createProgram(gl, [vertexShader, fragmentShader]);
          gl.useProgram(program);
          var cache = {};
          cache.gl = gl;
          cache.canvas = canvas;
          cache.resolutionLocation = gl.getUniformLocation(program, "u_resolution");
          cache.positionLocation = gl.getAttribLocation(program, "a_position");
          cache.backdropLocation = gl.getUniformLocation(program, "u_backdrop");
          cache.subtypeLocation = gl.getUniformLocation(program, "u_subtype");
          var texCoordLocation = gl.getAttribLocation(program, "a_texCoord");
          var texLayerLocation = gl.getUniformLocation(program, "u_image");
          var texMaskLocation = gl.getUniformLocation(program, "u_mask");
          var texCoordBuffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0]), gl.STATIC_DRAW);
          gl.enableVertexAttribArray(texCoordLocation);
          gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);
          gl.uniform1i(texLayerLocation, 0);
          gl.uniform1i(texMaskLocation, 1);
          smaskCache = cache;
        }

        function composeSMask(layer, mask, properties) {
          var width = layer.width,
              height = layer.height;

          if (!smaskCache) {
            initSmaskGL();
          }

          var cache = smaskCache,
              canvas = cache.canvas,
              gl = cache.gl;
          canvas.width = width;
          canvas.height = height;
          gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
          gl.uniform2f(cache.resolutionLocation, width, height);

          if (properties.backdrop) {
            gl.uniform4f(cache.resolutionLocation, properties.backdrop[0], properties.backdrop[1], properties.backdrop[2], 1);
          } else {
            gl.uniform4f(cache.resolutionLocation, 0, 0, 0, 0);
          }

          gl.uniform1i(cache.subtypeLocation, properties.subtype === "Luminosity" ? 1 : 0);
          var texture = createTexture(gl, layer, gl.TEXTURE0);
          var maskTexture = createTexture(gl, mask, gl.TEXTURE1);
          var buffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, width, 0, 0, height, 0, height, width, 0, width, height]), gl.STATIC_DRAW);
          gl.enableVertexAttribArray(cache.positionLocation);
          gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);
          gl.clearColor(0, 0, 0, 0);
          gl.enable(gl.BLEND);
          gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
          gl.clear(gl.COLOR_BUFFER_BIT);
          gl.drawArrays(gl.TRIANGLES, 0, 6);
          gl.flush();
          gl.deleteTexture(texture);
          gl.deleteTexture(maskTexture);
          gl.deleteBuffer(buffer);
          return canvas;
        }

        var figuresVertexShaderCode = "\
  attribute vec2 a_position;                                    \
  attribute vec3 a_color;                                       \
                                                                \
  uniform vec2 u_resolution;                                    \
  uniform vec2 u_scale;                                         \
  uniform vec2 u_offset;                                        \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    vec2 position = (a_position + u_offset) * u_scale;          \
    vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;     \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_color = vec4(a_color / 255.0, 1.0);                       \
  }                                                             ";
        var figuresFragmentShaderCode = "\
  precision mediump float;                                      \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    gl_FragColor = v_color;                                     \
  }                                                             ";
        var figuresCache = null;

        function initFiguresGL() {
          var canvas, gl;
          generateGL();
          canvas = currentCanvas;
          currentCanvas = null;
          gl = currentGL;
          currentGL = null;
          var vertexShader = createVertexShader(gl, figuresVertexShaderCode);
          var fragmentShader = createFragmentShader(gl, figuresFragmentShaderCode);
          var program = createProgram(gl, [vertexShader, fragmentShader]);
          gl.useProgram(program);
          var cache = {};
          cache.gl = gl;
          cache.canvas = canvas;
          cache.resolutionLocation = gl.getUniformLocation(program, "u_resolution");
          cache.scaleLocation = gl.getUniformLocation(program, "u_scale");
          cache.offsetLocation = gl.getUniformLocation(program, "u_offset");
          cache.positionLocation = gl.getAttribLocation(program, "a_position");
          cache.colorLocation = gl.getAttribLocation(program, "a_color");
          figuresCache = cache;
        }

        function drawFigures(width, height, backgroundColor, figures, context) {
          if (!figuresCache) {
            initFiguresGL();
          }

          var cache = figuresCache,
              canvas = cache.canvas,
              gl = cache.gl;
          canvas.width = width;
          canvas.height = height;
          gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
          gl.uniform2f(cache.resolutionLocation, width, height);
          var count = 0;
          var i, ii, rows;

          for (i = 0, ii = figures.length; i < ii; i++) {
            switch (figures[i].type) {
              case "lattice":
                rows = figures[i].coords.length / figures[i].verticesPerRow | 0;
                count += (rows - 1) * (figures[i].verticesPerRow - 1) * 6;
                break;

              case "triangles":
                count += figures[i].coords.length;
                break;
            }
          }

          var coords = new Float32Array(count * 2);
          var colors = new Uint8Array(count * 3);
          var coordsMap = context.coords,
              colorsMap = context.colors;
          var pIndex = 0,
              cIndex = 0;

          for (i = 0, ii = figures.length; i < ii; i++) {
            var figure = figures[i],
                ps = figure.coords,
                cs = figure.colors;

            switch (figure.type) {
              case "lattice":
                var cols = figure.verticesPerRow;
                rows = ps.length / cols | 0;

                for (var row = 1; row < rows; row++) {
                  var offset = row * cols + 1;

                  for (var col = 1; col < cols; col++, offset++) {
                    coords[pIndex] = coordsMap[ps[offset - cols - 1]];
                    coords[pIndex + 1] = coordsMap[ps[offset - cols - 1] + 1];
                    coords[pIndex + 2] = coordsMap[ps[offset - cols]];
                    coords[pIndex + 3] = coordsMap[ps[offset - cols] + 1];
                    coords[pIndex + 4] = coordsMap[ps[offset - 1]];
                    coords[pIndex + 5] = coordsMap[ps[offset - 1] + 1];
                    colors[cIndex] = colorsMap[cs[offset - cols - 1]];
                    colors[cIndex + 1] = colorsMap[cs[offset - cols - 1] + 1];
                    colors[cIndex + 2] = colorsMap[cs[offset - cols - 1] + 2];
                    colors[cIndex + 3] = colorsMap[cs[offset - cols]];
                    colors[cIndex + 4] = colorsMap[cs[offset - cols] + 1];
                    colors[cIndex + 5] = colorsMap[cs[offset - cols] + 2];
                    colors[cIndex + 6] = colorsMap[cs[offset - 1]];
                    colors[cIndex + 7] = colorsMap[cs[offset - 1] + 1];
                    colors[cIndex + 8] = colorsMap[cs[offset - 1] + 2];
                    coords[pIndex + 6] = coords[pIndex + 2];
                    coords[pIndex + 7] = coords[pIndex + 3];
                    coords[pIndex + 8] = coords[pIndex + 4];
                    coords[pIndex + 9] = coords[pIndex + 5];
                    coords[pIndex + 10] = coordsMap[ps[offset]];
                    coords[pIndex + 11] = coordsMap[ps[offset] + 1];
                    colors[cIndex + 9] = colors[cIndex + 3];
                    colors[cIndex + 10] = colors[cIndex + 4];
                    colors[cIndex + 11] = colors[cIndex + 5];
                    colors[cIndex + 12] = colors[cIndex + 6];
                    colors[cIndex + 13] = colors[cIndex + 7];
                    colors[cIndex + 14] = colors[cIndex + 8];
                    colors[cIndex + 15] = colorsMap[cs[offset]];
                    colors[cIndex + 16] = colorsMap[cs[offset] + 1];
                    colors[cIndex + 17] = colorsMap[cs[offset] + 2];
                    pIndex += 12;
                    cIndex += 18;
                  }
                }

                break;

              case "triangles":
                for (var j = 0, jj = ps.length; j < jj; j++) {
                  coords[pIndex] = coordsMap[ps[j]];
                  coords[pIndex + 1] = coordsMap[ps[j] + 1];
                  colors[cIndex] = colorsMap[cs[j]];
                  colors[cIndex + 1] = colorsMap[cs[j] + 1];
                  colors[cIndex + 2] = colorsMap[cs[j] + 2];
                  pIndex += 2;
                  cIndex += 3;
                }

                break;
            }
          }

          if (backgroundColor) {
            gl.clearColor(backgroundColor[0] / 255, backgroundColor[1] / 255, backgroundColor[2] / 255, 1.0);
          } else {
            gl.clearColor(0, 0, 0, 0);
          }

          gl.clear(gl.COLOR_BUFFER_BIT);
          var coordsBuffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, coordsBuffer);
          gl.bufferData(gl.ARRAY_BUFFER, coords, gl.STATIC_DRAW);
          gl.enableVertexAttribArray(cache.positionLocation);
          gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);
          var colorsBuffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, colorsBuffer);
          gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
          gl.enableVertexAttribArray(cache.colorLocation);
          gl.vertexAttribPointer(cache.colorLocation, 3, gl.UNSIGNED_BYTE, false, 0, 0);
          gl.uniform2f(cache.scaleLocation, context.scaleX, context.scaleY);
          gl.uniform2f(cache.offsetLocation, context.offsetX, context.offsetY);
          gl.drawArrays(gl.TRIANGLES, 0, count);
          gl.flush();
          gl.deleteBuffer(coordsBuffer);
          gl.deleteBuffer(colorsBuffer);
          return canvas;
        }

        return {
          tryInitGL: function tryInitGL() {
            try {
              generateGL();
              return !!currentGL;
            } catch (ex) {}

            return false;
          },
          composeSMask: composeSMask,
          drawFigures: drawFigures,
          cleanup: function cleanup() {
            if (smaskCache && smaskCache.canvas) {
              smaskCache.canvas.width = 0;
              smaskCache.canvas.height = 0;
            }

            if (figuresCache && figuresCache.canvas) {
              figuresCache.canvas.width = 0;
              figuresCache.canvas.height = 0;
            }

            smaskCache = null;
            figuresCache = null;
          }
        };
      }();
      /***/

    },
    /* 16 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.renderTextLayer = void 0;

      var _util = __w_pdfjs_require__(1);

      var renderTextLayer = function renderTextLayerClosure() {
        var MAX_TEXT_DIVS_TO_RENDER = 100000;
        var NonWhitespaceRegexp = /\S/;

        function isAllWhitespace(str) {
          return !NonWhitespaceRegexp.test(str);
        }

        function appendText(task, geom, styles) {
          var textDiv = document.createElement("span");
          var textDivProperties = {
            angle: 0,
            canvasWidth: 0,
            isWhitespace: false,
            originalTransform: null,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            scale: 1
          };

          task._textDivs.push(textDiv);

          if (isAllWhitespace(geom.str)) {
            textDivProperties.isWhitespace = true;

            task._textDivProperties.set(textDiv, textDivProperties);

            return;
          }

          var tx = _util.Util.transform(task._viewport.transform, geom.transform);

          var angle = Math.atan2(tx[1], tx[0]);
          var style = styles[geom.fontName];

          if (style.vertical) {
            angle += Math.PI / 2;
          }

          var fontHeight = Math.sqrt(tx[2] * tx[2] + tx[3] * tx[3]);
          var fontAscent = fontHeight;

          if (style.ascent) {
            fontAscent = style.ascent * fontAscent;
          } else if (style.descent) {
            fontAscent = (1 + style.descent) * fontAscent;
          }

          var left, top;

          if (angle === 0) {
            left = tx[4];
            top = tx[5] - fontAscent;
          } else {
            left = tx[4] + fontAscent * Math.sin(angle);
            top = tx[5] - fontAscent * Math.cos(angle);
          }

          textDiv.style.left = "".concat(left, "px");
          textDiv.style.top = "".concat(top, "px");
          textDiv.style.fontSize = "".concat(fontHeight, "px");
          textDiv.style.fontFamily = style.fontFamily;
          textDiv.textContent = geom.str;

          if (task._fontInspectorEnabled) {
            textDiv.dataset.fontName = geom.fontName;
          }

          if (angle !== 0) {
            textDivProperties.angle = angle * (180 / Math.PI);
          }

          if (geom.str.length > 1) {
            if (style.vertical) {
              textDivProperties.canvasWidth = geom.height * task._viewport.scale;
            } else {
              textDivProperties.canvasWidth = geom.width * task._viewport.scale;
            }
          }

          task._textDivProperties.set(textDiv, textDivProperties);

          if (task._textContentStream) {
            task._layoutText(textDiv);
          }

          if (task._enhanceTextSelection) {
            var angleCos = 1,
                angleSin = 0;

            if (angle !== 0) {
              angleCos = Math.cos(angle);
              angleSin = Math.sin(angle);
            }

            var divWidth = (style.vertical ? geom.height : geom.width) * task._viewport.scale;
            var divHeight = fontHeight;
            var m, b;

            if (angle !== 0) {
              m = [angleCos, angleSin, -angleSin, angleCos, left, top];
              b = _util.Util.getAxialAlignedBoundingBox([0, 0, divWidth, divHeight], m);
            } else {
              b = [left, top, left + divWidth, top + divHeight];
            }

            task._bounds.push({
              left: b[0],
              top: b[1],
              right: b[2],
              bottom: b[3],
              div: textDiv,
              size: [divWidth, divHeight],
              m: m
            });
          }
        }

        function render(task) {
          if (task._canceled) {
            return;
          }

          var textDivs = task._textDivs;
          var capability = task._capability;
          var textDivsLength = textDivs.length;

          if (textDivsLength > MAX_TEXT_DIVS_TO_RENDER) {
            task._renderingDone = true;
            capability.resolve();
            return;
          }

          if (!task._textContentStream) {
            for (var i = 0; i < textDivsLength; i++) {
              task._layoutText(textDivs[i]);
            }
          }

          task._renderingDone = true;
          capability.resolve();
        }

        function expand(task) {
          var bounds = task._bounds;
          var viewport = task._viewport;
          var expanded = expandBounds(viewport.width, viewport.height, bounds);

          for (var i = 0; i < expanded.length; i++) {
            var div = bounds[i].div;

            var divProperties = task._textDivProperties.get(div);

            if (divProperties.angle === 0) {
              divProperties.paddingLeft = bounds[i].left - expanded[i].left;
              divProperties.paddingTop = bounds[i].top - expanded[i].top;
              divProperties.paddingRight = expanded[i].right - bounds[i].right;
              divProperties.paddingBottom = expanded[i].bottom - bounds[i].bottom;

              task._textDivProperties.set(div, divProperties);

              continue;
            }

            var e = expanded[i],
                b = bounds[i];
            var m = b.m,
                c = m[0],
                s = m[1];
            var points = [[0, 0], [0, b.size[1]], [b.size[0], 0], b.size];
            var ts = new Float64Array(64);
            points.forEach(function (p, i) {
              var t = _util.Util.applyTransform(p, m);

              ts[i + 0] = c && (e.left - t[0]) / c;
              ts[i + 4] = s && (e.top - t[1]) / s;
              ts[i + 8] = c && (e.right - t[0]) / c;
              ts[i + 12] = s && (e.bottom - t[1]) / s;
              ts[i + 16] = s && (e.left - t[0]) / -s;
              ts[i + 20] = c && (e.top - t[1]) / c;
              ts[i + 24] = s && (e.right - t[0]) / -s;
              ts[i + 28] = c && (e.bottom - t[1]) / c;
              ts[i + 32] = c && (e.left - t[0]) / -c;
              ts[i + 36] = s && (e.top - t[1]) / -s;
              ts[i + 40] = c && (e.right - t[0]) / -c;
              ts[i + 44] = s && (e.bottom - t[1]) / -s;
              ts[i + 48] = s && (e.left - t[0]) / s;
              ts[i + 52] = c && (e.top - t[1]) / -c;
              ts[i + 56] = s && (e.right - t[0]) / s;
              ts[i + 60] = c && (e.bottom - t[1]) / -c;
            });

            var findPositiveMin = function findPositiveMin(ts, offset, count) {
              var result = 0;

              for (var i = 0; i < count; i++) {
                var t = ts[offset++];

                if (t > 0) {
                  result = result ? Math.min(t, result) : t;
                }
              }

              return result;
            };

            var boxScale = 1 + Math.min(Math.abs(c), Math.abs(s));
            divProperties.paddingLeft = findPositiveMin(ts, 32, 16) / boxScale;
            divProperties.paddingTop = findPositiveMin(ts, 48, 16) / boxScale;
            divProperties.paddingRight = findPositiveMin(ts, 0, 16) / boxScale;
            divProperties.paddingBottom = findPositiveMin(ts, 16, 16) / boxScale;

            task._textDivProperties.set(div, divProperties);
          }
        }

        function expandBounds(width, height, boxes) {
          var bounds = boxes.map(function (box, i) {
            return {
              x1: box.left,
              y1: box.top,
              x2: box.right,
              y2: box.bottom,
              index: i,
              x1New: undefined,
              x2New: undefined
            };
          });
          expandBoundsLTR(width, bounds);
          var expanded = new Array(boxes.length);
          bounds.forEach(function (b) {
            var i = b.index;
            expanded[i] = {
              left: b.x1New,
              top: 0,
              right: b.x2New,
              bottom: 0
            };
          });
          boxes.map(function (box, i) {
            var e = expanded[i],
                b = bounds[i];
            b.x1 = box.top;
            b.y1 = width - e.right;
            b.x2 = box.bottom;
            b.y2 = width - e.left;
            b.index = i;
            b.x1New = undefined;
            b.x2New = undefined;
          });
          expandBoundsLTR(height, bounds);
          bounds.forEach(function (b) {
            var i = b.index;
            expanded[i].top = b.x1New;
            expanded[i].bottom = b.x2New;
          });
          return expanded;
        }

        function expandBoundsLTR(width, bounds) {
          bounds.sort(function (a, b) {
            return a.x1 - b.x1 || a.index - b.index;
          });
          var fakeBoundary = {
            x1: -Infinity,
            y1: -Infinity,
            x2: 0,
            y2: Infinity,
            index: -1,
            x1New: 0,
            x2New: 0
          };
          var horizon = [{
            start: -Infinity,
            end: Infinity,
            boundary: fakeBoundary
          }];
          bounds.forEach(function (boundary) {
            var i = 0;

            while (i < horizon.length && horizon[i].end <= boundary.y1) {
              i++;
            }

            var j = horizon.length - 1;

            while (j >= 0 && horizon[j].start >= boundary.y2) {
              j--;
            }

            var horizonPart, affectedBoundary;
            var q,
                k,
                maxXNew = -Infinity;

            for (q = i; q <= j; q++) {
              horizonPart = horizon[q];
              affectedBoundary = horizonPart.boundary;
              var xNew;

              if (affectedBoundary.x2 > boundary.x1) {
                xNew = affectedBoundary.index > boundary.index ? affectedBoundary.x1New : boundary.x1;
              } else if (affectedBoundary.x2New === undefined) {
                xNew = (affectedBoundary.x2 + boundary.x1) / 2;
              } else {
                xNew = affectedBoundary.x2New;
              }

              if (xNew > maxXNew) {
                maxXNew = xNew;
              }
            }

            boundary.x1New = maxXNew;

            for (q = i; q <= j; q++) {
              horizonPart = horizon[q];
              affectedBoundary = horizonPart.boundary;

              if (affectedBoundary.x2New === undefined) {
                if (affectedBoundary.x2 > boundary.x1) {
                  if (affectedBoundary.index > boundary.index) {
                    affectedBoundary.x2New = affectedBoundary.x2;
                  }
                } else {
                  affectedBoundary.x2New = maxXNew;
                }
              } else if (affectedBoundary.x2New > maxXNew) {
                affectedBoundary.x2New = Math.max(maxXNew, affectedBoundary.x2);
              }
            }

            var changedHorizon = [],
                lastBoundary = null;

            for (q = i; q <= j; q++) {
              horizonPart = horizon[q];
              affectedBoundary = horizonPart.boundary;
              var useBoundary = affectedBoundary.x2 > boundary.x2 ? affectedBoundary : boundary;

              if (lastBoundary === useBoundary) {
                changedHorizon[changedHorizon.length - 1].end = horizonPart.end;
              } else {
                changedHorizon.push({
                  start: horizonPart.start,
                  end: horizonPart.end,
                  boundary: useBoundary
                });
                lastBoundary = useBoundary;
              }
            }

            if (horizon[i].start < boundary.y1) {
              changedHorizon[0].start = boundary.y1;
              changedHorizon.unshift({
                start: horizon[i].start,
                end: boundary.y1,
                boundary: horizon[i].boundary
              });
            }

            if (boundary.y2 < horizon[j].end) {
              changedHorizon[changedHorizon.length - 1].end = boundary.y2;
              changedHorizon.push({
                start: boundary.y2,
                end: horizon[j].end,
                boundary: horizon[j].boundary
              });
            }

            for (q = i; q <= j; q++) {
              horizonPart = horizon[q];
              affectedBoundary = horizonPart.boundary;

              if (affectedBoundary.x2New !== undefined) {
                continue;
              }

              var used = false;

              for (k = i - 1; !used && k >= 0 && horizon[k].start >= affectedBoundary.y1; k--) {
                used = horizon[k].boundary === affectedBoundary;
              }

              for (k = j + 1; !used && k < horizon.length && horizon[k].end <= affectedBoundary.y2; k++) {
                used = horizon[k].boundary === affectedBoundary;
              }

              for (k = 0; !used && k < changedHorizon.length; k++) {
                used = changedHorizon[k].boundary === affectedBoundary;
              }

              if (!used) {
                affectedBoundary.x2New = maxXNew;
              }
            }

            Array.prototype.splice.apply(horizon, [i, j - i + 1].concat(changedHorizon));
          });
          horizon.forEach(function (horizonPart) {
            var affectedBoundary = horizonPart.boundary;

            if (affectedBoundary.x2New === undefined) {
              affectedBoundary.x2New = Math.max(width, affectedBoundary.x2);
            }
          });
        }

        function TextLayerRenderTask(_ref29) {
          var _this32 = this;

          var textContent = _ref29.textContent,
              textContentStream = _ref29.textContentStream,
              container = _ref29.container,
              viewport = _ref29.viewport,
              textDivs = _ref29.textDivs,
              textContentItemsStr = _ref29.textContentItemsStr,
              enhanceTextSelection = _ref29.enhanceTextSelection;
          this._textContent = textContent;
          this._textContentStream = textContentStream;
          this._container = container;
          this._viewport = viewport;
          this._textDivs = textDivs || [];
          this._textContentItemsStr = textContentItemsStr || [];
          this._enhanceTextSelection = !!enhanceTextSelection;
          this._fontInspectorEnabled = !!(globalThis.FontInspector && globalThis.FontInspector.enabled);
          this._reader = null;
          this._layoutTextLastFontSize = null;
          this._layoutTextLastFontFamily = null;
          this._layoutTextCtx = null;
          this._textDivProperties = new WeakMap();
          this._renderingDone = false;
          this._canceled = false;
          this._capability = (0, _util.createPromiseCapability)();
          this._renderTimer = null;
          this._bounds = [];

          this._capability.promise["finally"](function () {
            if (_this32._layoutTextCtx) {
              _this32._layoutTextCtx.canvas.width = 0;
              _this32._layoutTextCtx.canvas.height = 0;
              _this32._layoutTextCtx = null;
            }
          })["catch"](function () {});
        }

        TextLayerRenderTask.prototype = {
          get promise() {
            return this._capability.promise;
          },

          cancel: function TextLayer_cancel() {
            this._canceled = true;

            if (this._reader) {
              this._reader.cancel(new _util.AbortException("TextLayer task cancelled."));

              this._reader = null;
            }

            if (this._renderTimer !== null) {
              clearTimeout(this._renderTimer);
              this._renderTimer = null;
            }

            this._capability.reject(new Error("TextLayer task cancelled."));
          },
          _processItems: function _processItems(items, styleCache) {
            for (var i = 0, len = items.length; i < len; i++) {
              this._textContentItemsStr.push(items[i].str);

              appendText(this, items[i], styleCache);
            }
          },
          _layoutText: function _layoutText(textDiv) {
            var textDivProperties = this._textDivProperties.get(textDiv);

            if (textDivProperties.isWhitespace) {
              return;
            }

            var transform = "";

            if (textDivProperties.canvasWidth !== 0) {
              var _textDiv$style = textDiv.style,
                  fontSize = _textDiv$style.fontSize,
                  fontFamily = _textDiv$style.fontFamily;

              if (fontSize !== this._layoutTextLastFontSize || fontFamily !== this._layoutTextLastFontFamily) {
                this._layoutTextCtx.font = "".concat(fontSize, " ").concat(fontFamily);
                this._layoutTextLastFontSize = fontSize;
                this._layoutTextLastFontFamily = fontFamily;
              }

              var _this$_layoutTextCtx$ = this._layoutTextCtx.measureText(textDiv.textContent),
                  width = _this$_layoutTextCtx$.width;

              if (width > 0) {
                textDivProperties.scale = textDivProperties.canvasWidth / width;
                transform = "scaleX(".concat(textDivProperties.scale, ")");
              }
            }

            if (textDivProperties.angle !== 0) {
              transform = "rotate(".concat(textDivProperties.angle, "deg) ").concat(transform);
            }

            if (transform.length > 0) {
              if (this._enhanceTextSelection) {
                textDivProperties.originalTransform = transform;
              }

              textDiv.style.transform = transform;
            }

            this._textDivProperties.set(textDiv, textDivProperties);

            this._container.appendChild(textDiv);
          },
          _render: function TextLayer_render(timeout) {
            var _this33 = this;

            var capability = (0, _util.createPromiseCapability)();
            var styleCache = Object.create(null);
            var canvas = document.createElement("canvas");
            canvas.mozOpaque = true;
            this._layoutTextCtx = canvas.getContext("2d", {
              alpha: false
            });

            if (this._textContent) {
              var textItems = this._textContent.items;
              var textStyles = this._textContent.styles;

              this._processItems(textItems, textStyles);

              capability.resolve();
            } else if (this._textContentStream) {
              var pump = function pump() {
                _this33._reader.read().then(function (_ref30) {
                  var value = _ref30.value,
                      done = _ref30.done;

                  if (done) {
                    capability.resolve();
                    return;
                  }

                  Object.assign(styleCache, value.styles);

                  _this33._processItems(value.items, styleCache);

                  pump();
                }, capability.reject);
              };

              this._reader = this._textContentStream.getReader();
              pump();
            } else {
              throw new Error('Neither "textContent" nor "textContentStream"' + " parameters specified.");
            }

            capability.promise.then(function () {
              styleCache = null;

              if (!timeout) {
                render(_this33);
              } else {
                _this33._renderTimer = setTimeout(function () {
                  render(_this33);
                  _this33._renderTimer = null;
                }, timeout);
              }
            }, this._capability.reject);
          },
          expandTextDivs: function TextLayer_expandTextDivs(expandDivs) {
            if (!this._enhanceTextSelection || !this._renderingDone) {
              return;
            }

            if (this._bounds !== null) {
              expand(this);
              this._bounds = null;
            }

            var transformBuf = [],
                paddingBuf = [];

            for (var i = 0, ii = this._textDivs.length; i < ii; i++) {
              var div = this._textDivs[i];

              var divProps = this._textDivProperties.get(div);

              if (divProps.isWhitespace) {
                continue;
              }

              if (expandDivs) {
                transformBuf.length = 0;
                paddingBuf.length = 0;

                if (divProps.originalTransform) {
                  transformBuf.push(divProps.originalTransform);
                }

                if (divProps.paddingTop > 0) {
                  paddingBuf.push("".concat(divProps.paddingTop, "px"));
                  transformBuf.push("translateY(".concat(-divProps.paddingTop, "px)"));
                } else {
                  paddingBuf.push(0);
                }

                if (divProps.paddingRight > 0) {
                  paddingBuf.push("".concat(divProps.paddingRight / divProps.scale, "px"));
                } else {
                  paddingBuf.push(0);
                }

                if (divProps.paddingBottom > 0) {
                  paddingBuf.push("".concat(divProps.paddingBottom, "px"));
                } else {
                  paddingBuf.push(0);
                }

                if (divProps.paddingLeft > 0) {
                  paddingBuf.push("".concat(divProps.paddingLeft / divProps.scale, "px"));
                  transformBuf.push("translateX(".concat(-divProps.paddingLeft / divProps.scale, "px)"));
                } else {
                  paddingBuf.push(0);
                }

                div.style.padding = paddingBuf.join(" ");

                if (transformBuf.length) {
                  div.style.transform = transformBuf.join(" ");
                }
              } else {
                div.style.padding = null;
                div.style.transform = divProps.originalTransform;
              }
            }
          }
        };

        function renderTextLayer(renderParameters) {
          var task = new TextLayerRenderTask({
            textContent: renderParameters.textContent,
            textContentStream: renderParameters.textContentStream,
            container: renderParameters.container,
            viewport: renderParameters.viewport,
            textDivs: renderParameters.textDivs,
            textContentItemsStr: renderParameters.textContentItemsStr,
            enhanceTextSelection: renderParameters.enhanceTextSelection
          });

          task._render(renderParameters.timeout);

          return task;
        }

        return renderTextLayer;
      }();

      exports.renderTextLayer = renderTextLayer;
      /***/
    },
    /* 17 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.AnnotationLayer = void 0;

      var _display_utils = __w_pdfjs_require__(4);

      var _util = __w_pdfjs_require__(1);

      var AnnotationElementFactory = /*#__PURE__*/function () {
        function AnnotationElementFactory() {
          _classCallCheck(this, AnnotationElementFactory);
        }

        _createClass(AnnotationElementFactory, null, [{
          key: "create",
          value: function create(parameters) {
            var subtype = parameters.data.annotationType;

            switch (subtype) {
              case _util.AnnotationType.LINK:
                return new LinkAnnotationElement(parameters);

              case _util.AnnotationType.TEXT:
                return new TextAnnotationElement(parameters);

              case _util.AnnotationType.WIDGET:
                var fieldType = parameters.data.fieldType;

                switch (fieldType) {
                  case "Tx":
                    return new TextWidgetAnnotationElement(parameters);

                  case "Btn":
                    if (parameters.data.radioButton) {
                      return new RadioButtonWidgetAnnotationElement(parameters);
                    } else if (parameters.data.checkBox) {
                      return new CheckboxWidgetAnnotationElement(parameters);
                    }

                    return new PushButtonWidgetAnnotationElement(parameters);

                  case "Ch":
                    return new ChoiceWidgetAnnotationElement(parameters);
                }

                return new WidgetAnnotationElement(parameters);

              case _util.AnnotationType.POPUP:
                return new PopupAnnotationElement(parameters);

              case _util.AnnotationType.FREETEXT:
                return new FreeTextAnnotationElement(parameters);

              case _util.AnnotationType.LINE:
                return new LineAnnotationElement(parameters);

              case _util.AnnotationType.SQUARE:
                return new SquareAnnotationElement(parameters);

              case _util.AnnotationType.CIRCLE:
                return new CircleAnnotationElement(parameters);

              case _util.AnnotationType.POLYLINE:
                return new PolylineAnnotationElement(parameters);

              case _util.AnnotationType.CARET:
                return new CaretAnnotationElement(parameters);

              case _util.AnnotationType.INK:
                return new InkAnnotationElement(parameters);

              case _util.AnnotationType.POLYGON:
                return new PolygonAnnotationElement(parameters);

              case _util.AnnotationType.HIGHLIGHT:
                return new HighlightAnnotationElement(parameters);

              case _util.AnnotationType.UNDERLINE:
                return new UnderlineAnnotationElement(parameters);

              case _util.AnnotationType.SQUIGGLY:
                return new SquigglyAnnotationElement(parameters);

              case _util.AnnotationType.STRIKEOUT:
                return new StrikeOutAnnotationElement(parameters);

              case _util.AnnotationType.STAMP:
                return new StampAnnotationElement(parameters);

              case _util.AnnotationType.FILEATTACHMENT:
                return new FileAttachmentAnnotationElement(parameters);

              default:
                return new AnnotationElement(parameters);
            }
          }
        }]);

        return AnnotationElementFactory;
      }();

      var AnnotationElement = /*#__PURE__*/function () {
        function AnnotationElement(parameters) {
          var isRenderable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var ignoreBorder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          _classCallCheck(this, AnnotationElement);

          this.isRenderable = isRenderable;
          this.data = parameters.data;
          this.layer = parameters.layer;
          this.page = parameters.page;
          this.viewport = parameters.viewport;
          this.linkService = parameters.linkService;
          this.downloadManager = parameters.downloadManager;
          this.imageResourcesPath = parameters.imageResourcesPath;
          this.renderInteractiveForms = parameters.renderInteractiveForms;
          this.svgFactory = parameters.svgFactory;

          if (isRenderable) {
            this.container = this._createContainer(ignoreBorder);
          }
        }

        _createClass(AnnotationElement, [{
          key: "_createContainer",
          value: function _createContainer() {
            var ignoreBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var data = this.data,
                page = this.page,
                viewport = this.viewport;
            var container = document.createElement("section");
            var width = data.rect[2] - data.rect[0];
            var height = data.rect[3] - data.rect[1];
            container.setAttribute("data-annotation-id", data.id);

            var rect = _util.Util.normalizeRect([data.rect[0], page.view[3] - data.rect[1] + page.view[1], data.rect[2], page.view[3] - data.rect[3] + page.view[1]]);

            container.style.transform = "matrix(".concat(viewport.transform.join(","), ")");
            container.style.transformOrigin = "-".concat(rect[0], "px -").concat(rect[1], "px");

            if (!ignoreBorder && data.borderStyle.width > 0) {
              container.style.borderWidth = "".concat(data.borderStyle.width, "px");

              if (data.borderStyle.style !== _util.AnnotationBorderStyleType.UNDERLINE) {
                width = width - 2 * data.borderStyle.width;
                height = height - 2 * data.borderStyle.width;
              }

              var horizontalRadius = data.borderStyle.horizontalCornerRadius;
              var verticalRadius = data.borderStyle.verticalCornerRadius;

              if (horizontalRadius > 0 || verticalRadius > 0) {
                var radius = "".concat(horizontalRadius, "px / ").concat(verticalRadius, "px");
                container.style.borderRadius = radius;
              }

              switch (data.borderStyle.style) {
                case _util.AnnotationBorderStyleType.SOLID:
                  container.style.borderStyle = "solid";
                  break;

                case _util.AnnotationBorderStyleType.DASHED:
                  container.style.borderStyle = "dashed";
                  break;

                case _util.AnnotationBorderStyleType.BEVELED:
                  (0, _util.warn)("Unimplemented border style: beveled");
                  break;

                case _util.AnnotationBorderStyleType.INSET:
                  (0, _util.warn)("Unimplemented border style: inset");
                  break;

                case _util.AnnotationBorderStyleType.UNDERLINE:
                  container.style.borderBottomStyle = "solid";
                  break;

                default:
                  break;
              }

              if (data.color) {
                container.style.borderColor = _util.Util.makeCssRgb(data.color[0] | 0, data.color[1] | 0, data.color[2] | 0);
              } else {
                container.style.borderWidth = 0;
              }
            }

            container.style.left = "".concat(rect[0], "px");
            container.style.top = "".concat(rect[1], "px");
            container.style.width = "".concat(width, "px");
            container.style.height = "".concat(height, "px");
            return container;
          }
        }, {
          key: "_createPopup",
          value: function _createPopup(container, trigger, data) {
            if (!trigger) {
              trigger = document.createElement("div");
              trigger.style.height = container.style.height;
              trigger.style.width = container.style.width;
              container.appendChild(trigger);
            }

            var popupElement = new PopupElement({
              container: container,
              trigger: trigger,
              color: data.color,
              title: data.title,
              modificationDate: data.modificationDate,
              contents: data.contents,
              hideWrapper: true
            });
            var popup = popupElement.render();
            popup.style.left = container.style.width;
            container.appendChild(popup);
          }
        }, {
          key: "render",
          value: function render() {
            (0, _util.unreachable)("Abstract method `AnnotationElement.render` called");
          }
        }]);

        return AnnotationElement;
      }();

      var LinkAnnotationElement = /*#__PURE__*/function (_AnnotationElement) {
        _inherits(LinkAnnotationElement, _AnnotationElement);

        var _super11 = _createSuper(LinkAnnotationElement);

        function LinkAnnotationElement(parameters) {
          _classCallCheck(this, LinkAnnotationElement);

          var isRenderable = !!(parameters.data.url || parameters.data.dest || parameters.data.action);
          return _super11.call(this, parameters, isRenderable);
        }

        _createClass(LinkAnnotationElement, [{
          key: "render",
          value: function render() {
            this.container.className = "linkAnnotation";
            var data = this.data,
                linkService = this.linkService;
            var link = document.createElement("a");

            if (data.url) {
              (0, _display_utils.addLinkAttributes)(link, {
                url: data.url,
                target: data.newWindow ? _display_utils.LinkTarget.BLANK : linkService.externalLinkTarget,
                rel: linkService.externalLinkRel,
                enabled: linkService.externalLinkEnabled
              });
            } else if (data.action) {
              this._bindNamedAction(link, data.action);
            } else {
              this._bindLink(link, data.dest);
            }

            this.container.appendChild(link);
            return this.container;
          }
        }, {
          key: "_bindLink",
          value: function _bindLink(link, destination) {
            var _this34 = this;

            link.href = this.linkService.getDestinationHash(destination);

            link.onclick = function () {
              if (destination) {
                _this34.linkService.navigateTo(destination);
              }

              return false;
            };

            if (destination) {
              link.className = "internalLink";
            }
          }
        }, {
          key: "_bindNamedAction",
          value: function _bindNamedAction(link, action) {
            var _this35 = this;

            link.href = this.linkService.getAnchorUrl("");

            link.onclick = function () {
              _this35.linkService.executeNamedAction(action);

              return false;
            };

            link.className = "internalLink";
          }
        }]);

        return LinkAnnotationElement;
      }(AnnotationElement);

      var TextAnnotationElement = /*#__PURE__*/function (_AnnotationElement2) {
        _inherits(TextAnnotationElement, _AnnotationElement2);

        var _super12 = _createSuper(TextAnnotationElement);

        function TextAnnotationElement(parameters) {
          _classCallCheck(this, TextAnnotationElement);

          var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          return _super12.call(this, parameters, isRenderable);
        }

        _createClass(TextAnnotationElement, [{
          key: "render",
          value: function render() {
            this.container.className = "textAnnotation";
            var image = document.createElement("img");
            image.style.height = this.container.style.height;
            image.style.width = this.container.style.width;
            image.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg";
            image.alt = "[{{type}} Annotation]";
            image.dataset.l10nId = "text_annotation_type";
            image.dataset.l10nArgs = JSON.stringify({
              type: this.data.name
            });

            if (!this.data.hasPopup) {
              this._createPopup(this.container, image, this.data);
            }

            this.container.appendChild(image);
            return this.container;
          }
        }]);

        return TextAnnotationElement;
      }(AnnotationElement);

      var WidgetAnnotationElement = /*#__PURE__*/function (_AnnotationElement3) {
        _inherits(WidgetAnnotationElement, _AnnotationElement3);

        var _super13 = _createSuper(WidgetAnnotationElement);

        function WidgetAnnotationElement() {
          _classCallCheck(this, WidgetAnnotationElement);

          return _super13.apply(this, arguments);
        }

        _createClass(WidgetAnnotationElement, [{
          key: "render",
          value: function render() {
            return this.container;
          }
        }]);

        return WidgetAnnotationElement;
      }(AnnotationElement);

      var TextWidgetAnnotationElement = /*#__PURE__*/function (_WidgetAnnotationElem) {
        _inherits(TextWidgetAnnotationElement, _WidgetAnnotationElem);

        var _super14 = _createSuper(TextWidgetAnnotationElement);

        function TextWidgetAnnotationElement(parameters) {
          _classCallCheck(this, TextWidgetAnnotationElement);

          var isRenderable = parameters.renderInteractiveForms || !parameters.data.hasAppearance && !!parameters.data.fieldValue;
          return _super14.call(this, parameters, isRenderable);
        }

        _createClass(TextWidgetAnnotationElement, [{
          key: "render",
          value: function render() {
            var TEXT_ALIGNMENT = ["left", "center", "right"];
            this.container.className = "textWidgetAnnotation";
            var element = null;

            if (this.renderInteractiveForms) {
              if (this.data.multiLine) {
                element = document.createElement("textarea");
                element.textContent = this.data.fieldValue;
              } else {
                element = document.createElement("input");
                element.type = "text";
                element.setAttribute("value", this.data.fieldValue);
              }

              element.disabled = this.data.readOnly;

              if (this.data.maxLen !== null) {
                element.maxLength = this.data.maxLen;
              }

              if (this.data.comb) {
                var fieldWidth = this.data.rect[2] - this.data.rect[0];
                var combWidth = fieldWidth / this.data.maxLen;
                element.classList.add("comb");
                element.style.letterSpacing = "calc(".concat(combWidth, "px - 1ch)");
              }
            } else {
              element = document.createElement("div");
              element.textContent = this.data.fieldValue;
              element.style.verticalAlign = "middle";
              element.style.display = "table-cell";
              var font = null;

              if (this.data.fontRefName && this.page.commonObjs.has(this.data.fontRefName)) {
                font = this.page.commonObjs.get(this.data.fontRefName);
              }

              this._setTextStyle(element, font);
            }

            if (this.data.textAlignment !== null) {
              element.style.textAlign = TEXT_ALIGNMENT[this.data.textAlignment];
            }

            this.container.appendChild(element);
            return this.container;
          }
        }, {
          key: "_setTextStyle",
          value: function _setTextStyle(element, font) {
            var style = element.style;
            style.fontSize = "".concat(this.data.fontSize, "px");
            style.direction = this.data.fontDirection < 0 ? "rtl" : "ltr";

            if (!font) {
              return;
            }

            var bold = "normal";

            if (font.black) {
              bold = "900";
            } else if (font.bold) {
              bold = "bold";
            }

            style.fontWeight = bold;
            style.fontStyle = font.italic ? "italic" : "normal";
            var fontFamily = font.loadedName ? "\"".concat(font.loadedName, "\", ") : "";
            var fallbackName = font.fallbackName || "Helvetica, sans-serif";
            style.fontFamily = fontFamily + fallbackName;
          }
        }]);

        return TextWidgetAnnotationElement;
      }(WidgetAnnotationElement);

      var CheckboxWidgetAnnotationElement = /*#__PURE__*/function (_WidgetAnnotationElem2) {
        _inherits(CheckboxWidgetAnnotationElement, _WidgetAnnotationElem2);

        var _super15 = _createSuper(CheckboxWidgetAnnotationElement);

        function CheckboxWidgetAnnotationElement(parameters) {
          _classCallCheck(this, CheckboxWidgetAnnotationElement);

          return _super15.call(this, parameters, parameters.renderInteractiveForms);
        }

        _createClass(CheckboxWidgetAnnotationElement, [{
          key: "render",
          value: function render() {
            this.container.className = "buttonWidgetAnnotation checkBox";
            var element = document.createElement("input");
            element.disabled = this.data.readOnly;
            element.type = "checkbox";

            if (this.data.fieldValue && this.data.fieldValue !== "Off") {
              element.setAttribute("checked", true);
            }

            this.container.appendChild(element);
            return this.container;
          }
        }]);

        return CheckboxWidgetAnnotationElement;
      }(WidgetAnnotationElement);

      var RadioButtonWidgetAnnotationElement = /*#__PURE__*/function (_WidgetAnnotationElem3) {
        _inherits(RadioButtonWidgetAnnotationElement, _WidgetAnnotationElem3);

        var _super16 = _createSuper(RadioButtonWidgetAnnotationElement);

        function RadioButtonWidgetAnnotationElement(parameters) {
          _classCallCheck(this, RadioButtonWidgetAnnotationElement);

          return _super16.call(this, parameters, parameters.renderInteractiveForms);
        }

        _createClass(RadioButtonWidgetAnnotationElement, [{
          key: "render",
          value: function render() {
            this.container.className = "buttonWidgetAnnotation radioButton";
            var element = document.createElement("input");
            element.disabled = this.data.readOnly;
            element.type = "radio";
            element.name = this.data.fieldName;

            if (this.data.fieldValue === this.data.buttonValue) {
              element.setAttribute("checked", true);
            }

            this.container.appendChild(element);
            return this.container;
          }
        }]);

        return RadioButtonWidgetAnnotationElement;
      }(WidgetAnnotationElement);

      var PushButtonWidgetAnnotationElement = /*#__PURE__*/function (_LinkAnnotationElemen) {
        _inherits(PushButtonWidgetAnnotationElement, _LinkAnnotationElemen);

        var _super17 = _createSuper(PushButtonWidgetAnnotationElement);

        function PushButtonWidgetAnnotationElement() {
          _classCallCheck(this, PushButtonWidgetAnnotationElement);

          return _super17.apply(this, arguments);
        }

        _createClass(PushButtonWidgetAnnotationElement, [{
          key: "render",
          value: function render() {
            var container = _get(_getPrototypeOf(PushButtonWidgetAnnotationElement.prototype), "render", this).call(this);

            container.className = "buttonWidgetAnnotation pushButton";
            return container;
          }
        }]);

        return PushButtonWidgetAnnotationElement;
      }(LinkAnnotationElement);

      var ChoiceWidgetAnnotationElement = /*#__PURE__*/function (_WidgetAnnotationElem4) {
        _inherits(ChoiceWidgetAnnotationElement, _WidgetAnnotationElem4);

        var _super18 = _createSuper(ChoiceWidgetAnnotationElement);

        function ChoiceWidgetAnnotationElement(parameters) {
          _classCallCheck(this, ChoiceWidgetAnnotationElement);

          return _super18.call(this, parameters, parameters.renderInteractiveForms);
        }

        _createClass(ChoiceWidgetAnnotationElement, [{
          key: "render",
          value: function render() {
            this.container.className = "choiceWidgetAnnotation";
            var selectElement = document.createElement("select");
            selectElement.disabled = this.data.readOnly;

            if (!this.data.combo) {
              selectElement.size = this.data.options.length;

              if (this.data.multiSelect) {
                selectElement.multiple = true;
              }
            }

            var _iterator10 = _createForOfIteratorHelper(this.data.options),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var option = _step10.value;
                var optionElement = document.createElement("option");
                optionElement.textContent = option.displayValue;
                optionElement.value = option.exportValue;

                if (this.data.fieldValue.includes(option.displayValue)) {
                  optionElement.setAttribute("selected", true);
                }

                selectElement.appendChild(optionElement);
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }

            this.container.appendChild(selectElement);
            return this.container;
          }
        }]);

        return ChoiceWidgetAnnotationElement;
      }(WidgetAnnotationElement);

      var PopupAnnotationElement = /*#__PURE__*/function (_AnnotationElement4) {
        _inherits(PopupAnnotationElement, _AnnotationElement4);

        var _super19 = _createSuper(PopupAnnotationElement);

        function PopupAnnotationElement(parameters) {
          _classCallCheck(this, PopupAnnotationElement);

          var isRenderable = !!(parameters.data.title || parameters.data.contents);
          return _super19.call(this, parameters, isRenderable);
        }

        _createClass(PopupAnnotationElement, [{
          key: "render",
          value: function render() {
            var IGNORE_TYPES = ["Line", "Square", "Circle", "PolyLine", "Polygon", "Ink"];
            this.container.className = "popupAnnotation";

            if (IGNORE_TYPES.includes(this.data.parentType)) {
              return this.container;
            }

            var selector = "[data-annotation-id=\"".concat(this.data.parentId, "\"]");
            var parentElement = this.layer.querySelector(selector);

            if (!parentElement) {
              return this.container;
            }

            var popup = new PopupElement({
              container: this.container,
              trigger: parentElement,
              color: this.data.color,
              title: this.data.title,
              modificationDate: this.data.modificationDate,
              contents: this.data.contents
            });
            var parentLeft = parseFloat(parentElement.style.left);
            var parentWidth = parseFloat(parentElement.style.width);
            this.container.style.transformOrigin = "-".concat(parentLeft + parentWidth, "px -").concat(parentElement.style.top);
            this.container.style.left = "".concat(parentLeft + parentWidth, "px");
            this.container.appendChild(popup.render());
            return this.container;
          }
        }]);

        return PopupAnnotationElement;
      }(AnnotationElement);

      var PopupElement = /*#__PURE__*/function () {
        function PopupElement(parameters) {
          _classCallCheck(this, PopupElement);

          this.container = parameters.container;
          this.trigger = parameters.trigger;
          this.color = parameters.color;
          this.title = parameters.title;
          this.modificationDate = parameters.modificationDate;
          this.contents = parameters.contents;
          this.hideWrapper = parameters.hideWrapper || false;
          this.pinned = false;
        }

        _createClass(PopupElement, [{
          key: "render",
          value: function render() {
            var BACKGROUND_ENLIGHT = 0.7;
            var wrapper = document.createElement("div");
            wrapper.className = "popupWrapper";
            this.hideElement = this.hideWrapper ? wrapper : this.container;
            this.hideElement.setAttribute("hidden", true);
            var popup = document.createElement("div");
            popup.className = "popup";
            var color = this.color;

            if (color) {
              var r = BACKGROUND_ENLIGHT * (255 - color[0]) + color[0];
              var g = BACKGROUND_ENLIGHT * (255 - color[1]) + color[1];
              var b = BACKGROUND_ENLIGHT * (255 - color[2]) + color[2];
              popup.style.backgroundColor = _util.Util.makeCssRgb(r | 0, g | 0, b | 0);
            }

            var title = document.createElement("h1");
            title.textContent = this.title;
            popup.appendChild(title);

            var dateObject = _display_utils.PDFDateString.toDateObject(this.modificationDate);

            if (dateObject) {
              var modificationDate = document.createElement("span");
              modificationDate.textContent = "{{date}}, {{time}}";
              modificationDate.dataset.l10nId = "annotation_date_string";
              modificationDate.dataset.l10nArgs = JSON.stringify({
                date: dateObject.toLocaleDateString(),
                time: dateObject.toLocaleTimeString()
              });
              popup.appendChild(modificationDate);
            }

            var contents = this._formatContents(this.contents);

            popup.appendChild(contents);
            this.trigger.addEventListener("click", this._toggle.bind(this));
            this.trigger.addEventListener("mouseover", this._show.bind(this, false));
            this.trigger.addEventListener("mouseout", this._hide.bind(this, false));
            popup.addEventListener("click", this._hide.bind(this, true));
            wrapper.appendChild(popup);
            return wrapper;
          }
        }, {
          key: "_formatContents",
          value: function _formatContents(contents) {
            var p = document.createElement("p");
            var lines = contents.split(/(?:\r\n?|\n)/);

            for (var i = 0, ii = lines.length; i < ii; ++i) {
              var line = lines[i];
              p.appendChild(document.createTextNode(line));

              if (i < ii - 1) {
                p.appendChild(document.createElement("br"));
              }
            }

            return p;
          }
        }, {
          key: "_toggle",
          value: function _toggle() {
            if (this.pinned) {
              this._hide(true);
            } else {
              this._show(true);
            }
          }
        }, {
          key: "_show",
          value: function _show() {
            var pin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (pin) {
              this.pinned = true;
            }

            if (this.hideElement.hasAttribute("hidden")) {
              this.hideElement.removeAttribute("hidden");
              this.container.style.zIndex += 1;
            }
          }
        }, {
          key: "_hide",
          value: function _hide() {
            var unpin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            if (unpin) {
              this.pinned = false;
            }

            if (!this.hideElement.hasAttribute("hidden") && !this.pinned) {
              this.hideElement.setAttribute("hidden", true);
              this.container.style.zIndex -= 1;
            }
          }
        }]);

        return PopupElement;
      }();

      var FreeTextAnnotationElement = /*#__PURE__*/function (_AnnotationElement5) {
        _inherits(FreeTextAnnotationElement, _AnnotationElement5);

        var _super20 = _createSuper(FreeTextAnnotationElement);

        function FreeTextAnnotationElement(parameters) {
          _classCallCheck(this, FreeTextAnnotationElement);

          var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          return _super20.call(this, parameters, isRenderable, true);
        }

        _createClass(FreeTextAnnotationElement, [{
          key: "render",
          value: function render() {
            this.container.className = "freeTextAnnotation";

            if (!this.data.hasPopup) {
              this._createPopup(this.container, null, this.data);
            }

            return this.container;
          }
        }]);

        return FreeTextAnnotationElement;
      }(AnnotationElement);

      var LineAnnotationElement = /*#__PURE__*/function (_AnnotationElement6) {
        _inherits(LineAnnotationElement, _AnnotationElement6);

        var _super21 = _createSuper(LineAnnotationElement);

        function LineAnnotationElement(parameters) {
          _classCallCheck(this, LineAnnotationElement);

          var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          return _super21.call(this, parameters, isRenderable, true);
        }

        _createClass(LineAnnotationElement, [{
          key: "render",
          value: function render() {
            this.container.className = "lineAnnotation";
            var data = this.data;
            var width = data.rect[2] - data.rect[0];
            var height = data.rect[3] - data.rect[1];
            var svg = this.svgFactory.create(width, height);
            var line = this.svgFactory.createElement("svg:line");
            line.setAttribute("x1", data.rect[2] - data.lineCoordinates[0]);
            line.setAttribute("y1", data.rect[3] - data.lineCoordinates[1]);
            line.setAttribute("x2", data.rect[2] - data.lineCoordinates[2]);
            line.setAttribute("y2", data.rect[3] - data.lineCoordinates[3]);
            line.setAttribute("stroke-width", data.borderStyle.width || 1);
            line.setAttribute("stroke", "transparent");
            svg.appendChild(line);
            this.container.append(svg);

            this._createPopup(this.container, line, data);

            return this.container;
          }
        }]);

        return LineAnnotationElement;
      }(AnnotationElement);

      var SquareAnnotationElement = /*#__PURE__*/function (_AnnotationElement7) {
        _inherits(SquareAnnotationElement, _AnnotationElement7);

        var _super22 = _createSuper(SquareAnnotationElement);

        function SquareAnnotationElement(parameters) {
          _classCallCheck(this, SquareAnnotationElement);

          var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          return _super22.call(this, parameters, isRenderable, true);
        }

        _createClass(SquareAnnotationElement, [{
          key: "render",
          value: function render() {
            this.container.className = "squareAnnotation";
            var data = this.data;
            var width = data.rect[2] - data.rect[0];
            var height = data.rect[3] - data.rect[1];
            var svg = this.svgFactory.create(width, height);
            var borderWidth = data.borderStyle.width;
            var square = this.svgFactory.createElement("svg:rect");
            square.setAttribute("x", borderWidth / 2);
            square.setAttribute("y", borderWidth / 2);
            square.setAttribute("width", width - borderWidth);
            square.setAttribute("height", height - borderWidth);
            square.setAttribute("stroke-width", borderWidth || 1);
            square.setAttribute("stroke", "transparent");
            square.setAttribute("fill", "none");
            svg.appendChild(square);
            this.container.append(svg);

            this._createPopup(this.container, square, data);

            return this.container;
          }
        }]);

        return SquareAnnotationElement;
      }(AnnotationElement);

      var CircleAnnotationElement = /*#__PURE__*/function (_AnnotationElement8) {
        _inherits(CircleAnnotationElement, _AnnotationElement8);

        var _super23 = _createSuper(CircleAnnotationElement);

        function CircleAnnotationElement(parameters) {
          _classCallCheck(this, CircleAnnotationElement);

          var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          return _super23.call(this, parameters, isRenderable, true);
        }

        _createClass(CircleAnnotationElement, [{
          key: "render",
          value: function render() {
            this.container.className = "circleAnnotation";
            var data = this.data;
            var width = data.rect[2] - data.rect[0];
            var height = data.rect[3] - data.rect[1];
            var svg = this.svgFactory.create(width, height);
            var borderWidth = data.borderStyle.width;
            var circle = this.svgFactory.createElement("svg:ellipse");
            circle.setAttribute("cx", width / 2);
            circle.setAttribute("cy", height / 2);
            circle.setAttribute("rx", width / 2 - borderWidth / 2);
            circle.setAttribute("ry", height / 2 - borderWidth / 2);
            circle.setAttribute("stroke-width", borderWidth || 1);
            circle.setAttribute("stroke", "transparent");
            circle.setAttribute("fill", "none");
            svg.appendChild(circle);
            this.container.append(svg);

            this._createPopup(this.container, circle, data);

            return this.container;
          }
        }]);

        return CircleAnnotationElement;
      }(AnnotationElement);

      var PolylineAnnotationElement = /*#__PURE__*/function (_AnnotationElement9) {
        _inherits(PolylineAnnotationElement, _AnnotationElement9);

        var _super24 = _createSuper(PolylineAnnotationElement);

        function PolylineAnnotationElement(parameters) {
          var _this36;

          _classCallCheck(this, PolylineAnnotationElement);

          var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          _this36 = _super24.call(this, parameters, isRenderable, true);
          _this36.containerClassName = "polylineAnnotation";
          _this36.svgElementName = "svg:polyline";
          return _this36;
        }

        _createClass(PolylineAnnotationElement, [{
          key: "render",
          value: function render() {
            this.container.className = this.containerClassName;
            var data = this.data;
            var width = data.rect[2] - data.rect[0];
            var height = data.rect[3] - data.rect[1];
            var svg = this.svgFactory.create(width, height);
            var points = [];

            var _iterator11 = _createForOfIteratorHelper(data.vertices),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var coordinate = _step11.value;
                var x = coordinate.x - data.rect[0];
                var y = data.rect[3] - coordinate.y;
                points.push(x + "," + y);
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }

            points = points.join(" ");
            var polyline = this.svgFactory.createElement(this.svgElementName);
            polyline.setAttribute("points", points);
            polyline.setAttribute("stroke-width", data.borderStyle.width || 1);
            polyline.setAttribute("stroke", "transparent");
            polyline.setAttribute("fill", "none");
            svg.appendChild(polyline);
            this.container.append(svg);

            this._createPopup(this.container, polyline, data);

            return this.container;
          }
        }]);

        return PolylineAnnotationElement;
      }(AnnotationElement);

      var PolygonAnnotationElement = /*#__PURE__*/function (_PolylineAnnotationEl) {
        _inherits(PolygonAnnotationElement, _PolylineAnnotationEl);

        var _super25 = _createSuper(PolygonAnnotationElement);

        function PolygonAnnotationElement(parameters) {
          var _this37;

          _classCallCheck(this, PolygonAnnotationElement);

          _this37 = _super25.call(this, parameters);
          _this37.containerClassName = "polygonAnnotation";
          _this37.svgElementName = "svg:polygon";
          return _this37;
        }

        return PolygonAnnotationElement;
      }(PolylineAnnotationElement);

      var CaretAnnotationElement = /*#__PURE__*/function (_AnnotationElement10) {
        _inherits(CaretAnnotationElement, _AnnotationElement10);

        var _super26 = _createSuper(CaretAnnotationElement);

        function CaretAnnotationElement(parameters) {
          _classCallCheck(this, CaretAnnotationElement);

          var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          return _super26.call(this, parameters, isRenderable, true);
        }

        _createClass(CaretAnnotationElement, [{
          key: "render",
          value: function render() {
            this.container.className = "caretAnnotation";

            if (!this.data.hasPopup) {
              this._createPopup(this.container, null, this.data);
            }

            return this.container;
          }
        }]);

        return CaretAnnotationElement;
      }(AnnotationElement);

      var InkAnnotationElement = /*#__PURE__*/function (_AnnotationElement11) {
        _inherits(InkAnnotationElement, _AnnotationElement11);

        var _super27 = _createSuper(InkAnnotationElement);

        function InkAnnotationElement(parameters) {
          var _this38;

          _classCallCheck(this, InkAnnotationElement);

          var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          _this38 = _super27.call(this, parameters, isRenderable, true);
          _this38.containerClassName = "inkAnnotation";
          _this38.svgElementName = "svg:polyline";
          return _this38;
        }

        _createClass(InkAnnotationElement, [{
          key: "render",
          value: function render() {
            this.container.className = this.containerClassName;
            var data = this.data;
            var width = data.rect[2] - data.rect[0];
            var height = data.rect[3] - data.rect[1];
            var svg = this.svgFactory.create(width, height);

            var _iterator12 = _createForOfIteratorHelper(data.inkLists),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var inkList = _step12.value;
                var points = [];

                var _iterator13 = _createForOfIteratorHelper(inkList),
                    _step13;

                try {
                  for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                    var coordinate = _step13.value;
                    var x = coordinate.x - data.rect[0];
                    var y = data.rect[3] - coordinate.y;
                    points.push("".concat(x, ",").concat(y));
                  }
                } catch (err) {
                  _iterator13.e(err);
                } finally {
                  _iterator13.f();
                }

                points = points.join(" ");
                var polyline = this.svgFactory.createElement(this.svgElementName);
                polyline.setAttribute("points", points);
                polyline.setAttribute("stroke-width", data.borderStyle.width || 1);
                polyline.setAttribute("stroke", "transparent");
                polyline.setAttribute("fill", "none");

                this._createPopup(this.container, polyline, data);

                svg.appendChild(polyline);
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }

            this.container.append(svg);
            return this.container;
          }
        }]);

        return InkAnnotationElement;
      }(AnnotationElement);

      var HighlightAnnotationElement = /*#__PURE__*/function (_AnnotationElement12) {
        _inherits(HighlightAnnotationElement, _AnnotationElement12);

        var _super28 = _createSuper(HighlightAnnotationElement);

        function HighlightAnnotationElement(parameters) {
          _classCallCheck(this, HighlightAnnotationElement);

          var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          return _super28.call(this, parameters, isRenderable, true);
        }

        _createClass(HighlightAnnotationElement, [{
          key: "render",
          value: function render() {
            this.container.className = "highlightAnnotation";

            if (!this.data.hasPopup) {
              this._createPopup(this.container, null, this.data);
            }

            return this.container;
          }
        }]);

        return HighlightAnnotationElement;
      }(AnnotationElement);

      var UnderlineAnnotationElement = /*#__PURE__*/function (_AnnotationElement13) {
        _inherits(UnderlineAnnotationElement, _AnnotationElement13);

        var _super29 = _createSuper(UnderlineAnnotationElement);

        function UnderlineAnnotationElement(parameters) {
          _classCallCheck(this, UnderlineAnnotationElement);

          var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          return _super29.call(this, parameters, isRenderable, true);
        }

        _createClass(UnderlineAnnotationElement, [{
          key: "render",
          value: function render() {
            this.container.className = "underlineAnnotation";

            if (!this.data.hasPopup) {
              this._createPopup(this.container, null, this.data);
            }

            return this.container;
          }
        }]);

        return UnderlineAnnotationElement;
      }(AnnotationElement);

      var SquigglyAnnotationElement = /*#__PURE__*/function (_AnnotationElement14) {
        _inherits(SquigglyAnnotationElement, _AnnotationElement14);

        var _super30 = _createSuper(SquigglyAnnotationElement);

        function SquigglyAnnotationElement(parameters) {
          _classCallCheck(this, SquigglyAnnotationElement);

          var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          return _super30.call(this, parameters, isRenderable, true);
        }

        _createClass(SquigglyAnnotationElement, [{
          key: "render",
          value: function render() {
            this.container.className = "squigglyAnnotation";

            if (!this.data.hasPopup) {
              this._createPopup(this.container, null, this.data);
            }

            return this.container;
          }
        }]);

        return SquigglyAnnotationElement;
      }(AnnotationElement);

      var StrikeOutAnnotationElement = /*#__PURE__*/function (_AnnotationElement15) {
        _inherits(StrikeOutAnnotationElement, _AnnotationElement15);

        var _super31 = _createSuper(StrikeOutAnnotationElement);

        function StrikeOutAnnotationElement(parameters) {
          _classCallCheck(this, StrikeOutAnnotationElement);

          var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          return _super31.call(this, parameters, isRenderable, true);
        }

        _createClass(StrikeOutAnnotationElement, [{
          key: "render",
          value: function render() {
            this.container.className = "strikeoutAnnotation";

            if (!this.data.hasPopup) {
              this._createPopup(this.container, null, this.data);
            }

            return this.container;
          }
        }]);

        return StrikeOutAnnotationElement;
      }(AnnotationElement);

      var StampAnnotationElement = /*#__PURE__*/function (_AnnotationElement16) {
        _inherits(StampAnnotationElement, _AnnotationElement16);

        var _super32 = _createSuper(StampAnnotationElement);

        function StampAnnotationElement(parameters) {
          _classCallCheck(this, StampAnnotationElement);

          var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
          return _super32.call(this, parameters, isRenderable, true);
        }

        _createClass(StampAnnotationElement, [{
          key: "render",
          value: function render() {
            this.container.className = "stampAnnotation";

            if (!this.data.hasPopup) {
              this._createPopup(this.container, null, this.data);
            }

            return this.container;
          }
        }]);

        return StampAnnotationElement;
      }(AnnotationElement);

      var FileAttachmentAnnotationElement = /*#__PURE__*/function (_AnnotationElement17) {
        _inherits(FileAttachmentAnnotationElement, _AnnotationElement17);

        var _super33 = _createSuper(FileAttachmentAnnotationElement);

        function FileAttachmentAnnotationElement(parameters) {
          var _this39;

          _classCallCheck(this, FileAttachmentAnnotationElement);

          _this39 = _super33.call(this, parameters, true);
          var _this39$data$file = _this39.data.file,
              filename = _this39$data$file.filename,
              content = _this39$data$file.content;
          _this39.filename = (0, _display_utils.getFilenameFromUrl)(filename);
          _this39.content = content;

          if (_this39.linkService.eventBus) {
            _this39.linkService.eventBus.dispatch("fileattachmentannotation", {
              source: _assertThisInitialized(_this39),
              id: (0, _util.stringToPDFString)(filename),
              filename: filename,
              content: content
            });
          }

          return _this39;
        }

        _createClass(FileAttachmentAnnotationElement, [{
          key: "render",
          value: function render() {
            this.container.className = "fileAttachmentAnnotation";
            var trigger = document.createElement("div");
            trigger.style.height = this.container.style.height;
            trigger.style.width = this.container.style.width;
            trigger.addEventListener("dblclick", this._download.bind(this));

            if (!this.data.hasPopup && (this.data.title || this.data.contents)) {
              this._createPopup(this.container, trigger, this.data);
            }

            this.container.appendChild(trigger);
            return this.container;
          }
        }, {
          key: "_download",
          value: function _download() {
            if (!this.downloadManager) {
              (0, _util.warn)("Download cannot be started due to unavailable download manager");
              return;
            }

            this.downloadManager.downloadData(this.content, this.filename, "");
          }
        }]);

        return FileAttachmentAnnotationElement;
      }(AnnotationElement);

      var AnnotationLayer = /*#__PURE__*/function () {
        function AnnotationLayer() {
          _classCallCheck(this, AnnotationLayer);
        }

        _createClass(AnnotationLayer, null, [{
          key: "render",
          value: function render(parameters) {
            var sortedAnnotations = [],
                popupAnnotations = [];

            var _iterator14 = _createForOfIteratorHelper(parameters.annotations),
                _step14;

            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var _data4 = _step14.value;

                if (!_data4) {
                  continue;
                }

                if (_data4.annotationType === _util.AnnotationType.POPUP) {
                  popupAnnotations.push(_data4);
                  continue;
                }

                sortedAnnotations.push(_data4);
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }

            if (popupAnnotations.length) {
              sortedAnnotations.push.apply(sortedAnnotations, popupAnnotations);
            }

            for (var _i7 = 0, _sortedAnnotations = sortedAnnotations; _i7 < _sortedAnnotations.length; _i7++) {
              var data = _sortedAnnotations[_i7];
              var element = AnnotationElementFactory.create({
                data: data,
                layer: parameters.div,
                page: parameters.page,
                viewport: parameters.viewport,
                linkService: parameters.linkService,
                downloadManager: parameters.downloadManager,
                imageResourcesPath: parameters.imageResourcesPath || "",
                renderInteractiveForms: parameters.renderInteractiveForms || false,
                svgFactory: new _display_utils.DOMSVGFactory()
              });

              if (element.isRenderable) {
                parameters.div.appendChild(element.render());
              }
            }
          }
        }, {
          key: "update",
          value: function update(parameters) {
            var _iterator15 = _createForOfIteratorHelper(parameters.annotations),
                _step15;

            try {
              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                var data = _step15.value;
                var element = parameters.div.querySelector("[data-annotation-id=\"".concat(data.id, "\"]"));

                if (element) {
                  element.style.transform = "matrix(".concat(parameters.viewport.transform.join(","), ")");
                }
              }
            } catch (err) {
              _iterator15.e(err);
            } finally {
              _iterator15.f();
            }

            parameters.div.removeAttribute("hidden");
          }
        }]);

        return AnnotationLayer;
      }();

      exports.AnnotationLayer = AnnotationLayer;
      /***/
    },
    /* 18 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SVGGraphics = void 0;

      var _util = __w_pdfjs_require__(1);

      var _display_utils = __w_pdfjs_require__(4);

      var _is_node = __w_pdfjs_require__(7);

      var SVGGraphics = function SVGGraphics() {
        throw new Error("Not implemented: SVGGraphics");
      };

      exports.SVGGraphics = SVGGraphics;
      {
        var opListToTree = function opListToTree(opList) {
          var opTree = [];
          var tmp = [];

          var _iterator16 = _createForOfIteratorHelper(opList),
              _step16;

          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var opListElement = _step16.value;

              if (opListElement.fn === "save") {
                opTree.push({
                  fnId: 92,
                  fn: "group",
                  items: []
                });
                tmp.push(opTree);
                opTree = opTree[opTree.length - 1].items;
                continue;
              }

              if (opListElement.fn === "restore") {
                opTree = tmp.pop();
              } else {
                opTree.push(opListElement);
              }
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }

          return opTree;
        };

        var pf = function pf(value) {
          if (Number.isInteger(value)) {
            return value.toString();
          }

          var s = value.toFixed(10);
          var i = s.length - 1;

          if (s[i] !== "0") {
            return s;
          }

          do {
            i--;
          } while (s[i] === "0");

          return s.substring(0, s[i] === "." ? i : i + 1);
        };

        var pm = function pm(m) {
          if (m[4] === 0 && m[5] === 0) {
            if (m[1] === 0 && m[2] === 0) {
              if (m[0] === 1 && m[3] === 1) {
                return "";
              }

              return "scale(".concat(pf(m[0]), " ").concat(pf(m[3]), ")");
            }

            if (m[0] === m[3] && m[1] === -m[2]) {
              var a = Math.acos(m[0]) * 180 / Math.PI;
              return "rotate(".concat(pf(a), ")");
            }
          } else {
            if (m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1) {
              return "translate(".concat(pf(m[4]), " ").concat(pf(m[5]), ")");
            }
          }

          return "matrix(".concat(pf(m[0]), " ").concat(pf(m[1]), " ").concat(pf(m[2]), " ").concat(pf(m[3]), " ").concat(pf(m[4]), " ") + "".concat(pf(m[5]), ")");
        };

        var SVG_DEFAULTS = {
          fontStyle: "normal",
          fontWeight: "normal",
          fillColor: "#000000"
        };
        var XML_NS = "http://www.w3.org/XML/1998/namespace";
        var XLINK_NS = "http://www.w3.org/1999/xlink";
        var LINE_CAP_STYLES = ["butt", "round", "square"];
        var LINE_JOIN_STYLES = ["miter", "round", "bevel"];

        var convertImgDataToPng = function () {
          var PNG_HEADER = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
          var CHUNK_WRAPPER_SIZE = 12;
          var crcTable = new Int32Array(256);

          for (var i = 0; i < 256; i++) {
            var c = i;

            for (var h = 0; h < 8; h++) {
              if (c & 1) {
                c = 0xedb88320 ^ c >> 1 & 0x7fffffff;
              } else {
                c = c >> 1 & 0x7fffffff;
              }
            }

            crcTable[i] = c;
          }

          function crc32(data, start, end) {
            var crc = -1;

            for (var _i8 = start; _i8 < end; _i8++) {
              var a = (crc ^ data[_i8]) & 0xff;
              var b = crcTable[a];
              crc = crc >>> 8 ^ b;
            }

            return crc ^ -1;
          }

          function writePngChunk(type, body, data, offset) {
            var p = offset;
            var len = body.length;
            data[p] = len >> 24 & 0xff;
            data[p + 1] = len >> 16 & 0xff;
            data[p + 2] = len >> 8 & 0xff;
            data[p + 3] = len & 0xff;
            p += 4;
            data[p] = type.charCodeAt(0) & 0xff;
            data[p + 1] = type.charCodeAt(1) & 0xff;
            data[p + 2] = type.charCodeAt(2) & 0xff;
            data[p + 3] = type.charCodeAt(3) & 0xff;
            p += 4;
            data.set(body, p);
            p += body.length;
            var crc = crc32(data, offset + 4, p);
            data[p] = crc >> 24 & 0xff;
            data[p + 1] = crc >> 16 & 0xff;
            data[p + 2] = crc >> 8 & 0xff;
            data[p + 3] = crc & 0xff;
          }

          function adler32(data, start, end) {
            var a = 1;
            var b = 0;

            for (var _i9 = start; _i9 < end; ++_i9) {
              a = (a + (data[_i9] & 0xff)) % 65521;
              b = (b + a) % 65521;
            }

            return b << 16 | a;
          }

          function deflateSync(literals) {
            if (!_is_node.isNodeJS) {
              return deflateSyncUncompressed(literals);
            }

            try {
              var input;

              if (parseInt(process.versions.node) >= 8) {
                input = literals;
              } else {
                input = Buffer.from(literals);
              }

              var output = __webpack_require__(/*! zlib */ 0).deflateSync(input, {
                level: 9
              });

              return output instanceof Uint8Array ? output : new Uint8Array(output);
            } catch (e) {
              (0, _util.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + e);
            }

            return deflateSyncUncompressed(literals);
          }

          function deflateSyncUncompressed(literals) {
            var len = literals.length;
            var maxBlockLength = 0xffff;
            var deflateBlocks = Math.ceil(len / maxBlockLength);
            var idat = new Uint8Array(2 + len + deflateBlocks * 5 + 4);
            var pi = 0;
            idat[pi++] = 0x78;
            idat[pi++] = 0x9c;
            var pos = 0;

            while (len > maxBlockLength) {
              idat[pi++] = 0x00;
              idat[pi++] = 0xff;
              idat[pi++] = 0xff;
              idat[pi++] = 0x00;
              idat[pi++] = 0x00;
              idat.set(literals.subarray(pos, pos + maxBlockLength), pi);
              pi += maxBlockLength;
              pos += maxBlockLength;
              len -= maxBlockLength;
            }

            idat[pi++] = 0x01;
            idat[pi++] = len & 0xff;
            idat[pi++] = len >> 8 & 0xff;
            idat[pi++] = ~len & 0xffff & 0xff;
            idat[pi++] = (~len & 0xffff) >> 8 & 0xff;
            idat.set(literals.subarray(pos), pi);
            pi += literals.length - pos;
            var adler = adler32(literals, 0, literals.length);
            idat[pi++] = adler >> 24 & 0xff;
            idat[pi++] = adler >> 16 & 0xff;
            idat[pi++] = adler >> 8 & 0xff;
            idat[pi++] = adler & 0xff;
            return idat;
          }

          function encode(imgData, kind, forceDataSchema, isMask) {
            var width = imgData.width;
            var height = imgData.height;
            var bitDepth, colorType, lineSize;
            var bytes = imgData.data;

            switch (kind) {
              case _util.ImageKind.GRAYSCALE_1BPP:
                colorType = 0;
                bitDepth = 1;
                lineSize = width + 7 >> 3;
                break;

              case _util.ImageKind.RGB_24BPP:
                colorType = 2;
                bitDepth = 8;
                lineSize = width * 3;
                break;

              case _util.ImageKind.RGBA_32BPP:
                colorType = 6;
                bitDepth = 8;
                lineSize = width * 4;
                break;

              default:
                throw new Error("invalid format");
            }

            var literals = new Uint8Array((1 + lineSize) * height);
            var offsetLiterals = 0,
                offsetBytes = 0;

            for (var y = 0; y < height; ++y) {
              literals[offsetLiterals++] = 0;
              literals.set(bytes.subarray(offsetBytes, offsetBytes + lineSize), offsetLiterals);
              offsetBytes += lineSize;
              offsetLiterals += lineSize;
            }

            if (kind === _util.ImageKind.GRAYSCALE_1BPP && isMask) {
              offsetLiterals = 0;

              for (var _y = 0; _y < height; _y++) {
                offsetLiterals++;

                for (var _i10 = 0; _i10 < lineSize; _i10++) {
                  literals[offsetLiterals++] ^= 0xff;
                }
              }
            }

            var ihdr = new Uint8Array([width >> 24 & 0xff, width >> 16 & 0xff, width >> 8 & 0xff, width & 0xff, height >> 24 & 0xff, height >> 16 & 0xff, height >> 8 & 0xff, height & 0xff, bitDepth, colorType, 0x00, 0x00, 0x00]);
            var idat = deflateSync(literals);
            var pngLength = PNG_HEADER.length + CHUNK_WRAPPER_SIZE * 3 + ihdr.length + idat.length;
            var data = new Uint8Array(pngLength);
            var offset = 0;
            data.set(PNG_HEADER, offset);
            offset += PNG_HEADER.length;
            writePngChunk("IHDR", ihdr, data, offset);
            offset += CHUNK_WRAPPER_SIZE + ihdr.length;
            writePngChunk("IDATA", idat, data, offset);
            offset += CHUNK_WRAPPER_SIZE + idat.length;
            writePngChunk("IEND", new Uint8Array(0), data, offset);
            return (0, _util.createObjectURL)(data, "image/png", forceDataSchema);
          }

          return function convertImgDataToPng(imgData, forceDataSchema, isMask) {
            var kind = imgData.kind === undefined ? _util.ImageKind.GRAYSCALE_1BPP : imgData.kind;
            return encode(imgData, kind, forceDataSchema, isMask);
          };
        }();

        var SVGExtraState = /*#__PURE__*/function () {
          function SVGExtraState() {
            _classCallCheck(this, SVGExtraState);

            this.fontSizeScale = 1;
            this.fontWeight = SVG_DEFAULTS.fontWeight;
            this.fontSize = 0;
            this.textMatrix = _util.IDENTITY_MATRIX;
            this.fontMatrix = _util.FONT_IDENTITY_MATRIX;
            this.leading = 0;
            this.textRenderingMode = _util.TextRenderingMode.FILL;
            this.textMatrixScale = 1;
            this.x = 0;
            this.y = 0;
            this.lineX = 0;
            this.lineY = 0;
            this.charSpacing = 0;
            this.wordSpacing = 0;
            this.textHScale = 1;
            this.textRise = 0;
            this.fillColor = SVG_DEFAULTS.fillColor;
            this.strokeColor = "#000000";
            this.fillAlpha = 1;
            this.strokeAlpha = 1;
            this.lineWidth = 1;
            this.lineJoin = "";
            this.lineCap = "";
            this.miterLimit = 0;
            this.dashArray = [];
            this.dashPhase = 0;
            this.dependencies = [];
            this.activeClipUrl = null;
            this.clipGroup = null;
            this.maskId = "";
          }

          _createClass(SVGExtraState, [{
            key: "clone",
            value: function clone() {
              return Object.create(this);
            }
          }, {
            key: "setCurrentPoint",
            value: function setCurrentPoint(x, y) {
              this.x = x;
              this.y = y;
            }
          }]);

          return SVGExtraState;
        }();

        var clipCount = 0;
        var maskCount = 0;
        var shadingCount = 0;

        exports.SVGGraphics = SVGGraphics = /*#__PURE__*/function () {
          function SVGGraphics(commonObjs, objs, forceDataSchema) {
            _classCallCheck(this, SVGGraphics);

            this.svgFactory = new _display_utils.DOMSVGFactory();
            this.current = new SVGExtraState();
            this.transformMatrix = _util.IDENTITY_MATRIX;
            this.transformStack = [];
            this.extraStack = [];
            this.commonObjs = commonObjs;
            this.objs = objs;
            this.pendingClip = null;
            this.pendingEOFill = false;
            this.embedFonts = false;
            this.embeddedFonts = Object.create(null);
            this.cssStyle = null;
            this.forceDataSchema = !!forceDataSchema;
            this._operatorIdMapping = [];

            for (var op in _util.OPS) {
              this._operatorIdMapping[_util.OPS[op]] = op;
            }
          }

          _createClass(SVGGraphics, [{
            key: "save",
            value: function save() {
              this.transformStack.push(this.transformMatrix);
              var old = this.current;
              this.extraStack.push(old);
              this.current = old.clone();
            }
          }, {
            key: "restore",
            value: function restore() {
              this.transformMatrix = this.transformStack.pop();
              this.current = this.extraStack.pop();
              this.pendingClip = null;
              this.tgrp = null;
            }
          }, {
            key: "group",
            value: function group(items) {
              this.save();
              this.executeOpTree(items);
              this.restore();
            }
          }, {
            key: "loadDependencies",
            value: function loadDependencies(operatorList) {
              var _this40 = this;

              var fnArray = operatorList.fnArray;
              var argsArray = operatorList.argsArray;

              for (var i = 0, ii = fnArray.length; i < ii; i++) {
                if (fnArray[i] !== _util.OPS.dependency) {
                  continue;
                }

                var _iterator17 = _createForOfIteratorHelper(argsArray[i]),
                    _step17;

                try {
                  var _loop = function _loop() {
                    var obj = _step17.value;
                    var objsPool = obj.startsWith("g_") ? _this40.commonObjs : _this40.objs;
                    var promise = new Promise(function (resolve) {
                      objsPool.get(obj, resolve);
                    });

                    _this40.current.dependencies.push(promise);
                  };

                  for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                    _loop();
                  }
                } catch (err) {
                  _iterator17.e(err);
                } finally {
                  _iterator17.f();
                }
              }

              return Promise.all(this.current.dependencies);
            }
          }, {
            key: "transform",
            value: function transform(a, b, c, d, e, f) {
              var transformMatrix = [a, b, c, d, e, f];
              this.transformMatrix = _util.Util.transform(this.transformMatrix, transformMatrix);
              this.tgrp = null;
            }
          }, {
            key: "getSVG",
            value: function getSVG(operatorList, viewport) {
              var _this41 = this;

              this.viewport = viewport;

              var svgElement = this._initialize(viewport);

              return this.loadDependencies(operatorList).then(function () {
                _this41.transformMatrix = _util.IDENTITY_MATRIX;

                _this41.executeOpTree(_this41.convertOpList(operatorList));

                return svgElement;
              });
            }
          }, {
            key: "convertOpList",
            value: function convertOpList(operatorList) {
              var operatorIdMapping = this._operatorIdMapping;
              var argsArray = operatorList.argsArray;
              var fnArray = operatorList.fnArray;
              var opList = [];

              for (var i = 0, ii = fnArray.length; i < ii; i++) {
                var fnId = fnArray[i];
                opList.push({
                  fnId: fnId,
                  fn: operatorIdMapping[fnId],
                  args: argsArray[i]
                });
              }

              return opListToTree(opList);
            }
          }, {
            key: "executeOpTree",
            value: function executeOpTree(opTree) {
              var _iterator18 = _createForOfIteratorHelper(opTree),
                  _step18;

              try {
                for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                  var opTreeElement = _step18.value;
                  var fn = opTreeElement.fn;
                  var fnId = opTreeElement.fnId;
                  var args = opTreeElement.args;

                  switch (fnId | 0) {
                    case _util.OPS.beginText:
                      this.beginText();
                      break;

                    case _util.OPS.dependency:
                      break;

                    case _util.OPS.setLeading:
                      this.setLeading(args);
                      break;

                    case _util.OPS.setLeadingMoveText:
                      this.setLeadingMoveText(args[0], args[1]);
                      break;

                    case _util.OPS.setFont:
                      this.setFont(args);
                      break;

                    case _util.OPS.showText:
                      this.showText(args[0]);
                      break;

                    case _util.OPS.showSpacedText:
                      this.showText(args[0]);
                      break;

                    case _util.OPS.endText:
                      this.endText();
                      break;

                    case _util.OPS.moveText:
                      this.moveText(args[0], args[1]);
                      break;

                    case _util.OPS.setCharSpacing:
                      this.setCharSpacing(args[0]);
                      break;

                    case _util.OPS.setWordSpacing:
                      this.setWordSpacing(args[0]);
                      break;

                    case _util.OPS.setHScale:
                      this.setHScale(args[0]);
                      break;

                    case _util.OPS.setTextMatrix:
                      this.setTextMatrix(args[0], args[1], args[2], args[3], args[4], args[5]);
                      break;

                    case _util.OPS.setTextRise:
                      this.setTextRise(args[0]);
                      break;

                    case _util.OPS.setTextRenderingMode:
                      this.setTextRenderingMode(args[0]);
                      break;

                    case _util.OPS.setLineWidth:
                      this.setLineWidth(args[0]);
                      break;

                    case _util.OPS.setLineJoin:
                      this.setLineJoin(args[0]);
                      break;

                    case _util.OPS.setLineCap:
                      this.setLineCap(args[0]);
                      break;

                    case _util.OPS.setMiterLimit:
                      this.setMiterLimit(args[0]);
                      break;

                    case _util.OPS.setFillRGBColor:
                      this.setFillRGBColor(args[0], args[1], args[2]);
                      break;

                    case _util.OPS.setStrokeRGBColor:
                      this.setStrokeRGBColor(args[0], args[1], args[2]);
                      break;

                    case _util.OPS.setStrokeColorN:
                      this.setStrokeColorN(args);
                      break;

                    case _util.OPS.setFillColorN:
                      this.setFillColorN(args);
                      break;

                    case _util.OPS.shadingFill:
                      this.shadingFill(args[0]);
                      break;

                    case _util.OPS.setDash:
                      this.setDash(args[0], args[1]);
                      break;

                    case _util.OPS.setRenderingIntent:
                      this.setRenderingIntent(args[0]);
                      break;

                    case _util.OPS.setFlatness:
                      this.setFlatness(args[0]);
                      break;

                    case _util.OPS.setGState:
                      this.setGState(args[0]);
                      break;

                    case _util.OPS.fill:
                      this.fill();
                      break;

                    case _util.OPS.eoFill:
                      this.eoFill();
                      break;

                    case _util.OPS.stroke:
                      this.stroke();
                      break;

                    case _util.OPS.fillStroke:
                      this.fillStroke();
                      break;

                    case _util.OPS.eoFillStroke:
                      this.eoFillStroke();
                      break;

                    case _util.OPS.clip:
                      this.clip("nonzero");
                      break;

                    case _util.OPS.eoClip:
                      this.clip("evenodd");
                      break;

                    case _util.OPS.paintSolidColorImageMask:
                      this.paintSolidColorImageMask();
                      break;

                    case _util.OPS.paintJpegXObject:
                      this.paintJpegXObject(args[0], args[1], args[2]);
                      break;

                    case _util.OPS.paintImageXObject:
                      this.paintImageXObject(args[0]);
                      break;

                    case _util.OPS.paintInlineImageXObject:
                      this.paintInlineImageXObject(args[0]);
                      break;

                    case _util.OPS.paintImageMaskXObject:
                      this.paintImageMaskXObject(args[0]);
                      break;

                    case _util.OPS.paintFormXObjectBegin:
                      this.paintFormXObjectBegin(args[0], args[1]);
                      break;

                    case _util.OPS.paintFormXObjectEnd:
                      this.paintFormXObjectEnd();
                      break;

                    case _util.OPS.closePath:
                      this.closePath();
                      break;

                    case _util.OPS.closeStroke:
                      this.closeStroke();
                      break;

                    case _util.OPS.closeFillStroke:
                      this.closeFillStroke();
                      break;

                    case _util.OPS.closeEOFillStroke:
                      this.closeEOFillStroke();
                      break;

                    case _util.OPS.nextLine:
                      this.nextLine();
                      break;

                    case _util.OPS.transform:
                      this.transform(args[0], args[1], args[2], args[3], args[4], args[5]);
                      break;

                    case _util.OPS.constructPath:
                      this.constructPath(args[0], args[1]);
                      break;

                    case _util.OPS.endPath:
                      this.endPath();
                      break;

                    case 92:
                      this.group(opTreeElement.items);
                      break;

                    default:
                      (0, _util.warn)("Unimplemented operator ".concat(fn));
                      break;
                  }
                }
              } catch (err) {
                _iterator18.e(err);
              } finally {
                _iterator18.f();
              }
            }
          }, {
            key: "setWordSpacing",
            value: function setWordSpacing(wordSpacing) {
              this.current.wordSpacing = wordSpacing;
            }
          }, {
            key: "setCharSpacing",
            value: function setCharSpacing(charSpacing) {
              this.current.charSpacing = charSpacing;
            }
          }, {
            key: "nextLine",
            value: function nextLine() {
              this.moveText(0, this.current.leading);
            }
          }, {
            key: "setTextMatrix",
            value: function setTextMatrix(a, b, c, d, e, f) {
              var current = this.current;
              current.textMatrix = current.lineMatrix = [a, b, c, d, e, f];
              current.textMatrixScale = Math.sqrt(a * a + b * b);
              current.x = current.lineX = 0;
              current.y = current.lineY = 0;
              current.xcoords = [];
              current.tspan = this.svgFactory.createElement("svg:tspan");
              current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
              current.tspan.setAttributeNS(null, "font-size", "".concat(pf(current.fontSize), "px"));
              current.tspan.setAttributeNS(null, "y", pf(-current.y));
              current.txtElement = this.svgFactory.createElement("svg:text");
              current.txtElement.appendChild(current.tspan);
            }
          }, {
            key: "beginText",
            value: function beginText() {
              var current = this.current;
              current.x = current.lineX = 0;
              current.y = current.lineY = 0;
              current.textMatrix = _util.IDENTITY_MATRIX;
              current.lineMatrix = _util.IDENTITY_MATRIX;
              current.textMatrixScale = 1;
              current.tspan = this.svgFactory.createElement("svg:tspan");
              current.txtElement = this.svgFactory.createElement("svg:text");
              current.txtgrp = this.svgFactory.createElement("svg:g");
              current.xcoords = [];
            }
          }, {
            key: "moveText",
            value: function moveText(x, y) {
              var current = this.current;
              current.x = current.lineX += x;
              current.y = current.lineY += y;
              current.xcoords = [];
              current.tspan = this.svgFactory.createElement("svg:tspan");
              current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
              current.tspan.setAttributeNS(null, "font-size", "".concat(pf(current.fontSize), "px"));
              current.tspan.setAttributeNS(null, "y", pf(-current.y));
            }
          }, {
            key: "showText",
            value: function showText(glyphs) {
              var current = this.current;
              var font = current.font;
              var fontSize = current.fontSize;

              if (fontSize === 0) {
                return;
              }

              var charSpacing = current.charSpacing;
              var wordSpacing = current.wordSpacing;
              var fontDirection = current.fontDirection;
              var textHScale = current.textHScale * fontDirection;
              var vertical = font.vertical;
              var widthAdvanceScale = fontSize * current.fontMatrix[0];
              var x = 0;

              var _iterator19 = _createForOfIteratorHelper(glyphs),
                  _step19;

              try {
                for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                  var glyph = _step19.value;

                  if (glyph === null) {
                    x += fontDirection * wordSpacing;
                    continue;
                  } else if ((0, _util.isNum)(glyph)) {
                    x += -glyph * fontSize * 0.001;
                    continue;
                  }

                  var width = glyph.width;
                  var character = glyph.fontChar;
                  var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
                  var charWidth = width * widthAdvanceScale + spacing * fontDirection;

                  if (!glyph.isInFont && !font.missingFile) {
                    x += charWidth;
                    continue;
                  }

                  current.xcoords.push(current.x + x);
                  current.tspan.textContent += character;
                  x += charWidth;
                }
              } catch (err) {
                _iterator19.e(err);
              } finally {
                _iterator19.f();
              }

              if (vertical) {
                current.y -= x * textHScale;
              } else {
                current.x += x * textHScale;
              }

              current.tspan.setAttributeNS(null, "x", current.xcoords.map(pf).join(" "));
              current.tspan.setAttributeNS(null, "y", pf(-current.y));
              current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
              current.tspan.setAttributeNS(null, "font-size", "".concat(pf(current.fontSize), "px"));

              if (current.fontStyle !== SVG_DEFAULTS.fontStyle) {
                current.tspan.setAttributeNS(null, "font-style", current.fontStyle);
              }

              if (current.fontWeight !== SVG_DEFAULTS.fontWeight) {
                current.tspan.setAttributeNS(null, "font-weight", current.fontWeight);
              }

              var fillStrokeMode = current.textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;

              if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                if (current.fillColor !== SVG_DEFAULTS.fillColor) {
                  current.tspan.setAttributeNS(null, "fill", current.fillColor);
                }

                if (current.fillAlpha < 1) {
                  current.tspan.setAttributeNS(null, "fill-opacity", current.fillAlpha);
                }
              } else if (current.textRenderingMode === _util.TextRenderingMode.ADD_TO_PATH) {
                current.tspan.setAttributeNS(null, "fill", "transparent");
              } else {
                current.tspan.setAttributeNS(null, "fill", "none");
              }

              if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
                var lineWidthScale = 1 / (current.textMatrixScale || 1);

                this._setStrokeAttributes(current.tspan, lineWidthScale);
              }

              var textMatrix = current.textMatrix;

              if (current.textRise !== 0) {
                textMatrix = textMatrix.slice();
                textMatrix[5] += current.textRise;
              }

              current.txtElement.setAttributeNS(null, "transform", "".concat(pm(textMatrix), " scale(").concat(pf(textHScale), ", -1)"));
              current.txtElement.setAttributeNS(XML_NS, "xml:space", "preserve");
              current.txtElement.appendChild(current.tspan);
              current.txtgrp.appendChild(current.txtElement);

              this._ensureTransformGroup().appendChild(current.txtElement);
            }
          }, {
            key: "setLeadingMoveText",
            value: function setLeadingMoveText(x, y) {
              this.setLeading(-y);
              this.moveText(x, y);
            }
          }, {
            key: "addFontStyle",
            value: function addFontStyle(fontObj) {
              if (!this.cssStyle) {
                this.cssStyle = this.svgFactory.createElement("svg:style");
                this.cssStyle.setAttributeNS(null, "type", "text/css");
                this.defs.appendChild(this.cssStyle);
              }

              var url = (0, _util.createObjectURL)(fontObj.data, fontObj.mimetype, this.forceDataSchema);
              this.cssStyle.textContent += "@font-face { font-family: \"".concat(fontObj.loadedName, "\";") + " src: url(".concat(url, "); }\n");
            }
          }, {
            key: "setFont",
            value: function setFont(details) {
              var current = this.current;
              var fontObj = this.commonObjs.get(details[0]);
              var size = details[1];
              current.font = fontObj;

              if (this.embedFonts && fontObj.data && !this.embeddedFonts[fontObj.loadedName]) {
                this.addFontStyle(fontObj);
                this.embeddedFonts[fontObj.loadedName] = fontObj;
              }

              current.fontMatrix = fontObj.fontMatrix ? fontObj.fontMatrix : _util.FONT_IDENTITY_MATRIX;
              var bold = "normal";

              if (fontObj.black) {
                bold = "900";
              } else if (fontObj.bold) {
                bold = "bold";
              }

              var italic = fontObj.italic ? "italic" : "normal";

              if (size < 0) {
                size = -size;
                current.fontDirection = -1;
              } else {
                current.fontDirection = 1;
              }

              current.fontSize = size;
              current.fontFamily = fontObj.loadedName;
              current.fontWeight = bold;
              current.fontStyle = italic;
              current.tspan = this.svgFactory.createElement("svg:tspan");
              current.tspan.setAttributeNS(null, "y", pf(-current.y));
              current.xcoords = [];
            }
          }, {
            key: "endText",
            value: function endText() {
              var current = this.current;

              if (current.textRenderingMode & _util.TextRenderingMode.ADD_TO_PATH_FLAG && current.txtElement && current.txtElement.hasChildNodes()) {
                current.element = current.txtElement;
                this.clip("nonzero");
                this.endPath();
              }
            }
          }, {
            key: "setLineWidth",
            value: function setLineWidth(width) {
              if (width > 0) {
                this.current.lineWidth = width;
              }
            }
          }, {
            key: "setLineCap",
            value: function setLineCap(style) {
              this.current.lineCap = LINE_CAP_STYLES[style];
            }
          }, {
            key: "setLineJoin",
            value: function setLineJoin(style) {
              this.current.lineJoin = LINE_JOIN_STYLES[style];
            }
          }, {
            key: "setMiterLimit",
            value: function setMiterLimit(limit) {
              this.current.miterLimit = limit;
            }
          }, {
            key: "setStrokeAlpha",
            value: function setStrokeAlpha(strokeAlpha) {
              this.current.strokeAlpha = strokeAlpha;
            }
          }, {
            key: "setStrokeRGBColor",
            value: function setStrokeRGBColor(r, g, b) {
              this.current.strokeColor = _util.Util.makeCssRgb(r, g, b);
            }
          }, {
            key: "setFillAlpha",
            value: function setFillAlpha(fillAlpha) {
              this.current.fillAlpha = fillAlpha;
            }
          }, {
            key: "setFillRGBColor",
            value: function setFillRGBColor(r, g, b) {
              this.current.fillColor = _util.Util.makeCssRgb(r, g, b);
              this.current.tspan = this.svgFactory.createElement("svg:tspan");
              this.current.xcoords = [];
            }
          }, {
            key: "setStrokeColorN",
            value: function setStrokeColorN(args) {
              this.current.strokeColor = this._makeColorN_Pattern(args);
            }
          }, {
            key: "setFillColorN",
            value: function setFillColorN(args) {
              this.current.fillColor = this._makeColorN_Pattern(args);
            }
          }, {
            key: "shadingFill",
            value: function shadingFill(args) {
              var width = this.viewport.width;
              var height = this.viewport.height;

              var inv = _util.Util.inverseTransform(this.transformMatrix);

              var bl = _util.Util.applyTransform([0, 0], inv);

              var br = _util.Util.applyTransform([0, height], inv);

              var ul = _util.Util.applyTransform([width, 0], inv);

              var ur = _util.Util.applyTransform([width, height], inv);

              var x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
              var y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
              var x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
              var y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
              var rect = this.svgFactory.createElement("svg:rect");
              rect.setAttributeNS(null, "x", x0);
              rect.setAttributeNS(null, "y", y0);
              rect.setAttributeNS(null, "width", x1 - x0);
              rect.setAttributeNS(null, "height", y1 - y0);
              rect.setAttributeNS(null, "fill", this._makeShadingPattern(args));

              this._ensureTransformGroup().appendChild(rect);
            }
          }, {
            key: "_makeColorN_Pattern",
            value: function _makeColorN_Pattern(args) {
              if (args[0] === "TilingPattern") {
                return this._makeTilingPattern(args);
              }

              return this._makeShadingPattern(args);
            }
          }, {
            key: "_makeTilingPattern",
            value: function _makeTilingPattern(args) {
              var color = args[1];
              var operatorList = args[2];
              var matrix = args[3] || _util.IDENTITY_MATRIX;

              var _args$ = _slicedToArray(args[4], 4),
                  x0 = _args$[0],
                  y0 = _args$[1],
                  x1 = _args$[2],
                  y1 = _args$[3];

              var xstep = args[5];
              var ystep = args[6];
              var paintType = args[7];
              var tilingId = "shading".concat(shadingCount++);

              var _util$Util$applyTrans = _util.Util.applyTransform([x0, y0], matrix),
                  _util$Util$applyTrans2 = _slicedToArray(_util$Util$applyTrans, 2),
                  tx0 = _util$Util$applyTrans2[0],
                  ty0 = _util$Util$applyTrans2[1];

              var _util$Util$applyTrans3 = _util.Util.applyTransform([x1, y1], matrix),
                  _util$Util$applyTrans4 = _slicedToArray(_util$Util$applyTrans3, 2),
                  tx1 = _util$Util$applyTrans4[0],
                  ty1 = _util$Util$applyTrans4[1];

              var _util$Util$singularVa = _util.Util.singularValueDecompose2dScale(matrix),
                  _util$Util$singularVa2 = _slicedToArray(_util$Util$singularVa, 2),
                  xscale = _util$Util$singularVa2[0],
                  yscale = _util$Util$singularVa2[1];

              var txstep = xstep * xscale;
              var tystep = ystep * yscale;
              var tiling = this.svgFactory.createElement("svg:pattern");
              tiling.setAttributeNS(null, "id", tilingId);
              tiling.setAttributeNS(null, "patternUnits", "userSpaceOnUse");
              tiling.setAttributeNS(null, "width", txstep);
              tiling.setAttributeNS(null, "height", tystep);
              tiling.setAttributeNS(null, "x", "".concat(tx0));
              tiling.setAttributeNS(null, "y", "".concat(ty0));
              var svg = this.svg;
              var transformMatrix = this.transformMatrix;
              var fillColor = this.current.fillColor;
              var strokeColor = this.current.strokeColor;
              var bbox = this.svgFactory.create(tx1 - tx0, ty1 - ty0);
              this.svg = bbox;
              this.transformMatrix = matrix;

              if (paintType === 2) {
                var _util$Util;

                var cssColor = (_util$Util = _util.Util).makeCssRgb.apply(_util$Util, _toConsumableArray(color));

                this.current.fillColor = cssColor;
                this.current.strokeColor = cssColor;
              }

              this.executeOpTree(this.convertOpList(operatorList));
              this.svg = svg;
              this.transformMatrix = transformMatrix;
              this.current.fillColor = fillColor;
              this.current.strokeColor = strokeColor;
              tiling.appendChild(bbox.childNodes[0]);
              this.defs.appendChild(tiling);
              return "url(#".concat(tilingId, ")");
            }
          }, {
            key: "_makeShadingPattern",
            value: function _makeShadingPattern(args) {
              switch (args[0]) {
                case "RadialAxial":
                  var shadingId = "shading".concat(shadingCount++);
                  var colorStops = args[3];
                  var gradient;

                  switch (args[1]) {
                    case "axial":
                      var point0 = args[4];
                      var point1 = args[5];
                      gradient = this.svgFactory.createElement("svg:linearGradient");
                      gradient.setAttributeNS(null, "id", shadingId);
                      gradient.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                      gradient.setAttributeNS(null, "x1", point0[0]);
                      gradient.setAttributeNS(null, "y1", point0[1]);
                      gradient.setAttributeNS(null, "x2", point1[0]);
                      gradient.setAttributeNS(null, "y2", point1[1]);
                      break;

                    case "radial":
                      var focalPoint = args[4];
                      var circlePoint = args[5];
                      var focalRadius = args[6];
                      var circleRadius = args[7];
                      gradient = this.svgFactory.createElement("svg:radialGradient");
                      gradient.setAttributeNS(null, "id", shadingId);
                      gradient.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                      gradient.setAttributeNS(null, "cx", circlePoint[0]);
                      gradient.setAttributeNS(null, "cy", circlePoint[1]);
                      gradient.setAttributeNS(null, "r", circleRadius);
                      gradient.setAttributeNS(null, "fx", focalPoint[0]);
                      gradient.setAttributeNS(null, "fy", focalPoint[1]);
                      gradient.setAttributeNS(null, "fr", focalRadius);
                      break;

                    default:
                      throw new Error("Unknown RadialAxial type: ".concat(args[1]));
                  }

                  var _iterator20 = _createForOfIteratorHelper(colorStops),
                      _step20;

                  try {
                    for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                      var colorStop = _step20.value;
                      var stop = this.svgFactory.createElement("svg:stop");
                      stop.setAttributeNS(null, "offset", colorStop[0]);
                      stop.setAttributeNS(null, "stop-color", colorStop[1]);
                      gradient.appendChild(stop);
                    }
                  } catch (err) {
                    _iterator20.e(err);
                  } finally {
                    _iterator20.f();
                  }

                  this.defs.appendChild(gradient);
                  return "url(#".concat(shadingId, ")");

                case "Mesh":
                  (0, _util.warn)("Unimplemented pattern Mesh");
                  return null;

                case "Dummy":
                  return "hotpink";

                default:
                  throw new Error("Unknown IR type: ".concat(args[0]));
              }
            }
          }, {
            key: "setDash",
            value: function setDash(dashArray, dashPhase) {
              this.current.dashArray = dashArray;
              this.current.dashPhase = dashPhase;
            }
          }, {
            key: "constructPath",
            value: function constructPath(ops, args) {
              var current = this.current;
              var x = current.x,
                  y = current.y;
              var d = [];
              var j = 0;

              var _iterator21 = _createForOfIteratorHelper(ops),
                  _step21;

              try {
                for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                  var op = _step21.value;

                  switch (op | 0) {
                    case _util.OPS.rectangle:
                      x = args[j++];
                      y = args[j++];
                      var width = args[j++];
                      var height = args[j++];
                      var xw = x + width;
                      var yh = y + height;
                      d.push("M", pf(x), pf(y), "L", pf(xw), pf(y), "L", pf(xw), pf(yh), "L", pf(x), pf(yh), "Z");
                      break;

                    case _util.OPS.moveTo:
                      x = args[j++];
                      y = args[j++];
                      d.push("M", pf(x), pf(y));
                      break;

                    case _util.OPS.lineTo:
                      x = args[j++];
                      y = args[j++];
                      d.push("L", pf(x), pf(y));
                      break;

                    case _util.OPS.curveTo:
                      x = args[j + 4];
                      y = args[j + 5];
                      d.push("C", pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]), pf(x), pf(y));
                      j += 6;
                      break;

                    case _util.OPS.curveTo2:
                      d.push("C", pf(x), pf(y), pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]));
                      x = args[j + 2];
                      y = args[j + 3];
                      j += 4;
                      break;

                    case _util.OPS.curveTo3:
                      x = args[j + 2];
                      y = args[j + 3];
                      d.push("C", pf(args[j]), pf(args[j + 1]), pf(x), pf(y), pf(x), pf(y));
                      j += 4;
                      break;

                    case _util.OPS.closePath:
                      d.push("Z");
                      break;
                  }
                }
              } catch (err) {
                _iterator21.e(err);
              } finally {
                _iterator21.f();
              }

              d = d.join(" ");

              if (current.path && ops.length > 0 && ops[0] !== _util.OPS.rectangle && ops[0] !== _util.OPS.moveTo) {
                d = current.path.getAttributeNS(null, "d") + d;
              } else {
                current.path = this.svgFactory.createElement("svg:path");

                this._ensureTransformGroup().appendChild(current.path);
              }

              current.path.setAttributeNS(null, "d", d);
              current.path.setAttributeNS(null, "fill", "none");
              current.element = current.path;
              current.setCurrentPoint(x, y);
            }
          }, {
            key: "endPath",
            value: function endPath() {
              var current = this.current;
              current.path = null;

              if (!this.pendingClip) {
                return;
              }

              if (!current.element) {
                this.pendingClip = null;
                return;
              }

              var clipId = "clippath".concat(clipCount++);
              var clipPath = this.svgFactory.createElement("svg:clipPath");
              clipPath.setAttributeNS(null, "id", clipId);
              clipPath.setAttributeNS(null, "transform", pm(this.transformMatrix));
              var clipElement = current.element.cloneNode(true);

              if (this.pendingClip === "evenodd") {
                clipElement.setAttributeNS(null, "clip-rule", "evenodd");
              } else {
                clipElement.setAttributeNS(null, "clip-rule", "nonzero");
              }

              this.pendingClip = null;
              clipPath.appendChild(clipElement);
              this.defs.appendChild(clipPath);

              if (current.activeClipUrl) {
                current.clipGroup = null;
                this.extraStack.forEach(function (prev) {
                  prev.clipGroup = null;
                });
                clipPath.setAttributeNS(null, "clip-path", current.activeClipUrl);
              }

              current.activeClipUrl = "url(#".concat(clipId, ")");
              this.tgrp = null;
            }
          }, {
            key: "clip",
            value: function clip(type) {
              this.pendingClip = type;
            }
          }, {
            key: "closePath",
            value: function closePath() {
              var current = this.current;

              if (current.path) {
                var d = "".concat(current.path.getAttributeNS(null, "d"), "Z");
                current.path.setAttributeNS(null, "d", d);
              }
            }
          }, {
            key: "setLeading",
            value: function setLeading(leading) {
              this.current.leading = -leading;
            }
          }, {
            key: "setTextRise",
            value: function setTextRise(textRise) {
              this.current.textRise = textRise;
            }
          }, {
            key: "setTextRenderingMode",
            value: function setTextRenderingMode(textRenderingMode) {
              this.current.textRenderingMode = textRenderingMode;
            }
          }, {
            key: "setHScale",
            value: function setHScale(scale) {
              this.current.textHScale = scale / 100;
            }
          }, {
            key: "setRenderingIntent",
            value: function setRenderingIntent(intent) {}
          }, {
            key: "setFlatness",
            value: function setFlatness(flatness) {}
          }, {
            key: "setGState",
            value: function setGState(states) {
              var _iterator22 = _createForOfIteratorHelper(states),
                  _step22;

              try {
                for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                  var _step22$value = _slicedToArray(_step22.value, 2),
                      key = _step22$value[0],
                      value = _step22$value[1];

                  switch (key) {
                    case "LW":
                      this.setLineWidth(value);
                      break;

                    case "LC":
                      this.setLineCap(value);
                      break;

                    case "LJ":
                      this.setLineJoin(value);
                      break;

                    case "ML":
                      this.setMiterLimit(value);
                      break;

                    case "D":
                      this.setDash(value[0], value[1]);
                      break;

                    case "RI":
                      this.setRenderingIntent(value);
                      break;

                    case "FL":
                      this.setFlatness(value);
                      break;

                    case "Font":
                      this.setFont(value);
                      break;

                    case "CA":
                      this.setStrokeAlpha(value);
                      break;

                    case "ca":
                      this.setFillAlpha(value);
                      break;

                    default:
                      (0, _util.warn)("Unimplemented graphic state operator ".concat(key));
                      break;
                  }
                }
              } catch (err) {
                _iterator22.e(err);
              } finally {
                _iterator22.f();
              }
            }
          }, {
            key: "fill",
            value: function fill() {
              var current = this.current;

              if (current.element) {
                current.element.setAttributeNS(null, "fill", current.fillColor);
                current.element.setAttributeNS(null, "fill-opacity", current.fillAlpha);
                this.endPath();
              }
            }
          }, {
            key: "stroke",
            value: function stroke() {
              var current = this.current;

              if (current.element) {
                this._setStrokeAttributes(current.element);

                current.element.setAttributeNS(null, "fill", "none");
                this.endPath();
              }
            }
          }, {
            key: "_setStrokeAttributes",
            value: function _setStrokeAttributes(element) {
              var lineWidthScale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
              var current = this.current;
              var dashArray = current.dashArray;

              if (lineWidthScale !== 1 && dashArray.length > 0) {
                dashArray = dashArray.map(function (value) {
                  return lineWidthScale * value;
                });
              }

              element.setAttributeNS(null, "stroke", current.strokeColor);
              element.setAttributeNS(null, "stroke-opacity", current.strokeAlpha);
              element.setAttributeNS(null, "stroke-miterlimit", pf(current.miterLimit));
              element.setAttributeNS(null, "stroke-linecap", current.lineCap);
              element.setAttributeNS(null, "stroke-linejoin", current.lineJoin);
              element.setAttributeNS(null, "stroke-width", pf(lineWidthScale * current.lineWidth) + "px");
              element.setAttributeNS(null, "stroke-dasharray", dashArray.map(pf).join(" "));
              element.setAttributeNS(null, "stroke-dashoffset", pf(lineWidthScale * current.dashPhase) + "px");
            }
          }, {
            key: "eoFill",
            value: function eoFill() {
              if (this.current.element) {
                this.current.element.setAttributeNS(null, "fill-rule", "evenodd");
              }

              this.fill();
            }
          }, {
            key: "fillStroke",
            value: function fillStroke() {
              this.stroke();
              this.fill();
            }
          }, {
            key: "eoFillStroke",
            value: function eoFillStroke() {
              if (this.current.element) {
                this.current.element.setAttributeNS(null, "fill-rule", "evenodd");
              }

              this.fillStroke();
            }
          }, {
            key: "closeStroke",
            value: function closeStroke() {
              this.closePath();
              this.stroke();
            }
          }, {
            key: "closeFillStroke",
            value: function closeFillStroke() {
              this.closePath();
              this.fillStroke();
            }
          }, {
            key: "closeEOFillStroke",
            value: function closeEOFillStroke() {
              this.closePath();
              this.eoFillStroke();
            }
          }, {
            key: "paintSolidColorImageMask",
            value: function paintSolidColorImageMask() {
              var rect = this.svgFactory.createElement("svg:rect");
              rect.setAttributeNS(null, "x", "0");
              rect.setAttributeNS(null, "y", "0");
              rect.setAttributeNS(null, "width", "1px");
              rect.setAttributeNS(null, "height", "1px");
              rect.setAttributeNS(null, "fill", this.current.fillColor);

              this._ensureTransformGroup().appendChild(rect);
            }
          }, {
            key: "paintJpegXObject",
            value: function paintJpegXObject(objId, w, h) {
              var imgObj = this.objs.get(objId);
              var imgEl = this.svgFactory.createElement("svg:image");
              imgEl.setAttributeNS(XLINK_NS, "xlink:href", imgObj.src);
              imgEl.setAttributeNS(null, "width", pf(w));
              imgEl.setAttributeNS(null, "height", pf(h));
              imgEl.setAttributeNS(null, "x", "0");
              imgEl.setAttributeNS(null, "y", pf(-h));
              imgEl.setAttributeNS(null, "transform", "scale(".concat(pf(1 / w), " ").concat(pf(-1 / h), ")"));

              this._ensureTransformGroup().appendChild(imgEl);
            }
          }, {
            key: "paintImageXObject",
            value: function paintImageXObject(objId) {
              var imgData = this.objs.get(objId);

              if (!imgData) {
                (0, _util.warn)("Dependent image with object ID ".concat(objId, " is not ready yet"));
                return;
              }

              this.paintInlineImageXObject(imgData);
            }
          }, {
            key: "paintInlineImageXObject",
            value: function paintInlineImageXObject(imgData, mask) {
              var width = imgData.width;
              var height = imgData.height;
              var imgSrc = convertImgDataToPng(imgData, this.forceDataSchema, !!mask);
              var cliprect = this.svgFactory.createElement("svg:rect");
              cliprect.setAttributeNS(null, "x", "0");
              cliprect.setAttributeNS(null, "y", "0");
              cliprect.setAttributeNS(null, "width", pf(width));
              cliprect.setAttributeNS(null, "height", pf(height));
              this.current.element = cliprect;
              this.clip("nonzero");
              var imgEl = this.svgFactory.createElement("svg:image");
              imgEl.setAttributeNS(XLINK_NS, "xlink:href", imgSrc);
              imgEl.setAttributeNS(null, "x", "0");
              imgEl.setAttributeNS(null, "y", pf(-height));
              imgEl.setAttributeNS(null, "width", pf(width) + "px");
              imgEl.setAttributeNS(null, "height", pf(height) + "px");
              imgEl.setAttributeNS(null, "transform", "scale(".concat(pf(1 / width), " ").concat(pf(-1 / height), ")"));

              if (mask) {
                mask.appendChild(imgEl);
              } else {
                this._ensureTransformGroup().appendChild(imgEl);
              }
            }
          }, {
            key: "paintImageMaskXObject",
            value: function paintImageMaskXObject(imgData) {
              var current = this.current;
              var width = imgData.width;
              var height = imgData.height;
              var fillColor = current.fillColor;
              current.maskId = "mask".concat(maskCount++);
              var mask = this.svgFactory.createElement("svg:mask");
              mask.setAttributeNS(null, "id", current.maskId);
              var rect = this.svgFactory.createElement("svg:rect");
              rect.setAttributeNS(null, "x", "0");
              rect.setAttributeNS(null, "y", "0");
              rect.setAttributeNS(null, "width", pf(width));
              rect.setAttributeNS(null, "height", pf(height));
              rect.setAttributeNS(null, "fill", fillColor);
              rect.setAttributeNS(null, "mask", "url(#".concat(current.maskId, ")"));
              this.defs.appendChild(mask);

              this._ensureTransformGroup().appendChild(rect);

              this.paintInlineImageXObject(imgData, mask);
            }
          }, {
            key: "paintFormXObjectBegin",
            value: function paintFormXObjectBegin(matrix, bbox) {
              if (Array.isArray(matrix) && matrix.length === 6) {
                this.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
              }

              if (bbox) {
                var width = bbox[2] - bbox[0];
                var height = bbox[3] - bbox[1];
                var cliprect = this.svgFactory.createElement("svg:rect");
                cliprect.setAttributeNS(null, "x", bbox[0]);
                cliprect.setAttributeNS(null, "y", bbox[1]);
                cliprect.setAttributeNS(null, "width", pf(width));
                cliprect.setAttributeNS(null, "height", pf(height));
                this.current.element = cliprect;
                this.clip("nonzero");
                this.endPath();
              }
            }
          }, {
            key: "paintFormXObjectEnd",
            value: function paintFormXObjectEnd() {}
          }, {
            key: "_initialize",
            value: function _initialize(viewport) {
              var svg = this.svgFactory.create(viewport.width, viewport.height);
              var definitions = this.svgFactory.createElement("svg:defs");
              svg.appendChild(definitions);
              this.defs = definitions;
              var rootGroup = this.svgFactory.createElement("svg:g");
              rootGroup.setAttributeNS(null, "transform", pm(viewport.transform));
              svg.appendChild(rootGroup);
              this.svg = rootGroup;
              return svg;
            }
          }, {
            key: "_ensureClipGroup",
            value: function _ensureClipGroup() {
              if (!this.current.clipGroup) {
                var clipGroup = this.svgFactory.createElement("svg:g");
                clipGroup.setAttributeNS(null, "clip-path", this.current.activeClipUrl);
                this.svg.appendChild(clipGroup);
                this.current.clipGroup = clipGroup;
              }

              return this.current.clipGroup;
            }
          }, {
            key: "_ensureTransformGroup",
            value: function _ensureTransformGroup() {
              if (!this.tgrp) {
                this.tgrp = this.svgFactory.createElement("svg:g");
                this.tgrp.setAttributeNS(null, "transform", pm(this.transformMatrix));

                if (this.current.activeClipUrl) {
                  this._ensureClipGroup().appendChild(this.tgrp);
                } else {
                  this.svg.appendChild(this.tgrp);
                }
              }

              return this.tgrp;
            }
          }]);

          return SVGGraphics;
        }();
      }
      /***/
    },
    /* 19 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PDFNodeStream = void 0;

      var _util = __w_pdfjs_require__(1);

      var _network_utils = __w_pdfjs_require__(20);

      var fs = __webpack_require__(/*! fs */ 1);

      var http = __webpack_require__(/*! http */ 2);

      var https = __webpack_require__(/*! https */ 3);

      var url = __webpack_require__(/*! url */ 4);

      var fileUriRegex = /^file:\/\/\/[a-zA-Z]:\//;

      function parseUrl(sourceUrl) {
        var parsedUrl = url.parse(sourceUrl);

        if (parsedUrl.protocol === "file:" || parsedUrl.host) {
          return parsedUrl;
        }

        if (/^[a-z]:[/\\]/i.test(sourceUrl)) {
          return url.parse("file:///".concat(sourceUrl));
        }

        if (!parsedUrl.host) {
          parsedUrl.protocol = "file:";
        }

        return parsedUrl;
      }

      var PDFNodeStream = /*#__PURE__*/function () {
        function PDFNodeStream(source) {
          _classCallCheck(this, PDFNodeStream);

          this.source = source;
          this.url = parseUrl(source.url);
          this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:";
          this.isFsUrl = this.url.protocol === "file:";
          this.httpHeaders = this.isHttp && source.httpHeaders || {};
          this._fullRequestReader = null;
          this._rangeRequestReaders = [];
        }

        _createClass(PDFNodeStream, [{
          key: "getFullReader",
          value: function getFullReader() {
            (0, _util.assert)(!this._fullRequestReader);
            this._fullRequestReader = this.isFsUrl ? new PDFNodeStreamFsFullReader(this) : new PDFNodeStreamFullReader(this);
            return this._fullRequestReader;
          }
        }, {
          key: "getRangeReader",
          value: function getRangeReader(start, end) {
            if (end <= this._progressiveDataLength) {
              return null;
            }

            var rangeReader = this.isFsUrl ? new PDFNodeStreamFsRangeReader(this, start, end) : new PDFNodeStreamRangeReader(this, start, end);

            this._rangeRequestReaders.push(rangeReader);

            return rangeReader;
          }
        }, {
          key: "cancelAllRequests",
          value: function cancelAllRequests(reason) {
            if (this._fullRequestReader) {
              this._fullRequestReader.cancel(reason);
            }

            var readers = this._rangeRequestReaders.slice(0);

            readers.forEach(function (reader) {
              reader.cancel(reason);
            });
          }
        }, {
          key: "_progressiveDataLength",
          get: function get() {
            return this._fullRequestReader ? this._fullRequestReader._loaded : 0;
          }
        }]);

        return PDFNodeStream;
      }();

      exports.PDFNodeStream = PDFNodeStream;

      var BaseFullReader = /*#__PURE__*/function () {
        function BaseFullReader(stream) {
          _classCallCheck(this, BaseFullReader);

          this._url = stream.url;
          this._done = false;
          this._storedError = null;
          this.onProgress = null;
          var source = stream.source;
          this._contentLength = source.length;
          this._loaded = 0;
          this._filename = null;
          this._disableRange = source.disableRange || false;
          this._rangeChunkSize = source.rangeChunkSize;

          if (!this._rangeChunkSize && !this._disableRange) {
            this._disableRange = true;
          }

          this._isStreamingSupported = !source.disableStream;
          this._isRangeSupported = !source.disableRange;
          this._readableStream = null;
          this._readCapability = (0, _util.createPromiseCapability)();
          this._headersCapability = (0, _util.createPromiseCapability)();
        }

        _createClass(BaseFullReader, [{
          key: "read",
          value: function () {
            var _read3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var chunk, buffer;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this._readCapability.promise;

                    case 2:
                      if (!this._done) {
                        _context9.next = 4;
                        break;
                      }

                      return _context9.abrupt("return", {
                        value: undefined,
                        done: true
                      });

                    case 4:
                      if (!this._storedError) {
                        _context9.next = 6;
                        break;
                      }

                      throw this._storedError;

                    case 6:
                      chunk = this._readableStream.read();

                      if (!(chunk === null)) {
                        _context9.next = 10;
                        break;
                      }

                      this._readCapability = (0, _util.createPromiseCapability)();
                      return _context9.abrupt("return", this.read());

                    case 10:
                      this._loaded += chunk.length;

                      if (this.onProgress) {
                        this.onProgress({
                          loaded: this._loaded,
                          total: this._contentLength
                        });
                      }

                      buffer = new Uint8Array(chunk).buffer;
                      return _context9.abrupt("return", {
                        value: buffer,
                        done: false
                      });

                    case 14:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function read() {
              return _read3.apply(this, arguments);
            }

            return read;
          }()
        }, {
          key: "cancel",
          value: function cancel(reason) {
            if (!this._readableStream) {
              this._error(reason);

              return;
            }

            this._readableStream.destroy(reason);
          }
        }, {
          key: "_error",
          value: function _error(reason) {
            this._storedError = reason;

            this._readCapability.resolve();
          }
        }, {
          key: "_setReadableStream",
          value: function _setReadableStream(readableStream) {
            var _this42 = this;

            this._readableStream = readableStream;
            readableStream.on("readable", function () {
              _this42._readCapability.resolve();
            });
            readableStream.on("end", function () {
              readableStream.destroy();
              _this42._done = true;

              _this42._readCapability.resolve();
            });
            readableStream.on("error", function (reason) {
              _this42._error(reason);
            });

            if (!this._isStreamingSupported && this._isRangeSupported) {
              this._error(new _util.AbortException("streaming is disabled"));
            }

            if (this._storedError) {
              this._readableStream.destroy(this._storedError);
            }
          }
        }, {
          key: "headersReady",
          get: function get() {
            return this._headersCapability.promise;
          }
        }, {
          key: "filename",
          get: function get() {
            return this._filename;
          }
        }, {
          key: "contentLength",
          get: function get() {
            return this._contentLength;
          }
        }, {
          key: "isRangeSupported",
          get: function get() {
            return this._isRangeSupported;
          }
        }, {
          key: "isStreamingSupported",
          get: function get() {
            return this._isStreamingSupported;
          }
        }]);

        return BaseFullReader;
      }();

      var BaseRangeReader = /*#__PURE__*/function () {
        function BaseRangeReader(stream) {
          _classCallCheck(this, BaseRangeReader);

          this._url = stream.url;
          this._done = false;
          this._storedError = null;
          this.onProgress = null;
          this._loaded = 0;
          this._readableStream = null;
          this._readCapability = (0, _util.createPromiseCapability)();
          var source = stream.source;
          this._isStreamingSupported = !source.disableStream;
        }

        _createClass(BaseRangeReader, [{
          key: "read",
          value: function () {
            var _read4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var chunk, buffer;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this._readCapability.promise;

                    case 2:
                      if (!this._done) {
                        _context10.next = 4;
                        break;
                      }

                      return _context10.abrupt("return", {
                        value: undefined,
                        done: true
                      });

                    case 4:
                      if (!this._storedError) {
                        _context10.next = 6;
                        break;
                      }

                      throw this._storedError;

                    case 6:
                      chunk = this._readableStream.read();

                      if (!(chunk === null)) {
                        _context10.next = 10;
                        break;
                      }

                      this._readCapability = (0, _util.createPromiseCapability)();
                      return _context10.abrupt("return", this.read());

                    case 10:
                      this._loaded += chunk.length;

                      if (this.onProgress) {
                        this.onProgress({
                          loaded: this._loaded
                        });
                      }

                      buffer = new Uint8Array(chunk).buffer;
                      return _context10.abrupt("return", {
                        value: buffer,
                        done: false
                      });

                    case 14:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

            function read() {
              return _read4.apply(this, arguments);
            }

            return read;
          }()
        }, {
          key: "cancel",
          value: function cancel(reason) {
            if (!this._readableStream) {
              this._error(reason);

              return;
            }

            this._readableStream.destroy(reason);
          }
        }, {
          key: "_error",
          value: function _error(reason) {
            this._storedError = reason;

            this._readCapability.resolve();
          }
        }, {
          key: "_setReadableStream",
          value: function _setReadableStream(readableStream) {
            var _this43 = this;

            this._readableStream = readableStream;
            readableStream.on("readable", function () {
              _this43._readCapability.resolve();
            });
            readableStream.on("end", function () {
              readableStream.destroy();
              _this43._done = true;

              _this43._readCapability.resolve();
            });
            readableStream.on("error", function (reason) {
              _this43._error(reason);
            });

            if (this._storedError) {
              this._readableStream.destroy(this._storedError);
            }
          }
        }, {
          key: "isStreamingSupported",
          get: function get() {
            return this._isStreamingSupported;
          }
        }]);

        return BaseRangeReader;
      }();

      function createRequestOptions(url, headers) {
        return {
          protocol: url.protocol,
          auth: url.auth,
          host: url.hostname,
          port: url.port,
          path: url.path,
          method: "GET",
          headers: headers
        };
      }

      var PDFNodeStreamFullReader = /*#__PURE__*/function (_BaseFullReader) {
        _inherits(PDFNodeStreamFullReader, _BaseFullReader);

        var _super34 = _createSuper(PDFNodeStreamFullReader);

        function PDFNodeStreamFullReader(stream) {
          var _this44;

          _classCallCheck(this, PDFNodeStreamFullReader);

          _this44 = _super34.call(this, stream);

          var handleResponse = function handleResponse(response) {
            if (response.statusCode === 404) {
              var error = new _util.MissingPDFException("Missing PDF \"".concat(_this44._url, "\"."));
              _this44._storedError = error;

              _this44._headersCapability.reject(error);

              return;
            }

            _this44._headersCapability.resolve();

            _this44._setReadableStream(response);

            var getResponseHeader = function getResponseHeader(name) {
              return _this44._readableStream.headers[name.toLowerCase()];
            };

            var _ref31 = (0, _network_utils.validateRangeRequestCapabilities)({
              getResponseHeader: getResponseHeader,
              isHttp: stream.isHttp,
              rangeChunkSize: _this44._rangeChunkSize,
              disableRange: _this44._disableRange
            }),
                allowRangeRequests = _ref31.allowRangeRequests,
                suggestedLength = _ref31.suggestedLength;

            _this44._isRangeSupported = allowRangeRequests;
            _this44._contentLength = suggestedLength || _this44._contentLength;
            _this44._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
          };

          _this44._request = null;

          if (_this44._url.protocol === "http:") {
            _this44._request = http.request(createRequestOptions(_this44._url, stream.httpHeaders), handleResponse);
          } else {
            _this44._request = https.request(createRequestOptions(_this44._url, stream.httpHeaders), handleResponse);
          }

          _this44._request.on("error", function (reason) {
            _this44._storedError = reason;

            _this44._headersCapability.reject(reason);
          });

          _this44._request.end();

          return _this44;
        }

        return PDFNodeStreamFullReader;
      }(BaseFullReader);

      var PDFNodeStreamRangeReader = /*#__PURE__*/function (_BaseRangeReader) {
        _inherits(PDFNodeStreamRangeReader, _BaseRangeReader);

        var _super35 = _createSuper(PDFNodeStreamRangeReader);

        function PDFNodeStreamRangeReader(stream, start, end) {
          var _this45;

          _classCallCheck(this, PDFNodeStreamRangeReader);

          _this45 = _super35.call(this, stream);
          _this45._httpHeaders = {};

          for (var property in stream.httpHeaders) {
            var value = stream.httpHeaders[property];

            if (typeof value === "undefined") {
              continue;
            }

            _this45._httpHeaders[property] = value;
          }

          _this45._httpHeaders["Range"] = "bytes=".concat(start, "-").concat(end - 1);

          var handleResponse = function handleResponse(response) {
            if (response.statusCode === 404) {
              var error = new _util.MissingPDFException("Missing PDF \"".concat(_this45._url, "\"."));
              _this45._storedError = error;
              return;
            }

            _this45._setReadableStream(response);
          };

          _this45._request = null;

          if (_this45._url.protocol === "http:") {
            _this45._request = http.request(createRequestOptions(_this45._url, _this45._httpHeaders), handleResponse);
          } else {
            _this45._request = https.request(createRequestOptions(_this45._url, _this45._httpHeaders), handleResponse);
          }

          _this45._request.on("error", function (reason) {
            _this45._storedError = reason;
          });

          _this45._request.end();

          return _this45;
        }

        return PDFNodeStreamRangeReader;
      }(BaseRangeReader);

      var PDFNodeStreamFsFullReader = /*#__PURE__*/function (_BaseFullReader2) {
        _inherits(PDFNodeStreamFsFullReader, _BaseFullReader2);

        var _super36 = _createSuper(PDFNodeStreamFsFullReader);

        function PDFNodeStreamFsFullReader(stream) {
          var _this46;

          _classCallCheck(this, PDFNodeStreamFsFullReader);

          _this46 = _super36.call(this, stream);
          var path = decodeURIComponent(_this46._url.path);

          if (fileUriRegex.test(_this46._url.href)) {
            path = path.replace(/^\//, "");
          }

          fs.lstat(path, function (error, stat) {
            if (error) {
              if (error.code === "ENOENT") {
                error = new _util.MissingPDFException("Missing PDF \"".concat(path, "\"."));
              }

              _this46._storedError = error;

              _this46._headersCapability.reject(error);

              return;
            }

            _this46._contentLength = stat.size;

            _this46._setReadableStream(fs.createReadStream(path));

            _this46._headersCapability.resolve();
          });
          return _this46;
        }

        return PDFNodeStreamFsFullReader;
      }(BaseFullReader);

      var PDFNodeStreamFsRangeReader = /*#__PURE__*/function (_BaseRangeReader2) {
        _inherits(PDFNodeStreamFsRangeReader, _BaseRangeReader2);

        var _super37 = _createSuper(PDFNodeStreamFsRangeReader);

        function PDFNodeStreamFsRangeReader(stream, start, end) {
          var _this47;

          _classCallCheck(this, PDFNodeStreamFsRangeReader);

          _this47 = _super37.call(this, stream);
          var path = decodeURIComponent(_this47._url.path);

          if (fileUriRegex.test(_this47._url.href)) {
            path = path.replace(/^\//, "");
          }

          _this47._setReadableStream(fs.createReadStream(path, {
            start: start,
            end: end - 1
          }));

          return _this47;
        }

        return PDFNodeStreamFsRangeReader;
      }(BaseRangeReader);
      /***/

    },
    /* 20 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.createResponseStatusError = createResponseStatusError;
      exports.extractFilenameFromHeader = extractFilenameFromHeader;
      exports.validateRangeRequestCapabilities = validateRangeRequestCapabilities;
      exports.validateResponseStatus = validateResponseStatus;

      var _util = __w_pdfjs_require__(1);

      var _content_disposition = __w_pdfjs_require__(21);

      function validateRangeRequestCapabilities(_ref32) {
        var getResponseHeader = _ref32.getResponseHeader,
            isHttp = _ref32.isHttp,
            rangeChunkSize = _ref32.rangeChunkSize,
            disableRange = _ref32.disableRange;
        (0, _util.assert)(rangeChunkSize > 0, "Range chunk size must be larger than zero");
        var returnValues = {
          allowRangeRequests: false,
          suggestedLength: undefined
        };
        var length = parseInt(getResponseHeader("Content-Length"), 10);

        if (!Number.isInteger(length)) {
          return returnValues;
        }

        returnValues.suggestedLength = length;

        if (length <= 2 * rangeChunkSize) {
          return returnValues;
        }

        if (disableRange || !isHttp) {
          return returnValues;
        }

        if (getResponseHeader("Accept-Ranges") !== "bytes") {
          return returnValues;
        }

        var contentEncoding = getResponseHeader("Content-Encoding") || "identity";

        if (contentEncoding !== "identity") {
          return returnValues;
        }

        returnValues.allowRangeRequests = true;
        return returnValues;
      }

      function extractFilenameFromHeader(getResponseHeader) {
        var contentDisposition = getResponseHeader("Content-Disposition");

        if (contentDisposition) {
          var filename = (0, _content_disposition.getFilenameFromContentDispositionHeader)(contentDisposition);

          if (filename.includes("%")) {
            try {
              filename = decodeURIComponent(filename);
            } catch (ex) {}
          }

          if (/\.pdf$/i.test(filename)) {
            return filename;
          }
        }

        return null;
      }

      function createResponseStatusError(status, url) {
        if (status === 404 || status === 0 && url.startsWith("file:")) {
          return new _util.MissingPDFException('Missing PDF "' + url + '".');
        }

        return new _util.UnexpectedResponseException("Unexpected server response (" + status + ') while retrieving PDF "' + url + '".', status);
      }

      function validateResponseStatus(status) {
        return status === 200 || status === 206;
      }
      /***/

    },
    /* 21 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getFilenameFromContentDispositionHeader = getFilenameFromContentDispositionHeader;

      function getFilenameFromContentDispositionHeader(contentDisposition) {
        var needsEncodingFixup = true;
        var tmp = toParamRegExp("filename\\*", "i").exec(contentDisposition);

        if (tmp) {
          tmp = tmp[1];
          var filename = rfc2616unquote(tmp);
          filename = unescape(filename);
          filename = rfc5987decode(filename);
          filename = rfc2047decode(filename);
          return fixupEncoding(filename);
        }

        tmp = rfc2231getparam(contentDisposition);

        if (tmp) {
          var _filename = rfc2047decode(tmp);

          return fixupEncoding(_filename);
        }

        tmp = toParamRegExp("filename", "i").exec(contentDisposition);

        if (tmp) {
          tmp = tmp[1];

          var _filename2 = rfc2616unquote(tmp);

          _filename2 = rfc2047decode(_filename2);
          return fixupEncoding(_filename2);
        }

        function toParamRegExp(attributePattern, flags) {
          return new RegExp("(?:^|;)\\s*" + attributePattern + "\\s*=\\s*" + "(" + '[^";\\s][^;\\s]*' + "|" + '"(?:[^"\\\\]|\\\\"?)+"?' + ")", flags);
        }

        function textdecode(encoding, value) {
          if (encoding) {
            if (!/^[\x00-\xFF]+$/.test(value)) {
              return value;
            }

            try {
              var decoder = new TextDecoder(encoding, {
                fatal: true
              });
              var bytes = Array.from(value, function (ch) {
                return ch.charCodeAt(0) & 0xff;
              });
              value = decoder.decode(new Uint8Array(bytes));
              needsEncodingFixup = false;
            } catch (e) {
              if (/^utf-?8$/i.test(encoding)) {
                try {
                  value = decodeURIComponent(escape(value));
                  needsEncodingFixup = false;
                } catch (err) {}
              }
            }
          }

          return value;
        }

        function fixupEncoding(value) {
          if (needsEncodingFixup && /[\x80-\xff]/.test(value)) {
            value = textdecode("utf-8", value);

            if (needsEncodingFixup) {
              value = textdecode("iso-8859-1", value);
            }
          }

          return value;
        }

        function rfc2231getparam(contentDisposition) {
          var matches = [];
          var match;
          var iter = toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");

          while ((match = iter.exec(contentDisposition)) !== null) {
            var _match = match,
                _match2 = _slicedToArray(_match, 4),
                n = _match2[1],
                quot = _match2[2],
                part = _match2[3];

            n = parseInt(n, 10);

            if (n in matches) {
              if (n === 0) {
                break;
              }

              continue;
            }

            matches[n] = [quot, part];
          }

          var parts = [];

          for (var _n2 = 0; _n2 < matches.length; ++_n2) {
            if (!(_n2 in matches)) {
              break;
            }

            var _matches$_n = _slicedToArray(matches[_n2], 2),
                _quot = _matches$_n[0],
                _part = _matches$_n[1];

            _part = rfc2616unquote(_part);

            if (_quot) {
              _part = unescape(_part);

              if (_n2 === 0) {
                _part = rfc5987decode(_part);
              }
            }

            parts.push(_part);
          }

          return parts.join("");
        }

        function rfc2616unquote(value) {
          if (value.startsWith('"')) {
            var parts = value.slice(1).split('\\"');

            for (var i = 0; i < parts.length; ++i) {
              var quotindex = parts[i].indexOf('"');

              if (quotindex !== -1) {
                parts[i] = parts[i].slice(0, quotindex);
                parts.length = i + 1;
              }

              parts[i] = parts[i].replace(/\\(.)/g, "$1");
            }

            value = parts.join('"');
          }

          return value;
        }

        function rfc5987decode(extvalue) {
          var encodingend = extvalue.indexOf("'");

          if (encodingend === -1) {
            return extvalue;
          }

          var encoding = extvalue.slice(0, encodingend);
          var langvalue = extvalue.slice(encodingend + 1);
          var value = langvalue.replace(/^[^']*'/, "");
          return textdecode(encoding, value);
        }

        function rfc2047decode(value) {
          if (!value.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(value)) {
            return value;
          }

          return value.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function (_, charset, encoding, text) {
            if (encoding === "q" || encoding === "Q") {
              text = text.replace(/_/g, " ");
              text = text.replace(/=([0-9a-fA-F]{2})/g, function (_, hex) {
                return String.fromCharCode(parseInt(hex, 16));
              });
              return textdecode(charset, text);
            }

            try {
              text = atob(text);
            } catch (e) {}

            return textdecode(charset, text);
          });
        }

        return "";
      }
      /***/

    },
    /* 22 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PDFNetworkStream = void 0;

      var _util = __w_pdfjs_require__(1);

      var _network_utils = __w_pdfjs_require__(20);

      ;
      var OK_RESPONSE = 200;
      var PARTIAL_CONTENT_RESPONSE = 206;

      function getArrayBuffer(xhr) {
        var data = xhr.response;

        if (typeof data !== "string") {
          return data;
        }

        var array = (0, _util.stringToBytes)(data);
        return array.buffer;
      }

      var NetworkManager = /*#__PURE__*/function () {
        function NetworkManager(url, args) {
          _classCallCheck(this, NetworkManager);

          this.url = url;
          args = args || {};
          this.isHttp = /^https?:/i.test(url);
          this.httpHeaders = this.isHttp && args.httpHeaders || {};
          this.withCredentials = args.withCredentials || false;

          this.getXhr = args.getXhr || function NetworkManager_getXhr() {
            return new XMLHttpRequest();
          };

          this.currXhrId = 0;
          this.pendingRequests = Object.create(null);
        }

        _createClass(NetworkManager, [{
          key: "requestRange",
          value: function requestRange(begin, end, listeners) {
            var args = {
              begin: begin,
              end: end
            };

            for (var prop in listeners) {
              args[prop] = listeners[prop];
            }

            return this.request(args);
          }
        }, {
          key: "requestFull",
          value: function requestFull(listeners) {
            return this.request(listeners);
          }
        }, {
          key: "request",
          value: function request(args) {
            var xhr = this.getXhr();
            var xhrId = this.currXhrId++;
            var pendingRequest = this.pendingRequests[xhrId] = {
              xhr: xhr
            };
            xhr.open("GET", this.url);
            xhr.withCredentials = this.withCredentials;

            for (var property in this.httpHeaders) {
              var value = this.httpHeaders[property];

              if (typeof value === "undefined") {
                continue;
              }

              xhr.setRequestHeader(property, value);
            }

            if (this.isHttp && "begin" in args && "end" in args) {
              xhr.setRequestHeader("Range", "bytes=".concat(args.begin, "-").concat(args.end - 1));
              pendingRequest.expectedStatus = PARTIAL_CONTENT_RESPONSE;
            } else {
              pendingRequest.expectedStatus = OK_RESPONSE;
            }

            xhr.responseType = "arraybuffer";

            if (args.onError) {
              xhr.onerror = function (evt) {
                args.onError(xhr.status);
              };
            }

            xhr.onreadystatechange = this.onStateChange.bind(this, xhrId);
            xhr.onprogress = this.onProgress.bind(this, xhrId);
            pendingRequest.onHeadersReceived = args.onHeadersReceived;
            pendingRequest.onDone = args.onDone;
            pendingRequest.onError = args.onError;
            pendingRequest.onProgress = args.onProgress;
            xhr.send(null);
            return xhrId;
          }
        }, {
          key: "onProgress",
          value: function onProgress(xhrId, evt) {
            var pendingRequest = this.pendingRequests[xhrId];

            if (!pendingRequest) {
              return;
            }

            if (pendingRequest.onProgress) {
              pendingRequest.onProgress(evt);
            }
          }
        }, {
          key: "onStateChange",
          value: function onStateChange(xhrId, evt) {
            var pendingRequest = this.pendingRequests[xhrId];

            if (!pendingRequest) {
              return;
            }

            var xhr = pendingRequest.xhr;

            if (xhr.readyState >= 2 && pendingRequest.onHeadersReceived) {
              pendingRequest.onHeadersReceived();
              delete pendingRequest.onHeadersReceived;
            }

            if (xhr.readyState !== 4) {
              return;
            }

            if (!(xhrId in this.pendingRequests)) {
              return;
            }

            delete this.pendingRequests[xhrId];

            if (xhr.status === 0 && this.isHttp) {
              if (pendingRequest.onError) {
                pendingRequest.onError(xhr.status);
              }

              return;
            }

            var xhrStatus = xhr.status || OK_RESPONSE;
            var ok_response_on_range_request = xhrStatus === OK_RESPONSE && pendingRequest.expectedStatus === PARTIAL_CONTENT_RESPONSE;

            if (!ok_response_on_range_request && xhrStatus !== pendingRequest.expectedStatus) {
              if (pendingRequest.onError) {
                pendingRequest.onError(xhr.status);
              }

              return;
            }

            var chunk = getArrayBuffer(xhr);

            if (xhrStatus === PARTIAL_CONTENT_RESPONSE) {
              var rangeHeader = xhr.getResponseHeader("Content-Range");
              var matches = /bytes (\d+)-(\d+)\/(\d+)/.exec(rangeHeader);
              pendingRequest.onDone({
                begin: parseInt(matches[1], 10),
                chunk: chunk
              });
            } else if (chunk) {
              pendingRequest.onDone({
                begin: 0,
                chunk: chunk
              });
            } else if (pendingRequest.onError) {
              pendingRequest.onError(xhr.status);
            }
          }
        }, {
          key: "hasPendingRequests",
          value: function hasPendingRequests() {
            for (var xhrId in this.pendingRequests) {
              return true;
            }

            return false;
          }
        }, {
          key: "getRequestXhr",
          value: function getRequestXhr(xhrId) {
            return this.pendingRequests[xhrId].xhr;
          }
        }, {
          key: "isPendingRequest",
          value: function isPendingRequest(xhrId) {
            return xhrId in this.pendingRequests;
          }
        }, {
          key: "abortAllRequests",
          value: function abortAllRequests() {
            for (var xhrId in this.pendingRequests) {
              this.abortRequest(xhrId | 0);
            }
          }
        }, {
          key: "abortRequest",
          value: function abortRequest(xhrId) {
            var xhr = this.pendingRequests[xhrId].xhr;
            delete this.pendingRequests[xhrId];
            xhr.abort();
          }
        }]);

        return NetworkManager;
      }();

      var PDFNetworkStream = /*#__PURE__*/function () {
        function PDFNetworkStream(source) {
          _classCallCheck(this, PDFNetworkStream);

          this._source = source;
          this._manager = new NetworkManager(source.url, {
            httpHeaders: source.httpHeaders,
            withCredentials: source.withCredentials
          });
          this._rangeChunkSize = source.rangeChunkSize;
          this._fullRequestReader = null;
          this._rangeRequestReaders = [];
        }

        _createClass(PDFNetworkStream, [{
          key: "_onRangeRequestReaderClosed",
          value: function _onRangeRequestReaderClosed(reader) {
            var i = this._rangeRequestReaders.indexOf(reader);

            if (i >= 0) {
              this._rangeRequestReaders.splice(i, 1);
            }
          }
        }, {
          key: "getFullReader",
          value: function getFullReader() {
            (0, _util.assert)(!this._fullRequestReader);
            this._fullRequestReader = new PDFNetworkStreamFullRequestReader(this._manager, this._source);
            return this._fullRequestReader;
          }
        }, {
          key: "getRangeReader",
          value: function getRangeReader(begin, end) {
            var reader = new PDFNetworkStreamRangeRequestReader(this._manager, begin, end);
            reader.onClosed = this._onRangeRequestReaderClosed.bind(this);

            this._rangeRequestReaders.push(reader);

            return reader;
          }
        }, {
          key: "cancelAllRequests",
          value: function cancelAllRequests(reason) {
            if (this._fullRequestReader) {
              this._fullRequestReader.cancel(reason);
            }

            var readers = this._rangeRequestReaders.slice(0);

            readers.forEach(function (reader) {
              reader.cancel(reason);
            });
          }
        }]);

        return PDFNetworkStream;
      }();

      exports.PDFNetworkStream = PDFNetworkStream;

      var PDFNetworkStreamFullRequestReader = /*#__PURE__*/function () {
        function PDFNetworkStreamFullRequestReader(manager, source) {
          _classCallCheck(this, PDFNetworkStreamFullRequestReader);

          this._manager = manager;
          var args = {
            onHeadersReceived: this._onHeadersReceived.bind(this),
            onDone: this._onDone.bind(this),
            onError: this._onError.bind(this),
            onProgress: this._onProgress.bind(this)
          };
          this._url = source.url;
          this._fullRequestId = manager.requestFull(args);
          this._headersReceivedCapability = (0, _util.createPromiseCapability)();
          this._disableRange = source.disableRange || false;
          this._contentLength = source.length;
          this._rangeChunkSize = source.rangeChunkSize;

          if (!this._rangeChunkSize && !this._disableRange) {
            this._disableRange = true;
          }

          this._isStreamingSupported = false;
          this._isRangeSupported = false;
          this._cachedChunks = [];
          this._requests = [];
          this._done = false;
          this._storedError = undefined;
          this._filename = null;
          this.onProgress = null;
        }

        _createClass(PDFNetworkStreamFullRequestReader, [{
          key: "_onHeadersReceived",
          value: function _onHeadersReceived() {
            var fullRequestXhrId = this._fullRequestId;

            var fullRequestXhr = this._manager.getRequestXhr(fullRequestXhrId);

            var getResponseHeader = function getResponseHeader(name) {
              return fullRequestXhr.getResponseHeader(name);
            };

            var _ref33 = (0, _network_utils.validateRangeRequestCapabilities)({
              getResponseHeader: getResponseHeader,
              isHttp: this._manager.isHttp,
              rangeChunkSize: this._rangeChunkSize,
              disableRange: this._disableRange
            }),
                allowRangeRequests = _ref33.allowRangeRequests,
                suggestedLength = _ref33.suggestedLength;

            if (allowRangeRequests) {
              this._isRangeSupported = true;
            }

            this._contentLength = suggestedLength || this._contentLength;
            this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);

            if (this._isRangeSupported) {
              this._manager.abortRequest(fullRequestXhrId);
            }

            this._headersReceivedCapability.resolve();
          }
        }, {
          key: "_onDone",
          value: function _onDone(args) {
            if (args) {
              if (this._requests.length > 0) {
                var requestCapability = this._requests.shift();

                requestCapability.resolve({
                  value: args.chunk,
                  done: false
                });
              } else {
                this._cachedChunks.push(args.chunk);
              }
            }

            this._done = true;

            if (this._cachedChunks.length > 0) {
              return;
            }

            this._requests.forEach(function (requestCapability) {
              requestCapability.resolve({
                value: undefined,
                done: true
              });
            });

            this._requests = [];
          }
        }, {
          key: "_onError",
          value: function _onError(status) {
            var url = this._url;
            var exception = (0, _network_utils.createResponseStatusError)(status, url);
            this._storedError = exception;

            this._headersReceivedCapability.reject(exception);

            this._requests.forEach(function (requestCapability) {
              requestCapability.reject(exception);
            });

            this._requests = [];
            this._cachedChunks = [];
          }
        }, {
          key: "_onProgress",
          value: function _onProgress(data) {
            if (this.onProgress) {
              this.onProgress({
                loaded: data.loaded,
                total: data.lengthComputable ? data.total : this._contentLength
              });
            }
          }
        }, {
          key: "read",
          value: function () {
            var _read5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var chunk, requestCapability;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      if (!this._storedError) {
                        _context11.next = 2;
                        break;
                      }

                      throw this._storedError;

                    case 2:
                      if (!(this._cachedChunks.length > 0)) {
                        _context11.next = 5;
                        break;
                      }

                      chunk = this._cachedChunks.shift();
                      return _context11.abrupt("return", {
                        value: chunk,
                        done: false
                      });

                    case 5:
                      if (!this._done) {
                        _context11.next = 7;
                        break;
                      }

                      return _context11.abrupt("return", {
                        value: undefined,
                        done: true
                      });

                    case 7:
                      requestCapability = (0, _util.createPromiseCapability)();

                      this._requests.push(requestCapability);

                      return _context11.abrupt("return", requestCapability.promise);

                    case 10:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function read() {
              return _read5.apply(this, arguments);
            }

            return read;
          }()
        }, {
          key: "cancel",
          value: function cancel(reason) {
            this._done = true;

            this._headersReceivedCapability.reject(reason);

            this._requests.forEach(function (requestCapability) {
              requestCapability.resolve({
                value: undefined,
                done: true
              });
            });

            this._requests = [];

            if (this._manager.isPendingRequest(this._fullRequestId)) {
              this._manager.abortRequest(this._fullRequestId);
            }

            this._fullRequestReader = null;
          }
        }, {
          key: "filename",
          get: function get() {
            return this._filename;
          }
        }, {
          key: "isRangeSupported",
          get: function get() {
            return this._isRangeSupported;
          }
        }, {
          key: "isStreamingSupported",
          get: function get() {
            return this._isStreamingSupported;
          }
        }, {
          key: "contentLength",
          get: function get() {
            return this._contentLength;
          }
        }, {
          key: "headersReady",
          get: function get() {
            return this._headersReceivedCapability.promise;
          }
        }]);

        return PDFNetworkStreamFullRequestReader;
      }();

      var PDFNetworkStreamRangeRequestReader = /*#__PURE__*/function () {
        function PDFNetworkStreamRangeRequestReader(manager, begin, end) {
          _classCallCheck(this, PDFNetworkStreamRangeRequestReader);

          this._manager = manager;
          var args = {
            onDone: this._onDone.bind(this),
            onProgress: this._onProgress.bind(this)
          };
          this._requestId = manager.requestRange(begin, end, args);
          this._requests = [];
          this._queuedChunk = null;
          this._done = false;
          this.onProgress = null;
          this.onClosed = null;
        }

        _createClass(PDFNetworkStreamRangeRequestReader, [{
          key: "_close",
          value: function _close() {
            if (this.onClosed) {
              this.onClosed(this);
            }
          }
        }, {
          key: "_onDone",
          value: function _onDone(data) {
            var chunk = data.chunk;

            if (this._requests.length > 0) {
              var requestCapability = this._requests.shift();

              requestCapability.resolve({
                value: chunk,
                done: false
              });
            } else {
              this._queuedChunk = chunk;
            }

            this._done = true;

            this._requests.forEach(function (requestCapability) {
              requestCapability.resolve({
                value: undefined,
                done: true
              });
            });

            this._requests = [];

            this._close();
          }
        }, {
          key: "_onProgress",
          value: function _onProgress(evt) {
            if (!this.isStreamingSupported && this.onProgress) {
              this.onProgress({
                loaded: evt.loaded
              });
            }
          }
        }, {
          key: "read",
          value: function () {
            var _read6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var chunk, requestCapability;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      if (!(this._queuedChunk !== null)) {
                        _context12.next = 4;
                        break;
                      }

                      chunk = this._queuedChunk;
                      this._queuedChunk = null;
                      return _context12.abrupt("return", {
                        value: chunk,
                        done: false
                      });

                    case 4:
                      if (!this._done) {
                        _context12.next = 6;
                        break;
                      }

                      return _context12.abrupt("return", {
                        value: undefined,
                        done: true
                      });

                    case 6:
                      requestCapability = (0, _util.createPromiseCapability)();

                      this._requests.push(requestCapability);

                      return _context12.abrupt("return", requestCapability.promise);

                    case 9:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));

            function read() {
              return _read6.apply(this, arguments);
            }

            return read;
          }()
        }, {
          key: "cancel",
          value: function cancel(reason) {
            this._done = true;

            this._requests.forEach(function (requestCapability) {
              requestCapability.resolve({
                value: undefined,
                done: true
              });
            });

            this._requests = [];

            if (this._manager.isPendingRequest(this._requestId)) {
              this._manager.abortRequest(this._requestId);
            }

            this._close();
          }
        }, {
          key: "isStreamingSupported",
          get: function get() {
            return false;
          }
        }]);

        return PDFNetworkStreamRangeRequestReader;
      }();
      /***/

    },
    /* 23 */

    /***/
    function (module, exports, __w_pdfjs_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PDFFetchStream = void 0;

      var _util = __w_pdfjs_require__(1);

      var _network_utils = __w_pdfjs_require__(20);

      function createFetchOptions(headers, withCredentials, abortController) {
        return {
          method: "GET",
          headers: headers,
          signal: abortController && abortController.signal,
          mode: "cors",
          credentials: withCredentials ? "include" : "same-origin",
          redirect: "follow"
        };
      }

      function createHeaders(httpHeaders) {
        var headers = new Headers();

        for (var property in httpHeaders) {
          var value = httpHeaders[property];

          if (typeof value === "undefined") {
            continue;
          }

          headers.append(property, value);
        }

        return headers;
      }

      var PDFFetchStream = /*#__PURE__*/function () {
        function PDFFetchStream(source) {
          _classCallCheck(this, PDFFetchStream);

          this.source = source;
          this.isHttp = /^https?:/i.test(source.url);
          this.httpHeaders = this.isHttp && source.httpHeaders || {};
          this._fullRequestReader = null;
          this._rangeRequestReaders = [];
        }

        _createClass(PDFFetchStream, [{
          key: "getFullReader",
          value: function getFullReader() {
            (0, _util.assert)(!this._fullRequestReader);
            this._fullRequestReader = new PDFFetchStreamReader(this);
            return this._fullRequestReader;
          }
        }, {
          key: "getRangeReader",
          value: function getRangeReader(begin, end) {
            if (end <= this._progressiveDataLength) {
              return null;
            }

            var reader = new PDFFetchStreamRangeReader(this, begin, end);

            this._rangeRequestReaders.push(reader);

            return reader;
          }
        }, {
          key: "cancelAllRequests",
          value: function cancelAllRequests(reason) {
            if (this._fullRequestReader) {
              this._fullRequestReader.cancel(reason);
            }

            var readers = this._rangeRequestReaders.slice(0);

            readers.forEach(function (reader) {
              reader.cancel(reason);
            });
          }
        }, {
          key: "_progressiveDataLength",
          get: function get() {
            return this._fullRequestReader ? this._fullRequestReader._loaded : 0;
          }
        }]);

        return PDFFetchStream;
      }();

      exports.PDFFetchStream = PDFFetchStream;

      var PDFFetchStreamReader = /*#__PURE__*/function () {
        function PDFFetchStreamReader(stream) {
          var _this48 = this;

          _classCallCheck(this, PDFFetchStreamReader);

          this._stream = stream;
          this._reader = null;
          this._loaded = 0;
          this._filename = null;
          var source = stream.source;
          this._withCredentials = source.withCredentials || false;
          this._contentLength = source.length;
          this._headersCapability = (0, _util.createPromiseCapability)();
          this._disableRange = source.disableRange || false;
          this._rangeChunkSize = source.rangeChunkSize;

          if (!this._rangeChunkSize && !this._disableRange) {
            this._disableRange = true;
          }

          if (typeof AbortController !== "undefined") {
            this._abortController = new AbortController();
          }

          this._isStreamingSupported = !source.disableStream;
          this._isRangeSupported = !source.disableRange;
          this._headers = createHeaders(this._stream.httpHeaders);
          var url = source.url;
          fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(function (response) {
            if (!(0, _network_utils.validateResponseStatus)(response.status)) {
              throw (0, _network_utils.createResponseStatusError)(response.status, url);
            }

            _this48._reader = response.body.getReader();

            _this48._headersCapability.resolve();

            var getResponseHeader = function getResponseHeader(name) {
              return response.headers.get(name);
            };

            var _ref34 = (0, _network_utils.validateRangeRequestCapabilities)({
              getResponseHeader: getResponseHeader,
              isHttp: _this48._stream.isHttp,
              rangeChunkSize: _this48._rangeChunkSize,
              disableRange: _this48._disableRange
            }),
                allowRangeRequests = _ref34.allowRangeRequests,
                suggestedLength = _ref34.suggestedLength;

            _this48._isRangeSupported = allowRangeRequests;
            _this48._contentLength = suggestedLength || _this48._contentLength;
            _this48._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);

            if (!_this48._isStreamingSupported && _this48._isRangeSupported) {
              _this48.cancel(new _util.AbortException("Streaming is disabled."));
            }
          })["catch"](this._headersCapability.reject);
          this.onProgress = null;
        }

        _createClass(PDFFetchStreamReader, [{
          key: "read",
          value: function () {
            var _read7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _yield$this$_reader$r, value, done, buffer;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this._headersCapability.promise;

                    case 2:
                      _context13.next = 4;
                      return this._reader.read();

                    case 4:
                      _yield$this$_reader$r = _context13.sent;
                      value = _yield$this$_reader$r.value;
                      done = _yield$this$_reader$r.done;

                      if (!done) {
                        _context13.next = 9;
                        break;
                      }

                      return _context13.abrupt("return", {
                        value: value,
                        done: done
                      });

                    case 9:
                      this._loaded += value.byteLength;

                      if (this.onProgress) {
                        this.onProgress({
                          loaded: this._loaded,
                          total: this._contentLength
                        });
                      }

                      buffer = new Uint8Array(value).buffer;
                      return _context13.abrupt("return", {
                        value: buffer,
                        done: false
                      });

                    case 13:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));

            function read() {
              return _read7.apply(this, arguments);
            }

            return read;
          }()
        }, {
          key: "cancel",
          value: function cancel(reason) {
            if (this._reader) {
              this._reader.cancel(reason);
            }

            if (this._abortController) {
              this._abortController.abort();
            }
          }
        }, {
          key: "headersReady",
          get: function get() {
            return this._headersCapability.promise;
          }
        }, {
          key: "filename",
          get: function get() {
            return this._filename;
          }
        }, {
          key: "contentLength",
          get: function get() {
            return this._contentLength;
          }
        }, {
          key: "isRangeSupported",
          get: function get() {
            return this._isRangeSupported;
          }
        }, {
          key: "isStreamingSupported",
          get: function get() {
            return this._isStreamingSupported;
          }
        }]);

        return PDFFetchStreamReader;
      }();

      var PDFFetchStreamRangeReader = /*#__PURE__*/function () {
        function PDFFetchStreamRangeReader(stream, begin, end) {
          var _this49 = this;

          _classCallCheck(this, PDFFetchStreamRangeReader);

          this._stream = stream;
          this._reader = null;
          this._loaded = 0;
          var source = stream.source;
          this._withCredentials = source.withCredentials || false;
          this._readCapability = (0, _util.createPromiseCapability)();
          this._isStreamingSupported = !source.disableStream;

          if (typeof AbortController !== "undefined") {
            this._abortController = new AbortController();
          }

          this._headers = createHeaders(this._stream.httpHeaders);

          this._headers.append("Range", "bytes=".concat(begin, "-").concat(end - 1));

          var url = source.url;
          fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(function (response) {
            if (!(0, _network_utils.validateResponseStatus)(response.status)) {
              throw (0, _network_utils.createResponseStatusError)(response.status, url);
            }

            _this49._readCapability.resolve();

            _this49._reader = response.body.getReader();
          });
          this.onProgress = null;
        }

        _createClass(PDFFetchStreamRangeReader, [{
          key: "read",
          value: function () {
            var _read8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var _yield$this$_reader$r2, value, done, buffer;

              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this._readCapability.promise;

                    case 2:
                      _context14.next = 4;
                      return this._reader.read();

                    case 4:
                      _yield$this$_reader$r2 = _context14.sent;
                      value = _yield$this$_reader$r2.value;
                      done = _yield$this$_reader$r2.done;

                      if (!done) {
                        _context14.next = 9;
                        break;
                      }

                      return _context14.abrupt("return", {
                        value: value,
                        done: done
                      });

                    case 9:
                      this._loaded += value.byteLength;

                      if (this.onProgress) {
                        this.onProgress({
                          loaded: this._loaded
                        });
                      }

                      buffer = new Uint8Array(value).buffer;
                      return _context14.abrupt("return", {
                        value: buffer,
                        done: false
                      });

                    case 13:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function read() {
              return _read8.apply(this, arguments);
            }

            return read;
          }()
        }, {
          key: "cancel",
          value: function cancel(reason) {
            if (this._reader) {
              this._reader.cancel(reason);
            }

            if (this._abortController) {
              this._abortController.abort();
            }
          }
        }, {
          key: "isStreamingSupported",
          get: function get() {
            return this._isStreamingSupported;
          }
        }]);

        return PDFFetchStreamRangeReader;
      }();
      /***/

    }
    /******/
    ])
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/pdfjs-dist/lib/web/pdf_link_service.js":
/*!*************************************************************!*\
  !*** ./node_modules/pdfjs-dist/lib/web/pdf_link_service.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2020 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleLinkService = exports.PDFLinkService = void 0;

var _ui_utils = __webpack_require__(/*! ./ui_utils.js */ "./node_modules/pdfjs-dist/lib/web/ui_utils.js");

var PDFLinkService = /*#__PURE__*/function () {
  function PDFLinkService() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        eventBus = _ref.eventBus,
        _ref$externalLinkTarg = _ref.externalLinkTarget,
        externalLinkTarget = _ref$externalLinkTarg === void 0 ? null : _ref$externalLinkTarg,
        _ref$externalLinkRel = _ref.externalLinkRel,
        externalLinkRel = _ref$externalLinkRel === void 0 ? null : _ref$externalLinkRel,
        _ref$externalLinkEnab = _ref.externalLinkEnabled,
        externalLinkEnabled = _ref$externalLinkEnab === void 0 ? true : _ref$externalLinkEnab,
        _ref$ignoreDestinatio = _ref.ignoreDestinationZoom,
        ignoreDestinationZoom = _ref$ignoreDestinatio === void 0 ? false : _ref$ignoreDestinatio;

    _classCallCheck(this, PDFLinkService);

    this.eventBus = eventBus || (0, _ui_utils.getGlobalEventBus)();
    this.externalLinkTarget = externalLinkTarget;
    this.externalLinkRel = externalLinkRel;
    this.externalLinkEnabled = externalLinkEnabled;
    this._ignoreDestinationZoom = ignoreDestinationZoom;
    this.baseUrl = null;
    this.pdfDocument = null;
    this.pdfViewer = null;
    this.pdfHistory = null;
    this._pagesRefCache = null;
  }

  _createClass(PDFLinkService, [{
    key: "setDocument",
    value: function setDocument(pdfDocument) {
      var baseUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.baseUrl = baseUrl;
      this.pdfDocument = pdfDocument;
      this._pagesRefCache = Object.create(null);
    }
  }, {
    key: "setViewer",
    value: function setViewer(pdfViewer) {
      this.pdfViewer = pdfViewer;
    }
  }, {
    key: "setHistory",
    value: function setHistory(pdfHistory) {
      this.pdfHistory = pdfHistory;
    }
  }, {
    key: "navigateTo",
    value: function navigateTo(dest) {
      var _this = this;

      var goToDestination = function goToDestination(_ref2) {
        var namedDest = _ref2.namedDest,
            explicitDest = _ref2.explicitDest;
        var destRef = explicitDest[0];
        var pageNumber;

        if (destRef instanceof Object) {
          pageNumber = _this._cachedPageNumber(destRef);

          if (pageNumber === null) {
            _this.pdfDocument.getPageIndex(destRef).then(function (pageIndex) {
              _this.cachePageRef(pageIndex + 1, destRef);

              goToDestination({
                namedDest: namedDest,
                explicitDest: explicitDest
              });
            })["catch"](function () {
              console.error("PDFLinkService.navigateTo: \"".concat(destRef, "\" is not ") + "a valid page reference, for dest=\"".concat(dest, "\"."));
            });

            return;
          }
        } else if (Number.isInteger(destRef)) {
          pageNumber = destRef + 1;
        } else {
          console.error("PDFLinkService.navigateTo: \"".concat(destRef, "\" is not ") + "a valid destination reference, for dest=\"".concat(dest, "\"."));
          return;
        }

        if (!pageNumber || pageNumber < 1 || pageNumber > _this.pagesCount) {
          console.error("PDFLinkService.navigateTo: \"".concat(pageNumber, "\" is not ") + "a valid page number, for dest=\"".concat(dest, "\"."));
          return;
        }

        if (_this.pdfHistory) {
          _this.pdfHistory.pushCurrentPosition();

          _this.pdfHistory.push({
            namedDest: namedDest,
            explicitDest: explicitDest,
            pageNumber: pageNumber
          });
        }

        _this.pdfViewer.scrollPageIntoView({
          pageNumber: pageNumber,
          destArray: explicitDest,
          ignoreDestinationZoom: _this._ignoreDestinationZoom
        });
      };

      new Promise(function (resolve, reject) {
        if (typeof dest === "string") {
          _this.pdfDocument.getDestination(dest).then(function (destArray) {
            resolve({
              namedDest: dest,
              explicitDest: destArray
            });
          });

          return;
        }

        resolve({
          namedDest: "",
          explicitDest: dest
        });
      }).then(function (data) {
        if (!Array.isArray(data.explicitDest)) {
          console.error("PDFLinkService.navigateTo: \"".concat(data.explicitDest, "\" is") + " not a valid destination array, for dest=\"".concat(dest, "\"."));
          return;
        }

        goToDestination(data);
      });
    }
  }, {
    key: "getDestinationHash",
    value: function getDestinationHash(dest) {
      if (typeof dest === "string") {
        return this.getAnchorUrl("#" + escape(dest));
      }

      if (Array.isArray(dest)) {
        var str = JSON.stringify(dest);
        return this.getAnchorUrl("#" + escape(str));
      }

      return this.getAnchorUrl("");
    }
  }, {
    key: "getAnchorUrl",
    value: function getAnchorUrl(anchor) {
      return (this.baseUrl || "") + anchor;
    }
  }, {
    key: "setHash",
    value: function setHash(hash) {
      var pageNumber, dest;

      if (hash.includes("=")) {
        var params = (0, _ui_utils.parseQueryString)(hash);

        if ("search" in params) {
          this.eventBus.dispatch("findfromurlhash", {
            source: this,
            query: params["search"].replace(/"/g, ""),
            phraseSearch: params["phrase"] === "true"
          });
        }

        if ("nameddest" in params) {
          this.navigateTo(params.nameddest);
          return;
        }

        if ("page" in params) {
          pageNumber = params.page | 0 || 1;
        }

        if ("zoom" in params) {
          var zoomArgs = params.zoom.split(",");
          var zoomArg = zoomArgs[0];
          var zoomArgNumber = parseFloat(zoomArg);

          if (!zoomArg.includes("Fit")) {
            dest = [null, {
              name: "XYZ"
            }, zoomArgs.length > 1 ? zoomArgs[1] | 0 : null, zoomArgs.length > 2 ? zoomArgs[2] | 0 : null, zoomArgNumber ? zoomArgNumber / 100 : zoomArg];
          } else {
            if (zoomArg === "Fit" || zoomArg === "FitB") {
              dest = [null, {
                name: zoomArg
              }];
            } else if (zoomArg === "FitH" || zoomArg === "FitBH" || zoomArg === "FitV" || zoomArg === "FitBV") {
              dest = [null, {
                name: zoomArg
              }, zoomArgs.length > 1 ? zoomArgs[1] | 0 : null];
            } else if (zoomArg === "FitR") {
              if (zoomArgs.length !== 5) {
                console.error('PDFLinkService.setHash: Not enough parameters for "FitR".');
              } else {
                dest = [null, {
                  name: zoomArg
                }, zoomArgs[1] | 0, zoomArgs[2] | 0, zoomArgs[3] | 0, zoomArgs[4] | 0];
              }
            } else {
              console.error("PDFLinkService.setHash: \"".concat(zoomArg, "\" is not ") + "a valid zoom value.");
            }
          }
        }

        if (dest) {
          this.pdfViewer.scrollPageIntoView({
            pageNumber: pageNumber || this.page,
            destArray: dest,
            allowNegativeOffset: true
          });
        } else if (pageNumber) {
          this.page = pageNumber;
        }

        if ("pagemode" in params) {
          this.eventBus.dispatch("pagemode", {
            source: this,
            mode: params.pagemode
          });
        }
      } else {
        dest = unescape(hash);

        try {
          dest = JSON.parse(dest);

          if (!Array.isArray(dest)) {
            dest = dest.toString();
          }
        } catch (ex) {}

        if (typeof dest === "string" || isValidExplicitDestination(dest)) {
          this.navigateTo(dest);
          return;
        }

        console.error("PDFLinkService.setHash: \"".concat(unescape(hash), "\" is not ") + "a valid destination.");
      }
    }
  }, {
    key: "executeNamedAction",
    value: function executeNamedAction(action) {
      switch (action) {
        case "GoBack":
          if (this.pdfHistory) {
            this.pdfHistory.back();
          }

          break;

        case "GoForward":
          if (this.pdfHistory) {
            this.pdfHistory.forward();
          }

          break;

        case "NextPage":
          if (this.page < this.pagesCount) {
            this.page++;
          }

          break;

        case "PrevPage":
          if (this.page > 1) {
            this.page--;
          }

          break;

        case "LastPage":
          this.page = this.pagesCount;
          break;

        case "FirstPage":
          this.page = 1;
          break;

        default:
          break;
      }

      this.eventBus.dispatch("namedaction", {
        source: this,
        action: action
      });
    }
  }, {
    key: "cachePageRef",
    value: function cachePageRef(pageNum, pageRef) {
      if (!pageRef) {
        return;
      }

      var refStr = pageRef.gen === 0 ? "".concat(pageRef.num, "R") : "".concat(pageRef.num, "R").concat(pageRef.gen);
      this._pagesRefCache[refStr] = pageNum;
    }
  }, {
    key: "_cachedPageNumber",
    value: function _cachedPageNumber(pageRef) {
      var refStr = pageRef.gen === 0 ? "".concat(pageRef.num, "R") : "".concat(pageRef.num, "R").concat(pageRef.gen);
      return this._pagesRefCache && this._pagesRefCache[refStr] || null;
    }
  }, {
    key: "isPageVisible",
    value: function isPageVisible(pageNumber) {
      return this.pdfViewer.isPageVisible(pageNumber);
    }
  }, {
    key: "pagesCount",
    get: function get() {
      return this.pdfDocument ? this.pdfDocument.numPages : 0;
    }
  }, {
    key: "page",
    get: function get() {
      return this.pdfViewer.currentPageNumber;
    },
    set: function set(value) {
      this.pdfViewer.currentPageNumber = value;
    }
  }, {
    key: "rotation",
    get: function get() {
      return this.pdfViewer.pagesRotation;
    },
    set: function set(value) {
      this.pdfViewer.pagesRotation = value;
    }
  }]);

  return PDFLinkService;
}();

exports.PDFLinkService = PDFLinkService;

function isValidExplicitDestination(dest) {
  if (!Array.isArray(dest)) {
    return false;
  }

  var destLength = dest.length;

  if (destLength < 2) {
    return false;
  }

  var page = dest[0];

  if (!(_typeof(page) === "object" && Number.isInteger(page.num) && Number.isInteger(page.gen)) && !(Number.isInteger(page) && page >= 0)) {
    return false;
  }

  var zoom = dest[1];

  if (!(_typeof(zoom) === "object" && typeof zoom.name === "string")) {
    return false;
  }

  var allowNull = true;

  switch (zoom.name) {
    case "XYZ":
      if (destLength !== 5) {
        return false;
      }

      break;

    case "Fit":
    case "FitB":
      return destLength === 2;

    case "FitH":
    case "FitBH":
    case "FitV":
    case "FitBV":
      if (destLength !== 3) {
        return false;
      }

      break;

    case "FitR":
      if (destLength !== 6) {
        return false;
      }

      allowNull = false;
      break;

    default:
      return false;
  }

  for (var i = 2; i < destLength; i++) {
    var param = dest[i];

    if (!(typeof param === "number" || allowNull && param === null)) {
      return false;
    }
  }

  return true;
}

var SimpleLinkService = /*#__PURE__*/function () {
  function SimpleLinkService() {
    _classCallCheck(this, SimpleLinkService);

    this.externalLinkTarget = null;
    this.externalLinkRel = null;
    this.externalLinkEnabled = true;
    this._ignoreDestinationZoom = false;
  }

  _createClass(SimpleLinkService, [{
    key: "navigateTo",
    value: function navigateTo(dest) {}
  }, {
    key: "getDestinationHash",
    value: function getDestinationHash(dest) {
      return "#";
    }
  }, {
    key: "getAnchorUrl",
    value: function getAnchorUrl(hash) {
      return "#";
    }
  }, {
    key: "setHash",
    value: function setHash(hash) {}
  }, {
    key: "executeNamedAction",
    value: function executeNamedAction(action) {}
  }, {
    key: "cachePageRef",
    value: function cachePageRef(pageNum, pageRef) {}
  }, {
    key: "isPageVisible",
    value: function isPageVisible(pageNumber) {
      return true;
    }
  }, {
    key: "pagesCount",
    get: function get() {
      return 0;
    }
  }, {
    key: "page",
    get: function get() {
      return 0;
    },
    set: function set(value) {}
  }, {
    key: "rotation",
    get: function get() {
      return 0;
    },
    set: function set(value) {}
  }]);

  return SimpleLinkService;
}();

exports.SimpleLinkService = SimpleLinkService;

/***/ }),

/***/ "./node_modules/pdfjs-dist/lib/web/ui_utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/pdfjs-dist/lib/web/ui_utils.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2020 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidRotation = isValidRotation;
exports.isValidScrollMode = isValidScrollMode;
exports.isValidSpreadMode = isValidSpreadMode;
exports.isPortraitOrientation = isPortraitOrientation;
exports.getGlobalEventBus = getGlobalEventBus;
exports.clamp = clamp;
exports.getPDFFileNameFromURL = getPDFFileNameFromURL;
exports.noContextMenuHandler = noContextMenuHandler;
exports.parseQueryString = parseQueryString;
exports.backtrackBeforeAllVisibleElements = backtrackBeforeAllVisibleElements;
exports.getVisibleElements = getVisibleElements;
exports.roundToDivide = roundToDivide;
exports.getPageSizeInches = getPageSizeInches;
exports.approximateFraction = approximateFraction;
exports.getOutputScale = getOutputScale;
exports.scrollIntoView = scrollIntoView;
exports.watchScroll = watchScroll;
exports.binarySearchFirstItem = binarySearchFirstItem;
exports.normalizeWheelEventDelta = normalizeWheelEventDelta;
exports.waitOnEventOrTimeout = waitOnEventOrTimeout;
exports.moveToEndOfArray = moveToEndOfArray;
exports.WaitOnType = exports.animationStarted = exports.ProgressBar = exports.EventBus = exports.NullL10n = exports.SpreadMode = exports.ScrollMode = exports.TextLayerMode = exports.RendererType = exports.PresentationModeState = exports.VERTICAL_PADDING = exports.SCROLLBAR_PADDING = exports.MAX_AUTO_SCALE = exports.UNKNOWN_SCALE = exports.MAX_SCALE = exports.MIN_SCALE = exports.DEFAULT_SCALE = exports.DEFAULT_SCALE_VALUE = exports.CSS_UNITS = exports.AutoPrintRegExp = void 0;
var CSS_UNITS = 96.0 / 72.0;
exports.CSS_UNITS = CSS_UNITS;
var DEFAULT_SCALE_VALUE = "auto";
exports.DEFAULT_SCALE_VALUE = DEFAULT_SCALE_VALUE;
var DEFAULT_SCALE = 1.0;
exports.DEFAULT_SCALE = DEFAULT_SCALE;
var MIN_SCALE = 0.1;
exports.MIN_SCALE = MIN_SCALE;
var MAX_SCALE = 10.0;
exports.MAX_SCALE = MAX_SCALE;
var UNKNOWN_SCALE = 0;
exports.UNKNOWN_SCALE = UNKNOWN_SCALE;
var MAX_AUTO_SCALE = 1.25;
exports.MAX_AUTO_SCALE = MAX_AUTO_SCALE;
var SCROLLBAR_PADDING = 40;
exports.SCROLLBAR_PADDING = SCROLLBAR_PADDING;
var VERTICAL_PADDING = 5;
exports.VERTICAL_PADDING = VERTICAL_PADDING;
var PresentationModeState = {
  UNKNOWN: 0,
  NORMAL: 1,
  CHANGING: 2,
  FULLSCREEN: 3
};
exports.PresentationModeState = PresentationModeState;
var RendererType = {
  CANVAS: "canvas",
  SVG: "svg"
};
exports.RendererType = RendererType;
var TextLayerMode = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_ENHANCE: 2
};
exports.TextLayerMode = TextLayerMode;
var ScrollMode = {
  UNKNOWN: -1,
  VERTICAL: 0,
  HORIZONTAL: 1,
  WRAPPED: 2
};
exports.ScrollMode = ScrollMode;
var SpreadMode = {
  UNKNOWN: -1,
  NONE: 0,
  ODD: 1,
  EVEN: 2
};
exports.SpreadMode = SpreadMode;
var AutoPrintRegExp = /\bprint\s*\(/;
exports.AutoPrintRegExp = AutoPrintRegExp;

function formatL10nValue(text, args) {
  if (!args) {
    return text;
  }

  return text.replace(/\{\{\s*(\w+)\s*\}\}/g, function (all, name) {
    return name in args ? args[name] : "{{" + name + "}}";
  });
}

var NullL10n = {
  getLanguage: function getLanguage() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "en-us");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  getDirection: function getDirection() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", "ltr");

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  get: function get(property, args, fallback) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", formatL10nValue(fallback, args));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  translate: function translate(element) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }
};
exports.NullL10n = NullL10n;

function getOutputScale(ctx) {
  var devicePixelRatio = window.devicePixelRatio || 1;
  var backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
  var pixelRatio = devicePixelRatio / backingStoreRatio;
  return {
    sx: pixelRatio,
    sy: pixelRatio,
    scaled: pixelRatio !== 1
  };
}

function scrollIntoView(element, spot) {
  var skipOverflowHiddenElements = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var parent = element.offsetParent;

  if (!parent) {
    console.error("offsetParent is not set -- cannot scroll");
    return;
  }

  var offsetY = element.offsetTop + element.clientTop;
  var offsetX = element.offsetLeft + element.clientLeft;

  while (parent.clientHeight === parent.scrollHeight && parent.clientWidth === parent.scrollWidth || skipOverflowHiddenElements && getComputedStyle(parent).overflow === "hidden") {
    if (parent.dataset._scaleY) {
      offsetY /= parent.dataset._scaleY;
      offsetX /= parent.dataset._scaleX;
    }

    offsetY += parent.offsetTop;
    offsetX += parent.offsetLeft;
    parent = parent.offsetParent;

    if (!parent) {
      return;
    }
  }

  if (spot) {
    if (spot.top !== undefined) {
      offsetY += spot.top;
    }

    if (spot.left !== undefined) {
      offsetX += spot.left;
      parent.scrollLeft = offsetX;
    }
  }

  parent.scrollTop = offsetY;
}

function watchScroll(viewAreaElement, callback) {
  var debounceScroll = function debounceScroll(evt) {
    if (rAF) {
      return;
    }

    rAF = window.requestAnimationFrame(function viewAreaElementScrolled() {
      rAF = null;
      var currentX = viewAreaElement.scrollLeft;
      var lastX = state.lastX;

      if (currentX !== lastX) {
        state.right = currentX > lastX;
      }

      state.lastX = currentX;
      var currentY = viewAreaElement.scrollTop;
      var lastY = state.lastY;

      if (currentY !== lastY) {
        state.down = currentY > lastY;
      }

      state.lastY = currentY;
      callback(state);
    });
  };

  var state = {
    right: true,
    down: true,
    lastX: viewAreaElement.scrollLeft,
    lastY: viewAreaElement.scrollTop,
    _eventHandler: debounceScroll
  };
  var rAF = null;
  viewAreaElement.addEventListener("scroll", debounceScroll, true);
  return state;
}

function parseQueryString(query) {
  var parts = query.split("&");
  var params = Object.create(null);

  for (var i = 0, ii = parts.length; i < ii; ++i) {
    var param = parts[i].split("=");
    var key = param[0].toLowerCase();
    var value = param.length > 1 ? param[1] : null;
    params[decodeURIComponent(key)] = decodeURIComponent(value);
  }

  return params;
}

function binarySearchFirstItem(items, condition) {
  var minIndex = 0;
  var maxIndex = items.length - 1;

  if (items.length === 0 || !condition(items[maxIndex])) {
    return items.length;
  }

  if (condition(items[minIndex])) {
    return minIndex;
  }

  while (minIndex < maxIndex) {
    var currentIndex = minIndex + maxIndex >> 1;
    var currentItem = items[currentIndex];

    if (condition(currentItem)) {
      maxIndex = currentIndex;
    } else {
      minIndex = currentIndex + 1;
    }
  }

  return minIndex;
}

function approximateFraction(x) {
  if (Math.floor(x) === x) {
    return [x, 1];
  }

  var xinv = 1 / x;
  var limit = 8;

  if (xinv > limit) {
    return [1, limit];
  } else if (Math.floor(xinv) === xinv) {
    return [1, xinv];
  }

  var x_ = x > 1 ? xinv : x;
  var a = 0,
      b = 1,
      c = 1,
      d = 1;

  while (true) {
    var p = a + c,
        q = b + d;

    if (q > limit) {
      break;
    }

    if (x_ <= p / q) {
      c = p;
      d = q;
    } else {
      a = p;
      b = q;
    }
  }

  var result;

  if (x_ - a / b < c / d - x_) {
    result = x_ === x ? [a, b] : [b, a];
  } else {
    result = x_ === x ? [c, d] : [d, c];
  }

  return result;
}

function roundToDivide(x, div) {
  var r = x % div;
  return r === 0 ? x : Math.round(x - r + div);
}

function getPageSizeInches(_ref) {
  var view = _ref.view,
      userUnit = _ref.userUnit,
      rotate = _ref.rotate;

  var _view = _slicedToArray(view, 4),
      x1 = _view[0],
      y1 = _view[1],
      x2 = _view[2],
      y2 = _view[3];

  var changeOrientation = rotate % 180 !== 0;
  var width = (x2 - x1) / 72 * userUnit;
  var height = (y2 - y1) / 72 * userUnit;
  return {
    width: changeOrientation ? height : width,
    height: changeOrientation ? width : height
  };
}

function backtrackBeforeAllVisibleElements(index, views, top) {
  if (index < 2) {
    return index;
  }

  var elt = views[index].div;
  var pageTop = elt.offsetTop + elt.clientTop;

  if (pageTop >= top) {
    elt = views[index - 1].div;
    pageTop = elt.offsetTop + elt.clientTop;
  }

  for (var i = index - 2; i >= 0; --i) {
    elt = views[i].div;

    if (elt.offsetTop + elt.clientTop + elt.clientHeight <= pageTop) {
      break;
    }

    index = i;
  }

  return index;
}

function getVisibleElements(scrollEl, views) {
  var sortByVisibility = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var horizontal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var top = scrollEl.scrollTop,
      bottom = top + scrollEl.clientHeight;
  var left = scrollEl.scrollLeft,
      right = left + scrollEl.clientWidth;

  function isElementBottomAfterViewTop(view) {
    var element = view.div;
    var elementBottom = element.offsetTop + element.clientTop + element.clientHeight;
    return elementBottom > top;
  }

  function isElementRightAfterViewLeft(view) {
    var element = view.div;
    var elementRight = element.offsetLeft + element.clientLeft + element.clientWidth;
    return elementRight > left;
  }

  var visible = [],
      numViews = views.length;
  var firstVisibleElementInd = numViews === 0 ? 0 : binarySearchFirstItem(views, horizontal ? isElementRightAfterViewLeft : isElementBottomAfterViewTop);

  if (firstVisibleElementInd > 0 && firstVisibleElementInd < numViews && !horizontal) {
    firstVisibleElementInd = backtrackBeforeAllVisibleElements(firstVisibleElementInd, views, top);
  }

  var lastEdge = horizontal ? right : -1;

  for (var i = firstVisibleElementInd; i < numViews; i++) {
    var view = views[i],
        element = view.div;
    var currentWidth = element.offsetLeft + element.clientLeft;
    var currentHeight = element.offsetTop + element.clientTop;
    var viewWidth = element.clientWidth,
        viewHeight = element.clientHeight;
    var viewRight = currentWidth + viewWidth;
    var viewBottom = currentHeight + viewHeight;

    if (lastEdge === -1) {
      if (viewBottom >= bottom) {
        lastEdge = viewBottom;
      }
    } else if ((horizontal ? currentWidth : currentHeight) > lastEdge) {
      break;
    }

    if (viewBottom <= top || currentHeight >= bottom || viewRight <= left || currentWidth >= right) {
      continue;
    }

    var hiddenHeight = Math.max(0, top - currentHeight) + Math.max(0, viewBottom - bottom);
    var hiddenWidth = Math.max(0, left - currentWidth) + Math.max(0, viewRight - right);
    var percent = (viewHeight - hiddenHeight) * (viewWidth - hiddenWidth) * 100 / viewHeight / viewWidth | 0;
    visible.push({
      id: view.id,
      x: currentWidth,
      y: currentHeight,
      view: view,
      percent: percent
    });
  }

  var first = visible[0],
      last = visible[visible.length - 1];

  if (sortByVisibility) {
    visible.sort(function (a, b) {
      var pc = a.percent - b.percent;

      if (Math.abs(pc) > 0.001) {
        return -pc;
      }

      return a.id - b.id;
    });
  }

  return {
    first: first,
    last: last,
    views: visible
  };
}

function noContextMenuHandler(evt) {
  evt.preventDefault();
}

function isDataSchema(url) {
  var i = 0;
  var ii = url.length;

  while (i < ii && url[i].trim() === "") {
    i++;
  }

  return url.substring(i, i + 5).toLowerCase() === "data:";
}

function getPDFFileNameFromURL(url) {
  var defaultFilename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "document.pdf";

  if (typeof url !== "string") {
    return defaultFilename;
  }

  if (isDataSchema(url)) {
    console.warn("getPDFFileNameFromURL: " + 'ignoring "data:" URL for performance reasons.');
    return defaultFilename;
  }

  var reURI = /^(?:(?:[^:]+:)?\/\/[^\/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/;
  var reFilename = /[^\/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
  var splitURI = reURI.exec(url);
  var suggestedFilename = reFilename.exec(splitURI[1]) || reFilename.exec(splitURI[2]) || reFilename.exec(splitURI[3]);

  if (suggestedFilename) {
    suggestedFilename = suggestedFilename[0];

    if (suggestedFilename.includes("%")) {
      try {
        suggestedFilename = reFilename.exec(decodeURIComponent(suggestedFilename))[0];
      } catch (ex) {}
    }
  }

  return suggestedFilename || defaultFilename;
}

function normalizeWheelEventDelta(evt) {
  var delta = Math.sqrt(evt.deltaX * evt.deltaX + evt.deltaY * evt.deltaY);
  var angle = Math.atan2(evt.deltaY, evt.deltaX);

  if (-0.25 * Math.PI < angle && angle < 0.75 * Math.PI) {
    delta = -delta;
  }

  var MOUSE_DOM_DELTA_PIXEL_MODE = 0;
  var MOUSE_DOM_DELTA_LINE_MODE = 1;
  var MOUSE_PIXELS_PER_LINE = 30;
  var MOUSE_LINES_PER_PAGE = 30;

  if (evt.deltaMode === MOUSE_DOM_DELTA_PIXEL_MODE) {
    delta /= MOUSE_PIXELS_PER_LINE * MOUSE_LINES_PER_PAGE;
  } else if (evt.deltaMode === MOUSE_DOM_DELTA_LINE_MODE) {
    delta /= MOUSE_LINES_PER_PAGE;
  }

  return delta;
}

function isValidRotation(angle) {
  return Number.isInteger(angle) && angle % 90 === 0;
}

function isValidScrollMode(mode) {
  return Number.isInteger(mode) && Object.values(ScrollMode).includes(mode) && mode !== ScrollMode.UNKNOWN;
}

function isValidSpreadMode(mode) {
  return Number.isInteger(mode) && Object.values(SpreadMode).includes(mode) && mode !== SpreadMode.UNKNOWN;
}

function isPortraitOrientation(size) {
  return size.width <= size.height;
}

var WaitOnType = {
  EVENT: "event",
  TIMEOUT: "timeout"
};
exports.WaitOnType = WaitOnType;

function waitOnEventOrTimeout(_ref2) {
  var target = _ref2.target,
      name = _ref2.name,
      _ref2$delay = _ref2.delay,
      delay = _ref2$delay === void 0 ? 0 : _ref2$delay;
  return new Promise(function (resolve, reject) {
    if (_typeof(target) !== "object" || !(name && typeof name === "string") || !(Number.isInteger(delay) && delay >= 0)) {
      throw new Error("waitOnEventOrTimeout - invalid parameters.");
    }

    function handler(type) {
      if (target instanceof EventBus) {
        target._off(name, eventHandler);
      } else {
        target.removeEventListener(name, eventHandler);
      }

      if (timeout) {
        clearTimeout(timeout);
      }

      resolve(type);
    }

    var eventHandler = handler.bind(null, WaitOnType.EVENT);

    if (target instanceof EventBus) {
      target._on(name, eventHandler);
    } else {
      target.addEventListener(name, eventHandler);
    }

    var timeoutHandler = handler.bind(null, WaitOnType.TIMEOUT);
    var timeout = setTimeout(timeoutHandler, delay);
  });
}

var animationStarted = new Promise(function (resolve) {
  window.requestAnimationFrame(resolve);
});
exports.animationStarted = animationStarted;

function dispatchDOMEvent(eventName) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var details = Object.create(null);

  if (args && args.length > 0) {
    var obj = args[0];

    for (var key in obj) {
      var value = obj[key];

      if (key === "source") {
        if (value === window || value === document) {
          return;
        }

        continue;
      }

      details[key] = value;
    }
  }

  var event = document.createEvent("CustomEvent");
  event.initCustomEvent(eventName, true, true, details);
  document.dispatchEvent(event);
}

var EventBus = /*#__PURE__*/function () {
  function EventBus() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref3$dispatchToDOM = _ref3.dispatchToDOM,
        dispatchToDOM = _ref3$dispatchToDOM === void 0 ? false : _ref3$dispatchToDOM;

    _classCallCheck(this, EventBus);

    this._listeners = Object.create(null);
    this._dispatchToDOM = dispatchToDOM === true;

    if (dispatchToDOM) {
      console.error("The `eventBusDispatchToDOM` option/preference is deprecated, " + "add event listeners to the EventBus instance rather than the DOM.");
    }
  }

  _createClass(EventBus, [{
    key: "on",
    value: function on(eventName, listener) {
      this._on(eventName, listener, {
        external: true
      });
    }
  }, {
    key: "off",
    value: function off(eventName, listener) {
      this._off(eventName, listener, {
        external: true
      });
    }
  }, {
    key: "dispatch",
    value: function dispatch(eventName) {
      var eventListeners = this._listeners[eventName];

      if (!eventListeners || eventListeners.length === 0) {
        if (this._dispatchToDOM) {
          var _args5 = Array.prototype.slice.call(arguments, 1);

          dispatchDOMEvent(eventName, _args5);
        }

        return;
      }

      var args = Array.prototype.slice.call(arguments, 1);
      var externalListeners;
      eventListeners.slice(0).forEach(function (_ref4) {
        var listener = _ref4.listener,
            external = _ref4.external;

        if (external) {
          if (!externalListeners) {
            externalListeners = [];
          }

          externalListeners.push(listener);
          return;
        }

        listener.apply(null, args);
      });

      if (externalListeners) {
        externalListeners.forEach(function (listener) {
          listener.apply(null, args);
        });
        externalListeners = null;
      }

      if (this._dispatchToDOM) {
        dispatchDOMEvent(eventName, args);
      }
    }
  }, {
    key: "_on",
    value: function _on(eventName, listener) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var eventListeners = this._listeners[eventName];

      if (!eventListeners) {
        this._listeners[eventName] = eventListeners = [];
      }

      eventListeners.push({
        listener: listener,
        external: (options && options.external) === true
      });
    }
  }, {
    key: "_off",
    value: function _off(eventName, listener) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var eventListeners = this._listeners[eventName];

      if (!eventListeners) {
        return;
      }

      for (var i = 0, ii = eventListeners.length; i < ii; i++) {
        if (eventListeners[i].listener === listener) {
          eventListeners.splice(i, 1);
          return;
        }
      }
    }
  }]);

  return EventBus;
}();

exports.EventBus = EventBus;
var globalEventBus = null;

function getGlobalEventBus() {
  var dispatchToDOM = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  console.error("getGlobalEventBus is deprecated, use a manually created EventBus instance instead.");

  if (!globalEventBus) {
    globalEventBus = new EventBus({
      dispatchToDOM: dispatchToDOM
    });
  }

  return globalEventBus;
}

function clamp(v, min, max) {
  return Math.min(Math.max(v, min), max);
}

var ProgressBar = /*#__PURE__*/function () {
  function ProgressBar(id) {
    var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        height = _ref5.height,
        width = _ref5.width,
        units = _ref5.units;

    _classCallCheck(this, ProgressBar);

    this.visible = true;
    this.div = document.querySelector(id + " .progress");
    this.bar = this.div.parentNode;
    this.height = height || 100;
    this.width = width || 100;
    this.units = units || "%";
    this.div.style.height = this.height + this.units;
    this.percent = 0;
  }

  _createClass(ProgressBar, [{
    key: "_updateBar",
    value: function _updateBar() {
      if (this._indeterminate) {
        this.div.classList.add("indeterminate");
        this.div.style.width = this.width + this.units;
        return;
      }

      this.div.classList.remove("indeterminate");
      var progressSize = this.width * this._percent / 100;
      this.div.style.width = progressSize + this.units;
    }
  }, {
    key: "setWidth",
    value: function setWidth(viewer) {
      if (!viewer) {
        return;
      }

      var container = viewer.parentNode;
      var scrollbarWidth = container.offsetWidth - viewer.offsetWidth;

      if (scrollbarWidth > 0) {
        this.bar.style.width = "calc(100% - ".concat(scrollbarWidth, "px)");
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      if (!this.visible) {
        return;
      }

      this.visible = false;
      this.bar.classList.add("hidden");
      document.body.classList.remove("loadingInProgress");
    }
  }, {
    key: "show",
    value: function show() {
      if (this.visible) {
        return;
      }

      this.visible = true;
      document.body.classList.add("loadingInProgress");
      this.bar.classList.remove("hidden");
    }
  }, {
    key: "percent",
    get: function get() {
      return this._percent;
    },
    set: function set(val) {
      this._indeterminate = isNaN(val);
      this._percent = clamp(val, 0, 100);

      this._updateBar();
    }
  }]);

  return ProgressBar;
}();

exports.ProgressBar = ProgressBar;

function moveToEndOfArray(arr, condition) {
  var moved = [],
      len = arr.length;
  var write = 0;

  for (var read = 0; read < len; ++read) {
    if (condition(arr[read])) {
      moved.push(arr[read]);
    } else {
      arr[write] = arr[read];
      ++write;
    }
  }

  for (var _read = 0; write < len; ++_read, ++write) {
    arr[write] = moved[_read];
  }
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var printWarning = function printWarning() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning = function printWarning() {};

if (true) {
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = assign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (_typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = _typeof(propValue);

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"); // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/react-highlight-selection/lib/Highlighter.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-highlight-selection/lib/Highlighter.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (e) {
  var t = {};

  function r(n) {
    if (t[n]) return t[n].exports;
    var o = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
  }

  return r.m = e, r.c = t, r.d = function (e, t, n) {
    r.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      r.d(n, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return n;
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return r.d(t, "a", t), t;
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.p = "", r(r.s = 2);
}([function (e, t, r) {
  "use strict";

  e.exports = r(3);
}, function (e, t, r) {
  e.exports = r(5)();
}, function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, "default", function () {
    return d;
  });
  var n = r(0),
      o = r.n(n),
      i = r(1),
      u = r.n(i);

  function a(e) {
    return (a = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    })(e);
  }

  function c(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }

  function l(e) {
    return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }

  function f(e, t) {
    return (f = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    })(e, t);
  }

  function s(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }

  var p = {
    customClass: u.a.string,
    selectionHandler: u.a.func
  },
      d = function (e) {
    function t(e) {
      var r, n, o;
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), n = this, (r = !(o = l(t).call(this, e)) || "object" !== a(o) && "function" != typeof o ? s(n) : o).state = {
        text: e.text,
        isDirty: !1,
        selection: "",
        anchorNode: "?",
        focusNode: "?",
        selectionStart: "?",
        selectionEnd: "?",
        first: "",
        middle: "",
        last: ""
      }, r.onMouseUpHandler = r.onMouseUpHandler.bind(s(s(r))), r;
    }

    var r, i, u;
    return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && f(e, t);
    }(t, n["Component"]), r = t, (i = [{
      key: "onMouseUpHandler",
      value: function value(e) {
        e.preventDefault();
        var t = window.getSelection && window.getSelection(),
            r = t.toString(),
            n = t.anchorNode,
            o = t.focusNode,
            i = t.anchorOffset,
            u = t.focusOffset,
            a = n.compareDocumentPosition(o),
            c = !1;
        a === n.DOCUMENT_POSITION_FOLLOWING ? c = !0 : 0 === a && (c = u - i > 0);
        var l = c ? i : u;
        c ? (n.parentNode.getAttribute("data-order") && "middle" === n.parentNode.getAttribute("data-order") && (l += this.state.selectionStart), n.parentNode.getAttribute("data-order") && "last" === n.parentNode.getAttribute("data-order") && (l += this.state.selectionEnd)) : (o.parentNode.getAttribute("data-order") && "middle" === o.parentNode.getAttribute("data-order") && (l += this.state.selectionStart), o.parentNode.getAttribute("data-order") && "last" === o.parentNode.getAttribute("data-order") && (l += this.state.selectionEnd));
        var f = l + r.length,
            s = this.state.text.slice(0, l),
            p = this.state.text.slice(l, f),
            d = this.state.text.slice(f);
        this.setState({
          selection: r,
          anchorNode: n,
          focusNode: o,
          selectionStart: l,
          selectionEnd: f,
          first: s,
          middle: p,
          last: d
        }), this.props.selectionHandler && this.props.selectionHandler({
          selection: r,
          selectionStart: l,
          selectionEnd: f
        });
      }
    }, {
      key: "render",
      value: function value() {
        return this.state.selection ? o.a.createElement("span", {
          onMouseUp: this.onMouseUpHandler
        }, o.a.createElement("span", {
          "data-order": "first"
        }, this.state.first), o.a.createElement("span", {
          "data-order": "middle",
          className: this.props.customClass || "default"
        }, this.state.middle), o.a.createElement("span", {
          "data-order": "last"
        }, this.state.last)) : o.a.createElement("span", {
          onMouseUp: this.onMouseUpHandler
        }, this.state.text);
      }
    }]) && c(r.prototype, i), u && c(r, u), t;
  }();

  d.propTypes = p;
}, function (e, t, r) {
  "use strict";
  /** @license React v16.7.0
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var n = r(4),
      o = "function" == typeof Symbol && Symbol["for"],
      i = o ? Symbol["for"]("react.element") : 60103,
      u = o ? Symbol["for"]("react.portal") : 60106,
      a = o ? Symbol["for"]("react.fragment") : 60107,
      c = o ? Symbol["for"]("react.strict_mode") : 60108,
      l = o ? Symbol["for"]("react.profiler") : 60114,
      f = o ? Symbol["for"]("react.provider") : 60109,
      s = o ? Symbol["for"]("react.context") : 60110,
      p = o ? Symbol["for"]("react.concurrent_mode") : 60111,
      d = o ? Symbol["for"]("react.forward_ref") : 60112,
      y = o ? Symbol["for"]("react.suspense") : 60113,
      b = o ? Symbol["for"]("react.memo") : 60115,
      h = o ? Symbol["for"]("react.lazy") : 60116,
      m = "function" == typeof Symbol && Symbol.iterator;

  function v(e) {
    for (var t = arguments.length - 1, r = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 0; n < t; n++) {
      r += "&args[]=" + encodeURIComponent(arguments[n + 1]);
    }

    !function (e, t, r, n, o, i, u, a) {
      if (!e) {
        if (e = void 0, void 0 === t) e = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
          var c = [r, n, o, i, u, a],
              l = 0;
          (e = Error(t.replace(/%s/g, function () {
            return c[l++];
          }))).name = "Invariant Violation";
        }
        throw e.framesToPop = 1, e;
      }
    }(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", r);
  }

  var g = {
    isMounted: function isMounted() {
      return !1;
    },
    enqueueForceUpdate: function enqueueForceUpdate() {},
    enqueueReplaceState: function enqueueReplaceState() {},
    enqueueSetState: function enqueueSetState() {}
  },
      O = {};

  function _(e, t, r) {
    this.props = e, this.context = t, this.refs = O, this.updater = r || g;
  }

  function S() {}

  function j(e, t, r) {
    this.props = e, this.context = t, this.refs = O, this.updater = r || g;
  }

  _.prototype.isReactComponent = {}, _.prototype.setState = function (e, t) {
    "object" != _typeof(e) && "function" != typeof e && null != e && v("85"), this.updater.enqueueSetState(this, e, t, "setState");
  }, _.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  }, S.prototype = _.prototype;
  var w = j.prototype = new S();
  w.constructor = j, n(w, _.prototype), w.isPureReactComponent = !0;
  var P = {
    current: null,
    currentDispatcher: null
  },
      x = Object.prototype.hasOwnProperty,
      E = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };

  function k(e, t, r) {
    var n = void 0,
        o = {},
        u = null,
        a = null;
    if (null != t) for (n in void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (u = "" + t.key), t) {
      x.call(t, n) && !E.hasOwnProperty(n) && (o[n] = t[n]);
    }
    var c = arguments.length - 2;
    if (1 === c) o.children = r;else if (1 < c) {
      for (var l = Array(c), f = 0; f < c; f++) {
        l[f] = arguments[f + 2];
      }

      o.children = l;
    }
    if (e && e.defaultProps) for (n in c = e.defaultProps) {
      void 0 === o[n] && (o[n] = c[n]);
    }
    return {
      $$typeof: i,
      type: e,
      key: u,
      ref: a,
      props: o,
      _owner: P.current
    };
  }

  function N(e) {
    return "object" == _typeof(e) && null !== e && e.$$typeof === i;
  }

  var C = /\/+/g,
      $ = [];

  function T(e, t, r, n) {
    if ($.length) {
      var o = $.pop();
      return o.result = e, o.keyPrefix = t, o.func = r, o.context = n, o.count = 0, o;
    }

    return {
      result: e,
      keyPrefix: t,
      func: r,
      context: n,
      count: 0
    };
  }

  function R(e) {
    e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > $.length && $.push(e);
  }

  function A(e, t, r) {
    return null == e ? 0 : function e(t, r, n, o) {
      var a = _typeof(t);

      "undefined" !== a && "boolean" !== a || (t = null);
      var c = !1;
      if (null === t) c = !0;else switch (a) {
        case "string":
        case "number":
          c = !0;
          break;

        case "object":
          switch (t.$$typeof) {
            case i:
            case u:
              c = !0;
          }

      }
      if (c) return n(o, t, "" === r ? "." + M(t, 0) : r), 1;
      if (c = 0, r = "" === r ? "." : r + ":", Array.isArray(t)) for (var l = 0; l < t.length; l++) {
        var f = r + M(a = t[l], l);
        c += e(a, f, n, o);
      } else if (f = null === t || "object" != _typeof(t) ? null : "function" == typeof (f = m && t[m] || t["@@iterator"]) ? f : null, "function" == typeof f) for (t = f.call(t), l = 0; !(a = t.next()).done;) {
        c += e(a = a.value, f = r + M(a, l++), n, o);
      } else "object" === a && v("31", "[object Object]" == (n = "" + t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : n, "");
      return c;
    }(e, "", t, r);
  }

  function M(e, t) {
    return "object" == _typeof(e) && null !== e && null != e.key ? function (e) {
      var t = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + ("" + e).replace(/[=:]/g, function (e) {
        return t[e];
      });
    }(e.key) : t.toString(36);
  }

  function U(e, t) {
    e.func.call(e.context, t, e.count++);
  }

  function I(e, t, r) {
    var n = e.result,
        o = e.keyPrefix;
    e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? D(e, n, r, function (e) {
      return e;
    }) : null != e && (N(e) && (e = function (e, t) {
      return {
        $$typeof: i,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
      };
    }(e, o + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(C, "$&/") + "/") + r)), n.push(e));
  }

  function D(e, t, r, n, o) {
    var i = "";
    null != r && (i = ("" + r).replace(C, "$&/") + "/"), A(e, I, t = T(t, i, n, o)), R(t);
  }

  var H = {
    Children: {
      map: function map(e, t, r) {
        if (null == e) return e;
        var n = [];
        return D(e, n, null, t, r), n;
      },
      forEach: function forEach(e, t, r) {
        if (null == e) return e;
        A(e, U, t = T(null, null, t, r)), R(t);
      },
      count: function count(e) {
        return A(e, function () {
          return null;
        }, null);
      },
      toArray: function toArray(e) {
        var t = [];
        return D(e, t, null, function (e) {
          return e;
        }), t;
      },
      only: function only(e) {
        return N(e) || v("143"), e;
      }
    },
    createRef: function createRef() {
      return {
        current: null
      };
    },
    Component: _,
    PureComponent: j,
    createContext: function createContext(e, t) {
      return void 0 === t && (t = null), (e = {
        $$typeof: s,
        _calculateChangedBits: t,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }).Provider = {
        $$typeof: f,
        _context: e
      }, e.Consumer = e;
    },
    forwardRef: function forwardRef(e) {
      return {
        $$typeof: d,
        render: e
      };
    },
    lazy: function lazy(e) {
      return {
        $$typeof: h,
        _ctor: e,
        _status: -1,
        _result: null
      };
    },
    memo: function memo(e, t) {
      return {
        $$typeof: b,
        type: e,
        compare: void 0 === t ? null : t
      };
    },
    Fragment: a,
    StrictMode: c,
    Suspense: y,
    createElement: k,
    cloneElement: function cloneElement(e, t, r) {
      null == e && v("267", e);
      var o = void 0,
          u = n({}, e.props),
          a = e.key,
          c = e.ref,
          l = e._owner;

      if (null != t) {
        void 0 !== t.ref && (c = t.ref, l = P.current), void 0 !== t.key && (a = "" + t.key);
        var f = void 0;

        for (o in e.type && e.type.defaultProps && (f = e.type.defaultProps), t) {
          x.call(t, o) && !E.hasOwnProperty(o) && (u[o] = void 0 === t[o] && void 0 !== f ? f[o] : t[o]);
        }
      }

      if (1 === (o = arguments.length - 2)) u.children = r;else if (1 < o) {
        f = Array(o);

        for (var s = 0; s < o; s++) {
          f[s] = arguments[s + 2];
        }

        u.children = f;
      }
      return {
        $$typeof: i,
        type: e.type,
        key: a,
        ref: c,
        props: u,
        _owner: l
      };
    },
    createFactory: function createFactory(e) {
      var t = k.bind(null, e);
      return t.type = e, t;
    },
    isValidElement: N,
    version: "16.7.0",
    unstable_ConcurrentMode: p,
    unstable_Profiler: l,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
      ReactCurrentOwner: P,
      assign: n
    }
  },
      q = {
    "default": H
  },
      F = q && H || q;
  e.exports = F["default"] || F;
}, function (e, t, r) {
  "use strict";
  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */

  var n = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable;
  e.exports = function () {
    try {
      if (!Object.assign) return !1;
      var e = new String("abc");
      if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;

      for (var t = {}, r = 0; r < 10; r++) {
        t["_" + String.fromCharCode(r)] = r;
      }

      if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
        return t[e];
      }).join("")) return !1;
      var n = {};
      return "abcdefghijklmnopqrst".split("").forEach(function (e) {
        n[e] = e;
      }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("");
    } catch (e) {
      return !1;
    }
  }() ? Object.assign : function (e, t) {
    for (var r, u, a = function (e) {
      if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(e);
    }(e), c = 1; c < arguments.length; c++) {
      for (var l in r = Object(arguments[c])) {
        o.call(r, l) && (a[l] = r[l]);
      }

      if (n) {
        u = n(r);

        for (var f = 0; f < u.length; f++) {
          i.call(r, u[f]) && (a[u[f]] = r[u[f]]);
        }
      }
    }

    return a;
  };
}, function (e, t, r) {
  "use strict";

  var n = r(6);

  function o() {}

  e.exports = function () {
    function e(e, t, r, o, i, u) {
      if (u !== n) {
        var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw a.name = "Invariant Violation", a;
      }
    }

    function t() {
      return e;
    }

    e.isRequired = e;
    var r = {
      array: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t
    };
    return r.checkPropTypes = o, r.PropTypes = r, r;
  };
}, function (e, t, r) {
  "use strict";

  e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
}]);

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (true) {
  (function () {
    'use strict'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol["for"]('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol["for"]('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol["for"]('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol["for"]('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol["for"]('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (_typeof(object) === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}

/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}

/***/ }),

/***/ "./node_modules/react-pdf/dist/esm/Document.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-pdf/dist/esm/Document.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Document; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var make_event_props__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! make-event-props */ "./node_modules/make-event-props/dist/entry.js");
/* harmony import */ var make_event_props__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(make_event_props__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var make_cancellable_promise__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! make-cancellable-promise */ "./node_modules/make-cancellable-promise/dist/index.js");
/* harmony import */ var make_cancellable_promise__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(make_cancellable_promise__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var merge_class_names__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/dist/esm/index.js");
/* harmony import */ var pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! pdfjs-dist/build/pdf */ "./node_modules/pdfjs-dist/build/pdf.js");
/* harmony import */ var pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _DocumentContext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./DocumentContext */ "./node_modules/react-pdf/dist/esm/DocumentContext.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Message */ "./node_modules/react-pdf/dist/esm/Message.js");
/* harmony import */ var _LinkService__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./LinkService */ "./node_modules/react-pdf/dist/esm/LinkService.js");
/* harmony import */ var _PasswordResponses__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./PasswordResponses */ "./node_modules/react-pdf/dist/esm/PasswordResponses.js");
/* harmony import */ var _eventBus__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./eventBus */ "./node_modules/react-pdf/dist/esm/eventBus.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/utils */ "./node_modules/react-pdf/dist/esm/shared/utils.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-pdf/dist/esm/shared/propTypes.js");













function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _createSuper(Derived) {
  return function () {
    var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
/**
 * Loads a PDF document. Passes it to all children.
 */















var PDFDataRangeTransport = pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_17___default.a.PDFDataRangeTransport;

var Document = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Document, _PureComponent);

  var _super = _createSuper(Document);

  function Document() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Document);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      pdf: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "viewer", {
      scrollPageIntoView: function scrollPageIntoView(_ref) {
        var pageNumber = _ref.pageNumber; // Handling jumping to internal links target

        var onItemClick = _this.props.onItemClick; // First, check if custom handling of onItemClick was provided

        if (onItemClick) {
          onItemClick({
            pageNumber: pageNumber
          });
          return;
        } // If not, try to look for target page within the <Document>.


        var page = _this.pages[pageNumber - 1];

        if (page) {
          // Scroll to the page automatically
          page.scrollIntoView();
          return;
        }

        Object(_shared_utils__WEBPACK_IMPORTED_MODULE_23__["warnOnDev"])("Warning: An internal link leading to page ".concat(pageNumber, " was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>."));
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "linkService", new _LinkService__WEBPACK_IMPORTED_MODULE_20__["default"]({
      eventBus: _eventBus__WEBPACK_IMPORTED_MODULE_22__["default"]
    }));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "loadDocument", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
      var source, _this$props, options, onLoadProgress, onPassword, cancellable, pdf;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              source = null;
              _context.prev = 1;
              _context.next = 4;
              return _this.findDocumentSource();

            case 4:
              source = _context.sent;

              _this.onSourceSuccess();

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);

              _this.onSourceError(_context.t0);

            case 11:
              if (source) {
                _context.next = 13;
                break;
              }

              return _context.abrupt("return");

            case 13:
              _this.setState(function (prevState) {
                if (!prevState.pdf) {
                  return null;
                }

                return {
                  pdf: null
                };
              });

              _this$props = _this.props, options = _this$props.options, onLoadProgress = _this$props.onLoadProgress, onPassword = _this$props.onPassword;
              _context.prev = 15; // If another loading is in progress, let's cancel it

              Object(_shared_utils__WEBPACK_IMPORTED_MODULE_23__["cancelRunningTask"])(_this.runningTask);
              _this.loadingTask = pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_17___default.a.getDocument(_objectSpread({}, source, {}, options));
              _this.loadingTask.onPassword = onPassword;

              if (onLoadProgress) {
                _this.loadingTask.onProgress = onLoadProgress;
              }

              cancellable = make_cancellable_promise__WEBPACK_IMPORTED_MODULE_15___default()(_this.loadingTask.promise);
              _this.runningTask = cancellable;
              _context.next = 24;
              return cancellable.promise;

            case 24:
              pdf = _context.sent;

              _this.setState(function (prevState) {
                if (prevState.pdf && prevState.pdf.fingerprint === pdf.fingerprint) {
                  return null;
                }

                return {
                  pdf: pdf
                };
              }, _this.onLoadSuccess);

              _context.next = 31;
              break;

            case 28:
              _context.prev = 28;
              _context.t1 = _context["catch"](15);

              _this.onLoadError(_context.t1);

            case 31:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8], [15, 28]]);
    })));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "setupLinkService", function () {
      _this.linkService.setViewer(_this.viewer);

      var documentInstance = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this);

      Object.defineProperty(_this.linkService, 'externalLinkTarget', {
        get: function get() {
          var externalLinkTarget = documentInstance.props.externalLinkTarget;

          switch (externalLinkTarget) {
            case '_self':
              return 1;

            case '_blank':
              return 2;

            case '_parent':
              return 3;

            case '_top':
              return 4;

            default:
              return 0;
          }
        }
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "onSourceSuccess", function () {
      var onSourceSuccess = _this.props.onSourceSuccess;
      if (onSourceSuccess) onSourceSuccess();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "onSourceError", function (error) {
      Object(_shared_utils__WEBPACK_IMPORTED_MODULE_23__["errorOnDev"])(error);
      var onSourceError = _this.props.onSourceError;
      if (onSourceError) onSourceError(error);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "onLoadSuccess", function () {
      var onLoadSuccess = _this.props.onLoadSuccess;
      var pdf = _this.state.pdf;
      if (onLoadSuccess) onLoadSuccess(pdf);
      _this.pages = new Array(pdf.numPages);

      _this.linkService.setDocument(pdf);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "onLoadError", function (error) {
      _this.setState({
        pdf: false
      });

      Object(_shared_utils__WEBPACK_IMPORTED_MODULE_23__["errorOnDev"])(error);
      var onLoadError = _this.props.onLoadError;
      if (onLoadError) onLoadError(error);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "findDocumentSource", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {
      var file, fileUint8Array, url, otherParams, _fileUint8Array;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              file = _this.props.file;

              if (file) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return", null);

            case 3:
              if (!(typeof file === 'string')) {
                _context2.next = 9;
                break;
              }

              if (!Object(_shared_utils__WEBPACK_IMPORTED_MODULE_23__["isDataURI"])(file)) {
                _context2.next = 7;
                break;
              }

              fileUint8Array = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_23__["dataURItoUint8Array"])(file);
              return _context2.abrupt("return", {
                data: fileUint8Array
              });

            case 7:
              Object(_shared_utils__WEBPACK_IMPORTED_MODULE_23__["displayCORSWarning"])();
              return _context2.abrupt("return", {
                url: file
              });

            case 9:
              if (!(file instanceof PDFDataRangeTransport)) {
                _context2.next = 11;
                break;
              }

              return _context2.abrupt("return", {
                range: file
              });

            case 11:
              if (!Object(_shared_utils__WEBPACK_IMPORTED_MODULE_23__["isArrayBuffer"])(file)) {
                _context2.next = 13;
                break;
              }

              return _context2.abrupt("return", {
                data: file
              });

            case 13:
              if (!_shared_utils__WEBPACK_IMPORTED_MODULE_23__["isBrowser"]) {
                _context2.next = 19;
                break;
              }

              if (!(Object(_shared_utils__WEBPACK_IMPORTED_MODULE_23__["isBlob"])(file) || Object(_shared_utils__WEBPACK_IMPORTED_MODULE_23__["isFile"])(file))) {
                _context2.next = 19;
                break;
              }

              _context2.next = 17;
              return Object(_shared_utils__WEBPACK_IMPORTED_MODULE_23__["loadFromFile"])(file);

            case 17:
              _context2.t0 = _context2.sent;
              return _context2.abrupt("return", {
                data: _context2.t0
              });

            case 19:
              if (!(Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(file) !== 'object')) {
                _context2.next = 21;
                break;
              }

              throw new Error('Invalid parameter in file, need either Uint8Array, string or a parameter object');

            case 21:
              if (!(!file.url && !file.data && !file.range)) {
                _context2.next = 23;
                break;
              }

              throw new Error('Invalid parameter object: need either .data, .range or .url');

            case 23:
              if (!(typeof file.url === 'string')) {
                _context2.next = 29;
                break;
              }

              if (!Object(_shared_utils__WEBPACK_IMPORTED_MODULE_23__["isDataURI"])(file.url)) {
                _context2.next = 28;
                break;
              }

              url = file.url, otherParams = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(file, ["url"]);
              _fileUint8Array = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_23__["dataURItoUint8Array"])(url);
              return _context2.abrupt("return", _objectSpread({
                data: _fileUint8Array
              }, otherParams));

            case 28:
              Object(_shared_utils__WEBPACK_IMPORTED_MODULE_23__["displayCORSWarning"])();

            case 29:
              return _context2.abrupt("return", file);

            case 30:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "registerPage", function (pageIndex, ref) {
      _this.pages[pageIndex] = ref;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "unregisterPage", function (pageIndex) {
      delete _this.pages[pageIndex];
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Document, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadDocument();
      this.setupLinkService();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var file = this.props.file;

      if (file !== prevProps.file) {
        this.loadDocument();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.loadingTask) this.loadingTask.destroy();
      Object(_shared_utils__WEBPACK_IMPORTED_MODULE_23__["cancelRunningTask"])(this.runningTask);
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var children = this.props.children;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_DocumentContext__WEBPACK_IMPORTED_MODULE_18__["default"].Provider, {
        value: this.childContext
      }, children);
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var file = this.props.file;
      var pdf = this.state.pdf;

      if (!file) {
        var noData = this.props.noData;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_19__["default"], {
          type: "no-data"
        }, typeof noData === 'function' ? noData() : noData);
      }

      if (pdf === null) {
        var loading = this.props.loading;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_19__["default"], {
          type: "loading"
        }, typeof loading === 'function' ? loading() : loading);
      }

      if (pdf === false) {
        var error = this.props.error;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_19__["default"], {
          type: "error"
        }, typeof error === 'function' ? error() : error);
      }

      return this.renderChildren();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          inputRef = _this$props2.inputRef;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: Object(merge_class_names__WEBPACK_IMPORTED_MODULE_16__["default"])('react-pdf__Document', className),
        ref: inputRef
      }, this.eventProps), this.renderContent());
    }
  }, {
    key: "childContext",
    get: function get() {
      var linkService = this.linkService,
          registerPage = this.registerPage,
          unregisterPage = this.unregisterPage;
      var _this$props3 = this.props,
          renderMode = _this$props3.renderMode,
          rotate = _this$props3.rotate;
      var pdf = this.state.pdf;
      return {
        linkService: linkService,
        pdf: pdf,
        registerPage: registerPage,
        renderMode: renderMode,
        rotate: rotate,
        unregisterPage: unregisterPage
      };
    }
  }, {
    key: "eventProps",
    get: function get() {
      var _this2 = this; // eslint-disable-next-line react/destructuring-assignment


      return make_event_props__WEBPACK_IMPORTED_MODULE_14___default()(this.props, function () {
        return _this2.state.pdf;
      });
    }
    /**
     * Called when a document source is resolved correctly
     */

  }]);

  return Document;
}(react__WEBPACK_IMPORTED_MODULE_12__["PureComponent"]);


Document.defaultProps = {
  error: 'Failed to load PDF file.',
  loading: 'Loading PDF…',
  noData: 'No PDF file specified.',
  onPassword: function onPassword(callback, reason) {
    switch (reason) {
      case _PasswordResponses__WEBPACK_IMPORTED_MODULE_21__["default"].NEED_PASSWORD:
        {
          // eslint-disable-next-line no-alert
          var password = prompt('Enter the password to open this PDF file.');
          callback(password);
          break;
        }

      case _PasswordResponses__WEBPACK_IMPORTED_MODULE_21__["default"].INCORRECT_PASSWORD:
        {
          // eslint-disable-next-line no-alert
          var _password = prompt('Invalid password. Please try again.');

          callback(_password);
          break;
        }

      default:
    }
  }
};
var isFunctionOrNode = prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.node]);
Document.propTypes = _objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_24__["eventProps"], {
  children: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.node,
  className: _shared_propTypes__WEBPACK_IMPORTED_MODULE_24__["isClassName"],
  error: isFunctionOrNode,
  file: _shared_utils__WEBPACK_IMPORTED_MODULE_23__["isFile"],
  inputRef: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func,
  loading: isFunctionOrNode,
  noData: isFunctionOrNode,
  onItemClick: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func,
  onLoadError: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func,
  onLoadProgress: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func,
  onLoadSuccess: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func,
  onPassword: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func,
  onSourceError: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func,
  onSourceSuccess: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func,
  rotate: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.number
});

/***/ }),

/***/ "./node_modules/react-pdf/dist/esm/DocumentContext.js":
/*!************************************************************!*\
  !*** ./node_modules/react-pdf/dist/esm/DocumentContext.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null));

/***/ }),

/***/ "./node_modules/react-pdf/dist/esm/LinkService.js":
/*!********************************************************!*\
  !*** ./node_modules/react-pdf/dist/esm/LinkService.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pdfjs_dist_lib_web_pdf_link_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pdfjs-dist/lib/web/pdf_link_service */ "./node_modules/pdfjs-dist/lib/web/pdf_link_service.js");
/* harmony import */ var pdfjs_dist_lib_web_pdf_link_service__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist_lib_web_pdf_link_service__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (pdfjs_dist_lib_web_pdf_link_service__WEBPACK_IMPORTED_MODULE_0__["PDFLinkService"]);

/***/ }),

/***/ "./node_modules/react-pdf/dist/esm/Message.js":
/*!****************************************************!*\
  !*** ./node_modules/react-pdf/dist/esm/Message.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Message; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function Message(_ref) {
  var children = _ref.children,
      type = _ref.type;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "react-pdf__message react-pdf__message--".concat(type)
  }, children);
}
Message.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['error', 'loading', 'no-data']).isRequired
};

/***/ }),

/***/ "./node_modules/react-pdf/dist/esm/Outline.js":
/*!****************************************************!*\
  !*** ./node_modules/react-pdf/dist/esm/Outline.js ***!
  \****************************************************/
/*! exports provided: OutlineInternal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlineInternal", function() { return OutlineInternal; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var make_cancellable_promise__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! make-cancellable-promise */ "./node_modules/make-cancellable-promise/dist/index.js");
/* harmony import */ var make_cancellable_promise__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(make_cancellable_promise__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var make_event_props__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! make-event-props */ "./node_modules/make-event-props/dist/entry.js");
/* harmony import */ var make_event_props__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(make_event_props__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var merge_class_names__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/dist/esm/index.js");
/* harmony import */ var _DocumentContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./DocumentContext */ "./node_modules/react-pdf/dist/esm/DocumentContext.js");
/* harmony import */ var _OutlineContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./OutlineContext */ "./node_modules/react-pdf/dist/esm/OutlineContext.js");
/* harmony import */ var _OutlineItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./OutlineItem */ "./node_modules/react-pdf/dist/esm/OutlineItem.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/utils */ "./node_modules/react-pdf/dist/esm/shared/utils.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-pdf/dist/esm/shared/propTypes.js");











function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _createSuper(Derived) {
  return function () {
    var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}











var OutlineInternal = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(OutlineInternal, _PureComponent);

  var _super = _createSuper(OutlineInternal);

  function OutlineInternal() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, OutlineInternal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      outline: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "loadOutline", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var pdf, cancellable, outline;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pdf = _this.props.pdf;

              _this.setState(function (prevState) {
                if (!prevState.outline) {
                  return null;
                }

                return {
                  outline: null
                };
              });

              _context.prev = 2;
              cancellable = make_cancellable_promise__WEBPACK_IMPORTED_MODULE_12___default()(pdf.getOutline());
              _this.runningTask = cancellable;
              _context.next = 7;
              return cancellable.promise;

            case 7:
              outline = _context.sent;

              _this.setState({
                outline: outline
              }, _this.onLoadSuccess);

              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);

              _this.onLoadError(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 11]]);
    })));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onLoadSuccess", function () {
      var onLoadSuccess = _this.props.onLoadSuccess;
      var outline = _this.state.outline;
      if (onLoadSuccess) onLoadSuccess(outline);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onLoadError", function (error) {
      _this.setState({
        outline: false
      });

      Object(_shared_utils__WEBPACK_IMPORTED_MODULE_18__["errorOnDev"])(error);
      var onLoadError = _this.props.onLoadError;
      if (onLoadError) onLoadError(error);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onItemClick", function (_ref2) {
      var pageIndex = _ref2.pageIndex,
          pageNumber = _ref2.pageNumber;
      var onItemClick = _this.props.onItemClick;

      if (onItemClick) {
        onItemClick({
          pageIndex: pageIndex,
          pageNumber: pageNumber
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(OutlineInternal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var pdf = this.props.pdf;

      if (!pdf) {
        throw new Error('Attempted to load an outline, but no document was specified.');
      }

      this.loadOutline();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var pdf = this.props.pdf;

      if (prevProps.pdf && pdf !== prevProps.pdf) {
        this.loadOutline();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Object(_shared_utils__WEBPACK_IMPORTED_MODULE_18__["cancelRunningTask"])(this.runningTask);
    }
  }, {
    key: "renderOutline",
    value: function renderOutline() {
      var outline = this.state.outline;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", null, outline.map(function (item, itemIndex) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_OutlineItem__WEBPACK_IMPORTED_MODULE_17__["default"], {
          key: typeof item.destination === 'string' ? item.destination : itemIndex,
          item: item
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var pdf = this.props.pdf;
      var outline = this.state.outline;

      if (!pdf || !outline) {
        return null;
      }

      var _this$props = this.props,
          className = _this$props.className,
          inputRef = _this$props.inputRef;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: Object(merge_class_names__WEBPACK_IMPORTED_MODULE_14__["default"])('react-pdf__Outline', className),
        ref: inputRef
      }, this.eventProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_OutlineContext__WEBPACK_IMPORTED_MODULE_16__["default"].Provider, {
        value: this.childContext
      }, this.renderOutline()));
    }
  }, {
    key: "childContext",
    get: function get() {
      return {
        onClick: this.onItemClick
      };
    }
  }, {
    key: "eventProps",
    get: function get() {
      var _this2 = this; // eslint-disable-next-line react/destructuring-assignment


      return make_event_props__WEBPACK_IMPORTED_MODULE_13___default()(this.props, function () {
        return _this2.state.outline;
      });
    }
    /**
     * Called when an outline is read successfully
     */

  }]);

  return OutlineInternal;
}(react__WEBPACK_IMPORTED_MODULE_10__["PureComponent"]);
OutlineInternal.propTypes = _objectSpread({
  className: _shared_propTypes__WEBPACK_IMPORTED_MODULE_19__["isClassName"],
  inputRef: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onItemClick: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onLoadError: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onLoadSuccess: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  pdf: _shared_propTypes__WEBPACK_IMPORTED_MODULE_19__["isPdf"]
}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_19__["eventProps"]);

function Outline(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_DocumentContext__WEBPACK_IMPORTED_MODULE_15__["default"].Consumer, null, function (context) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(OutlineInternal, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: ref
    }, context, props));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.forwardRef(Outline));

/***/ }),

/***/ "./node_modules/react-pdf/dist/esm/OutlineContext.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-pdf/dist/esm/OutlineContext.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null));

/***/ }),

/***/ "./node_modules/react-pdf/dist/esm/OutlineItem.js":
/*!********************************************************!*\
  !*** ./node_modules/react-pdf/dist/esm/OutlineItem.js ***!
  \********************************************************/
/*! exports provided: OutlineItemInternal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlineItemInternal", function() { return OutlineItemInternal; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _DocumentContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DocumentContext */ "./node_modules/react-pdf/dist/esm/DocumentContext.js");
/* harmony import */ var _OutlineContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./OutlineContext */ "./node_modules/react-pdf/dist/esm/OutlineContext.js");
/* harmony import */ var _Ref__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Ref */ "./node_modules/react-pdf/dist/esm/Ref.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/utils */ "./node_modules/react-pdf/dist/esm/shared/utils.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-pdf/dist/esm/shared/propTypes.js");













function _createSuper(Derived) {
  return function () {
    var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}








var OutlineItemInternal = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(OutlineItemInternal, _PureComponent);

  var _super = _createSuper(OutlineItemInternal);

  function OutlineItemInternal() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, OutlineItemInternal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "getDestination", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
      var _this$props, item, pdf;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, item = _this$props.item, pdf = _this$props.pdf;

              if (Object(_shared_utils__WEBPACK_IMPORTED_MODULE_17__["isDefined"])(_this.destination)) {
                _context.next = 9;
                break;
              }

              if (!(typeof item.dest === 'string')) {
                _context.next = 8;
                break;
              }

              _context.next = 5;
              return pdf.getDestination(item.dest);

            case 5:
              _this.destination = _context.sent;
              _context.next = 9;
              break;

            case 8:
              _this.destination = item.dest;

            case 9:
              return _context.abrupt("return", _this.destination);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "getPageIndex", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {
      var pdf, destination, _destination, ref;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              pdf = _this.props.pdf;

              if (Object(_shared_utils__WEBPACK_IMPORTED_MODULE_17__["isDefined"])(_this.pageIndex)) {
                _context2.next = 10;
                break;
              }

              _context2.next = 4;
              return _this.getDestination();

            case 4:
              destination = _context2.sent;

              if (!destination) {
                _context2.next = 10;
                break;
              }

              _destination = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(destination, 1), ref = _destination[0];
              _context2.next = 9;
              return pdf.getPageIndex(new _Ref__WEBPACK_IMPORTED_MODULE_16__["default"](ref));

            case 9:
              _this.pageIndex = _context2.sent;

            case 10:
              return _context2.abrupt("return", _this.pageIndex);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "getPageNumber", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (Object(_shared_utils__WEBPACK_IMPORTED_MODULE_17__["isDefined"])(_this.pageNumber)) {
                _context3.next = 5;
                break;
              }

              _context3.next = 3;
              return _this.getPageIndex();

            case 3:
              _context3.t0 = _context3.sent;
              _this.pageNumber = _context3.t0 + 1;

            case 5:
              return _context3.abrupt("return", _this.pageNumber);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "onClick", /*#__PURE__*/function () {
      var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4(event) {
        var onClick, pageIndex, pageNumber;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                onClick = _this.props.onClick;
                event.preventDefault();
                _context4.next = 4;
                return _this.getPageIndex();

              case 4:
                pageIndex = _context4.sent;
                _context4.next = 7;
                return _this.getPageNumber();

              case 7:
                pageNumber = _context4.sent;

                if (onClick) {
                  onClick({
                    pageIndex: pageIndex,
                    pageNumber: pageNumber
                  });
                }

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x) {
        return _ref4.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(OutlineItemInternal, [{
    key: "renderSubitems",
    value: function renderSubitems() {
      var _this$props2 = this.props,
          item = _this$props2.item,
          otherProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props2, ["item"]);

      if (!item.items || !item.items.length) {
        return null;
      }

      var subitems = item.items;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("ul", null, subitems.map(function (subitem, subitemIndex) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(OutlineItemInternal, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: typeof subitem.destination === 'string' ? subitem.destination : subitemIndex,
          item: subitem
        }, otherProps));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var item = this.props.item;
      /* eslint-disable jsx-a11y/anchor-is-valid */

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
        href: "#",
        onClick: this.onClick
      }, item.title), this.renderSubitems());
    }
  }]);

  return OutlineItemInternal;
}(react__WEBPACK_IMPORTED_MODULE_12__["PureComponent"]);
var isDestination = prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.any)]);
OutlineItemInternal.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.shape({
    dest: isDestination,
    items: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.shape({
      dest: isDestination,
      title: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string
    })),
    title: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.string
  }).isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func,
  pdf: _shared_propTypes__WEBPACK_IMPORTED_MODULE_18__["isPdf"].isRequired
};

var OutlineItem = function OutlineItem(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_DocumentContext__WEBPACK_IMPORTED_MODULE_14__["default"].Consumer, null, function (documentContext) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_OutlineContext__WEBPACK_IMPORTED_MODULE_15__["default"].Consumer, null, function (outlineContext) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(OutlineItemInternal, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, documentContext, outlineContext, props));
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (OutlineItem);

/***/ }),

/***/ "./node_modules/react-pdf/dist/esm/Page.js":
/*!*************************************************!*\
  !*** ./node_modules/react-pdf/dist/esm/Page.js ***!
  \*************************************************/
/*! exports provided: PageInternal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageInternal", function() { return PageInternal; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var make_cancellable_promise__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! make-cancellable-promise */ "./node_modules/make-cancellable-promise/dist/index.js");
/* harmony import */ var make_cancellable_promise__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(make_cancellable_promise__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var make_event_props__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! make-event-props */ "./node_modules/make-event-props/dist/entry.js");
/* harmony import */ var make_event_props__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(make_event_props__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var merge_class_names__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/dist/esm/index.js");
/* harmony import */ var _DocumentContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./DocumentContext */ "./node_modules/react-pdf/dist/esm/DocumentContext.js");
/* harmony import */ var _PageContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./PageContext */ "./node_modules/react-pdf/dist/esm/PageContext.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Message */ "./node_modules/react-pdf/dist/esm/Message.js");
/* harmony import */ var _Page_PageCanvas__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Page/PageCanvas */ "./node_modules/react-pdf/dist/esm/Page/PageCanvas.js");
/* harmony import */ var _Page_PageSVG__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Page/PageSVG */ "./node_modules/react-pdf/dist/esm/Page/PageSVG.js");
/* harmony import */ var _Page_TextLayer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Page/TextLayer */ "./node_modules/react-pdf/dist/esm/Page/TextLayer.js");
/* harmony import */ var _Page_AnnotationLayer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Page/AnnotationLayer */ "./node_modules/react-pdf/dist/esm/Page/AnnotationLayer.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/utils */ "./node_modules/react-pdf/dist/esm/shared/utils.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-pdf/dist/esm/shared/propTypes.js");











function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _createSuper(Derived) {
  return function () {
    var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}















var defaultScale = 1.0;
var PageInternal = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(PageInternal, _PureComponent);

  var _super = _createSuper(PageInternal);

  function PageInternal() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, PageInternal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      page: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onLoadSuccess", function () {
      var _this$props = _this.props,
          onLoadSuccess = _this$props.onLoadSuccess,
          registerPage = _this$props.registerPage;
      var page = _this.state.page;
      if (onLoadSuccess) onLoadSuccess(Object(_shared_utils__WEBPACK_IMPORTED_MODULE_22__["makePageCallback"])(page, _this.scale));
      if (registerPage) registerPage(_this.pageIndex, _this.ref);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onLoadError", function (error) {
      Object(_shared_utils__WEBPACK_IMPORTED_MODULE_22__["errorOnDev"])(error);
      var onLoadError = _this.props.onLoadError;
      if (onLoadError) onLoadError(error);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "loadPage", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var pdf, pageNumber, cancellable, page;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pdf = _this.props.pdf;
              pageNumber = _this.getPageNumber();

              if (pageNumber) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              _this.setState(function (prevState) {
                if (!prevState.page) {
                  return null;
                }

                return {
                  page: null
                };
              });

              _context.prev = 5;
              cancellable = make_cancellable_promise__WEBPACK_IMPORTED_MODULE_12___default()(pdf.getPage(pageNumber));
              _this.runningTask = cancellable;
              _context.next = 10;
              return cancellable.promise;

            case 10:
              page = _context.sent;

              _this.setState({
                page: page
              }, _this.onLoadSuccess);

              _context.next = 18;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](5);

              _this.setState({
                page: false
              });

              _this.onLoadError(_context.t0);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 14]]);
    })));

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(PageInternal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var pdf = this.props.pdf;

      if (!pdf) {
        throw new Error('Attempted to load a page, but no document was specified.');
      }

      this.loadPage();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var pdf = this.props.pdf;

      if (prevProps.pdf && pdf !== prevProps.pdf || this.getPageNumber() !== this.getPageNumber(prevProps)) {
        var unregisterPage = this.props.unregisterPage;
        if (unregisterPage) unregisterPage(this.getPageIndex(prevProps));
        this.loadPage();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var unregisterPage = this.props.unregisterPage;
      if (unregisterPage) unregisterPage(this.pageIndex);
      Object(_shared_utils__WEBPACK_IMPORTED_MODULE_22__["cancelRunningTask"])(this.runningTask);
    }
  }, {
    key: "getPageIndex",
    value: function getPageIndex() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      if (Object(_shared_utils__WEBPACK_IMPORTED_MODULE_22__["isProvided"])(props.pageNumber)) {
        return props.pageNumber - 1;
      }

      if (Object(_shared_utils__WEBPACK_IMPORTED_MODULE_22__["isProvided"])(props.pageIndex)) {
        return props.pageIndex;
      }

      return null;
    }
  }, {
    key: "getPageNumber",
    value: function getPageNumber() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      if (Object(_shared_utils__WEBPACK_IMPORTED_MODULE_22__["isProvided"])(props.pageNumber)) {
        return props.pageNumber;
      }

      if (Object(_shared_utils__WEBPACK_IMPORTED_MODULE_22__["isProvided"])(props.pageIndex)) {
        return props.pageIndex + 1;
      }

      return null;
    }
  }, {
    key: "renderMainLayer",
    value: function renderMainLayer() {
      var renderMode = this.props.renderMode;

      switch (renderMode) {
        case 'none':
          return null;

        case 'svg':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Page_PageSVG__WEBPACK_IMPORTED_MODULE_19__["default"], {
            key: "".concat(this.pageKeyNoScale, "_svg")
          });

        case 'canvas':
        default:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Page_PageCanvas__WEBPACK_IMPORTED_MODULE_18__["default"], {
            key: "".concat(this.pageKey, "_canvas")
          });
      }
    }
  }, {
    key: "renderTextLayer",
    value: function renderTextLayer() {
      var renderTextLayer = this.props.renderTextLayer;

      if (!renderTextLayer) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Page_TextLayer__WEBPACK_IMPORTED_MODULE_20__["default"], {
        key: "".concat(this.pageKey, "_text")
      });
    }
  }, {
    key: "renderAnnotationLayer",
    value: function renderAnnotationLayer() {
      var renderAnnotationLayer = this.props.renderAnnotationLayer;

      if (!renderAnnotationLayer) {
        return null;
      }
      /**
       * As of now, PDF.js 2.0.943 returns warnings on unimplemented annotations in SVG mode.
       * Therefore, as a fallback, we render "traditional" AnnotationLayer component.
       */


      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Page_AnnotationLayer__WEBPACK_IMPORTED_MODULE_21__["default"], {
        key: "".concat(this.pageKey, "_annotations")
      });
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var children = this.props.children;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_PageContext__WEBPACK_IMPORTED_MODULE_16__["default"].Provider, {
        value: this.childContext
      }, this.renderMainLayer(), this.renderTextLayer(), this.renderAnnotationLayer(), children);
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var pageNumber = this.pageNumber;
      var pdf = this.props.pdf;
      var page = this.state.page;

      if (!pageNumber) {
        var noData = this.props.noData;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_17__["default"], {
          type: "no-data"
        }, typeof noData === 'function' ? noData() : noData);
      }

      if (pdf === null || page === null) {
        var loading = this.props.loading;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_17__["default"], {
          type: "loading"
        }, typeof loading === 'function' ? loading() : loading);
      }

      if (pdf === false || page === false) {
        var error = this.props.error;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_17__["default"], {
          type: "error"
        }, typeof error === 'function' ? error() : error);
      }

      return this.renderChildren();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var pageNumber = this.pageNumber;
      var className = this.props.className;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: Object(merge_class_names__WEBPACK_IMPORTED_MODULE_14__["default"])('react-pdf__Page', className),
        "data-page-number": pageNumber,
        ref: function ref(_ref2) {
          var inputRef = _this2.props.inputRef;

          if (inputRef) {
            inputRef(_ref2);
          }

          _this2.ref = _ref2;
        },
        style: {
          position: 'relative'
        }
      }, this.eventProps), this.renderContent());
    }
  }, {
    key: "childContext",
    get: function get() {
      var page = this.state.page;

      if (!page) {
        return {};
      }

      var _this$props2 = this.props,
          customTextRenderer = _this$props2.customTextRenderer,
          onGetAnnotationsError = _this$props2.onGetAnnotationsError,
          onGetAnnotationsSuccess = _this$props2.onGetAnnotationsSuccess,
          onGetTextError = _this$props2.onGetTextError,
          onGetTextSuccess = _this$props2.onGetTextSuccess,
          onRenderAnnotationLayerError = _this$props2.onRenderAnnotationLayerError,
          onRenderAnnotationLayerSuccess = _this$props2.onRenderAnnotationLayerSuccess,
          onRenderError = _this$props2.onRenderError,
          onRenderSuccess = _this$props2.onRenderSuccess,
          renderInteractiveForms = _this$props2.renderInteractiveForms;
      return {
        customTextRenderer: customTextRenderer,
        onGetAnnotationsError: onGetAnnotationsError,
        onGetAnnotationsSuccess: onGetAnnotationsSuccess,
        onGetTextError: onGetTextError,
        onGetTextSuccess: onGetTextSuccess,
        onRenderAnnotationLayerError: onRenderAnnotationLayerError,
        onRenderAnnotationLayerSuccess: onRenderAnnotationLayerSuccess,
        onRenderError: onRenderError,
        onRenderSuccess: onRenderSuccess,
        page: page,
        renderInteractiveForms: renderInteractiveForms,
        rotate: this.rotate,
        scale: this.scale
      };
    }
    /**
     * Called when a page is loaded successfully
     */

  }, {
    key: "pageIndex",
    get: function get() {
      return this.getPageIndex();
    }
  }, {
    key: "pageNumber",
    get: function get() {
      return this.getPageNumber();
    }
  }, {
    key: "rotate",
    get: function get() {
      var rotate = this.props.rotate;

      if (Object(_shared_utils__WEBPACK_IMPORTED_MODULE_22__["isProvided"])(rotate)) {
        return rotate;
      }

      var page = this.state.page;

      if (!page) {
        return null;
      }

      return page.rotate;
    }
  }, {
    key: "scale",
    get: function get() {
      var page = this.state.page;

      if (!page) {
        return null;
      }

      var _this$props3 = this.props,
          scale = _this$props3.scale,
          width = _this$props3.width,
          height = _this$props3.height;
      var rotate = this.rotate; // Be default, we'll render page at 100% * scale width.

      var pageScale = 1; // Passing scale explicitly null would cause the page not to render

      var scaleWithDefault = scale === null ? defaultScale : scale; // If width/height is defined, calculate the scale of the page so it could be of desired width.

      if (width || height) {
        var viewport = page.getViewport({
          scale: 1,
          rotation: rotate
        });
        pageScale = width ? width / viewport.width : height / viewport.height;
      }

      return scaleWithDefault * pageScale;
    }
  }, {
    key: "eventProps",
    get: function get() {
      var _this3 = this;

      return make_event_props__WEBPACK_IMPORTED_MODULE_13___default()(this.props, function () {
        var page = _this3.state.page;

        if (!page) {
          return page;
        }

        return Object(_shared_utils__WEBPACK_IMPORTED_MODULE_22__["makePageCallback"])(page, _this3.scale);
      });
    }
  }, {
    key: "pageKey",
    get: function get() {
      var page = this.state.page;
      return "".concat(page.pageIndex, "@").concat(this.scale, "/").concat(this.rotate);
    }
  }, {
    key: "pageKeyNoScale",
    get: function get() {
      var page = this.state.page;
      return "".concat(page.pageIndex, "/").concat(this.rotate);
    }
  }]);

  return PageInternal;
}(react__WEBPACK_IMPORTED_MODULE_10__["PureComponent"]);
PageInternal.defaultProps = {
  error: 'Failed to load the page.',
  loading: 'Loading page…',
  noData: 'No page specified.',
  renderAnnotationLayer: true,
  renderInteractiveForms: false,
  renderMode: 'canvas',
  renderTextLayer: true,
  scale: defaultScale
};
var isFunctionOrNode = prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.node]);
PageInternal.propTypes = _objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_23__["eventProps"], {
  children: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.node,
  className: _shared_propTypes__WEBPACK_IMPORTED_MODULE_23__["isClassName"],
  customTextRenderer: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  error: isFunctionOrNode,
  height: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  inputRef: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  loading: isFunctionOrNode,
  noData: isFunctionOrNode,
  onGetTextError: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onGetTextSuccess: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onLoadError: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onLoadSuccess: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onRenderError: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onRenderSuccess: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  pageIndex: _shared_propTypes__WEBPACK_IMPORTED_MODULE_23__["isPageIndex"],
  pageNumber: _shared_propTypes__WEBPACK_IMPORTED_MODULE_23__["isPageNumber"],
  pdf: _shared_propTypes__WEBPACK_IMPORTED_MODULE_23__["isPdf"],
  registerPage: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  renderAnnotationLayer: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  renderInteractiveForms: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  renderMode: _shared_propTypes__WEBPACK_IMPORTED_MODULE_23__["isRenderMode"],
  renderTextLayer: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  rotate: _shared_propTypes__WEBPACK_IMPORTED_MODULE_23__["isRotate"],
  scale: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  unregisterPage: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  width: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number
}); // forwardRef render functions do not support propTypes

/* eslint-disable react/prop-types */

function Page(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_DocumentContext__WEBPACK_IMPORTED_MODULE_15__["default"].Consumer, null, function (context) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(PageInternal, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: ref
    }, context, props));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.forwardRef(Page));

/***/ }),

/***/ "./node_modules/react-pdf/dist/esm/Page/AnnotationLayer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-pdf/dist/esm/Page/AnnotationLayer.js ***!
  \*****************************************************************/
/*! exports provided: AnnotationLayerInternal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnotationLayerInternal", function() { return AnnotationLayerInternal; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pdfjs-dist/build/pdf */ "./node_modules/pdfjs-dist/build/pdf.js");
/* harmony import */ var pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var make_cancellable_promise__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! make-cancellable-promise */ "./node_modules/make-cancellable-promise/dist/index.js");
/* harmony import */ var make_cancellable_promise__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(make_cancellable_promise__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _DocumentContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../DocumentContext */ "./node_modules/react-pdf/dist/esm/DocumentContext.js");
/* harmony import */ var _PageContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../PageContext */ "./node_modules/react-pdf/dist/esm/PageContext.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/utils */ "./node_modules/react-pdf/dist/esm/shared/utils.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-pdf/dist/esm/shared/propTypes.js");











function _createSuper(Derived) {
  return function () {
    var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}









var AnnotationLayerInternal = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AnnotationLayerInternal, _PureComponent);

  var _super = _createSuper(AnnotationLayerInternal);

  function AnnotationLayerInternal() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AnnotationLayerInternal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      annotations: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "loadAnnotations", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var page, cancellable, annotations;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              page = _this.props.page;
              _context.prev = 1;
              cancellable = make_cancellable_promise__WEBPACK_IMPORTED_MODULE_13___default()(page.getAnnotations());
              _this.runningTask = cancellable;
              _context.next = 6;
              return cancellable.promise;

            case 6:
              annotations = _context.sent;

              _this.setState({
                annotations: annotations
              }, _this.onLoadSuccess);

              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);

              _this.onLoadError(_context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10]]);
    })));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onLoadSuccess", function () {
      var onGetAnnotationsSuccess = _this.props.onGetAnnotationsSuccess;
      var annotations = _this.state.annotations;
      if (onGetAnnotationsSuccess) onGetAnnotationsSuccess(annotations);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onLoadError", function (error) {
      _this.setState({
        annotations: false
      });

      Object(_shared_utils__WEBPACK_IMPORTED_MODULE_16__["errorOnDev"])(error);
      var onGetAnnotationsError = _this.props.onGetAnnotationsError;
      if (onGetAnnotationsError) onGetAnnotationsError(error);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onRenderSuccess", function () {
      var onRenderAnnotationLayerSuccess = _this.props.onRenderAnnotationLayerSuccess;
      if (onRenderAnnotationLayerSuccess) onRenderAnnotationLayerSuccess();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onRenderError", function (error) {
      Object(_shared_utils__WEBPACK_IMPORTED_MODULE_16__["errorOnDev"])(error);
      var onRenderAnnotationLayerError = _this.props.onRenderAnnotationLayerError;
      if (onRenderAnnotationLayerError) onRenderAnnotationLayerError(error);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AnnotationLayerInternal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var page = this.props.page;

      if (!page) {
        throw new Error('Attempted to load page annotations, but no page was specified.');
      }

      this.loadAnnotations();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          page = _this$props.page,
          renderInteractiveForms = _this$props.renderInteractiveForms;

      if (prevProps.page && page !== prevProps.page || renderInteractiveForms !== prevProps.renderInteractiveForms) {
        this.loadAnnotations();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Object(_shared_utils__WEBPACK_IMPORTED_MODULE_16__["cancelRunningTask"])(this.runningTask);
    }
  }, {
    key: "renderAnnotationLayer",
    value: function renderAnnotationLayer() {
      var annotations = this.state.annotations;

      if (!annotations) {
        return;
      }

      var _this$props2 = this.props,
          linkService = _this$props2.linkService,
          page = _this$props2.page,
          renderInteractiveForms = _this$props2.renderInteractiveForms;
      var viewport = this.viewport.clone({
        dontFlip: true
      });
      var parameters = {
        annotations: annotations,
        div: this.annotationLayer,
        linkService: linkService,
        page: page,
        renderInteractiveForms: renderInteractiveForms,
        viewport: viewport
      };
      this.annotationLayer.innerHTML = '';

      try {
        pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_12___default.a.AnnotationLayer.render(parameters);
        this.onRenderSuccess();
      } catch (error) {
        this.onRenderError(error);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "react-pdf__Page__annotations annotationLayer",
        ref: function ref(_ref2) {
          _this2.annotationLayer = _ref2;
        }
      }, this.renderAnnotationLayer());
    }
  }, {
    key: "viewport",
    get: function get() {
      var _this$props3 = this.props,
          page = _this$props3.page,
          rotate = _this$props3.rotate,
          scale = _this$props3.scale;
      return page.getViewport({
        scale: scale,
        rotation: rotate
      });
    }
  }]);

  return AnnotationLayerInternal;
}(react__WEBPACK_IMPORTED_MODULE_10__["PureComponent"]);
AnnotationLayerInternal.propTypes = {
  linkService: _shared_propTypes__WEBPACK_IMPORTED_MODULE_17__["isLinkService"].isRequired,
  onGetAnnotationsError: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onGetAnnotationsSuccess: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onRenderAnnotationLayerError: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onRenderAnnotationLayerSuccess: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  page: _shared_propTypes__WEBPACK_IMPORTED_MODULE_17__["isPage"],
  renderInteractiveForms: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
  rotate: _shared_propTypes__WEBPACK_IMPORTED_MODULE_17__["isRotate"],
  scale: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number
};

var AnnotationLayer = function AnnotationLayer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_DocumentContext__WEBPACK_IMPORTED_MODULE_14__["default"].Consumer, null, function (documentContext) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_PageContext__WEBPACK_IMPORTED_MODULE_15__["default"].Consumer, null, function (pageContext) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(AnnotationLayerInternal, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, documentContext, pageContext, props));
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AnnotationLayer);

/***/ }),

/***/ "./node_modules/react-pdf/dist/esm/Page/PageCanvas.js":
/*!************************************************************!*\
  !*** ./node_modules/react-pdf/dist/esm/Page/PageCanvas.js ***!
  \************************************************************/
/*! exports provided: PageCanvasInternal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCanvasInternal", function() { return PageCanvasInternal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageCanvas; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _PageContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../PageContext */ "./node_modules/react-pdf/dist/esm/PageContext.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/utils */ "./node_modules/react-pdf/dist/esm/shared/utils.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-pdf/dist/esm/shared/propTypes.js");









function _createSuper(Derived) {
  return function () {
    var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}






var PageCanvasInternal = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PageCanvasInternal, _PureComponent);

  var _super = _createSuper(PageCanvasInternal);

  function PageCanvasInternal() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PageCanvasInternal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "onRenderSuccess", function () {
      _this.renderer = null;
      var _this$props = _this.props,
          onRenderSuccess = _this$props.onRenderSuccess,
          page = _this$props.page,
          scale = _this$props.scale;
      if (onRenderSuccess) onRenderSuccess(Object(_shared_utils__WEBPACK_IMPORTED_MODULE_11__["makePageCallback"])(page, scale));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "onRenderError", function (error) {
      if (Object(_shared_utils__WEBPACK_IMPORTED_MODULE_11__["isCancelException"])(error)) {
        return;
      }

      Object(_shared_utils__WEBPACK_IMPORTED_MODULE_11__["errorOnDev"])(error);
      var onRenderError = _this.props.onRenderError;
      if (onRenderError) onRenderError(error);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "drawPageOnCanvas", function () {
      var _assertThisInitialize = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
          canvas = _assertThisInitialize.canvasLayer;

      if (!canvas) {
        return null;
      }

      var _assertThisInitialize2 = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
          renderViewport = _assertThisInitialize2.renderViewport,
          viewport = _assertThisInitialize2.viewport;

      var _this$props2 = _this.props,
          page = _this$props2.page,
          renderInteractiveForms = _this$props2.renderInteractiveForms;
      canvas.width = renderViewport.width;
      canvas.height = renderViewport.height;
      canvas.style.width = "".concat(Math.floor(viewport.width), "px");
      canvas.style.height = "".concat(Math.floor(viewport.height), "px");
      var renderContext = {
        get canvasContext() {
          return canvas.getContext('2d');
        },

        viewport: renderViewport,
        renderInteractiveForms: renderInteractiveForms
      }; // If another render is in progress, let's cancel it

      _this.cancelRenderingTask();

      _this.renderer = page.render(renderContext);
      return _this.renderer.promise.then(_this.onRenderSuccess)["catch"](_this.onRenderError);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PageCanvasInternal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.drawPageOnCanvas();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props3 = this.props,
          page = _this$props3.page,
          renderInteractiveForms = _this$props3.renderInteractiveForms;

      if (renderInteractiveForms !== prevProps.renderInteractiveForms) {
        // Ensures the canvas will be re-rendered from scratch. Otherwise all form data will stay.
        page.cleanup();
        this.drawPageOnCanvas();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelRenderingTask();
      /**
       * Zeroing the width and height cause most browsers to release graphics
       * resources immediately, which can greatly reduce memory consumption.
       */

      if (this.canvasLayer) {
        this.canvasLayer.width = 0;
        this.canvasLayer.height = 0;
        this.canvasLayer = null;
      }
    }
  }, {
    key: "cancelRenderingTask",
    value: function cancelRenderingTask() {
      /* eslint-disable no-underscore-dangle */
      if (this.renderer && this.renderer._internalRenderTask.running) {
        this.renderer._internalRenderTask.cancel();
      }
      /* eslint-enable no-underscore-dangle */

    }
    /**
     * Called when a page is rendered successfully.
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("canvas", {
        className: "react-pdf__Page__canvas",
        dir: "ltr",
        ref: function ref(_ref) {
          _this2.canvasLayer = _ref;
        },
        style: {
          display: 'block',
          userSelect: 'none'
        }
      });
    }
  }, {
    key: "renderViewport",
    get: function get() {
      var _this$props4 = this.props,
          page = _this$props4.page,
          rotate = _this$props4.rotate,
          scale = _this$props4.scale;
      var pixelRatio = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_11__["getPixelRatio"])();
      return page.getViewport({
        scale: scale * pixelRatio,
        rotation: rotate
      });
    }
  }, {
    key: "viewport",
    get: function get() {
      var _this$props5 = this.props,
          page = _this$props5.page,
          rotate = _this$props5.rotate,
          scale = _this$props5.scale;
      return page.getViewport({
        scale: scale,
        rotation: rotate
      });
    }
  }]);

  return PageCanvasInternal;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);
PageCanvasInternal.propTypes = {
  onRenderError: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onRenderSuccess: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  page: _shared_propTypes__WEBPACK_IMPORTED_MODULE_12__["isPage"].isRequired,
  renderInteractiveForms: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  rotate: _shared_propTypes__WEBPACK_IMPORTED_MODULE_12__["isRotate"],
  scale: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number
};
function PageCanvas(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_PageContext__WEBPACK_IMPORTED_MODULE_10__["default"].Consumer, null, function (context) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(PageCanvasInternal, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, context, props));
  });
}

/***/ }),

/***/ "./node_modules/react-pdf/dist/esm/Page/PageSVG.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-pdf/dist/esm/Page/PageSVG.js ***!
  \*********************************************************/
/*! exports provided: PageSVGInternal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSVGInternal", function() { return PageSVGInternal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageSVG; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! pdfjs-dist/build/pdf */ "./node_modules/pdfjs-dist/build/pdf.js");
/* harmony import */ var pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _PageContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../PageContext */ "./node_modules/react-pdf/dist/esm/PageContext.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/utils */ "./node_modules/react-pdf/dist/esm/shared/utils.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-pdf/dist/esm/shared/propTypes.js");









function _createSuper(Derived) {
  return function () {
    var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}







var PageSVGInternal = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PageSVGInternal, _PureComponent);

  var _super = _createSuper(PageSVGInternal);

  function PageSVGInternal() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PageSVGInternal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      svg: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "onRenderSuccess", function () {
      _this.renderer = null;
      var _this$props = _this.props,
          onRenderSuccess = _this$props.onRenderSuccess,
          page = _this$props.page,
          scale = _this$props.scale;
      if (onRenderSuccess) onRenderSuccess(Object(_shared_utils__WEBPACK_IMPORTED_MODULE_12__["makePageCallback"])(page, scale));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "onRenderError", function (error) {
      if (Object(_shared_utils__WEBPACK_IMPORTED_MODULE_12__["isCancelException"])(error)) {
        return;
      }

      Object(_shared_utils__WEBPACK_IMPORTED_MODULE_12__["errorOnDev"])(error);
      var onRenderError = _this.props.onRenderError;
      if (onRenderError) onRenderError(error);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "renderSVG", function () {
      var page = _this.props.page;
      _this.renderer = page.getOperatorList();
      return _this.renderer.then(function (operatorList) {
        var svgGfx = new pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_10___default.a.SVGGraphics(page.commonObjs, page.objs);
        _this.renderer = svgGfx.getSVG(operatorList, _this.viewport).then(function (svg) {
          _this.setState({
            svg: svg
          }, _this.onRenderSuccess);
        })["catch"](_this.onRenderError);
      })["catch"](_this.onRenderError);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "drawPageOnContainer", function (element) {
      var svg = _this.state.svg;

      if (!element || !svg) {
        return;
      } // Append SVG element to the main container, if this hasn't been done already


      if (!element.firstElementChild) {
        element.appendChild(svg);
      }

      var _this$viewport = _this.viewport,
          width = _this$viewport.width,
          height = _this$viewport.height;
      svg.setAttribute('width', width);
      svg.setAttribute('height', height);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PageSVGInternal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderSVG();
    }
    /**
     * Called when a page is rendered successfully.
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$viewport2 = this.viewport,
          width = _this$viewport2.width,
          height = _this$viewport2.height;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "react-pdf__Page__svg" // Note: This cannot be shortened, as we need this function to be called with each render.
        ,
        ref: function ref(_ref) {
          return _this2.drawPageOnContainer(_ref);
        },
        style: {
          display: 'block',
          backgroundColor: 'white',
          overflow: 'hidden',
          width: width,
          height: height,
          userSelect: 'none'
        }
      });
    }
  }, {
    key: "viewport",
    get: function get() {
      var _this$props2 = this.props,
          page = _this$props2.page,
          rotate = _this$props2.rotate,
          scale = _this$props2.scale;
      return page.getViewport({
        scale: scale,
        rotation: rotate
      });
    }
  }]);

  return PageSVGInternal;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);
PageSVGInternal.propTypes = {
  onRenderError: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onRenderSuccess: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  page: _shared_propTypes__WEBPACK_IMPORTED_MODULE_13__["isPage"].isRequired,
  rotate: _shared_propTypes__WEBPACK_IMPORTED_MODULE_13__["isRotate"],
  scale: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number
};
function PageSVG(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_PageContext__WEBPACK_IMPORTED_MODULE_11__["default"].Consumer, null, function (context) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(PageSVGInternal, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, context, props));
  });
}

/***/ }),

/***/ "./node_modules/react-pdf/dist/esm/Page/TextLayer.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-pdf/dist/esm/Page/TextLayer.js ***!
  \***********************************************************/
/*! exports provided: TextLayerInternal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextLayerInternal", function() { return TextLayerInternal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextLayer; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var make_cancellable_promise__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! make-cancellable-promise */ "./node_modules/make-cancellable-promise/dist/index.js");
/* harmony import */ var make_cancellable_promise__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(make_cancellable_promise__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _PageContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../PageContext */ "./node_modules/react-pdf/dist/esm/PageContext.js");
/* harmony import */ var _TextLayerItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TextLayerItem */ "./node_modules/react-pdf/dist/esm/Page/TextLayerItem.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/utils */ "./node_modules/react-pdf/dist/esm/shared/utils.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-pdf/dist/esm/shared/propTypes.js");











function _createSuper(Derived) {
  return function () {
    var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}








var TextLayerInternal = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(TextLayerInternal, _PureComponent);

  var _super = _createSuper(TextLayerInternal);

  function TextLayerInternal() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, TextLayerInternal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      textItems: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "loadTextItems", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var page, cancellable, _yield$cancellable$pr, textItems;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              page = _this.props.page;
              _context.prev = 1;
              cancellable = make_cancellable_promise__WEBPACK_IMPORTED_MODULE_12___default()(page.getTextContent());
              _this.runningTask = cancellable;
              _context.next = 6;
              return cancellable.promise;

            case 6:
              _yield$cancellable$pr = _context.sent;
              textItems = _yield$cancellable$pr.items;

              _this.setState({
                textItems: textItems
              }, _this.onLoadSuccess);

              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);

              _this.onLoadError(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    })));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onLoadSuccess", function () {
      var onGetTextSuccess = _this.props.onGetTextSuccess;
      var textItems = _this.state.textItems;
      if (onGetTextSuccess) onGetTextSuccess(textItems);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onLoadError", function (error) {
      _this.setState({
        textItems: false
      });

      Object(_shared_utils__WEBPACK_IMPORTED_MODULE_15__["errorOnDev"])(error);
      var onGetTextError = _this.props.onGetTextError;
      if (onGetTextError) onGetTextError(error);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(TextLayerInternal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var page = this.props.page;

      if (!page) {
        throw new Error('Attempted to load page text content, but no page was specified.');
      }

      this.loadTextItems();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var page = this.props.page;

      if (prevProps.page && page !== prevProps.page) {
        this.loadTextItems();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Object(_shared_utils__WEBPACK_IMPORTED_MODULE_15__["cancelRunningTask"])(this.runningTask);
    }
  }, {
    key: "renderTextItems",
    value: function renderTextItems() {
      var textItems = this.state.textItems;

      if (!textItems) {
        return null;
      }

      return textItems.map(function (textItem, itemIndex) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_TextLayerItem__WEBPACK_IMPORTED_MODULE_14__["default"] // eslint-disable-next-line react/no-array-index-key
        , Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: itemIndex,
          itemIndex: itemIndex
        }, textItem));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var viewport = this.unrotatedViewport,
          rotate = this.rotate;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "react-pdf__Page__textContent",
        style: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: "".concat(viewport.width, "px"),
          height: "".concat(viewport.height, "px"),
          color: 'transparent',
          transform: "translate(-50%, -50%) rotate(".concat(rotate, "deg)"),
          WebkitTransform: "translate(-50%, -50%) rotate(".concat(rotate, "deg)"),
          pointerEvents: 'none'
        }
      }, this.renderTextItems());
    }
  }, {
    key: "unrotatedViewport",
    get: function get() {
      var _this$props = this.props,
          page = _this$props.page,
          scale = _this$props.scale;
      return page.getViewport({
        scale: scale
      });
    }
    /**
     * It might happen that the page is rotated by default. In such cases, we shouldn't rotate
     * text content.
     */

  }, {
    key: "rotate",
    get: function get() {
      var _this$props2 = this.props,
          page = _this$props2.page,
          rotate = _this$props2.rotate;
      return rotate - page.rotate;
    }
  }]);

  return TextLayerInternal;
}(react__WEBPACK_IMPORTED_MODULE_10__["PureComponent"]);
TextLayerInternal.propTypes = {
  onGetTextError: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  onGetTextSuccess: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
  page: _shared_propTypes__WEBPACK_IMPORTED_MODULE_16__["isPage"].isRequired,
  rotate: _shared_propTypes__WEBPACK_IMPORTED_MODULE_16__["isRotate"],
  scale: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number
};
function TextLayer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_PageContext__WEBPACK_IMPORTED_MODULE_13__["default"].Consumer, null, function (context) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(TextLayerInternal, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, context, props));
  });
}

/***/ }),

/***/ "./node_modules/react-pdf/dist/esm/Page/TextLayerItem.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-pdf/dist/esm/Page/TextLayerItem.js ***!
  \***************************************************************/
/*! exports provided: TextLayerItemInternal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextLayerItemInternal", function() { return TextLayerItemInternal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextLayerItem; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _PageContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../PageContext */ "./node_modules/react-pdf/dist/esm/PageContext.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-pdf/dist/esm/shared/propTypes.js");












function _createSuper(Derived) {
  return function () {
    var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__["default"])(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}





var TextLayerItemInternal = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(TextLayerItemInternal, _PureComponent);

  var _super = _createSuper(TextLayerItemInternal);

  function TextLayerItemInternal() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, TextLayerItemInternal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getElementWidth", function (element) {
      var _assertThisInitialize = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this),
          sideways = _assertThisInitialize.sideways;

      return element.getBoundingClientRect()[sideways ? 'height' : 'width'];
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(TextLayerItemInternal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.alignTextItem();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.alignTextItem();
    }
  }, {
    key: "getFontData",
    value: function () {
      var _getFontData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(fontName) {
        var page, font;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                page = this.props.page;
                _context.next = 3;
                return new Promise(function (resolve) {
                  page.commonObjs.get(fontName, resolve);
                });

              case 3:
                font = _context.sent;
                return _context.abrupt("return", font);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getFontData(_x) {
        return _getFontData.apply(this, arguments);
      }

      return getFontData;
    }()
  }, {
    key: "alignTextItem",
    value: function () {
      var _alignTextItem = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
        var element, _this$props, fontName, scale, width, fontData, fallbackFontName, targetWidth, actualWidth, transform, ascent;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                element = this.item;

                if (element) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                element.style.transform = '';
                _this$props = this.props, fontName = _this$props.fontName, scale = _this$props.scale, width = _this$props.width;
                element.style.fontFamily = "".concat(fontName, ", sans-serif");
                _context2.next = 8;
                return this.getFontData(fontName);

              case 8:
                fontData = _context2.sent;
                fallbackFontName = fontData ? fontData.fallbackName : 'sans-serif';
                element.style.fontFamily = "".concat(fontName, ", ").concat(fallbackFontName);
                targetWidth = width * scale;
                actualWidth = this.getElementWidth(element);
                transform = "scaleX(".concat(targetWidth / actualWidth, ")");
                ascent = fontData ? fontData.ascent : 0;

                if (ascent) {
                  transform += " translateY(".concat((1 - ascent) * 100, "%)");
                }

                element.style.transform = transform;
                element.style.WebkitTransform = transform;

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function alignTextItem() {
        return _alignTextItem.apply(this, arguments);
      }

      return alignTextItem;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var fontSize = this.fontSize,
          top = this.top,
          left = this.left;
      var _this$props2 = this.props,
          customTextRenderer = _this$props2.customTextRenderer,
          scale = _this$props2.scale,
          text = _this$props2.str;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        ref: function ref(_ref) {
          _this2.item = _ref;
        },
        style: {
          height: '1em',
          fontFamily: 'sans-serif',
          fontSize: "".concat(fontSize * scale, "px"),
          position: 'absolute',
          top: "".concat(top * scale, "px"),
          left: "".concat(left * scale, "px"),
          transformOrigin: 'left bottom',
          whiteSpace: 'pre',
          pointerEvents: 'all'
        }
      }, customTextRenderer ? customTextRenderer(this.props) : text);
    }
  }, {
    key: "unrotatedViewport",
    get: function get() {
      var _this$props3 = this.props,
          page = _this$props3.page,
          scale = _this$props3.scale;
      return page.getViewport({
        scale: scale
      });
    }
    /**
     * It might happen that the page is rotated by default. In such cases, we shouldn't rotate
     * text content.
     */

  }, {
    key: "rotate",
    get: function get() {
      var _this$props4 = this.props,
          page = _this$props4.page,
          rotate = _this$props4.rotate;
      return rotate - page.rotate;
    }
  }, {
    key: "sideways",
    get: function get() {
      var rotate = this.rotate;
      return rotate % 180 !== 0;
    }
  }, {
    key: "defaultSideways",
    get: function get() {
      var rotation = this.unrotatedViewport.rotation;
      return rotation % 180 !== 0;
    }
  }, {
    key: "fontSize",
    get: function get() {
      var transform = this.props.transform;
      var defaultSideways = this.defaultSideways;

      var _transform = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(transform, 2),
          fontHeightPx = _transform[0],
          fontWidthPx = _transform[1];

      return defaultSideways ? fontWidthPx : fontHeightPx;
    }
  }, {
    key: "top",
    get: function get() {
      var transform = this.props.transform;
      var viewport = this.unrotatedViewport,
          defaultSideways = this.defaultSideways;

      var _transform2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(transform, 6),

      /* fontHeightPx */

      /* fontWidthPx */
      offsetX = _transform2[2],
          offsetY = _transform2[3],
          x = _transform2[4],
          y = _transform2[5];

      var _viewport$viewBox = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(viewport.viewBox, 4),

      /* xMin */
      yMin = _viewport$viewBox[1],

      /* xMax */
      yMax = _viewport$viewBox[3];

      return defaultSideways ? x + offsetX + yMin : yMax - (y + offsetY);
    }
  }, {
    key: "left",
    get: function get() {
      var transform = this.props.transform;
      var viewport = this.unrotatedViewport,
          defaultSideways = this.defaultSideways;

      var _transform3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(transform, 6),

      /* fontHeightPx */

      /* fontWidthPx */

      /* offsetX */

      /* offsetY */
      x = _transform3[4],
          y = _transform3[5];

      var _viewport$viewBox2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(viewport.viewBox, 1),
          xMin = _viewport$viewBox2[0];

      return defaultSideways ? y - xMin : x - xMin;
    }
  }]);

  return TextLayerItemInternal;
}(react__WEBPACK_IMPORTED_MODULE_11__["PureComponent"]);
TextLayerItemInternal.propTypes = {
  customTextRenderer: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
  fontName: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string.isRequired,
  itemIndex: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number.isRequired,
  // eslint-disable-line react/no-unused-prop-types
  page: _shared_propTypes__WEBPACK_IMPORTED_MODULE_14__["isPage"].isRequired,
  rotate: _shared_propTypes__WEBPACK_IMPORTED_MODULE_14__["isRotate"],
  scale: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number,
  str: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string.isRequired,
  transform: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number).isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number.isRequired
};
function TextLayerItem(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_PageContext__WEBPACK_IMPORTED_MODULE_13__["default"].Consumer, null, function (context) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(TextLayerItemInternal, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, context, props));
  });
}

/***/ }),

/***/ "./node_modules/react-pdf/dist/esm/PageContext.js":
/*!********************************************************!*\
  !*** ./node_modules/react-pdf/dist/esm/PageContext.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null));

/***/ }),

/***/ "./node_modules/react-pdf/dist/esm/PasswordResponses.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-pdf/dist/esm/PasswordResponses.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// As defined in https://github.com/mozilla/pdf.js/blob/master/src/shared/util.js#L378-L381
var PasswordResponses = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
/* harmony default export */ __webpack_exports__["default"] = (PasswordResponses);

/***/ }),

/***/ "./node_modules/react-pdf/dist/esm/Ref.js":
/*!************************************************!*\
  !*** ./node_modules/react-pdf/dist/esm/Ref.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ref; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var Ref = /*#__PURE__*/function () {
  function Ref(_ref) {
    var num = _ref.num,
        gen = _ref.gen;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Ref);

    this.num = num;
    this.gen = gen;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Ref, [{
    key: "toString",
    value: function toString() {
      var str = "".concat(this.num, "R");

      if (this.gen !== 0) {
        str += this.gen;
      }

      return str;
    }
  }]);

  return Ref;
}();



/***/ }),

/***/ "./node_modules/react-pdf/dist/esm/entry.js":
/*!**************************************************!*\
  !*** ./node_modules/react-pdf/dist/esm/entry.js ***!
  \**************************************************/
/*! exports provided: pdfjs, Document, Outline, Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pdfjs-dist/build/pdf */ "./node_modules/pdfjs-dist/build/pdf.js");
/* harmony import */ var pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "pdfjs", function() { return pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _Document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Document */ "./node_modules/react-pdf/dist/esm/Document.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Document", function() { return _Document__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Outline */ "./node_modules/react-pdf/dist/esm/Outline.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Outline", function() { return _Outline__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Page */ "./node_modules/react-pdf/dist/esm/Page.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return _Page__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/utils */ "./node_modules/react-pdf/dist/esm/shared/utils.js");






if (_shared_utils__WEBPACK_IMPORTED_MODULE_4__["isLocalFileSystem"]) {
  Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["warnOnDev"])('You are running React-PDF from your local file system. PDF.js Worker may fail to load due to browser\'s security policies. If you\'re on Google Chrome, you can use --allow-file-access-from-files flag for debugging purposes.');
}

pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_0___default.a.GlobalWorkerOptions.workerSrc = 'pdf.worker.js';


/***/ }),

/***/ "./node_modules/react-pdf/dist/esm/eventBus.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-pdf/dist/esm/eventBus.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pdfjs_dist_lib_web_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pdfjs-dist/lib/web/ui_utils */ "./node_modules/pdfjs-dist/lib/web/ui_utils.js");
/* harmony import */ var pdfjs_dist_lib_web_ui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist_lib_web_ui_utils__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (new pdfjs_dist_lib_web_ui_utils__WEBPACK_IMPORTED_MODULE_0__["EventBus"]());

/***/ }),

/***/ "./node_modules/react-pdf/dist/esm/shared/propTypes.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-pdf/dist/esm/shared/propTypes.js ***!
  \*************************************************************/
/*! exports provided: eventProps, isClassName, isFile, isLinkService, isLinkTarget, isPage, isPageIndex, isPageNumber, isPdf, isRenderMode, isRotate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventProps", function() { return eventProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClassName", function() { return isClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFile", function() { return isFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLinkService", function() { return isLinkService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLinkTarget", function() { return isLinkTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPage", function() { return isPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPageIndex", function() { return isPageIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPageNumber", function() { return isPageNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPdf", function() { return isPdf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRenderMode", function() { return isRenderMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRotate", function() { return isRotate; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var make_event_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! make-event-props */ "./node_modules/make-event-props/dist/entry.js");
/* harmony import */ var make_event_props__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(make_event_props__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/react-pdf/dist/esm/shared/utils.js");
/* harmony import */ var _LinkService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LinkService */ "./node_modules/react-pdf/dist/esm/LinkService.js");






var eventProps = function () {
  var result = {};
  [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(make_event_props__WEBPACK_IMPORTED_MODULE_3__["mouseEvents"]), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(make_event_props__WEBPACK_IMPORTED_MODULE_3__["touchEvents"]), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(make_event_props__WEBPACK_IMPORTED_MODULE_3__["keyboardEvents"])).forEach(function (eventName) {
    result[eventName] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func;
  });
  return result;
}();
var fileTypes = [prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(ArrayBuffer), prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  httpHeaders: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  range: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  url: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  withCredentials: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
})];

if (typeof File !== 'undefined') {
  fileTypes.push(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(File));
}

if (typeof Blob !== 'undefined') {
  fileTypes.push(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(Blob));
}

var isClassName = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string)]);
var isFile = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType(fileTypes);
var isLinkService = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(_LinkService__WEBPACK_IMPORTED_MODULE_5__["default"]);
var isLinkTarget = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['_self', '_blank', '_parent', '_top']);
var isPage = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
  _transport: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    fontLoader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
  }).isRequired,
  commonObjs: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    _objs: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
  }).isRequired,
  getAnnotations: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  getTextContent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  getViewport: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
});
var isPageIndex = function isPageIndex(props, propName, componentName) {
  var pageIndex = props[propName],
      pageNumber = props.pageNumber,
      pdf = props.pdf;

  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isDefined"])(pdf)) {
    return null;
  }

  if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isDefined"])(pageIndex)) {
    if (typeof pageIndex !== 'number') {
      return new Error("`".concat(propName, "` of type `").concat(Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(pageIndex), "` supplied to `").concat(componentName, "`, expected `number`."));
    }

    if (pageIndex < 0) {
      return new Error("Expected `".concat(propName, "` to be greater or equal to 0."));
    }

    var numPages = pdf.numPages;

    if (pageIndex + 1 > numPages) {
      return new Error("Expected `".concat(propName, "` to be less or equal to ").concat(numPages - 1, "."));
    }
  } else if (!Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isDefined"])(pageNumber)) {
    return new Error("`".concat(propName, "` not supplied. Either pageIndex or pageNumber must be supplied to `").concat(componentName, "`."));
  } // Everything is fine


  return null;
};
var isPageNumber = function isPageNumber(props, propName, componentName) {
  var pageNumber = props[propName],
      pageIndex = props.pageIndex,
      pdf = props.pdf;

  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isDefined"])(pdf)) {
    return null;
  }

  if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isDefined"])(pageNumber)) {
    if (typeof pageNumber !== 'number') {
      return new Error("`".concat(propName, "` of type `").concat(Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(pageNumber), "` supplied to `").concat(componentName, "`, expected `number`."));
    }

    if (pageNumber < 1) {
      return new Error("Expected `".concat(propName, "` to be greater or equal to 1."));
    }

    var numPages = pdf.numPages;

    if (pageNumber > numPages) {
      return new Error("Expected `".concat(propName, "` to be less or equal to ").concat(numPages, "."));
    }
  } else if (!Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isDefined"])(pageIndex)) {
    return new Error("`".concat(propName, "` not supplied. Either pageIndex or pageNumber must be supplied to `").concat(componentName, "`."));
  } // Everything is fine


  return null;
};
var isPdf = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
  getDestination: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  getOutline: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  getPage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  numPages: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
}), prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool]);
var isRenderMode = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['canvas', 'none', 'svg']);
var isRotate = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([0, 90, 180, 270]);

/***/ }),

/***/ "./node_modules/react-pdf/dist/esm/shared/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-pdf/dist/esm/shared/utils.js ***!
  \*********************************************************/
/*! exports provided: isBrowser, isLocalFileSystem, isProduction, isDefined, isProvided, isString, isArrayBuffer, isBlob, isFile, isDataURI, dataURItoUint8Array, getPixelRatio, warnOnDev, errorOnDev, displayCORSWarning, cancelRunningTask, makePageCallback, isCancelException, loadFromFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLocalFileSystem", function() { return isLocalFileSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProduction", function() { return isProduction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProvided", function() { return isProvided; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayBuffer", function() { return isArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlob", function() { return isBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFile", function() { return isFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDataURI", function() { return isDataURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataURItoUint8Array", function() { return dataURItoUint8Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPixelRatio", function() { return getPixelRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnOnDev", function() { return warnOnDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorOnDev", function() { return errorOnDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayCORSWarning", function() { return displayCORSWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelRunningTask", function() { return cancelRunningTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePageCallback", function() { return makePageCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCancelException", function() { return isCancelException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFromFile", function() { return loadFromFile; });
/**
 * Checks if we're running in a browser environment.
 */
var isBrowser = typeof window !== 'undefined';
/**
 * Checks whether we're running from a local file system.
 */

var isLocalFileSystem = isBrowser && window.location.protocol === 'file:';
/**
 * Checks whether we're running on a production build or not.
 */

var isProduction = "development" === 'production';
/**
 * Checks whether a variable is defined.
 *
 * @param {*} variable Variable to check
 */

var isDefined = function isDefined(variable) {
  return typeof variable !== 'undefined';
};
/**
 * Checks whether a variable is defined and not null.
 *
 * @param {*} variable Variable to check
 */

var isProvided = function isProvided(variable) {
  return isDefined(variable) && variable !== null;
};
/**
 * Checkes whether a variable provided is a string.
 *
 * @param {*} variable Variable to check
 */

var isString = function isString(variable) {
  return typeof variable === 'string';
};
/**
 * Checks whether a variable provided is an ArrayBuffer.
 *
 * @param {*} variable Variable to check
 */

var isArrayBuffer = function isArrayBuffer(variable) {
  return variable instanceof ArrayBuffer;
};
/**
 * Checkes whether a variable provided is a Blob.
 *
 * @param {*} variable Variable to check
 */

var isBlob = function isBlob(variable) {
  if (!isBrowser) {
    throw new Error('Attempted to check if a variable is a Blob on a non-browser environment.');
  }

  return variable instanceof Blob;
};
/**
 * Checkes whether a variable provided is a File.
 *
 * @param {*} variable Variable to check
 */

var isFile = function isFile(variable) {
  if (!isBrowser) {
    throw new Error('Attempted to check if a variable is a File on a non-browser environment.');
  }

  return variable instanceof File;
};
/**
 * Checks whether a string provided is a data URI.
 *
 * @param {String} str String to check
 */

var isDataURI = function isDataURI(str) {
  return isString(str) && /^data:/.test(str);
};
var dataURItoUint8Array = function dataURItoUint8Array(dataURI) {
  if (!isDataURI(dataURI)) {
    throw new Error('dataURItoUint8Array was provided with an argument which is not a valid data URI.');
  }

  var byteString;

  if (dataURI.split(',')[0].indexOf('base64') >= 0) {
    byteString = atob(dataURI.split(',')[1]);
  } else {
    byteString = unescape(dataURI.split(',')[1]);
  }

  var ia = new Uint8Array(byteString.length);

  for (var i = 0; i < byteString.length; i += 1) {
    ia[i] = byteString.charCodeAt(i);
  }

  return ia;
};
var getPixelRatio = function getPixelRatio() {
  return isBrowser && window.devicePixelRatio || 1;
};

var consoleOnDev = function consoleOnDev(method) {
  if (!isProduction) {
    var _console;

    for (var _len = arguments.length, message = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      message[_key - 1] = arguments[_key];
    } // eslint-disable-next-line no-console


    (_console = console)[method].apply(_console, message);
  }
};

var warnOnDev = function warnOnDev() {
  for (var _len2 = arguments.length, message = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    message[_key2] = arguments[_key2];
  }

  return consoleOnDev.apply(void 0, ['warn'].concat(message));
};
var errorOnDev = function errorOnDev() {
  for (var _len3 = arguments.length, message = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    message[_key3] = arguments[_key3];
  }

  return consoleOnDev.apply(void 0, ['error'].concat(message));
};
var displayCORSWarning = function displayCORSWarning() {
  if (isLocalFileSystem) {
    warnOnDev('Loading PDF as base64 strings/URLs might not work on protocols other than HTTP/HTTPS. On Google Chrome, you can use --allow-file-access-from-files flag for debugging purposes.');
  }
};
var cancelRunningTask = function cancelRunningTask(runningTask) {
  if (runningTask && runningTask.cancel) runningTask.cancel();
};
var makePageCallback = function makePageCallback(page, scale) {
  Object.defineProperty(page, 'width', {
    get: function get() {
      return this.view[2] * scale;
    },
    configurable: true
  });
  Object.defineProperty(page, 'height', {
    get: function get() {
      return this.view[3] * scale;
    },
    configurable: true
  });
  Object.defineProperty(page, 'originalWidth', {
    get: function get() {
      return this.view[2];
    },
    configurable: true
  });
  Object.defineProperty(page, 'originalHeight', {
    get: function get() {
      return this.view[3];
    },
    configurable: true
  });
  return page;
};
var isCancelException = function isCancelException(error) {
  return error.name === 'RenderingCancelledException';
};
var loadFromFile = function loadFromFile(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function () {
      return resolve(new Uint8Array(reader.result));
    };

    reader.onerror = function (event) {
      switch (event.target.error.code) {
        case event.target.error.NOT_FOUND_ERR:
          return reject(new Error('Error while reading a file: File not found.'));

        case event.target.error.NOT_READABLE_ERR:
          return reject(new Error('Error while reading a file: File not readable.'));

        case event.target.error.SECURITY_ERR:
          return reject(new Error('Error while reading a file: Security error.'));

        case event.target.error.ABORT_ERR:
          return reject(new Error('Error while reading a file: Aborted.'));

        default:
          return reject(new Error('Error while reading a file.'));
      }
    };

    reader.readAsArrayBuffer(file);
    return null;
  });
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noodl_pdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noodl-pdf */ "./src/noodl-pdf.js");
var Noodl = __webpack_require__(/*! @noodl/noodl-sdk */ "./node_modules/@noodl/noodl-sdk/index.js");


Noodl.defineModule({
  reactNodes: [_noodl_pdf__WEBPACK_IMPORTED_MODULE_0__["default"]],
  nodes: [],
  setup: function setup() {
    console.log('PDF viewer setup');
  }
});

/***/ }),

/***/ "./src/noodl-pdf.js":
/*!**************************!*\
  !*** ./src/noodl-pdf.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pdf */ "./node_modules/react-pdf/dist/esm/entry.js");
/* harmony import */ var react_highlight_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-highlight-selection */ "./node_modules/react-highlight-selection/lib/Highlighter.js");
/* harmony import */ var react_highlight_selection__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_highlight_selection__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Noodl = __webpack_require__(/*! @noodl/noodl-sdk */ "./node_modules/@noodl/noodl-sdk/index.js");





react_pdf__WEBPACK_IMPORTED_MODULE_2__["pdfjs"].GlobalWorkerOptions.workerSrc = "//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(react_pdf__WEBPACK_IMPORTED_MODULE_2__["pdfjs"].version, "/pdf.worker.js");


function Wrapper(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      numPages = _useState2[0],
      setNumPages = _useState2[1];

  function onDocumentLoadSuccess(_ref) {
    var numPages = _ref.numPages;
    setNumPages(numPages);
  }

  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }

    navigator.clipboard.writeText(text).then(function () {
      console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
      console.error('Async: Could not copy text: ', err);
    });
  }

  function selectionHandler(selection) {
    copyTextToClipboard(selection.selection);
  }

  function makeTextRenderer() {
    return function textRenderer(textItem) {
      //console.log(textItem.str);
      var text = textItem.str;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_highlight_selection__WEBPACK_IMPORTED_MODULE_3___default.a, {
        text: text,
        selectionHandler: selectionHandler,
        customClass: "custom-class"
      });
    };
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_pdf__WEBPACK_IMPORTED_MODULE_2__["Document"], {
    file: props.file,
    width: props.width,
    height: props.height,
    onLoadSuccess: onDocumentLoadSuccess
  }, Array.from(new Array(numPages), function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_pdf__WEBPACK_IMPORTED_MODULE_2__["Page"], {
      scale: props.scale,
      width: props.width,
      key: "page_".concat(index + 1),
      pageNumber: index + 1,
      customTextRenderer: makeTextRenderer(),
      renderTextLayer: true
    });
  })));
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PDF viewer',
  category: 'Visual',
  getReactComponent: function getReactComponent() {
    return Wrapper;
  },
  inputProps: {
    file: {
      type: 'string'
    },
    pageNumber: {
      type: 'number'
    },
    width: {
      type: 'number'
    },
    scale: {
      type: 'number'
    }
  },
  outputProps: {}
});

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ })

/******/ });
//# sourceMappingURL=index.js.map