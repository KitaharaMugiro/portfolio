webpackHotUpdate("static/development/pages/products/share-cycle.js",{

/***/ "./pages/products/share-cycle.tsx":
/*!****************************************!*\
  !*** ./pages/products/share-cycle.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contents_ProductList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contents/ProductList */ "./contents/ProductList.ts");
/* harmony import */ var _constants_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/utils */ "./constants/utils.ts");
/* harmony import */ var _components_Chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Chips */ "./components/Chips.tsx");
/* harmony import */ var _components_ProductStyledComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ProductStyledComponents */ "./components/ProductStyledComponents.tsx");
var _jsxFileName = "/Users/kitagenbakurou/portfolio/pages/products/share-cycle.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var slug = "share-cycle";
var architectImage = Object(_constants_utils__WEBPACK_IMPORTED_MODULE_2__["getPath"])("/share-cycle-architect.png");
var description = "IoTを使わずにQRコードとスマートフォンだけでシェアサイクルを実現させた。QRコードの読み込みで解錠し、解錠せずに利用するとアラームが鳴ることで不正利用を防ぐ。";
var difficulty = "PoCを作成して公園内に配置して利用されるかをテストする予定だったが、公園の許可がおりず断念した。QRコードを読んでwebアプリケーションを起動しapple payで支払って即座に利用開始するUXを実現したかった";
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var product = _contents_ProductList__WEBPACK_IMPORTED_MODULE_1__["ProductList"].find(function (p) {
    return p.slug === slug;
  });

  var renderImage = function renderImage() {
    if (product === null || product === void 0 ? void 0 : product.image) {
      return __jsx(_components_ProductStyledComponents__WEBPACK_IMPORTED_MODULE_4__["Image"], {
        src: Object(_constants_utils__WEBPACK_IMPORTED_MODULE_2__["getPath"])(product.image),
        onClick: function onClick() {
          return window.location.href = "/products/" + slug;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      });
    }
  };

  if (!product) {
    console.error("見つかりません");
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    });
  }

  return __jsx(_components_ProductStyledComponents__WEBPACK_IMPORTED_MODULE_4__["Frame"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, renderImage(), __jsx(_components_ProductStyledComponents__WEBPACK_IMPORTED_MODULE_4__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, product === null || product === void 0 ? void 0 : product.name), __jsx(_components_Chips__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tags: product === null || product === void 0 ? void 0 : product.tags,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(_components_ProductStyledComponents__WEBPACK_IMPORTED_MODULE_4__["Description"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, description), __jsx(_components_ProductStyledComponents__WEBPACK_IMPORTED_MODULE_4__["HeaderLine"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u56F3(\u30AF\u30EA\u30C3\u30AF\u3067\u62E1\u5927)"), __jsx(_components_ProductStyledComponents__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    src: architectImage,
    onClick: function onClick() {
      return window.location.href = "/products/" + slug;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(_components_ProductStyledComponents__WEBPACK_IMPORTED_MODULE_4__["HeaderLine"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "\u82E6\u52B4\u3057\u305F\u3053\u3068/\u3069\u3046\u4E57\u308A\u8D8A\u3048\u305F\u304B"), __jsx(_components_ProductStyledComponents__WEBPACK_IMPORTED_MODULE_4__["Description"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, difficulty), __jsx(_components_ProductStyledComponents__WEBPACK_IMPORTED_MODULE_4__["HeaderLine"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "\u8A73\u7D30\u30EA\u30F3\u30AF"), __jsx(_components_ProductStyledComponents__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: "https://hackmd.io/NqMcAjL0Q-SQbyAzOkqPWg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "\u30A2\u30A4\u30C7\u30A3\u30A2\u8AAC\u660E\u8CC7\u6599"), __jsx(_components_ProductStyledComponents__WEBPACK_IMPORTED_MODULE_4__["HeaderLine"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Github"), __jsx(_components_ProductStyledComponents__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: "https://github.com/KitaharaMugiro/rental-cycle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "rental-cycle"));
});

/***/ })

})
//# sourceMappingURL=share-cycle.js.f28fde420aa0be920170.hot-update.js.map