module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(4);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-regenerator-runtime");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _Contentful = __webpack_require__(5);

var _Contentful2 = _interopRequireDefault(_Contentful);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  exportPathMap: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var paths, _ref2, posts, authors, categories;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              paths = {
                '/': { page: '/' },
                '/rank-tracker-comparison': { page: '/rank-tracker-comparison' },
                '/features': { page: '/features' },
                '/pricing': { page: '/pricing' },
                '/about': { page: '/about' },
                '/devblog': { page: '/devblog' }
              };
              _context.next = 3;
              return _Contentful2.default;

            case 3:
              _ref2 = _context.sent;
              posts = _ref2.posts;
              authors = _ref2.authors;
              categories = _ref2.categories;


              // Posts
              posts.forEach(function (d) {
                paths['/devblog/post/' + d.fields.slug] = {
                  page: '/devblog-post',
                  query: { slug: d.fields.slug }
                };
              });

              // Categories
              categories.forEach(function (d) {
                paths['/devblog/category/' + d.fields.slug] = {
                  page: '/devblog-category',
                  query: { slug: d.fields.slug }
                };
              });

              // // Authors
              // authors.forEach(d => {
              //   paths[`/devblog/author/${d.fields.slug}`] = {
              //     page: '/devblog-author',
              //     query: { slug: d.fields.slug },
              //   }
              // })

              return _context.abrupt('return', paths);

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function exportPathMap() {
      return _ref.apply(this, arguments);
    };
  }()
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var fetch = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var authors, categories, posts, allData;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetchAuthors();

          case 3:
            authors = _context.sent;
            _context.next = 6;
            return fetchCategories();

          case 6:
            categories = _context.sent;
            _context.next = 9;
            return fetchPosts();

          case 9:
            posts = _context.sent;
            allData = {
              authors: authors,
              categories: categories,
              posts: posts
            };
            _context.next = 13;
            return _fsExtra2.default.writeJSON('./data.json', allData);

          case 13:
            console.log('data.json successfully saved!');
            return _context.abrupt('return', allData);

          case 17:
            _context.prev = 17;
            _context.t0 = _context['catch'](0);

            console.error(_context.t0);

          case 20:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 17]]);
  }));

  return function fetch() {
    return _ref.apply(this, arguments);
  };
}();

var fetchAuthors = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var _ref3, items;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return client.getEntries({
              content_type: '1kUEViTN4EmGiEaaeC6ouY',
              limit: 1000
            });

          case 2:
            _ref3 = _context2.sent;
            items = _ref3.items;
            return _context2.abrupt('return', items);

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function fetchAuthors() {
    return _ref2.apply(this, arguments);
  };
}();

var fetchCategories = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
    var _ref5, items;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return client.getEntries({
              content_type: 'devCategory',
              limit: 1000
            });

          case 2:
            _ref5 = _context3.sent;
            items = _ref5.items;
            return _context3.abrupt('return', items);

          case 5:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function fetchCategories() {
    return _ref4.apply(this, arguments);
  };
}();

var fetchPosts = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
    var _ref7, items;

    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return client.getEntries({
              content_type: 'devPost',
              limit: 1000
            });

          case 2:
            _ref7 = _context4.sent;
            items = _ref7.items;
            return _context4.abrupt('return', items);

          case 5:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function fetchPosts() {
    return _ref6.apply(this, arguments);
  };
}();

var _fsExtra = __webpack_require__(6);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _contentful = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = (0, _contentful.createClient)({
  space: 'z8uwv83tofbw',
  accessToken: '1f346953eb0bf8aa1b57c5ac3d1abe12e8b723054e5961d8a71d410e52f6dc8f'
});

exports.default = fetch();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ })
/******/ ]);