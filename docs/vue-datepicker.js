(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["moment"], factory);
	else if(typeof exports === 'object')
		exports["VueDatepicker"] = factory(require("moment"));
	else
		root["VueDatepicker"] = factory(root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
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

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vue-datepicker.es6-1.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(8)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-204da304/vue-datepicker.es6-1.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-rewriter.js?id=_v-204da304&scoped=true!./node_modules/vue-loader/lib/selector.js?type=style&index=0!./vue-datepicker.es6-1.vue", function() {
				var newContent = require("!!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-rewriter.js?id=_v-204da304&scoped=true!./node_modules/vue-loader/lib/selector.js?type=style&index=0!./vue-datepicker.es6-1.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.datepicker-overlay[_v-204da304] {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  z-index: 998;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  -webkit-animation: fadein 0.5s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 0.5s;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/* Firefox < 16 */\n/* Safari, Chrome and Opera > 12.1 */\n\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/* Internet Explorer */\n/* Opera < 12.1 */\n\n.cov-date-body[_v-204da304] {\n  display: inline-block;\n  background: #3F51B5;\n  overflow: hidden;\n  position: relative;\n  position: fixed;\n  display: block;\n  width: 24em;\n  max-width: 100%;\n  z-index: 999;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);\n  -webkit-overflow-scrolling: touch;\n}\n\n.cov-picker-box[_v-204da304] {\n  background: #fff;\n  width: 100%;\n  display: inline-block;\n  padding: 1em;\n  box-sizing: border-box !important;\n  -moz-box-sizing: border-box !important;\n  -webkit-box-sizing: border-box !important;\n  -ms-box-sizing: border-box !important;\n  max-width: 100%;\n  text-align: start!important;\n  line-height: 1em;\n  height: 20em;\n  max-height: 20em;\n  -webkit-overflow-scrolling: touch;\n  overflow:scroll;\n  z-index:1;\n}\n\n.cov-picker-box.list-box[_v-204da304] {\n  overflow-y: scroll;\n}\n\n.cov-picker-box td[_v-204da304] {\n  height: 2em;\n  width: 2em;\n  padding: 0;\n  line-height: 2em;\n  color: #000;\n  background: #fff;\n  text-align: center;\n  cursor: pointer;\n}\n\n.cov-picker-box td[_v-204da304]:hover {\n  background: #E6E6E6;\n}\n\ntable[_v-204da304] {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n}\n\n.day[_v-204da304] {\n  width: 14.2857143%;\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n  line-height: 1em;\n  color: #000;\n  background: #fff;\n  vertical-align: middle;\n  padding: 0.5em;\n}\n\n.week ul[_v-204da304] {\n  padding: 0;\n  list-style: none;\n}\n\n.week ul li[_v-204da304] {\n  width: 14.2%;\n  display: inline-block;\n  text-align: center;\n  background: transparent;\n  color: #000;\n  line-height: 1;\n  font-weight: bold;\n  padding: 0.5em;\n}\n\n.passive-day[_v-204da304] {\n  color: #bbb;\n}\n\n.checked[_v-204da304] {\n  background: #F50057;\n  color: #FFF !important;\n  border-radius: 3px;\n}\n\n.unavailable[_v-204da304] {\n  color: #ccc;\n  cursor: not-allowed;\n}\n\n.cov-date-monthly[_v-204da304] {\n  padding: 0;\n}\n\n.cov-date-monthly[_v-204da304]:before,\n.cov-date-monthly[_v-204da304]:after {\n  content: \" \";\n  display: table;\n  clear: both;\n}\n\n.cov-date-monthly>div[_v-204da304] {\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  vertical-align: middle;\n  color: #fff;\n  float: left;\n  text-align: center;\n  cursor: pointer;\n}\n\n.cov-date-previous[_v-204da304],\n.cov-date-next[_v-204da304] {\n  position: relative;\n  width: 20% !important;\n  text-indent: -300px;\n  overflow: hidden;\n  color: #fff;\n  height: 5em;\n}\n\n.cov-date-caption[_v-204da304] {\n  width: 60%;\n  padding: 0.5em 0!important;\n  box-sizing: border-box;\n  font-size: 1.5em;\n  line-height: 1;\n}\n\n.cov-date-caption span[_v-204da304]:hover {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.cov-date-previous[_v-204da304]:hover,\n.cov-date-next[_v-204da304]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.day[_v-204da304]:hover {\n  background: #EAEAEA;\n}\n\n.unavailable[_v-204da304]:hover {\n  background: none;\n}\n\n.checked[_v-204da304]:hover {\n  background: #FF4F8E;\n}\n\n.cov-date-next[_v-204da304]::before,\n.cov-date-previous[_v-204da304]::before {\n  width: 20px;\n  height: 2px;\n  text-align: center;\n  position: absolute;\n  background: #fff;\n  top: 50%;\n  margin-top: -7px;\n  margin-left: -7px;\n  left: 50%;\n  line-height: 0;\n  content: '';\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n.cov-date-next[_v-204da304]::after,\n.cov-date-previous[_v-204da304]::after {\n  width: 20px;\n  height: 2px;\n  text-align: center;\n  position: absolute;\n  background: #fff;\n  margin-top: 6px;\n  margin-left: -7px;\n  top: 50%;\n  left: 50%;\n  line-height: 0;\n  content: '';\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n\n.cov-date-previous[_v-204da304]::after {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n.cov-date-previous[_v-204da304]::before {\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n\n.date-item[_v-204da304] {\n  text-align: center;\n  padding: 0.5em 0;\n  cursor: pointer;\n}\n\n.date-item[_v-204da304]:hover {\n  background: #e0e0e0;\n}\n\n.date-list[_v-204da304] {\n  overflow: auto;\n  vertical-align: top;\n  padding: 0;\n}\n\n.cov-vue-date[_v-204da304] {\n  display: inline-block;\n  color: #5D5D5D;\n}\n\n.button-box[_v-204da304] {\n  background: #fff;\n  vertical-align: top;\n  text-align: right;\n  padding: 1em;\n}\n\n.button-box span[_v-204da304] {\n  cursor: pointer;\n  padding: 0 1em;\n}\n\n.watch-box[_v-204da304] {\n  height: 100%;\n  overflow: hidden;\n}\n\n.hour-box[_v-204da304],\n.min-box[_v-204da304] {\n  display: inline-block;\n  width: 50%;\n  text-align: center;\n  max-height: 20em;\n  overflow: auto;\n  float: left;\n}\n\n.hour-box ul[_v-204da304],\n.min-box ul[_v-204da304] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.hour-item[_v-204da304],\n.min-item[_v-204da304] {\n  padding: 0.5em;\n  font-size: 1.5em;\n  cursor: pointer;\n}\n\n.hour-item[_v-204da304]:hover,\n.min-item[_v-204da304]:hover {\n  background: #E3E3E3;\n}\n\n.hour-box .active[_v-204da304],\n.min-box .active[_v-204da304] {\n  background: #F50057;\n  color: #FFF !important;\n}\n\n [_v-204da304]::-webkit-scrollbar {\n  width: 2px;\n}\n\n [_v-204da304]::-webkit-scrollbar-track {\n  background: #E3E3E3;\n}\n\n [_v-204da304]::-webkit-scrollbar-thumb {\n  background: #C1C1C1;\n  border-radius: 2px;\n}\n", "", {"version":3,"sources":["/./vue-datepicker.es6-1.vue?a29b5a98"],"names":[],"mappings":";AACA;EACA,gBAAA;EACA,YAAA;EACA,cAAA;EACA,aAAA;EACA,OAAA;EACA,QAAA;EACA,iBAAA;EACA,+BAAA;EACA,qCAAA;EAEA,kBAAA;EAEA,uBAAA;EAEA,kBAAA;EACA,uBAAA;CACA;;AAEA;EACA;IACA,WAAA;GACA;EACA;IACA,WAAA;GACA;CACA;AACA,kBAAA;AAUA,qCAAA;;AAEA;EACA;IACA,WAAA;GACA;EACA;IACA,WAAA;GACA;CACA;AACA,uBAAA;AAUA,kBAAA;;AAWA;EACA,sBAAA;EACA,oBAAA;EACA,iBAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;EACA,SAAA;EACA,UAAA;EACA,yCAAA;EAEA,iCAAA;EACA,2CAAA;EACA,kCAAA;CACA;;AAEA;EACA,iBAAA;EACA,YAAA;EACA,sBAAA;EACA,aAAA;EACA,kCAAA;EACA,uCAAA;EACA,0CAAA;EACA,sCAAA;EACA,gBAAA;EACA,4BAAA;EACA,iBAAA;EACA,aAAA;EACA,iBAAA;EACA,kCAAA;EACA,gBAAA;EACA,UAAA;CACA;;AAEA;EACA,mBAAA;CACA;;AAEA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,iBAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;EACA,gBAAA;CACA;;AAEA;EACA,oBAAA;CACA;;AAEA;EACA,0BAAA;EACA,kBAAA;EACA,YAAA;CACA;;AAEA;EACA,mBAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;EACA,iBAAA;EACA,YAAA;EACA,iBAAA;EACA,uBAAA;EACA,eAAA;CACA;;AAEA;EACA,WAAA;EACA,iBAAA;CACA;;AAEA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,wBAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,eAAA;CACA;;AAEA;EACA,YAAA;CACA;;AAEA;EACA,oBAAA;EACA,uBAAA;EACA,mBAAA;CACA;;AAEA;EACA,YAAA;EACA,oBAAA;CACA;;AAEA;EACA,WAAA;CACA;;AAEA;;EAEA,aAAA;EACA,eAAA;EACA,YAAA;CACA;;AAEA;EACA,sBAAA;EACA,WAAA;EACA,UAAA;EACA,uBAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,gBAAA;CACA;;AAEA;;EAEA,mBAAA;EACA,sBAAA;EACA,oBAAA;EACA,iBAAA;EACA,YAAA;EACA,YAAA;CACA;;AAEA;EACA,WAAA;EACA,2BAAA;EACA,uBAAA;EACA,iBAAA;EACA,eAAA;CACA;;AAEA;EACA,gCAAA;CACA;;AAEA;;EAEA,qCAAA;CACA;;AAEA;EACA,oBAAA;CACA;;AAEA;EACA,iBAAA;CACA;;AAEA;EACA,oBAAA;CACA;;AAEA;;EAEA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,mBAAA;EACA,iBAAA;EACA,SAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,eAAA;EACA,YAAA;EACA,iCAAA;EAEA,yBAAA;CACA;;AAEA;;EAEA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,mBAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,eAAA;EACA,YAAA;EACA,kCAAA;EAEA,0BAAA;CACA;;AAEA;EACA,iCAAA;EAEA,yBAAA;CACA;;AAEA;EACA,kCAAA;EAEA,0BAAA;CACA;;AAEA;EACA,mBAAA;EACA,iBAAA;EACA,gBAAA;CACA;;AAEA;EACA,oBAAA;CACA;;AAEA;EACA,eAAA;EACA,oBAAA;EACA,WAAA;CACA;;AAEA;EACA,sBAAA;EACA,eAAA;CACA;;AAEA;EACA,iBAAA;EACA,oBAAA;EACA,kBAAA;EACA,aAAA;CACA;;AAEA;EACA,gBAAA;EACA,eAAA;CACA;;AAEA;EACA,aAAA;EACA,iBAAA;CACA;;AAEA;;EAEA,sBAAA;EACA,WAAA;EACA,mBAAA;EACA,iBAAA;EACA,eAAA;EACA,YAAA;CACA;;AAEA;;EAEA,iBAAA;EACA,UAAA;EACA,WAAA;CACA;;AAEA;;EAEA,eAAA;EACA,iBAAA;EACA,gBAAA;CACA;;AAEA;;EAEA,oBAAA;CACA;;AAEA;;EAEA,oBAAA;EACA,uBAAA;CACA;;CAEA;EACA,WAAA;CACA;;CAEA;EACA,oBAAA;CACA;;CAEA;EACA,oBAAA;EACA,mBAAA;CACA","file":"vue-datepicker.es6-1.vue","sourcesContent":["<style scoped>\r\n  .datepicker-overlay {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100vh;\r\n    z-index: 998;\r\n    top: 0;\r\n    left: 0;\r\n    overflow: hidden;\r\n    -webkit-animation: fadein 0.5s;\r\n    /* Safari, Chrome and Opera > 12.1 */\r\n    -moz-animation: fadein 0.5s;\r\n    /* Firefox < 16 */\r\n    -ms-animation: fadein 0.5s;\r\n    /* Internet Explorer */\r\n    -o-animation: fadein 0.5s;\r\n    /* Opera < 12.1 */\r\n    animation: fadein 0.5s;\r\n  }\r\n  \r\n  @keyframes fadein {\r\n    from {\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  /* Firefox < 16 */\r\n  \r\n  @-moz-keyframes fadein {\r\n    from {\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  /* Safari, Chrome and Opera > 12.1 */\r\n  \r\n  @-webkit-keyframes fadein {\r\n    from {\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  /* Internet Explorer */\r\n  \r\n  @-ms-keyframes fadein {\r\n    from {\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  /* Opera < 12.1 */\r\n  \r\n  @-o-keyframes fadein {\r\n    from {\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  .cov-date-body {\r\n    display: inline-block;\r\n    background: #3F51B5;\r\n    overflow: hidden;\r\n    position: relative;\r\n    position: fixed;\r\n    display: block;\r\n    width: 24em;\r\n    max-width: 100%;\r\n    z-index: 999;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);\r\n    -webkit-overflow-scrolling: touch;\r\n  }\r\n  \r\n  .cov-picker-box {\r\n    background: #fff;\r\n    width: 100%;\r\n    display: inline-block;\r\n    padding: 1em;\r\n    box-sizing: border-box !important;\r\n    -moz-box-sizing: border-box !important;\r\n    -webkit-box-sizing: border-box !important;\r\n    -ms-box-sizing: border-box !important;\r\n    max-width: 100%;\r\n    text-align: start!important;\r\n    line-height: 1em;\r\n    height: 20em;\r\n    max-height: 20em;\r\n    -webkit-overflow-scrolling: touch;\r\n    overflow:scroll;\r\n    z-index:1;\r\n  }\r\n  \r\n  .cov-picker-box.list-box {\r\n    overflow-y: scroll;\r\n  }\r\n  \r\n  .cov-picker-box td {\r\n    height: 2em;\r\n    width: 2em;\r\n    padding: 0;\r\n    line-height: 2em;\r\n    color: #000;\r\n    background: #fff;\r\n    text-align: center;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .cov-picker-box td:hover {\r\n    background: #E6E6E6;\r\n  }\r\n  \r\n  table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    width: 100%;\r\n  }\r\n  \r\n  .day {\r\n    width: 14.2857143%;\r\n    display: inline-block;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    line-height: 1em;\r\n    color: #000;\r\n    background: #fff;\r\n    vertical-align: middle;\r\n    padding: 0.5em;\r\n  }\r\n  \r\n  .week ul {\r\n    padding: 0;\r\n    list-style: none;\r\n  }\r\n  \r\n  .week ul li {\r\n    width: 14.2%;\r\n    display: inline-block;\r\n    text-align: center;\r\n    background: transparent;\r\n    color: #000;\r\n    line-height: 1;\r\n    font-weight: bold;\r\n    padding: 0.5em;\r\n  }\r\n  \r\n  .passive-day {\r\n    color: #bbb;\r\n  }\r\n  \r\n  .checked {\r\n    background: #F50057;\r\n    color: #FFF !important;\r\n    border-radius: 3px;\r\n  }\r\n  \r\n  .unavailable {\r\n    color: #ccc;\r\n    cursor: not-allowed;\r\n  }\r\n  \r\n  .cov-date-monthly {\r\n    padding: 0;\r\n  }\r\n  \r\n  .cov-date-monthly:before,\r\n  .cov-date-monthly:after {\r\n    content: \" \";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  \r\n  .cov-date-monthly>div {\r\n    display: inline-block;\r\n    padding: 0;\r\n    margin: 0;\r\n    vertical-align: middle;\r\n    color: #fff;\r\n    float: left;\r\n    text-align: center;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .cov-date-previous,\r\n  .cov-date-next {\r\n    position: relative;\r\n    width: 20% !important;\r\n    text-indent: -300px;\r\n    overflow: hidden;\r\n    color: #fff;\r\n    height: 5em;\r\n  }\r\n  \r\n  .cov-date-caption {\r\n    width: 60%;\r\n    padding: 0.5em 0!important;\r\n    box-sizing: border-box;\r\n    font-size: 1.5em;\r\n    line-height: 1;\r\n  }\r\n  \r\n  .cov-date-caption span:hover {\r\n    color: rgba(255, 255, 255, 0.7);\r\n  }\r\n  \r\n  .cov-date-previous:hover,\r\n  .cov-date-next:hover {\r\n    background: rgba(255, 255, 255, 0.1);\r\n  }\r\n  \r\n  .day:hover {\r\n    background: #EAEAEA;\r\n  }\r\n  \r\n  .unavailable:hover {\r\n    background: none;\r\n  }\r\n  \r\n  .checked:hover {\r\n    background: #FF4F8E;\r\n  }\r\n  \r\n  .cov-date-next::before,\r\n  .cov-date-previous::before {\r\n    width: 20px;\r\n    height: 2px;\r\n    text-align: center;\r\n    position: absolute;\r\n    background: #fff;\r\n    top: 50%;\r\n    margin-top: -7px;\r\n    margin-left: -7px;\r\n    left: 50%;\r\n    line-height: 0;\r\n    content: '';\r\n    -webkit-transform: rotate(45deg);\r\n    -moz-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n  }\r\n  \r\n  .cov-date-next::after,\r\n  .cov-date-previous::after {\r\n    width: 20px;\r\n    height: 2px;\r\n    text-align: center;\r\n    position: absolute;\r\n    background: #fff;\r\n    margin-top: 6px;\r\n    margin-left: -7px;\r\n    top: 50%;\r\n    left: 50%;\r\n    line-height: 0;\r\n    content: '';\r\n    -webkit-transform: rotate(-45deg);\r\n    -moz-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\r\n  }\r\n  \r\n  .cov-date-previous::after {\r\n    -webkit-transform: rotate(45deg);\r\n    -moz-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n  }\r\n  \r\n  .cov-date-previous::before {\r\n    -webkit-transform: rotate(-45deg);\r\n    -moz-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\r\n  }\r\n  \r\n  .date-item {\r\n    text-align: center;\r\n    padding: 0.5em 0;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .date-item:hover {\r\n    background: #e0e0e0;\r\n  }\r\n  \r\n  .date-list {\r\n    overflow: auto;\r\n    vertical-align: top;\r\n    padding: 0;\r\n  }\r\n  \r\n  .cov-vue-date {\r\n    display: inline-block;\r\n    color: #5D5D5D;\r\n  }\r\n  \r\n  .button-box {\r\n    background: #fff;\r\n    vertical-align: top;\r\n    text-align: right;\r\n    padding: 1em;\r\n  }\r\n  \r\n  .button-box span {\r\n    cursor: pointer;\r\n    padding: 0 1em;\r\n  }\r\n  \r\n  .watch-box {\r\n    height: 100%;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .hour-box,\r\n  .min-box {\r\n    display: inline-block;\r\n    width: 50%;\r\n    text-align: center;\r\n    max-height: 20em;\r\n    overflow: auto;\r\n    float: left;\r\n  }\r\n  \r\n  .hour-box ul,\r\n  .min-box ul {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  .hour-item,\r\n  .min-item {\r\n    padding: 0.5em;\r\n    font-size: 1.5em;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .hour-item:hover,\r\n  .min-item:hover {\r\n    background: #E3E3E3;\r\n  }\r\n  \r\n  .hour-box .active,\r\n  .min-box .active {\r\n    background: #F50057;\r\n    color: #FFF !important;\r\n  }\r\n  \r\n   ::-webkit-scrollbar {\r\n    width: 2px;\r\n  }\r\n  \r\n   ::-webkit-scrollbar-track {\r\n    background: #E3E3E3;\r\n  }\r\n  \r\n   ::-webkit-scrollbar-thumb {\r\n    background: #C1C1C1;\r\n    border-radius: 2px;\r\n  }\r\n</style>\r\n<template>\r\n  <div class=\"cov-vue-date\">\r\n    <div v-if=\"!innerOption.hiddenInput\" class=\"datepickbox\">\r\n      <input type=\"text\" title=\"input date\" class=\"cov-datepicker\" readonly=\"readonly\" :placeholder=\"innerOption.placeholder\" v-model=\"time\"\r\n        :required=\"required\" @click=\"showCheck\" @foucus=\"showCheck\" :style=\"innerOption.inputStyle\" />\r\n    </div>\r\n    <div class=\"datepicker-overlay\" v-if=\"showInfo.check\" @click=\"dismiss($event)\" v-bind:style=\"{'background' : innerOption.overlayOpacity? 'rgba(0,0,0,'+innerOption.overlayOpacity+')' : 'rgba(0,0,0,0.5)'}\">\r\n      <div class=\"cov-date-body\" :style=\"{'background-color': innerOption.color ? innerOption.color.header : '#3f51b5'}\">\r\n        <div class=\"cov-date-monthly\">\r\n          <div class=\"cov-date-previous\" @click=\"nextMonth('pre')\">«</div>\r\n          <div class=\"cov-date-caption\" :style=\"{'color': innerOption.color ? innerOption.color.headerText : '#fff'}\">\r\n            <span @click=\"showYear\"><small>{{checked.year}}</small></span>\r\n            <br>\r\n            <span @click=\"showMonth\">{{displayInfo.month}}</span>\r\n          </div>\r\n          <div class=\"cov-date-next\" @click=\"nextMonth('next')\">»</div>\r\n        </div>\r\n        <div class=\"cov-date-box\" v-if=\"showInfo.day\">\r\n          <div class=\"cov-picker-box\">\r\n            <div class=\"week\">\r\n              <ul>\r\n                <li v-for=\"weekie in innerWeek\">{{weekie}}</li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"day\" v-for=\"day in dayList\" track-by=\"$index\" @click=\"checkDay(day)\" :class=\"{'checked':day.checked,'unavailable':day.unavailable,'passive-day': !(day.inMonth)}\"\r\n              :style=\"day.checked ? (innerOption.color && innerOption.color.checkedDay ? { background: innerOption.color.checkedDay } : { background: '#F50057' }) : {}\">{{day.value}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"cov-date-box list-box\" v-if=\"showInfo.year\">\r\n          <div class=\"cov-picker-box date-list\" id=\"yearList\">\r\n            <div class=\"date-item\" v-for=\"yearItem in library.year\" track-by=\"$index\" @click=\"setYear(yearItem)\">{{yearItem}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"cov-date-box list-box\" v-if=\"showInfo.month\">\r\n          <div class=\"cov-picker-box date-list\">\r\n            <div class=\"date-item\" v-for=\"monthItem in innerMonth\" track-by=\"$index\" @click=\"setMonth(monthItem)\">{{monthItem}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"cov-date-box list-box\" v-if=\"showInfo.hour\">\r\n          <div class=\"cov-picker-box date-list\">\r\n            <div class=\"watch-box\">\r\n              <div class=\"hour-box\">\r\n                <div class=\"mui-pciker-rule mui-pciker-rule-ft\"></div>\r\n                <ul>\r\n                  <li class=\"hour-item\" v-for=\"hitem in hours\" @click=\"setTime('hour', hitem, hours)\" :class=\"{'active':hitem.checked}\">{{hitem.value}}</li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"min-box\">\r\n                <div class=\"mui-pciker-rule mui-pciker-rule-ft\"></div>\r\n                <div class=\"min-item\" v-for=\"mitem in mins\" @click=\"setTime('min',mitem, mins)\" :class=\"{'active':mitem.checked}\">{{mitem.value}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"button-box\">\r\n          <span @click=\"showInfo.check=false\">{{innerOption.buttons? innerOption.buttons.cancel : 'Cancel' }}</span>\r\n          <span @click=\"picked\">{{innerOption.buttons? innerOption.buttons.ok : 'Ok'}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n<script>\r\n  import moment from 'moment'\r\n  export default {\r\n    props: {\r\n      required: false,\r\n      time: {\r\n        type: String,\r\n        required: true\r\n      },\r\n      option: {\r\n        type: Object\r\n      },\r\n      limit: {\r\n        type: Array,\r\n        default () {\r\n          return []\r\n        }\r\n      }\r\n    },\r\n\r\n    ready() {},\r\n\r\n    computed: {\r\n      innerWeek() {\r\n        return this.innerOption.week;\r\n      },\r\n\r\n      innerMonth() {\r\n        return this.innerOption.month;\r\n      },\r\n\r\n      innerOption() {\r\n        return Object.assign({\r\n          hiddenInput: false,\r\n          type: 'day',\r\n          SundayFirst: false,\r\n          week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],\r\n          month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',\r\n            'October',\r\n            'November', 'December'\r\n          ],\r\n          format: 'YYYY-MM-DD',\r\n          color: {\r\n            checked: '#F50057',\r\n            header: '#3f51b5',\r\n            headerText: '#fff'\r\n          },\r\n          inputStyle: {\r\n            'display': 'inline-block',\r\n            'padding': '6px',\r\n            'line-height': '22px',\r\n            'font-size': '16px',\r\n            'border': '2px solid #fff',\r\n            'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',\r\n            'border-radius': '2px',\r\n            'color': '#5F5F5F'\r\n          },\r\n          placeholder: 'when?',\r\n          buttons: {\r\n            ok: 'OK',\r\n            cancel: 'Cancel'\r\n          },\r\n          overlayOpacity: 0.5,\r\n          dismissible: true\r\n        }, this.option)\r\n      }\r\n    },\r\n\r\n    data() {\r\n      function hours() {\r\n        let list = []\r\n        let hour = 24\r\n        while (hour > 0) {\r\n          hour--\r\n          list.push({\r\n            checked: false,\r\n            value: hour < 10 ? '0' + hour : hour\r\n          })\r\n        }\r\n        return list\r\n      }\r\n\r\n\r\n\r\n      function mins() {\r\n        let list = []\r\n        let min = 60\r\n        while (min > 0) {\r\n          min--\r\n          list.push({\r\n            checked: false,\r\n            value: min < 10 ? '0' + min : min\r\n          })\r\n        }\r\n\r\n        this;\r\n\r\n        return list\r\n      }\r\n      return {\r\n        hours: hours(),\r\n        mins: mins(),\r\n        showInfo: {\r\n          hour: false,\r\n          day: false,\r\n          month: false,\r\n          year: false,\r\n          check: false\r\n        },\r\n        displayInfo: {\r\n          month: ''\r\n        },\r\n        library: {\r\n          year: []\r\n        },\r\n        checked: {\r\n          oldtime: '',\r\n          currentMoment: null,\r\n          year: '',\r\n          month: '',\r\n          day: '',\r\n          hour: '00',\r\n          min: '00'\r\n        },\r\n        dayList: [],\r\n        selectedDays: []\r\n      }\r\n    },\r\n    methods: {\r\n      pad(n) {\r\n        n = Math.floor(n)\r\n        return n < 10 ? '0' + n : n\r\n      },\r\n      nextMonth(type) {\r\n        let next = null\r\n        type === 'next' ? next = moment(this.checked.currentMoment).add(1, 'M') : next = moment(this.checked.currentMoment)\r\n          .add(-1, 'M')\r\n        this.showDay(next)\r\n      },\r\n      showDay(time) {\r\n        if (time === undefined || !Date.parse(time)) {\r\n          this.checked.currentMoment = moment()\r\n        } else {\r\n          this.checked.currentMoment = moment(time, this.innerOption.format)\r\n        }\r\n        this.showOne('day')\r\n        this.checked.year = moment(this.checked.currentMoment).format('YYYY')\r\n        this.checked.month = moment(this.checked.currentMoment).format('MM')\r\n        this.checked.day = moment(this.checked.currentMoment).format('DD')\r\n        this.displayInfo.month = this.innerMonth[moment(this.checked.currentMoment).month()]\r\n        let days = []\r\n        let currentMoment = this.checked.currentMoment\r\n        let firstDay = moment(currentMoment).date(1).day()\r\n          // gettting previous and next month\r\n          // let currentMonth = moment(currentMoment)\r\n        let previousMonth = moment(currentMoment)\r\n        let nextMonth = moment(currentMoment)\r\n        nextMonth.add(1, 'months')\r\n        previousMonth.subtract(1, 'months')\r\n        let monthDays = moment(currentMoment).daysInMonth()\r\n        let oldtime = this.checked.oldtime\r\n        for (let i = 1; i <= monthDays; ++i) {\r\n          days.push({\r\n            value: i,\r\n            inMonth: true,\r\n            unavailable: false,\r\n            checked: false,\r\n            moment: moment(currentMoment).date(i)\r\n          })\r\n          if (i === Math.ceil(moment(currentMoment).format('D')) && moment(oldtime, this.innerOption.format).year() ===\r\n            moment(currentMoment).year() && moment(oldtime, this.innerOption.format).month() === moment(currentMoment).month()\r\n          ) {\r\n            days[i - 1].checked = true\r\n          }\r\n          this.checkBySelectDays(i, days)\r\n        }\r\n        if (firstDay === 0) firstDay = 7\r\n        for (let i = 0; i < firstDay - (this.innerOption.SundayFirst ? 0 : 1); i++) {\r\n          let passiveDay = {\r\n            value: previousMonth.daysInMonth() - (i),\r\n            inMonth: false,\r\n            action: 'previous',\r\n            unavailable: false,\r\n            checked: false,\r\n            moment: moment(currentMoment).date(1).subtract(i + 1, 'days')\r\n          }\r\n          days.unshift(passiveDay)\r\n        }\r\n        var passiveDaysAtFinal = 42 - days.length\r\n        for (let i = 1; i <= passiveDaysAtFinal; i++) {\r\n          let passiveDay = {\r\n            value: i,\r\n            inMonth: false,\r\n            action: 'next',\r\n            unavailable: false,\r\n            checked: false,\r\n            moment: moment(currentMoment).add(1, 'months').date(i)\r\n          }\r\n          days.push(passiveDay)\r\n        }\r\n\r\n        if (this.limit.length > 0) {\r\n          this.limit.forEach(li  => {\r\n              switch (li.type) {\r\n                case 'fromto':\r\n                  days = this.limitFromTo(li, days)\r\n                  break\r\n                case 'weekday':\r\n                  days = this.limitWeekDay(li, days)\r\n                  break\r\n              }\r\n          })\r\n        }\r\n\r\n        this.dayList = days\r\n      },\r\n      checkBySelectDays(d, days) {\r\n        this.selectedDays.forEach(day => {\r\n          if (this.checked.year === moment(day).format('YYYY') && this.checked.month === moment(day).format('MM') &&\r\n            d === Math.ceil(moment(day).format('D'))) {\r\n            days[d - 1].checked = true\r\n          }\r\n        })\r\n      },\r\n      limitWeekDay(limit, days) {\r\n        days.map((day) => {\r\n          if (limit.available.indexOf(Math.floor(day.moment.format('d'))) === -1) {\r\n            day.unavailable = true\r\n          }\r\n        })\r\n        return days\r\n      },\r\n      limitFromTo(limit, days) {\r\n        if (limit.from || limit.to) {\r\n          days.map((day) => {\r\n            if (this.getLimitCondition(limit, day)) {\r\n              day.unavailable = true\r\n            }\r\n          })\r\n        }\r\n        return days\r\n      },\r\n      getLimitCondition(limit, day) {\r\n        let tmpMoment = day.moment\r\n        if (limit.from && !limit.to) {\r\n          return !tmpMoment.isAfter(limit.from)\r\n        } else if (!limit.from && limit.to) {\r\n          return !tmpMoment.isBefore(limit.to)\r\n        } else {\r\n          return !tmpMoment.isBetween(limit.from, limit.to, null, '[]')\r\n        }\r\n      },\r\n      checkDay(obj) {\r\n        if (obj.unavailable || obj.value === '') {\r\n          return false\r\n        }\r\n        if (!(obj.inMonth)) {\r\n          this.nextMonth(obj.action)\r\n        }\r\n        if (this.innerOption.type === 'day' || this.innerOption.type === 'min') {\r\n          this.dayList.forEach((x) => {\r\n            x.checked = false\r\n          })\r\n          this.checked.day = this.pad(obj.value)\r\n          obj.checked = true\r\n        } else {\r\n          let day = this.pad(obj.value)\r\n          let ctime = this.checked.year + '-' + this.checked.month + '-' + day\r\n          if (obj.checked === true) {\r\n            obj.checked = false\r\n            this.selectedDays.$remove(ctime)\r\n          } else {\r\n            this.selectedDays.push(ctime)\r\n            obj.checked = true\r\n          }\r\n        }\r\n        switch (this.innerOption.type) {\r\n          case 'day':\r\n            this.picked()\r\n            break\r\n          case 'min':\r\n            this.showOne('hour')\r\n              // shift activated time items to visible position.\r\n            this.shiftActTime()\r\n            break\r\n        }\r\n      },\r\n      showYear() {\r\n        let year = moment(this.checked.currentMoment).year()\r\n        this.library.year = []\r\n        let yearTmp = []\r\n        for (let i = year - 100; i < year + 5; ++i) {\r\n          yearTmp.push(i)\r\n        }\r\n        this.library.year = yearTmp\r\n        this.showOne('year')\r\n        this.$nextTick(() => {\r\n          let listDom = document.getElementById('yearList')\r\n          listDom.scrollTop = (listDom.scrollHeight - 100)\r\n          this.addYear()\r\n        })\r\n      },\r\n      showOne(type) {\r\n        switch (type) {\r\n          case 'year':\r\n            this.showInfo.hour = false\r\n            this.showInfo.day = false\r\n            this.showInfo.year = true\r\n            this.showInfo.month = false\r\n            break\r\n          case 'month':\r\n            this.showInfo.hour = false\r\n            this.showInfo.day = false\r\n            this.showInfo.year = false\r\n            this.showInfo.month = true\r\n            break\r\n          case 'day':\r\n            this.showInfo.hour = false\r\n            this.showInfo.day = true\r\n            this.showInfo.year = false\r\n            this.showInfo.month = false\r\n            break\r\n          case 'hour':\r\n            this.showInfo.hour = true\r\n            this.showInfo.day = false\r\n            this.showInfo.year = false\r\n            this.showInfo.month = false\r\n            break\r\n          default:\r\n            this.showInfo.day = true\r\n            this.showInfo.year = false\r\n            this.showInfo.month = false\r\n            this.showInfo.hour = false\r\n        }\r\n      },\r\n      showMonth() {\r\n        this.showOne('month')\r\n      },\r\n      addYear() {\r\n        let listDom = document.getElementById('yearList')\r\n        listDom.addEventListener('scroll', (e) => {\r\n          if (listDom.scrollTop < listDom.scrollHeight - 100) {\r\n            let len = this.library.year.length\r\n            let lastYear = this.library.year[len - 1]\r\n            this.library.year.push(lastYear + 1)\r\n          }\r\n        }, false)\r\n      },\r\n      setYear(year) {\r\n        this.checked.currentMoment = moment(year + '-' + this.checked.month + '-' + this.checked.day)\r\n        this.showDay(this.checked.currentMoment)\r\n      },\r\n      setMonth(month) {\r\n        let mo = (this.innerMonth.indexOf(month) + 1)\r\n        if (mo < 10) {\r\n          mo = '0' + '' + mo\r\n        }\r\n        this.checked.currentMoment = moment(this.checked.year + '-' + mo + '-' + this.checked.day)\r\n        this.showDay(this.checked.currentMoment)\r\n      },\r\n      showCheck() {\r\n        if (this.time === '') {\r\n          this.showDay()\r\n        } else {\r\n          if (this.innerOption.type === 'day' || this.innerOption.type === 'min') {\r\n            this.checked.oldtime = this.time\r\n            this.showDay(this.time)\r\n          } else {\r\n            this.selectedDays = JSON.parse(this.time)\r\n            if (this.selectedDays.length) {\r\n              this.checked.oldtime = this.selectedDays[0]\r\n              this.showDay(this.selectedDays[0])\r\n            } else {\r\n              this.showDay()\r\n            }\r\n          }\r\n        }\r\n        this.showInfo.check = true\r\n      },\r\n      setTime(type, obj, list) {\r\n        for (let item of list) {\r\n          item.checked = false\r\n          if (item.value === obj.value) {\r\n            item.checked = true\r\n            this.checked[type] = item.value\r\n          }\r\n        }\r\n      },\r\n      picked() {\r\n        if (this.innerOption.type === 'day' || this.innerOption.type === 'min') {\r\n          let ctime = this.checked.year + '-' + this.checked.month + '-' + this.checked.day + ' ' + this.checked.hour +\r\n            ':' + this.checked.min\r\n          this.checked.currentMoment = moment(ctime, 'YYYY-MM-DD HH:mm')\r\n          this.time = moment(this.checked.currentMoment).format(this.innerOption.format)\r\n        } else {\r\n          this.time = JSON.stringify(this.selectedDays)\r\n        }\r\n        this.showInfo.check = false\r\n        this.$emit('change', this.time)\r\n      },\r\n      dismiss(evt) {\r\n        if (evt.target.className === 'datepicker-overlay') {\r\n          if (this.innerOption.dismissible === undefined || this.innerOption.dismissible) {\r\n            this.showInfo.check = false\r\n            this.$emit('cancel')\r\n          }\r\n        }\r\n      },\r\n      shiftActTime() {\r\n        // shift activated time items to visible position.\r\n        this.$nextTick(() => {\r\n          if (!document.querySelector('.hour-item.active')) {\r\n            return false\r\n          }\r\n          document.querySelector('.hour-box').scrollTop = (document.querySelector('.hour-item.active').offsetTop ||\r\n            0) - 250\r\n          document.querySelector('.min-box').scrollTop = (document.querySelector('.min-item.active').offsetTop || 0) -\r\n            250\r\n        })\r\n      }\r\n    }\r\n  }\r\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // <style scoped>
	//   .datepicker-overlay {
	//     position: fixed;
	//     width: 100%;
	//     height: 100vh;
	//     z-index: 998;
	//     top: 0;
	//     left: 0;
	//     overflow: hidden;
	//     -webkit-animation: fadein 0.5s;
	//     /* Safari, Chrome and Opera > 12.1 */
	//     -moz-animation: fadein 0.5s;
	//     /* Firefox < 16 */
	//     -ms-animation: fadein 0.5s;
	//     /* Internet Explorer */
	//     -o-animation: fadein 0.5s;
	//     /* Opera < 12.1 */
	//     animation: fadein 0.5s;
	//   }
	//
	//   @keyframes fadein {
	//     from {
	//       opacity: 0;
	//     }
	//     to {
	//       opacity: 1;
	//     }
	//   }
	//   /* Firefox < 16 */
	//
	//   @-moz-keyframes fadein {
	//     from {
	//       opacity: 0;
	//     }
	//     to {
	//       opacity: 1;
	//     }
	//   }
	//   /* Safari, Chrome and Opera > 12.1 */
	//
	//   @-webkit-keyframes fadein {
	//     from {
	//       opacity: 0;
	//     }
	//     to {
	//       opacity: 1;
	//     }
	//   }
	//   /* Internet Explorer */
	//
	//   @-ms-keyframes fadein {
	//     from {
	//       opacity: 0;
	//     }
	//     to {
	//       opacity: 1;
	//     }
	//   }
	//   /* Opera < 12.1 */
	//
	//   @-o-keyframes fadein {
	//     from {
	//       opacity: 0;
	//     }
	//     to {
	//       opacity: 1;
	//     }
	//   }
	//
	//   .cov-date-body {
	//     display: inline-block;
	//     background: #3F51B5;
	//     overflow: hidden;
	//     position: relative;
	//     position: fixed;
	//     display: block;
	//     width: 24em;
	//     max-width: 100%;
	//     z-index: 999;
	//     top: 50%;
	//     left: 50%;
	//     -webkit-transform: translate(-50%, -50%);
	//     -ms-transform: translate(-50%, -50%);
	//     transform: translate(-50%, -50%);
	//     box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
	//     -webkit-overflow-scrolling: touch;
	//   }
	//
	//   .cov-picker-box {
	//     background: #fff;
	//     width: 100%;
	//     display: inline-block;
	//     padding: 1em;
	//     box-sizing: border-box !important;
	//     -moz-box-sizing: border-box !important;
	//     -webkit-box-sizing: border-box !important;
	//     -ms-box-sizing: border-box !important;
	//     max-width: 100%;
	//     text-align: start!important;
	//     line-height: 1em;
	//     height: 20em;
	//     max-height: 20em;
	//     -webkit-overflow-scrolling: touch;
	//     overflow:scroll;
	//     z-index:1;
	//   }
	//
	//   .cov-picker-box.list-box {
	//     overflow-y: scroll;
	//   }
	//
	//   .cov-picker-box td {
	//     height: 2em;
	//     width: 2em;
	//     padding: 0;
	//     line-height: 2em;
	//     color: #000;
	//     background: #fff;
	//     text-align: center;
	//     cursor: pointer;
	//   }
	//
	//   .cov-picker-box td:hover {
	//     background: #E6E6E6;
	//   }
	//
	//   table {
	//     border-collapse: collapse;
	//     border-spacing: 0;
	//     width: 100%;
	//   }
	//
	//   .day {
	//     width: 14.2857143%;
	//     display: inline-block;
	//     text-align: center;
	//     cursor: pointer;
	//     line-height: 1em;
	//     color: #000;
	//     background: #fff;
	//     vertical-align: middle;
	//     padding: 0.5em;
	//   }
	//
	//   .week ul {
	//     padding: 0;
	//     list-style: none;
	//   }
	//
	//   .week ul li {
	//     width: 14.2%;
	//     display: inline-block;
	//     text-align: center;
	//     background: transparent;
	//     color: #000;
	//     line-height: 1;
	//     font-weight: bold;
	//     padding: 0.5em;
	//   }
	//
	//   .passive-day {
	//     color: #bbb;
	//   }
	//
	//   .checked {
	//     background: #F50057;
	//     color: #FFF !important;
	//     border-radius: 3px;
	//   }
	//
	//   .unavailable {
	//     color: #ccc;
	//     cursor: not-allowed;
	//   }
	//
	//   .cov-date-monthly {
	//     padding: 0;
	//   }
	//
	//   .cov-date-monthly:before,
	//   .cov-date-monthly:after {
	//     content: " ";
	//     display: table;
	//     clear: both;
	//   }
	//
	//   .cov-date-monthly>div {
	//     display: inline-block;
	//     padding: 0;
	//     margin: 0;
	//     vertical-align: middle;
	//     color: #fff;
	//     float: left;
	//     text-align: center;
	//     cursor: pointer;
	//   }
	//
	//   .cov-date-previous,
	//   .cov-date-next {
	//     position: relative;
	//     width: 20% !important;
	//     text-indent: -300px;
	//     overflow: hidden;
	//     color: #fff;
	//     height: 5em;
	//   }
	//
	//   .cov-date-caption {
	//     width: 60%;
	//     padding: 0.5em 0!important;
	//     box-sizing: border-box;
	//     font-size: 1.5em;
	//     line-height: 1;
	//   }
	//
	//   .cov-date-caption span:hover {
	//     color: rgba(255, 255, 255, 0.7);
	//   }
	//
	//   .cov-date-previous:hover,
	//   .cov-date-next:hover {
	//     background: rgba(255, 255, 255, 0.1);
	//   }
	//
	//   .day:hover {
	//     background: #EAEAEA;
	//   }
	//
	//   .unavailable:hover {
	//     background: none;
	//   }
	//
	//   .checked:hover {
	//     background: #FF4F8E;
	//   }
	//
	//   .cov-date-next::before,
	//   .cov-date-previous::before {
	//     width: 20px;
	//     height: 2px;
	//     text-align: center;
	//     position: absolute;
	//     background: #fff;
	//     top: 50%;
	//     margin-top: -7px;
	//     margin-left: -7px;
	//     left: 50%;
	//     line-height: 0;
	//     content: '';
	//     -webkit-transform: rotate(45deg);
	//     -moz-transform: rotate(45deg);
	//     transform: rotate(45deg);
	//   }
	//
	//   .cov-date-next::after,
	//   .cov-date-previous::after {
	//     width: 20px;
	//     height: 2px;
	//     text-align: center;
	//     position: absolute;
	//     background: #fff;
	//     margin-top: 6px;
	//     margin-left: -7px;
	//     top: 50%;
	//     left: 50%;
	//     line-height: 0;
	//     content: '';
	//     -webkit-transform: rotate(-45deg);
	//     -moz-transform: rotate(-45deg);
	//     transform: rotate(-45deg);
	//   }
	//
	//   .cov-date-previous::after {
	//     -webkit-transform: rotate(45deg);
	//     -moz-transform: rotate(45deg);
	//     transform: rotate(45deg);
	//   }
	//
	//   .cov-date-previous::before {
	//     -webkit-transform: rotate(-45deg);
	//     -moz-transform: rotate(-45deg);
	//     transform: rotate(-45deg);
	//   }
	//
	//   .date-item {
	//     text-align: center;
	//     padding: 0.5em 0;
	//     cursor: pointer;
	//   }
	//
	//   .date-item:hover {
	//     background: #e0e0e0;
	//   }
	//
	//   .date-list {
	//     overflow: auto;
	//     vertical-align: top;
	//     padding: 0;
	//   }
	//
	//   .cov-vue-date {
	//     display: inline-block;
	//     color: #5D5D5D;
	//   }
	//
	//   .button-box {
	//     background: #fff;
	//     vertical-align: top;
	//     text-align: right;
	//     padding: 1em;
	//   }
	//
	//   .button-box span {
	//     cursor: pointer;
	//     padding: 0 1em;
	//   }
	//
	//   .watch-box {
	//     height: 100%;
	//     overflow: hidden;
	//   }
	//
	//   .hour-box,
	//   .min-box {
	//     display: inline-block;
	//     width: 50%;
	//     text-align: center;
	//     max-height: 20em;
	//     overflow: auto;
	//     float: left;
	//   }
	//
	//   .hour-box ul,
	//   .min-box ul {
	//     list-style: none;
	//     margin: 0;
	//     padding: 0;
	//   }
	//
	//   .hour-item,
	//   .min-item {
	//     padding: 0.5em;
	//     font-size: 1.5em;
	//     cursor: pointer;
	//   }
	//
	//   .hour-item:hover,
	//   .min-item:hover {
	//     background: #E3E3E3;
	//   }
	//
	//   .hour-box .active,
	//   .min-box .active {
	//     background: #F50057;
	//     color: #FFF !important;
	//   }
	//
	//    ::-webkit-scrollbar {
	//     width: 2px;
	//   }
	//
	//    ::-webkit-scrollbar-track {
	//     background: #E3E3E3;
	//   }
	//
	//    ::-webkit-scrollbar-thumb {
	//     background: #C1C1C1;
	//     border-radius: 2px;
	//   }
	// </style>
	// <template>
	//   <div class="cov-vue-date">
	//     <div v-if="!innerOption.hiddenInput" class="datepickbox">
	//       <input type="text" title="input date" class="cov-datepicker" readonly="readonly" :placeholder="innerOption.placeholder" v-model="time"
	//         :required="required" @click="showCheck" @foucus="showCheck" :style="innerOption.inputStyle" />
	//     </div>
	//     <div class="datepicker-overlay" v-if="showInfo.check" @click="dismiss($event)" v-bind:style="{'background' : innerOption.overlayOpacity? 'rgba(0,0,0,'+innerOption.overlayOpacity+')' : 'rgba(0,0,0,0.5)'}">
	//       <div class="cov-date-body" :style="{'background-color': innerOption.color ? innerOption.color.header : '#3f51b5'}">
	//         <div class="cov-date-monthly">
	//           <div class="cov-date-previous" @click="nextMonth('pre')">«</div>
	//           <div class="cov-date-caption" :style="{'color': innerOption.color ? innerOption.color.headerText : '#fff'}">
	//             <span @click="showYear"><small>{{checked.year}}</small></span>
	//             <br>
	//             <span @click="showMonth">{{displayInfo.month}}</span>
	//           </div>
	//           <div class="cov-date-next" @click="nextMonth('next')">»</div>
	//         </div>
	//         <div class="cov-date-box" v-if="showInfo.day">
	//           <div class="cov-picker-box">
	//             <div class="week">
	//               <ul>
	//                 <li v-for="weekie in innerWeek">{{weekie}}</li>
	//               </ul>
	//             </div>
	//             <div class="day" v-for="day in dayList" track-by="$index" @click="checkDay(day)" :class="{'checked':day.checked,'unavailable':day.unavailable,'passive-day': !(day.inMonth)}"
	//               :style="day.checked ? (innerOption.color && innerOption.color.checkedDay ? { background: innerOption.color.checkedDay } : { background: '#F50057' }) : {}">{{day.value}}</div>
	//           </div>
	//         </div>
	//         <div class="cov-date-box list-box" v-if="showInfo.year">
	//           <div class="cov-picker-box date-list" id="yearList">
	//             <div class="date-item" v-for="yearItem in library.year" track-by="$index" @click="setYear(yearItem)">{{yearItem}}</div>
	//           </div>
	//         </div>
	//         <div class="cov-date-box list-box" v-if="showInfo.month">
	//           <div class="cov-picker-box date-list">
	//             <div class="date-item" v-for="monthItem in innerMonth" track-by="$index" @click="setMonth(monthItem)">{{monthItem}}</div>
	//           </div>
	//         </div>
	//         <div class="cov-date-box list-box" v-if="showInfo.hour">
	//           <div class="cov-picker-box date-list">
	//             <div class="watch-box">
	//               <div class="hour-box">
	//                 <div class="mui-pciker-rule mui-pciker-rule-ft"></div>
	//                 <ul>
	//                   <li class="hour-item" v-for="hitem in hours" @click="setTime('hour', hitem, hours)" :class="{'active':hitem.checked}">{{hitem.value}}</li>
	//                 </ul>
	//               </div>
	//               <div class="min-box">
	//                 <div class="mui-pciker-rule mui-pciker-rule-ft"></div>
	//                 <div class="min-item" v-for="mitem in mins" @click="setTime('min',mitem, mins)" :class="{'active':mitem.checked}">{{mitem.value}}</div>
	//               </div>
	//             </div>
	//           </div>
	//         </div>
	//         <div class="button-box">
	//           <span @click="showInfo.check=false">{{innerOption.buttons? innerOption.buttons.cancel : 'Cancel' }}</span>
	//           <span @click="picked">{{innerOption.buttons? innerOption.buttons.ok : 'Ok'}}</span>
	//         </div>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	// <script>
	
	
	var _moment = __webpack_require__(7);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    required: false,
	    time: {
	      type: String,
	      required: true
	    },
	    option: {
	      type: Object
	    },
	    limit: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    }
	  },
	
	  ready: function ready() {},
	
	
	  computed: {
	    innerWeek: function innerWeek() {
	      return this.innerOption.week;
	    },
	    innerMonth: function innerMonth() {
	      return this.innerOption.month;
	    },
	    innerOption: function innerOption() {
	      return _extends({
	        hiddenInput: false,
	        type: 'day',
	        SundayFirst: false,
	        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
	        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	        format: 'YYYY-MM-DD',
	        color: {
	          checked: '#F50057',
	          header: '#3f51b5',
	          headerText: '#fff'
	        },
	        inputStyle: {
	          'display': 'inline-block',
	          'padding': '6px',
	          'line-height': '22px',
	          'font-size': '16px',
	          'border': '2px solid #fff',
	          'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
	          'border-radius': '2px',
	          'color': '#5F5F5F'
	        },
	        placeholder: 'when?',
	        buttons: {
	          ok: 'OK',
	          cancel: 'Cancel'
	        },
	        overlayOpacity: 0.5,
	        dismissible: true
	      }, this.option);
	    }
	  },
	
	  data: function data() {
	    function hours() {
	      var list = [];
	      var hour = 24;
	      while (hour > 0) {
	        hour--;
	        list.push({
	          checked: false,
	          value: hour < 10 ? '0' + hour : hour
	        });
	      }
	      return list;
	    }
	
	    function mins() {
	      var list = [];
	      var min = 60;
	      while (min > 0) {
	        min--;
	        list.push({
	          checked: false,
	          value: min < 10 ? '0' + min : min
	        });
	      }
	
	      this;
	
	      return list;
	    }
	    return {
	      hours: hours(),
	      mins: mins(),
	      showInfo: {
	        hour: false,
	        day: false,
	        month: false,
	        year: false,
	        check: false
	      },
	      displayInfo: {
	        month: ''
	      },
	      library: {
	        year: []
	      },
	      checked: {
	        oldtime: '',
	        currentMoment: null,
	        year: '',
	        month: '',
	        day: '',
	        hour: '00',
	        min: '00'
	      },
	      dayList: [],
	      selectedDays: []
	    };
	  },
	
	  methods: {
	    pad: function pad(n) {
	      n = Math.floor(n);
	      return n < 10 ? '0' + n : n;
	    },
	    nextMonth: function nextMonth(type) {
	      var next = null;
	      type === 'next' ? next = (0, _moment2.default)(this.checked.currentMoment).add(1, 'M') : next = (0, _moment2.default)(this.checked.currentMoment).add(-1, 'M');
	      this.showDay(next);
	    },
	    showDay: function showDay(time) {
	      var _this = this;
	
	      if (time === undefined || !Date.parse(time)) {
	        this.checked.currentMoment = (0, _moment2.default)();
	      } else {
	        this.checked.currentMoment = (0, _moment2.default)(time, this.innerOption.format);
	      }
	      this.showOne('day');
	      this.checked.year = (0, _moment2.default)(this.checked.currentMoment).format('YYYY');
	      this.checked.month = (0, _moment2.default)(this.checked.currentMoment).format('MM');
	      this.checked.day = (0, _moment2.default)(this.checked.currentMoment).format('DD');
	      this.displayInfo.month = this.innerMonth[(0, _moment2.default)(this.checked.currentMoment).month()];
	      var days = [];
	      var currentMoment = this.checked.currentMoment;
	      var firstDay = (0, _moment2.default)(currentMoment).date(1).day();
	      // gettting previous and next month
	      // let currentMonth = moment(currentMoment)
	      var previousMonth = (0, _moment2.default)(currentMoment);
	      var nextMonth = (0, _moment2.default)(currentMoment);
	      nextMonth.add(1, 'months');
	      previousMonth.subtract(1, 'months');
	      var monthDays = (0, _moment2.default)(currentMoment).daysInMonth();
	      var oldtime = this.checked.oldtime;
	      for (var i = 1; i <= monthDays; ++i) {
	        days.push({
	          value: i,
	          inMonth: true,
	          unavailable: false,
	          checked: false,
	          moment: (0, _moment2.default)(currentMoment).date(i)
	        });
	        if (i === Math.ceil((0, _moment2.default)(currentMoment).format('D')) && (0, _moment2.default)(oldtime, this.innerOption.format).year() === (0, _moment2.default)(currentMoment).year() && (0, _moment2.default)(oldtime, this.innerOption.format).month() === (0, _moment2.default)(currentMoment).month()) {
	          days[i - 1].checked = true;
	        }
	        this.checkBySelectDays(i, days);
	      }
	      if (firstDay === 0) firstDay = 7;
	      for (var _i = 0; _i < firstDay - (this.innerOption.SundayFirst ? 0 : 1); _i++) {
	        var passiveDay = {
	          value: previousMonth.daysInMonth() - _i,
	          inMonth: false,
	          action: 'previous',
	          unavailable: false,
	          checked: false,
	          moment: (0, _moment2.default)(currentMoment).date(1).subtract(_i + 1, 'days')
	        };
	        days.unshift(passiveDay);
	      }
	      var passiveDaysAtFinal = 42 - days.length;
	      for (var _i2 = 1; _i2 <= passiveDaysAtFinal; _i2++) {
	        var _passiveDay = {
	          value: _i2,
	          inMonth: false,
	          action: 'next',
	          unavailable: false,
	          checked: false,
	          moment: (0, _moment2.default)(currentMoment).add(1, 'months').date(_i2)
	        };
	        days.push(_passiveDay);
	      }
	
	      if (this.limit.length > 0) {
	        this.limit.forEach(function (li) {
	          switch (li.type) {
	            case 'fromto':
	              days = _this.limitFromTo(li, days);
	              break;
	            case 'weekday':
	              days = _this.limitWeekDay(li, days);
	              break;
	          }
	        });
	      }
	
	      this.dayList = days;
	    },
	    checkBySelectDays: function checkBySelectDays(d, days) {
	      var _this2 = this;
	
	      this.selectedDays.forEach(function (day) {
	        if (_this2.checked.year === (0, _moment2.default)(day).format('YYYY') && _this2.checked.month === (0, _moment2.default)(day).format('MM') && d === Math.ceil((0, _moment2.default)(day).format('D'))) {
	          days[d - 1].checked = true;
	        }
	      });
	    },
	    limitWeekDay: function limitWeekDay(limit, days) {
	      days.map(function (day) {
	        if (limit.available.indexOf(Math.floor(day.moment.format('d'))) === -1) {
	          day.unavailable = true;
	        }
	      });
	      return days;
	    },
	    limitFromTo: function limitFromTo(limit, days) {
	      var _this3 = this;
	
	      if (limit.from || limit.to) {
	        days.map(function (day) {
	          if (_this3.getLimitCondition(limit, day)) {
	            day.unavailable = true;
	          }
	        });
	      }
	      return days;
	    },
	    getLimitCondition: function getLimitCondition(limit, day) {
	      var tmpMoment = day.moment;
	      if (limit.from && !limit.to) {
	        return !tmpMoment.isAfter(limit.from);
	      } else if (!limit.from && limit.to) {
	        return !tmpMoment.isBefore(limit.to);
	      } else {
	        return !tmpMoment.isBetween(limit.from, limit.to, null, '[]');
	      }
	    },
	    checkDay: function checkDay(obj) {
	      if (obj.unavailable || obj.value === '') {
	        return false;
	      }
	      if (!obj.inMonth) {
	        this.nextMonth(obj.action);
	      }
	      if (this.innerOption.type === 'day' || this.innerOption.type === 'min') {
	        this.dayList.forEach(function (x) {
	          x.checked = false;
	        });
	        this.checked.day = this.pad(obj.value);
	        obj.checked = true;
	      } else {
	        var day = this.pad(obj.value);
	        var ctime = this.checked.year + '-' + this.checked.month + '-' + day;
	        if (obj.checked === true) {
	          obj.checked = false;
	          this.selectedDays.$remove(ctime);
	        } else {
	          this.selectedDays.push(ctime);
	          obj.checked = true;
	        }
	      }
	      switch (this.innerOption.type) {
	        case 'day':
	          this.picked();
	          break;
	        case 'min':
	          this.showOne('hour');
	          // shift activated time items to visible position.
	          this.shiftActTime();
	          break;
	      }
	    },
	    showYear: function showYear() {
	      var _this4 = this;
	
	      var year = (0, _moment2.default)(this.checked.currentMoment).year();
	      this.library.year = [];
	      var yearTmp = [];
	      for (var i = year - 100; i < year + 5; ++i) {
	        yearTmp.push(i);
	      }
	      this.library.year = yearTmp;
	      this.showOne('year');
	      this.$nextTick(function () {
	        var listDom = document.getElementById('yearList');
	        listDom.scrollTop = listDom.scrollHeight - 100;
	        _this4.addYear();
	      });
	    },
	    showOne: function showOne(type) {
	      switch (type) {
	        case 'year':
	          this.showInfo.hour = false;
	          this.showInfo.day = false;
	          this.showInfo.year = true;
	          this.showInfo.month = false;
	          break;
	        case 'month':
	          this.showInfo.hour = false;
	          this.showInfo.day = false;
	          this.showInfo.year = false;
	          this.showInfo.month = true;
	          break;
	        case 'day':
	          this.showInfo.hour = false;
	          this.showInfo.day = true;
	          this.showInfo.year = false;
	          this.showInfo.month = false;
	          break;
	        case 'hour':
	          this.showInfo.hour = true;
	          this.showInfo.day = false;
	          this.showInfo.year = false;
	          this.showInfo.month = false;
	          break;
	        default:
	          this.showInfo.day = true;
	          this.showInfo.year = false;
	          this.showInfo.month = false;
	          this.showInfo.hour = false;
	      }
	    },
	    showMonth: function showMonth() {
	      this.showOne('month');
	    },
	    addYear: function addYear() {
	      var _this5 = this;
	
	      var listDom = document.getElementById('yearList');
	      listDom.addEventListener('scroll', function (e) {
	        if (listDom.scrollTop < listDom.scrollHeight - 100) {
	          var len = _this5.library.year.length;
	          var lastYear = _this5.library.year[len - 1];
	          _this5.library.year.push(lastYear + 1);
	        }
	      }, false);
	    },
	    setYear: function setYear(year) {
	      this.checked.currentMoment = (0, _moment2.default)(year + '-' + this.checked.month + '-' + this.checked.day);
	      this.showDay(this.checked.currentMoment);
	    },
	    setMonth: function setMonth(month) {
	      var mo = this.innerMonth.indexOf(month) + 1;
	      if (mo < 10) {
	        mo = '0' + '' + mo;
	      }
	      this.checked.currentMoment = (0, _moment2.default)(this.checked.year + '-' + mo + '-' + this.checked.day);
	      this.showDay(this.checked.currentMoment);
	    },
	    showCheck: function showCheck() {
	      if (this.time === '') {
	        this.showDay();
	      } else {
	        if (this.innerOption.type === 'day' || this.innerOption.type === 'min') {
	          this.checked.oldtime = this.time;
	          this.showDay(this.time);
	        } else {
	          this.selectedDays = JSON.parse(this.time);
	          if (this.selectedDays.length) {
	            this.checked.oldtime = this.selectedDays[0];
	            this.showDay(this.selectedDays[0]);
	          } else {
	            this.showDay();
	          }
	        }
	      }
	      this.showInfo.check = true;
	    },
	    setTime: function setTime(type, obj, list) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var item = _step.value;
	
	          item.checked = false;
	          if (item.value === obj.value) {
	            item.checked = true;
	            this.checked[type] = item.value;
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    },
	    picked: function picked() {
	      if (this.innerOption.type === 'day' || this.innerOption.type === 'min') {
	        var ctime = this.checked.year + '-' + this.checked.month + '-' + this.checked.day + ' ' + this.checked.hour + ':' + this.checked.min;
	        this.checked.currentMoment = (0, _moment2.default)(ctime, 'YYYY-MM-DD HH:mm');
	        this.time = (0, _moment2.default)(this.checked.currentMoment).format(this.innerOption.format);
	      } else {
	        this.time = JSON.stringify(this.selectedDays);
	      }
	      this.showInfo.check = false;
	      this.$emit('change', this.time);
	    },
	    dismiss: function dismiss(evt) {
	      if (evt.target.className === 'datepicker-overlay') {
	        if (this.innerOption.dismissible === undefined || this.innerOption.dismissible) {
	          this.showInfo.check = false;
	          this.$emit('cancel');
	        }
	      }
	    },
	    shiftActTime: function shiftActTime() {
	      // shift activated time items to visible position.
	      this.$nextTick(function () {
	        if (!document.querySelector('.hour-item.active')) {
	          return false;
	        }
	        document.querySelector('.hour-box').scrollTop = (document.querySelector('.hour-item.active').offsetTop || 0) - 250;
	        document.querySelector('.min-box').scrollTop = (document.querySelector('.min-item.active').offsetTop || 0) - 250;
	      });
	    }
	  }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"cov-vue-date\" _v-204da304=\"\">\n  <div v-if=\"!innerOption.hiddenInput\" class=\"datepickbox\" _v-204da304=\"\">\n    <input type=\"text\" title=\"input date\" class=\"cov-datepicker\" readonly=\"readonly\" :placeholder=\"innerOption.placeholder\" v-model=\"time\" :required=\"required\" @click=\"showCheck\" @foucus=\"showCheck\" :style=\"innerOption.inputStyle\" _v-204da304=\"\">\n  </div>\n  <div class=\"datepicker-overlay\" v-if=\"showInfo.check\" @click=\"dismiss($event)\" v-bind:style=\"{'background' : innerOption.overlayOpacity? 'rgba(0,0,0,'+innerOption.overlayOpacity+')' : 'rgba(0,0,0,0.5)'}\" _v-204da304=\"\">\n    <div class=\"cov-date-body\" :style=\"{'background-color': innerOption.color ? innerOption.color.header : '#3f51b5'}\" _v-204da304=\"\">\n      <div class=\"cov-date-monthly\" _v-204da304=\"\">\n        <div class=\"cov-date-previous\" @click=\"nextMonth('pre')\" _v-204da304=\"\">«</div>\n        <div class=\"cov-date-caption\" :style=\"{'color': innerOption.color ? innerOption.color.headerText : '#fff'}\" _v-204da304=\"\">\n          <span @click=\"showYear\" _v-204da304=\"\"><small _v-204da304=\"\">{{checked.year}}</small></span>\n          <br _v-204da304=\"\">\n          <span @click=\"showMonth\" _v-204da304=\"\">{{displayInfo.month}}</span>\n        </div>\n        <div class=\"cov-date-next\" @click=\"nextMonth('next')\" _v-204da304=\"\">»</div>\n      </div>\n      <div class=\"cov-date-box\" v-if=\"showInfo.day\" _v-204da304=\"\">\n        <div class=\"cov-picker-box\" _v-204da304=\"\">\n          <div class=\"week\" _v-204da304=\"\">\n            <ul _v-204da304=\"\">\n              <li v-for=\"weekie in innerWeek\" _v-204da304=\"\">{{weekie}}</li>\n            </ul>\n          </div>\n          <div class=\"day\" v-for=\"day in dayList\" track-by=\"$index\" @click=\"checkDay(day)\" :class=\"{'checked':day.checked,'unavailable':day.unavailable,'passive-day': !(day.inMonth)}\" :style=\"day.checked ? (innerOption.color &amp;&amp; innerOption.color.checkedDay ? { background: innerOption.color.checkedDay } : { background: '#F50057' }) : {}\" _v-204da304=\"\">{{day.value}}</div>\n        </div>\n      </div>\n      <div class=\"cov-date-box list-box\" v-if=\"showInfo.year\" _v-204da304=\"\">\n        <div class=\"cov-picker-box date-list\" id=\"yearList\" _v-204da304=\"\">\n          <div class=\"date-item\" v-for=\"yearItem in library.year\" track-by=\"$index\" @click=\"setYear(yearItem)\" _v-204da304=\"\">{{yearItem}}</div>\n        </div>\n      </div>\n      <div class=\"cov-date-box list-box\" v-if=\"showInfo.month\" _v-204da304=\"\">\n        <div class=\"cov-picker-box date-list\" _v-204da304=\"\">\n          <div class=\"date-item\" v-for=\"monthItem in innerMonth\" track-by=\"$index\" @click=\"setMonth(monthItem)\" _v-204da304=\"\">{{monthItem}}</div>\n        </div>\n      </div>\n      <div class=\"cov-date-box list-box\" v-if=\"showInfo.hour\" _v-204da304=\"\">\n        <div class=\"cov-picker-box date-list\" _v-204da304=\"\">\n          <div class=\"watch-box\" _v-204da304=\"\">\n            <div class=\"hour-box\" _v-204da304=\"\">\n              <div class=\"mui-pciker-rule mui-pciker-rule-ft\" _v-204da304=\"\"></div>\n              <ul _v-204da304=\"\">\n                <li class=\"hour-item\" v-for=\"hitem in hours\" @click=\"setTime('hour', hitem, hours)\" :class=\"{'active':hitem.checked}\" _v-204da304=\"\">{{hitem.value}}</li>\n              </ul>\n            </div>\n            <div class=\"min-box\" _v-204da304=\"\">\n              <div class=\"mui-pciker-rule mui-pciker-rule-ft\" _v-204da304=\"\"></div>\n              <div class=\"min-item\" v-for=\"mitem in mins\" @click=\"setTime('min',mitem, mins)\" :class=\"{'active':mitem.checked}\" _v-204da304=\"\">{{mitem.value}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"button-box\" _v-204da304=\"\">\n        <span @click=\"showInfo.check=false\" _v-204da304=\"\">{{innerOption.buttons? innerOption.buttons.cancel : 'Cancel' }}</span>\n        <span @click=\"picked\" _v-204da304=\"\">{{innerOption.buttons? innerOption.buttons.ok : 'Ok'}}</span>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-datepicker.js.map