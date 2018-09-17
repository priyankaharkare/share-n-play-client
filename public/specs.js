webpackJsonp([1],{

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Load all specs so webpack can find them. Think of this as an automatic
// manifest for bundling specs.

var req = __webpack_require__(50);
req.keys().forEach(req);

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./example.spec.js": 51
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 50;

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


describe('Example DOM test', function () {
  var myElement = document.getElementById('myDiv');

  it('has the right text', function () {
    myElement.innerHTML.should.equal('Hello World!');
  });
});

/***/ })

},[49]);