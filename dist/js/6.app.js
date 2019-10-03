(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/containers/NavBarContainer.js":
/*!*******************************************!*\
  !*** ./src/containers/NavBarContainer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBarContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _models_CopybookModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/CopybookModel */ "./src/models/CopybookModel.js");



function NavBarContainer() {
  function handleOpenCopybook() {
    _models_CopybookModel__WEBPACK_IMPORTED_MODULE_2__["default"].update({
      visible: true
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "nav-bar-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Popup"], {
    hoverable: true,
    trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "copybook-btn animated fadeInDown",
      onClick: handleOpenCopybook
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "clipboard"
    }))
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "thumbs up outline"
  }), " Daily algorithm copybook, learn algorithm easily!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Popup"], {
    hoverable: true,
    trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bookmark-btn animated fadeInDown"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "bookmark"
    }))
  }, "Sorry, GitHub stars organize tool currently is not available, ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/unbug/codelf/projects/2",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "new version"), " is coming soon :)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/unbug/codelf",
    className: "github-corner animated fadeInDown",
    title: "Star me on GitHub",
    target: "_blank",
    rel: "noopener noreferrer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "github square"
  }))));
}

/***/ })

}]);
//# sourceMappingURL=6.app.js.map