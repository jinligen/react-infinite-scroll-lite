/*! author: yedaodao */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InfiniteScroll = function (_React$Component) {
	    _inherits(InfiniteScroll, _React$Component);

	    function InfiniteScroll() {
	        _classCallCheck(this, InfiniteScroll);

	        var _this = _possibleConstructorReturn(this, (InfiniteScroll.__proto__ || Object.getPrototypeOf(InfiniteScroll)).call(this));

	        _this.dom = null;
	        _this.timer = null;
	        return _this;
	    }

	    _createClass(InfiniteScroll, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            if (!this.dom) {
	                return false;
	            }
	            this.dom.addEventListener('scroll', function (e) {
	                if (_this2.checkScrollBottom()) {
	                    _this2.throttle(_this2.props.callback);
	                }
	            });
	            if (this.props.autoFirstLoad) {
	                this.props.callback();
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            if (prevProps.children !== this.props.children) {
	                if (!this.checkBottom()) {
	                    this.throttle(this.props.callback);
	                }
	            }
	        }
	    }, {
	        key: 'throttle',
	        value: function throttle(func) {
	            var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 150;

	            clearTimeout(this.timer);
	            this.timer = setTimeout(function () {
	                if (typeof func === 'function') {
	                    func();
	                }
	            }, time);
	        }
	    }, {
	        key: 'checkScrollBottom',
	        value: function checkScrollBottom() {
	            if (!this.dom) {
	                return false;
	            }
	            if (this.dom.scrollTop === 0) {
	                return true;
	            }
	            return this.dom.scrollTop + this.dom.clientHeight + this.props.bufferPx >= this.dom.scrollHeight;
	        }
	    }, {
	        key: 'checkBottom',
	        value: function checkBottom() {
	            if (!this.dom) {
	                return true;
	            }
	            if (!this.dom.lastChild) {
	                return false;
	            }
	            return this.dom.lastChild.offsetTop + this.props.bufferPx >= this.dom.scrollTop + this.dom.clientHeight;
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.dom.removeEndEventListener('scroll');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            return _react2.default.createElement(
	                'div',
	                { className: 'infinite-scroll-wrapper',
	                    ref: function ref(_ref) {
	                        return _this3.dom = _ref;
	                    },
	                    style: this.props.style
	                },
	                this.props.children
	            );
	        }
	    }]);

	    return InfiniteScroll;
	}(_react2.default.Component);

	InfiniteScroll.propTypes = {
	    bufferPx: _react.PropTypes.number,
	    callback: _react.PropTypes.func,
	    autoFirstLoad: _react.PropTypes.bool,
	    style: _react.PropTypes.object
	};
	InfiniteScroll.defaultProps = {
	    bufferPx: 40,
	    autoFirstLoad: false,
	    style: {}
	};
	exports.default = InfiniteScroll;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;