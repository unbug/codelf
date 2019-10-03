(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/constants/Configs.js":
/*!**********************************!*\
  !*** ./src/constants/Configs.js ***!
  \**********************************/
/*! exports provided: APP_NANE, PAGE_PATH, PAGE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_NANE", function() { return APP_NANE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_PATH", function() { return PAGE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_URL", function() { return PAGE_URL; });
/* harmony import */ var _utils_Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Tools */ "./src/utils/Tools.js");

var APP_NANE = 'codelf';
var PAGE_URL = _utils_Tools__WEBPACK_IMPORTED_MODULE_0__["thisPage"];
var PAGE_PATH = _utils_Tools__WEBPACK_IMPORTED_MODULE_0__["thisPath"];


/***/ }),

/***/ "./src/models/AppModel.js":
/*!********************************!*\
  !*** ./src/models/AppModel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel */ "./src/models/BaseModel.js");
/* harmony import */ var _utils_LocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/LocalStorage */ "./src/utils/LocalStorage.js");
/* harmony import */ var _utils_Tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Tools */ "./src/utils/Tools.js");
/* harmony import */ var _constants_Configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/Configs */ "./src/constants/Configs.js");
/* harmony import */ var _utils_Param__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Param */ "./src/utils/Param.js");
/* harmony import */ var _utils_Navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Navigator */ "./src/utils/Navigator.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var DEVICE_ID_KEY = "".concat(_constants_Configs__WEBPACK_IMPORTED_MODULE_3__["APP_NANE"], "_device_id");

var AppModel =
/*#__PURE__*/
function (_BaseModel) {
  _inherits(AppModel, _BaseModel);

  function AppModel() {
    var _this;

    _classCallCheck(this, AppModel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppModel).call(this));
    _this._data = {
      debug: Object(_utils_Param__WEBPACK_IMPORTED_MODULE_4__["searchParams"])()['debug'],
      appName: _constants_Configs__WEBPACK_IMPORTED_MODULE_3__["APP_NANE"],
      deviceId: _utils_LocalStorage__WEBPACK_IMPORTED_MODULE_1__["default"].getItem(DEVICE_ID_KEY),
      isGithub: /github\.io/g.test(window.location.href)
    };

    if (!_this._data.deviceId) {
      _this._data.deviceId = _utils_Tools__WEBPACK_IMPORTED_MODULE_2__["uuid"]();
      _utils_LocalStorage__WEBPACK_IMPORTED_MODULE_1__["default"].setItem(DEVICE_ID_KEY, _this._data.deviceId);
    }

    return _this;
  }

  _createClass(AppModel, [{
    key: "analytics",
    value: function analytics(param) {
      (this.isGithub || this.debug) && setTimeout(function () {
        _utils_Navigator__WEBPACK_IMPORTED_MODULE_5__["default"].getFrame(null).setAttribute('src', '//www.mihtool.com/analytics.html?codelf' + (param ? '&' + param : ''));
      }, param ? 500 : 1000);
    }
  }, {
    key: "genPersistenceKey",
    value: function genPersistenceKey(key) {
      if (key !== undefined && key !== null) {
        return "".concat(this._data.appName, "_").concat(key);
      }

      return null;
    }
  }, {
    key: "debug",
    get: function get() {
      return this._data.debug;
    }
  }, {
    key: "isGithub",
    get: function get() {
      return this._data.isGithub;
    }
  }, {
    key: "appName",
    get: function get() {
      return this._data.appName;
    }
  }, {
    key: "deviceId",
    get: function get() {
      return this._data.deviceId;
    }
  }]);

  return AppModel;
}(_BaseModel__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (new AppModel());

/***/ }),

/***/ "./src/models/BaseModel.js":
/*!*********************************!*\
  !*** ./src/models/BaseModel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Mutation =
/*#__PURE__*/
function () {
  function Mutation(data) {
    _classCallCheck(this, Mutation);

    this._data = data;

    this._serialize();

    this.has = this.has.bind(this);
  }

  _createClass(Mutation, [{
    key: "_serialize",
    value: function _serialize() {
      var _this = this;

      Object.keys(this._data).forEach(function (key) {
        _this[key] = true;
      });
    }
  }, {
    key: "get",
    value: function get() {
      return this._data;
    }
  }, {
    key: "has",
    value: function has(fields) {
      var _this2 = this;

      if (/string/i.test(_typeof(fields))) {
        fields = fields.split(',');
      }

      if (Array.isArray(fields)) {
        return fields.every(function (key) {
          key = key.trim();
          return _this2[key];
        });
      }

      return false;
    }
  }]);

  return Mutation;
}();

var BaseModel =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(BaseModel, _EventEmitter);

  function BaseModel() {
    var _this3;

    _classCallCheck(this, BaseModel);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(BaseModel).call(this));

    _this3.on('error', function () {});

    _this3.setMaxListeners(99);

    _this3._updateEventName = 'update';
    _this3._data = {};
    return _this3;
  }

  _createClass(BaseModel, [{
    key: "set",
    value: function set(data) {
      var prevData = Object.assign({}, this._data);
      this._data = data || {};
      this.notify(prevData, Object.assign({}, prevData, data, {
        isReset: true
      }));
    }
  }, {
    key: "get",
    value: function get() {
      return this._data;
    }
  }, {
    key: "create",
    value: function create(data) {
      var instance = Object.create(Object.getPrototypeOf(this));
      instance._data = data;
      return instance;
    }
  }, {
    key: "notify",
    value: function notify(prevData, mutationData) {
      var data = Object.assign({}, this._data);
      this.emit(this._updateEventName, data, prevData || data, new Mutation(mutationData));
    }
  }, {
    key: "update",
    value: function update(data) {
      var prevData = Object.assign({}, this._data);
      Object.assign(this._data, data);
      this.notify(prevData, data);
    }
  }, {
    key: "onUpdated",
    value: function onUpdated(listener) {
      this.on(this._updateEventName, listener);
    }
  }, {
    key: "offUpdated",
    value: function offUpdated(listener) {
      this.removeListener(this._updateEventName, listener);
    }
  }]);

  return BaseModel;
}(events__WEBPACK_IMPORTED_MODULE_0___default.a);

/* harmony default export */ __webpack_exports__["default"] = (BaseModel);

/***/ }),

/***/ "./src/models/Store.js":
/*!*****************************!*\
  !*** ./src/models/Store.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Store; });
/* harmony import */ var _utils_LocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/LocalStorage */ "./src/utils/LocalStorage.js");
/* harmony import */ var _utils_Tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Tools */ "./src/utils/Tools.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * Store data in memory cache.
 */

var Store =
/*#__PURE__*/
function () {
  /**
   * Create a memory cache.
   *
   * @param expire expire time in seconds for each record, Infinity value will never expire. default (60 * 60 * 1000)s.
   */
  function Store(expire, options) {
    _classCallCheck(this, Store);

    this._expire = expire || 60 * 60 * 1000;
    this._cache = {};
    this._options = options || {};

    if (this._options.persistence === 'local') {
      this._local = _utils_LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"];
    }

    if (this._options.persistence === 'session') {
      this._local = _utils_LocalStorage__WEBPACK_IMPORTED_MODULE_0__["SessionStorage"];
    }

    if (this._local && this._options.persistenceKey) {
      this._cache = this._local.getItem(this._options.persistenceKey) || {};
    }
  }
  /**
   * Returns cached record data with id.
   * Returns null if the record is expired.
   *
   * @param id unique id.
   * @return {*} cache data.
   */


  _createClass(Store, [{
    key: "get",
    value: function get(id) {
      if (id !== undefined || id != null) {
        id = _utils_Tools__WEBPACK_IMPORTED_MODULE_1__["MD5"](id.toString());
        var record = this._cache[id];

        if (record) {
          // delete record when it is expired
          if (Date.now() - record.created > this._expire) {
            delete this._cache[id];
            return null;
          }

          return record.data;
        }

        return null;
      }

      return null;
    }
    /**
     * Save a record data to memory.
     * Saving different record with same id will always overwrite the old record.
     *
     * @param id unique id.
     * @param data cache record data.
     */

  }, {
    key: "save",
    value: function save(id, data) {
      if (id !== undefined || id != null) {
        id = _utils_Tools__WEBPACK_IMPORTED_MODULE_1__["MD5"](id.toString());
        this._cache[id] = {
          id: id,
          data: data,
          created: Date.now()
        };

        this._persist();
      }
    }
    /**
     * Clear all cached records.
     */

  }, {
    key: "clear",
    value: function clear() {
      this._cache = {};

      this._persist();
    }
  }, {
    key: "_persist",
    value: function _persist() {
      if (this._local && this._options.persistenceKey) {
        this._local.setItem(this._options.persistenceKey, this._cache);
      }
    }
  }]);

  return Store;
}();



/***/ }),

/***/ "./src/utils/LocalStorage.js":
/*!***********************************!*\
  !*** ./src/utils/LocalStorage.js ***!
  \***********************************/
/*! exports provided: SessionStorage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStorage", function() { return SessionStorage; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BasicStorage =
/*#__PURE__*/
function () {
  function BasicStorage() {
    _classCallCheck(this, BasicStorage);

    this._store = {};
  }

  _createClass(BasicStorage, [{
    key: "getItem",
    value: function getItem(key) {
      return this._store[key];
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      return this._store[key] = value;
    }
  }]);

  return BasicStorage;
}();

var Storage =
/*#__PURE__*/
function () {
  function Storage(store) {
    _classCallCheck(this, Storage);

    this._store = store;

    if (!store) {
      return new BasicStorage();
    }
  }

  _createClass(Storage, [{
    key: "getItem",
    value: function getItem(key, defaultValue) {
      var rawValue = this._store.getItem(key);

      if (rawValue == null) {
        return defaultValue;
      }

      try {
        return JSON.parse(rawValue);
      } catch (e) {
        return null;
      }
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      try {
        this._store.setItem(key, JSON.stringify(value));
      } catch (e) {// todo
      }
    }
  }]);

  return Storage;
}();

var LocalStorage = new Storage(window.localStorage);
var SessionStorage = new Storage(window.sessionStorage);

/* harmony default export */ __webpack_exports__["default"] = (LocalStorage);

/***/ }),

/***/ "./src/utils/Navigator.js":
/*!********************************!*\
  !*** ./src/utils/Navigator.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Navigator = function () {
  var frame,
      androidReg = /Android/gi,
      isAndroid = androidReg.test(navigator.platform) || androidReg.test(navigator.userAgent);
  frame = null;

  function appendFrame(frame) {
    frame && document.body.appendChild(frame);
  }

  function removeFrame(frame) {
    frame && frame.parentNode.removeChild(frame);
  }

  function getFrame(src, name) {
    var _frame = document.createElement('iframe');

    _frame.setAttribute('style', 'display:none;width:0;height:0;position: absolute;top:0;left:0;border:0;');

    _frame.setAttribute('height', '0px');

    _frame.setAttribute('width', '0px');

    _frame.setAttribute('frameborder', '0');

    name && _frame.setAttribute('name', name);

    if (src) {
      _frame.setAttribute('src', src);
    } else {
      appendFrame(_frame);
    }

    return _frame;
  }

  function protocol(command, single, noframe) {
    var _frame, timer;

    if (noframe) {
      window.location.href = command;
      return;
    }

    if (single) {
      if (isAndroid) {
        _frame = getFrame();

        _frame.setAttribute('src', command);
      } else {
        _frame = getFrame(command);
        appendFrame(_frame);
      }

      timer = setTimeout(function () {
        _frame && removeFrame(_frame);
      }, 30000);

      _frame.onload = _frame.onreadystatechange = function () {
        timer && clearTimeout(timer);
        _frame && removeFrame(_frame);
      };
    } else {
      frame = frame || getFrame();
      frame.setAttribute('src', command);
    }
  }

  return {
    protocol: protocol,
    getFrame: getFrame,
    appendFrame: appendFrame,
    removeFrame: removeFrame
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Navigator);

/***/ }),

/***/ "./src/utils/Param.js":
/*!****************************!*\
  !*** ./src/utils/Param.js ***!
  \****************************/
/*! exports provided: searchParams, hashParams, params */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchParams", function() { return searchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashParams", function() { return hashParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "params", function() { return params; });
function fn(str, reg) {
  if (str) {
    var data = {};
    str.replace(reg, function ($0, $1, $2, $3) {
      data[$1] = $3;
    });
    return data;
  }
}

function searchParams(search) {
  search = search || window.location.search;
  return fn(search, new RegExp("([^?=&]+)(=([^&]*))?", "g")) || {};
}
function hashParams(hash) {
  hash = hash || window.location.hash;
  return fn(hash, new RegExp("([^#=&]+)(=([^&]*))?", "g")) || {};
}
function params(search, hash) {
  return {
    search: searchParams(search),
    hash: hashParams(hash)
  };
}

/***/ }),

/***/ "./src/utils/Tools.js":
/*!****************************!*\
  !*** ./src/utils/Tools.js ***!
  \****************************/
/*! exports provided: os, thisPage, thisPath, randomList, randomColor, InlineWebWorker, uuid, randomLabelColor, MD5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "os", function() { return os; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thisPage", function() { return thisPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thisPath", function() { return thisPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomList", function() { return randomList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomColor", function() { return randomColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineWebWorker", function() { return InlineWebWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return uuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomLabelColor", function() { return randomLabelColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MD5", function() { return MD5; });
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! spark-md5 */ "./node_modules/spark-md5/spark-md5.js");
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spark_md5__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined;

var ua = navigator.userAgent;
var android = ua.match(/(Android);?[\s/]+([\d.]+)?/);
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
var os = {};
if (android) os.android = true, os.version = android[2];
if (iphone && !ipod) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.');
if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.');
if (ipod) os.ios = os.ipod = true, os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
var thisPage = window.location.href.replace(window.location.hash, '');
var thisPath = thisPage.substring(0, thisPage.lastIndexOf('/') + 1);

var randomColor = function randomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

var randomList = function randomList(list, len, verify, ratio) {
  var rs = [],
      _list = list.slice(0);

  len = len || _list.length;
  ratio = ratio ? ratio : 0;

  function rd(_array) {
    _array.sort(function () {
      return 0.5 - Math.random();
    });
  }

  while (ratio) {
    rd(_list);
    ratio--;
  }

  if (_list.length <= len) {
    rs = _list;
  } else {
    while (rs.length < len) {
      var index = Math.floor(Math.random() * _list.length),
          item = _list[index];

      if (verify && verify.call(_this, item, _list) || !verify) {
        rs.push(item);

        _list.splice(index, 1);
      }
    }
  }

  return rs;
};

var InlineWebWorker = {
  ready: window.Blob && window.Worker && window.URL,
  create: function create(selector) {
    return new Worker(window.URL.createObjectURL(new Blob([document.querySelector(selector).textContent])));
  }
};

var uuid = function uuid(len) {
  var res = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[x]/g, function (c) {
    var num = Math.random() * 16 | 0,
        v = c === 'x' ? num : num & 0x3 | 0x8;
    return v.toString(16);
  });
  return len ? res.substr(0, len) : res;
};

var randomLabelColor = function randomLabelColor() {
  var colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown'];
  return randomList(colors, 1)[0];
};


var MD5 = spark_md5__WEBPACK_IMPORTED_MODULE_0___default.a.hash;


/***/ })

}]);
//# sourceMappingURL=1.app.js.map