"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function ReactCSS(e){return function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"styles",value:function(){return inline.call(this,_get(Object.getPrototypeOf(t.prototype),"activations",this)&&_get(Object.getPrototypeOf(t.prototype),"activations",this).call(this))}},{key:"render",value:function(){return transformElement(this,_get(Object.getPrototypeOf(t.prototype),"render",this).call(this),_get(Object.getPrototypeOf(t.prototype),"classes",this)&&_get(Object.getPrototypeOf(t.prototype),"classes",this).call(this))}}]),t}(e)}var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_get=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(n)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ReactCSS=ReactCSS;var _react=require("react"),_react2=_interopRequireDefault(_react),_lodash=require("lodash"),_lodash2=_interopRequireDefault(_lodash),inline=require("./inline"),transformElement=function t(e,r,n){var o={},i=void 0,a=r.props.children;return _react2["default"].isValidElement(a)?i=t(e,_react2["default"].Children.only(a),n):(_lodash2["default"].isArray(a)||_lodash2["default"].isObject(a))&&(i=_react2["default"].Children.map(a,function(r){return _react2["default"].isValidElement(r)?t(e,r,n):r})),r.props.is&&n&&(o=Object.assign({},r.props,{style:e.styles()&&e.styles()[r.props.is],is:void 0})),_react2["default"].cloneElement(r,o,i)};exports["default"]=ReactCSS;