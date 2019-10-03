(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./src/containers/NoticeContainer.js":
/*!*******************************************!*\
  !*** ./src/containers/NoticeContainer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoticeContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");


function NoticeContainer() {
  var listEl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  useSliderEffect(listEl);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "notice-container",
    ref: listEl
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "animated fadeIn show",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.yuque.com/?CODELF"
  }, "[\u8BED\u96C0] \u963F\u91CC\u6280\u672F\u56E2\u961F\u6253\u9020\u7684\u4E13\u4E1A\u4E91\u77E5\u8BC6\u5E93"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "animated fadeIn",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://github.com/unbug/snts"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "heartbeat"
  }), " SAY NO TO SUICIDE PUBLIC LICENSE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "animated fadeIn",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "//mihtool.com/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "code"
  }), " [MIHTool] iOS \u4E0A\u8C03\u8BD5\u548C\u4F18\u5316\u9875\u9762\u7684\u5DE5\u5177"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "animated fadeIn",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.wasmrocks.com/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "hand rock"
  }), " WebAssembly Rocks"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "animated fadeIn",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://github.com/unbug/react-native-train/blob/master/README.md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "video"
  }), " [\u5F00\u6E90] React Native \u5F00\u53D1\u57F9\u8BAD\u8D44\u6599\u548C\u89C6\u9891"));
}

function useSliderEffect(el) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var timer = setInterval(function () {
      return renderItem(el.current.children);
    }, 10000);
    return function () {
      return clearInterval(timer);
    };
  }, []); // run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([])

  var active = 1;

  function renderItem(list) {
    Array.prototype.forEach.call(list, function (item, i) {
      if (i === active) {
        item.classList.add('show');
      } else {
        item.classList.remove('show');
      }
    });
    active = (active + 1) % list.length;
  }
}

/***/ })

}]);
//# sourceMappingURL=7.app.js.map