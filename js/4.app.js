(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/components/Donate.js":
/*!**********************************!*\
  !*** ./src/components/Donate.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Donate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Donate(props) {
  var text = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "lang"
  }, "Buy ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://twitter.com/unbug",
    rel: "noopener noreferrer",
    target: "_blank"
  }, "@unbug"), " a drink");

  if (props.isZH) {
    text = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "lang cn"
    }, "\u7ED9\u4F5C\u8005 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://weibo.com/unbug/",
      rel: "noopener noreferrer",
      target: "_blank"
    }, "@\u542C\u594F"), " \u6253\u8D4F\u4E2A\u7EA2\u5305\u5427");
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "donate"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hd"
  }, text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "images/wechatpay.jpg",
    className: "wechatpay",
    title: "\u5FAE\u4FE1\u4ED8\u6B3E"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "images/zhifubao.png",
    className: "zhifubao",
    title: "\u652F\u4ED8\u5B9D\u8F6C\u8D26"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "https://www.paypal.com/cgi-bin/webscr",
    method: "post",
    target: "_top"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    name: "cmd",
    value: "_s-xclick"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    name: "hosted_button_id",
    value: "43H7K8PWR4VV4"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "image",
    className: "paypal",
    src: "images/paypal.png",
    border: "0",
    name: "submit",
    title: "Paypal"
  }))));
}

/***/ }),

/***/ "./src/components/Loading.js":
/*!***********************************!*\
  !*** ./src/components/Loading.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Loading() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loading"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "spinner",
    src: "images/codelf_logo.png"
  })));
}

/***/ }),

/***/ "./src/components/SearchBar.js":
/*!*************************************!*\
  !*** ./src/components/SearchBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // http://githut.info/

var topProgramLan = [{
  id: '22,106',
  language: 'JavaScript, CoffeeScript'
}, {
  id: '133,135',
  language: 'CSS'
}, {
  id: '3,39',
  language: 'HTML'
}, {
  id: 137,
  language: 'Swift'
}, {
  id: 35,
  language: 'Objective-C'
}, {
  id: 23,
  language: 'Java'
}, {
  id: 19,
  language: 'Python'
}, {
  id: 24,
  language: 'PHP'
}, {
  id: 32,
  language: 'Ruby'
}, {
  id: 28,
  language: 'C'
}, {
  id: 16,
  language: 'C++'
}, {
  id: 6,
  language: 'C#'
}, {
  id: 55,
  language: 'Go'
}, {
  id: 51,
  language: 'Perl'
}, {
  id: '104,109',
  language: 'Clojure, ClojureScript'
}, {
  id: 40,
  language: 'Haskell'
}, {
  id: 54,
  language: 'Lua'
}, {
  id: 20,
  language: 'Matlab'
}, {
  id: 144,
  language: 'R'
}, {
  id: 47,
  language: 'Scala'
}, {
  id: '69,78,146',
  language: 'Shell'
}, {
  id: 29,
  language: 'Lisp'
}, {
  id: 42,
  language: 'ActionScript'
}];
function SearchBar(props) {
  var inputEl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var inputSize = useInputSize('huge');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    lang: props.searchLang || [],
    valChanged: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  function updateState(vals) {
    setState(function (prevState) {
      return _objectSpread({}, prevState, {}, vals);
    });
  }

  function handleSearch() {
    props.onSearch(inputEl.current.inputRef.current.value, state.lang);
    inputEl.current.inputRef.current.blur();
    updateState({
      valChanged: false
    });
  }

  function handleRestLang() {
    updateState({
      lang: [],
      valChanged: true
    });
  }

  function handleSelectLang(id) {
    updateState({
      lang: state.lang.concat(id).sort(),
      valChanged: true
    });
  }

  function handleDeselectLang(id) {
    var lang = state.lang;
    lang.splice(state.lang.indexOf(id), 1);
    updateState({
      lang: lang.sort(),
      valChanged: true
    });
  }

  function handleToggleSelectLang(id) {
    state.lang.indexOf(id) === -1 ? handleSelectLang(id) : handleDeselectLang(id);
  }

  var langItems = topProgramLan.map(function (key) {
    var active = state.lang.indexOf(key.id) !== -1;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
      key: key.id,
      active: active,
      onClick: function onClick() {
        return handleToggleSelectLang(key.id);
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: active ? 'check circle outline' : 'circle outline'
    }), key.language);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-bar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-bar__desc"
  }, "Search over GitHub, Bitbucket, GitLab to find real-world usage variable names"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "javascript:void(0);"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    ref: inputEl,
    onChange: function onChange() {
      return updateState({
        valChanged: true
      });
    },
    className: "search-bar__input",
    icon: true,
    fluid: true,
    placeholder: props.placeholder,
    size: inputSize
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    floating: true,
    text: "",
    icon: "filter",
    className: "search-bar__dropdown"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
    icon: "undo",
    text: "All 90 Languages (Reset)",
    onClick: handleRestLang
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, {
    scrolling: true,
    className: "fix-dropdown-menu"
  }, langItems))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "search",
    name: "search",
    defaultValue: props.searchValue,
    onKeyPress: function onKeyPress(e) {
      e.key === 'Enter' && handleSearch();
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: props.variableList.length && !state.valChanged ? 'search plus' : 'search',
    link: true,
    onClick: handleSearch
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-bar__plugins"
  }, "Extensions:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/unbug/codelf#codelf-for-vs-code",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "VS Code"), ",\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-muted",
    href: "https://atom.io/packages/codelf",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Atom"), ",\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "text-muted",
    href: "https://github.com/unbug/codelf#codelf-for-sublime-text",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Sublime"), ",\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/unbug/codelf/issues/24",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "WebStorm"), ",\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/unbug/codelf/issues/63",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Alfred")));
}

function useInputSize(val) {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(val),
      _useState4 = _slicedToArray(_useState3, 2),
      size = _useState4[0],
      setSize = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    resizeInput();
    window.addEventListener('resize', resizeInput, false);
    return function () {
      return window.removeEventListener('resize', resizeInput, false);
    };
  }, []); // run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([])

  function resizeInput() {
    setSize(document.body.offsetWidth < 800 ? '' : val);
  }

  return size;
}

/***/ }),

/***/ "./src/components/SearchError.js":
/*!***************************************!*\
  !*** ./src/components/SearchError.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");


function SearchError() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-error"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Nothing found, please try  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    color: "grey",
    size: "mini"
  }, "Quick Search"), " or come back later :)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "You can also get help from ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/unbug/codelf/issues",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "https://github.com/unbug/codelf/issues"), "."));
}

/***/ }),

/***/ "./src/components/SourceCode.js":
/*!**************************************!*\
  !*** ./src/components/SourceCode.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SourceCode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _utils_Tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Tools */ "./src/utils/Tools.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loading */ "./src/components/Loading.js");
/* harmony import */ var _hooks_useCodeHighlighting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useCodeHighlighting */ "./src/components/hooks/useCodeHighlighting.js");





function SourceCode(props) {
  var _props$sourceCodeVari;

  var codeEl = Object(_hooks_useCodeHighlighting__WEBPACK_IMPORTED_MODULE_4__["default"])([props.sourceCode, props.sourceCodeVisible], (_props$sourceCodeVari = props.sourceCodeVariable) === null || _props$sourceCodeVari === void 0 ? void 0 : _props$sourceCodeVari.keyword);

  function handleClose() {
    props.onCloseSourceCode();
  }

  if (!props.sourceCodeVariable || !props.sourceCodeRepo) {
    return null;
  }

  var sourceCodeVariable = props.sourceCodeVariable;
  var dropText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "All Codes ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    size: "mini",
    circular: true,
    color: sourceCodeVariable.color
  }, sourceCodeVariable.repoList.length));
  var dropdownItems = props.sourceCodeVariable && props.sourceCodeVariable.repoList.map(function (repo) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, {
      key: _utils_Tools__WEBPACK_IMPORTED_MODULE_2__["uuid"]()
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      size: "mini",
      onClick: function onClick() {
        return props.onRequestSourceCode(repo);
      }
    }, "Codes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      size: "mini",
      as: "a",
      href: repo.repo,
      target: "_blank"
    }, "Repo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      size: "mini",
      circular: true,
      color: _utils_Tools__WEBPACK_IMPORTED_MODULE_2__["randomLabelColor"]()
    }, repo.language));
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    open: props.sourceCodeVisible,
    onClose: handleClose,
    centered: false,
    closeIcon: true,
    className: "source-code fix-modal",
    size: "large"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    floating: true,
    labeled: true,
    button: true,
    blurring: true,
    className: "mini icon",
    style: {
      padding: '0.35rem 0'
    },
    text: dropText
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, {
    scrolling: true,
    className: "fix-dropdown-menu"
  }, dropdownItems))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "mini",
    as: "a",
    href: props.sourceCodeRepo.repo,
    target: "_blank"
  }, "Repo")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Content, null, props.sourceCodeRequesting ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], null) : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
    className: "prettyprint linenums",
    ref: codeEl
  }, props.sourceCode))));
}

/***/ }),

/***/ "./src/components/Suggestion.js":
/*!**************************************!*\
  !*** ./src/components/Suggestion.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Suggestion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");


function Suggestion(props) {
  if (!props.suggestion || !props.suggestion.length) {
    return null;
  }

  var list = props.suggestion.map(function (item, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      key: i,
      circular: true,
      size: "mini",
      color: "grey",
      as: "a",
      href: "#".concat(item)
    }, item);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "suggestion"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    color: "grey",
    size: "mini"
  }, "Quick Search:"), " ", list);
}

/***/ }),

/***/ "./src/components/TitleLogo.js":
/*!*************************************!*\
  !*** ./src/components/TitleLogo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TitleLogo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function TitleLogo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "title animated"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "./"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "O"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "D"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "E"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "L"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "F"))));
}

/***/ }),

/***/ "./src/components/VariableItem.js":
/*!****************************************!*\
  !*** ./src/components/VariableItem.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VariableItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _utils_Tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Tools */ "./src/utils/Tools.js");



function VariableItem(props) {
  var clipboardId = "clipboardId-".concat(_utils_Tools__WEBPACK_IMPORTED_MODULE_2__["uuid"]());
  var variable = props.variable;
  var clipboard = null;

  function handlePopOnMount() {
    clipboard = new ClipboardJS("#".concat(clipboardId));
  }

  function handlePopUnmount() {
    clipboard && clipboard.destroy();
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Popup"], {
    style: {
      padding: '0'
    },
    position: "top center",
    trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      circular: true,
      color: variable.color,
      className: props.className,
      style: props.style
    }, variable.keyword),
    onMount: handlePopOnMount,
    onUnmount: handlePopUnmount,
    hoverable: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"].Group, {
    vertical: true,
    basic: true,
    style: {
      border: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    compact: true,
    as: "a",
    href: "#".concat(variable.keyword)
  }, "Search"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    compact: true,
    as: "a",
    href: variable.repoLink,
    target: "_blank"
  }, "Repo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    compact: true,
    "data-clipboard-text": variable.keyword,
    id: clipboardId
  }, "Copy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    compact: true,
    onClick: function onClick() {
      return props.onOpenSourceCode(variable);
    }
  }, "[", variable.repoLang, "] Codes ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    size: "mini",
    circular: true,
    color: variable.color
  }, variable.repoList.length))));
}

/***/ }),

/***/ "./src/components/VariableList.js":
/*!****************************************!*\
  !*** ./src/components/VariableList.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VariableList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_Tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Tools */ "./src/utils/Tools.js");
/* harmony import */ var _VariableItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VariableItem */ "./src/components/VariableItem.js");




var notFound = function notFound(val) {
  return val && /59ce9297fba93aeb9d693a2f61922fb6|bfd876277827a33f49d363e8857977a0/g.test(_utils_Tools__WEBPACK_IMPORTED_MODULE_1__["MD5"](val));
};

var notFoundImg = '//user-images.githubusercontent.com/799578/50722775-1a9a1d00-110f-11e9-9bcc-efe5465a4ad5.jpg';
var animationName = Math.random() > 0.5 ? 'zoomInDown' : 'zoomInUp';
function VariableList(props) {
  var lastPageLen = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var list = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    // same as "shouldComponentUpdate", only compute when "variableList" has changed
    var variableList = props.variableList;
    var pageLen = variableList.length;
    var pages = [];

    if (notFound(props.searchValue)) {
      pages.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        style: {
          maxWidth: '100%'
        },
        src: notFoundImg
      }));
    }

    variableList.forEach(function (list, i) {
      var isLast = i === pageLen - 1 && lastPageLen.current != pageLen;
      var variables = list.map(function (variable, j) {
        var style = {},
            className = '',
            duration = (list.length - j) / list.length;

        if (isLast) {
          className = 'animated';
          style = {
            animationName: animationName,
            animationDelay: duration + 's',
            animationDuration: Math.min(duration, 0.8) + Math.random() + 's'
          };
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VariableItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: _utils_Tools__WEBPACK_IMPORTED_MODULE_1__["uuid"](),
          variable: variable,
          onOpenSourceCode: props.onOpenSourceCode,
          style: style,
          className: className
        });
      });

      if (variables && variables.length) {
        if (pages.length) {
          pages.unshift(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null));
        }

        Array.prototype.unshift.apply(pages, variables);
      }
    });
    lastPageLen.current = pageLen;
    return pages;
  }, [props.variableList]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "variable-list"
  }, list);
}

/***/ }),

/***/ "./src/components/hooks/useCodeHighlighting.js":
/*!*****************************************************!*\
  !*** ./src/components/hooks/useCodeHighlighting.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCodeHighlighting; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


function useCodeHighlighting(watchedProps, keyword) {
  var container = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var mark = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    renderPrettyPrint();
  }, _toConsumableArray(watchedProps));

  function renderPrettyPrint() {
    setTimeout(function () {
      if (container.current) {
        container.current.classList.remove('prettyprinted');
        setTimeout(function () {
          return PR.prettyPrint(function () {
            return setTimeout(function () {
              return renderHighLight();
            }, 1000);
          });
        }, 100);
      }
    }, container.current ? 0 : 1000);
  }

  function renderHighLight() {
    if (!keyword) {
      return;
    }

    if (mark.current) {
      mark.current.unmark();
    }

    mark.current = new Mark(container.current);
    var idx = 0;
    mark.current.mark(keyword, {
      each: function each(el) {
        el.setAttribute('tabindex', idx++);
      }
    });
  }

  return container;
}

/***/ }),

/***/ "./src/containers/MainContainer.js":
/*!*****************************************!*\
  !*** ./src/containers/MainContainer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SearchBar */ "./src/components/SearchBar.js");
/* harmony import */ var _components_TitleLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TitleLogo */ "./src/components/TitleLogo.js");
/* harmony import */ var _models_SearchCodeModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/SearchCodeModel */ "./src/models/SearchCodeModel.js");
/* harmony import */ var _utils_HashHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/HashHandler */ "./src/utils/HashHandler.js");
/* harmony import */ var _components_VariableList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/VariableList */ "./src/components/VariableList.js");
/* harmony import */ var _components_SearchError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SearchError */ "./src/components/SearchError.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Loading */ "./src/components/Loading.js");
/* harmony import */ var _components_Donate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Donate */ "./src/components/Donate.js");
/* harmony import */ var _components_Suggestion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Suggestion */ "./src/components/Suggestion.js");
/* harmony import */ var _components_SourceCode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/SourceCode */ "./src/components/SourceCode.js");
/* harmony import */ var _models_AppModel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/AppModel */ "./src/models/AppModel.js");
/* harmony import */ var _models_DDMSModel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../models/DDMSModel */ "./src/models/DDMSModel.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var actionTypes = {
  UPDATE: 'update'
};
var initState = {
  isZH: false,
  isError: false,
  variableRequesting: false,
  searchValue: _models_SearchCodeModel__WEBPACK_IMPORTED_MODULE_4__["default"].searchValue,
  searchLang: _models_SearchCodeModel__WEBPACK_IMPORTED_MODULE_4__["default"].searchLang,
  page: _models_SearchCodeModel__WEBPACK_IMPORTED_MODULE_4__["default"].page,
  variableList: _models_SearchCodeModel__WEBPACK_IMPORTED_MODULE_4__["default"].variableList,
  suggestion: _models_SearchCodeModel__WEBPACK_IMPORTED_MODULE_4__["default"].suggestion,
  sourceCodeRequesting: false,
  sourceCodeVisible: false,
  sourceCodeVariable: null,
  sourceCodeRepo: null
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.UPDATE:
      return _objectSpread({}, state, {}, action.payload);

    default:
      return state;
  }
}

function MainContainer(props) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _models_AppModel__WEBPACK_IMPORTED_MODULE_12__["default"].analytics();
    setTimeout(handleLocationHashChanged, 100);
    window.addEventListener('hashchange', handleLocationHashChanged, false);
    return function () {
      return window.removeEventListener('hashchange', handleLocationHashChanged);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    state.variableList.length && document.body.classList.add('dark');
  }, [state.variableList]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _models_SearchCodeModel__WEBPACK_IMPORTED_MODULE_4__["default"].onUpdated(handleSearchCodeModelUpdate);
    return function () {
      return _models_SearchCodeModel__WEBPACK_IMPORTED_MODULE_4__["default"].offUpdated(handleSearchCodeModelUpdate);
    };
  });
  var handleSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (val, lang) {
    if (val === null || val === undefined || state.variableRequesting) {
      return;
    }

    val = val.trim().replace(/\s+/ig, ' '); // filter spaces

    if (val.length < 1) {
      return;
    }

    if (val == state.searchValue) {
      requestVariable(val, lang);
    } else {
      setState({
        searchLang: lang
      });
      setTimeout(function () {
        return _utils_HashHandler__WEBPACK_IMPORTED_MODULE_5__["default"].set(val);
      }); // update window.location.hash
    }
  }, [state.searchValue, state.variableRequesting]);
  var handleOpenSourceCode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (variable) {
    setState({
      sourceCodeVariable: variable
    });
    setTimeout(function () {
      return requestSourceCode(variable.repoList[0]);
    }, 0);
  }, []);

  function handleCloseSourceCode() {
    setState({
      sourceCodeVisible: false
    });
  }

  function handleRequestSourceCode(repo) {
    requestSourceCode(repo);
  }

  function renderSloganImage() {
    if (state.page > 0 || state.variableList.length) {
      return '';
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slogan-image"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "images/twohardtings.jpg"
    }));
  }

  function setState(payload) {
    dispatch({
      type: actionTypes.UPDATE,
      payload: payload
    });
  }

  function checkError(data) {
    if (state.variableRequesting) {
      // no search result
      if (data.variableList.length < 1 || data.variableList[data.variableList.length - 1].length < 1) {
        return true;
      }
    }

    return false;
  }

  function requestVariable(val, lang) {
    var langChanged = lang ? lang.join(',') != state.searchLang.join(',') : !!state.searchLang;
    val = decodeURIComponent(val);
    var page = state.page;

    if (val == state.searchValue && !langChanged) {
      page += 1;
    } else {
      page = 0;
    }

    setState({
      searchValue: val,
      variableRequesting: true
    });
    _models_SearchCodeModel__WEBPACK_IMPORTED_MODULE_4__["default"].requestVariable(val, page, lang || state.searchLang);
    _models_AppModel__WEBPACK_IMPORTED_MODULE_12__["default"].analytics('q=' + val);
    _models_DDMSModel__WEBPACK_IMPORTED_MODULE_13__["default"].postKeyWords(val);
    updateDocTitle(val);
  }

  function requestSourceCode(repo) {
    setState({
      sourceCodeVisible: true,
      sourceCodeRequesting: true,
      sourceCodeRepo: repo
    });
    _models_SearchCodeModel__WEBPACK_IMPORTED_MODULE_4__["default"].requestSourceCode(repo.id);
    _models_AppModel__WEBPACK_IMPORTED_MODULE_12__["default"].analytics('sourcecode&q=' + state.sourceCodeVariable.keyword);
  }

  function updateDocTitle(title) {
    document.title = "".concat(title ? title + ' - ' : '', "CODELF");
  }

  function handleLocationHashChanged(e) {
    e && e.preventDefault();
    var hash = _utils_HashHandler__WEBPACK_IMPORTED_MODULE_5__["default"].get();
    hash && requestVariable(hash.replace(/(\?.*)/, ''));
  }

  function handleSearchCodeModelUpdate(curr, prev, mutation) {
    if (mutation.variableList) {
      setState({
        isZH: _models_SearchCodeModel__WEBPACK_IMPORTED_MODULE_4__["default"].isZH || state.isZH,
        isError: checkError(curr),
        variableRequesting: !mutation.variableList,
        searchValue: _models_SearchCodeModel__WEBPACK_IMPORTED_MODULE_4__["default"].searchValue,
        searchLang: _models_SearchCodeModel__WEBPACK_IMPORTED_MODULE_4__["default"].searchLang,
        page: _models_SearchCodeModel__WEBPACK_IMPORTED_MODULE_4__["default"].page,
        variableList: _models_SearchCodeModel__WEBPACK_IMPORTED_MODULE_4__["default"].variableList,
        suggestion: _models_SearchCodeModel__WEBPACK_IMPORTED_MODULE_4__["default"].suggestion
      });
    }

    if (mutation.sourceCode) {
      setState({
        sourceCodeRequesting: false,
        sourceCode: _models_SearchCodeModel__WEBPACK_IMPORTED_MODULE_4__["default"].sourceCode
      });
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "main-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TitleLogo__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SearchBar__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    placeholder: "AI \u4EBA\u5DE5\u667A\u80FD"
  }, state, {
    onSearch: handleSearch
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Suggestion__WEBPACK_IMPORTED_MODULE_10__["default"], state), state.variableRequesting ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_8__["default"], null) : state.isError ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SearchError__WEBPACK_IMPORTED_MODULE_7__["default"], null) : '', renderSloganImage(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_VariableList__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, state, {
    onOpenSourceCode: handleOpenSourceCode
  })), state.variableList.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Donate__WEBPACK_IMPORTED_MODULE_9__["default"], state) : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SourceCode__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, state, {
    onRequestSourceCode: handleRequestSourceCode,
    onCloseSourceCode: handleCloseSourceCode
  })));
}

/***/ }),

/***/ "./src/models/DDMSModel.js":
/*!*********************************!*\
  !*** ./src/models/DDMSModel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel */ "./src/models/BaseModel.js");
/* harmony import */ var _utils_FormHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/FormHandler */ "./src/utils/FormHandler.js");
/* harmony import */ var _utils_LocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/LocalStorage */ "./src/utils/LocalStorage.js");
/* harmony import */ var _AppModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppModel */ "./src/models/AppModel.js");
/* harmony import */ var _utils_Tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Tools */ "./src/utils/Tools.js");
/* harmony import */ var _utils_JSONP__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/JSONP */ "./src/utils/JSONP.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var formAction = '//ddms.mihtool.com/apis/v1/formdata/';
var formDataAction = '//ddms.mihtool.com/apis/v1/formdata_detail/';
var persistKeyWordsName = _AppModel__WEBPACK_IMPORTED_MODULE_3__["default"].genPersistenceKey('ddms_keywords');
var persistOrganizerName = _AppModel__WEBPACK_IMPORTED_MODULE_3__["default"].genPersistenceKey('ddms_group_sync_id');
var persistKeyWordsTimerName = persistKeyWordsName + '_timer';
var cacheKeyWords = (_utils_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getItem(persistKeyWordsName) || '').split(',');
var ot = new Date(_utils_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getItem(persistKeyWordsTimerName) || 0);
var nt = Date.now();

if (nt - ot > 1000 * 60 * 60 * 24) {
  cacheKeyWords = [];
  _utils_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].setItem(persistKeyWordsTimerName, nt);
}

var DDMSModel =
/*#__PURE__*/
function (_BaseModel) {
  _inherits(DDMSModel, _BaseModel);

  function DDMSModel() {
    var _this;

    _classCallCheck(this, DDMSModel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DDMSModel).call(this));

    _defineProperty(_assertThisInitialized(_this), "getBookmarkOrganizer", function (id, callback) {
      Object(_utils_JSONP__WEBPACK_IMPORTED_MODULE_5__["default"])("".concat(formDataAction, "?callback=?&id=").concat(id)).then(function (data) {
        if (data) {
          callback && callback(data);
        }
      });
    });

    _this._data = {
      organizerSyncId: _utils_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getItem(persistOrganizerName)
    };
    return _this;
  }

  _createClass(DDMSModel, [{
    key: "postKeyWords",
    value: function postKeyWords(val) {
      if (!(_AppModel__WEBPACK_IMPORTED_MODULE_3__["default"].isGithub || _AppModel__WEBPACK_IMPORTED_MODULE_3__["default"].debug)) {
        return;
      }

      if (val && cacheKeyWords.indexOf(val) == -1) {
        _utils_FormHandler__WEBPACK_IMPORTED_MODULE_1__["default"].asyncSubmit(formAction, {
          formid: '56e58775ade3a8e84dbacadf',
          keyword: val
        });

        this._saveKeyWords(val);
      }
    }
  }, {
    key: "postBookmarkUser",
    value: function postBookmarkUser(val) {
      if (val) {
        _utils_FormHandler__WEBPACK_IMPORTED_MODULE_1__["default"].asyncSubmit(formAction, {
          formid: '56e587a9ade3a8e84dbacae1',
          account: val
        });
      }
    }
  }, {
    key: "postBookmarkGroup",
    value: function postBookmarkGroup(repoid, repourl, groupname, lang, stars) {
      if (repoid) {
        _utils_FormHandler__WEBPACK_IMPORTED_MODULE_1__["default"].asyncSubmit(formAction, {
          formid: '56e587ecade3a8e84dbacae3',
          repoid: repoid,
          repourl: repourl,
          groupname: groupname,
          lang: lang,
          stars: stars
        });
      }
    }
  }, {
    key: "postBookmarkOrganizer",
    value: function postBookmarkOrganizer(data, callback) {
      if (data) {
        window.afterPostBookmarkOrganizer = callback;
        _utils_FormHandler__WEBPACK_IMPORTED_MODULE_1__["default"].asyncSubmit(formAction, {
          formid: '56fb7d9dade3a8e84dbacaf0',
          success_url: _utils_Tools__WEBPACK_IMPORTED_MODULE_4__["thisPath"] + 'ddms_frame_callback.html?frame_callback=afterPostBookmarkOrganizer',
          data: data
        });
      }
    }
  }, {
    key: "postUpdateBookmarkOrganizer",
    value: function postUpdateBookmarkOrganizer(id, data, callback) {
      if (id && data) {
        window.afterPostUpdateBookmarkOrganizer = callback;
        _utils_FormHandler__WEBPACK_IMPORTED_MODULE_1__["default"].asyncSubmit(formDataAction, {
          id: id,
          success_url: _utils_Tools__WEBPACK_IMPORTED_MODULE_4__["thisPath"] + 'ddms_frame_callback.html?frame_callback=afterPostUpdateBookmarkOrganizer',
          data: data
        });
      }
    }
  }, {
    key: "_saveKeyWords",
    value: function _saveKeyWords(val) {
      if (cacheKeyWords.indexOf(val) == -1) {
        cacheKeyWords.push(val);
        _utils_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].setItem(persistKeyWordsName, cacheKeyWords.join(',').replace(/^,*/g, '').replace(/,*&/g, ''));
      }
    }
  }, {
    key: "organizerSyncId",
    set: function set(val) {
      this._data.organizerSyncId = val;
      _utils_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].setItem(persistOrganizerName, val);
    },
    get: function get() {
      return this._data.organizerSyncId || _utils_LocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getItem(persistOrganizerName);
    }
  }]);

  return DDMSModel;
}(_BaseModel__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (new DDMSModel());

/***/ }),

/***/ "./src/models/SearchCodeModel.js":
/*!***************************************!*\
  !*** ./src/models/SearchCodeModel.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel */ "./src/models/BaseModel.js");
/* harmony import */ var _utils_Tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Tools */ "./src/utils/Tools.js");
/* harmony import */ var _metadata_YoudaoTranslateData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata/YoudaoTranslateData */ "./src/models/metadata/YoudaoTranslateData.js");
/* harmony import */ var _utils_JSONP__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/JSONP */ "./src/utils/JSONP.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Store */ "./src/models/Store.js");
/* harmony import */ var _AppModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AppModel */ "./src/models/AppModel.js");
/* harmony import */ var _utils_LocalStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/LocalStorage */ "./src/utils/LocalStorage.js");
/* harmony import */ var _constants_Configs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/Configs */ "./src/constants/Configs.js");
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









var SEARCH_LANG_KEY = "".concat(_constants_Configs__WEBPACK_IMPORTED_MODULE_7__["APP_NANE"], "_search_lang_key");

var SearchCodeModel =
/*#__PURE__*/
function (_BaseModel) {
  _inherits(SearchCodeModel, _BaseModel);

  function SearchCodeModel() {
    var _this;

    _classCallCheck(this, SearchCodeModel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchCodeModel).call(this));
    _this._data = {
      isZH: false,
      searchValue: null,
      searchLang: _utils_LocalStorage__WEBPACK_IMPORTED_MODULE_6__["SessionStorage"].getItem(SEARCH_LANG_KEY),
      page: 0,
      variableList: [],
      suggestion: [],
      sourceCode: null
    };
    _this._variableRepoMapping = {};
    _this._sourceCodeStore = new _Store__WEBPACK_IMPORTED_MODULE_4__["default"](Infinity);
    _this._variableListStore = new _Store__WEBPACK_IMPORTED_MODULE_4__["default"](Infinity, {
      persistence: 'session',
      persistenceKey: _AppModel__WEBPACK_IMPORTED_MODULE_5__["default"].genPersistenceKey('variable_list_key')
    });
    return _this;
  } //search code by query


  _createClass(SearchCodeModel, [{
    key: "requestVariable",
    value: function () {
      var _requestVariable = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(val, page, lang) {
        var _this2 = this;

        var q, suggestion, isZH, translate, cacheId, cache, langParams, qParams, url, done;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                lang = lang || this.searchLang;
                _utils_LocalStorage__WEBPACK_IMPORTED_MODULE_6__["SessionStorage"].setItem(SEARCH_LANG_KEY, lang); // persist lang

                if (val !== undefined && val !== null) {
                  val = val.trim().replace(/\s+/ig, ' '); // filter spaces
                }

                if (!(val.length < 1)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                q = val;
                suggestion = this._parseSuggestion(val.split(' '));
                isZH = this._isZH(val);

                if (!isZH) {
                  _context.next = 13;
                  break;
                }

                _context.next = 11;
                return _metadata_YoudaoTranslateData__WEBPACK_IMPORTED_MODULE_2__["default"].request(val);

              case 11:
                translate = _context.sent;

                if (translate) {
                  q = translate.translation;
                  suggestion = this._parseSuggestion(translate.suggestion, suggestion);
                  suggestion = this._parseSuggestion(q.split(' '), suggestion);
                } else {
                  this.update({
                    searchValue: val,
                    page: page,
                    variableList: [].concat(_toConsumableArray(this.variableList), [[]]),
                    searchLang: lang,
                    suggestion: suggestion,
                    isZH: isZH || this.isZH
                  });
                }

              case 13:
                cacheId = _utils_Tools__WEBPACK_IMPORTED_MODULE_1__["MD5"](q + page + (lang && lang.length ? lang.join(',') : ''));
                cache = this._variableListStore.get(cacheId);

                if (!cache) {
                  _context.next = 18;
                  break;
                }

                this.update(cache);
                return _context.abrupt("return");

              case 18:
                // multiple val separate with '+'
                // const url = `//searchcode.com/api/codesearch_I/?q=${q.replace(' ', '+')}&p=${page}&per_page=42${lang.length ? ('&lan=' + lang.join(',')) : ''}`;
                langParams = lang.length ? '&lan=' + lang.join(',').split(',').join('&lan=') : '';
                qParams = q.replace(' ', '+');
                url = "//searchcode.com/api/jsonp_codesearch_I/?callback=?&q=".concat(qParams, "&p=").concat(page, "&per_page=42").concat(langParams);

                done = function done(data) {
                  var cdata = {
                    searchValue: val,
                    page: page,
                    variableList: [].concat(_toConsumableArray(_this2._data.variableList), [_this2._parseVariableList(data.results, q)]),
                    searchLang: lang,
                    suggestion: suggestion,
                    isZH: isZH || _this2.isZH
                  };

                  _this2.update(cdata);

                  _this2._variableListStore.save(cacheId, cdata);
                };

                val && Object(_utils_JSONP__WEBPACK_IMPORTED_MODULE_3__["default"])(url, {
                  callbackName: 'searchcodeRequestVariableCallback'
                }).then(done)["catch"](function () {
                  // fallback to fetch
                  fetch("//searchcode.com/api/codesearch_I/?q=".concat(qParams, "&p=").concat(page, "&per_page=42").concat(langParams)).then(function (res) {
                    return res.json();
                  }).then(done)["catch"](function () {
                    _this2.update({
                      searchValue: val,
                      page: page,
                      variableList: [].concat(_toConsumableArray(_this2.variableList), [[]]),
                      searchLang: lang,
                      suggestion: suggestion,
                      isZH: isZH || _this2.isZH
                    });
                  });
                });

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function requestVariable(_x, _x2, _x3) {
        return _requestVariable.apply(this, arguments);
      }

      return requestVariable;
    }() //get source code by id

  }, {
    key: "requestSourceCode",
    value: function requestSourceCode(id) {
      var _this3 = this;

      var cache = this._sourceCodeStore.get(id);

      if (cache) {
        this.update({
          sourceCode: cache
        });
        return;
      }

      id && fetch('https://searchcode.com/api/result/' + id + '/').then(function (res) {
        return res.json();
      }).then(function (data) {
        _this3._sourceCodeStore.save(id, data.code);

        _this3.update({
          sourceCode: data.code
        });
      });
    }
  }, {
    key: "getKeyWordReg",
    value: function getKeyWordReg(keyword) {
      return new RegExp('([\\-_\\w\\d\\/\\$]{0,}){0,1}' + keyword + '([\\-_\\w\\d\\$]{0,}){0,1}', 'gi');
    }
  }, {
    key: "getKeyWroddRegs",
    value: function getKeyWroddRegs(keywords) {
      var _this4 = this;

      return keywords.split(' ').reduce(function (accumulator, curr) {
        if (curr.length && curr.length > 1) {
          return accumulator.concat(_this4.getKeyWordReg(curr));
        }

        return accumulator;
      }, []);
    }
  }, {
    key: "_parseVariableList",
    value: function _parseVariableList(results, keywords) {
      var _this5 = this;

      var vals = [],
          variables = [];
      results.forEach(function (res) {
        res.repo = res.repo.replace('git://github.com', 'https://github.com'); //filter codes

        var lineStr = Object.keys(res.lines).reduce(function (accu, line) {
          var lstr = res.lines[line]; //no base64

          if (!(/;base64,/g.test(lstr) && lstr.length > 256)) {
            return accu.concat(lstr);
          }

          return accu;
        }, []).join('').replace(/\r\n/g, ' '); // remove \r\n
        //match variables

        _this5.getKeyWroddRegs(keywords).forEach(function (reg) {
          (lineStr.match(reg) || []).forEach(function (val) {
            //remove "-" and "/" from the start and the end
            val = val.replace(/^(\-|\/)*/, '').replace(/(\-|\/)*$/, '');

            _this5._updateVariableRepoMapping(val, res);

            if (!/\//g.test(val)
            /*exclude links*/
            && vals.indexOf(val) === -1 && vals.indexOf(val.toLowerCase()) === -1 && vals.indexOf(val.toUpperCase()) === -1 && val.length < 64
            /*too long*/
            ) {
                vals.push(val);
                variables.push({
                  keyword: val,
                  repoLink: res.repo,
                  repoLang: res.language,
                  color: _utils_Tools__WEBPACK_IMPORTED_MODULE_1__["randomLabelColor"]()
                });
              }
          });
        });
      });
      return variables.map(function (val) {
        val.repoList = _this5._getVariableRepoMapping(val.keyword);
        return val;
      });
    }
  }, {
    key: "_parseSuggestion",
    value: function _parseSuggestion(keywords, curr) {
      var _this6 = this;

      var suggestion = curr || this.suggestion;

      if (keywords) {
        suggestion = keywords.concat(suggestion);
      }

      return _toConsumableArray(new Set(suggestion)).filter(function (item, i) {
        return !_this6._isZH(item);
      });
    }
  }, {
    key: "_updateVariableRepoMapping",
    value: function _updateVariableRepoMapping(val, repo) {
      if (!/\//g.test(val)
      /*exclude links*/
      && val.length < 64
      /*too long*/
      ) {
          val = "__".concat(val.toLowerCase());
          this._variableRepoMapping[val] = this._variableRepoMapping[val] || [];

          if (!this._variableRepoMapping[val].find(function (key) {
            return key.id == repo.id;
          })) {
            repo.lines = null;
            delete repo.lines;

            this._variableRepoMapping[val].push(repo);
          }
        }
    }
  }, {
    key: "_getVariableRepoMapping",
    value: function _getVariableRepoMapping(val) {
      val = "__".concat(val.toLowerCase());
      return this._variableRepoMapping[val];
    }
  }, {
    key: "_isZH",
    value: function _isZH(val) {
      var isZH = false;
      val.replace(/\s+/ig, '+').split('+').forEach(function (key) {
        if (/[^\x00-\xff]/gi.test(key)) {
          isZH = true;
        }
      });
      return isZH;
    }
  }, {
    key: "searchValue",
    get: function get() {
      return this._data.searchValue;
    }
  }, {
    key: "searchLang",
    get: function get() {
      return this._data.searchLang || _utils_LocalStorage__WEBPACK_IMPORTED_MODULE_6__["SessionStorage"].getItem(SEARCH_LANG_KEY) || [];
    }
  }, {
    key: "page",
    get: function get() {
      return this._data.page;
    }
  }, {
    key: "variableList",
    get: function get() {
      return this._data.variableList;
    }
  }, {
    key: "suggestion",
    get: function get() {
      return this._data.suggestion;
    }
  }, {
    key: "isZH",
    get: function get() {
      return this._data.isZH;
    }
  }, {
    key: "sourceCode",
    get: function get() {
      return this._data.sourceCode;
    }
  }]);

  return SearchCodeModel;
}(_BaseModel__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (new SearchCodeModel());

/***/ }),

/***/ "./src/models/metadata/YoudaoTranslateData.js":
/*!****************************************************!*\
  !*** ./src/models/metadata/YoudaoTranslateData.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Store */ "./src/models/Store.js");
/* harmony import */ var _utils_JSONP__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/JSONP */ "./src/utils/JSONP.js");
/* harmony import */ var _AppModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppModel */ "./src/models/AppModel.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var YoudaoTranslateData =
/*#__PURE__*/
function () {
  function YoudaoTranslateData() {
    _classCallCheck(this, YoudaoTranslateData);

    this._store = new _Store__WEBPACK_IMPORTED_MODULE_0__["default"](Infinity, {
      persistence: 'session',
      persistenceKey: _AppModel__WEBPACK_IMPORTED_MODULE_2__["default"].genPersistenceKey('youdao_translate_key')
    });
  }

  _createClass(YoudaoTranslateData, [{
    key: "request",
    value: function () {
      var _request = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(val) {
        var cache, url, data, suggestionStr, tmp, suggestion, translation, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cache = this._store.get(val);

                if (!cache) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", cache);

              case 3:
                /**
                 * 特别重要，必读！
                 * CODELF 用的是有道翻译 API 的免费套餐，1小时仅有1K的请求次数限制！
                 * 所以，如果你想二次开发，请单独申请自己的有道翻译 API 的 KEY，否则会直接影响 CODELF 的用户。
                 * 有道翻译 API 申请参看： http://fanyi.youdao.com/openapi?path=data-mode
                 */
                url = "//fanyi.youdao.com/openapi.do?callback=?&keyfrom=Codelf&key=2023743559&type=data&doctype=jsonp&version=1.1&q=".concat(val);
                _context.next = 6;
                return Object(_utils_JSONP__WEBPACK_IMPORTED_MODULE_1__["default"])(url, {
                  callbackName: 'youdaoFanyiRequestCallback'
                });

              case 6:
                data = _context.sent;
                _context.prev = 7;
                suggestionStr = '';
                tmp = [];

                //basic translate
                if (data.basic && data.basic.explains) {
                  suggestionStr += data.basic.explains.join(' ');
                  translation = suggestionStr;
                } //web translate


                if (data.web && data.web) {
                  data.web.forEach(function (key) {
                    suggestionStr += ' ' + key.value.join(' ');
                  });
                }

                suggestion = suggestionStr && suggestionStr.replace(/[`~!@#$^&*()=|{}':;',\[\].<>\/?~！@#￥……&*（）——|\\{\\}【】‘；：”“’。，、？]/g, ' ').replace(/\s+/ig, '+').split('+').filter(function (key, idx, inputArray) {
                  var checked = key.length > 1 && inputArray.indexOf(key) == idx && !/[^\x00-\xff]/gi.test(key) && !tmp.find(function (ikey) {
                    return new RegExp('^' + key + '$', 'ig').test(ikey);
                  });

                  if (checked) {
                    tmp.push(key);
                  }

                  return checked;
                });

                if (data && data.translation) {
                  translation = data.translation.join(' ').replace(/[!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g, '').split(' ').filter(function (key, idx, inputArray) {
                    return inputArray.indexOf(key) == idx && !/^(a|an|the)$/ig.test(key);
                  }).join(' ');
                }

                response = {
                  suggestion: suggestion,
                  translation: translation
                };

                this._store.save(val, response);

                return _context.abrupt("return", response);

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](7);
                return _context.abrupt("return", null);

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 19]]);
      }));

      function request(_x) {
        return _request.apply(this, arguments);
      }

      return request;
    }()
  }]);

  return YoudaoTranslateData;
}();

/* harmony default export */ __webpack_exports__["default"] = (new YoudaoTranslateData());

/***/ }),

/***/ "./src/utils/FormHandler.js":
/*!**********************************!*\
  !*** ./src/utils/FormHandler.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navigator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigator */ "./src/utils/Navigator.js");

var FormHandler = new function () {
  function getForm(method) {
    var _form = document.createElement('form');

    _form.setAttribute("style", "display:none;width:0;height:0;position: absolute;top:0;left:0;border:0;");

    _form.setAttribute("method", method || 'POST');

    document.body.appendChild(_form);
    return _form;
  }

  this.asyncSubmit = function (action, data) {
    this.submit(action, data, true);
  };

  this.submit = function (action, data, async) {
    var target,
        frame,
        form = getForm(),
        inputs = [],
        itpl = '<input type="text" name="{N}" value="{V}" />';

    if (async) {
      target = '__formhandler_' + new Date().getTime();
      frame = _Navigator__WEBPACK_IMPORTED_MODULE_0__["default"].getFrame(null, target);
      form.setAttribute('target', target);
      setTimeout(function () {
        _Navigator__WEBPACK_IMPORTED_MODULE_0__["default"].removeFrame(frame);
      }, 120000);
    }

    form.setAttribute('action', action);
    data = data || {};

    for (var key in data) {
      inputs.push(itpl.replace('{N}', key).replace('{V}', data[key]));
    }

    form.innerHTML = inputs.join('');
    action && setTimeout(function () {
      form.submit();
    }, 100);
  };
}();
/* harmony default export */ __webpack_exports__["default"] = (FormHandler);

/***/ }),

/***/ "./src/utils/HashHandler.js":
/*!**********************************!*\
  !*** ./src/utils/HashHandler.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var HashHandler = function () {
  var lc = window.location;

  function getByURL(url) {
    var hash;
    url && decodeURIComponent(url).replace(new RegExp('#(.*)', 'g'), function ($1, $2) {
      hash = $2;
    });
    return hash && decodeURIComponent(hash);
  }

  function get() {
    return getByURL(lc.hash);
  }

  function set(hash) {
    if (hash) {
      lc.hash = encodeURIComponent(hash);
    }
  }

  return {
    get: get,
    set: set,
    getByURL: getByURL
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (HashHandler);

/***/ }),

/***/ "./src/utils/JSONP.js":
/*!****************************!*\
  !*** ./src/utils/JSONP.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var JSONP = function JSONP(url, options) {
  options = options || {};
  url = options.url || url;
  return new Promise(function (resolve, reject) {
    var timer = 0;
    var script = document.createElement('script');
    var callbackName = options.callbackName || "__jsonp_".concat(Date.now(), "_callback");
    url = url.replace('=?', "=".concat(callbackName).concat(options.nocache ? '&_=' + Date.now() : ''));

    var done = function done() {
      window.clearTimeout(timer);

      try {
        document.head.removeChild(script);
      } catch (e) {}

      window[callbackName] = null;
    };

    var onerror = function onerror() {
      window.removeEventListener('error', onerror);
      done();
      reject();
    };

    window[callbackName] = function () {
      done();
      resolve.apply(void 0, arguments);
    };

    timer = setTimeout(onerror, 5 * 60 * 1000); // timeout in 5 min

    window.addEventListener('error', onerror);
    script.onerror = onerror;
    script.src = url;
    document.head.appendChild(script);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (JSONP);

/***/ })

}]);
//# sourceMappingURL=4.app.js.map