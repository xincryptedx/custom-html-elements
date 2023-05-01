/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/imageSlider/style.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/imageSlider/style.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --image-width: 180px;\n  --image-height: 200px;\n  --spacer-width: 100px;\n\n  --img-window-width: calc(var(--image-width) + var(--spacer-width));\n\n  --nav-circle-size: 17px;\n}\n\n.image-slider {\n  display: grid;\n  grid-template: var(--image-height) 50px / 50px var(--img-window-width) 50px;\n  grid-template-areas:\n    \"previous img next\"\n    \". nav .\";\n}\n\n.reel-container {\n  grid-area: img;\n\n  position: relative;\n\n  overflow: hidden;\n\n  border: 2px solid black;\n  border-radius: 5px;\n}\n\n.reel {\n  display: grid;\n  grid-auto-flow: column;\n\n  position: absolute;\n  z-index: -1;\n\n  transition: left 0.5s ease-in-out;\n}\n\n.slide {\n  height: var(--image-height);\n  width: var(--image-width);\n}\n\n.spacer {\n  width: var(--spacer-width);\n  background-color: lightgrey;\n}\n\n.previous-btn {\n  grid-area: previous;\n}\n\n.next-btn {\n  grid-area: next;\n  justify-self: end;\n}\n\n.previous-btn,\n.next-btn {\n  align-self: center;\n}\n\n.nav-circles-container {\n  grid-area: nav;\n\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.nav-circle {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n\n  height: var(--nav-circle-size);\n  width: var(--nav-circle-size);\n\n  border-radius: var(--nav-circle-size);\n  background-color: lightgrey;\n  border: 2px solid black;\n}\n\n.nav-circle .fill {\n  background-color: rgb(47, 167, 0);\n  height: 0;\n  aspect-ratio: 1 / 1;\n  border-radius: var(--nav-circle-size);\n\n  transition: height 0.5s ease-in-out;\n}\n\n.nav-circle.selected .fill {\n  height: var(--nav-circle-size);\n}\n", "",{"version":3,"sources":["webpack://./src/modules/imageSlider/style.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,qBAAqB;EACrB,qBAAqB;;EAErB,kEAAkE;;EAElE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,2EAA2E;EAC3E;;aAEW;AACb;;AAEA;EACE,cAAc;;EAEd,kBAAkB;;EAElB,gBAAgB;;EAEhB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,kBAAkB;EAClB,WAAW;;EAEX,iCAAiC;AACnC;;AAEA;EACE,2BAA2B;EAC3B,yBAAyB;AAC3B;;AAEA;EACE,0BAA0B;EAC1B,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,cAAc;;EAEd,aAAa;EACb,iBAAiB;EACjB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;;EAErB,8BAA8B;EAC9B,6BAA6B;;EAE7B,qCAAqC;EACrC,2BAA2B;EAC3B,uBAAuB;AACzB;;AAEA;EACE,iCAAiC;EACjC,SAAS;EACT,mBAAmB;EACnB,qCAAqC;;EAErC,mCAAmC;AACrC;;AAEA;EACE,8BAA8B;AAChC","sourcesContent":[":root {\n  --image-width: 180px;\n  --image-height: 200px;\n  --spacer-width: 100px;\n\n  --img-window-width: calc(var(--image-width) + var(--spacer-width));\n\n  --nav-circle-size: 17px;\n}\n\n.image-slider {\n  display: grid;\n  grid-template: var(--image-height) 50px / 50px var(--img-window-width) 50px;\n  grid-template-areas:\n    \"previous img next\"\n    \". nav .\";\n}\n\n.reel-container {\n  grid-area: img;\n\n  position: relative;\n\n  overflow: hidden;\n\n  border: 2px solid black;\n  border-radius: 5px;\n}\n\n.reel {\n  display: grid;\n  grid-auto-flow: column;\n\n  position: absolute;\n  z-index: -1;\n\n  transition: left 0.5s ease-in-out;\n}\n\n.slide {\n  height: var(--image-height);\n  width: var(--image-width);\n}\n\n.spacer {\n  width: var(--spacer-width);\n  background-color: lightgrey;\n}\n\n.previous-btn {\n  grid-area: previous;\n}\n\n.next-btn {\n  grid-area: next;\n  justify-self: end;\n}\n\n.previous-btn,\n.next-btn {\n  align-self: center;\n}\n\n.nav-circles-container {\n  grid-area: nav;\n\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.nav-circle {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n\n  height: var(--nav-circle-size);\n  width: var(--nav-circle-size);\n\n  border-radius: var(--nav-circle-size);\n  background-color: lightgrey;\n  border: 2px solid black;\n}\n\n.nav-circle .fill {\n  background-color: rgb(47, 167, 0);\n  height: 0;\n  aspect-ratio: 1 / 1;\n  border-radius: var(--nav-circle-size);\n\n  transition: height 0.5s ease-in-out;\n}\n\n.nav-circle.selected .fill {\n  height: var(--nav-circle-size);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/modules/imageSlider/style.css":
/*!*******************************************!*\
  !*** ./src/modules/imageSlider/style.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/imageSlider/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/dropDown/dropDown.js":
/*!******************************************!*\
  !*** ./src/modules/dropDown/dropDown.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validateMenuData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateMenuData */ "./src/modules/dropDown/validateMenuData.js");
/* harmony import */ var _arrow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow.svg */ "./src/modules/dropDown/arrow.svg");
/* harmony import */ var _generateDefaultStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateDefaultStyle */ "./src/modules/dropDown/generateDefaultStyle.js");




const dropDown = (menuData, allowUserSetValues, type) => {
  // #region Properties
  const parentClasses = "drop-down";

  const placeholderText = "--Select--";

  // Menu Data
  const defaultData = ["Invalid", "Or", "Missing", "Menu", "Data"];

  // Validate passed data with sub module
  const validatedData = (0,_validateMenuData__WEBPACK_IMPORTED_MODULE_0__["default"])(defaultData, menuData);

  // --Functional Variations--
  let autoSuggest = false;
  let autoComplete = false;
  const userSetValues =
    typeof allowUserSetValues === "boolean" ? allowUserSetValues : false;
  // Set initial states based on params
  switch (type) {
    case "autoSuggest":
      autoSuggest = true;
      break;
    case "autoComplete":
      autoComplete = true;
      break;
    default:
      autoComplete = false;
      autoSuggest = false;
      break;
  }

  // Input required in forms?
  // const required = false;

  const styleOptions = {
    menuItemHeight: 18,
    menuMaxHeight: 150,
    zIndex: 2,
  };
  /* detatched bool
   style options enum
   style 
   animated bool */

  const styleClasses = {
    container: "container",
    selection: "selection",
    arrow: "arrow",
    menu: "menu",
    scrollContainer: "scrollContainer",
    scrollbar: "scrollbar",
    optgroup: "optgroup",
    option: "option",
    divider: "divider",
    feedback: "feedback",
    menuAndFeedbackContainer: "menuAndFeedbackContainer",
  };

  // #endregion

  // #region HTML Creation Helper methods
  // Add classes to html element
  const addClasses = (classes, element) => {
    const classesToAdd = [];
    if (typeof classes === "string") {
      classesToAdd.push(classes);
    } else if (Array.isArray(classes)) {
      classes.forEach((cls) => {
        if (typeof cls === "string") {
          classesToAdd.push(cls);
        }
      });
    }

    if (classesToAdd.length > 0) {
      element.classList.add(...classesToAdd);
    }
  };

  // Create menu html elements
  const createMenu = (menuElement) => {
    for (let i = 0; i < validatedData.length; i += 1) {
      // Option Group
      if (validatedData[i].startsWith("#")) {
        const optgroup = document.createElement("p");
        addClasses(styleClasses.optgroup, optgroup);
        optgroup.textContent = validatedData[i];
        menuElement.appendChild(optgroup);
      } // Divider
      else if (validatedData[i] === "_") {
        const divider = document.createElement("div");
        addClasses(styleClasses.divider, divider);
        menuElement.appendChild(divider);
      } // Option
      else {
        const option = document.createElement("p");
        addClasses(styleClasses.option, option);
        option.textContent = validatedData[i];
        menuElement.appendChild(option);
      }
    }
  };

  const dropDownClicked = (menu, arrow) => {
    // Toggle the menu show class and flip arrow
    menu.classList.toggle("show");
    if (menu.classList.contains("show")) arrow.classList.add("flip");
    else arrow.classList.remove("flip");
    // Add one time event listener to close dropdown on outside click
    document.addEventListener(
      "mouseup",
      () => {
        if (menu.classList.contains("show")) {
          menu.classList.toggle("show");
          arrow.classList.remove("flip");
        }
      },
      { once: true }
    );
  };

  const arrowClicked = (menu, arrow) => {
    if (menu.classList.contains("show")) {
      menu.classList.toggle("show");
      arrow.classList.remove("flip");
    } else {
      dropDownClicked(menu, arrow);
    }
  };

  const updateScrollBar = (menu, scrollbar, scrollContainer) => {
    const { scrollTop } = menu;
    const { scrollHeight } = menu;
    const menuHeight = menu.offsetHeight;
    const maxScroll = Math.floor(scrollHeight - menuHeight);
    const scrolledPercent = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
    const scrollContainerHeight = scrollContainer.offsetHeight;

    const scrollbarHeightRatio = menuHeight / scrollHeight;
    const hiddenAreaHeight = scrollHeight - menuHeight;
    const visibleScrollbarHeight = hiddenAreaHeight * scrollbarHeightRatio;

    const scrollElement = scrollbar;

    scrollElement.style.top = `${Math.min(
      Math.max(scrolledPercent * scrollContainerHeight, 2),
      scrollContainerHeight - visibleScrollbarHeight
    )}px`;
    scrollElement.style.height = `${visibleScrollbarHeight}px`;
  };

  // #endregion

  // #region Create the html
  const createHTML = () => {
    // Parent
    const element = document.createElement("div");
    addClasses(parentClasses, element);

    // Attatch shadow root to encapsulate children and style
    const shadowRoot = element.attachShadow({ mode: "open" });

    // Container
    const container = document.createElement("div");
    addClasses(styleClasses.container, container);
    shadowRoot.appendChild(container);

    // Either a p if standard or text input if autoSuggest, autoComplete, or userSetValues are true
    const selection = document.createElement("input");
    selection.setAttribute("type", "text");
    selection.placeholder = placeholderText;
    selection.textContent = placeholderText;

    if (autoSuggest || autoComplete || userSetValues) {
      selection.readOnly = false;
    } else {
      selection.readOnly = true;
    }

    const inputId = "selection";
    selection.setAttribute("id", inputId);
    addClasses(styleClasses.selection, selection);
    container.appendChild(selection);

    // Arrow
    const arrow = document.createElement("img");
    arrow.src = _arrow_svg__WEBPACK_IMPORTED_MODULE_1__;
    addClasses(styleClasses.arrow, arrow);
    container.appendChild(arrow);

    // Div that holds menu and feedback so they can both expand over top of other elements
    const menuAndFeedbackContainer = document.createElement("div");
    addClasses(styleClasses.menuAndFeedbackContainer, menuAndFeedbackContainer);
    shadowRoot.appendChild(menuAndFeedbackContainer);

    // Dropdown menu
    const menu = document.createElement("div");
    addClasses(styleClasses.menu, menu);
    menuAndFeedbackContainer.appendChild(menu);

    // Scroll container
    const scrollContainer = document.createElement("div");
    addClasses(styleClasses.scrollContainer, scrollContainer);
    menuAndFeedbackContainer.appendChild(scrollContainer);

    // Scroll bar
    const scrollbar = document.createElement("div");
    addClasses(styleClasses.scrollbar, scrollbar);
    scrollContainer.appendChild(scrollbar);

    // Menu items, cagetgories, and dividers created from menu data
    createMenu(menu);

    // feedback text
    const feedback = document.createElement("p");
    addClasses(styleClasses.feedback, feedback);
    menuAndFeedbackContainer.appendChild(feedback);

    // Add event listeners for toggling menu show class
    selection.addEventListener("click", () => {
      dropDownClicked(menu, arrow);
    });
    arrow.addEventListener("mouseup", (e) => {
      e.stopPropagation();
      arrowClicked(menu, arrow);
    });

    if (
      menu.children.length * styleOptions.menuItemHeight <=
      styleOptions.menuMaxHeight
    ) {
      scrollContainer.classList.add("hide");
    }

    // Event listener for updating scrollbar
    menu.addEventListener("scroll", () => {
      updateScrollBar(menu, scrollbar, scrollContainer);
    });

    return element;
  };
  // #endregion

  // Create the elements
  const parent = createHTML();

  // Create style element
  const shadowStyles = document.createElement("style");
  parent.shadowRoot.appendChild(shadowStyles);

  // Check  if scrollbar is needed

  // Methods for altering after creation
  const setShadowStyle = () => {
    shadowStyles.innerHTML = (0,_generateDefaultStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(styleClasses, styleOptions);
  };

  // Style the elements
  setShadowStyle();

  return {
    parent,
    get zIndex() {
      return styleOptions.zIndex;
    },
    set zIndex(value) {
      if (Number.isInteger(value)) styleOptions.zIndex = value;
      setShadowStyle();
    },
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dropDown);


/***/ }),

/***/ "./src/modules/dropDown/generateDefaultStyle.js":
/*!******************************************************!*\
  !*** ./src/modules/dropDown/generateDefaultStyle.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const generateDefaultStyle = (styleClasses, options) => {
  // #region CSS Reset
  const resetStyle = `
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  `;
  // #endregion

  const parentStyle = `
    :host {
      display: grid;
      grid-template: 32px 1.1rem / min-content;
      grid-template-areas:
        "container"
        "menuAndFeedback";

      position: relative;
    }
    :host([hidden]) { 
      display: none 
    }
  `;

  const containerStyle = `
    .${styleClasses.container} {
      grid-area: container;

      display: grid;
      position: relative;

      height: 32px;
      min-width: 20ch;
    }
  `;

  const selectionStyle = `
    .${styleClasses.selection} {

    }
  `;

  const arrowStyle = `
    .${styleClasses.arrow} {
      background-color: transparent;

      height: 30px;

      position: absolute;
      right: 5px;

      transition: 0.5s cubic-bezier(0.1,-0.28, 0.23, 1.35);
    }

    .${styleClasses.arrow}.flip {
      rotate: 180deg;
    }
  `;

  const menuAndFeedbackContainerStyle = `
    .${styleClasses.menuAndFeedbackContainer} {
      grid-area: menuAndFeedback;

      display: grid;
      grid-template: auto 1.1rem / 1fr;
      grid-template-areas:
        "menu"
        "feedback";

      position: absolute;

      width: 100%;
    }
  `;

  const menuStyle = `
    .${styleClasses.menu} {
      grid-area: menu;

      display: grid;
      grid-auto-rows: 1.1rem;

      position: relative;

      max-height: 0; 
      background-color: white;
      border: 1px solid black;

      opacity: 0;

      z-index: ${options.zIndex};

      overflow-y: scroll;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */

      transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
    }

    .${styleClasses.menu}.show {
      max-height: 150px;
      opacity: 1;
    }

    .${styleClasses.menu}::-webkit-scrollbar {
      display: none;
    }
  `;

  const scrollContainerStyle = `
    .${styleClasses.scrollContainer}.hide {
      display: none;
    }

    .${styleClasses.scrollContainer} {
      position: absolute;
      right: 0;
      height: 0;
      opacity: 0;
      transition: height 0.5s ease-in-out, opacity 0.1s ease-in-out;
    }

    .${styleClasses.menu}.show + .${styleClasses.scrollContainer} {
      height: 150px;
      width: 10px;
      opacity: 1;
      z-index: ${options.zIndex};
    }
  `;

  const scrollbarStyle = `
    .${styleClasses.scrollbar} {
      position: absolute;
      top: 2px;
      right: 2px;
      width: 8px;
      height: 33%;
      background-color: black;
      border-radius: 5px;
    }
  `;

  const optgroupStyle = `
    .${styleClasses.optgroup} {

    }
  `;

  const optionStyle = `
    .${styleClasses.option} {

    }
  `;

  const dividerStyle = `
    .${styleClasses.divider} {
      border-bottom: 1px solid blue;
    }
  `;

  const feedbackStyle = `
    .${styleClasses.feedback} {
      grid-area: feedback;
    }

    .${styleClasses.menu}.show + .${styleClasses.feedback} {
      z-index: ${options.zIndex};
    }
  `;

  const styles =
    resetStyle +
    parentStyle +
    containerStyle +
    selectionStyle +
    arrowStyle +
    menuAndFeedbackContainerStyle +
    menuStyle +
    scrollContainerStyle +
    scrollbarStyle +
    optgroupStyle +
    optionStyle +
    dividerStyle +
    feedbackStyle;

  return styles;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateDefaultStyle);


/***/ }),

/***/ "./src/modules/dropDown/validateMenuData.js":
/*!**************************************************!*\
  !*** ./src/modules/dropDown/validateMenuData.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// This will return true if dataToValidate is an array containing at least one string
const validateMenuData = (defaultData, passedData) => {
  if (!Array.isArray(passedData)) return defaultData;

  const validatedData = passedData;

  // Check each entry and remove non strings
  for (let i = 0; i < validatedData.length; i += 1) {
    if (typeof validatedData[i] !== "string") {
      validatedData.pop(validatedData[i]);
      i = -1;
    }
  }

  // If array is now empty return false
  if (validatedData.length === 0) return defaultData;

  return validatedData;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateMenuData);


/***/ }),

/***/ "./src/modules/imageSlider/imageSlider.js":
/*!************************************************!*\
  !*** ./src/modules/imageSlider/imageSlider.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_arrowBack_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/arrowBack.svg */ "./src/modules/imageSlider/icons/arrowBack.svg");
/* harmony import */ var _icons_arrowForward_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/arrowForward.svg */ "./src/modules/imageSlider/icons/arrowForward.svg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/modules/imageSlider/style.css");




const imageSlider = (imageSources) => {
  let slideCount = 0;
  let currentSlide = 0;
  const slideWidth = 180;
  const slideSpacerWidth = 100;

  // Check imageSources is array
  let validatedSources;
  if (!Array.isArray(imageSources)) validatedSources = [];
  else validatedSources = imageSources;
  // Trim invalid entries
  for (let i = 0; i < validatedSources.length; i += 1) {
    if (typeof validatedSources[i] !== "string") {
      validatedSources.splice(i, 1);
      i = -1;
    }
  }

  // #region Method for creating and returning html parent element
  const createSlides = (reel) => {
    for (let i = 0; i < validatedSources.length; i += 1) {
      // Slide
      const slide = document.createElement("img");
      slide.src = validatedSources[i];
      slide.classList.add("slide");
      // Spacer on left
      const spacer = document.createElement("div");
      spacer.classList.add("spacer");
      // Append
      reel.appendChild(spacer);
      reel.appendChild(slide);
      // Spacer on right for last img
      if (i === validatedSources.length - 1) {
        const lastSpacer = document.createElement("div");
        lastSpacer.classList.add("spacer");
        reel.appendChild(lastSpacer);
      }
      // Track total slides
      slideCount += 1;
    }
  };

  const navCircles = {};

  const createNavCircles = (container) => {
    for (let i = 0; i < slideCount; i += 1) {
      // Circle
      const navCircle = document.createElement("div");
      navCircle.setAttribute("data-index", `${i}`);
      navCircle.classList.add("nav-circle");
      // Fill
      const fill = document.createElement("div");
      fill.classList.add("fill");
      // Append
      navCircle.appendChild(fill);
      container.appendChild(navCircle);
      // Add nav circle to object that stores all nav circles
      navCircles[i] = navCircle;
    }
  };

  const createElements = () => {
    // Parent
    const parent = document.createElement("div");
    parent.classList.add("image-slider");

    // Reel
    // Container
    const reelContainer = document.createElement("div");
    reelContainer.classList.add("reel-container");
    parent.appendChild(reelContainer);
    // Reel div
    const reel = document.createElement("div");
    reel.classList.add("reel");
    reelContainer.appendChild(reel);
    // Slides
    createSlides(reel);

    // Buttons
    // Previous
    const previousBtn = document.createElement("div");
    previousBtn.classList.add("previous-btn");
    parent.appendChild(previousBtn);
    // Icon
    const previousIcon = document.createElement("img");
    previousIcon.src = _icons_arrowBack_svg__WEBPACK_IMPORTED_MODULE_0__;
    previousIcon.classList.add("previous-icon");
    previousBtn.appendChild(previousIcon);

    // Next
    const nextBtn = document.createElement("div");
    nextBtn.classList.add("next-btn");
    parent.appendChild(nextBtn);
    // Icon
    const nextIcon = document.createElement("img");
    nextIcon.src = _icons_arrowForward_svg__WEBPACK_IMPORTED_MODULE_1__;
    nextIcon.classList.add("next-icon");
    nextBtn.appendChild(nextIcon);

    // Nav Circles
    // Container
    const navCirclesContainer = document.createElement("div");
    navCirclesContainer.classList.add("nav-circles-container");
    parent.appendChild(navCirclesContainer);
    // Circles
    createNavCircles(navCirclesContainer);

    return { parent, reel, nextBtn, previousBtn };
  };

  // Create the elements
  const elements = createElements();
  const { parent } = elements;
  const { reel } = elements;
  const { nextBtn } = elements;
  const { previousBtn } = elements;

  // #endregion
  const setReel = (slideIndex) => {
    const positionZero = `-${slideSpacerWidth / 2}px`;
    const reelToSet = reel;

    let reelPosition;

    if (slideIndex === 0) reelPosition = positionZero;

    if (
      Number.isInteger(slideIndex) &&
      slideIndex > 0 &&
      slideIndex <= slideCount - 1
    ) {
      reelPosition = `-${
        slideSpacerWidth / 2 + slideIndex * (slideWidth + slideSpacerWidth)
      }px`;
    }

    reelToSet.style.left = reelPosition;
  };

  const setSelectedNavCircle = () => {
    Object.keys(navCircles).forEach((key) => {
      if (key === currentSlide.toString()) {
        navCircles[key].classList.add("selected");
      } else navCircles[key].classList.remove("selected");
    });
  };

  const incrementReel = (next = true) => {
    let incrementer;
    if (next) incrementer = 1;
    else incrementer = -1;

    // Set current slide and jump to start or end when needed
    currentSlide += incrementer;
    if (currentSlide < 0) currentSlide = slideCount - 1;
    if (currentSlide > slideCount - 1) currentSlide = 0;

    setReel(currentSlide);
    setSelectedNavCircle();
  };

  let autoAdvanceInterval = setInterval(incrementReel, 5000);

  const resetAutoAdvanceInterval = () => {
    clearInterval(autoAdvanceInterval);
    autoAdvanceInterval = setInterval(incrementReel, 5000);
  };

  nextBtn.addEventListener("click", () => {
    incrementReel(true);
    resetAutoAdvanceInterval();
  });
  previousBtn.addEventListener("click", () => {
    incrementReel(false);
    resetAutoAdvanceInterval();
  });

  const jumpToSlide = (slideIndex) => {
    const intIndex = parseInt(slideIndex, 10);
    setReel(intIndex);
    currentSlide = intIndex;
    setSelectedNavCircle();
  };

  Object.keys(navCircles).forEach((key) => {
    navCircles[key].addEventListener("click", () => {
      jumpToSlide(navCircles[key].dataset.index);
      resetAutoAdvanceInterval();
    });
  });

  // Init
  setReel(0, reel);
  setSelectedNavCircle();

  return { parent };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imageSlider);


/***/ }),

/***/ "./src/modules/dropDown/arrow.svg":
/*!****************************************!*\
  !*** ./src/modules/dropDown/arrow.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6637f1b69f6019006693.svg";

/***/ }),

/***/ "./src/modules/imageSlider/icons/arrowBack.svg":
/*!*****************************************************!*\
  !*** ./src/modules/imageSlider/icons/arrowBack.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "434d985483f687e889e7.svg";

/***/ }),

/***/ "./src/modules/imageSlider/icons/arrowForward.svg":
/*!********************************************************!*\
  !*** ./src/modules/imageSlider/icons/arrowForward.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef025b7939052d7af98c.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_dropDown_dropDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dropDown/dropDown */ "./src/modules/dropDown/dropDown.js");
/* harmony import */ var _modules_imageSlider_imageSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/imageSlider/imageSlider */ "./src/modules/imageSlider/imageSlider.js");




const imgSources = [
  "https://drive.google.com/uc?id=18hvWeohZazFN_d8FrOEoPQLwFICyC3bl",
  "https://drive.google.com/uc?id=1EYFWnbD-GqFwi7q7Nuwa9CFs_70jHvt5",
  "https://drive.google.com/uc?id=18WJhHKkeFXzokEtcjVZewjYbTEi1_dhg",
  "https://drive.google.com/uc?id=1MlFp-syap-h1S0NlL0LjNlQA6WYppQtp",
  "https://drive.google.com/uc?id=1f0XH6oJJvnTipPTJuHlf4y57rTxIq3AG",
];

const dropDownMenu = (0,_modules_dropDown_dropDown__WEBPACK_IMPORTED_MODULE_1__["default"])(
  [
    "#Fruit",
    "Apples",
    "Bananas",
    "Grapes",
    "_",
    "Tomatoes",
    "Cucumbers",
    "Bell Peppers",
    "Corn",
    "#Vegetables",
    "Carrots",
    "Potatoes",
    "Lettuce",
  ],
  false,
  "autoSuggest"
);
document.body.appendChild(dropDownMenu.parent);

const invalidParamDD = (0,_modules_dropDown_dropDown__WEBPACK_IMPORTED_MODULE_1__["default"])(
  {
    parentClasses: undefined,
    containerClasses: 6,
    selectionClasses: null,
    labelClasses: NaN,
    arrowClasses: [],
    menuClasses: null,
    scrollBarClasses: [23, 24, 25],
    feedbackClasses: {},
    inputIdPrefix: 69,
  },
  [undefined, null, NaN, 0]
);

const thirdDropDown = (0,_modules_dropDown_dropDown__WEBPACK_IMPORTED_MODULE_1__["default"])([], false, "autoComplete");

document.body.appendChild(invalidParamDD.parent);

document.body.appendChild(thirdDropDown.parent);

dropDownMenu.zIndex = 300;

const slider = (0,_modules_imageSlider_imageSlider__WEBPACK_IMPORTED_MODULE_2__["default"])(imgSources);

document.body.appendChild(slider.parent);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsaURBQWlELHlCQUF5QiwwQkFBMEIsMEJBQTBCLHlFQUF5RSw4QkFBOEIsR0FBRyxtQkFBbUIsa0JBQWtCLGdGQUFnRixxRUFBcUUsR0FBRyxxQkFBcUIsbUJBQW1CLHlCQUF5Qix1QkFBdUIsOEJBQThCLHVCQUF1QixHQUFHLFdBQVcsa0JBQWtCLDJCQUEyQix5QkFBeUIsZ0JBQWdCLHdDQUF3QyxHQUFHLFlBQVksZ0NBQWdDLDhCQUE4QixHQUFHLGFBQWEsK0JBQStCLGdDQUFnQyxHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyxlQUFlLG9CQUFvQixzQkFBc0IsR0FBRywrQkFBK0IsdUJBQXVCLEdBQUcsNEJBQTRCLG1CQUFtQixvQkFBb0Isc0JBQXNCLGtDQUFrQyx3QkFBd0IsR0FBRyxpQkFBaUIsa0JBQWtCLHdCQUF3QiwwQkFBMEIscUNBQXFDLGtDQUFrQyw0Q0FBNEMsZ0NBQWdDLDRCQUE0QixHQUFHLHVCQUF1QixzQ0FBc0MsY0FBYyx3QkFBd0IsMENBQTBDLDBDQUEwQyxHQUFHLGdDQUFnQyxtQ0FBbUMsR0FBRyxTQUFTLG9HQUFvRyxZQUFZLGFBQWEsY0FBYyxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssTUFBTSxLQUFLLFdBQVcsYUFBYSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLGlDQUFpQyx5QkFBeUIsMEJBQTBCLDBCQUEwQix5RUFBeUUsOEJBQThCLEdBQUcsbUJBQW1CLGtCQUFrQixnRkFBZ0YscUVBQXFFLEdBQUcscUJBQXFCLG1CQUFtQix5QkFBeUIsdUJBQXVCLDhCQUE4Qix1QkFBdUIsR0FBRyxXQUFXLGtCQUFrQiwyQkFBMkIseUJBQXlCLGdCQUFnQix3Q0FBd0MsR0FBRyxZQUFZLGdDQUFnQyw4QkFBOEIsR0FBRyxhQUFhLCtCQUErQixnQ0FBZ0MsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsZUFBZSxvQkFBb0Isc0JBQXNCLEdBQUcsK0JBQStCLHVCQUF1QixHQUFHLDRCQUE0QixtQkFBbUIsb0JBQW9CLHNCQUFzQixrQ0FBa0Msd0JBQXdCLEdBQUcsaUJBQWlCLGtCQUFrQix3QkFBd0IsMEJBQTBCLHFDQUFxQyxrQ0FBa0MsNENBQTRDLGdDQUFnQyw0QkFBNEIsR0FBRyx1QkFBdUIsc0NBQXNDLGNBQWMsd0JBQXdCLDBDQUEwQywwQ0FBMEMsR0FBRyxnQ0FBZ0MsbUNBQW1DLEdBQUcscUJBQXFCO0FBQ3ZtSTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpREFBaUQsa0VBQWtFO0FBQ25IO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUF5RztBQUN6RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSW1EO0FBQzNFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JrRDtBQUNmO0FBQ3VCOztBQUUxRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qiw2REFBZ0I7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxZQUFZO0FBQ3hCLFlBQVksZUFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxNQUFNO0FBQ04sb0NBQW9DLHVCQUF1QjtBQUMzRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDLGNBQWM7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsdUNBQVE7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLGlFQUFvQjtBQUNqRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDcFJ4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE9BQU8sbUJBQW1CO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUI7O0FBRWpCO0FBQ0EsaUNBQWlDO0FBQ2pDLDhCQUE4Qjs7QUFFOUI7QUFDQTs7QUFFQSxPQUFPLGtCQUFrQjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUEsT0FBTyxrQkFBa0I7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTyw2QkFBNkI7QUFDcEM7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sa0JBQWtCLFdBQVc7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBLE9BQU8sa0JBQWtCLFdBQVc7QUFDcEMsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLG9CQUFvQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNwT3BDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtCQUFrQiwwQkFBMEI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsZ0JBQWdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCa0I7QUFDRDtBQUM1Qjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZCQUE2QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsNkJBQTZCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQSw4Q0FBOEMsRUFBRTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaURBQWE7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQVM7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBLFVBQVUsU0FBUztBQUNuQixVQUFVLE9BQU87QUFDakIsVUFBVSxVQUFVO0FBQ3BCLFVBQVUsY0FBYzs7QUFFeEI7QUFDQTtBQUNBLDZCQUE2QixxQkFBcUI7QUFDbEQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMU0zQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDdUI7QUFDUzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHNFQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixzRUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsc0JBQXNCLHNFQUFROztBQUU5Qjs7QUFFQTs7QUFFQTs7QUFFQSxlQUFlLDRFQUFXOztBQUUxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2N1c3RvbS1odG1sLWVsZW1lbnRzLy4vc3JjL21vZHVsZXMvaW1hZ2VTbGlkZXIvc3R5bGUuY3NzIiwid2VicGFjazovL2N1c3RvbS1odG1sLWVsZW1lbnRzLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vY3VzdG9tLWh0bWwtZWxlbWVudHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2N1c3RvbS1odG1sLWVsZW1lbnRzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY3VzdG9tLWh0bWwtZWxlbWVudHMvLi9zcmMvbW9kdWxlcy9pbWFnZVNsaWRlci9zdHlsZS5jc3M/N2ZmYSIsIndlYnBhY2s6Ly9jdXN0b20taHRtbC1lbGVtZW50cy8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vY3VzdG9tLWh0bWwtZWxlbWVudHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY3VzdG9tLWh0bWwtZWxlbWVudHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2N1c3RvbS1odG1sLWVsZW1lbnRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2N1c3RvbS1odG1sLWVsZW1lbnRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2N1c3RvbS1odG1sLWVsZW1lbnRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY3VzdG9tLWh0bWwtZWxlbWVudHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jdXN0b20taHRtbC1lbGVtZW50cy8uL3NyYy9tb2R1bGVzL2Ryb3BEb3duL2Ryb3BEb3duLmpzIiwid2VicGFjazovL2N1c3RvbS1odG1sLWVsZW1lbnRzLy4vc3JjL21vZHVsZXMvZHJvcERvd24vZ2VuZXJhdGVEZWZhdWx0U3R5bGUuanMiLCJ3ZWJwYWNrOi8vY3VzdG9tLWh0bWwtZWxlbWVudHMvLi9zcmMvbW9kdWxlcy9kcm9wRG93bi92YWxpZGF0ZU1lbnVEYXRhLmpzIiwid2VicGFjazovL2N1c3RvbS1odG1sLWVsZW1lbnRzLy4vc3JjL21vZHVsZXMvaW1hZ2VTbGlkZXIvaW1hZ2VTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vY3VzdG9tLWh0bWwtZWxlbWVudHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3VzdG9tLWh0bWwtZWxlbWVudHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY3VzdG9tLWh0bWwtZWxlbWVudHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2N1c3RvbS1odG1sLWVsZW1lbnRzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY3VzdG9tLWh0bWwtZWxlbWVudHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jdXN0b20taHRtbC1lbGVtZW50cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2N1c3RvbS1odG1sLWVsZW1lbnRzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2N1c3RvbS1odG1sLWVsZW1lbnRzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jdXN0b20taHRtbC1lbGVtZW50cy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0taW1hZ2Utd2lkdGg6IDE4MHB4O1xcbiAgLS1pbWFnZS1oZWlnaHQ6IDIwMHB4O1xcbiAgLS1zcGFjZXItd2lkdGg6IDEwMHB4O1xcblxcbiAgLS1pbWctd2luZG93LXdpZHRoOiBjYWxjKHZhcigtLWltYWdlLXdpZHRoKSArIHZhcigtLXNwYWNlci13aWR0aCkpO1xcblxcbiAgLS1uYXYtY2lyY2xlLXNpemU6IDE3cHg7XFxufVxcblxcbi5pbWFnZS1zbGlkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHZhcigtLWltYWdlLWhlaWdodCkgNTBweCAvIDUwcHggdmFyKC0taW1nLXdpbmRvdy13aWR0aCkgNTBweDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJwcmV2aW91cyBpbWcgbmV4dFxcXCJcXG4gICAgXFxcIi4gbmF2IC5cXFwiO1xcbn1cXG5cXG4ucmVlbC1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBpbWc7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5yZWVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogLTE7XFxuXFxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zbGlkZSB7XFxuICBoZWlnaHQ6IHZhcigtLWltYWdlLWhlaWdodCk7XFxuICB3aWR0aDogdmFyKC0taW1hZ2Utd2lkdGgpO1xcbn1cXG5cXG4uc3BhY2VyIHtcXG4gIHdpZHRoOiB2YXIoLS1zcGFjZXItd2lkdGgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbn1cXG5cXG4ucHJldmlvdXMtYnRuIHtcXG4gIGdyaWQtYXJlYTogcHJldmlvdXM7XFxufVxcblxcbi5uZXh0LWJ0biB7XFxuICBncmlkLWFyZWE6IG5leHQ7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnByZXZpb3VzLWJ0bixcXG4ubmV4dC1idG4ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubmF2LWNpcmNsZXMtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogbmF2O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2LWNpcmNsZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXG4gIGhlaWdodDogdmFyKC0tbmF2LWNpcmNsZS1zaXplKTtcXG4gIHdpZHRoOiB2YXIoLS1uYXYtY2lyY2xlLXNpemUpO1xcblxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbmF2LWNpcmNsZS1zaXplKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubmF2LWNpcmNsZSAuZmlsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDcsIDE2NywgMCk7XFxuICBoZWlnaHQ6IDA7XFxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbmF2LWNpcmNsZS1zaXplKTtcXG5cXG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubmF2LWNpcmNsZS5zZWxlY3RlZCAuZmlsbCB7XFxuICBoZWlnaHQ6IHZhcigtLW5hdi1jaXJjbGUtc2l6ZSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2R1bGVzL2ltYWdlU2xpZGVyL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIscUJBQXFCOztFQUVyQixrRUFBa0U7O0VBRWxFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyRUFBMkU7RUFDM0U7O2FBRVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7O0VBRWQsa0JBQWtCOztFQUVsQixnQkFBZ0I7O0VBRWhCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixrQkFBa0I7RUFDbEIsV0FBVzs7RUFFWCxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYzs7RUFFZCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjs7RUFFckIsOEJBQThCO0VBQzlCLDZCQUE2Qjs7RUFFN0IscUNBQXFDO0VBQ3JDLDJCQUEyQjtFQUMzQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsU0FBUztFQUNULG1CQUFtQjtFQUNuQixxQ0FBcUM7O0VBRXJDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWltYWdlLXdpZHRoOiAxODBweDtcXG4gIC0taW1hZ2UtaGVpZ2h0OiAyMDBweDtcXG4gIC0tc3BhY2VyLXdpZHRoOiAxMDBweDtcXG5cXG4gIC0taW1nLXdpbmRvdy13aWR0aDogY2FsYyh2YXIoLS1pbWFnZS13aWR0aCkgKyB2YXIoLS1zcGFjZXItd2lkdGgpKTtcXG5cXG4gIC0tbmF2LWNpcmNsZS1zaXplOiAxN3B4O1xcbn1cXG5cXG4uaW1hZ2Utc2xpZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiB2YXIoLS1pbWFnZS1oZWlnaHQpIDUwcHggLyA1MHB4IHZhcigtLWltZy13aW5kb3ctd2lkdGgpIDUwcHg7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwicHJldmlvdXMgaW1nIG5leHRcXFwiXFxuICAgIFxcXCIuIG5hdiAuXFxcIjtcXG59XFxuXFxuLnJlZWwtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogaW1nO1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucmVlbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IC0xO1xcblxcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc2xpZGUge1xcbiAgaGVpZ2h0OiB2YXIoLS1pbWFnZS1oZWlnaHQpO1xcbiAgd2lkdGg6IHZhcigtLWltYWdlLXdpZHRoKTtcXG59XFxuXFxuLnNwYWNlciB7XFxuICB3aWR0aDogdmFyKC0tc3BhY2VyLXdpZHRoKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuLnByZXZpb3VzLWJ0biB7XFxuICBncmlkLWFyZWE6IHByZXZpb3VzO1xcbn1cXG5cXG4ubmV4dC1idG4ge1xcbiAgZ3JpZC1hcmVhOiBuZXh0O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5wcmV2aW91cy1idG4sXFxuLm5leHQtYnRuIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm5hdi1jaXJjbGVzLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IG5hdjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdi1jaXJjbGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBoZWlnaHQ6IHZhcigtLW5hdi1jaXJjbGUtc2l6ZSk7XFxuICB3aWR0aDogdmFyKC0tbmF2LWNpcmNsZS1zaXplKTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW5hdi1jaXJjbGUtc2l6ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm5hdi1jaXJjbGUgLmZpbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LCAxNjcsIDApO1xcbiAgaGVpZ2h0OiAwO1xcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW5hdi1jaXJjbGUtc2l6ZSk7XFxuXFxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm5hdi1jaXJjbGUuc2VsZWN0ZWQgLmZpbGwge1xcbiAgaGVpZ2h0OiB2YXIoLS1uYXYtY2lyY2xlLXNpemUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHZhbGlkYXRlTWVudURhdGEgZnJvbSBcIi4vdmFsaWRhdGVNZW51RGF0YVwiO1xuaW1wb3J0IGFycm93U3ZnIGZyb20gXCIuL2Fycm93LnN2Z1wiO1xuaW1wb3J0IGdlbmVyYXRlRGVmYXVsdFN0eWxlIGZyb20gXCIuL2dlbmVyYXRlRGVmYXVsdFN0eWxlXCI7XG5cbmNvbnN0IGRyb3BEb3duID0gKG1lbnVEYXRhLCBhbGxvd1VzZXJTZXRWYWx1ZXMsIHR5cGUpID0+IHtcbiAgLy8gI3JlZ2lvbiBQcm9wZXJ0aWVzXG4gIGNvbnN0IHBhcmVudENsYXNzZXMgPSBcImRyb3AtZG93blwiO1xuXG4gIGNvbnN0IHBsYWNlaG9sZGVyVGV4dCA9IFwiLS1TZWxlY3QtLVwiO1xuXG4gIC8vIE1lbnUgRGF0YVxuICBjb25zdCBkZWZhdWx0RGF0YSA9IFtcIkludmFsaWRcIiwgXCJPclwiLCBcIk1pc3NpbmdcIiwgXCJNZW51XCIsIFwiRGF0YVwiXTtcblxuICAvLyBWYWxpZGF0ZSBwYXNzZWQgZGF0YSB3aXRoIHN1YiBtb2R1bGVcbiAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IHZhbGlkYXRlTWVudURhdGEoZGVmYXVsdERhdGEsIG1lbnVEYXRhKTtcblxuICAvLyAtLUZ1bmN0aW9uYWwgVmFyaWF0aW9ucy0tXG4gIGxldCBhdXRvU3VnZ2VzdCA9IGZhbHNlO1xuICBsZXQgYXV0b0NvbXBsZXRlID0gZmFsc2U7XG4gIGNvbnN0IHVzZXJTZXRWYWx1ZXMgPVxuICAgIHR5cGVvZiBhbGxvd1VzZXJTZXRWYWx1ZXMgPT09IFwiYm9vbGVhblwiID8gYWxsb3dVc2VyU2V0VmFsdWVzIDogZmFsc2U7XG4gIC8vIFNldCBpbml0aWFsIHN0YXRlcyBiYXNlZCBvbiBwYXJhbXNcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBcImF1dG9TdWdnZXN0XCI6XG4gICAgICBhdXRvU3VnZ2VzdCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYXV0b0NvbXBsZXRlXCI6XG4gICAgICBhdXRvQ29tcGxldGUgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGF1dG9Db21wbGV0ZSA9IGZhbHNlO1xuICAgICAgYXV0b1N1Z2dlc3QgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgLy8gSW5wdXQgcmVxdWlyZWQgaW4gZm9ybXM/XG4gIC8vIGNvbnN0IHJlcXVpcmVkID0gZmFsc2U7XG5cbiAgY29uc3Qgc3R5bGVPcHRpb25zID0ge1xuICAgIG1lbnVJdGVtSGVpZ2h0OiAxOCxcbiAgICBtZW51TWF4SGVpZ2h0OiAxNTAsXG4gICAgekluZGV4OiAyLFxuICB9O1xuICAvKiBkZXRhdGNoZWQgYm9vbFxuICAgc3R5bGUgb3B0aW9ucyBlbnVtXG4gICBzdHlsZSBcbiAgIGFuaW1hdGVkIGJvb2wgKi9cblxuICBjb25zdCBzdHlsZUNsYXNzZXMgPSB7XG4gICAgY29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxuICAgIHNlbGVjdGlvbjogXCJzZWxlY3Rpb25cIixcbiAgICBhcnJvdzogXCJhcnJvd1wiLFxuICAgIG1lbnU6IFwibWVudVwiLFxuICAgIHNjcm9sbENvbnRhaW5lcjogXCJzY3JvbGxDb250YWluZXJcIixcbiAgICBzY3JvbGxiYXI6IFwic2Nyb2xsYmFyXCIsXG4gICAgb3B0Z3JvdXA6IFwib3B0Z3JvdXBcIixcbiAgICBvcHRpb246IFwib3B0aW9uXCIsXG4gICAgZGl2aWRlcjogXCJkaXZpZGVyXCIsXG4gICAgZmVlZGJhY2s6IFwiZmVlZGJhY2tcIixcbiAgICBtZW51QW5kRmVlZGJhY2tDb250YWluZXI6IFwibWVudUFuZEZlZWRiYWNrQ29udGFpbmVyXCIsXG4gIH07XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gSFRNTCBDcmVhdGlvbiBIZWxwZXIgbWV0aG9kc1xuICAvLyBBZGQgY2xhc3NlcyB0byBodG1sIGVsZW1lbnRcbiAgY29uc3QgYWRkQ2xhc3NlcyA9IChjbGFzc2VzLCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2xhc3Nlc1RvQWRkID0gW107XG4gICAgaWYgKHR5cGVvZiBjbGFzc2VzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBjbGFzc2VzVG9BZGQucHVzaChjbGFzc2VzKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NlcykpIHtcbiAgICAgIGNsYXNzZXMuZm9yRWFjaCgoY2xzKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgY2xhc3Nlc1RvQWRkLnB1c2goY2xzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNsYXNzZXNUb0FkZC5sZW5ndGggPiAwKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlc1RvQWRkKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQ3JlYXRlIG1lbnUgaHRtbCBlbGVtZW50c1xuICBjb25zdCBjcmVhdGVNZW51ID0gKG1lbnVFbGVtZW50KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWxpZGF0ZWREYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAvLyBPcHRpb24gR3JvdXBcbiAgICAgIGlmICh2YWxpZGF0ZWREYXRhW2ldLnN0YXJ0c1dpdGgoXCIjXCIpKSB7XG4gICAgICAgIGNvbnN0IG9wdGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGFkZENsYXNzZXMoc3R5bGVDbGFzc2VzLm9wdGdyb3VwLCBvcHRncm91cCk7XG4gICAgICAgIG9wdGdyb3VwLnRleHRDb250ZW50ID0gdmFsaWRhdGVkRGF0YVtpXTtcbiAgICAgICAgbWVudUVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0Z3JvdXApO1xuICAgICAgfSAvLyBEaXZpZGVyXG4gICAgICBlbHNlIGlmICh2YWxpZGF0ZWREYXRhW2ldID09PSBcIl9cIikge1xuICAgICAgICBjb25zdCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYWRkQ2xhc3NlcyhzdHlsZUNsYXNzZXMuZGl2aWRlciwgZGl2aWRlcik7XG4gICAgICAgIG1lbnVFbGVtZW50LmFwcGVuZENoaWxkKGRpdmlkZXIpO1xuICAgICAgfSAvLyBPcHRpb25cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgYWRkQ2xhc3NlcyhzdHlsZUNsYXNzZXMub3B0aW9uLCBvcHRpb24pO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSB2YWxpZGF0ZWREYXRhW2ldO1xuICAgICAgICBtZW51RWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBkcm9wRG93bkNsaWNrZWQgPSAobWVudSwgYXJyb3cpID0+IHtcbiAgICAvLyBUb2dnbGUgdGhlIG1lbnUgc2hvdyBjbGFzcyBhbmQgZmxpcCBhcnJvd1xuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gICAgaWYgKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvd1wiKSkgYXJyb3cuY2xhc3NMaXN0LmFkZChcImZsaXBcIik7XG4gICAgZWxzZSBhcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwiZmxpcFwiKTtcbiAgICAvLyBBZGQgb25lIHRpbWUgZXZlbnQgbGlzdGVuZXIgdG8gY2xvc2UgZHJvcGRvd24gb24gb3V0c2lkZSBjbGlja1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcIm1vdXNldXBcIixcbiAgICAgICgpID0+IHtcbiAgICAgICAgaWYgKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvd1wiKSkge1xuICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gICAgICAgICAgYXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcImZsaXBcIik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IG9uY2U6IHRydWUgfVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgYXJyb3dDbGlja2VkID0gKG1lbnUsIGFycm93KSA9PiB7XG4gICAgaWYgKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvd1wiKSkge1xuICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICAgIGFycm93LmNsYXNzTGlzdC5yZW1vdmUoXCJmbGlwXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkcm9wRG93bkNsaWNrZWQobWVudSwgYXJyb3cpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGVTY3JvbGxCYXIgPSAobWVudSwgc2Nyb2xsYmFyLCBzY3JvbGxDb250YWluZXIpID0+IHtcbiAgICBjb25zdCB7IHNjcm9sbFRvcCB9ID0gbWVudTtcbiAgICBjb25zdCB7IHNjcm9sbEhlaWdodCB9ID0gbWVudTtcbiAgICBjb25zdCBtZW51SGVpZ2h0ID0gbWVudS5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgbWF4U2Nyb2xsID0gTWF0aC5mbG9vcihzY3JvbGxIZWlnaHQgLSBtZW51SGVpZ2h0KTtcbiAgICBjb25zdCBzY3JvbGxlZFBlcmNlbnQgPSBNYXRoLm1pbihNYXRoLm1heChzY3JvbGxUb3AgLyBtYXhTY3JvbGwsIDApLCAxKTtcbiAgICBjb25zdCBzY3JvbGxDb250YWluZXJIZWlnaHQgPSBzY3JvbGxDb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuXG4gICAgY29uc3Qgc2Nyb2xsYmFySGVpZ2h0UmF0aW8gPSBtZW51SGVpZ2h0IC8gc2Nyb2xsSGVpZ2h0O1xuICAgIGNvbnN0IGhpZGRlbkFyZWFIZWlnaHQgPSBzY3JvbGxIZWlnaHQgLSBtZW51SGVpZ2h0O1xuICAgIGNvbnN0IHZpc2libGVTY3JvbGxiYXJIZWlnaHQgPSBoaWRkZW5BcmVhSGVpZ2h0ICogc2Nyb2xsYmFySGVpZ2h0UmF0aW87XG5cbiAgICBjb25zdCBzY3JvbGxFbGVtZW50ID0gc2Nyb2xsYmFyO1xuXG4gICAgc2Nyb2xsRWxlbWVudC5zdHlsZS50b3AgPSBgJHtNYXRoLm1pbihcbiAgICAgIE1hdGgubWF4KHNjcm9sbGVkUGVyY2VudCAqIHNjcm9sbENvbnRhaW5lckhlaWdodCwgMiksXG4gICAgICBzY3JvbGxDb250YWluZXJIZWlnaHQgLSB2aXNpYmxlU2Nyb2xsYmFySGVpZ2h0XG4gICAgKX1weGA7XG4gICAgc2Nyb2xsRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHt2aXNpYmxlU2Nyb2xsYmFySGVpZ2h0fXB4YDtcbiAgfTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBDcmVhdGUgdGhlIGh0bWxcbiAgY29uc3QgY3JlYXRlSFRNTCA9ICgpID0+IHtcbiAgICAvLyBQYXJlbnRcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRDbGFzc2VzKHBhcmVudENsYXNzZXMsIGVsZW1lbnQpO1xuXG4gICAgLy8gQXR0YXRjaCBzaGFkb3cgcm9vdCB0byBlbmNhcHN1bGF0ZSBjaGlsZHJlbiBhbmQgc3R5bGVcbiAgICBjb25zdCBzaGFkb3dSb290ID0gZWxlbWVudC5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcblxuICAgIC8vIENvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkQ2xhc3NlcyhzdHlsZUNsYXNzZXMuY29udGFpbmVyLCBjb250YWluZXIpO1xuICAgIHNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIC8vIEVpdGhlciBhIHAgaWYgc3RhbmRhcmQgb3IgdGV4dCBpbnB1dCBpZiBhdXRvU3VnZ2VzdCwgYXV0b0NvbXBsZXRlLCBvciB1c2VyU2V0VmFsdWVzIGFyZSB0cnVlXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHNlbGVjdGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBzZWxlY3Rpb24ucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlclRleHQ7XG4gICAgc2VsZWN0aW9uLnRleHRDb250ZW50ID0gcGxhY2Vob2xkZXJUZXh0O1xuXG4gICAgaWYgKGF1dG9TdWdnZXN0IHx8IGF1dG9Db21wbGV0ZSB8fCB1c2VyU2V0VmFsdWVzKSB7XG4gICAgICBzZWxlY3Rpb24ucmVhZE9ubHkgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0aW9uLnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dElkID0gXCJzZWxlY3Rpb25cIjtcbiAgICBzZWxlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgaW5wdXRJZCk7XG4gICAgYWRkQ2xhc3NlcyhzdHlsZUNsYXNzZXMuc2VsZWN0aW9uLCBzZWxlY3Rpb24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3Rpb24pO1xuXG4gICAgLy8gQXJyb3dcbiAgICBjb25zdCBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgYXJyb3cuc3JjID0gYXJyb3dTdmc7XG4gICAgYWRkQ2xhc3NlcyhzdHlsZUNsYXNzZXMuYXJyb3csIGFycm93KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYXJyb3cpO1xuXG4gICAgLy8gRGl2IHRoYXQgaG9sZHMgbWVudSBhbmQgZmVlZGJhY2sgc28gdGhleSBjYW4gYm90aCBleHBhbmQgb3ZlciB0b3Agb2Ygb3RoZXIgZWxlbWVudHNcbiAgICBjb25zdCBtZW51QW5kRmVlZGJhY2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZENsYXNzZXMoc3R5bGVDbGFzc2VzLm1lbnVBbmRGZWVkYmFja0NvbnRhaW5lciwgbWVudUFuZEZlZWRiYWNrQ29udGFpbmVyKTtcbiAgICBzaGFkb3dSb290LmFwcGVuZENoaWxkKG1lbnVBbmRGZWVkYmFja0NvbnRhaW5lcik7XG5cbiAgICAvLyBEcm9wZG93biBtZW51XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkQ2xhc3NlcyhzdHlsZUNsYXNzZXMubWVudSwgbWVudSk7XG4gICAgbWVudUFuZEZlZWRiYWNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgLy8gU2Nyb2xsIGNvbnRhaW5lclxuICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkQ2xhc3NlcyhzdHlsZUNsYXNzZXMuc2Nyb2xsQ29udGFpbmVyLCBzY3JvbGxDb250YWluZXIpO1xuICAgIG1lbnVBbmRGZWVkYmFja0NvbnRhaW5lci5hcHBlbmRDaGlsZChzY3JvbGxDb250YWluZXIpO1xuXG4gICAgLy8gU2Nyb2xsIGJhclxuICAgIGNvbnN0IHNjcm9sbGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkQ2xhc3NlcyhzdHlsZUNsYXNzZXMuc2Nyb2xsYmFyLCBzY3JvbGxiYXIpO1xuICAgIHNjcm9sbENvbnRhaW5lci5hcHBlbmRDaGlsZChzY3JvbGxiYXIpO1xuXG4gICAgLy8gTWVudSBpdGVtcywgY2FnZXRnb3JpZXMsIGFuZCBkaXZpZGVycyBjcmVhdGVkIGZyb20gbWVudSBkYXRhXG4gICAgY3JlYXRlTWVudShtZW51KTtcblxuICAgIC8vIGZlZWRiYWNrIHRleHRcbiAgICBjb25zdCBmZWVkYmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGFkZENsYXNzZXMoc3R5bGVDbGFzc2VzLmZlZWRiYWNrLCBmZWVkYmFjayk7XG4gICAgbWVudUFuZEZlZWRiYWNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGZlZWRiYWNrKTtcblxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnMgZm9yIHRvZ2dsaW5nIG1lbnUgc2hvdyBjbGFzc1xuICAgIHNlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZHJvcERvd25DbGlja2VkKG1lbnUsIGFycm93KTtcbiAgICB9KTtcbiAgICBhcnJvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGFycm93Q2xpY2tlZChtZW51LCBhcnJvdyk7XG4gICAgfSk7XG5cbiAgICBpZiAoXG4gICAgICBtZW51LmNoaWxkcmVuLmxlbmd0aCAqIHN0eWxlT3B0aW9ucy5tZW51SXRlbUhlaWdodCA8PVxuICAgICAgc3R5bGVPcHRpb25zLm1lbnVNYXhIZWlnaHRcbiAgICApIHtcbiAgICAgIHNjcm9sbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICB9XG5cbiAgICAvLyBFdmVudCBsaXN0ZW5lciBmb3IgdXBkYXRpbmcgc2Nyb2xsYmFyXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgIHVwZGF0ZVNjcm9sbEJhcihtZW51LCBzY3JvbGxiYXIsIHNjcm9sbENvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vIENyZWF0ZSB0aGUgZWxlbWVudHNcbiAgY29uc3QgcGFyZW50ID0gY3JlYXRlSFRNTCgpO1xuXG4gIC8vIENyZWF0ZSBzdHlsZSBlbGVtZW50XG4gIGNvbnN0IHNoYWRvd1N0eWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgcGFyZW50LnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoc2hhZG93U3R5bGVzKTtcblxuICAvLyBDaGVjayAgaWYgc2Nyb2xsYmFyIGlzIG5lZWRlZFxuXG4gIC8vIE1ldGhvZHMgZm9yIGFsdGVyaW5nIGFmdGVyIGNyZWF0aW9uXG4gIGNvbnN0IHNldFNoYWRvd1N0eWxlID0gKCkgPT4ge1xuICAgIHNoYWRvd1N0eWxlcy5pbm5lckhUTUwgPSBnZW5lcmF0ZURlZmF1bHRTdHlsZShzdHlsZUNsYXNzZXMsIHN0eWxlT3B0aW9ucyk7XG4gIH07XG5cbiAgLy8gU3R5bGUgdGhlIGVsZW1lbnRzXG4gIHNldFNoYWRvd1N0eWxlKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXJlbnQsXG4gICAgZ2V0IHpJbmRleCgpIHtcbiAgICAgIHJldHVybiBzdHlsZU9wdGlvbnMuekluZGV4O1xuICAgIH0sXG4gICAgc2V0IHpJbmRleCh2YWx1ZSkge1xuICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIodmFsdWUpKSBzdHlsZU9wdGlvbnMuekluZGV4ID0gdmFsdWU7XG4gICAgICBzZXRTaGFkb3dTdHlsZSgpO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkcm9wRG93bjtcbiIsImNvbnN0IGdlbmVyYXRlRGVmYXVsdFN0eWxlID0gKHN0eWxlQ2xhc3Nlcywgb3B0aW9ucykgPT4ge1xuICAvLyAjcmVnaW9uIENTUyBSZXNldFxuICBjb25zdCByZXNldFN0eWxlID0gYFxuICBodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbiAgYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuICBkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG4gIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG4gIGIsIHUsIGksIGNlbnRlcixcbiAgZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbiAgZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG4gIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuICBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG4gIGZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG4gIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxuICB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIH1cbiAgLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuICBhcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbiAgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBib2R5IHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuICBvbCwgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbiAgYmxvY2txdW90ZSwgcSB7XG4gICAgcXVvdGVzOiBub25lO1xuICB9XG4gIGJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxuICBxOmJlZm9yZSwgcTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgY29udGVudDogbm9uZTtcbiAgfVxuICB0YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgfVxuICBgO1xuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3QgcGFyZW50U3R5bGUgPSBgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGU6IDMycHggMS4xcmVtIC8gbWluLWNvbnRlbnQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICBcImNvbnRhaW5lclwiXG4gICAgICAgIFwibWVudUFuZEZlZWRiYWNrXCI7XG5cbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgOmhvc3QoW2hpZGRlbl0pIHsgXG4gICAgICBkaXNwbGF5OiBub25lIFxuICAgIH1cbiAgYDtcblxuICBjb25zdCBjb250YWluZXJTdHlsZSA9IGBcbiAgICAuJHtzdHlsZUNsYXNzZXMuY29udGFpbmVyfSB7XG4gICAgICBncmlkLWFyZWE6IGNvbnRhaW5lcjtcblxuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgbWluLXdpZHRoOiAyMGNoO1xuICAgIH1cbiAgYDtcblxuICBjb25zdCBzZWxlY3Rpb25TdHlsZSA9IGBcbiAgICAuJHtzdHlsZUNsYXNzZXMuc2VsZWN0aW9ufSB7XG5cbiAgICB9XG4gIGA7XG5cbiAgY29uc3QgYXJyb3dTdHlsZSA9IGBcbiAgICAuJHtzdHlsZUNsYXNzZXMuYXJyb3d9IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICBoZWlnaHQ6IDMwcHg7XG5cbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiA1cHg7XG5cbiAgICAgIHRyYW5zaXRpb246IDAuNXMgY3ViaWMtYmV6aWVyKDAuMSwtMC4yOCwgMC4yMywgMS4zNSk7XG4gICAgfVxuXG4gICAgLiR7c3R5bGVDbGFzc2VzLmFycm93fS5mbGlwIHtcbiAgICAgIHJvdGF0ZTogMTgwZGVnO1xuICAgIH1cbiAgYDtcblxuICBjb25zdCBtZW51QW5kRmVlZGJhY2tDb250YWluZXJTdHlsZSA9IGBcbiAgICAuJHtzdHlsZUNsYXNzZXMubWVudUFuZEZlZWRiYWNrQ29udGFpbmVyfSB7XG4gICAgICBncmlkLWFyZWE6IG1lbnVBbmRGZWVkYmFjaztcblxuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gMS4xcmVtIC8gMWZyO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgXCJtZW51XCJcbiAgICAgICAgXCJmZWVkYmFja1wiO1xuXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgYDtcblxuICBjb25zdCBtZW51U3R5bGUgPSBgXG4gICAgLiR7c3R5bGVDbGFzc2VzLm1lbnV9IHtcbiAgICAgIGdyaWQtYXJlYTogbWVudTtcblxuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtYXV0by1yb3dzOiAxLjFyZW07XG5cbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgbWF4LWhlaWdodDogMDsgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXG4gICAgICBvcGFjaXR5OiAwO1xuXG4gICAgICB6LWluZGV4OiAke29wdGlvbnMuekluZGV4fTtcblxuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cbiAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cblxuICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzIGVhc2UtaW4tb3V0LCBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuXG4gICAgLiR7c3R5bGVDbGFzc2VzLm1lbnV9LnNob3cge1xuICAgICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIC4ke3N0eWxlQ2xhc3Nlcy5tZW51fTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIGA7XG5cbiAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyU3R5bGUgPSBgXG4gICAgLiR7c3R5bGVDbGFzc2VzLnNjcm9sbENvbnRhaW5lcn0uaGlkZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC4ke3N0eWxlQ2xhc3Nlcy5zY3JvbGxDb250YWluZXJ9IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgaGVpZ2h0OiAwO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjVzIGVhc2UtaW4tb3V0LCBvcGFjaXR5IDAuMXMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuXG4gICAgLiR7c3R5bGVDbGFzc2VzLm1lbnV9LnNob3cgKyAuJHtzdHlsZUNsYXNzZXMuc2Nyb2xsQ29udGFpbmVyfSB7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgei1pbmRleDogJHtvcHRpb25zLnpJbmRleH07XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0IHNjcm9sbGJhclN0eWxlID0gYFxuICAgIC4ke3N0eWxlQ2xhc3Nlcy5zY3JvbGxiYXJ9IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMnB4O1xuICAgICAgcmlnaHQ6IDJweDtcbiAgICAgIHdpZHRoOiA4cHg7XG4gICAgICBoZWlnaHQ6IDMzJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgYDtcblxuICBjb25zdCBvcHRncm91cFN0eWxlID0gYFxuICAgIC4ke3N0eWxlQ2xhc3Nlcy5vcHRncm91cH0ge1xuXG4gICAgfVxuICBgO1xuXG4gIGNvbnN0IG9wdGlvblN0eWxlID0gYFxuICAgIC4ke3N0eWxlQ2xhc3Nlcy5vcHRpb259IHtcblxuICAgIH1cbiAgYDtcblxuICBjb25zdCBkaXZpZGVyU3R5bGUgPSBgXG4gICAgLiR7c3R5bGVDbGFzc2VzLmRpdmlkZXJ9IHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibHVlO1xuICAgIH1cbiAgYDtcblxuICBjb25zdCBmZWVkYmFja1N0eWxlID0gYFxuICAgIC4ke3N0eWxlQ2xhc3Nlcy5mZWVkYmFja30ge1xuICAgICAgZ3JpZC1hcmVhOiBmZWVkYmFjaztcbiAgICB9XG5cbiAgICAuJHtzdHlsZUNsYXNzZXMubWVudX0uc2hvdyArIC4ke3N0eWxlQ2xhc3Nlcy5mZWVkYmFja30ge1xuICAgICAgei1pbmRleDogJHtvcHRpb25zLnpJbmRleH07XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0IHN0eWxlcyA9XG4gICAgcmVzZXRTdHlsZSArXG4gICAgcGFyZW50U3R5bGUgK1xuICAgIGNvbnRhaW5lclN0eWxlICtcbiAgICBzZWxlY3Rpb25TdHlsZSArXG4gICAgYXJyb3dTdHlsZSArXG4gICAgbWVudUFuZEZlZWRiYWNrQ29udGFpbmVyU3R5bGUgK1xuICAgIG1lbnVTdHlsZSArXG4gICAgc2Nyb2xsQ29udGFpbmVyU3R5bGUgK1xuICAgIHNjcm9sbGJhclN0eWxlICtcbiAgICBvcHRncm91cFN0eWxlICtcbiAgICBvcHRpb25TdHlsZSArXG4gICAgZGl2aWRlclN0eWxlICtcbiAgICBmZWVkYmFja1N0eWxlO1xuXG4gIHJldHVybiBzdHlsZXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZURlZmF1bHRTdHlsZTtcbiIsIi8vIFRoaXMgd2lsbCByZXR1cm4gdHJ1ZSBpZiBkYXRhVG9WYWxpZGF0ZSBpcyBhbiBhcnJheSBjb250YWluaW5nIGF0IGxlYXN0IG9uZSBzdHJpbmdcbmNvbnN0IHZhbGlkYXRlTWVudURhdGEgPSAoZGVmYXVsdERhdGEsIHBhc3NlZERhdGEpID0+IHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHBhc3NlZERhdGEpKSByZXR1cm4gZGVmYXVsdERhdGE7XG5cbiAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IHBhc3NlZERhdGE7XG5cbiAgLy8gQ2hlY2sgZWFjaCBlbnRyeSBhbmQgcmVtb3ZlIG5vbiBzdHJpbmdzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsaWRhdGVkRGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlb2YgdmFsaWRhdGVkRGF0YVtpXSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgdmFsaWRhdGVkRGF0YS5wb3AodmFsaWRhdGVkRGF0YVtpXSk7XG4gICAgICBpID0gLTE7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgYXJyYXkgaXMgbm93IGVtcHR5IHJldHVybiBmYWxzZVxuICBpZiAodmFsaWRhdGVkRGF0YS5sZW5ndGggPT09IDApIHJldHVybiBkZWZhdWx0RGF0YTtcblxuICByZXR1cm4gdmFsaWRhdGVkRGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlTWVudURhdGE7XG4iLCJpbXBvcnQgcHJldmlvdXNBcnJvdyBmcm9tIFwiLi9pY29ucy9hcnJvd0JhY2suc3ZnXCI7XG5pbXBvcnQgbmV4dEFycm93IGZyb20gXCIuL2ljb25zL2Fycm93Rm9yd2FyZC5zdmdcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGltYWdlU2xpZGVyID0gKGltYWdlU291cmNlcykgPT4ge1xuICBsZXQgc2xpZGVDb3VudCA9IDA7XG4gIGxldCBjdXJyZW50U2xpZGUgPSAwO1xuICBjb25zdCBzbGlkZVdpZHRoID0gMTgwO1xuICBjb25zdCBzbGlkZVNwYWNlcldpZHRoID0gMTAwO1xuXG4gIC8vIENoZWNrIGltYWdlU291cmNlcyBpcyBhcnJheVxuICBsZXQgdmFsaWRhdGVkU291cmNlcztcbiAgaWYgKCFBcnJheS5pc0FycmF5KGltYWdlU291cmNlcykpIHZhbGlkYXRlZFNvdXJjZXMgPSBbXTtcbiAgZWxzZSB2YWxpZGF0ZWRTb3VyY2VzID0gaW1hZ2VTb3VyY2VzO1xuICAvLyBUcmltIGludmFsaWQgZW50cmllc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbGlkYXRlZFNvdXJjZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodHlwZW9mIHZhbGlkYXRlZFNvdXJjZXNbaV0gIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHZhbGlkYXRlZFNvdXJjZXMuc3BsaWNlKGksIDEpO1xuICAgICAgaSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIC8vICNyZWdpb24gTWV0aG9kIGZvciBjcmVhdGluZyBhbmQgcmV0dXJuaW5nIGh0bWwgcGFyZW50IGVsZW1lbnRcbiAgY29uc3QgY3JlYXRlU2xpZGVzID0gKHJlZWwpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbGlkYXRlZFNvdXJjZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIC8vIFNsaWRlXG4gICAgICBjb25zdCBzbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBzbGlkZS5zcmMgPSB2YWxpZGF0ZWRTb3VyY2VzW2ldO1xuICAgICAgc2xpZGUuY2xhc3NMaXN0LmFkZChcInNsaWRlXCIpO1xuICAgICAgLy8gU3BhY2VyIG9uIGxlZnRcbiAgICAgIGNvbnN0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzcGFjZXIuY2xhc3NMaXN0LmFkZChcInNwYWNlclwiKTtcbiAgICAgIC8vIEFwcGVuZFxuICAgICAgcmVlbC5hcHBlbmRDaGlsZChzcGFjZXIpO1xuICAgICAgcmVlbC5hcHBlbmRDaGlsZChzbGlkZSk7XG4gICAgICAvLyBTcGFjZXIgb24gcmlnaHQgZm9yIGxhc3QgaW1nXG4gICAgICBpZiAoaSA9PT0gdmFsaWRhdGVkU291cmNlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGNvbnN0IGxhc3RTcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsYXN0U3BhY2VyLmNsYXNzTGlzdC5hZGQoXCJzcGFjZXJcIik7XG4gICAgICAgIHJlZWwuYXBwZW5kQ2hpbGQobGFzdFNwYWNlcik7XG4gICAgICB9XG4gICAgICAvLyBUcmFjayB0b3RhbCBzbGlkZXNcbiAgICAgIHNsaWRlQ291bnQgKz0gMTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbmF2Q2lyY2xlcyA9IHt9O1xuXG4gIGNvbnN0IGNyZWF0ZU5hdkNpcmNsZXMgPSAoY29udGFpbmVyKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZUNvdW50OyBpICs9IDEpIHtcbiAgICAgIC8vIENpcmNsZVxuICAgICAgY29uc3QgbmF2Q2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5hdkNpcmNsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGAke2l9YCk7XG4gICAgICBuYXZDaXJjbGUuY2xhc3NMaXN0LmFkZChcIm5hdi1jaXJjbGVcIik7XG4gICAgICAvLyBGaWxsXG4gICAgICBjb25zdCBmaWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGZpbGwuY2xhc3NMaXN0LmFkZChcImZpbGxcIik7XG4gICAgICAvLyBBcHBlbmRcbiAgICAgIG5hdkNpcmNsZS5hcHBlbmRDaGlsZChmaWxsKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZDaXJjbGUpO1xuICAgICAgLy8gQWRkIG5hdiBjaXJjbGUgdG8gb2JqZWN0IHRoYXQgc3RvcmVzIGFsbCBuYXYgY2lyY2xlc1xuICAgICAgbmF2Q2lyY2xlc1tpXSA9IG5hdkNpcmNsZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgLy8gUGFyZW50XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZChcImltYWdlLXNsaWRlclwiKTtcblxuICAgIC8vIFJlZWxcbiAgICAvLyBDb250YWluZXJcbiAgICBjb25zdCByZWVsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZWVsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyZWVsLWNvbnRhaW5lclwiKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocmVlbENvbnRhaW5lcik7XG4gICAgLy8gUmVlbCBkaXZcbiAgICBjb25zdCByZWVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZWVsLmNsYXNzTGlzdC5hZGQoXCJyZWVsXCIpO1xuICAgIHJlZWxDb250YWluZXIuYXBwZW5kQ2hpbGQocmVlbCk7XG4gICAgLy8gU2xpZGVzXG4gICAgY3JlYXRlU2xpZGVzKHJlZWwpO1xuXG4gICAgLy8gQnV0dG9uc1xuICAgIC8vIFByZXZpb3VzXG4gICAgY29uc3QgcHJldmlvdXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByZXZpb3VzQnRuLmNsYXNzTGlzdC5hZGQoXCJwcmV2aW91cy1idG5cIik7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHByZXZpb3VzQnRuKTtcbiAgICAvLyBJY29uXG4gICAgY29uc3QgcHJldmlvdXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBwcmV2aW91c0ljb24uc3JjID0gcHJldmlvdXNBcnJvdztcbiAgICBwcmV2aW91c0ljb24uY2xhc3NMaXN0LmFkZChcInByZXZpb3VzLWljb25cIik7XG4gICAgcHJldmlvdXNCdG4uYXBwZW5kQ2hpbGQocHJldmlvdXNJY29uKTtcblxuICAgIC8vIE5leHRcbiAgICBjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXh0QnRuLmNsYXNzTGlzdC5hZGQoXCJuZXh0LWJ0blwiKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobmV4dEJ0bik7XG4gICAgLy8gSWNvblxuICAgIGNvbnN0IG5leHRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBuZXh0SWNvbi5zcmMgPSBuZXh0QXJyb3c7XG4gICAgbmV4dEljb24uY2xhc3NMaXN0LmFkZChcIm5leHQtaWNvblwiKTtcbiAgICBuZXh0QnRuLmFwcGVuZENoaWxkKG5leHRJY29uKTtcblxuICAgIC8vIE5hdiBDaXJjbGVzXG4gICAgLy8gQ29udGFpbmVyXG4gICAgY29uc3QgbmF2Q2lyY2xlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2Q2lyY2xlc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2LWNpcmNsZXMtY29udGFpbmVyXCIpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuYXZDaXJjbGVzQ29udGFpbmVyKTtcbiAgICAvLyBDaXJjbGVzXG4gICAgY3JlYXRlTmF2Q2lyY2xlcyhuYXZDaXJjbGVzQ29udGFpbmVyKTtcblxuICAgIHJldHVybiB7IHBhcmVudCwgcmVlbCwgbmV4dEJ0biwgcHJldmlvdXNCdG4gfTtcbiAgfTtcblxuICAvLyBDcmVhdGUgdGhlIGVsZW1lbnRzXG4gIGNvbnN0IGVsZW1lbnRzID0gY3JlYXRlRWxlbWVudHMoKTtcbiAgY29uc3QgeyBwYXJlbnQgfSA9IGVsZW1lbnRzO1xuICBjb25zdCB7IHJlZWwgfSA9IGVsZW1lbnRzO1xuICBjb25zdCB7IG5leHRCdG4gfSA9IGVsZW1lbnRzO1xuICBjb25zdCB7IHByZXZpb3VzQnRuIH0gPSBlbGVtZW50cztcblxuICAvLyAjZW5kcmVnaW9uXG4gIGNvbnN0IHNldFJlZWwgPSAoc2xpZGVJbmRleCkgPT4ge1xuICAgIGNvbnN0IHBvc2l0aW9uWmVybyA9IGAtJHtzbGlkZVNwYWNlcldpZHRoIC8gMn1weGA7XG4gICAgY29uc3QgcmVlbFRvU2V0ID0gcmVlbDtcblxuICAgIGxldCByZWVsUG9zaXRpb247XG5cbiAgICBpZiAoc2xpZGVJbmRleCA9PT0gMCkgcmVlbFBvc2l0aW9uID0gcG9zaXRpb25aZXJvO1xuXG4gICAgaWYgKFxuICAgICAgTnVtYmVyLmlzSW50ZWdlcihzbGlkZUluZGV4KSAmJlxuICAgICAgc2xpZGVJbmRleCA+IDAgJiZcbiAgICAgIHNsaWRlSW5kZXggPD0gc2xpZGVDb3VudCAtIDFcbiAgICApIHtcbiAgICAgIHJlZWxQb3NpdGlvbiA9IGAtJHtcbiAgICAgICAgc2xpZGVTcGFjZXJXaWR0aCAvIDIgKyBzbGlkZUluZGV4ICogKHNsaWRlV2lkdGggKyBzbGlkZVNwYWNlcldpZHRoKVxuICAgICAgfXB4YDtcbiAgICB9XG5cbiAgICByZWVsVG9TZXQuc3R5bGUubGVmdCA9IHJlZWxQb3NpdGlvbjtcbiAgfTtcblxuICBjb25zdCBzZXRTZWxlY3RlZE5hdkNpcmNsZSA9ICgpID0+IHtcbiAgICBPYmplY3Qua2V5cyhuYXZDaXJjbGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChrZXkgPT09IGN1cnJlbnRTbGlkZS50b1N0cmluZygpKSB7XG4gICAgICAgIG5hdkNpcmNsZXNba2V5XS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICB9IGVsc2UgbmF2Q2lyY2xlc1trZXldLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBpbmNyZW1lbnRSZWVsID0gKG5leHQgPSB0cnVlKSA9PiB7XG4gICAgbGV0IGluY3JlbWVudGVyO1xuICAgIGlmIChuZXh0KSBpbmNyZW1lbnRlciA9IDE7XG4gICAgZWxzZSBpbmNyZW1lbnRlciA9IC0xO1xuXG4gICAgLy8gU2V0IGN1cnJlbnQgc2xpZGUgYW5kIGp1bXAgdG8gc3RhcnQgb3IgZW5kIHdoZW4gbmVlZGVkXG4gICAgY3VycmVudFNsaWRlICs9IGluY3JlbWVudGVyO1xuICAgIGlmIChjdXJyZW50U2xpZGUgPCAwKSBjdXJyZW50U2xpZGUgPSBzbGlkZUNvdW50IC0gMTtcbiAgICBpZiAoY3VycmVudFNsaWRlID4gc2xpZGVDb3VudCAtIDEpIGN1cnJlbnRTbGlkZSA9IDA7XG5cbiAgICBzZXRSZWVsKGN1cnJlbnRTbGlkZSk7XG4gICAgc2V0U2VsZWN0ZWROYXZDaXJjbGUoKTtcbiAgfTtcblxuICBsZXQgYXV0b0FkdmFuY2VJbnRlcnZhbCA9IHNldEludGVydmFsKGluY3JlbWVudFJlZWwsIDUwMDApO1xuXG4gIGNvbnN0IHJlc2V0QXV0b0FkdmFuY2VJbnRlcnZhbCA9ICgpID0+IHtcbiAgICBjbGVhckludGVydmFsKGF1dG9BZHZhbmNlSW50ZXJ2YWwpO1xuICAgIGF1dG9BZHZhbmNlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChpbmNyZW1lbnRSZWVsLCA1MDAwKTtcbiAgfTtcblxuICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaW5jcmVtZW50UmVlbCh0cnVlKTtcbiAgICByZXNldEF1dG9BZHZhbmNlSW50ZXJ2YWwoKTtcbiAgfSk7XG4gIHByZXZpb3VzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaW5jcmVtZW50UmVlbChmYWxzZSk7XG4gICAgcmVzZXRBdXRvQWR2YW5jZUludGVydmFsKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGp1bXBUb1NsaWRlID0gKHNsaWRlSW5kZXgpID0+IHtcbiAgICBjb25zdCBpbnRJbmRleCA9IHBhcnNlSW50KHNsaWRlSW5kZXgsIDEwKTtcbiAgICBzZXRSZWVsKGludEluZGV4KTtcbiAgICBjdXJyZW50U2xpZGUgPSBpbnRJbmRleDtcbiAgICBzZXRTZWxlY3RlZE5hdkNpcmNsZSgpO1xuICB9O1xuXG4gIE9iamVjdC5rZXlzKG5hdkNpcmNsZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIG5hdkNpcmNsZXNba2V5XS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAganVtcFRvU2xpZGUobmF2Q2lyY2xlc1trZXldLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgcmVzZXRBdXRvQWR2YW5jZUludGVydmFsKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIEluaXRcbiAgc2V0UmVlbCgwLCByZWVsKTtcbiAgc2V0U2VsZWN0ZWROYXZDaXJjbGUoKTtcblxuICByZXR1cm4geyBwYXJlbnQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGltYWdlU2xpZGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBEcm9wRG93biBmcm9tIFwiLi9tb2R1bGVzL2Ryb3BEb3duL2Ryb3BEb3duXCI7XG5pbXBvcnQgSW1hZ2VTbGlkZXIgZnJvbSBcIi4vbW9kdWxlcy9pbWFnZVNsaWRlci9pbWFnZVNsaWRlclwiO1xuXG5jb25zdCBpbWdTb3VyY2VzID0gW1xuICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9pZD0xOGh2V2VvaFphekZOX2Q4RnJPRW9QUUx3RklDeUMzYmxcIixcbiAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/aWQ9MUVZRlduYkQtR3FGd2k3cTdOdXdhOUNGc183MGpIdnQ1XCIsXG4gIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2lkPTE4V0poSEtrZUZYem9rRXRjalZaZXdqWWJURWkxX2RoZ1wiLFxuICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9pZD0xTWxGcC1zeWFwLWgxUzBObEwwTGpObFFBNldZcHBRdHBcIixcbiAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/aWQ9MWYwWEg2b0pKdm5UaXBQVEp1SGxmNHk1N3JUeElxM0FHXCIsXG5dO1xuXG5jb25zdCBkcm9wRG93bk1lbnUgPSBEcm9wRG93bihcbiAgW1xuICAgIFwiI0ZydWl0XCIsXG4gICAgXCJBcHBsZXNcIixcbiAgICBcIkJhbmFuYXNcIixcbiAgICBcIkdyYXBlc1wiLFxuICAgIFwiX1wiLFxuICAgIFwiVG9tYXRvZXNcIixcbiAgICBcIkN1Y3VtYmVyc1wiLFxuICAgIFwiQmVsbCBQZXBwZXJzXCIsXG4gICAgXCJDb3JuXCIsXG4gICAgXCIjVmVnZXRhYmxlc1wiLFxuICAgIFwiQ2Fycm90c1wiLFxuICAgIFwiUG90YXRvZXNcIixcbiAgICBcIkxldHR1Y2VcIixcbiAgXSxcbiAgZmFsc2UsXG4gIFwiYXV0b1N1Z2dlc3RcIlxuKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZHJvcERvd25NZW51LnBhcmVudCk7XG5cbmNvbnN0IGludmFsaWRQYXJhbUREID0gRHJvcERvd24oXG4gIHtcbiAgICBwYXJlbnRDbGFzc2VzOiB1bmRlZmluZWQsXG4gICAgY29udGFpbmVyQ2xhc3NlczogNixcbiAgICBzZWxlY3Rpb25DbGFzc2VzOiBudWxsLFxuICAgIGxhYmVsQ2xhc3NlczogTmFOLFxuICAgIGFycm93Q2xhc3NlczogW10sXG4gICAgbWVudUNsYXNzZXM6IG51bGwsXG4gICAgc2Nyb2xsQmFyQ2xhc3NlczogWzIzLCAyNCwgMjVdLFxuICAgIGZlZWRiYWNrQ2xhc3Nlczoge30sXG4gICAgaW5wdXRJZFByZWZpeDogNjksXG4gIH0sXG4gIFt1bmRlZmluZWQsIG51bGwsIE5hTiwgMF1cbik7XG5cbmNvbnN0IHRoaXJkRHJvcERvd24gPSBEcm9wRG93bihbXSwgZmFsc2UsIFwiYXV0b0NvbXBsZXRlXCIpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGludmFsaWRQYXJhbURELnBhcmVudCk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcmREcm9wRG93bi5wYXJlbnQpO1xuXG5kcm9wRG93bk1lbnUuekluZGV4ID0gMzAwO1xuXG5jb25zdCBzbGlkZXIgPSBJbWFnZVNsaWRlcihpbWdTb3VyY2VzKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzbGlkZXIucGFyZW50KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==