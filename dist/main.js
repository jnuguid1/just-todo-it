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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-color: #BEF264;\n  --secondary-color: #F8FFE8;\n  --grey-text-color: #9a9a9a;\n  --light-grey: #cdcdcd;\n  --lighter-grey: #f1f1f1;\n  --card-color: #FFFFFF;\n  --urgent-primary-color: #FF0000;\n  --urgent-secondary-color: #FFDEDE;\n  --unimportant-primary-color: #868686;\n  --unimportant-secondary-color: #D5D5D5;\n  --normal-primary-color: #00952A;\n  --normal-secondary-color: #94FFB2;\n  --error-color: #bd0303;\n  --pointer: pointer;\n  font-size: 16px;\n  font-family: 'Nunito', 'Roboto', 'sans-serif';\n  user-select: none;\n}\n\nbody, h1, h2, h3, p, ul, li {\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  list-style: none;\n}\n\n.font-large {\n  font-size: 2rem;\n}\n\n.font-medium {\n  font-size: 1.5rem;\n}\n\n.font-regular {\n  font-size: 1rem;\n}\n\n.font-small {\n  font-size: 0.875rem;\n}\n\n.primary-color {\n  background-color: var(--primary-color);\n}\n\n.secondary-color {\n  background-color: var(--secondary-color);\n}\n\n.grey-font {\n  color: var(--grey-text-color);\n}\n\n.light-grey {\n  color: var(--light-grey);\n}\n\n.p-24 {\n  padding: 24px;\n}\n\n.p-48 {\n  padding: 48px;\n}\n\n.mb-8 {\n  margin-bottom: 8px;\n}\n\n.mb-16 {\n  margin-bottom: 16px;\n}\n\n.mb-32 {\n  margin-bottom: 32px;\n}\n\n.mb-48 {\n  margin-bottom: 48px;\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n#container{\n  display: grid;\n  grid-template-columns: 1.1fr 5fr;\n  height: 100vh;\n}\n\n#sidebar h1 {\n  margin-bottom: 84px;\n}\n\n#project-container {\n  overflow-x: scroll;\n}\n\n.nav-list {\n  display: flex;\n  flex-direction: column;\n}\n\n#projects li {\n  cursor: var(--pointer);\n  font-size: 1.25rem;\n  margin-left: 24px;\n  margin-bottom: 12px;\n  user-select: none;\n}\n\n#projects li:hover {\n  text-decoration: underline;\n}\n\n#sidebar h2 {\n  font-weight: 600;\n}\n\n#sidebar h2:nth-child(n+1) {\n  margin-bottom: 16px;\n}\n\n#sidebar h2:nth-of-type(2) {\n  margin-top: 32px;\n}\n\n#add-project-btn {\n  user-select: none;\n}\n\n#todo-list {\n  display: grid;\n  grid-auto-columns: 350px;\n  grid-auto-flow: column;\n  gap: 24px;\n}\n\n.todo-card {\n  padding: 24px 24px 32px 24px;\n  border-radius: 10px;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);\n  background-color: var(--card-color);\n}\n\n.status-container {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n\n.todo-card h3 {\n  margin-bottom: 16px;\n}\n\n.checklist-circle {\n  min-width: 18px;\n  min-height: 18px;\n  border-radius: 50%;\n  border-color: var(--light-grey);\n  border-style: solid;\n  cursor: var(--pointer);\n}\n\n.checklist-divide {\n  margin-top: 16px;\n}\n\n.checklist-divide hr {\n  height: 1px;\n  border: 0;\n  background: var(--light-grey);\n}\n\n.add-task-button {\n  color: var(--grey-text-color);\n  cursor: var(--pointer);\n  margin-top: 12px;\n  margin-bottom: 8px;\n  user-select: none;\n  border-style: solid;\n  display: inline-block;\n  border-color: var(--light-grey);\n  padding: 6px 8px;\n  border-radius: 14px;\n  background-color: var(--lighter-grey);\n}\n\n.submit-task-btn {\n  padding: 8px;\n}\n\n.task-form {\n  margin-top: 12px;\n  margin-right: 8px;\n  padding: 8px;\n}\n\n.notes-heading {\n  margin-top: 24px;\n}\n\n.add-todo-button {\n  border-radius: 10px;\n  padding: 12px;\n  background-color: rgb(229, 229, 229);\n  display: inline-block;\n  user-select: none;\n  cursor: var(--pointer);\n  margin-bottom: 8px;\n}\n\n#todo-form-container {\n  display: none;\n  flex-direction: column;\n  width: 60%;\n}\n\n#todo-form-container input, \n#todo-form-container select,\n#todo-form-container textarea {\n  margin-top: 12px;\n  margin-bottom: 4px;\n  font-size: 1rem;\n  padding: 4px;\n}\n\n#todo-form-container select {\n  color: grey;\n}\n\n#todo-submit-btn {\n  margin-top: 8px;\n  font-size: 1rem;\n}\n\n#todo-form-container option:nth-child(n+1) {\n  color: black;\n}\n\n#todo-form-container button {\n  width: 40%;\n  align-self: center;\n  padding: 8px;\n}\n\n.task-container {\n  margin-top: 20px;\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n\n#project-form-container {\n  display: flex;\n  gap: 8px;\n}\n\n#project-name-form {\n  padding: 8px;\n  font-size: 0.875rem;\n  margin-bottom: 12px;\n  width: 150px;\n}\n\n#project-form-container button {\n  padding: 0px 8px;\n  height: 37px\n}\n\n.circle-filled {\n  background-color: var(--primary-color);\n}\n\n.task-done {\n  text-decoration: line-through;\n}\n\n.hidden {\n  display: none;\n}\n\n.priority-label-urgent,\n.priority-label-normal,\n.priority-label-unimportant {\n  padding: 4px 6px;\n  border-style: solid;\n  border-radius: 16px;\n}\n\n.priority-label-urgent {\n  border-color: var(--urgent-primary-color);\n  background-color: var(--urgent-secondary-color);\n  color: var(--urgent-primary-color);\n}\n\n.priority-label-normal {\n  border-color: var(--normal-primary-color);\n  background-color: var(--normal-secondary-color);\n  color: var(--normal-primary-color);\n}\n\n.priority-label-unimportant {\n  border-color: var(--unimportant-primary-color);\n  background-color: var(--unimportant-secondary-color);\n  color: var(--unimportant-primary-color);\n}\n\n.error {\n  color: var(--error-color);\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --primary-color: #BEF264;\n  --secondary-color: #F8FFE8;\n  --grey-text-color: #9a9a9a;\n  --light-grey: #cdcdcd;\n  --lighter-grey: #f1f1f1;\n  --card-color: #FFFFFF;\n  --urgent-primary-color: #FF0000;\n  --urgent-secondary-color: #FFDEDE;\n  --unimportant-primary-color: #868686;\n  --unimportant-secondary-color: #D5D5D5;\n  --normal-primary-color: #00952A;\n  --normal-secondary-color: #94FFB2;\n  --error-color: #bd0303;\n  --pointer: pointer;\n  font-size: 16px;\n  font-family: 'Nunito', 'Roboto', 'sans-serif';\n  user-select: none;\n}\n\nbody, h1, h2, h3, p, ul, li {\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  list-style: none;\n}\n\n.font-large {\n  font-size: 2rem;\n}\n\n.font-medium {\n  font-size: 1.5rem;\n}\n\n.font-regular {\n  font-size: 1rem;\n}\n\n.font-small {\n  font-size: 0.875rem;\n}\n\n.primary-color {\n  background-color: var(--primary-color);\n}\n\n.secondary-color {\n  background-color: var(--secondary-color);\n}\n\n.grey-font {\n  color: var(--grey-text-color);\n}\n\n.light-grey {\n  color: var(--light-grey);\n}\n\n.p-24 {\n  padding: 24px;\n}\n\n.p-48 {\n  padding: 48px;\n}\n\n.mb-8 {\n  margin-bottom: 8px;\n}\n\n.mb-16 {\n  margin-bottom: 16px;\n}\n\n.mb-32 {\n  margin-bottom: 32px;\n}\n\n.mb-48 {\n  margin-bottom: 48px;\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n#container{\n  display: grid;\n  grid-template-columns: 1.1fr 5fr;\n  height: 100vh;\n}\n\n#sidebar h1 {\n  margin-bottom: 84px;\n}\n\n#project-container {\n  overflow-x: scroll;\n}\n\n.nav-list {\n  display: flex;\n  flex-direction: column;\n}\n\n#projects li {\n  cursor: var(--pointer);\n  font-size: 1.25rem;\n  margin-left: 24px;\n  margin-bottom: 12px;\n  user-select: none;\n}\n\n#projects li:hover {\n  text-decoration: underline;\n}\n\n#sidebar h2 {\n  font-weight: 600;\n}\n\n#sidebar h2:nth-child(n+1) {\n  margin-bottom: 16px;\n}\n\n#sidebar h2:nth-of-type(2) {\n  margin-top: 32px;\n}\n\n#add-project-btn {\n  user-select: none;\n}\n\n#todo-list {\n  display: grid;\n  grid-auto-columns: 350px;\n  grid-auto-flow: column;\n  gap: 24px;\n}\n\n.todo-card {\n  padding: 24px 24px 32px 24px;\n  border-radius: 10px;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);\n  background-color: var(--card-color);\n}\n\n.status-container {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n\n.todo-card h3 {\n  margin-bottom: 16px;\n}\n\n.checklist-circle {\n  min-width: 18px;\n  min-height: 18px;\n  border-radius: 50%;\n  border-color: var(--light-grey);\n  border-style: solid;\n  cursor: var(--pointer);\n}\n\n.checklist-divide {\n  margin-top: 16px;\n}\n\n.checklist-divide hr {\n  height: 1px;\n  border: 0;\n  background: var(--light-grey);\n}\n\n.add-task-button {\n  color: var(--grey-text-color);\n  cursor: var(--pointer);\n  margin-top: 12px;\n  margin-bottom: 8px;\n  user-select: none;\n  border-style: solid;\n  display: inline-block;\n  border-color: var(--light-grey);\n  padding: 6px 8px;\n  border-radius: 14px;\n  background-color: var(--lighter-grey);\n}\n\n.submit-task-btn {\n  padding: 8px;\n}\n\n.task-form {\n  margin-top: 12px;\n  margin-right: 8px;\n  padding: 8px;\n}\n\n.notes-heading {\n  margin-top: 24px;\n}\n\n.add-todo-button {\n  border-radius: 10px;\n  padding: 12px;\n  background-color: rgb(229, 229, 229);\n  display: inline-block;\n  user-select: none;\n  cursor: var(--pointer);\n  margin-bottom: 8px;\n}\n\n#todo-form-container {\n  display: none;\n  flex-direction: column;\n  width: 60%;\n}\n\n#todo-form-container input, \n#todo-form-container select,\n#todo-form-container textarea {\n  margin-top: 12px;\n  margin-bottom: 4px;\n  font-size: 1rem;\n  padding: 4px;\n}\n\n#todo-form-container select {\n  color: grey;\n}\n\n#todo-submit-btn {\n  margin-top: 8px;\n  font-size: 1rem;\n}\n\n#todo-form-container option:nth-child(n+1) {\n  color: black;\n}\n\n#todo-form-container button {\n  width: 40%;\n  align-self: center;\n  padding: 8px;\n}\n\n.task-container {\n  margin-top: 20px;\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n\n#project-form-container {\n  display: flex;\n  gap: 8px;\n}\n\n#project-name-form {\n  padding: 8px;\n  font-size: 0.875rem;\n  margin-bottom: 12px;\n  width: 150px;\n}\n\n#project-form-container button {\n  padding: 0px 8px;\n  height: 37px\n}\n\n.circle-filled {\n  background-color: var(--primary-color);\n}\n\n.task-done {\n  text-decoration: line-through;\n}\n\n.hidden {\n  display: none;\n}\n\n.priority-label-urgent,\n.priority-label-normal,\n.priority-label-unimportant {\n  padding: 4px 6px;\n  border-style: solid;\n  border-radius: 16px;\n}\n\n.priority-label-urgent {\n  border-color: var(--urgent-primary-color);\n  background-color: var(--urgent-secondary-color);\n  color: var(--urgent-primary-color);\n}\n\n.priority-label-normal {\n  border-color: var(--normal-primary-color);\n  background-color: var(--normal-secondary-color);\n  color: var(--normal-primary-color);\n}\n\n.priority-label-unimportant {\n  border-color: var(--unimportant-primary-color);\n  background-color: var(--unimportant-secondary-color);\n  color: var(--unimportant-primary-color);\n}\n\n.error {\n  color: var(--error-color);\n}"],"sourceRoot":""}]);
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
  let currentProjectId = _user__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectIdCounter();

  const initializeUser = () => {
    const projectName = 'Your Project';
    const projectDesc = 'This is your project. This text blurb is your project description, put anything here.';
    const projectId = _user__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectIdCounter();
    currentProjectId = _user__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectIdCounter();
    _user__WEBPACK_IMPORTED_MODULE_0__["default"].incrementProjectIdCounter();
    const firstProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__["default"])(projectName, projectDesc, projectId);
    firstProject.bindOnTodoListChanged(onTodoListChanged);
    const todoId = firstProject.getTodoIdCounter();
    firstProject.incrementTodoIdCounter();
    const todoTitle = 'To do';
    const todoDesc = 'This is a todo. Add checklist tasks, due dates, and priorities here.';
    const dueDate = 'Tues, 10: 30 am';
    const priority = 'Urgent';
    const notes = 'Add notes and any additional thoughts here';
    const firstTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_2__["default"])(todoId, todoTitle, todoDesc, dueDate, priority, notes);
    const taskName = 'Make your first task';
    const firstTask = (0,_task__WEBPACK_IMPORTED_MODULE_3__["default"])(taskName, firstTodo.getTaskIdCounter());
    firstTodo.addTask(firstTask);
    firstTodo.incrementTaskIdCounter();
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
      addTodos(project);
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
    addTodos(projectTarget);
  }

  const initializeView = () => {
    initializeSidebarView();
    initializeProjectView();
  };

  const addTodos = (project) => {
    const list = project.getTodoList();
    list.forEach(todo => {
      const todoObj = {
        projectId: project.getId(),
        todoId: todo.getId(),
        title: todo.getTitle(),
        due: todo.getDueDate(),
        priority: todo.getPriority(),
        desc: todo.getDescription(),
        tasks: todo.getCheckList().map(task => ({
          name: task.getName(),
          id: task.getId(),
          isCompleted: task.checkCompleted()
        })),
        notes: todo.getNotes()
      };
      todo.bindOnTaskListChange(onTaskListChanged);
      _view__WEBPACK_IMPORTED_MODULE_4__["default"].addTodoCard(todoObj);
    });
  };

  const addSubmitProjectEvent = () => {
    _view__WEBPACK_IMPORTED_MODULE_4__["default"].bindSubmitProject(handleSubmitProject);
  };

  const addSubmitTodoEvent = () => {
    _view__WEBPACK_IMPORTED_MODULE_4__["default"].bindSubmitTodo(handleSubmitTodo);
  };

  // Temporary implementation. In future reset only the task list of a
  // todo card instead of all the todo cards in a project.
  const onTaskListChanged = (todoId) => {
    const currentProject = _user__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectById(currentProjectId);
    _view__WEBPACK_IMPORTED_MODULE_4__["default"].resetTodos();
    addTodos(currentProject);
  };

  const onTodoListChanged = () => {
    const currentProject = _user__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectById(currentProjectId);
    const todoList = currentProject.getTodoList();
    const addedTodo = todoList[todoList.length-1];
    const todoObj = {
      projectId: currentProjectId,
      todoId: addedTodo.getId(),
      title: addedTodo.getTitle(),
      due: addedTodo.getDueDate(),
      priority: addedTodo.getPriority(),
      desc: addedTodo.getDescription(),
      tasks: addedTodo.getCheckList().map(task => task.getName()),
      notes: addedTodo.getNotes()
    }
    _view__WEBPACK_IMPORTED_MODULE_4__["default"].addTodoCard(todoObj);
  };

  const onProjectListChange = () => {
    const projects = _user__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects();
    const projectTarget = projects[projects.length-1];
    const projectName = projectTarget.getName();
    const projectId = projectTarget.getId();
    _view__WEBPACK_IMPORTED_MODULE_4__["default"].setProjectListItem(projectName, projectId);
  };

  const onProjectSwitch = (id) => {
    loadProject(id);
  };

  const handleSubmitTask = (projectId, todoId, taskName) => {
    const projectTarget = _user__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectById(projectId);
    const todoTarget = projectTarget.getTodoById(todoId);
    const newTask = (0,_task__WEBPACK_IMPORTED_MODULE_3__["default"])(taskName, todoTarget.getTaskIdCounter());
    todoTarget.incrementTaskIdCounter();
    todoTarget.addTask(newTask);
  }

  const handleSubmitTodo = (todo) => {
    const currentProject = _user__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectById(todo.projectId);
    const todoId = currentProject.getTodoIdCounter();
    currentProject.incrementTodoIdCounter();
    const newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_2__["default"])(
      todoId,
      todo.title,
      todo.desc,
      todo.due,
      todo.priority,
      todo.notes
    );
    newTodo.bindOnTaskListChange(onTaskListChanged);
    currentProject.addTodo(newTodo);
  }

  const handleSubmitProject = (name) => {
    const desc = 'This is your project. This text blurb is your project description, put anything here.';
    const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__["default"])(name, desc, _user__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectIdCounter());
    newProject.bindOnTodoListChanged(onTodoListChanged);
    _user__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(newProject);
    _user__WEBPACK_IMPORTED_MODULE_0__["default"].incrementProjectIdCounter();
  };

  const handleTaskToggle = (todoId, taskId) => {
    const project = _user__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectById(currentProjectId);
    const todo = project.getTodoById(todoId);
    const task = todo.getTaskById(taskId);
    task.toggleComplete();
  };


  
  initializeUser();
  _view__WEBPACK_IMPORTED_MODULE_4__["default"].bindAddTask(handleSubmitTask);
  _view__WEBPACK_IMPORTED_MODULE_4__["default"].bindAddTodo(addSubmitTodoEvent);
  _view__WEBPACK_IMPORTED_MODULE_4__["default"].bindAddProject(addSubmitProjectEvent);
  _user__WEBPACK_IMPORTED_MODULE_0__["default"].bindProjectListChanged(onProjectListChange);
  _view__WEBPACK_IMPORTED_MODULE_4__["default"].bindChangeProject(onProjectSwitch);
  _view__WEBPACK_IMPORTED_MODULE_4__["default"].bindToggleTask(handleTaskToggle);

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
  let todoIdCounter = 0;
  let onTodoListChanged = () => {};

  const incrementTodoIdCounter = () => {
    todoIdCounter += 1;
  };
  const getTodoById = (id) => {
    return todoList.find(todo => todo.getId() === id);
  }
  const getTodoIdCounter = () => {
    return todoIdCounter;
  };
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
    incrementTodoIdCounter,
    getTodoById,
    getTodoIdCounter,
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
const taskFactory = (name, id) => {
  let isCompleted = false;

  const getId = () => {
    return id;
  }
  const setId = (newId) => {
    id = newId;
  }
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
    console.log({id, isCompleted})
  };

  return { getId, setId, getName, checkCompleted, editName, toggleComplete};
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
const todoFactory = (id, title, description, dueDate, priority, notes) => {
  const checkList = [];
  let taskIdCounter = 0;
  let onTaskListChange = () => {};

  const getTaskById = (id) => {
    return checkList.find(task => task.getId() === id);
  }
  const getTaskIdCounter = () => {
    return taskIdCounter;
  };
  const incrementTaskIdCounter = () => {
    taskIdCounter += 1;
  };
  const getId = () => {
    return id;
  };
  const setId = (newId) => {
    id = newId;
  };
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
    onTaskListChange(id);
  };
  const removeTask = (task) => {
    const index = checkList.indexOf(task);
    if (index > -1) {
      checkList.splice(index, 1);
    }
  };

  const bindOnTaskListChange = (callback) => {
    onTaskListChange = callback;
  };
  
  return {
    getTaskById,
    getTaskIdCounter,
    incrementTaskIdCounter,
    getId,
    setId,
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
    removeTask,
    bindOnTaskListChange
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
  let projectIdCounter = 0;
  let onProjectsListChanged = () => {};

  const incrementProjectIdCounter = () => {
    projectIdCounter += 1;
  };

  const getProjectIdCounter = () => {
    return projectIdCounter;
  };

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

  return { 
    getProjects, 
    addProject, 
    removeProject, 
    bindProjectListChanged,
    getProjectById,
    incrementProjectIdCounter,
    getProjectIdCounter };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (user);

/***/ }),

/***/ "./src/view-helpers.js":
/*!*****************************!*\
  !*** ./src/view-helpers.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const viewHelpers = (() => {

  // Used function instead of arrow function because 
  // variable arguments is buggy with arrow functions.

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

  function createSelectForm(id, container, text) {
    const select = document.createElement('select');
    select.id = id;
    const option = document.createElement('option');
    option.value = '';
    option.textContent = text;
    select.appendChild(option);
    for (let i = 3; i < arguments.length; i++) {
      const options = document.createElement('option');
      options.value = arguments[i];
      options.textContent = arguments[i];
      select.appendChild(options);
    }
    container.appendChild(select);
  }

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

  return {
    createDiv,
    createIdDiv,
    createInputForm,
    createTextAreaForm,
    createButtonForm,
    createSelectForm,
    createText
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewHelpers);

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
/* harmony import */ var _view_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-helpers */ "./src/view-helpers.js");


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
  let addTodoEvent = () => {};
  let addTaskEvent = () => {};
  let toggleTaskEvent = () => {};

  const setCurrentProjectId = (id) => {
    currentProjectId = id;
  };

  const resetProjectView = () => {
    let element = projectContainer.lastElementChild;
    while (element) {
      projectContainer.removeChild(element);
      element = projectContainer.lastElementChild;
    }
    projectContainer.appendChild(_view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createIdDiv('todo-list'));
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
    _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createText(projectContainer, 'before', 'h2', title, todoList, 'font-medium', 'mb-16');
  };

  const setProjectDescription = (description) => {
    _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createText(projectContainer, 'before', 'p', description, todoList, 'font-regular', 'mb-48');
  };

  const resetTodos = () => {
    const todoListItems = todoList.children;
    const listLength = todoListItems.length-1;
    let i = 0;
    while (i < listLength) {
      todoList.removeChild(todoListItems[0]);
      i++;
    }
  };

  const setTodoTitle = (title, todoCard) => {
    _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createText(todoCard, 'after', 'h2', title, 'none', 'font-medium', 'mb-16');
  };

  const setTodoStatus = (dueDate, priority, todoCard) => {
    const status = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('mb-16', 'status-container')
    _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createText(status, 'after', 'p', `Due: ${dueDate}`, 'none', 'font-small');
    const priorityLabel = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createText(status, 'after', 'p', priority, 'none', 'font-small');
    if (priority.toLowerCase() === 'urgent') {
      priorityLabel.classList.add('priority-label-urgent');
    } else if (priority.toLowerCase() === 'normal') {
      priorityLabel.classList.add('priority-label-normal');
    } else if (priority.toLowerCase() === 'unimportant') {
      priorityLabel.classList.add('priority-label-unimportant');
    }
    todoCard.appendChild(status);
  };

  const setTodoDescription = (desc, todoCard) => {
    _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createText(todoCard, 'after', 'p', desc, 'none', 'mb-8');
  };

  const setTask = (task, container) => {
    const taskName = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createText(container, 'after', 'p', task);
    return taskName;
  };

  const setTaskCheckCircle = (todoId, container, taskElement, taskObj) => {
    const checklistCircle = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('checklist-circle');
    if (taskObj.isCompleted) {
      checklistCircle.classList.add('circle-filled');
    } else {
      checklistCircle.classList.remove('circle-filled');
    }
    container.insertBefore(checklistCircle, taskElement);
    checklistCircle.addEventListener('click', () => {
      checklistCircle.classList.toggle('circle-filled');
      taskElement.classList.toggle('task-done');
      toggleTaskEvent(todoId, taskObj.id);
    });
  };

  const setTodoTasks = (todoId, tasks, todoCard) => {
    tasks.forEach(task => {
      const taskContainer = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('task-container')
      const taskElement = setTask(task.name, taskContainer);
      if (task.isCompleted) {
        taskElement.classList.add('task-done');
      } else {
        taskElement.classList.remove('task-done');
      }
      setTaskCheckCircle(todoId, taskContainer, taskElement, task);
      todoCard.appendChild(taskContainer);
      const divider = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('checklist-divide');
      const hr = document.createElement('hr');
      divider.appendChild(hr);
      todoCard.appendChild(divider);
    })
  };

  const setAddTaskButton = (projectId, todoId, todoCard) => {
    const addTaskButton = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createButtonForm('div', 'none', 'Add Task', todoCard, 'p', 'add-task-button');
    const taskFormContainer = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('hidden');
    const taskForm = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createInputForm('none', 'Enter task name', taskFormContainer, 'task-form');
    const taskSubmitButton = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createButtonForm('button', 'none', 'Submit', taskFormContainer, 'submit-task-btn');
    todoCard.appendChild(taskFormContainer);
    addTaskButton.addEventListener('click', () => {
      taskFormContainer.classList.toggle('hidden');
    });
    taskSubmitButton.addEventListener('click', () => {
      const taskName = taskForm.value;
      addTaskEvent(projectId, todoId, taskName);
    });
  }

  const setNotes = (notes, todoCard) => {
    _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createText(todoCard, 'after', 'h3', 'Notes', 'none', 'notes-heading');
    _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createText(todoCard, 'after', 'p', notes);
  };

  const addTodoCard = (todo) => {
    const todoCardContainer = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv();
    const todoCard = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('todo-card');
    setTodoTitle(todo.title, todoCard);
    setTodoStatus(todo.due, todo.priority, todoCard);
    setTodoDescription(todo.desc, todoCard);
    setTodoTasks(todo.todoId, todo.tasks, todoCard);
    setAddTaskButton(todo.projectId, todo.todoId, todoCard);
    setNotes(todo.notes, todoCard);

    const addTodoButton = document.querySelector('#todo-add-container');
    todoCardContainer.appendChild(todoCard);
    todoList.insertBefore(todoCardContainer, addTodoButton);
  };

  const setTodoForm = (container) => {
    const form = document.createElement('form');
    form.noValidate = true;

    const todoTitle = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createInputForm('todo-title', 'Title', form);
    const titleError = document.createElement('span');
    titleError.classList.add('error');
    form.appendChild(titleError);
    _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createInputForm('due-date-input', 'Due Date', form);
    _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createSelectForm('priority-select', form, 'Priority', 'Urgent', 'Normal', 'Unimportant')
    _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createTextAreaForm('description-textarea', 'Description', form);
    _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createTextAreaForm('notes-input', 'Notes', form);
    const todoButton = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createButtonForm('button', 'todo-submit-btn', 'SUBMIT', form);
    todoTitle.required = true;

    todoTitle.addEventListener('input', (event) => {
      if (todoTitle.validity.valid) {
        titleError.textContent = '';
        titleError.className = 'error';
      }
    })

    form.addEventListener('submit', (event) => {
      if (!todoTitle.validity.valid) {
        showError();
        event.preventDefault();
      } else {
        let desc;
        let notes;
        if (document.querySelector('#description-textarea').value === '') {
          desc = 'This is a todo. Add checklist tasks, a due date, and priorities here';
        } else {
          desc = document.querySelector('#description-textarea').value;
        }
        if (document.querySelector(('#notes-input')).value === '') {
          notes = 'Add notes and any additional thoughts here';
        } else {
          notes = document.querySelector(('#notes-input')).value;
        }
        const todo = {
          projectId: currentProjectId,
          title: document.querySelector('#todo-title').value,
          due: document.querySelector('#due-date-input').value,
          priority: document.querySelector('#priority-select').value,
          desc: desc,
          notes: notes
        };
        addTodoEvent(todo);
        resetTodoSubmitForm();
        event.preventDefault();
      }
    })

    container.appendChild(form);

    function showError() {
      if (todoTitle.validity.valueMissing) {
        titleError.textContent = 'You need to enter a title.';
      }
    }
  };

  const setAddTodoButton = () => {
    const addTodoContainer = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createIdDiv('todo-add-container');
    const todoFormContainer = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createIdDiv('todo-form-container', 'hidden');
    const addTodoButton = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createButtonForm('div', 'add-todo-button', 'Add Todo', addTodoContainer, 'add-todo-button', 'grey-font', 'font-medium');
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
      const formContainer = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createIdDiv('project-form-container');
      const nameForm = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createInputForm('project-name-form', 'Enter the project name', formContainer);
      const formSubmit = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createButtonForm('button', 'submit-project-button', 'ENTER', formContainer);
      sidebar.insertBefore(formContainer, settings);
      showProjectFormEvent();
    }
  };

  const resetTodoSubmitForm = () => {
    document.querySelector('#todo-title').value = '';
    document.querySelector('#due-date-input').value = '';
    document.querySelector('#priority-select').value = '';
    document.querySelector('#description-textarea').value = '';
    document.querySelector('#notes-input').value = '';
    document.querySelector('#todo-form-container').style.display = 'none';
  };

  const resetProjectSubmitForm = () => {
    const projectNameForm = document.querySelector('#project-name-form');
    projectNameForm.value = '';
    const projectFormContainer = document.querySelector('#project-form-container');
    projectFormContainer.style.display = 'none';
  };

  const bindChangeProject = (callback) => {
    setProjectSwitchEvent = callback;
  };

  const bindAddTask = (callback) => {
    addTaskEvent = callback;
  };

  const bindSubmitTodo = (callback) => {
    addTodoEvent = callback;
  };

  const bindAddTodo = (callback) => {
    setTodoFormEvent = callback;
  }

  const bindAddProject = (callback) => {
    showProjectFormEvent = callback;
  };

  const bindSubmitProject = (handler) => {
    const submitButton = document.querySelector('#submit-project-button');
    submitButton.addEventListener('click', () => {
      const projectNameForm = document.querySelector('#project-name-form');
      const projectName = projectNameForm.value;
      handler(projectName);
      resetProjectSubmitForm();
    });
  };

  const bindToggleTask = (callback) => {
    toggleTaskEvent = callback;
  }

  addProjectButton.addEventListener('click', toggleProjectForm);

  return { 
      resetProjectView,
      resetTodos,
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
      bindAddTask,
      bindSubmitTodo,
      bindChangeProject,
      bindToggleTask
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sT0FBTyxZQUFZLGFBQWEs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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2lCOztBQUV0QyxrRUFBeUIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2p1c3QtdG9kby1pdC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vanVzdC10b2RvLWl0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vanVzdC10b2RvLWl0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2p1c3QtdG9kby1pdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vanVzdC10b2RvLWl0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2p1c3QtdG9kby1pdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvLi9zcmMvdXNlci5qcyIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvLi9zcmMvdmlldy1oZWxwZXJzLmpzIiwid2VicGFjazovL2p1c3QtdG9kby1pdC8uL3NyYy92aWV3LmpzIiwid2VicGFjazovL2p1c3QtdG9kby1pdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanVzdC10b2RvLWl0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2p1c3QtdG9kby1pdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogI0JFRjI2NDtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjRjhGRkU4O1xcbiAgLS1ncmV5LXRleHQtY29sb3I6ICM5YTlhOWE7XFxuICAtLWxpZ2h0LWdyZXk6ICNjZGNkY2Q7XFxuICAtLWxpZ2h0ZXItZ3JleTogI2YxZjFmMTtcXG4gIC0tY2FyZC1jb2xvcjogI0ZGRkZGRjtcXG4gIC0tdXJnZW50LXByaW1hcnktY29sb3I6ICNGRjAwMDA7XFxuICAtLXVyZ2VudC1zZWNvbmRhcnktY29sb3I6ICNGRkRFREU7XFxuICAtLXVuaW1wb3J0YW50LXByaW1hcnktY29sb3I6ICM4Njg2ODY7XFxuICAtLXVuaW1wb3J0YW50LXNlY29uZGFyeS1jb2xvcjogI0Q1RDVENTtcXG4gIC0tbm9ybWFsLXByaW1hcnktY29sb3I6ICMwMDk1MkE7XFxuICAtLW5vcm1hbC1zZWNvbmRhcnktY29sb3I6ICM5NEZGQjI7XFxuICAtLWVycm9yLWNvbG9yOiAjYmQwMzAzO1xcbiAgLS1wb2ludGVyOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCAnUm9ib3RvJywgJ3NhbnMtc2VyaWYnO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmJvZHksIGgxLCBoMiwgaDMsIHAsIHVsLCBsaSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uZm9udC1sYXJnZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5mb250LW1lZGl1bSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmZvbnQtcmVndWxhciB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5mb250LXNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxufVxcblxcbi5wcmltYXJ5LWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uc2Vjb25kYXJ5LWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5ncmV5LWZvbnQge1xcbiAgY29sb3I6IHZhcigtLWdyZXktdGV4dC1jb2xvcik7XFxufVxcblxcbi5saWdodC1ncmV5IHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG59XFxuXFxuLnAtMjQge1xcbiAgcGFkZGluZzogMjRweDtcXG59XFxuXFxuLnAtNDgge1xcbiAgcGFkZGluZzogNDhweDtcXG59XFxuXFxuLm1iLTgge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4ubWItMTYge1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLm1iLTMyIHtcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxufVxcblxcbi5tYi00OCB7XFxuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xcbn1cXG5cXG4uZmxleC1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jY29udGFpbmVye1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS4xZnIgNWZyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI3NpZGViYXIgaDEge1xcbiAgbWFyZ2luLWJvdHRvbTogODRweDtcXG59XFxuXFxuI3Byb2plY3QtY29udGFpbmVyIHtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG59XFxuXFxuLm5hdi1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jcHJvamVjdHMgbGkge1xcbiAgY3Vyc29yOiB2YXIoLS1wb2ludGVyKTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdHMgbGk6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiNzaWRlYmFyIGgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNzaWRlYmFyIGgyOm50aC1jaGlsZChuKzEpIHtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbiNzaWRlYmFyIGgyOm50aC1vZi10eXBlKDIpIHtcXG4gIG1hcmdpbi10b3A6IDMycHg7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG4ge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiN0b2RvLWxpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1jb2x1bW5zOiAzNTBweDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBnYXA6IDI0cHg7XFxufVxcblxcbi50b2RvLWNhcmQge1xcbiAgcGFkZGluZzogMjRweCAyNHB4IDMycHggMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1jb2xvcik7XFxufVxcblxcbi5zdGF0dXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4udG9kby1jYXJkIGgzIHtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5jaGVja2xpc3QtY2lyY2xlIHtcXG4gIG1pbi13aWR0aDogMThweDtcXG4gIG1pbi1oZWlnaHQ6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGN1cnNvcjogdmFyKC0tcG9pbnRlcik7XFxufVxcblxcbi5jaGVja2xpc3QtZGl2aWRlIHtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcblxcbi5jaGVja2xpc3QtZGl2aWRlIGhyIHtcXG4gIGhlaWdodDogMXB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtZ3JleSk7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgY29sb3I6IHZhcigtLWdyZXktdGV4dC1jb2xvcik7XFxuICBjdXJzb3I6IHZhcigtLXBvaW50ZXIpO1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuICBwYWRkaW5nOiA2cHggOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxufVxcblxcbi5zdWJtaXQtdGFzay1idG4ge1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4udGFzay1mb3JtIHtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLm5vdGVzLWhlYWRpbmcge1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG59XFxuXFxuLmFkZC10b2RvLWJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDIyOSwgMjI5KTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgY3Vyc29yOiB2YXIoLS1wb2ludGVyKTtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuI3RvZG8tZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNjAlO1xcbn1cXG5cXG4jdG9kby1mb3JtLWNvbnRhaW5lciBpbnB1dCwgXFxuI3RvZG8tZm9ybS1jb250YWluZXIgc2VsZWN0LFxcbiN0b2RvLWZvcm0tY29udGFpbmVyIHRleHRhcmVhIHtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbiN0b2RvLWZvcm0tY29udGFpbmVyIHNlbGVjdCB7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuI3RvZG8tc3VibWl0LWJ0biB7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiN0b2RvLWZvcm0tY29udGFpbmVyIG9wdGlvbjpudGgtY2hpbGQobisxKSB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiN0b2RvLWZvcm0tY29udGFpbmVyIGJ1dHRvbiB7XFxuICB3aWR0aDogNDAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbiNwcm9qZWN0LW5hbWUtZm9ybSB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1jb250YWluZXIgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDBweCA4cHg7XFxuICBoZWlnaHQ6IDM3cHhcXG59XFxuXFxuLmNpcmNsZS1maWxsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi50YXNrLWRvbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByaW9yaXR5LWxhYmVsLXVyZ2VudCxcXG4ucHJpb3JpdHktbGFiZWwtbm9ybWFsLFxcbi5wcmlvcml0eS1sYWJlbC11bmltcG9ydGFudCB7XFxuICBwYWRkaW5nOiA0cHggNnB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi5wcmlvcml0eS1sYWJlbC11cmdlbnQge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS11cmdlbnQtcHJpbWFyeS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11cmdlbnQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS11cmdlbnQtcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5wcmlvcml0eS1sYWJlbC1ub3JtYWwge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ub3JtYWwtcHJpbWFyeS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1ub3JtYWwtcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5wcmlvcml0eS1sYWJlbC11bmltcG9ydGFudCB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXVuaW1wb3J0YW50LXByaW1hcnktY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdW5pbXBvcnRhbnQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS11bmltcG9ydGFudC1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmVycm9yIHtcXG4gIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQiwrQkFBK0I7RUFDL0IsaUNBQWlDO0VBQ2pDLG9DQUFvQztFQUNwQyxzQ0FBc0M7RUFDdEMsK0JBQStCO0VBQy9CLGlDQUFpQztFQUNqQyxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiw2Q0FBNkM7RUFDN0MsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1QsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7O0FBRUE7OztFQUdFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7OztFQUdFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLCtDQUErQztFQUMvQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsK0NBQStDO0VBQy9DLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLDhDQUE4QztFQUM5QyxvREFBb0Q7RUFDcEQsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogI0JFRjI2NDtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjRjhGRkU4O1xcbiAgLS1ncmV5LXRleHQtY29sb3I6ICM5YTlhOWE7XFxuICAtLWxpZ2h0LWdyZXk6ICNjZGNkY2Q7XFxuICAtLWxpZ2h0ZXItZ3JleTogI2YxZjFmMTtcXG4gIC0tY2FyZC1jb2xvcjogI0ZGRkZGRjtcXG4gIC0tdXJnZW50LXByaW1hcnktY29sb3I6ICNGRjAwMDA7XFxuICAtLXVyZ2VudC1zZWNvbmRhcnktY29sb3I6ICNGRkRFREU7XFxuICAtLXVuaW1wb3J0YW50LXByaW1hcnktY29sb3I6ICM4Njg2ODY7XFxuICAtLXVuaW1wb3J0YW50LXNlY29uZGFyeS1jb2xvcjogI0Q1RDVENTtcXG4gIC0tbm9ybWFsLXByaW1hcnktY29sb3I6ICMwMDk1MkE7XFxuICAtLW5vcm1hbC1zZWNvbmRhcnktY29sb3I6ICM5NEZGQjI7XFxuICAtLWVycm9yLWNvbG9yOiAjYmQwMzAzO1xcbiAgLS1wb2ludGVyOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCAnUm9ib3RvJywgJ3NhbnMtc2VyaWYnO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmJvZHksIGgxLCBoMiwgaDMsIHAsIHVsLCBsaSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uZm9udC1sYXJnZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5mb250LW1lZGl1bSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmZvbnQtcmVndWxhciB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5mb250LXNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxufVxcblxcbi5wcmltYXJ5LWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uc2Vjb25kYXJ5LWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5ncmV5LWZvbnQge1xcbiAgY29sb3I6IHZhcigtLWdyZXktdGV4dC1jb2xvcik7XFxufVxcblxcbi5saWdodC1ncmV5IHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG59XFxuXFxuLnAtMjQge1xcbiAgcGFkZGluZzogMjRweDtcXG59XFxuXFxuLnAtNDgge1xcbiAgcGFkZGluZzogNDhweDtcXG59XFxuXFxuLm1iLTgge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4ubWItMTYge1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLm1iLTMyIHtcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxufVxcblxcbi5tYi00OCB7XFxuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xcbn1cXG5cXG4uZmxleC1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jY29udGFpbmVye1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS4xZnIgNWZyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI3NpZGViYXIgaDEge1xcbiAgbWFyZ2luLWJvdHRvbTogODRweDtcXG59XFxuXFxuI3Byb2plY3QtY29udGFpbmVyIHtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG59XFxuXFxuLm5hdi1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jcHJvamVjdHMgbGkge1xcbiAgY3Vyc29yOiB2YXIoLS1wb2ludGVyKTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdHMgbGk6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiNzaWRlYmFyIGgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNzaWRlYmFyIGgyOm50aC1jaGlsZChuKzEpIHtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbiNzaWRlYmFyIGgyOm50aC1vZi10eXBlKDIpIHtcXG4gIG1hcmdpbi10b3A6IDMycHg7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG4ge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiN0b2RvLWxpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1jb2x1bW5zOiAzNTBweDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBnYXA6IDI0cHg7XFxufVxcblxcbi50b2RvLWNhcmQge1xcbiAgcGFkZGluZzogMjRweCAyNHB4IDMycHggMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1jb2xvcik7XFxufVxcblxcbi5zdGF0dXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4udG9kby1jYXJkIGgzIHtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5jaGVja2xpc3QtY2lyY2xlIHtcXG4gIG1pbi13aWR0aDogMThweDtcXG4gIG1pbi1oZWlnaHQ6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGN1cnNvcjogdmFyKC0tcG9pbnRlcik7XFxufVxcblxcbi5jaGVja2xpc3QtZGl2aWRlIHtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcblxcbi5jaGVja2xpc3QtZGl2aWRlIGhyIHtcXG4gIGhlaWdodDogMXB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtZ3JleSk7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgY29sb3I6IHZhcigtLWdyZXktdGV4dC1jb2xvcik7XFxuICBjdXJzb3I6IHZhcigtLXBvaW50ZXIpO1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuICBwYWRkaW5nOiA2cHggOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxufVxcblxcbi5zdWJtaXQtdGFzay1idG4ge1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4udGFzay1mb3JtIHtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLm5vdGVzLWhlYWRpbmcge1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG59XFxuXFxuLmFkZC10b2RvLWJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDIyOSwgMjI5KTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgY3Vyc29yOiB2YXIoLS1wb2ludGVyKTtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuI3RvZG8tZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNjAlO1xcbn1cXG5cXG4jdG9kby1mb3JtLWNvbnRhaW5lciBpbnB1dCwgXFxuI3RvZG8tZm9ybS1jb250YWluZXIgc2VsZWN0LFxcbiN0b2RvLWZvcm0tY29udGFpbmVyIHRleHRhcmVhIHtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbiN0b2RvLWZvcm0tY29udGFpbmVyIHNlbGVjdCB7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuI3RvZG8tc3VibWl0LWJ0biB7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiN0b2RvLWZvcm0tY29udGFpbmVyIG9wdGlvbjpudGgtY2hpbGQobisxKSB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiN0b2RvLWZvcm0tY29udGFpbmVyIGJ1dHRvbiB7XFxuICB3aWR0aDogNDAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbiNwcm9qZWN0LW5hbWUtZm9ybSB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1jb250YWluZXIgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDBweCA4cHg7XFxuICBoZWlnaHQ6IDM3cHhcXG59XFxuXFxuLmNpcmNsZS1maWxsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi50YXNrLWRvbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByaW9yaXR5LWxhYmVsLXVyZ2VudCxcXG4ucHJpb3JpdHktbGFiZWwtbm9ybWFsLFxcbi5wcmlvcml0eS1sYWJlbC11bmltcG9ydGFudCB7XFxuICBwYWRkaW5nOiA0cHggNnB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi5wcmlvcml0eS1sYWJlbC11cmdlbnQge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS11cmdlbnQtcHJpbWFyeS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11cmdlbnQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS11cmdlbnQtcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5wcmlvcml0eS1sYWJlbC1ub3JtYWwge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ub3JtYWwtcHJpbWFyeS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1ub3JtYWwtcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5wcmlvcml0eS1sYWJlbC11bmltcG9ydGFudCB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXVuaW1wb3J0YW50LXByaW1hcnktY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdW5pbXBvcnRhbnQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS11bmltcG9ydGFudC1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmVycm9yIHtcXG4gIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB1c2VyIGZyb20gXCIuL3VzZXJcIjtcbmltcG9ydCBwcm9qZWN0RmFjdG9yeSBmcm9tICcuL3Byb2plY3QnXG5pbXBvcnQgdG9kb0ZhY3RvcnkgZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHRhc2tGYWN0b3J5IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB2aWV3IGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBsZXQgY3VycmVudFByb2plY3RJZCA9IHVzZXIuZ2V0UHJvamVjdElkQ291bnRlcigpO1xuXG4gIGNvbnN0IGluaXRpYWxpemVVc2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gJ1lvdXIgUHJvamVjdCc7XG4gICAgY29uc3QgcHJvamVjdERlc2MgPSAnVGhpcyBpcyB5b3VyIHByb2plY3QuIFRoaXMgdGV4dCBibHVyYiBpcyB5b3VyIHByb2plY3QgZGVzY3JpcHRpb24sIHB1dCBhbnl0aGluZyBoZXJlLic7XG4gICAgY29uc3QgcHJvamVjdElkID0gdXNlci5nZXRQcm9qZWN0SWRDb3VudGVyKCk7XG4gICAgY3VycmVudFByb2plY3RJZCA9IHVzZXIuZ2V0UHJvamVjdElkQ291bnRlcigpO1xuICAgIHVzZXIuaW5jcmVtZW50UHJvamVjdElkQ291bnRlcigpO1xuICAgIGNvbnN0IGZpcnN0UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHByb2plY3ROYW1lLCBwcm9qZWN0RGVzYywgcHJvamVjdElkKTtcbiAgICBmaXJzdFByb2plY3QuYmluZE9uVG9kb0xpc3RDaGFuZ2VkKG9uVG9kb0xpc3RDaGFuZ2VkKTtcbiAgICBjb25zdCB0b2RvSWQgPSBmaXJzdFByb2plY3QuZ2V0VG9kb0lkQ291bnRlcigpO1xuICAgIGZpcnN0UHJvamVjdC5pbmNyZW1lbnRUb2RvSWRDb3VudGVyKCk7XG4gICAgY29uc3QgdG9kb1RpdGxlID0gJ1RvIGRvJztcbiAgICBjb25zdCB0b2RvRGVzYyA9ICdUaGlzIGlzIGEgdG9kby4gQWRkIGNoZWNrbGlzdCB0YXNrcywgZHVlIGRhdGVzLCBhbmQgcHJpb3JpdGllcyBoZXJlLic7XG4gICAgY29uc3QgZHVlRGF0ZSA9ICdUdWVzLCAxMDogMzAgYW0nO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gJ1VyZ2VudCc7XG4gICAgY29uc3Qgbm90ZXMgPSAnQWRkIG5vdGVzIGFuZCBhbnkgYWRkaXRpb25hbCB0aG91Z2h0cyBoZXJlJztcbiAgICBjb25zdCBmaXJzdFRvZG8gPSB0b2RvRmFjdG9yeSh0b2RvSWQsIHRvZG9UaXRsZSwgdG9kb0Rlc2MsIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcyk7XG4gICAgY29uc3QgdGFza05hbWUgPSAnTWFrZSB5b3VyIGZpcnN0IHRhc2snO1xuICAgIGNvbnN0IGZpcnN0VGFzayA9IHRhc2tGYWN0b3J5KHRhc2tOYW1lLCBmaXJzdFRvZG8uZ2V0VGFza0lkQ291bnRlcigpKTtcbiAgICBmaXJzdFRvZG8uYWRkVGFzayhmaXJzdFRhc2spO1xuICAgIGZpcnN0VG9kby5pbmNyZW1lbnRUYXNrSWRDb3VudGVyKCk7XG4gICAgZmlyc3RQcm9qZWN0LmluaXRpYWxBZGRUb2RvKGZpcnN0VG9kbyk7XG4gICAgdXNlci5hZGRQcm9qZWN0KGZpcnN0UHJvamVjdCk7XG4gIH1cblxuICBjb25zdCBpbml0aWFsaXplU2lkZWJhclZpZXcgPSAoKSA9PiB7XG4gICAgdXNlci5nZXRQcm9qZWN0cygpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICB2aWV3LnNldFByb2plY3RMaXN0SXRlbShwcm9qZWN0LmdldE5hbWUoKSwgcHJvamVjdC5nZXRJZCgpKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBpbml0aWFsaXplUHJvamVjdFZpZXcgPSAoKSA9PiB7XG4gICAgaWYgKHVzZXIuZ2V0UHJvamVjdHMoKS5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSB1c2VyLmdldFByb2plY3RzKClbMF07XG4gICAgICB2aWV3LnNldEN1cnJlbnRQcm9qZWN0SWQocHJvamVjdC5nZXRJZCgpKTtcbiAgICAgIHZpZXcuc2V0UHJvamVjdFRpdGxlKHByb2plY3QuZ2V0TmFtZSgpKTtcbiAgICAgIHZpZXcuc2V0UHJvamVjdERlc2NyaXB0aW9uKHByb2plY3QuZ2V0RGVzY3JpcHRpb24oKSk7XG4gICAgICB2aWV3LnNldEFkZFRvZG9CdXR0b24oKTtcbiAgICAgIGFkZFRvZG9zKHByb2plY3QpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsb2FkUHJvamVjdCA9IChpZCkgPT4ge1xuICAgIHZpZXcucmVzZXRQcm9qZWN0VmlldygpO1xuICAgIGNvbnN0IHByb2plY3RzID0gdXNlci5nZXRQcm9qZWN0cygpO1xuICAgIGNvbnN0IHByb2plY3RUYXJnZXQgPSBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5nZXRJZCgpID09PSBpZCk7XG4gICAgY3VycmVudFByb2plY3RJZCA9IGlkO1xuICAgIHZpZXcuc2V0Q3VycmVudFByb2plY3RJZChwcm9qZWN0VGFyZ2V0LmdldElkKCkpO1xuICAgIHZpZXcuc2V0UHJvamVjdFRpdGxlKHByb2plY3RUYXJnZXQuZ2V0TmFtZSgpKTtcbiAgICB2aWV3LnNldFByb2plY3REZXNjcmlwdGlvbihwcm9qZWN0VGFyZ2V0LmdldERlc2NyaXB0aW9uKCkpO1xuICAgIHZpZXcuc2V0QWRkVG9kb0J1dHRvbigpO1xuICAgIGFkZFRvZG9zKHByb2plY3RUYXJnZXQpO1xuICB9XG5cbiAgY29uc3QgaW5pdGlhbGl6ZVZpZXcgPSAoKSA9PiB7XG4gICAgaW5pdGlhbGl6ZVNpZGViYXJWaWV3KCk7XG4gICAgaW5pdGlhbGl6ZVByb2plY3RWaWV3KCk7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9kb3MgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBwcm9qZWN0LmdldFRvZG9MaXN0KCk7XG4gICAgbGlzdC5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgY29uc3QgdG9kb09iaiA9IHtcbiAgICAgICAgcHJvamVjdElkOiBwcm9qZWN0LmdldElkKCksXG4gICAgICAgIHRvZG9JZDogdG9kby5nZXRJZCgpLFxuICAgICAgICB0aXRsZTogdG9kby5nZXRUaXRsZSgpLFxuICAgICAgICBkdWU6IHRvZG8uZ2V0RHVlRGF0ZSgpLFxuICAgICAgICBwcmlvcml0eTogdG9kby5nZXRQcmlvcml0eSgpLFxuICAgICAgICBkZXNjOiB0b2RvLmdldERlc2NyaXB0aW9uKCksXG4gICAgICAgIHRhc2tzOiB0b2RvLmdldENoZWNrTGlzdCgpLm1hcCh0YXNrID0+ICh7XG4gICAgICAgICAgbmFtZTogdGFzay5nZXROYW1lKCksXG4gICAgICAgICAgaWQ6IHRhc2suZ2V0SWQoKSxcbiAgICAgICAgICBpc0NvbXBsZXRlZDogdGFzay5jaGVja0NvbXBsZXRlZCgpXG4gICAgICAgIH0pKSxcbiAgICAgICAgbm90ZXM6IHRvZG8uZ2V0Tm90ZXMoKVxuICAgICAgfTtcbiAgICAgIHRvZG8uYmluZE9uVGFza0xpc3RDaGFuZ2Uob25UYXNrTGlzdENoYW5nZWQpO1xuICAgICAgdmlldy5hZGRUb2RvQ2FyZCh0b2RvT2JqKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBhZGRTdWJtaXRQcm9qZWN0RXZlbnQgPSAoKSA9PiB7XG4gICAgdmlldy5iaW5kU3VibWl0UHJvamVjdChoYW5kbGVTdWJtaXRQcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBhZGRTdWJtaXRUb2RvRXZlbnQgPSAoKSA9PiB7XG4gICAgdmlldy5iaW5kU3VibWl0VG9kbyhoYW5kbGVTdWJtaXRUb2RvKTtcbiAgfTtcblxuICAvLyBUZW1wb3JhcnkgaW1wbGVtZW50YXRpb24uIEluIGZ1dHVyZSByZXNldCBvbmx5IHRoZSB0YXNrIGxpc3Qgb2YgYVxuICAvLyB0b2RvIGNhcmQgaW5zdGVhZCBvZiBhbGwgdGhlIHRvZG8gY2FyZHMgaW4gYSBwcm9qZWN0LlxuICBjb25zdCBvblRhc2tMaXN0Q2hhbmdlZCA9ICh0b2RvSWQpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHVzZXIuZ2V0UHJvamVjdEJ5SWQoY3VycmVudFByb2plY3RJZCk7XG4gICAgdmlldy5yZXNldFRvZG9zKCk7XG4gICAgYWRkVG9kb3MoY3VycmVudFByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IG9uVG9kb0xpc3RDaGFuZ2VkID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gdXNlci5nZXRQcm9qZWN0QnlJZChjdXJyZW50UHJvamVjdElkKTtcbiAgICBjb25zdCB0b2RvTGlzdCA9IGN1cnJlbnRQcm9qZWN0LmdldFRvZG9MaXN0KCk7XG4gICAgY29uc3QgYWRkZWRUb2RvID0gdG9kb0xpc3RbdG9kb0xpc3QubGVuZ3RoLTFdO1xuICAgIGNvbnN0IHRvZG9PYmogPSB7XG4gICAgICBwcm9qZWN0SWQ6IGN1cnJlbnRQcm9qZWN0SWQsXG4gICAgICB0b2RvSWQ6IGFkZGVkVG9kby5nZXRJZCgpLFxuICAgICAgdGl0bGU6IGFkZGVkVG9kby5nZXRUaXRsZSgpLFxuICAgICAgZHVlOiBhZGRlZFRvZG8uZ2V0RHVlRGF0ZSgpLFxuICAgICAgcHJpb3JpdHk6IGFkZGVkVG9kby5nZXRQcmlvcml0eSgpLFxuICAgICAgZGVzYzogYWRkZWRUb2RvLmdldERlc2NyaXB0aW9uKCksXG4gICAgICB0YXNrczogYWRkZWRUb2RvLmdldENoZWNrTGlzdCgpLm1hcCh0YXNrID0+IHRhc2suZ2V0TmFtZSgpKSxcbiAgICAgIG5vdGVzOiBhZGRlZFRvZG8uZ2V0Tm90ZXMoKVxuICAgIH1cbiAgICB2aWV3LmFkZFRvZG9DYXJkKHRvZG9PYmopO1xuICB9O1xuXG4gIGNvbnN0IG9uUHJvamVjdExpc3RDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHMgPSB1c2VyLmdldFByb2plY3RzKCk7XG4gICAgY29uc3QgcHJvamVjdFRhcmdldCA9IHByb2plY3RzW3Byb2plY3RzLmxlbmd0aC0xXTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3RUYXJnZXQuZ2V0TmFtZSgpO1xuICAgIGNvbnN0IHByb2plY3RJZCA9IHByb2plY3RUYXJnZXQuZ2V0SWQoKTtcbiAgICB2aWV3LnNldFByb2plY3RMaXN0SXRlbShwcm9qZWN0TmFtZSwgcHJvamVjdElkKTtcbiAgfTtcblxuICBjb25zdCBvblByb2plY3RTd2l0Y2ggPSAoaWQpID0+IHtcbiAgICBsb2FkUHJvamVjdChpZCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0VGFzayA9IChwcm9qZWN0SWQsIHRvZG9JZCwgdGFza05hbWUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0VGFyZ2V0ID0gdXNlci5nZXRQcm9qZWN0QnlJZChwcm9qZWN0SWQpO1xuICAgIGNvbnN0IHRvZG9UYXJnZXQgPSBwcm9qZWN0VGFyZ2V0LmdldFRvZG9CeUlkKHRvZG9JZCk7XG4gICAgY29uc3QgbmV3VGFzayA9IHRhc2tGYWN0b3J5KHRhc2tOYW1lLCB0b2RvVGFyZ2V0LmdldFRhc2tJZENvdW50ZXIoKSk7XG4gICAgdG9kb1RhcmdldC5pbmNyZW1lbnRUYXNrSWRDb3VudGVyKCk7XG4gICAgdG9kb1RhcmdldC5hZGRUYXNrKG5ld1Rhc2spO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0VG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSB1c2VyLmdldFByb2plY3RCeUlkKHRvZG8ucHJvamVjdElkKTtcbiAgICBjb25zdCB0b2RvSWQgPSBjdXJyZW50UHJvamVjdC5nZXRUb2RvSWRDb3VudGVyKCk7XG4gICAgY3VycmVudFByb2plY3QuaW5jcmVtZW50VG9kb0lkQ291bnRlcigpO1xuICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvRmFjdG9yeShcbiAgICAgIHRvZG9JZCxcbiAgICAgIHRvZG8udGl0bGUsXG4gICAgICB0b2RvLmRlc2MsXG4gICAgICB0b2RvLmR1ZSxcbiAgICAgIHRvZG8ucHJpb3JpdHksXG4gICAgICB0b2RvLm5vdGVzXG4gICAgKTtcbiAgICBuZXdUb2RvLmJpbmRPblRhc2tMaXN0Q2hhbmdlKG9uVGFza0xpc3RDaGFuZ2VkKTtcbiAgICBjdXJyZW50UHJvamVjdC5hZGRUb2RvKG5ld1RvZG8pO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0UHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgZGVzYyA9ICdUaGlzIGlzIHlvdXIgcHJvamVjdC4gVGhpcyB0ZXh0IGJsdXJiIGlzIHlvdXIgcHJvamVjdCBkZXNjcmlwdGlvbiwgcHV0IGFueXRoaW5nIGhlcmUuJztcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkobmFtZSwgZGVzYywgdXNlci5nZXRQcm9qZWN0SWRDb3VudGVyKCkpO1xuICAgIG5ld1Byb2plY3QuYmluZE9uVG9kb0xpc3RDaGFuZ2VkKG9uVG9kb0xpc3RDaGFuZ2VkKTtcbiAgICB1c2VyLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgdXNlci5pbmNyZW1lbnRQcm9qZWN0SWRDb3VudGVyKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVGFza1RvZ2dsZSA9ICh0b2RvSWQsIHRhc2tJZCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSB1c2VyLmdldFByb2plY3RCeUlkKGN1cnJlbnRQcm9qZWN0SWQpO1xuICAgIGNvbnN0IHRvZG8gPSBwcm9qZWN0LmdldFRvZG9CeUlkKHRvZG9JZCk7XG4gICAgY29uc3QgdGFzayA9IHRvZG8uZ2V0VGFza0J5SWQodGFza0lkKTtcbiAgICB0YXNrLnRvZ2dsZUNvbXBsZXRlKCk7XG4gIH07XG5cblxuICBcbiAgaW5pdGlhbGl6ZVVzZXIoKTtcbiAgdmlldy5iaW5kQWRkVGFzayhoYW5kbGVTdWJtaXRUYXNrKTtcbiAgdmlldy5iaW5kQWRkVG9kbyhhZGRTdWJtaXRUb2RvRXZlbnQpO1xuICB2aWV3LmJpbmRBZGRQcm9qZWN0KGFkZFN1Ym1pdFByb2plY3RFdmVudCk7XG4gIHVzZXIuYmluZFByb2plY3RMaXN0Q2hhbmdlZChvblByb2plY3RMaXN0Q2hhbmdlKTtcbiAgdmlldy5iaW5kQ2hhbmdlUHJvamVjdChvblByb2plY3RTd2l0Y2gpO1xuICB2aWV3LmJpbmRUb2dnbGVUYXNrKGhhbmRsZVRhc2tUb2dnbGUpO1xuXG4gIHJldHVybiB7IGluaXRpYWxpemVWaWV3IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjb250cm9sbGVyOyIsImNvbnN0IHByb2plY3RGYWN0b3J5ID0gKG5hbWUsIGRlc2NyaXB0aW9uLCBpZCkgPT4ge1xuICBjb25zdCB0b2RvTGlzdCA9IFtdO1xuICBsZXQgdG9kb0lkQ291bnRlciA9IDA7XG4gIGxldCBvblRvZG9MaXN0Q2hhbmdlZCA9ICgpID0+IHt9O1xuXG4gIGNvbnN0IGluY3JlbWVudFRvZG9JZENvdW50ZXIgPSAoKSA9PiB7XG4gICAgdG9kb0lkQ291bnRlciArPSAxO1xuICB9O1xuICBjb25zdCBnZXRUb2RvQnlJZCA9IChpZCkgPT4ge1xuICAgIHJldHVybiB0b2RvTGlzdC5maW5kKHRvZG8gPT4gdG9kby5nZXRJZCgpID09PSBpZCk7XG4gIH1cbiAgY29uc3QgZ2V0VG9kb0lkQ291bnRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gdG9kb0lkQ291bnRlcjtcbiAgfTtcbiAgY29uc3QgY29weVByb2plY3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RGYWN0b3J5KG5hbWUsIGRlc2NyaXB0aW9uKTtcbiAgfTtcblxuICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgIHJldHVybiBuYW1lO1xuICB9O1xuXG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgfTtcblxuICBjb25zdCBnZXRUb2RvTGlzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gdG9kb0xpc3Q7XG4gIH07XG5cbiAgY29uc3QgZWRpdE5hbWUgPSAobmV3TmFtZSkgPT4ge1xuICAgIG5hbWUgPSBuZXdOYW1lO1xuICB9O1xuXG4gIGNvbnN0IGVkaXREZXNjcmlwdGlvbiA9IChuZXdEZXNjKSA9PiB7XG4gICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjO1xuICB9O1xuXG4gIGNvbnN0IGluaXRpYWxBZGRUb2RvID0gKHRvZG8pID0+IHtcbiAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xuICAgIHRvZG9MaXN0LnB1c2godG9kbyk7XG4gICAgb25Ub2RvTGlzdENoYW5nZWQoKTtcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdG9kb0xpc3QuaW5kZXhPZih0b2RvKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdG9kb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0SWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGlkO1xuICB9XG5cbiAgY29uc3Qgc2V0SWQgPSAobmV3SWQpID0+IHtcbiAgICBpZCA9IG5ld0lkO1xuICB9XG5cbiAgY29uc3QgYmluZE9uVG9kb0xpc3RDaGFuZ2VkID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgb25Ub2RvTGlzdENoYW5nZWQgPSBjYWxsYmFjaztcbiAgfTtcblxuICByZXR1cm4geyBcbiAgICBpbmNyZW1lbnRUb2RvSWRDb3VudGVyLFxuICAgIGdldFRvZG9CeUlkLFxuICAgIGdldFRvZG9JZENvdW50ZXIsXG4gICAgZ2V0TmFtZSxcbiAgICBnZXREZXNjcmlwdGlvbixcbiAgICBnZXRUb2RvTGlzdCxcbiAgICBjb3B5UHJvamVjdCxcbiAgICBlZGl0TmFtZSxcbiAgICBlZGl0RGVzY3JpcHRpb24sXG4gICAgaW5pdGlhbEFkZFRvZG8sXG4gICAgYWRkVG9kbyxcbiAgICByZW1vdmVUb2RvLFxuICAgIGdldElkLFxuICAgIHNldElkLFxuICAgIGJpbmRPblRvZG9MaXN0Q2hhbmdlZFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdEZhY3Rvcnk7IiwiY29uc3QgdGFza0ZhY3RvcnkgPSAobmFtZSwgaWQpID0+IHtcbiAgbGV0IGlzQ29tcGxldGVkID0gZmFsc2U7XG5cbiAgY29uc3QgZ2V0SWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGlkO1xuICB9XG4gIGNvbnN0IHNldElkID0gKG5ld0lkKSA9PiB7XG4gICAgaWQgPSBuZXdJZDtcbiAgfVxuICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgIHJldHVybiBuYW1lO1xuICB9O1xuICBjb25zdCBjaGVja0NvbXBsZXRlZCA9ICgpID0+IHtcbiAgICByZXR1cm4gaXNDb21wbGV0ZWQ7XG4gIH07XG4gIGNvbnN0IGVkaXROYW1lID0gKG5ld05hbWUpID0+IHtcbiAgICBuYW1lID0gbmV3TmFtZTtcbiAgfTtcbiAgY29uc3QgdG9nZ2xlQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgaXNDb21wbGV0ZWQgPSAhaXNDb21wbGV0ZWQ7XG4gICAgY29uc29sZS5sb2coe2lkLCBpc0NvbXBsZXRlZH0pXG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0SWQsIHNldElkLCBnZXROYW1lLCBjaGVja0NvbXBsZXRlZCwgZWRpdE5hbWUsIHRvZ2dsZUNvbXBsZXRlfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tGYWN0b3J5OyIsImNvbnN0IHRvZG9GYWN0b3J5ID0gKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcykgPT4ge1xuICBjb25zdCBjaGVja0xpc3QgPSBbXTtcbiAgbGV0IHRhc2tJZENvdW50ZXIgPSAwO1xuICBsZXQgb25UYXNrTGlzdENoYW5nZSA9ICgpID0+IHt9O1xuXG4gIGNvbnN0IGdldFRhc2tCeUlkID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIGNoZWNrTGlzdC5maW5kKHRhc2sgPT4gdGFzay5nZXRJZCgpID09PSBpZCk7XG4gIH1cbiAgY29uc3QgZ2V0VGFza0lkQ291bnRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gdGFza0lkQ291bnRlcjtcbiAgfTtcbiAgY29uc3QgaW5jcmVtZW50VGFza0lkQ291bnRlciA9ICgpID0+IHtcbiAgICB0YXNrSWRDb3VudGVyICs9IDE7XG4gIH07XG4gIGNvbnN0IGdldElkID0gKCkgPT4ge1xuICAgIHJldHVybiBpZDtcbiAgfTtcbiAgY29uc3Qgc2V0SWQgPSAobmV3SWQpID0+IHtcbiAgICBpZCA9IG5ld0lkO1xuICB9O1xuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGl0bGU7XG4gIH07XG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgfTtcbiAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gZHVlRGF0ZTtcbiAgfTtcbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByaW9yaXR5O1xuICB9O1xuICBjb25zdCBnZXROb3RlcyA9ICgpID0+IHtcbiAgICByZXR1cm4gbm90ZXM7XG4gIH07XG4gIGNvbnN0IGdldENoZWNrTGlzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gY2hlY2tMaXN0O1xuICB9XG4gIGNvbnN0IGVkaXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuICAgIHRpdGxlID0gbmV3VGl0bGU7XG4gIH07XG4gIGNvbnN0IGVkaXREZXNjcmlwdGlvbiA9IChuZXdEZXNjKSA9PiB7XG4gICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjO1xuICB9O1xuICBjb25zdCBlZGl0RHVlRGF0ZSA9IChuZXdEdWVEYXRlKSA9PiB7XG4gICAgZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gIH07XG4gIGNvbnN0IGVkaXROb3RlcyA9IChuZXdOb3RlcykgPT4ge1xuICAgIG5vdGVzID0gbmV3Tm90ZXM7XG4gIH07XG4gIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge1xuICAgIGNoZWNrTGlzdC5wdXNoKHRhc2spO1xuICAgIG9uVGFza0xpc3RDaGFuZ2UoaWQpO1xuICB9O1xuICBjb25zdCByZW1vdmVUYXNrID0gKHRhc2spID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGNoZWNrTGlzdC5pbmRleE9mKHRhc2spO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBjaGVja0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYmluZE9uVGFza0xpc3RDaGFuZ2UgPSAoY2FsbGJhY2spID0+IHtcbiAgICBvblRhc2tMaXN0Q2hhbmdlID0gY2FsbGJhY2s7XG4gIH07XG4gIFxuICByZXR1cm4ge1xuICAgIGdldFRhc2tCeUlkLFxuICAgIGdldFRhc2tJZENvdW50ZXIsXG4gICAgaW5jcmVtZW50VGFza0lkQ291bnRlcixcbiAgICBnZXRJZCxcbiAgICBzZXRJZCxcbiAgICBnZXRUaXRsZSxcbiAgICBnZXREZXNjcmlwdGlvbixcbiAgICBnZXREdWVEYXRlLFxuICAgIGdldFByaW9yaXR5LFxuICAgIGdldE5vdGVzLFxuICAgIGdldENoZWNrTGlzdCxcbiAgICBlZGl0VGl0bGUsXG4gICAgZWRpdERlc2NyaXB0aW9uLFxuICAgIGVkaXREdWVEYXRlLFxuICAgIGVkaXROb3RlcyxcbiAgICBhZGRUYXNrLFxuICAgIHJlbW92ZVRhc2ssXG4gICAgYmluZE9uVGFza0xpc3RDaGFuZ2VcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kb0ZhY3Rvcnk7IiwiaW1wb3J0IHRvZG9GYWN0b3J5IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB0YXNrRmFjdG9yeSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgcHJvamVjdEZhY3RvcnkgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jb25zdCB1c2VyID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcbiAgbGV0IHByb2plY3RJZENvdW50ZXIgPSAwO1xuICBsZXQgb25Qcm9qZWN0c0xpc3RDaGFuZ2VkID0gKCkgPT4ge307XG5cbiAgY29uc3QgaW5jcmVtZW50UHJvamVjdElkQ291bnRlciA9ICgpID0+IHtcbiAgICBwcm9qZWN0SWRDb3VudGVyICs9IDE7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdElkQ291bnRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdElkQ291bnRlcjtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdHM7XG4gIH1cbiAgY29uc3QgZ2V0UHJvamVjdEJ5SWQgPSAoaWQpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuZ2V0SWQoKSA9PT0gaWQpO1xuICB9O1xuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuXG4gICAgb25Qcm9qZWN0c0xpc3RDaGFuZ2VkKCk7XG4gIH07XG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYmluZFByb2plY3RMaXN0Q2hhbmdlZCA9IChjYWxsYmFjaykgPT4ge1xuICAgIG9uUHJvamVjdHNMaXN0Q2hhbmdlZCA9IGNhbGxiYWNrO1xuICB9XG5cbiAgcmV0dXJuIHsgXG4gICAgZ2V0UHJvamVjdHMsIFxuICAgIGFkZFByb2plY3QsIFxuICAgIHJlbW92ZVByb2plY3QsIFxuICAgIGJpbmRQcm9qZWN0TGlzdENoYW5nZWQsXG4gICAgZ2V0UHJvamVjdEJ5SWQsXG4gICAgaW5jcmVtZW50UHJvamVjdElkQ291bnRlcixcbiAgICBnZXRQcm9qZWN0SWRDb3VudGVyIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyOyIsImNvbnN0IHZpZXdIZWxwZXJzID0gKCgpID0+IHtcblxuICAvLyBVc2VkIGZ1bmN0aW9uIGluc3RlYWQgb2YgYXJyb3cgZnVuY3Rpb24gYmVjYXVzZSBcbiAgLy8gdmFyaWFibGUgYXJndW1lbnRzIGlzIGJ1Z2d5IHdpdGggYXJyb3cgZnVuY3Rpb25zLlxuXG4gIGZ1bmN0aW9uIGNyZWF0ZURpdigpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7YXJndW1lbnRzW2ldfWApO1xuICAgIH1cbiAgICByZXR1cm4gZGl2O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUlkRGl2KGlkKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlkID0gaWQ7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGAke2FyZ3VtZW50c1tpXX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpdjtcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVJbnB1dEZvcm0oaWQsIHBsYWNlaG9sZGVyLCBjb250YWluZXIpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaWYgKGlkICE9PSAnbm9uZScpIHtcbiAgICAgIGlucHV0LmlkID0gaWQ7XG4gICAgfVxuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgZm9yIChsZXQgaSA9IDM7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoYCR7YXJndW1lbnRzW2ldfWApO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHJldHVybiBpbnB1dDtcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVUZXh0QXJlYUZvcm0oaWQsIHBsYWNlaG9sZGVyLCBjb250YWluZXIpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgaW5wdXQuaWQgPSBpZDtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgIGZvciAobGV0IGkgPSAzOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKGAke2FyZ3VtZW50c1tpXX1gKTtcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH07XG5cbiAgZnVuY3Rpb24gY3JlYXRlQnV0dG9uRm9ybShlbGVtZW50LCBpZCwgdGV4dCwgY29udGFpbmVyKSB7XG4gICAgbGV0IGJ0bjtcbiAgICBpZiAoZWxlbWVudCA9PT0gJ2RpdicpIHtcbiAgICAgIGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gJ2J1dHRvbicpIHtcbiAgICAgIGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIH1cbiAgICBidG4uaWQgPSBpZDtcbiAgICBidG4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGZvciAobGV0IGkgPSA0OyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChgJHthcmd1bWVudHNbaV19YCk7XG4gICAgfVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pO1xuICAgIHJldHVybiBidG47XG4gIH07XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2VsZWN0Rm9ybShpZCwgY29udGFpbmVyLCB0ZXh0KSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc2VsZWN0LmlkID0gaWQ7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnZhbHVlID0gJyc7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICBmb3IgKGxldCBpID0gMzsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgb3B0aW9ucy52YWx1ZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIG9wdGlvbnMudGV4dENvbnRlbnQgPSBhcmd1bWVudHNbaV07XG4gICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9ucyk7XG4gICAgfVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIGluc2VydFBvc2l0aW9uIGlzICdiZWZvcmUnLCBhcmd1bWVudFs0XSBzaG91bGQgYmUgdGhlXG4gICAqIG5vZGUgdG8gaW5zZXJ0IGJlZm9yZS5cbiAgICogSWYgaW5zZXJ0UG9zaXRpb24gaXMgJ2FmdGVyJyBhbmQgdGhlcmUgYXJlIGNsYXNzZXMgdG8gYWRkLFxuICAgKiBhcmd1bWVudFs0XSBzaG91bGQgYmUgZmlsbGVkIHdpdGggYW55IHZhbHVlLlxuICAgKi9cbiAgZnVuY3Rpb24gY3JlYXRlVGV4dChjb250YWluZXIsIGluc2VydFBvc2l0aW9uLCBlbGVtZW50LCB0ZXh0KSB7XG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke2VsZW1lbnR9YCk7XG4gICAgdGV4dEVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGZvciAobGV0IGkgPSA1OyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0ZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2FyZ3VtZW50c1tpXX1gKTtcbiAgICB9XG4gICAgaWYgKGluc2VydFBvc2l0aW9uID09PSAnYmVmb3JlJykge1xuICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZSh0ZXh0RWxlbWVudCwgYXJndW1lbnRzWzRdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRFbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHRleHRFbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVEaXYsXG4gICAgY3JlYXRlSWREaXYsXG4gICAgY3JlYXRlSW5wdXRGb3JtLFxuICAgIGNyZWF0ZVRleHRBcmVhRm9ybSxcbiAgICBjcmVhdGVCdXR0b25Gb3JtLFxuICAgIGNyZWF0ZVNlbGVjdEZvcm0sXG4gICAgY3JlYXRlVGV4dFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdmlld0hlbHBlcnM7IiwiaW1wb3J0IGhlbHBlciBmcm9tICcuL3ZpZXctaGVscGVycyc7XG5cbmNvbnN0IHZpZXcgPSAoKCkgPT4ge1xuICBsZXQgY3VycmVudFByb2plY3RJZDtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyJyk7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJyk7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QtYnRuJyk7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1jb250YWluZXInKTtcbiAgbGV0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tbGlzdCcpO1xuICBjb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXR0aW5ncycpO1xuICBsZXQgc2hvd1Byb2plY3RGb3JtRXZlbnQgPSAoKSA9PiB7fTtcbiAgbGV0IHNldFRvZG9Gb3JtRXZlbnQgPSAoKSA9PiB7fTtcbiAgbGV0IHNldFByb2plY3RTd2l0Y2hFdmVudCA9ICgpID0+IHt9O1xuICBsZXQgYWRkVG9kb0V2ZW50ID0gKCkgPT4ge307XG4gIGxldCBhZGRUYXNrRXZlbnQgPSAoKSA9PiB7fTtcbiAgbGV0IHRvZ2dsZVRhc2tFdmVudCA9ICgpID0+IHt9O1xuXG4gIGNvbnN0IHNldEN1cnJlbnRQcm9qZWN0SWQgPSAoaWQpID0+IHtcbiAgICBjdXJyZW50UHJvamVjdElkID0gaWQ7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRQcm9qZWN0VmlldyA9ICgpID0+IHtcbiAgICBsZXQgZWxlbWVudCA9IHByb2plY3RDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZDtcbiAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgcHJvamVjdENvbnRhaW5lci5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgIGVsZW1lbnQgPSBwcm9qZWN0Q29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgfVxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVscGVyLmNyZWF0ZUlkRGl2KCd0b2RvLWxpc3QnKSk7XG4gICAgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1saXN0Jyk7XG4gIH07XG5cbiAgY29uc3Qgc2V0UHJvamVjdExpc3RJdGVtID0gKHByb2plY3QsIHByb2plY3RJZCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgcHJvamVjdExpc3RJdGVtLnNldEF0dHJpYnV0ZSgncHJvamVjdC1pZCcsIHByb2plY3RJZCk7XG4gICAgcHJvamVjdExpc3RJdGVtLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICBwcm9qZWN0cy5pbnNlcnRCZWZvcmUocHJvamVjdExpc3RJdGVtLCBhZGRQcm9qZWN0QnV0dG9uKTtcbiAgICBwcm9qZWN0TGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAocHJvamVjdElkICE9PSBjdXJyZW50UHJvamVjdElkKSB7XG4gICAgICAgIHNldFByb2plY3RTd2l0Y2hFdmVudChwcm9qZWN0SWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNldFByb2plY3RUaXRsZSA9ICh0aXRsZSkgPT4ge1xuICAgIGhlbHBlci5jcmVhdGVUZXh0KHByb2plY3RDb250YWluZXIsICdiZWZvcmUnLCAnaDInLCB0aXRsZSwgdG9kb0xpc3QsICdmb250LW1lZGl1bScsICdtYi0xNicpO1xuICB9O1xuXG4gIGNvbnN0IHNldFByb2plY3REZXNjcmlwdGlvbiA9IChkZXNjcmlwdGlvbikgPT4ge1xuICAgIGhlbHBlci5jcmVhdGVUZXh0KHByb2plY3RDb250YWluZXIsICdiZWZvcmUnLCAncCcsIGRlc2NyaXB0aW9uLCB0b2RvTGlzdCwgJ2ZvbnQtcmVndWxhcicsICdtYi00OCcpO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0VG9kb3MgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9kb0xpc3RJdGVtcyA9IHRvZG9MaXN0LmNoaWxkcmVuO1xuICAgIGNvbnN0IGxpc3RMZW5ndGggPSB0b2RvTGlzdEl0ZW1zLmxlbmd0aC0xO1xuICAgIGxldCBpID0gMDtcbiAgICB3aGlsZSAoaSA8IGxpc3RMZW5ndGgpIHtcbiAgICAgIHRvZG9MaXN0LnJlbW92ZUNoaWxkKHRvZG9MaXN0SXRlbXNbMF0pO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXRUb2RvVGl0bGUgPSAodGl0bGUsIHRvZG9DYXJkKSA9PiB7XG4gICAgaGVscGVyLmNyZWF0ZVRleHQodG9kb0NhcmQsICdhZnRlcicsICdoMicsIHRpdGxlLCAnbm9uZScsICdmb250LW1lZGl1bScsICdtYi0xNicpO1xuICB9O1xuXG4gIGNvbnN0IHNldFRvZG9TdGF0dXMgPSAoZHVlRGF0ZSwgcHJpb3JpdHksIHRvZG9DYXJkKSA9PiB7XG4gICAgY29uc3Qgc3RhdHVzID0gaGVscGVyLmNyZWF0ZURpdignbWItMTYnLCAnc3RhdHVzLWNvbnRhaW5lcicpXG4gICAgaGVscGVyLmNyZWF0ZVRleHQoc3RhdHVzLCAnYWZ0ZXInLCAncCcsIGBEdWU6ICR7ZHVlRGF0ZX1gLCAnbm9uZScsICdmb250LXNtYWxsJyk7XG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGhlbHBlci5jcmVhdGVUZXh0KHN0YXR1cywgJ2FmdGVyJywgJ3AnLCBwcmlvcml0eSwgJ25vbmUnLCAnZm9udC1zbWFsbCcpO1xuICAgIGlmIChwcmlvcml0eS50b0xvd2VyQ2FzZSgpID09PSAndXJnZW50Jykge1xuICAgICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sYWJlbC11cmdlbnQnKTtcbiAgICB9IGVsc2UgaWYgKHByaW9yaXR5LnRvTG93ZXJDYXNlKCkgPT09ICdub3JtYWwnKSB7XG4gICAgICBwcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxhYmVsLW5vcm1hbCcpO1xuICAgIH0gZWxzZSBpZiAocHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gJ3VuaW1wb3J0YW50Jykge1xuICAgICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sYWJlbC11bmltcG9ydGFudCcpO1xuICAgIH1cbiAgICB0b2RvQ2FyZC5hcHBlbmRDaGlsZChzdGF0dXMpO1xuICB9O1xuXG4gIGNvbnN0IHNldFRvZG9EZXNjcmlwdGlvbiA9IChkZXNjLCB0b2RvQ2FyZCkgPT4ge1xuICAgIGhlbHBlci5jcmVhdGVUZXh0KHRvZG9DYXJkLCAnYWZ0ZXInLCAncCcsIGRlc2MsICdub25lJywgJ21iLTgnKTtcbiAgfTtcblxuICBjb25zdCBzZXRUYXNrID0gKHRhc2ssIGNvbnRhaW5lcikgPT4ge1xuICAgIGNvbnN0IHRhc2tOYW1lID0gaGVscGVyLmNyZWF0ZVRleHQoY29udGFpbmVyLCAnYWZ0ZXInLCAncCcsIHRhc2spO1xuICAgIHJldHVybiB0YXNrTmFtZTtcbiAgfTtcblxuICBjb25zdCBzZXRUYXNrQ2hlY2tDaXJjbGUgPSAodG9kb0lkLCBjb250YWluZXIsIHRhc2tFbGVtZW50LCB0YXNrT2JqKSA9PiB7XG4gICAgY29uc3QgY2hlY2tsaXN0Q2lyY2xlID0gaGVscGVyLmNyZWF0ZURpdignY2hlY2tsaXN0LWNpcmNsZScpO1xuICAgIGlmICh0YXNrT2JqLmlzQ29tcGxldGVkKSB7XG4gICAgICBjaGVja2xpc3RDaXJjbGUuY2xhc3NMaXN0LmFkZCgnY2lyY2xlLWZpbGxlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGVja2xpc3RDaXJjbGUuY2xhc3NMaXN0LnJlbW92ZSgnY2lyY2xlLWZpbGxlZCcpO1xuICAgIH1cbiAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGNoZWNrbGlzdENpcmNsZSwgdGFza0VsZW1lbnQpO1xuICAgIGNoZWNrbGlzdENpcmNsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNoZWNrbGlzdENpcmNsZS5jbGFzc0xpc3QudG9nZ2xlKCdjaXJjbGUtZmlsbGVkJyk7XG4gICAgICB0YXNrRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCd0YXNrLWRvbmUnKTtcbiAgICAgIHRvZ2dsZVRhc2tFdmVudCh0b2RvSWQsIHRhc2tPYmouaWQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNldFRvZG9UYXNrcyA9ICh0b2RvSWQsIHRhc2tzLCB0b2RvQ2FyZCkgPT4ge1xuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gaGVscGVyLmNyZWF0ZURpdigndGFzay1jb250YWluZXInKVxuICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBzZXRUYXNrKHRhc2submFtZSwgdGFza0NvbnRhaW5lcik7XG4gICAgICBpZiAodGFzay5pc0NvbXBsZXRlZCkge1xuICAgICAgICB0YXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrLWRvbmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stZG9uZScpO1xuICAgICAgfVxuICAgICAgc2V0VGFza0NoZWNrQ2lyY2xlKHRvZG9JZCwgdGFza0NvbnRhaW5lciwgdGFza0VsZW1lbnQsIHRhc2spO1xuICAgICAgdG9kb0NhcmQuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gICAgICBjb25zdCBkaXZpZGVyID0gaGVscGVyLmNyZWF0ZURpdignY2hlY2tsaXN0LWRpdmlkZScpO1xuICAgICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICAgICAgZGl2aWRlci5hcHBlbmRDaGlsZChocik7XG4gICAgICB0b2RvQ2FyZC5hcHBlbmRDaGlsZChkaXZpZGVyKTtcbiAgICB9KVxuICB9O1xuXG4gIGNvbnN0IHNldEFkZFRhc2tCdXR0b24gPSAocHJvamVjdElkLCB0b2RvSWQsIHRvZG9DYXJkKSA9PiB7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGhlbHBlci5jcmVhdGVCdXR0b25Gb3JtKCdkaXYnLCAnbm9uZScsICdBZGQgVGFzaycsIHRvZG9DYXJkLCAncCcsICdhZGQtdGFzay1idXR0b24nKTtcbiAgICBjb25zdCB0YXNrRm9ybUNvbnRhaW5lciA9IGhlbHBlci5jcmVhdGVEaXYoJ2hpZGRlbicpO1xuICAgIGNvbnN0IHRhc2tGb3JtID0gaGVscGVyLmNyZWF0ZUlucHV0Rm9ybSgnbm9uZScsICdFbnRlciB0YXNrIG5hbWUnLCB0YXNrRm9ybUNvbnRhaW5lciwgJ3Rhc2stZm9ybScpO1xuICAgIGNvbnN0IHRhc2tTdWJtaXRCdXR0b24gPSBoZWxwZXIuY3JlYXRlQnV0dG9uRm9ybSgnYnV0dG9uJywgJ25vbmUnLCAnU3VibWl0JywgdGFza0Zvcm1Db250YWluZXIsICdzdWJtaXQtdGFzay1idG4nKTtcbiAgICB0b2RvQ2FyZC5hcHBlbmRDaGlsZCh0YXNrRm9ybUNvbnRhaW5lcik7XG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRhc2tGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH0pO1xuICAgIHRhc2tTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCB0YXNrTmFtZSA9IHRhc2tGb3JtLnZhbHVlO1xuICAgICAgYWRkVGFza0V2ZW50KHByb2plY3RJZCwgdG9kb0lkLCB0YXNrTmFtZSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBzZXROb3RlcyA9IChub3RlcywgdG9kb0NhcmQpID0+IHtcbiAgICBoZWxwZXIuY3JlYXRlVGV4dCh0b2RvQ2FyZCwgJ2FmdGVyJywgJ2gzJywgJ05vdGVzJywgJ25vbmUnLCAnbm90ZXMtaGVhZGluZycpO1xuICAgIGhlbHBlci5jcmVhdGVUZXh0KHRvZG9DYXJkLCAnYWZ0ZXInLCAncCcsIG5vdGVzKTtcbiAgfTtcblxuICBjb25zdCBhZGRUb2RvQ2FyZCA9ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgdG9kb0NhcmRDb250YWluZXIgPSBoZWxwZXIuY3JlYXRlRGl2KCk7XG4gICAgY29uc3QgdG9kb0NhcmQgPSBoZWxwZXIuY3JlYXRlRGl2KCd0b2RvLWNhcmQnKTtcbiAgICBzZXRUb2RvVGl0bGUodG9kby50aXRsZSwgdG9kb0NhcmQpO1xuICAgIHNldFRvZG9TdGF0dXModG9kby5kdWUsIHRvZG8ucHJpb3JpdHksIHRvZG9DYXJkKTtcbiAgICBzZXRUb2RvRGVzY3JpcHRpb24odG9kby5kZXNjLCB0b2RvQ2FyZCk7XG4gICAgc2V0VG9kb1Rhc2tzKHRvZG8udG9kb0lkLCB0b2RvLnRhc2tzLCB0b2RvQ2FyZCk7XG4gICAgc2V0QWRkVGFza0J1dHRvbih0b2RvLnByb2plY3RJZCwgdG9kby50b2RvSWQsIHRvZG9DYXJkKTtcbiAgICBzZXROb3Rlcyh0b2RvLm5vdGVzLCB0b2RvQ2FyZCk7XG5cbiAgICBjb25zdCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tYWRkLWNvbnRhaW5lcicpO1xuICAgIHRvZG9DYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9DYXJkKTtcbiAgICB0b2RvTGlzdC5pbnNlcnRCZWZvcmUodG9kb0NhcmRDb250YWluZXIsIGFkZFRvZG9CdXR0b24pO1xuICB9O1xuXG4gIGNvbnN0IHNldFRvZG9Gb3JtID0gKGNvbnRhaW5lcikgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5ub1ZhbGlkYXRlID0gdHJ1ZTtcblxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGhlbHBlci5jcmVhdGVJbnB1dEZvcm0oJ3RvZG8tdGl0bGUnLCAnVGl0bGUnLCBmb3JtKTtcbiAgICBjb25zdCB0aXRsZUVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRpdGxlRXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlRXJyb3IpO1xuICAgIGhlbHBlci5jcmVhdGVJbnB1dEZvcm0oJ2R1ZS1kYXRlLWlucHV0JywgJ0R1ZSBEYXRlJywgZm9ybSk7XG4gICAgaGVscGVyLmNyZWF0ZVNlbGVjdEZvcm0oJ3ByaW9yaXR5LXNlbGVjdCcsIGZvcm0sICdQcmlvcml0eScsICdVcmdlbnQnLCAnTm9ybWFsJywgJ1VuaW1wb3J0YW50JylcbiAgICBoZWxwZXIuY3JlYXRlVGV4dEFyZWFGb3JtKCdkZXNjcmlwdGlvbi10ZXh0YXJlYScsICdEZXNjcmlwdGlvbicsIGZvcm0pO1xuICAgIGhlbHBlci5jcmVhdGVUZXh0QXJlYUZvcm0oJ25vdGVzLWlucHV0JywgJ05vdGVzJywgZm9ybSk7XG4gICAgY29uc3QgdG9kb0J1dHRvbiA9IGhlbHBlci5jcmVhdGVCdXR0b25Gb3JtKCdidXR0b24nLCAndG9kby1zdWJtaXQtYnRuJywgJ1NVQk1JVCcsIGZvcm0pO1xuICAgIHRvZG9UaXRsZS5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICB0b2RvVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0b2RvVGl0bGUudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgdGl0bGVFcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICB0aXRsZUVycm9yLmNsYXNzTmFtZSA9ICdlcnJvcic7XG4gICAgICB9XG4gICAgfSlcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIXRvZG9UaXRsZS52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICBzaG93RXJyb3IoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBkZXNjO1xuICAgICAgICBsZXQgbm90ZXM7XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24tdGV4dGFyZWEnKS52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICBkZXNjID0gJ1RoaXMgaXMgYSB0b2RvLiBBZGQgY2hlY2tsaXN0IHRhc2tzLCBhIGR1ZSBkYXRlLCBhbmQgcHJpb3JpdGllcyBoZXJlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uLXRleHRhcmVhJykudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoKCcjbm90ZXMtaW5wdXQnKSkudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgbm90ZXMgPSAnQWRkIG5vdGVzIGFuZCBhbnkgYWRkaXRpb25hbCB0aG91Z2h0cyBoZXJlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoKCcjbm90ZXMtaW5wdXQnKSkudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9kbyA9IHtcbiAgICAgICAgICBwcm9qZWN0SWQ6IGN1cnJlbnRQcm9qZWN0SWQsXG4gICAgICAgICAgdGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXRpdGxlJykudmFsdWUsXG4gICAgICAgICAgZHVlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlLWRhdGUtaW5wdXQnKS52YWx1ZSxcbiAgICAgICAgICBwcmlvcml0eTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LXNlbGVjdCcpLnZhbHVlLFxuICAgICAgICAgIGRlc2M6IGRlc2MsXG4gICAgICAgICAgbm90ZXM6IG5vdGVzXG4gICAgICAgIH07XG4gICAgICAgIGFkZFRvZG9FdmVudCh0b2RvKTtcbiAgICAgICAgcmVzZXRUb2RvU3VibWl0Rm9ybSgpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBmdW5jdGlvbiBzaG93RXJyb3IoKSB7XG4gICAgICBpZiAodG9kb1RpdGxlLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgICB0aXRsZUVycm9yLnRleHRDb250ZW50ID0gJ1lvdSBuZWVkIHRvIGVudGVyIGEgdGl0bGUuJztcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0QWRkVG9kb0J1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRUb2RvQ29udGFpbmVyID0gaGVscGVyLmNyZWF0ZUlkRGl2KCd0b2RvLWFkZC1jb250YWluZXInKTtcbiAgICBjb25zdCB0b2RvRm9ybUNvbnRhaW5lciA9IGhlbHBlci5jcmVhdGVJZERpdigndG9kby1mb3JtLWNvbnRhaW5lcicsICdoaWRkZW4nKTtcbiAgICBjb25zdCBhZGRUb2RvQnV0dG9uID0gaGVscGVyLmNyZWF0ZUJ1dHRvbkZvcm0oJ2RpdicsICdhZGQtdG9kby1idXR0b24nLCAnQWRkIFRvZG8nLCBhZGRUb2RvQ29udGFpbmVyLCAnYWRkLXRvZG8tYnV0dG9uJywgJ2dyZXktZm9udCcsICdmb250LW1lZGl1bScpO1xuICAgIHNldFRvZG9Gb3JtKHRvZG9Gb3JtQ29udGFpbmVyKTtcbiAgICBhZGRUb2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Gb3JtQ29udGFpbmVyKTtcbiAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZChhZGRUb2RvQ29udGFpbmVyKTtcbiAgICBzZXRUb2RvRm9ybUV2ZW50KCk7XG5cbiAgICBhZGRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdG9kb0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2ZsZXgnID9cbiAgICAgICAgdG9kb0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJyA6XG4gICAgICAgIHRvZG9Gb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfSlcbiAgfTtcblxuICBjb25zdCB0b2dnbGVQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0tY29udGFpbmVyJyk7XG4gICAgaWYgKHByb2plY3RGb3JtQ29udGFpbmVyKSB7XG4gICAgICAocHJvamVjdEZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSA/IFxuICAgICAgICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnIDpcbiAgICAgICAgcHJvamVjdEZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGhlbHBlci5jcmVhdGVJZERpdigncHJvamVjdC1mb3JtLWNvbnRhaW5lcicpO1xuICAgICAgY29uc3QgbmFtZUZvcm0gPSBoZWxwZXIuY3JlYXRlSW5wdXRGb3JtKCdwcm9qZWN0LW5hbWUtZm9ybScsICdFbnRlciB0aGUgcHJvamVjdCBuYW1lJywgZm9ybUNvbnRhaW5lcik7XG4gICAgICBjb25zdCBmb3JtU3VibWl0ID0gaGVscGVyLmNyZWF0ZUJ1dHRvbkZvcm0oJ2J1dHRvbicsICdzdWJtaXQtcHJvamVjdC1idXR0b24nLCAnRU5URVInLCBmb3JtQ29udGFpbmVyKTtcbiAgICAgIHNpZGViYXIuaW5zZXJ0QmVmb3JlKGZvcm1Db250YWluZXIsIHNldHRpbmdzKTtcbiAgICAgIHNob3dQcm9qZWN0Rm9ybUV2ZW50KCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlc2V0VG9kb1N1Ym1pdEZvcm0gPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tdGl0bGUnKS52YWx1ZSA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZS1pbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LXNlbGVjdCcpLnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uLXRleHRhcmVhJykudmFsdWUgPSAnJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZXMtaW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWZvcm0tY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfTtcblxuICBjb25zdCByZXNldFByb2plY3RTdWJtaXRGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUtZm9ybScpO1xuICAgIHByb2plY3ROYW1lRm9ybS52YWx1ZSA9ICcnO1xuICAgIGNvbnN0IHByb2plY3RGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybS1jb250YWluZXInKTtcbiAgICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIGNvbnN0IGJpbmRDaGFuZ2VQcm9qZWN0ID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgc2V0UHJvamVjdFN3aXRjaEV2ZW50ID0gY2FsbGJhY2s7XG4gIH07XG5cbiAgY29uc3QgYmluZEFkZFRhc2sgPSAoY2FsbGJhY2spID0+IHtcbiAgICBhZGRUYXNrRXZlbnQgPSBjYWxsYmFjaztcbiAgfTtcblxuICBjb25zdCBiaW5kU3VibWl0VG9kbyA9IChjYWxsYmFjaykgPT4ge1xuICAgIGFkZFRvZG9FdmVudCA9IGNhbGxiYWNrO1xuICB9O1xuXG4gIGNvbnN0IGJpbmRBZGRUb2RvID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgc2V0VG9kb0Zvcm1FdmVudCA9IGNhbGxiYWNrO1xuICB9XG5cbiAgY29uc3QgYmluZEFkZFByb2plY3QgPSAoY2FsbGJhY2spID0+IHtcbiAgICBzaG93UHJvamVjdEZvcm1FdmVudCA9IGNhbGxiYWNrO1xuICB9O1xuXG4gIGNvbnN0IGJpbmRTdWJtaXRQcm9qZWN0ID0gKGhhbmRsZXIpID0+IHtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LXByb2plY3QtYnV0dG9uJyk7XG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdE5hbWVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZS1mb3JtJyk7XG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lRm9ybS52YWx1ZTtcbiAgICAgIGhhbmRsZXIocHJvamVjdE5hbWUpO1xuICAgICAgcmVzZXRQcm9qZWN0U3VibWl0Rm9ybSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGJpbmRUb2dnbGVUYXNrID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgdG9nZ2xlVGFza0V2ZW50ID0gY2FsbGJhY2s7XG4gIH1cblxuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlUHJvamVjdEZvcm0pO1xuXG4gIHJldHVybiB7IFxuICAgICAgcmVzZXRQcm9qZWN0VmlldyxcbiAgICAgIHJlc2V0VG9kb3MsXG4gICAgICBzZXRDdXJyZW50UHJvamVjdElkLFxuICAgICAgc2V0UHJvamVjdFRpdGxlLFxuICAgICAgc2V0UHJvamVjdERlc2NyaXB0aW9uLFxuICAgICAgYWRkVG9kb0NhcmQsXG4gICAgICBzZXRQcm9qZWN0TGlzdEl0ZW0sXG4gICAgICBzZXRBZGRUb2RvQnV0dG9uLFxuICAgICAgYmluZFN1Ym1pdFByb2plY3QsXG4gICAgICBiaW5kQWRkUHJvamVjdCxcbiAgICAgIHRvZ2dsZVByb2plY3RGb3JtLFxuICAgICAgYmluZEFkZFRvZG8sXG4gICAgICBiaW5kQWRkVGFzayxcbiAgICAgIGJpbmRTdWJtaXRUb2RvLFxuICAgICAgYmluZENoYW5nZVByb2plY3QsXG4gICAgICBiaW5kVG9nZ2xlVGFza1xuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHZpZXc7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuXG5jb250cm9sbGVyLmluaXRpYWxpemVWaWV3KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9