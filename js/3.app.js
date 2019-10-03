(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/models/CopybookModel.js":
/*!*************************************!*\
  !*** ./src/models/CopybookModel.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel */ "./src/models/BaseModel.js");
/* harmony import */ var _utils_Tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Tools */ "./src/utils/Tools.js");
/* harmony import */ var _metadata_GitHubData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata/GitHubData */ "./src/models/metadata/GitHubData.js");
/* harmony import */ var _utils_LocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/LocalStorage */ "./src/utils/LocalStorage.js");
/* harmony import */ var _AppModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppModel */ "./src/models/AppModel.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var REPO_FILE_URL_KEY = _AppModel__WEBPACK_IMPORTED_MODULE_4__["default"].genPersistenceKey('agor_repo_file_url_key');

var CopybookModel =
/*#__PURE__*/
function (_BaseModel) {
  _inherits(CopybookModel, _BaseModel);

  function CopybookModel() {
    var _this;

    _classCallCheck(this, CopybookModel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CopybookModel).call(this));
    _this._data = {
      visible: false,
      fileList: [],
      selectedFile: null,
      fileContent: null,
      cachedFileUrl: _utils_LocalStorage__WEBPACK_IMPORTED_MODULE_3__["default"].getItem(REPO_FILE_URL_KEY)
    }; // only cache 24 hours

    if (_this._data.cachedFileUrl && new Date() - new Date(_this._data.cachedFileUrl.timer) >= 86400000) {
      _this._data.cachedFileUrl = null;
    }

    setTimeout(function () {
      return _this.requestRepoTrees();
    }, 100);
    return _this;
  }

  _createClass(CopybookModel, [{
    key: "requestRepoTrees",
    value: function () {
      var _requestRepoTrees = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var clData, jsData, pyData, jvData, swData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _metadata_GitHubData__WEBPACK_IMPORTED_MODULE_2__["default"].requestCLangAlgorithmsRepoTree();

              case 2:
                clData = _context.sent;

                if (!this._data.cachedFileUrl && clData) {
                  this._updateFileList(clData);

                  this.requestRepoFile(this._genCachedFile(this.fileList));
                }

                _context.next = 6;
                return _metadata_GitHubData__WEBPACK_IMPORTED_MODULE_2__["default"].requestJavascriptAlgorithmsRepoTree();

              case 6:
                jsData = _context.sent;

                this._updateFileList(jsData);

                _context.next = 10;
                return _metadata_GitHubData__WEBPACK_IMPORTED_MODULE_2__["default"].requestPythonAlgorithmsRepoTree();

              case 10:
                pyData = _context.sent;

                this._updateFileList(pyData);

                _context.next = 14;
                return _metadata_GitHubData__WEBPACK_IMPORTED_MODULE_2__["default"].requestJavaAlgorithmsRepoTree();

              case 14:
                jvData = _context.sent;

                this._updateFileList(jvData);

                _context.next = 18;
                return _metadata_GitHubData__WEBPACK_IMPORTED_MODULE_2__["default"].requestSwiftAlgorithmsRepoTree();

              case 18:
                swData = _context.sent;

                this._updateFileList(swData);

                if (this.fileList.length) {
                  this.requestRepoFile(this._genCachedFile(this.fileList));
                }

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function requestRepoTrees() {
        return _requestRepoTrees.apply(this, arguments);
      }

      return requestRepoTrees;
    }()
  }, {
    key: "requestRepoFile",
    value: function () {
      var _requestRepoFile = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(file) {
        var data, cachedFileUrl;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (file) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.next = 4;
                return _metadata_GitHubData__WEBPACK_IMPORTED_MODULE_2__["default"].requestRepoFile(file.url);

              case 4:
                data = _context2.sent;

                if (data) {
                  cachedFileUrl = {
                    timer: new Date().toISOString().substr(0, 10),
                    url: file.url
                  };
                  this.update({
                    selectedFile: file,
                    fileContent: data,
                    cachedFileUrl: cachedFileUrl
                  });
                  _utils_LocalStorage__WEBPACK_IMPORTED_MODULE_3__["default"].setItem(REPO_FILE_URL_KEY, cachedFileUrl);
                }

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function requestRepoFile(_x) {
        return _requestRepoFile.apply(this, arguments);
      }

      return requestRepoFile;
    }()
  }, {
    key: "_updateFileList",
    value: function _updateFileList(data) {
      data && this.update({
        fileList: [].concat(_toConsumableArray(this.fileList), _toConsumableArray(data))
      });
    }
  }, {
    key: "_genCachedFile",
    value: function _genCachedFile(data) {
      var _this2 = this;

      var file;

      if (this._data.cachedFileUrl) {
        file = data.find(function (f) {
          return f.url === _this2._data.cachedFileUrl.url;
        });
      }

      return file || _utils_Tools__WEBPACK_IMPORTED_MODULE_1__["randomList"](data, 1)[0];
    }
  }, {
    key: "fileList",
    get: function get() {
      return this._data.fileList;
    }
  }, {
    key: "selectedFile",
    get: function get() {
      return this._data.selectedFile;
    }
  }, {
    key: "fileContent",
    get: function get() {
      return this._data.fileContent;
    }
  }, {
    key: "visible",
    get: function get() {
      return this._data.visible;
    }
  }]);

  return CopybookModel;
}(_BaseModel__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (new CopybookModel());

/***/ }),

/***/ "./src/models/ErrorModel.js":
/*!**********************************!*\
  !*** ./src/models/ErrorModel.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel */ "./src/models/BaseModel.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ErrorModel =
/*#__PURE__*/
function (_BaseModel) {
  _inherits(ErrorModel, _BaseModel);

  function ErrorModel() {
    var _this;

    _classCallCheck(this, ErrorModel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ErrorModel).call(this));
    _this._data = {
      visible: false,
      message: '',
      error: null
    };
    return _this;
  }

  _createClass(ErrorModel, [{
    key: "message",
    get: function get() {
      return this._data.message;
    }
  }, {
    key: "error",
    get: function get() {
      return this._data.error;
    },
    set: function set(error) {
      this.update({
        visible: true,
        message: error.message,
        error: error
      });
    }
  }]);

  return ErrorModel;
}(_BaseModel__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (new ErrorModel());

/***/ }),

/***/ "./src/models/metadata/GitHubData.js":
/*!*******************************************!*\
  !*** ./src/models/metadata/GitHubData.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Store */ "./src/models/Store.js");
/* harmony import */ var _ErrorModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorModel */ "./src/models/ErrorModel.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var CLANG = {
  name: 'TheAlgorithms/C',
  gitHub: 'https://github.com/TheAlgorithms/C/tree/master',
  postfix: '.c',
  included: ['conversions', 'data_structures', 'hash', 'misc', 'searching', 'sorting'],
  excluded: []
};
var JS = {
  name: 'trekhleb/javascript-algorithms',
  gitHub: 'https://github.com/trekhleb/javascript-algorithms/tree/master',
  postfix: '.js',
  included: ['src/algorithms/', 'src/data-structures/'],
  excluded: ['__test__']
};
var PY = {
  name: 'TheAlgorithms/Python',
  gitHub: 'https://github.com/TheAlgorithms/Python/tree/master',
  postfix: '.py',
  included: ['Maths', 'binary_tree', 'data_structures', 'dynamic_programming', 'graphs', 'hashes', 'maths', 'other', 'searches', 'strings', 'sorts'],
  excluded: ['__init__.py']
};
var JAVA = {
  name: 'TheAlgorithms/Java',
  gitHub: 'https://github.com/TheAlgorithms/Java/tree/master',
  postfix: '.java',
  included: ['Conversions', 'DataStructures', 'Misc', 'Others', 'Searches', 'Sorts'],
  excluded: []
};
var SWIFT = {
  name: 'raywenderlich/swift-algorithm-club',
  gitHub: 'https://github.com/raywenderlich/swift-algorithm-club/tree/master',
  postfix: '.swift',
  included: [],
  excluded: ['/Tests/', '.playground']
};

var GitHubData =
/*#__PURE__*/
function () {
  function GitHubData() {
    _classCallCheck(this, GitHubData);

    this._repoStore = new _Store__WEBPACK_IMPORTED_MODULE_0__["default"](Infinity);
  }

  _createClass(GitHubData, [{
    key: "requestRepoLatestCommit",
    value: function () {
      var _requestRepoLatestCommit = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(repo) {
        var cacheId, cache, url, res, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cacheId = 'requestRepoLatestCommit' + repo;
                cache = this._repoStore.get(cacheId);

                if (!cache) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", cache);

              case 4:
                _context.prev = 4;
                url = "https://api.github.com/repos/".concat(repo, "/commits?");
                _context.next = 8;
                return fetch(url + new Date().toISOString().substr(0, 7));

              case 8:
                res = _context.sent;
                _context.next = 11;
                return res.json();

              case 11:
                res = _context.sent;

                if (!res) {
                  _context.next = 18;
                  break;
                }

                data = res[0];

                this._repoStore.save(cacheId, data);

                return _context.abrupt("return", data);

              case 18:
                throw new Error("Request Repo latest Commit failed");

              case 19:
                _context.next = 24;
                break;

              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](4);
                _ErrorModel__WEBPACK_IMPORTED_MODULE_1__["default"].error = _context.t0;

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 21]]);
      }));

      function requestRepoLatestCommit(_x) {
        return _requestRepoLatestCommit.apply(this, arguments);
      }

      return requestRepoLatestCommit;
    }()
  }, {
    key: "requestRepoTree",
    value: function () {
      var _requestRepoTree = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(repo) {
        var _this = this;

        var cacheId, cache, latestCommit, url, res, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                cacheId = 'requestRepoTree' + repo.name;
                cache = this._repoStore.get(cacheId);

                if (!cache) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", cache);

              case 4:
                _context2.prev = 4;
                _context2.next = 7;
                return this.requestRepoLatestCommit(repo.name);

              case 7:
                latestCommit = _context2.sent;
                url = "".concat(latestCommit.commit.tree.url, "?recursive=1");
                _context2.next = 11;
                return fetch(url);

              case 11:
                res = _context2.sent;
                _context2.next = 14;
                return res.json();

              case 14:
                res = _context2.sent;

                if (!res) {
                  _context2.next = 21;
                  break;
                }

                data = Array.prototype.filter.call(res.tree, function (n) {
                  var path = n.path;
                  n.link = "".concat(repo.gitHub, "/").concat(path);
                  return (_this._isIncludedFile(path, repo.included) || !repo.included.length) && path.endsWith(repo.postfix) && !_this._isIncludedFile(path, repo.excluded);
                });

                this._repoStore.save(cacheId, data);

                return _context2.abrupt("return", data);

              case 21:
                throw new Error("Request Repo Tree failed");

              case 22:
                _context2.next = 27;
                break;

              case 24:
                _context2.prev = 24;
                _context2.t0 = _context2["catch"](4);
                _ErrorModel__WEBPACK_IMPORTED_MODULE_1__["default"].error = _context2.t0;

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 24]]);
      }));

      function requestRepoTree(_x2) {
        return _requestRepoTree.apply(this, arguments);
      }

      return requestRepoTree;
    }()
  }, {
    key: "requestJavascriptAlgorithmsRepoTree",
    value: function () {
      var _requestJavascriptAlgorithmsRepoTree = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", this.requestRepoTree(JS));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function requestJavascriptAlgorithmsRepoTree() {
        return _requestJavascriptAlgorithmsRepoTree.apply(this, arguments);
      }

      return requestJavascriptAlgorithmsRepoTree;
    }()
  }, {
    key: "requestPythonAlgorithmsRepoTree",
    value: function () {
      var _requestPythonAlgorithmsRepoTree = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.requestRepoTree(PY));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function requestPythonAlgorithmsRepoTree() {
        return _requestPythonAlgorithmsRepoTree.apply(this, arguments);
      }

      return requestPythonAlgorithmsRepoTree;
    }()
  }, {
    key: "requestJavaAlgorithmsRepoTree",
    value: function () {
      var _requestJavaAlgorithmsRepoTree = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", this.requestRepoTree(JAVA));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function requestJavaAlgorithmsRepoTree() {
        return _requestJavaAlgorithmsRepoTree.apply(this, arguments);
      }

      return requestJavaAlgorithmsRepoTree;
    }()
  }, {
    key: "requestCLangAlgorithmsRepoTree",
    value: function () {
      var _requestCLangAlgorithmsRepoTree = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", this.requestRepoTree(CLANG));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function requestCLangAlgorithmsRepoTree() {
        return _requestCLangAlgorithmsRepoTree.apply(this, arguments);
      }

      return requestCLangAlgorithmsRepoTree;
    }()
  }, {
    key: "requestSwiftAlgorithmsRepoTree",
    value: function () {
      var _requestSwiftAlgorithmsRepoTree = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7() {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.requestRepoTree(SWIFT));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function requestSwiftAlgorithmsRepoTree() {
        return _requestSwiftAlgorithmsRepoTree.apply(this, arguments);
      }

      return requestSwiftAlgorithmsRepoTree;
    }()
  }, {
    key: "requestRepoFile",
    value: function () {
      var _requestRepoFile = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(url) {
        var cache, res;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                cache = this._repoStore.get(url);

                if (!cache) {
                  _context8.next = 3;
                  break;
                }

                return _context8.abrupt("return", cache);

              case 3:
                _context8.prev = 3;
                _context8.next = 6;
                return fetch(url);

              case 6:
                res = _context8.sent;
                _context8.next = 9;
                return res.json();

              case 9:
                res = _context8.sent;

                if (!res) {
                  _context8.next = 16;
                  break;
                }

                res.content = window.atob(res.content);

                this._repoStore.save(url, res);

                return _context8.abrupt("return", res);

              case 16:
                throw new Error("Request Repo File failed");

              case 17:
                _context8.next = 22;
                break;

              case 19:
                _context8.prev = 19;
                _context8.t0 = _context8["catch"](3);
                _ErrorModel__WEBPACK_IMPORTED_MODULE_1__["default"].error = _context8.t0;

              case 22:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[3, 19]]);
      }));

      function requestRepoFile(_x3) {
        return _requestRepoFile.apply(this, arguments);
      }

      return requestRepoFile;
    }()
  }, {
    key: "_isIncludedFile",
    value: function _isIncludedFile(path, list) {
      return list.find(function (p) {
        return path.includes(p);
      });
    }
  }]);

  return GitHubData;
}();

/* harmony default export */ __webpack_exports__["default"] = (new GitHubData());

/***/ })

}]);
//# sourceMappingURL=3.app.js.map