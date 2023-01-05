/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-color: #BEF264;\n  --secondary-color: #F8FFE8;\n  --grey-text-color: #9a9a9a;\n  --light-grey: #cdcdcd;\n  --card-color: #FFFFFF;\n  --pointer: pointer;\n  font-size: 16px;\n  font-family: 'Roboto', 'sans-serif';\n  user-select: none;\n}\n\nbody, h1, h2, h3, p, ul, li {\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  list-style: none;\n}\n\n.font-large {\n  font-size: 2rem;\n}\n\n.font-medium {\n  font-size: 1.5rem;\n}\n\n.font-regular {\n  font-size: 1rem;\n}\n\n.font-small {\n  font-size: 0.875rem;\n}\n\n.primary-color {\n  background-color: var(--primary-color);\n}\n\n.secondary-color {\n  background-color: var(--secondary-color);\n}\n\n.grey-font {\n  color: var(--grey-text-color);\n}\n\n.light-grey {\n  color: var(--light-grey);\n}\n\n.p-24 {\n  padding: 24px;\n}\n\n.p-48 {\n  padding: 48px;\n}\n\n.mb-8 {\n  margin-bottom: 8px;\n}\n\n.mb-16 {\n  margin-bottom: 16px;\n}\n\n.mb-32 {\n  margin-bottom: 32px;\n}\n\n.mb-48 {\n  margin-bottom: 48px;\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n#container{\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  height: 100vh;\n}\n\n#sidebar h1 {\n  margin-bottom: 84px;\n}\n\n.nav-list {\n  display: flex;\n  flex-direction: column;\n}\n\n#projects li {\n  cursor: var(--pointer);\n  font-size: 1.25rem;\n  margin-left: 24px;\n  margin-bottom: 12px;\n  user-select: none;\n}\n\n#projects li:hover {\n  text-decoration: underline;\n}\n\n#sidebar h2 {\n  font-weight: 600;\n}\n\n#sidebar h2:nth-child(n+1) {\n  margin-bottom: 16px;\n}\n\n#sidebar h2:nth-of-type(2) {\n  margin-top: 32px;\n}\n\n#add-project-btn {\n  user-select: none;\n}\n\n#todo-list {\n  display: grid;\n  grid-auto-columns: 350px;\n  grid-auto-flow: column;\n  gap: 16px;\n}\n\n.todo-card {\n  padding: 24px 24px 32px 24px;\n  border-radius: 10px;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);\n  background-color: var(--card-color);\n}\n\n.status-container {\n  display: flex;\n  gap: 24px;\n}\n\n\n.todo-card h3 {\n  margin-bottom: 16px;\n}\n\n.checklist-circle {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border-color: var(--light-grey);\n  border-style: solid;\n  cursor: var(--pointer);\n}\n\n.checklist-divide {\n  margin-top: 16px;\n}\n\n.checklist-divide hr {\n  height: 1px;\n  border: 0;\n  background: var(--light-grey);\n}\n\n.add-task-button {\n  color: var(--grey-text-color);\n  cursor: var(--pointer);\n  margin-top: 16px;\n  user-select: none;\n}\n\n.task-form {\n  margin-top: 12px;\n  margin-right: 8px;\n}\n\n.notes-heading {\n  margin-top: 32px;\n}\n\n.add-todo-button {\n  border-radius: 10px;\n  padding: 12px;\n  background-color: rgb(229, 229, 229);\n  width: 103px;\n  height: 30px;\n  user-select: none;\n  cursor: var(--pointer);\n  margin-bottom: 24px;\n}\n\n#todo-form-container {\n  display: none;\n  flex-direction: column;\n  width: 60%;\n}\n\n#todo-form-container input, \n#todo-form-container textarea {\n  margin-bottom: 12px;\n  font-size: 1rem;\n  padding: 4px;\n}\n\n#todo-form-container button {\n  width: 40%;\n  align-self: center;\n  padding: 8px;\n}\n\n.task-container {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n\n#project-form-container {\n  display: flex;\n  gap: 8px;\n}\n\n#project-name-form {\n  padding: 8px;\n  font-size: 0.875rem;\n  margin-bottom: 12px;\n}\n\n#project-form-container button {\n  padding: 0px 8px;\n  height: 37px\n}\n\n.circle-filled {\n  background-color: var(--primary-color);\n}\n\n.task-done {\n  text-decoration: line-through;\n}\n\n.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,0BAA0B;EAC1B,qBAAqB;EACrB,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,4BAA4B;EAC5B,mBAAmB;EACnB,wCAAwC;EACxC,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;;AAGA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,+BAA+B;EAC/B,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,SAAS;EACT,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;EAC7B,sBAAsB;EACtB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,oCAAoC;EACpC,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;AACZ;;AAEA;;EAEE,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB;AACF;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf","sourcesContent":[":root {\n  --primary-color: #BEF264;\n  --secondary-color: #F8FFE8;\n  --grey-text-color: #9a9a9a;\n  --light-grey: #cdcdcd;\n  --card-color: #FFFFFF;\n  --pointer: pointer;\n  font-size: 16px;\n  font-family: 'Roboto', 'sans-serif';\n  user-select: none;\n}\n\nbody, h1, h2, h3, p, ul, li {\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  list-style: none;\n}\n\n.font-large {\n  font-size: 2rem;\n}\n\n.font-medium {\n  font-size: 1.5rem;\n}\n\n.font-regular {\n  font-size: 1rem;\n}\n\n.font-small {\n  font-size: 0.875rem;\n}\n\n.primary-color {\n  background-color: var(--primary-color);\n}\n\n.secondary-color {\n  background-color: var(--secondary-color);\n}\n\n.grey-font {\n  color: var(--grey-text-color);\n}\n\n.light-grey {\n  color: var(--light-grey);\n}\n\n.p-24 {\n  padding: 24px;\n}\n\n.p-48 {\n  padding: 48px;\n}\n\n.mb-8 {\n  margin-bottom: 8px;\n}\n\n.mb-16 {\n  margin-bottom: 16px;\n}\n\n.mb-32 {\n  margin-bottom: 32px;\n}\n\n.mb-48 {\n  margin-bottom: 48px;\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n#container{\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  height: 100vh;\n}\n\n#sidebar h1 {\n  margin-bottom: 84px;\n}\n\n.nav-list {\n  display: flex;\n  flex-direction: column;\n}\n\n#projects li {\n  cursor: var(--pointer);\n  font-size: 1.25rem;\n  margin-left: 24px;\n  margin-bottom: 12px;\n  user-select: none;\n}\n\n#projects li:hover {\n  text-decoration: underline;\n}\n\n#sidebar h2 {\n  font-weight: 600;\n}\n\n#sidebar h2:nth-child(n+1) {\n  margin-bottom: 16px;\n}\n\n#sidebar h2:nth-of-type(2) {\n  margin-top: 32px;\n}\n\n#add-project-btn {\n  user-select: none;\n}\n\n#todo-list {\n  display: grid;\n  grid-auto-columns: 350px;\n  grid-auto-flow: column;\n  gap: 16px;\n}\n\n.todo-card {\n  padding: 24px 24px 32px 24px;\n  border-radius: 10px;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);\n  background-color: var(--card-color);\n}\n\n.status-container {\n  display: flex;\n  gap: 24px;\n}\n\n\n.todo-card h3 {\n  margin-bottom: 16px;\n}\n\n.checklist-circle {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border-color: var(--light-grey);\n  border-style: solid;\n  cursor: var(--pointer);\n}\n\n.checklist-divide {\n  margin-top: 16px;\n}\n\n.checklist-divide hr {\n  height: 1px;\n  border: 0;\n  background: var(--light-grey);\n}\n\n.add-task-button {\n  color: var(--grey-text-color);\n  cursor: var(--pointer);\n  margin-top: 16px;\n  user-select: none;\n}\n\n.task-form {\n  margin-top: 12px;\n  margin-right: 8px;\n}\n\n.notes-heading {\n  margin-top: 32px;\n}\n\n.add-todo-button {\n  border-radius: 10px;\n  padding: 12px;\n  background-color: rgb(229, 229, 229);\n  width: 103px;\n  height: 30px;\n  user-select: none;\n  cursor: var(--pointer);\n  margin-bottom: 24px;\n}\n\n#todo-form-container {\n  display: none;\n  flex-direction: column;\n  width: 60%;\n}\n\n#todo-form-container input, \n#todo-form-container textarea {\n  margin-bottom: 12px;\n  font-size: 1rem;\n  padding: 4px;\n}\n\n#todo-form-container button {\n  width: 40%;\n  align-self: center;\n  padding: 8px;\n}\n\n.task-container {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n\n#project-form-container {\n  display: flex;\n  gap: 8px;\n}\n\n#project-name-form {\n  padding: 8px;\n  font-size: 0.875rem;\n  margin-bottom: 12px;\n}\n\n#project-form-container button {\n  padding: 0px 8px;\n  height: 37px\n}\n\n.circle-filled {\n  background-color: var(--primary-color);\n}\n\n.task-done {\n  text-decoration: line-through;\n}\n\n.hidden {\n  display: none;\n}"],"sourceRoot":""}]);
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

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view */ "./src/view.js");






const controller = (() => {
  let currentProjectId;
  let projectIdCounter = 0;

  const incrementProjectIdCounter = () => {
    projectIdCounter += 1;
  }

  const initializeUser = () =>{
    const projectName = 'Your Project';
    const projectDesc = 'This is your project. This text blurb is your project description, put anything here.';
    const projectId = projectIdCounter;
    currentProjectId = projectId;
    incrementProjectIdCounter();
    const firstProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__["default"])(projectName, projectDesc, projectId);
    firstProject.bindOnTodoListChanged(onTodoListChanged);
    const todoTitle = 'To do';
    const todoDesc = 'This is a todo. Add checklist tasks, due dates, and priorities here.';
    const dueDate = 'Tues, 10: 30 am';
    const priority = 'Urgent';
    const notes = 'Add notes and any additional thoughts here';
    const firstTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_2__["default"])(todoTitle, todoDesc, dueDate, priority, notes);
    const taskName = 'Make your first task';
    const firstTask = (0,_task__WEBPACK_IMPORTED_MODULE_3__["default"])(taskName);
    firstTodo.addTask(firstTask);
    firstProject.initialAddTodo(firstTodo);
    _user__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(firstProject);
  }

  const initializeSidebarView = () => {
    _user__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects().forEach(project => {
      _view__WEBPACK_IMPORTED_MODULE_4__["default"].setProjectListItem(project.getName(), project.getId());
    });
  };

  const initializeProjectView = () => {
    if (_user__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects().length !== 0) {
      const project = _user__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects()[0];
      _view__WEBPACK_IMPORTED_MODULE_4__["default"].setCurrentProjectId(project.getId());
      _view__WEBPACK_IMPORTED_MODULE_4__["default"].setProjectTitle(project.getName());
      _view__WEBPACK_IMPORTED_MODULE_4__["default"].setProjectDescription(project.getDescription());
      _view__WEBPACK_IMPORTED_MODULE_4__["default"].setAddTodoButton();
      addTodos(project.getTodoList());
    }
  };

  const loadProject = (id) => {
    _view__WEBPACK_IMPORTED_MODULE_4__["default"].resetProjectView();
    const projects = _user__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects();
    const projectTarget = projects.find(project => project.getId() === id);
    currentProjectId = id;
    _view__WEBPACK_IMPORTED_MODULE_4__["default"].setCurrentProjectId(projectTarget.getId());
    _view__WEBPACK_IMPORTED_MODULE_4__["default"].setProjectTitle(projectTarget.getName());
    _view__WEBPACK_IMPORTED_MODULE_4__["default"].setProjectDescription(projectTarget.getDescription());
    _view__WEBPACK_IMPORTED_MODULE_4__["default"].setAddTodoButton();
    //view.bindAddTodo(addSubmitTodoEvent);
    addTodos(projectTarget.getTodoList());
  }

  const initializeView = () => {
    initializeSidebarView();
    initializeProjectView();
  };

  const addTodos = (list) => {
    list.forEach(todo => {
      const todoObj = {
        title: todo.getTitle(),
        due: todo.getDueDate(),
        priority: todo.getPriority(),
        desc: todo.getDescription(),
        tasks: todo.getCheckList().map(task => task.getName()),
        notes: todo.getNotes()
      };
      _view__WEBPACK_IMPORTED_MODULE_4__["default"].addTodoCard(todoObj);
    });
  };

  const addSubmitProjectEvent = () => {
    _view__WEBPACK_IMPORTED_MODULE_4__["default"].bindSubmitProject(handleSubmitProject);
  };

  const addSubmitTodoEvent = () => {
    _view__WEBPACK_IMPORTED_MODULE_4__["default"].bindSubmitTodo(handleSubmitTodo);
  }

  const onTodoListChanged = () => {
    const currentProject = _user__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectById(currentProjectId);
    const todoList = currentProject.getTodoList();
    const addedTodo = todoList[todoList.length-1];
    const todoObj = {
      title: addedTodo.getTitle(),
      due: addedTodo.getDueDate(),
      priority: addedTodo.getPriority(),
      desc: addedTodo.getDescription(),
      tasks: addedTodo.getCheckList().map(task => task.getName()),
      notes: addedTodo.getNotes()
    }
    _view__WEBPACK_IMPORTED_MODULE_4__["default"].addTodoCard(todoObj);
  }

  const onProjectListChange = () => {
    const projects = _user__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects();
    const projectTarget = projects[projects.length-1];
    const projectName = projectTarget.getName();
    const projectId = projectTarget.getId();
    _view__WEBPACK_IMPORTED_MODULE_4__["default"].setProjectListItem(projectName, projectId);
  }

  const onProjectSwitch = (id) => {
    loadProject(id);
  };

  const handleSubmitTodo = (todo) => {
    const currentProject = _user__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectById(todo.projectId);
    const newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_2__["default"])(
      todo.title,
      todo.desc,
      todo.due,
      todo.priority,
      todo.notes
    );
    currentProject.addTodo(newTodo);
  }

  const handleSubmitProject = (name) => {
    const desc = 'This is your project. This text blurb is your project description, put anything here.';
    const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__["default"])(name, desc, projectIdCounter);
    newProject.bindOnTodoListChanged(onTodoListChanged);
    _user__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(newProject);
    incrementProjectIdCounter();
  };  
  
  initializeUser();
  _view__WEBPACK_IMPORTED_MODULE_4__["default"].bindAddTodo(addSubmitTodoEvent);
  _view__WEBPACK_IMPORTED_MODULE_4__["default"].bindAddProject(addSubmitProjectEvent);
  _user__WEBPACK_IMPORTED_MODULE_0__["default"].bindProjectListChanged(onProjectListChange);
  _view__WEBPACK_IMPORTED_MODULE_4__["default"].bindChangeProject(onProjectSwitch);

  return { initializeView };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controller);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectFactory = (name, description, id) => {
  const todoList = [];
  let onTodoListChanged = () => {};

  const copyProject = () => {
    return projectFactory(name, description);
  };

  const getName = () => {
    return name;
  };

  const getDescription = () => {
    return description;
  };

  const getTodoList = () => {
    return todoList;
  };

  const editName = (newName) => {
    name = newName;
  };

  const editDescription = (newDesc) => {
    description = newDesc;
  };

  const initialAddTodo = (todo) => {
    todoList.push(todo);
  };

  const addTodo = (todo) => {
    todoList.push(todo);
    onTodoListChanged();
  }

  const removeTodo = (todo) => {
    const index = todoList.indexOf(todo);
    if (index > -1) {
      todoList.splice(index, 1);
    }
  };

  const getId = () => {
    return id;
  }

  const setId = (newId) => {
    id = newId;
  }

  const bindOnTodoListChanged = (callback) => {
    onTodoListChanged = callback;
  };

  return { 
    getName,
    getDescription,
    getTodoList,
    copyProject,
    editName,
    editDescription,
    initialAddTodo,
    addTodo,
    removeTodo,
    getId,
    setId,
    bindOnTodoListChanged
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectFactory);

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const taskFactory = (name) => {
  let isCompleted = false;

  const getName = () => {
    return name;
  };
  const checkCompleted = () => {
    return isCompleted;
  };
  const editName = (newName) => {
    name = newName;
  };
  const toggleComplete = () => {
    isCompleted = !isCompleted;
  };

  return { getName, checkCompleted, editName, toggleComplete};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskFactory);

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const todoFactory = (title, description, dueDate, priority, notes) => {
  const checkList = [];

  const getTitle = () => {
    return title;
  };
  const getDescription = () => {
    return description;
  };
  const getDueDate = () => {
    return dueDate;
  };
  const getPriority = () => {
    return priority;
  };
  const getNotes = () => {
    return notes;
  };
  const getCheckList = () => {
    return checkList;
  }
  const editTitle = (newTitle) => {
    title = newTitle;
  };
  const editDescription = (newDesc) => {
    description = newDesc;
  };
  const editDueDate = (newDueDate) => {
    dueDate = newDueDate;
  };
  const editNotes = (newNotes) => {
    notes = newNotes;
  };
  const addTask = (task) => {
    checkList.push(task);
  };
  const removeTask = (task) => {
    const index = checkList.indexOf(task);
    if (index > -1) {
      checkList.splice(index, 1);
    }
  };
  
  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getNotes,
    getCheckList,
    editTitle,
    editDescription,
    editDueDate,
    editNotes,
    addTask,
    removeTask
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoFactory);

/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");




const user = (() => {
  const projects = [];
  let onProjectsListChanged = () => {};

  const getProjects = () => {
    return projects;
  }
  const getProjectById = (id) => {
    return projects.find(project => project.getId() === id);
  };
  const addProject = (project) => {
    projects.push(project);

    onProjectsListChanged();
  };
  const removeProject = (project) => {
    const index = projects.indexOf(project);
    if (index > -1) {
      projects.splice(index, 1);
    }
  };

  const bindProjectListChanged = (callback) => {
    onProjectsListChanged = callback;
  }

  return { getProjects, addProject, removeProject, bindProjectListChanged, getProjectById };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (user);

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const view = (() => {
  let currentProjectId;
  const sidebar = document.querySelector('#sidebar');
  const projects = document.querySelector('#projects');
  const addProjectButton = document.querySelector('#add-project-btn');
  const projectContainer = document.querySelector('#project-container');
  let todoList = document.querySelector('#todo-list');
  const settings = document.querySelector('#settings');
  let showProjectFormEvent = () => {};
  let setTodoFormEvent = () => {};
  let setProjectSwitchEvent = () => {};

  function createDiv() {
    const div = document.createElement('div');
    for (let i = 0; i < arguments.length; i++) {
      div.classList.add(`${arguments[i]}`);
    }
    return div;
  };

  function createIdDiv(id) {
    const div = document.createElement('div');
    div.id = id;
    for (let i = 1; i < arguments.length; i++) {
      div.classList.add(`${arguments[i]}`);
    }
    return div;
  };
  
  function createInputForm(id, placeholder, container) {
    const input = document.createElement('input');
    if (id !== 'none') {
      input.id = id;
    }
    input.placeholder = placeholder;
    for (let i = 3; i < arguments.length; i++) {
      input.classList.add(`${arguments[i]}`);
    }
    container.appendChild(input);
    return input;
  };

  function createTextAreaForm(id, placeholder, container) {
    const input = document.createElement('textarea');
    input.id = id;
    input.placeholder = placeholder;
    for (let i = 3; i < arguments.length; i++) {
      input.classList.add(`${arguments[i]}`);
    }
    container.appendChild(input);
    return input;
  };

  function createButtonForm(element, id, text, container) {
    let btn;
    if (element === 'div') {
      btn = document.createElement('div');
    } else if (element === 'button') {
      btn = document.createElement('button');
    }
    btn.id = id;
    btn.textContent = text;
    for (let i = 4; i < arguments.length; i++) {
      btn.classList.add(`${arguments[i]}`);
    }
    container.appendChild(btn);
    return btn;
  };

  /**
   * If insertPosition is 'before', argument[4] should be the
   * node to insert before.
   * If insertPosition is 'after' and there are classes to add,
   * argument[4] should be filled with any value.
   */
  function createText(container, insertPosition, element, text) {
    const textElement = document.createElement(`${element}`);
    textElement.textContent = text;
    for (let i = 5; i < arguments.length; i++) {
      textElement.classList.add(`${arguments[i]}`);
    }
    if (insertPosition === 'before') {
      container.insertBefore(textElement, arguments[4]);
    } else {
      container.appendChild(textElement);
    }
    return textElement;
  }

  const setCurrentProjectId = (id) => {
    currentProjectId = id;
  };

  const resetProjectView = () => {
    let element = projectContainer.lastElementChild;
    while (element) {
      projectContainer.removeChild(element);
      element = projectContainer.lastElementChild;
    }
    projectContainer.appendChild(createIdDiv('todo-list'));
    todoList = document.querySelector('#todo-list');
  };

  const setProjectListItem = (project, projectId) => {
    const projectListItem = document.createElement('li');
    projectListItem.setAttribute('project-id', projectId);
    projectListItem.textContent = project;
    projects.insertBefore(projectListItem, addProjectButton);
    projectListItem.addEventListener('click', () => {
      if (projectId !== currentProjectId) {
        setProjectSwitchEvent(projectId);
      }
    });
  };

  const setProjectTitle = (title) => {
    createText(projectContainer, 'before', 'h2', title, todoList, 'font-medium', 'mb-16');
  };

  const setProjectDescription = (description) => {
    createText(projectContainer, 'before', 'p', description, todoList, 'font-regular', 'mb-48');
  };

  const setTodoTitle = (title, todoCard) => {
    createText(todoCard, 'after', 'h2', title, 'none', 'font-medium', 'mb-32');
  };

  const setTodoStatus = (dueDate, priority, todoCard) => {
    const status = createDiv('mb-16', 'status-container')
    createText(status, 'after', 'p', `Due: ${dueDate}`, 'none', 'font-small');
    createText(status, 'after', 'p', priority, 'none', 'font-small');
    todoCard.appendChild(status);
  };

  const setTodoDescription = (desc, todoCard) => {
    createText(todoCard, 'after', 'p', desc, 'none', 'mb-32');
  };

  const setTask = (task, container) => {
    const taskName = createText(container, 'after', 'p', task);
    return taskName;
  };

  const setTaskCheckCircle = (container, task) => {
    const checklistCircle = createDiv('checklist-circle');
    container.insertBefore(checklistCircle, task);
    checklistCircle.addEventListener('click', () => {
      checklistCircle.classList.toggle('circle-filled');
      task.classList.toggle('task-done');

    });
  };

  const setTodoTasks = (tasks, todoCard) => {
    tasks.forEach(task => {
      const taskContainer = createDiv('task-container')
      const taskName = setTask(task, taskContainer);
      setTaskCheckCircle(taskContainer, taskName);
      todoCard.appendChild(taskContainer);
      const divider = createDiv('checklist-divide');
      const hr = document.createElement('hr');
      divider.appendChild(hr);
      todoCard.appendChild(divider);
    })
  };

  const setAddTaskButton = (todoCard) => {
    const addTaskButton = createButtonForm('div', 'none', 'Add Task', todoCard, 'p', 'add-task-button');
    const taskFormContainer = createDiv('hidden');
    const taskForm = createInputForm('none', 'Enter task name', taskFormContainer, 'task-form');
    const taskSubmitButton = createButtonForm('button', 'none', 'SUBMIT', taskFormContainer);
    todoCard.appendChild(taskFormContainer);
    addTaskButton.addEventListener('click', () => {
      taskFormContainer.classList.toggle('hidden');
    });
    taskSubmitButton.addEventListener('click', () => {

    });
  }

  const setNotes = (notes, todoCard) => {
    createText(todoCard, 'after', 'h3', 'Notes', 'none', 'notes-heading');
    createText(todoCard, 'after', 'p', notes);
  };

  const addTodoCard = (todo) => {
    const todoCard = createDiv('todo-card');
    setTodoTitle(todo.title, todoCard);
    setTodoStatus(todo.due, todo.priority, todoCard);
    setTodoDescription(todo.desc, todoCard);
    setTodoTasks(todo.tasks, todoCard);
    setAddTaskButton(todoCard);
    setNotes(todo.notes, todoCard);

    const addTodoButton = document.querySelector('#todo-add-container');
    todoList.insertBefore(todoCard, addTodoButton);
  };

  const setTodoForm = (container) => {
    createInputForm('todo-title', 'Title', container);
    createInputForm('due-date-input', 'Due Date', container);
    createInputForm('priority-input', 'Priority', container);
    createTextAreaForm('description-textarea', 'Description', container);
    createTextAreaForm('notes-input', 'Notes', container);
    createButtonForm('button', 'todo-submit-btn', 'SUBMIT', container);
  };

  const setAddTodoButton = () => {
    const addTodoContainer = createIdDiv('todo-add-container');
    const todoFormContainer = createIdDiv('todo-form-container', 'hidden');
    const addTodoButton = createButtonForm('div', 'add-todo-button', 'Add Todo', addTodoContainer, 'add-todo-button', 'grey-font', 'font-medium');
    setTodoForm(todoFormContainer);
    addTodoContainer.appendChild(todoFormContainer);
    todoList.appendChild(addTodoContainer);
    setTodoFormEvent();

    addTodoButton.addEventListener('click', () => {
      todoFormContainer.style.display === 'flex' ?
        todoFormContainer.style.display = 'none' :
        todoFormContainer.style.display = 'flex';
    })
  };

  const toggleProjectForm = () => {
    const projectFormContainer = document.querySelector('#project-form-container');
    if (projectFormContainer) {
      (projectFormContainer.style.display === 'none') ? 
        projectFormContainer.style.display = 'flex' :
        projectFormContainer.style.display = 'none';
    } else {
      const formContainer = createIdDiv('project-form-container');
      const nameForm = createInputForm('project-name-form', 'Enter the project name', formContainer);
      const formSubmit = createButtonForm('button', 'submit-project-button', 'ENTER', formContainer);
      sidebar.insertBefore(formContainer, settings);
      showProjectFormEvent();
    }
  };

  const resetTodoSubmitForm = () => {
    document.querySelector('#todo-title').value = '';
    document.querySelector('#due-date-input').value = '';
    document.querySelector('#priority-input').value = '';
    document.querySelector('#description-textarea').value = '';
    document.querySelector('#notes-input').value = '';
    document.querySelector('#todo-form-container').style.display = 'none';
  }

  const resetProjectSubmitForm = () => {
    const projectNameForm = document.querySelector('#project-name-form');
    projectNameForm.value = '';
    const projectFormContainer = document.querySelector('#project-form-container');
    projectFormContainer.style.display = 'none';
  };

  const bindChangeProject = (callback) => {
    setProjectSwitchEvent = callback;
  }

  const bindSubmitTodo = (handler) => {
    const submitButton = document.querySelector('#todo-submit-btn');
    submitButton.addEventListener('click', () => {
      const todo = {
        projectId: currentProjectId,
        title: document.querySelector('#todo-title').value,
        due: document.querySelector('#due-date-input').value,
        priority: document.querySelector('#priority-input').value,
        desc: document.querySelector('#description-textarea').value,
        notes: document.querySelector('#notes-input').value
      };
      handler(todo);
      resetTodoSubmitForm();
    });
  }

  const bindAddTodo = (callback) => {
    setTodoFormEvent = callback;
  }

  const bindAddProject = (callback) => {
    showProjectFormEvent = callback;
  }

  const bindSubmitProject = (handler) => {
    const submitButton = document.querySelector('#submit-project-button');
    submitButton.addEventListener('click', () => {
      const projectNameForm = document.querySelector('#project-name-form');
      const projectName = projectNameForm.value;
      handler(projectName);
      resetProjectSubmitForm();
    });
  };

  addProjectButton.addEventListener('click', toggleProjectForm);

  return { 
      resetProjectView,
      setCurrentProjectId,
      setProjectTitle,
      setProjectDescription,
      addTodoCard,
      setProjectListItem,
      setAddTodoButton,
      bindSubmitProject,
      bindAddProject,
      toggleProjectForm,
      bindAddTodo,
      bindSubmitTodo,
      bindChangeProject
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);

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
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/controller.js");



_controller__WEBPACK_IMPORTED_MODULE_1__["default"].initializeView();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsSUFBSTs7Ozs7O1VDdlRuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNpQjs7QUFFdEMsa0VBQXlCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2p1c3QtdG9kby1pdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanVzdC10b2RvLWl0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vanVzdC10b2RvLWl0Ly4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL2p1c3QtdG9kby1pdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2p1c3QtdG9kby1pdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vanVzdC10b2RvLWl0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vanVzdC10b2RvLWl0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vanVzdC10b2RvLWl0Ly4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vanVzdC10b2RvLWl0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vanVzdC10b2RvLWl0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vanVzdC10b2RvLWl0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vanVzdC10b2RvLWl0Ly4vc3JjL3VzZXIuanMiLCJ3ZWJwYWNrOi8vanVzdC10b2RvLWl0Ly4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vanVzdC10b2RvLWl0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2p1c3QtdG9kby1pdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2p1c3QtdG9kby1pdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2p1c3QtdG9kby1pdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2p1c3QtdG9kby1pdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vanVzdC10b2RvLWl0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjQkVGMjY0O1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNGOEZGRTg7XFxuICAtLWdyZXktdGV4dC1jb2xvcjogIzlhOWE5YTtcXG4gIC0tbGlnaHQtZ3JleTogI2NkY2RjZDtcXG4gIC0tY2FyZC1jb2xvcjogI0ZGRkZGRjtcXG4gIC0tcG9pbnRlcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ3NhbnMtc2VyaWYnO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmJvZHksIGgxLCBoMiwgaDMsIHAsIHVsLCBsaSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uZm9udC1sYXJnZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5mb250LW1lZGl1bSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmZvbnQtcmVndWxhciB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5mb250LXNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxufVxcblxcbi5wcmltYXJ5LWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uc2Vjb25kYXJ5LWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5ncmV5LWZvbnQge1xcbiAgY29sb3I6IHZhcigtLWdyZXktdGV4dC1jb2xvcik7XFxufVxcblxcbi5saWdodC1ncmV5IHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG59XFxuXFxuLnAtMjQge1xcbiAgcGFkZGluZzogMjRweDtcXG59XFxuXFxuLnAtNDgge1xcbiAgcGFkZGluZzogNDhweDtcXG59XFxuXFxuLm1iLTgge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4ubWItMTYge1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLm1iLTMyIHtcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxufVxcblxcbi5tYi00OCB7XFxuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xcbn1cXG5cXG4uZmxleC1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jY29udGFpbmVye1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNzaWRlYmFyIGgxIHtcXG4gIG1hcmdpbi1ib3R0b206IDg0cHg7XFxufVxcblxcbi5uYXYtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Byb2plY3RzIGxpIHtcXG4gIGN1cnNvcjogdmFyKC0tcG9pbnRlcik7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBtYXJnaW4tbGVmdDogMjRweDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuI3Byb2plY3RzIGxpOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jc2lkZWJhciBoMiB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jc2lkZWJhciBoMjpudGgtY2hpbGQobisxKSB7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4jc2lkZWJhciBoMjpudGgtb2YtdHlwZSgyKSB7XFxuICBtYXJnaW4tdG9wOiAzMnB4O1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jdG9kby1saXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tY29sdW1uczogMzUwcHg7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4udG9kby1jYXJkIHtcXG4gIHBhZGRpbmc6IDI0cHggMjRweCAzMnB4IDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtY29sb3IpO1xcbn1cXG5cXG4uc3RhdHVzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyNHB4O1xcbn1cXG5cXG5cXG4udG9kby1jYXJkIGgzIHtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5jaGVja2xpc3QtY2lyY2xlIHtcXG4gIHdpZHRoOiAxOHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBjdXJzb3I6IHZhcigtLXBvaW50ZXIpO1xcbn1cXG5cXG4uY2hlY2tsaXN0LWRpdmlkZSB7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG4uY2hlY2tsaXN0LWRpdmlkZSBociB7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbn1cXG5cXG4uYWRkLXRhc2stYnV0dG9uIHtcXG4gIGNvbG9yOiB2YXIoLS1ncmV5LXRleHQtY29sb3IpO1xcbiAgY3Vyc29yOiB2YXIoLS1wb2ludGVyKTtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxufVxcblxcbi5ub3Rlcy1oZWFkaW5nIHtcXG4gIG1hcmdpbi10b3A6IDMycHg7XFxufVxcblxcbi5hZGQtdG9kby1idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyMjksIDIyOSk7XFxuICB3aWR0aDogMTAzcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGN1cnNvcjogdmFyKC0tcG9pbnRlcik7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbn1cXG5cXG4jdG9kby1mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA2MCU7XFxufVxcblxcbiN0b2RvLWZvcm0tY29udGFpbmVyIGlucHV0LCBcXG4jdG9kby1mb3JtLWNvbnRhaW5lciB0ZXh0YXJlYSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG4jdG9kby1mb3JtLWNvbnRhaW5lciBidXR0b24ge1xcbiAgd2lkdGg6IDQwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbiNwcm9qZWN0LW5hbWUtZm9ybSB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1jb250YWluZXIgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDBweCA4cHg7XFxuICBoZWlnaHQ6IDM3cHhcXG59XFxuXFxuLmNpcmNsZS1maWxsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi50YXNrLWRvbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQ0FBbUM7RUFDbkMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7O0FBR0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1QsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICNCRUYyNjQ7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogI0Y4RkZFODtcXG4gIC0tZ3JleS10ZXh0LWNvbG9yOiAjOWE5YTlhO1xcbiAgLS1saWdodC1ncmV5OiAjY2RjZGNkO1xcbiAgLS1jYXJkLWNvbG9yOiAjRkZGRkZGO1xcbiAgLS1wb2ludGVyOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnc2Fucy1zZXJpZic7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuYm9keSwgaDEsIGgyLCBoMywgcCwgdWwsIGxpIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5mb250LWxhcmdlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmZvbnQtbWVkaXVtIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZm9udC1yZWd1bGFyIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmZvbnQtc21hbGwge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG59XFxuXFxuLnByaW1hcnktY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5zZWNvbmRhcnktY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmdyZXktZm9udCB7XFxuICBjb2xvcjogdmFyKC0tZ3JleS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmxpZ2h0LWdyZXkge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbn1cXG5cXG4ucC0yNCB7XFxuICBwYWRkaW5nOiAyNHB4O1xcbn1cXG5cXG4ucC00OCB7XFxuICBwYWRkaW5nOiA0OHB4O1xcbn1cXG5cXG4ubWItOCB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5tYi0xNiB7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4ubWItMzIge1xcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcXG59XFxuXFxuLm1iLTQ4IHtcXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XFxufVxcblxcbi5mbGV4LWNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNjb250YWluZXJ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI3NpZGViYXIgaDEge1xcbiAgbWFyZ2luLWJvdHRvbTogODRweDtcXG59XFxuXFxuLm5hdi1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jcHJvamVjdHMgbGkge1xcbiAgY3Vyc29yOiB2YXIoLS1wb2ludGVyKTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdHMgbGk6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiNzaWRlYmFyIGgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNzaWRlYmFyIGgyOm50aC1jaGlsZChuKzEpIHtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbiNzaWRlYmFyIGgyOm50aC1vZi10eXBlKDIpIHtcXG4gIG1hcmdpbi10b3A6IDMycHg7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG4ge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiN0b2RvLWxpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1jb2x1bW5zOiAzNTBweDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBnYXA6IDE2cHg7XFxufVxcblxcbi50b2RvLWNhcmQge1xcbiAgcGFkZGluZzogMjRweCAyNHB4IDMycHggMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1jb2xvcik7XFxufVxcblxcbi5zdGF0dXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDI0cHg7XFxufVxcblxcblxcbi50b2RvLWNhcmQgaDMge1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLmNoZWNrbGlzdC1jaXJjbGUge1xcbiAgd2lkdGg6IDE4cHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGN1cnNvcjogdmFyKC0tcG9pbnRlcik7XFxufVxcblxcbi5jaGVja2xpc3QtZGl2aWRlIHtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcblxcbi5jaGVja2xpc3QtZGl2aWRlIGhyIHtcXG4gIGhlaWdodDogMXB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtZ3JleSk7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgY29sb3I6IHZhcigtLWdyZXktdGV4dC1jb2xvcik7XFxuICBjdXJzb3I6IHZhcigtLXBvaW50ZXIpO1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4udGFzay1mb3JtIHtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG59XFxuXFxuLm5vdGVzLWhlYWRpbmcge1xcbiAgbWFyZ2luLXRvcDogMzJweDtcXG59XFxuXFxuLmFkZC10b2RvLWJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDIyOSwgMjI5KTtcXG4gIHdpZHRoOiAxMDNweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgY3Vyc29yOiB2YXIoLS1wb2ludGVyKTtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcblxcbiN0b2RvLWZvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuXFxuI3RvZG8tZm9ybS1jb250YWluZXIgaW5wdXQsIFxcbiN0b2RvLWZvcm0tY29udGFpbmVyIHRleHRhcmVhIHtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbiN0b2RvLWZvcm0tY29udGFpbmVyIGJ1dHRvbiB7XFxuICB3aWR0aDogNDAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTZweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuI3Byb2plY3QtbmFtZS1mb3JtIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLWNvbnRhaW5lciBidXR0b24ge1xcbiAgcGFkZGluZzogMHB4IDhweDtcXG4gIGhlaWdodDogMzdweFxcbn1cXG5cXG4uY2lyY2xlLWZpbGxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnRhc2stZG9uZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCI7XG5pbXBvcnQgcHJvamVjdEZhY3RvcnkgZnJvbSAnLi9wcm9qZWN0J1xuaW1wb3J0IHRvZG9GYWN0b3J5IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB0YXNrRmFjdG9yeSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgdmlldyBmcm9tICcuL3ZpZXcnO1xuXG5jb25zdCBjb250cm9sbGVyID0gKCgpID0+IHtcbiAgbGV0IGN1cnJlbnRQcm9qZWN0SWQ7XG4gIGxldCBwcm9qZWN0SWRDb3VudGVyID0gMDtcblxuICBjb25zdCBpbmNyZW1lbnRQcm9qZWN0SWRDb3VudGVyID0gKCkgPT4ge1xuICAgIHByb2plY3RJZENvdW50ZXIgKz0gMTtcbiAgfVxuXG4gIGNvbnN0IGluaXRpYWxpemVVc2VyID0gKCkgPT57XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSAnWW91ciBQcm9qZWN0JztcbiAgICBjb25zdCBwcm9qZWN0RGVzYyA9ICdUaGlzIGlzIHlvdXIgcHJvamVjdC4gVGhpcyB0ZXh0IGJsdXJiIGlzIHlvdXIgcHJvamVjdCBkZXNjcmlwdGlvbiwgcHV0IGFueXRoaW5nIGhlcmUuJztcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBwcm9qZWN0SWRDb3VudGVyO1xuICAgIGN1cnJlbnRQcm9qZWN0SWQgPSBwcm9qZWN0SWQ7XG4gICAgaW5jcmVtZW50UHJvamVjdElkQ291bnRlcigpO1xuICAgIGNvbnN0IGZpcnN0UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHByb2plY3ROYW1lLCBwcm9qZWN0RGVzYywgcHJvamVjdElkKTtcbiAgICBmaXJzdFByb2plY3QuYmluZE9uVG9kb0xpc3RDaGFuZ2VkKG9uVG9kb0xpc3RDaGFuZ2VkKTtcbiAgICBjb25zdCB0b2RvVGl0bGUgPSAnVG8gZG8nO1xuICAgIGNvbnN0IHRvZG9EZXNjID0gJ1RoaXMgaXMgYSB0b2RvLiBBZGQgY2hlY2tsaXN0IHRhc2tzLCBkdWUgZGF0ZXMsIGFuZCBwcmlvcml0aWVzIGhlcmUuJztcbiAgICBjb25zdCBkdWVEYXRlID0gJ1R1ZXMsIDEwOiAzMCBhbSc7XG4gICAgY29uc3QgcHJpb3JpdHkgPSAnVXJnZW50JztcbiAgICBjb25zdCBub3RlcyA9ICdBZGQgbm90ZXMgYW5kIGFueSBhZGRpdGlvbmFsIHRob3VnaHRzIGhlcmUnO1xuICAgIGNvbnN0IGZpcnN0VG9kbyA9IHRvZG9GYWN0b3J5KHRvZG9UaXRsZSwgdG9kb0Rlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcyk7XG4gICAgY29uc3QgdGFza05hbWUgPSAnTWFrZSB5b3VyIGZpcnN0IHRhc2snO1xuICAgIGNvbnN0IGZpcnN0VGFzayA9IHRhc2tGYWN0b3J5KHRhc2tOYW1lKTtcbiAgICBmaXJzdFRvZG8uYWRkVGFzayhmaXJzdFRhc2spO1xuICAgIGZpcnN0UHJvamVjdC5pbml0aWFsQWRkVG9kbyhmaXJzdFRvZG8pO1xuICAgIHVzZXIuYWRkUHJvamVjdChmaXJzdFByb2plY3QpO1xuICB9XG5cbiAgY29uc3QgaW5pdGlhbGl6ZVNpZGViYXJWaWV3ID0gKCkgPT4ge1xuICAgIHVzZXIuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgdmlldy5zZXRQcm9qZWN0TGlzdEl0ZW0ocHJvamVjdC5nZXROYW1lKCksIHByb2plY3QuZ2V0SWQoKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdGlhbGl6ZVByb2plY3RWaWV3ID0gKCkgPT4ge1xuICAgIGlmICh1c2VyLmdldFByb2plY3RzKCkubGVuZ3RoICE9PSAwKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gdXNlci5nZXRQcm9qZWN0cygpWzBdO1xuICAgICAgdmlldy5zZXRDdXJyZW50UHJvamVjdElkKHByb2plY3QuZ2V0SWQoKSk7XG4gICAgICB2aWV3LnNldFByb2plY3RUaXRsZShwcm9qZWN0LmdldE5hbWUoKSk7XG4gICAgICB2aWV3LnNldFByb2plY3REZXNjcmlwdGlvbihwcm9qZWN0LmdldERlc2NyaXB0aW9uKCkpO1xuICAgICAgdmlldy5zZXRBZGRUb2RvQnV0dG9uKCk7XG4gICAgICBhZGRUb2Rvcyhwcm9qZWN0LmdldFRvZG9MaXN0KCkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsb2FkUHJvamVjdCA9IChpZCkgPT4ge1xuICAgIHZpZXcucmVzZXRQcm9qZWN0VmlldygpO1xuICAgIGNvbnN0IHByb2plY3RzID0gdXNlci5nZXRQcm9qZWN0cygpO1xuICAgIGNvbnN0IHByb2plY3RUYXJnZXQgPSBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5nZXRJZCgpID09PSBpZCk7XG4gICAgY3VycmVudFByb2plY3RJZCA9IGlkO1xuICAgIHZpZXcuc2V0Q3VycmVudFByb2plY3RJZChwcm9qZWN0VGFyZ2V0LmdldElkKCkpO1xuICAgIHZpZXcuc2V0UHJvamVjdFRpdGxlKHByb2plY3RUYXJnZXQuZ2V0TmFtZSgpKTtcbiAgICB2aWV3LnNldFByb2plY3REZXNjcmlwdGlvbihwcm9qZWN0VGFyZ2V0LmdldERlc2NyaXB0aW9uKCkpO1xuICAgIHZpZXcuc2V0QWRkVG9kb0J1dHRvbigpO1xuICAgIC8vdmlldy5iaW5kQWRkVG9kbyhhZGRTdWJtaXRUb2RvRXZlbnQpO1xuICAgIGFkZFRvZG9zKHByb2plY3RUYXJnZXQuZ2V0VG9kb0xpc3QoKSk7XG4gIH1cblxuICBjb25zdCBpbml0aWFsaXplVmlldyA9ICgpID0+IHtcbiAgICBpbml0aWFsaXplU2lkZWJhclZpZXcoKTtcbiAgICBpbml0aWFsaXplUHJvamVjdFZpZXcoKTtcbiAgfTtcblxuICBjb25zdCBhZGRUb2RvcyA9IChsaXN0KSA9PiB7XG4gICAgbGlzdC5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgY29uc3QgdG9kb09iaiA9IHtcbiAgICAgICAgdGl0bGU6IHRvZG8uZ2V0VGl0bGUoKSxcbiAgICAgICAgZHVlOiB0b2RvLmdldER1ZURhdGUoKSxcbiAgICAgICAgcHJpb3JpdHk6IHRvZG8uZ2V0UHJpb3JpdHkoKSxcbiAgICAgICAgZGVzYzogdG9kby5nZXREZXNjcmlwdGlvbigpLFxuICAgICAgICB0YXNrczogdG9kby5nZXRDaGVja0xpc3QoKS5tYXAodGFzayA9PiB0YXNrLmdldE5hbWUoKSksXG4gICAgICAgIG5vdGVzOiB0b2RvLmdldE5vdGVzKClcbiAgICAgIH07XG4gICAgICB2aWV3LmFkZFRvZG9DYXJkKHRvZG9PYmopO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGFkZFN1Ym1pdFByb2plY3RFdmVudCA9ICgpID0+IHtcbiAgICB2aWV3LmJpbmRTdWJtaXRQcm9qZWN0KGhhbmRsZVN1Ym1pdFByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFN1Ym1pdFRvZG9FdmVudCA9ICgpID0+IHtcbiAgICB2aWV3LmJpbmRTdWJtaXRUb2RvKGhhbmRsZVN1Ym1pdFRvZG8pO1xuICB9XG5cbiAgY29uc3Qgb25Ub2RvTGlzdENoYW5nZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSB1c2VyLmdldFByb2plY3RCeUlkKGN1cnJlbnRQcm9qZWN0SWQpO1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gY3VycmVudFByb2plY3QuZ2V0VG9kb0xpc3QoKTtcbiAgICBjb25zdCBhZGRlZFRvZG8gPSB0b2RvTGlzdFt0b2RvTGlzdC5sZW5ndGgtMV07XG4gICAgY29uc3QgdG9kb09iaiA9IHtcbiAgICAgIHRpdGxlOiBhZGRlZFRvZG8uZ2V0VGl0bGUoKSxcbiAgICAgIGR1ZTogYWRkZWRUb2RvLmdldER1ZURhdGUoKSxcbiAgICAgIHByaW9yaXR5OiBhZGRlZFRvZG8uZ2V0UHJpb3JpdHkoKSxcbiAgICAgIGRlc2M6IGFkZGVkVG9kby5nZXREZXNjcmlwdGlvbigpLFxuICAgICAgdGFza3M6IGFkZGVkVG9kby5nZXRDaGVja0xpc3QoKS5tYXAodGFzayA9PiB0YXNrLmdldE5hbWUoKSksXG4gICAgICBub3RlczogYWRkZWRUb2RvLmdldE5vdGVzKClcbiAgICB9XG4gICAgdmlldy5hZGRUb2RvQ2FyZCh0b2RvT2JqKTtcbiAgfVxuXG4gIGNvbnN0IG9uUHJvamVjdExpc3RDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHMgPSB1c2VyLmdldFByb2plY3RzKCk7XG4gICAgY29uc3QgcHJvamVjdFRhcmdldCA9IHByb2plY3RzW3Byb2plY3RzLmxlbmd0aC0xXTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3RUYXJnZXQuZ2V0TmFtZSgpO1xuICAgIGNvbnN0IHByb2plY3RJZCA9IHByb2plY3RUYXJnZXQuZ2V0SWQoKTtcbiAgICB2aWV3LnNldFByb2plY3RMaXN0SXRlbShwcm9qZWN0TmFtZSwgcHJvamVjdElkKTtcbiAgfVxuXG4gIGNvbnN0IG9uUHJvamVjdFN3aXRjaCA9IChpZCkgPT4ge1xuICAgIGxvYWRQcm9qZWN0KGlkKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXRUb2RvID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHVzZXIuZ2V0UHJvamVjdEJ5SWQodG9kby5wcm9qZWN0SWQpO1xuICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvRmFjdG9yeShcbiAgICAgIHRvZG8udGl0bGUsXG4gICAgICB0b2RvLmRlc2MsXG4gICAgICB0b2RvLmR1ZSxcbiAgICAgIHRvZG8ucHJpb3JpdHksXG4gICAgICB0b2RvLm5vdGVzXG4gICAgKTtcbiAgICBjdXJyZW50UHJvamVjdC5hZGRUb2RvKG5ld1RvZG8pO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0UHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgZGVzYyA9ICdUaGlzIGlzIHlvdXIgcHJvamVjdC4gVGhpcyB0ZXh0IGJsdXJiIGlzIHlvdXIgcHJvamVjdCBkZXNjcmlwdGlvbiwgcHV0IGFueXRoaW5nIGhlcmUuJztcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkobmFtZSwgZGVzYywgcHJvamVjdElkQ291bnRlcik7XG4gICAgbmV3UHJvamVjdC5iaW5kT25Ub2RvTGlzdENoYW5nZWQob25Ub2RvTGlzdENoYW5nZWQpO1xuICAgIHVzZXIuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICBpbmNyZW1lbnRQcm9qZWN0SWRDb3VudGVyKCk7XG4gIH07ICBcbiAgXG4gIGluaXRpYWxpemVVc2VyKCk7XG4gIHZpZXcuYmluZEFkZFRvZG8oYWRkU3VibWl0VG9kb0V2ZW50KTtcbiAgdmlldy5iaW5kQWRkUHJvamVjdChhZGRTdWJtaXRQcm9qZWN0RXZlbnQpO1xuICB1c2VyLmJpbmRQcm9qZWN0TGlzdENoYW5nZWQob25Qcm9qZWN0TGlzdENoYW5nZSk7XG4gIHZpZXcuYmluZENoYW5nZVByb2plY3Qob25Qcm9qZWN0U3dpdGNoKTtcblxuICByZXR1cm4geyBpbml0aWFsaXplVmlldyB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbGxlcjsiLCJjb25zdCBwcm9qZWN0RmFjdG9yeSA9IChuYW1lLCBkZXNjcmlwdGlvbiwgaWQpID0+IHtcbiAgY29uc3QgdG9kb0xpc3QgPSBbXTtcbiAgbGV0IG9uVG9kb0xpc3RDaGFuZ2VkID0gKCkgPT4ge307XG5cbiAgY29uc3QgY29weVByb2plY3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RGYWN0b3J5KG5hbWUsIGRlc2NyaXB0aW9uKTtcbiAgfTtcblxuICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgIHJldHVybiBuYW1lO1xuICB9O1xuXG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgfTtcblxuICBjb25zdCBnZXRUb2RvTGlzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gdG9kb0xpc3Q7XG4gIH07XG5cbiAgY29uc3QgZWRpdE5hbWUgPSAobmV3TmFtZSkgPT4ge1xuICAgIG5hbWUgPSBuZXdOYW1lO1xuICB9O1xuXG4gIGNvbnN0IGVkaXREZXNjcmlwdGlvbiA9IChuZXdEZXNjKSA9PiB7XG4gICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjO1xuICB9O1xuXG4gIGNvbnN0IGluaXRpYWxBZGRUb2RvID0gKHRvZG8pID0+IHtcbiAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xuICAgIHRvZG9MaXN0LnB1c2godG9kbyk7XG4gICAgb25Ub2RvTGlzdENoYW5nZWQoKTtcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdG9kb0xpc3QuaW5kZXhPZih0b2RvKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdG9kb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0SWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGlkO1xuICB9XG5cbiAgY29uc3Qgc2V0SWQgPSAobmV3SWQpID0+IHtcbiAgICBpZCA9IG5ld0lkO1xuICB9XG5cbiAgY29uc3QgYmluZE9uVG9kb0xpc3RDaGFuZ2VkID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgb25Ub2RvTGlzdENoYW5nZWQgPSBjYWxsYmFjaztcbiAgfTtcblxuICByZXR1cm4geyBcbiAgICBnZXROYW1lLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIGdldFRvZG9MaXN0LFxuICAgIGNvcHlQcm9qZWN0LFxuICAgIGVkaXROYW1lLFxuICAgIGVkaXREZXNjcmlwdGlvbixcbiAgICBpbml0aWFsQWRkVG9kbyxcbiAgICBhZGRUb2RvLFxuICAgIHJlbW92ZVRvZG8sXG4gICAgZ2V0SWQsXG4gICAgc2V0SWQsXG4gICAgYmluZE9uVG9kb0xpc3RDaGFuZ2VkXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0RmFjdG9yeTsiLCJjb25zdCB0YXNrRmFjdG9yeSA9IChuYW1lKSA9PiB7XG4gIGxldCBpc0NvbXBsZXRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH07XG4gIGNvbnN0IGNoZWNrQ29tcGxldGVkID0gKCkgPT4ge1xuICAgIHJldHVybiBpc0NvbXBsZXRlZDtcbiAgfTtcbiAgY29uc3QgZWRpdE5hbWUgPSAobmV3TmFtZSkgPT4ge1xuICAgIG5hbWUgPSBuZXdOYW1lO1xuICB9O1xuICBjb25zdCB0b2dnbGVDb21wbGV0ZSA9ICgpID0+IHtcbiAgICBpc0NvbXBsZXRlZCA9ICFpc0NvbXBsZXRlZDtcbiAgfTtcblxuICByZXR1cm4geyBnZXROYW1lLCBjaGVja0NvbXBsZXRlZCwgZWRpdE5hbWUsIHRvZ2dsZUNvbXBsZXRlfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tGYWN0b3J5OyIsImNvbnN0IHRvZG9GYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSA9PiB7XG4gIGNvbnN0IGNoZWNrTGlzdCA9IFtdO1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgIHJldHVybiB0aXRsZTtcbiAgfTtcbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICB9O1xuICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBkdWVEYXRlO1xuICB9O1xuICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJpb3JpdHk7XG4gIH07XG4gIGNvbnN0IGdldE5vdGVzID0gKCkgPT4ge1xuICAgIHJldHVybiBub3RlcztcbiAgfTtcbiAgY29uc3QgZ2V0Q2hlY2tMaXN0ID0gKCkgPT4ge1xuICAgIHJldHVybiBjaGVja0xpc3Q7XG4gIH1cbiAgY29uc3QgZWRpdFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4gICAgdGl0bGUgPSBuZXdUaXRsZTtcbiAgfTtcbiAgY29uc3QgZWRpdERlc2NyaXB0aW9uID0gKG5ld0Rlc2MpID0+IHtcbiAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2M7XG4gIH07XG4gIGNvbnN0IGVkaXREdWVEYXRlID0gKG5ld0R1ZURhdGUpID0+IHtcbiAgICBkdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgfTtcbiAgY29uc3QgZWRpdE5vdGVzID0gKG5ld05vdGVzKSA9PiB7XG4gICAgbm90ZXMgPSBuZXdOb3RlcztcbiAgfTtcbiAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgY2hlY2tMaXN0LnB1c2godGFzayk7XG4gIH07XG4gIGNvbnN0IHJlbW92ZVRhc2sgPSAodGFzaykgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gY2hlY2tMaXN0LmluZGV4T2YodGFzayk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGNoZWNrTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfTtcbiAgXG4gIHJldHVybiB7XG4gICAgZ2V0VGl0bGUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0RHVlRGF0ZSxcbiAgICBnZXRQcmlvcml0eSxcbiAgICBnZXROb3RlcyxcbiAgICBnZXRDaGVja0xpc3QsXG4gICAgZWRpdFRpdGxlLFxuICAgIGVkaXREZXNjcmlwdGlvbixcbiAgICBlZGl0RHVlRGF0ZSxcbiAgICBlZGl0Tm90ZXMsXG4gICAgYWRkVGFzayxcbiAgICByZW1vdmVUYXNrXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9GYWN0b3J5OyIsImltcG9ydCB0b2RvRmFjdG9yeSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgdGFza0ZhY3RvcnkgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHByb2plY3RGYWN0b3J5IGZyb20gXCIuL3Byb2plY3RcIjtcblxuY29uc3QgdXNlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gW107XG4gIGxldCBvblByb2plY3RzTGlzdENoYW5nZWQgPSAoKSA9PiB7fTtcblxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdHM7XG4gIH1cbiAgY29uc3QgZ2V0UHJvamVjdEJ5SWQgPSAoaWQpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuZ2V0SWQoKSA9PT0gaWQpO1xuICB9O1xuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuXG4gICAgb25Qcm9qZWN0c0xpc3RDaGFuZ2VkKCk7XG4gIH07XG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYmluZFByb2plY3RMaXN0Q2hhbmdlZCA9IChjYWxsYmFjaykgPT4ge1xuICAgIG9uUHJvamVjdHNMaXN0Q2hhbmdlZCA9IGNhbGxiYWNrO1xuICB9XG5cbiAgcmV0dXJuIHsgZ2V0UHJvamVjdHMsIGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGJpbmRQcm9qZWN0TGlzdENoYW5nZWQsIGdldFByb2plY3RCeUlkIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyOyIsImNvbnN0IHZpZXcgPSAoKCkgPT4ge1xuICBsZXQgY3VycmVudFByb2plY3RJZDtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyJyk7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJyk7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QtYnRuJyk7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1jb250YWluZXInKTtcbiAgbGV0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tbGlzdCcpO1xuICBjb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXR0aW5ncycpO1xuICBsZXQgc2hvd1Byb2plY3RGb3JtRXZlbnQgPSAoKSA9PiB7fTtcbiAgbGV0IHNldFRvZG9Gb3JtRXZlbnQgPSAoKSA9PiB7fTtcbiAgbGV0IHNldFByb2plY3RTd2l0Y2hFdmVudCA9ICgpID0+IHt9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZURpdigpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7YXJndW1lbnRzW2ldfWApO1xuICAgIH1cbiAgICByZXR1cm4gZGl2O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUlkRGl2KGlkKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlkID0gaWQ7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGAke2FyZ3VtZW50c1tpXX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpdjtcbiAgfTtcbiAgXG4gIGZ1bmN0aW9uIGNyZWF0ZUlucHV0Rm9ybShpZCwgcGxhY2Vob2xkZXIsIGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpZiAoaWQgIT09ICdub25lJykge1xuICAgICAgaW5wdXQuaWQgPSBpZDtcbiAgICB9XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICBmb3IgKGxldCBpID0gMzsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChgJHthcmd1bWVudHNbaV19YCk7XG4gICAgfVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVRleHRBcmVhRm9ybShpZCwgcGxhY2Vob2xkZXIsIGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBpbnB1dC5pZCA9IGlkO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgZm9yIChsZXQgaSA9IDM7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoYCR7YXJndW1lbnRzW2ldfWApO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHJldHVybiBpbnB1dDtcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVCdXR0b25Gb3JtKGVsZW1lbnQsIGlkLCB0ZXh0LCBjb250YWluZXIpIHtcbiAgICBsZXQgYnRuO1xuICAgIGlmIChlbGVtZW50ID09PSAnZGl2Jykge1xuICAgICAgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50ID09PSAnYnV0dG9uJykge1xuICAgICAgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgfVxuICAgIGJ0bi5pZCA9IGlkO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgZm9yIChsZXQgaSA9IDQ7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKGAke2FyZ3VtZW50c1tpXX1gKTtcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgcmV0dXJuIGJ0bjtcbiAgfTtcblxuICAvKipcbiAgICogSWYgaW5zZXJ0UG9zaXRpb24gaXMgJ2JlZm9yZScsIGFyZ3VtZW50WzRdIHNob3VsZCBiZSB0aGVcbiAgICogbm9kZSB0byBpbnNlcnQgYmVmb3JlLlxuICAgKiBJZiBpbnNlcnRQb3NpdGlvbiBpcyAnYWZ0ZXInIGFuZCB0aGVyZSBhcmUgY2xhc3NlcyB0byBhZGQsXG4gICAqIGFyZ3VtZW50WzRdIHNob3VsZCBiZSBmaWxsZWQgd2l0aCBhbnkgdmFsdWUuXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVUZXh0KGNvbnRhaW5lciwgaW5zZXJ0UG9zaXRpb24sIGVsZW1lbnQsIHRleHQpIHtcbiAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7ZWxlbWVudH1gKTtcbiAgICB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgZm9yIChsZXQgaSA9IDU7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRleHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7YXJndW1lbnRzW2ldfWApO1xuICAgIH1cbiAgICBpZiAoaW5zZXJ0UG9zaXRpb24gPT09ICdiZWZvcmUnKSB7XG4gICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKHRleHRFbGVtZW50LCBhcmd1bWVudHNbNF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dEVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gdGV4dEVsZW1lbnQ7XG4gIH1cblxuICBjb25zdCBzZXRDdXJyZW50UHJvamVjdElkID0gKGlkKSA9PiB7XG4gICAgY3VycmVudFByb2plY3RJZCA9IGlkO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0UHJvamVjdFZpZXcgPSAoKSA9PiB7XG4gICAgbGV0IGVsZW1lbnQgPSBwcm9qZWN0Q29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgIHByb2plY3RDb250YWluZXIucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICBlbGVtZW50ID0gcHJvamVjdENvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkO1xuICAgIH1cbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUlkRGl2KCd0b2RvLWxpc3QnKSk7XG4gICAgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1saXN0Jyk7XG4gIH07XG5cbiAgY29uc3Qgc2V0UHJvamVjdExpc3RJdGVtID0gKHByb2plY3QsIHByb2plY3RJZCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgcHJvamVjdExpc3RJdGVtLnNldEF0dHJpYnV0ZSgncHJvamVjdC1pZCcsIHByb2plY3RJZCk7XG4gICAgcHJvamVjdExpc3RJdGVtLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICBwcm9qZWN0cy5pbnNlcnRCZWZvcmUocHJvamVjdExpc3RJdGVtLCBhZGRQcm9qZWN0QnV0dG9uKTtcbiAgICBwcm9qZWN0TGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAocHJvamVjdElkICE9PSBjdXJyZW50UHJvamVjdElkKSB7XG4gICAgICAgIHNldFByb2plY3RTd2l0Y2hFdmVudChwcm9qZWN0SWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNldFByb2plY3RUaXRsZSA9ICh0aXRsZSkgPT4ge1xuICAgIGNyZWF0ZVRleHQocHJvamVjdENvbnRhaW5lciwgJ2JlZm9yZScsICdoMicsIHRpdGxlLCB0b2RvTGlzdCwgJ2ZvbnQtbWVkaXVtJywgJ21iLTE2Jyk7XG4gIH07XG5cbiAgY29uc3Qgc2V0UHJvamVjdERlc2NyaXB0aW9uID0gKGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgY3JlYXRlVGV4dChwcm9qZWN0Q29udGFpbmVyLCAnYmVmb3JlJywgJ3AnLCBkZXNjcmlwdGlvbiwgdG9kb0xpc3QsICdmb250LXJlZ3VsYXInLCAnbWItNDgnKTtcbiAgfTtcblxuICBjb25zdCBzZXRUb2RvVGl0bGUgPSAodGl0bGUsIHRvZG9DYXJkKSA9PiB7XG4gICAgY3JlYXRlVGV4dCh0b2RvQ2FyZCwgJ2FmdGVyJywgJ2gyJywgdGl0bGUsICdub25lJywgJ2ZvbnQtbWVkaXVtJywgJ21iLTMyJyk7XG4gIH07XG5cbiAgY29uc3Qgc2V0VG9kb1N0YXR1cyA9IChkdWVEYXRlLCBwcmlvcml0eSwgdG9kb0NhcmQpID0+IHtcbiAgICBjb25zdCBzdGF0dXMgPSBjcmVhdGVEaXYoJ21iLTE2JywgJ3N0YXR1cy1jb250YWluZXInKVxuICAgIGNyZWF0ZVRleHQoc3RhdHVzLCAnYWZ0ZXInLCAncCcsIGBEdWU6ICR7ZHVlRGF0ZX1gLCAnbm9uZScsICdmb250LXNtYWxsJyk7XG4gICAgY3JlYXRlVGV4dChzdGF0dXMsICdhZnRlcicsICdwJywgcHJpb3JpdHksICdub25lJywgJ2ZvbnQtc21hbGwnKTtcbiAgICB0b2RvQ2FyZC5hcHBlbmRDaGlsZChzdGF0dXMpO1xuICB9O1xuXG4gIGNvbnN0IHNldFRvZG9EZXNjcmlwdGlvbiA9IChkZXNjLCB0b2RvQ2FyZCkgPT4ge1xuICAgIGNyZWF0ZVRleHQodG9kb0NhcmQsICdhZnRlcicsICdwJywgZGVzYywgJ25vbmUnLCAnbWItMzInKTtcbiAgfTtcblxuICBjb25zdCBzZXRUYXNrID0gKHRhc2ssIGNvbnRhaW5lcikgPT4ge1xuICAgIGNvbnN0IHRhc2tOYW1lID0gY3JlYXRlVGV4dChjb250YWluZXIsICdhZnRlcicsICdwJywgdGFzayk7XG4gICAgcmV0dXJuIHRhc2tOYW1lO1xuICB9O1xuXG4gIGNvbnN0IHNldFRhc2tDaGVja0NpcmNsZSA9IChjb250YWluZXIsIHRhc2spID0+IHtcbiAgICBjb25zdCBjaGVja2xpc3RDaXJjbGUgPSBjcmVhdGVEaXYoJ2NoZWNrbGlzdC1jaXJjbGUnKTtcbiAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGNoZWNrbGlzdENpcmNsZSwgdGFzayk7XG4gICAgY2hlY2tsaXN0Q2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY2hlY2tsaXN0Q2lyY2xlLmNsYXNzTGlzdC50b2dnbGUoJ2NpcmNsZS1maWxsZWQnKTtcbiAgICAgIHRhc2suY2xhc3NMaXN0LnRvZ2dsZSgndGFzay1kb25lJyk7XG5cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzZXRUb2RvVGFza3MgPSAodGFza3MsIHRvZG9DYXJkKSA9PiB7XG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBjcmVhdGVEaXYoJ3Rhc2stY29udGFpbmVyJylcbiAgICAgIGNvbnN0IHRhc2tOYW1lID0gc2V0VGFzayh0YXNrLCB0YXNrQ29udGFpbmVyKTtcbiAgICAgIHNldFRhc2tDaGVja0NpcmNsZSh0YXNrQ29udGFpbmVyLCB0YXNrTmFtZSk7XG4gICAgICB0b2RvQ2FyZC5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgICAgIGNvbnN0IGRpdmlkZXIgPSBjcmVhdGVEaXYoJ2NoZWNrbGlzdC1kaXZpZGUnKTtcbiAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICAgIGRpdmlkZXIuYXBwZW5kQ2hpbGQoaHIpO1xuICAgICAgdG9kb0NhcmQuYXBwZW5kQ2hpbGQoZGl2aWRlcik7XG4gICAgfSlcbiAgfTtcblxuICBjb25zdCBzZXRBZGRUYXNrQnV0dG9uID0gKHRvZG9DYXJkKSA9PiB7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGNyZWF0ZUJ1dHRvbkZvcm0oJ2RpdicsICdub25lJywgJ0FkZCBUYXNrJywgdG9kb0NhcmQsICdwJywgJ2FkZC10YXNrLWJ1dHRvbicpO1xuICAgIGNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gY3JlYXRlRGl2KCdoaWRkZW4nKTtcbiAgICBjb25zdCB0YXNrRm9ybSA9IGNyZWF0ZUlucHV0Rm9ybSgnbm9uZScsICdFbnRlciB0YXNrIG5hbWUnLCB0YXNrRm9ybUNvbnRhaW5lciwgJ3Rhc2stZm9ybScpO1xuICAgIGNvbnN0IHRhc2tTdWJtaXRCdXR0b24gPSBjcmVhdGVCdXR0b25Gb3JtKCdidXR0b24nLCAnbm9uZScsICdTVUJNSVQnLCB0YXNrRm9ybUNvbnRhaW5lcik7XG4gICAgdG9kb0NhcmQuYXBwZW5kQ2hpbGQodGFza0Zvcm1Db250YWluZXIpO1xuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0YXNrRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KTtcbiAgICB0YXNrU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBzZXROb3RlcyA9IChub3RlcywgdG9kb0NhcmQpID0+IHtcbiAgICBjcmVhdGVUZXh0KHRvZG9DYXJkLCAnYWZ0ZXInLCAnaDMnLCAnTm90ZXMnLCAnbm9uZScsICdub3Rlcy1oZWFkaW5nJyk7XG4gICAgY3JlYXRlVGV4dCh0b2RvQ2FyZCwgJ2FmdGVyJywgJ3AnLCBub3Rlcyk7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9kb0NhcmQgPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvZG9DYXJkID0gY3JlYXRlRGl2KCd0b2RvLWNhcmQnKTtcbiAgICBzZXRUb2RvVGl0bGUodG9kby50aXRsZSwgdG9kb0NhcmQpO1xuICAgIHNldFRvZG9TdGF0dXModG9kby5kdWUsIHRvZG8ucHJpb3JpdHksIHRvZG9DYXJkKTtcbiAgICBzZXRUb2RvRGVzY3JpcHRpb24odG9kby5kZXNjLCB0b2RvQ2FyZCk7XG4gICAgc2V0VG9kb1Rhc2tzKHRvZG8udGFza3MsIHRvZG9DYXJkKTtcbiAgICBzZXRBZGRUYXNrQnV0dG9uKHRvZG9DYXJkKTtcbiAgICBzZXROb3Rlcyh0b2RvLm5vdGVzLCB0b2RvQ2FyZCk7XG5cbiAgICBjb25zdCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tYWRkLWNvbnRhaW5lcicpO1xuICAgIHRvZG9MaXN0Lmluc2VydEJlZm9yZSh0b2RvQ2FyZCwgYWRkVG9kb0J1dHRvbik7XG4gIH07XG5cbiAgY29uc3Qgc2V0VG9kb0Zvcm0gPSAoY29udGFpbmVyKSA9PiB7XG4gICAgY3JlYXRlSW5wdXRGb3JtKCd0b2RvLXRpdGxlJywgJ1RpdGxlJywgY29udGFpbmVyKTtcbiAgICBjcmVhdGVJbnB1dEZvcm0oJ2R1ZS1kYXRlLWlucHV0JywgJ0R1ZSBEYXRlJywgY29udGFpbmVyKTtcbiAgICBjcmVhdGVJbnB1dEZvcm0oJ3ByaW9yaXR5LWlucHV0JywgJ1ByaW9yaXR5JywgY29udGFpbmVyKTtcbiAgICBjcmVhdGVUZXh0QXJlYUZvcm0oJ2Rlc2NyaXB0aW9uLXRleHRhcmVhJywgJ0Rlc2NyaXB0aW9uJywgY29udGFpbmVyKTtcbiAgICBjcmVhdGVUZXh0QXJlYUZvcm0oJ25vdGVzLWlucHV0JywgJ05vdGVzJywgY29udGFpbmVyKTtcbiAgICBjcmVhdGVCdXR0b25Gb3JtKCdidXR0b24nLCAndG9kby1zdWJtaXQtYnRuJywgJ1NVQk1JVCcsIGNvbnRhaW5lcik7XG4gIH07XG5cbiAgY29uc3Qgc2V0QWRkVG9kb0J1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRUb2RvQ29udGFpbmVyID0gY3JlYXRlSWREaXYoJ3RvZG8tYWRkLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRvZG9Gb3JtQ29udGFpbmVyID0gY3JlYXRlSWREaXYoJ3RvZG8tZm9ybS1jb250YWluZXInLCAnaGlkZGVuJyk7XG4gICAgY29uc3QgYWRkVG9kb0J1dHRvbiA9IGNyZWF0ZUJ1dHRvbkZvcm0oJ2RpdicsICdhZGQtdG9kby1idXR0b24nLCAnQWRkIFRvZG8nLCBhZGRUb2RvQ29udGFpbmVyLCAnYWRkLXRvZG8tYnV0dG9uJywgJ2dyZXktZm9udCcsICdmb250LW1lZGl1bScpO1xuICAgIHNldFRvZG9Gb3JtKHRvZG9Gb3JtQ29udGFpbmVyKTtcbiAgICBhZGRUb2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Gb3JtQ29udGFpbmVyKTtcbiAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZChhZGRUb2RvQ29udGFpbmVyKTtcbiAgICBzZXRUb2RvRm9ybUV2ZW50KCk7XG5cbiAgICBhZGRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdG9kb0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2ZsZXgnID9cbiAgICAgICAgdG9kb0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJyA6XG4gICAgICAgIHRvZG9Gb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfSlcbiAgfTtcblxuICBjb25zdCB0b2dnbGVQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0tY29udGFpbmVyJyk7XG4gICAgaWYgKHByb2plY3RGb3JtQ29udGFpbmVyKSB7XG4gICAgICAocHJvamVjdEZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSA/IFxuICAgICAgICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnIDpcbiAgICAgICAgcHJvamVjdEZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGNyZWF0ZUlkRGl2KCdwcm9qZWN0LWZvcm0tY29udGFpbmVyJyk7XG4gICAgICBjb25zdCBuYW1lRm9ybSA9IGNyZWF0ZUlucHV0Rm9ybSgncHJvamVjdC1uYW1lLWZvcm0nLCAnRW50ZXIgdGhlIHByb2plY3QgbmFtZScsIGZvcm1Db250YWluZXIpO1xuICAgICAgY29uc3QgZm9ybVN1Ym1pdCA9IGNyZWF0ZUJ1dHRvbkZvcm0oJ2J1dHRvbicsICdzdWJtaXQtcHJvamVjdC1idXR0b24nLCAnRU5URVInLCBmb3JtQ29udGFpbmVyKTtcbiAgICAgIHNpZGViYXIuaW5zZXJ0QmVmb3JlKGZvcm1Db250YWluZXIsIHNldHRpbmdzKTtcbiAgICAgIHNob3dQcm9qZWN0Rm9ybUV2ZW50KCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlc2V0VG9kb1N1Ym1pdEZvcm0gPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tdGl0bGUnKS52YWx1ZSA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZS1pbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LWlucHV0JykudmFsdWUgPSAnJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24tdGV4dGFyZWEnKS52YWx1ZSA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3Rlcy1pbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZm9ybS1jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgY29uc3QgcmVzZXRQcm9qZWN0U3VibWl0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lLWZvcm0nKTtcbiAgICBwcm9qZWN0TmFtZUZvcm0udmFsdWUgPSAnJztcbiAgICBjb25zdCBwcm9qZWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0tY29udGFpbmVyJyk7XG4gICAgcHJvamVjdEZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfTtcblxuICBjb25zdCBiaW5kQ2hhbmdlUHJvamVjdCA9IChjYWxsYmFjaykgPT4ge1xuICAgIHNldFByb2plY3RTd2l0Y2hFdmVudCA9IGNhbGxiYWNrO1xuICB9XG5cbiAgY29uc3QgYmluZFN1Ym1pdFRvZG8gPSAoaGFuZGxlcikgPT4ge1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXN1Ym1pdC1idG4nKTtcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCB0b2RvID0ge1xuICAgICAgICBwcm9qZWN0SWQ6IGN1cnJlbnRQcm9qZWN0SWQsXG4gICAgICAgIHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby10aXRsZScpLnZhbHVlLFxuICAgICAgICBkdWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZS1pbnB1dCcpLnZhbHVlLFxuICAgICAgICBwcmlvcml0eTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LWlucHV0JykudmFsdWUsXG4gICAgICAgIGRlc2M6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbi10ZXh0YXJlYScpLnZhbHVlLFxuICAgICAgICBub3RlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGVzLWlucHV0JykudmFsdWVcbiAgICAgIH07XG4gICAgICBoYW5kbGVyKHRvZG8pO1xuICAgICAgcmVzZXRUb2RvU3VibWl0Rm9ybSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgYmluZEFkZFRvZG8gPSAoY2FsbGJhY2spID0+IHtcbiAgICBzZXRUb2RvRm9ybUV2ZW50ID0gY2FsbGJhY2s7XG4gIH1cblxuICBjb25zdCBiaW5kQWRkUHJvamVjdCA9IChjYWxsYmFjaykgPT4ge1xuICAgIHNob3dQcm9qZWN0Rm9ybUV2ZW50ID0gY2FsbGJhY2s7XG4gIH1cblxuICBjb25zdCBiaW5kU3VibWl0UHJvamVjdCA9IChoYW5kbGVyKSA9PiB7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1wcm9qZWN0LWJ1dHRvbicpO1xuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUtZm9ybScpO1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZUZvcm0udmFsdWU7XG4gICAgICBoYW5kbGVyKHByb2plY3ROYW1lKTtcbiAgICAgIHJlc2V0UHJvamVjdFN1Ym1pdEZvcm0oKTtcbiAgICB9KTtcbiAgfTtcblxuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlUHJvamVjdEZvcm0pO1xuXG4gIHJldHVybiB7IFxuICAgICAgcmVzZXRQcm9qZWN0VmlldyxcbiAgICAgIHNldEN1cnJlbnRQcm9qZWN0SWQsXG4gICAgICBzZXRQcm9qZWN0VGl0bGUsXG4gICAgICBzZXRQcm9qZWN0RGVzY3JpcHRpb24sXG4gICAgICBhZGRUb2RvQ2FyZCxcbiAgICAgIHNldFByb2plY3RMaXN0SXRlbSxcbiAgICAgIHNldEFkZFRvZG9CdXR0b24sXG4gICAgICBiaW5kU3VibWl0UHJvamVjdCxcbiAgICAgIGJpbmRBZGRQcm9qZWN0LFxuICAgICAgdG9nZ2xlUHJvamVjdEZvcm0sXG4gICAgICBiaW5kQWRkVG9kbyxcbiAgICAgIGJpbmRTdWJtaXRUb2RvLFxuICAgICAgYmluZENoYW5nZVByb2plY3RcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB2aWV3OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcblxuY29udHJvbGxlci5pbml0aWFsaXplVmlldygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==