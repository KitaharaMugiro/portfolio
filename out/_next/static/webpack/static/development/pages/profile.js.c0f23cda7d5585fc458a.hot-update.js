webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./components/Timeline.tsx":
/*!*********************************!*\
  !*** ./components/Timeline.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-vertical-timeline-component */ "./node_modules/react-vertical-timeline-component/dist-es6/index.js");
/* harmony import */ var react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contents_MyHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contents/MyHistory */ "./contents/MyHistory.ts");
var _jsxFileName = "/Users/kitagenbakurou/portfolio/components/Timeline.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //https://github.com/stephane-monnot/react-vertical-timeline

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var renderElements = function renderElements() {
    return _contents_MyHistory__WEBPACK_IMPORTED_MODULE_2__["MyHistory"].map(function (history) {
      return __jsx(react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_1__["VerticalTimelineElement"], {
        className: "vertical-timeline-element--work",
        contentStyle: {
          background: "rgb(33, 150, 243)",
          color: "#fff"
        },
        contentArrowStyle: {
          borderRight: "7px solid  rgb(33, 150, 243)"
        },
        date: "2011 - present",
        iconStyle: {
          background: "rgb(33, 150, 243)",
          color: "#fff"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx("h3", {
        className: "vertical-timeline-element-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Creative Director"), __jsx("h4", {
        className: "vertical-timeline-element-subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Miami, FL"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"));
    });
  };

  return __jsx(react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_1__["VerticalTimeline"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, renderElements());
});

/***/ })

})
//# sourceMappingURL=profile.js.c0f23cda7d5585fc458a.hot-update.js.map