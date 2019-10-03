(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/components/Copybook.js":
/*!************************************!*\
  !*** ./src/components/Copybook.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Copybook; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading */ "./src/components/Loading.js");
/* harmony import */ var _hooks_useCodeHighlighting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useCodeHighlighting */ "./src/components/hooks/useCodeHighlighting.js");




function Copybook(props) {
  var codeEl = Object(_hooks_useCodeHighlighting__WEBPACK_IMPORTED_MODULE_3__["default"])([props.copybookFileContent, props.copybookVisible]);
  var editorEl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  function handleClose() {
    props.onCloseCopybook();
  }

  function handleDropdownChange(e, _ref) {
    var searchQuery = _ref.searchQuery,
        value = _ref.value;

    if (value != props.copybookSelectedFile.path) {
      props.onRequestCopybookFile(props.copybookFileList.find(function (f) {
        return f.path === value;
      }));
    }
  }

  function renderDropdownItem() {
    if (!props.copybookFileList) {
      return null;
    }

    return props.copybookFileList.map(function (file, idx) {
      return {
        key: file.path,
        value: file.path,
        text: idx + 1 + '. ' + file.path
      };
    });
  }

  if (!props.copybookVisible || !props.copybookFileList || !props.copybookFileContent) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      open: props.copybookVisible,
      onClose: handleClose,
      centered: false,
      closeIcon: true,
      className: props.className,
      size: "large"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title"
    }, "Daily Algorithm Copybook")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
      className: "prettyprint",
      ref: codeEl
    }))));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    open: props.copybookVisible,
    onClose: handleClose,
    centered: false,
    closeIcon: true,
    className: props.className,
    size: "large"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, "Daily Algorithm Copybook"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "tiny",
    as: "a",
    basic: true,
    href: props.copybookSelectedFile.link,
    target: "_blank"
  }, "View In GitHub"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    search: true,
    selection: true,
    onChange: handleDropdownChange,
    value: props.copybookSelectedFile.path,
    options: renderDropdownItem()
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Modal"].Content, null, props.copybookRequesting ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], null) : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
    className: "prettyprint",
    ref: codeEl
  }, props.copybookFileContent.content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editor",
    contentEditable: true,
    ref: editorEl
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

/***/ "./src/containers/CopybookContainer.js":
/*!*********************************************!*\
  !*** ./src/containers/CopybookContainer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CopybookContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_AppModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/AppModel */ "./src/models/AppModel.js");
/* harmony import */ var _models_CopybookModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/CopybookModel */ "./src/models/CopybookModel.js");
/* harmony import */ var _components_Copybook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Copybook */ "./src/components/Copybook.js");
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
  copybookRequesting: false,
  copybookVisible: _models_CopybookModel__WEBPACK_IMPORTED_MODULE_2__["default"].visible,
  copybookFileList: _models_CopybookModel__WEBPACK_IMPORTED_MODULE_2__["default"].fileList,
  copybookSelectedFile: _models_CopybookModel__WEBPACK_IMPORTED_MODULE_2__["default"].selectedFile,
  copybookFileContent: _models_CopybookModel__WEBPACK_IMPORTED_MODULE_2__["default"].fileContent
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.UPDATE:
      return _objectSpread({}, state, {}, action.payload);

    default:
      return state;
  }
}

function CopybookContainer(props) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _models_CopybookModel__WEBPACK_IMPORTED_MODULE_2__["default"].onUpdated(handleCopybookModelUpdate);
    return function () {
      return _models_CopybookModel__WEBPACK_IMPORTED_MODULE_2__["default"].offUpdated(handleCopybookModelUpdate);
    };
  });

  function setState(payload) {
    dispatch({
      type: actionTypes.UPDATE,
      payload: payload
    });
  }

  function handleCopybookModelUpdate(curr, prev, mutation) {
    if (mutation.fileList) {
      setState({
        copybookFileList: _models_CopybookModel__WEBPACK_IMPORTED_MODULE_2__["default"].fileList
      });
    }

    if (mutation.fileContent) {
      setState({
        copybookRequesting: false,
        copybookSelectedFile: _models_CopybookModel__WEBPACK_IMPORTED_MODULE_2__["default"].selectedFile,
        copybookFileContent: _models_CopybookModel__WEBPACK_IMPORTED_MODULE_2__["default"].fileContent
      });
    }

    if (mutation.visible) {
      setState({
        copybookVisible: _models_CopybookModel__WEBPACK_IMPORTED_MODULE_2__["default"].visible
      });

      if (_models_CopybookModel__WEBPACK_IMPORTED_MODULE_2__["default"].visible) {
        _models_AppModel__WEBPACK_IMPORTED_MODULE_1__["default"].analytics('copybook&q=read');
      }
    }
  }

  function handleCloseCopybook() {
    _models_CopybookModel__WEBPACK_IMPORTED_MODULE_2__["default"].update({
      visible: false
    });
  }

  function handleRequestCopybookFile(file) {
    setState({
      copybookRequesting: true
    });
    _models_CopybookModel__WEBPACK_IMPORTED_MODULE_2__["default"].requestRepoFile(file);
    _models_AppModel__WEBPACK_IMPORTED_MODULE_1__["default"].analytics('copybook&q=read');
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Copybook__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, state, {
    className: "copybook-container fix-modal",
    onRequestCopybookFile: handleRequestCopybookFile,
    onCloseCopybook: handleCloseCopybook
  }));
}

/***/ })

}]);
//# sourceMappingURL=5.app.js.map