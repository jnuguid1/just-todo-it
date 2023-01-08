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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-color: #fecaca;\n  /* --secondary-color: hsl(0, 83%, 98%); */\n  --secondary-color: #F8FFE8;\n  --grey-text-color: #9a9a9a;\n  --light-grey: #cdcdcd;\n  --lighter-grey: #f1f1f1;\n  --card-color: #FFFFFF;\n  --urgent-primary-color: #FF0000;\n  --urgent-secondary-color: #FFDEDE;\n  --unimportant-primary-color: #868686;\n  --unimportant-secondary-color: #D5D5D5;\n  --normal-primary-color: #00952A;\n  --normal-secondary-color: #94FFB2;\n  --error-color: #bd0303;\n  --pointer: pointer;\n  font-size: 16px;\n  font-family: 'Nunito', 'Roboto', 'sans-serif';\n  user-select: none;\n}\n\nbody, h1, h2, h3, p, ul, li {\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  list-style: none;\n}\n\n.font-large {\n  font-size: 2rem;\n}\n\n.font-medium {\n  font-size: 1.5rem;\n}\n\n.font-regular {\n  font-size: 1rem;\n}\n\n.font-small {\n  font-size: 0.875rem;\n}\n\n.primary-color {\n  background-color: var(--primary-color);\n}\n\n.secondary-color {\n  background-color: var(--secondary-color);\n}\n\n.grey-font {\n  color: var(--grey-text-color);\n}\n\n.light-grey {\n  color: var(--light-grey);\n}\n\n.p-24 {\n  padding: 24px;\n}\n\n.p-48 {\n  padding: 48px;\n}\n\n.mb-8 {\n  margin-bottom: 8px;\n}\n\n.mb-16 {\n  margin-bottom: 16px;\n}\n\n.mb-32 {\n  margin-bottom: 32px;\n}\n\n.mb-48 {\n  margin-bottom: 48px;\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n#container{\n  display: grid;\n  grid-template-columns: 1.1fr 5fr;\n  height: 100vh;\n}\n\n#sidebar h1 {\n  margin-bottom: 84px;\n}\n\n#project-container {\n  overflow-x: scroll;\n}\n\n.nav-list {\n  display: flex;\n  flex-direction: column;\n}\n\n#projects li {\n  cursor: var(--pointer);\n  font-size: 1.25rem;\n  margin-left: 24px;\n  user-select: none;\n  padding-top: 3px;\n}\n\n#projects li:hover {\n  text-decoration: underline;\n}\n\n#sidebar h2 {\n  font-weight: 600;\n}\n\n#sidebar h2:nth-child(n+1) {\n  margin-bottom: 16px;\n}\n\n#sidebar h2:nth-of-type(2) {\n  margin-top: 32px;\n}\n\n#add-project-btn {\n  user-select: none;\n  margin-top: 8px;\n}\n\n#todo-list {\n  display: grid;\n  grid-auto-columns: 350px;\n  grid-auto-flow: column;\n  gap: 24px;\n}\n\n.todo-card {\n  padding: 24px 28px 32px 28px;\n  border-radius: 10px;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);\n  background-color: var(--card-color);\n  position: relative;\n}\n\n.status-container {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n\n.todo-card h3 {\n  margin-bottom: 16px;\n}\n\n.checklist-circle {\n  min-width: 18px;\n  min-height: 18px;\n  border-radius: 50%;\n  border-color: var(--light-grey);\n  border-style: solid;\n  cursor: var(--pointer);\n}\n\n.checklist-divide {\n  margin-top: 16px;\n}\n\n.checklist-divide hr {\n  height: 1px;\n  border: 0;\n  background: var(--light-grey);\n}\n\n.add-task-button {\n  color: var(--grey-text-color);\n  cursor: var(--pointer);\n  margin-top: 12px;\n  margin-bottom: 8px;\n  user-select: none;\n  border-style: solid;\n  display: inline-block;\n  border-color: var(--light-grey);\n  padding: 6px 8px;\n  border-radius: 14px;\n  background-color: var(--lighter-grey);\n}\n\n.submit-task-btn {\n  padding: 8px;\n}\n\n.task-form {\n  margin-top: 12px;\n  margin-right: 8px;\n  padding: 8px;\n}\n\n.notes-heading {\n  margin-top: 24px;\n}\n\n.add-todo-button {\n  border-radius: 10px;\n  padding: 12px;\n  background-color: rgb(229, 229, 229);\n  display: inline-block;\n  user-select: none;\n  cursor: var(--pointer);\n  margin-bottom: 24px;\n}\n\n#todo-form-container {\n  display: none;\n  flex-direction: column;\n  width: 60%;\n}\n\n#todo-form-container input, \n#todo-form-container select,\n#todo-form-container textarea {\n  font-size: 1rem;\n  padding: 4px;\n}\n\n#todo-form-container input:nth-child(n+3), \n#todo-form-container select,\n#todo-form-container textarea {\n  margin-top: 16px;\n}\n\n#todo-form-container label {\n  margin-bottom: 8px;\n  color: grey;\n}\n\n#todo-form-container select,\n#todo-form-container input[type=\"datetime-local\"] {\n  color: grey;\n}\n\n#todo-submit-btn {\n  margin-top: 8px;\n  font-size: 1rem;\n}\n\n#todo-form-container option:nth-child(n+1) {\n  color: black;\n}\n\n#todo-form-container button {\n  width: 40%;\n  align-self: center;\n  padding: 8px;\n}\n\n.task-container {\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.task-name-circle-container {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n\n.task-container .fa-xmark {\n  justify-self: flex-end;\n}\n\n#project-form-container {\n  margin-top: 14px;\n  display: flex;\n  gap: 8px;\n}\n\n#project-name-form {\n  padding: 8px;\n  font-size: 0.875rem;\n  margin-bottom: 12px;\n  width: 150px;\n}\n\n#project-form-container button {\n  padding: 0px 8px;\n  height: 37px\n}\n\n.circle-filled {\n  background-color: var(--primary-color);\n}\n\n.task-done {\n  text-decoration: line-through;\n}\n\n.hidden {\n  display: none;\n}\n\n.priority-label-urgent,\n.priority-label-normal,\n.priority-label-unimportant {\n  padding: 4px 6px;\n  border-style: solid;\n  border-radius: 16px;\n}\n\n.priority-label-urgent {\n  border-color: var(--urgent-primary-color);\n  background-color: var(--urgent-secondary-color);\n  color: var(--urgent-primary-color);\n}\n\n.priority-label-normal {\n  border-color: var(--normal-primary-color);\n  background-color: var(--normal-secondary-color);\n  color: var(--normal-primary-color);\n}\n\n.priority-label-unimportant {\n  border-color: var(--unimportant-primary-color);\n  background-color: var(--unimportant-secondary-color);\n  color: var(--unimportant-primary-color);\n}\n\n.error {\n  color: var(--error-color);\n}\n\n.project-list-container {\n  display: flex; \n  gap: 48px;\n  align-items: center;\n  margin-bottom: 8px;\n}\n\n.fa-xmark:hover,\n.fa-ellipsis-vertical {\n  cursor: pointer;\n}\n\n.ellipsis-container:hover {\n  background-color: var(--lighter-grey);\n}\n\n.ellipsis-container {\n  padding: 16px;\n  border-radius: 50%;\n}\n\n.title-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n\n.title-container li {\n  cursor: pointer;\n  padding: 12px;\n}\n\n.title-container li:hover {\n  background-color: var(--lighter-grey);\n}\n\n.todo-card .selection-container {\n  border-style: solid;\n  border-width: 2px;\n  border-color: var(--light-grey);\n  position: absolute;\n  top: 60px;\n  left: 200px;\n  border-radius: 4px;\n  background-color: white;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --primary-color: #fecaca;\n  /* --secondary-color: hsl(0, 83%, 98%); */\n  --secondary-color: #F8FFE8;\n  --grey-text-color: #9a9a9a;\n  --light-grey: #cdcdcd;\n  --lighter-grey: #f1f1f1;\n  --card-color: #FFFFFF;\n  --urgent-primary-color: #FF0000;\n  --urgent-secondary-color: #FFDEDE;\n  --unimportant-primary-color: #868686;\n  --unimportant-secondary-color: #D5D5D5;\n  --normal-primary-color: #00952A;\n  --normal-secondary-color: #94FFB2;\n  --error-color: #bd0303;\n  --pointer: pointer;\n  font-size: 16px;\n  font-family: 'Nunito', 'Roboto', 'sans-serif';\n  user-select: none;\n}\n\nbody, h1, h2, h3, p, ul, li {\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  list-style: none;\n}\n\n.font-large {\n  font-size: 2rem;\n}\n\n.font-medium {\n  font-size: 1.5rem;\n}\n\n.font-regular {\n  font-size: 1rem;\n}\n\n.font-small {\n  font-size: 0.875rem;\n}\n\n.primary-color {\n  background-color: var(--primary-color);\n}\n\n.secondary-color {\n  background-color: var(--secondary-color);\n}\n\n.grey-font {\n  color: var(--grey-text-color);\n}\n\n.light-grey {\n  color: var(--light-grey);\n}\n\n.p-24 {\n  padding: 24px;\n}\n\n.p-48 {\n  padding: 48px;\n}\n\n.mb-8 {\n  margin-bottom: 8px;\n}\n\n.mb-16 {\n  margin-bottom: 16px;\n}\n\n.mb-32 {\n  margin-bottom: 32px;\n}\n\n.mb-48 {\n  margin-bottom: 48px;\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n#container{\n  display: grid;\n  grid-template-columns: 1.1fr 5fr;\n  height: 100vh;\n}\n\n#sidebar h1 {\n  margin-bottom: 84px;\n}\n\n#project-container {\n  overflow-x: scroll;\n}\n\n.nav-list {\n  display: flex;\n  flex-direction: column;\n}\n\n#projects li {\n  cursor: var(--pointer);\n  font-size: 1.25rem;\n  margin-left: 24px;\n  user-select: none;\n  padding-top: 3px;\n}\n\n#projects li:hover {\n  text-decoration: underline;\n}\n\n#sidebar h2 {\n  font-weight: 600;\n}\n\n#sidebar h2:nth-child(n+1) {\n  margin-bottom: 16px;\n}\n\n#sidebar h2:nth-of-type(2) {\n  margin-top: 32px;\n}\n\n#add-project-btn {\n  user-select: none;\n  margin-top: 8px;\n}\n\n#todo-list {\n  display: grid;\n  grid-auto-columns: 350px;\n  grid-auto-flow: column;\n  gap: 24px;\n}\n\n.todo-card {\n  padding: 24px 28px 32px 28px;\n  border-radius: 10px;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);\n  background-color: var(--card-color);\n  position: relative;\n}\n\n.status-container {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n\n.todo-card h3 {\n  margin-bottom: 16px;\n}\n\n.checklist-circle {\n  min-width: 18px;\n  min-height: 18px;\n  border-radius: 50%;\n  border-color: var(--light-grey);\n  border-style: solid;\n  cursor: var(--pointer);\n}\n\n.checklist-divide {\n  margin-top: 16px;\n}\n\n.checklist-divide hr {\n  height: 1px;\n  border: 0;\n  background: var(--light-grey);\n}\n\n.add-task-button {\n  color: var(--grey-text-color);\n  cursor: var(--pointer);\n  margin-top: 12px;\n  margin-bottom: 8px;\n  user-select: none;\n  border-style: solid;\n  display: inline-block;\n  border-color: var(--light-grey);\n  padding: 6px 8px;\n  border-radius: 14px;\n  background-color: var(--lighter-grey);\n}\n\n.submit-task-btn {\n  padding: 8px;\n}\n\n.task-form {\n  margin-top: 12px;\n  margin-right: 8px;\n  padding: 8px;\n}\n\n.notes-heading {\n  margin-top: 24px;\n}\n\n.add-todo-button {\n  border-radius: 10px;\n  padding: 12px;\n  background-color: rgb(229, 229, 229);\n  display: inline-block;\n  user-select: none;\n  cursor: var(--pointer);\n  margin-bottom: 24px;\n}\n\n#todo-form-container {\n  display: none;\n  flex-direction: column;\n  width: 60%;\n}\n\n#todo-form-container input, \n#todo-form-container select,\n#todo-form-container textarea {\n  font-size: 1rem;\n  padding: 4px;\n}\n\n#todo-form-container input:nth-child(n+3), \n#todo-form-container select,\n#todo-form-container textarea {\n  margin-top: 16px;\n}\n\n#todo-form-container label {\n  margin-bottom: 8px;\n  color: grey;\n}\n\n#todo-form-container select,\n#todo-form-container input[type=\"datetime-local\"] {\n  color: grey;\n}\n\n#todo-submit-btn {\n  margin-top: 8px;\n  font-size: 1rem;\n}\n\n#todo-form-container option:nth-child(n+1) {\n  color: black;\n}\n\n#todo-form-container button {\n  width: 40%;\n  align-self: center;\n  padding: 8px;\n}\n\n.task-container {\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.task-name-circle-container {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n\n.task-container .fa-xmark {\n  justify-self: flex-end;\n}\n\n#project-form-container {\n  margin-top: 14px;\n  display: flex;\n  gap: 8px;\n}\n\n#project-name-form {\n  padding: 8px;\n  font-size: 0.875rem;\n  margin-bottom: 12px;\n  width: 150px;\n}\n\n#project-form-container button {\n  padding: 0px 8px;\n  height: 37px\n}\n\n.circle-filled {\n  background-color: var(--primary-color);\n}\n\n.task-done {\n  text-decoration: line-through;\n}\n\n.hidden {\n  display: none;\n}\n\n.priority-label-urgent,\n.priority-label-normal,\n.priority-label-unimportant {\n  padding: 4px 6px;\n  border-style: solid;\n  border-radius: 16px;\n}\n\n.priority-label-urgent {\n  border-color: var(--urgent-primary-color);\n  background-color: var(--urgent-secondary-color);\n  color: var(--urgent-primary-color);\n}\n\n.priority-label-normal {\n  border-color: var(--normal-primary-color);\n  background-color: var(--normal-secondary-color);\n  color: var(--normal-primary-color);\n}\n\n.priority-label-unimportant {\n  border-color: var(--unimportant-primary-color);\n  background-color: var(--unimportant-secondary-color);\n  color: var(--unimportant-primary-color);\n}\n\n.error {\n  color: var(--error-color);\n}\n\n.project-list-container {\n  display: flex; \n  gap: 48px;\n  align-items: center;\n  margin-bottom: 8px;\n}\n\n.fa-xmark:hover,\n.fa-ellipsis-vertical {\n  cursor: pointer;\n}\n\n.ellipsis-container:hover {\n  background-color: var(--lighter-grey);\n}\n\n.ellipsis-container {\n  padding: 16px;\n  border-radius: 50%;\n}\n\n.title-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n\n.title-container li {\n  cursor: pointer;\n  padding: 12px;\n}\n\n.title-container li:hover {\n  background-color: var(--lighter-grey);\n}\n\n.todo-card .selection-container {\n  border-style: solid;\n  border-width: 2px;\n  border-color: var(--light-grey);\n  position: absolute;\n  top: 60px;\n  left: 200px;\n  border-radius: 4px;\n  background-color: white;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);\n}"],"sourceRoot":""}]);
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
        isMinimized: todo.checkIsMinimized(),
        tasks: todo.getCheckList().map(task => ({
          name: task.getName(),
          id: task.getId(),
          isCompleted: task.checkCompleted()
        })),
        notes: todo.getNotes()
      };
      todo.bindOnTaskListChange(onTaskListChanged);
      todo.bindOnTodoChange(onTodoChanged);
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
  const onTaskListChanged = () => {
    const currentProject = _user__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectById(currentProjectId);
    _view__WEBPACK_IMPORTED_MODULE_4__["default"].resetTodos();
    addTodos(currentProject);
  };

  const onTodoListChanged = () => {
    onTaskListChanged();
  };

  const onTodoChanged = () => {
    onTaskListChanged();
  }

  const onProjectListChange = () => {
    _view__WEBPACK_IMPORTED_MODULE_4__["default"].resetProjectList();
    _user__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects().forEach(project => {
      _view__WEBPACK_IMPORTED_MODULE_4__["default"].setProjectListItem(project.getName(), project.getId());
    });
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

  const handleDeleteProject = (projectId) => {
    const project = _user__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectById(projectId);
    _user__WEBPACK_IMPORTED_MODULE_0__["default"].removeProject(project);
  };

  const handleDeleteTodo = (todoId) => {
    const project = _user__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectById(currentProjectId);
    const todo = project.getTodoById(todoId);
    project.removeTodo(todo);
  };

  const handleDeleteTask = (todoId, taskId) => {
    const project = _user__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectById(currentProjectId);
    const todo = project.getTodoById(todoId);
    const task = todo.getTaskById(taskId);
    todo.removeTask(task);
  };

  const handleMinimizeTodo = (todoId) => {
    const project = _user__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectById(currentProjectId);
    const todo = project.getTodoById(todoId);
    todo.toggleMinimize();
  };
  
  initializeUser();
  _view__WEBPACK_IMPORTED_MODULE_4__["default"].bindAddTask(handleSubmitTask);
  _view__WEBPACK_IMPORTED_MODULE_4__["default"].bindAddTodo(addSubmitTodoEvent);
  _view__WEBPACK_IMPORTED_MODULE_4__["default"].bindAddProject(addSubmitProjectEvent);
  _user__WEBPACK_IMPORTED_MODULE_0__["default"].bindProjectListChanged(onProjectListChange);
  _view__WEBPACK_IMPORTED_MODULE_4__["default"].bindChangeProject(onProjectSwitch);
  _view__WEBPACK_IMPORTED_MODULE_4__["default"].bindToggleTask(handleTaskToggle);
  _view__WEBPACK_IMPORTED_MODULE_4__["default"].bindDeleteProject(handleDeleteProject);
  _view__WEBPACK_IMPORTED_MODULE_4__["default"].bindDeleteTask(handleDeleteTask);
  _view__WEBPACK_IMPORTED_MODULE_4__["default"].bindDeleteTodo(handleDeleteTodo);
  _view__WEBPACK_IMPORTED_MODULE_4__["default"].bindMinimizeTodo(handleMinimizeTodo);

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
    onTodoListChanged();
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
  let onTodoChange = () => {};
  let isMinimized = false;

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
    onTaskListChange();
  };
  const toggleMinimize = () => {
    isMinimized = !isMinimized;
    onTaskListChange();
  };
  const checkIsMinimized = () => {
    return isMinimized;
  };

  const bindOnTaskListChange = (callback) => {
    onTaskListChange = callback;
  };

  const bindOnTodoChange = (callback) => {
    onTodoChange = callback;
  }
  
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
    bindOnTaskListChange,
    bindOnTodoChange,
    toggleMinimize,
    checkIsMinimized,
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
    onProjectsListChanged();
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

  function createList(container) {
    const list = document.createElement('ul');
    container.appendChild(list);
    for (let i = 1; i < arguments.length; i++) {
      list.classList.add(`${arguments[i]}`);
    }
    return list;
  };

  function createListItem(list, text) {
    const listItem = document.createElement('li');
    if (text) {
      listItem.textContent = text;
    }
    list.appendChild(listItem);
    return listItem;
  }

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

  function createFormLabel(id, text, container) {
    const label = document.createElement('label');
    label.id = id;
    label.textContent = text;
    container.appendChild(label);
    return label;
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

  function createDateTimeInput(id, container) {
    const input = document.createElement('input');
    input.type = 'datetime-local';
    input.id = id;
    container.appendChild(input);
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
  };
  
  function createIcon(container) {
    const icon = document.createElement('i');
    for (let i = 1; i < arguments.length; i++) {
      icon.classList.add(`${arguments[i]}`);
    }
    container.appendChild(icon);
    return icon;
  };

  return {
    createDiv,
    createIdDiv,
    createList,
    createListItem,
    createInputForm,
    createDateTimeInput,
    createFormLabel,
    createTextAreaForm,
    createButtonForm,
    createSelectForm,
    createText,
    createIcon
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
  let deleteProjectEvent = () => {};
  let deleteTodoEvent = () => {};
  let deleteTaskEvent = () => {};
  let minimizeTodoEvent = () => {};

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

  const resetProjectList = () => {
    let element = projects.firstElementChild;
    while (element) {
      if (element.id === 'add-project-btn') {
        break;
      } else {
        projects.removeChild(element);
        element = projects.firstElementChild;
      } 
    }
  };

  const setProjectListItem = (project, projectId) => {
    const projectListContainer = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('project-list-container');
    const projectListItem = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createListItem(projectListContainer, project);
    projectListItem.setAttribute('project-id', projectId);
    const deleteProjectIcon = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createIcon(projectListContainer, 'fa-solid', 'fa-xmark', 'fa-lg', 'hidden');
    projects.insertBefore(projectListContainer, addProjectButton);
    projectListItem.addEventListener('click', () => {
      if (projectId !== currentProjectId) {
        setProjectSwitchEvent(projectId);
      }
    });
    projectListContainer.addEventListener('mouseenter', () => {
      deleteProjectIcon.classList.remove('hidden');
    });
    projectListContainer.addEventListener('mouseleave', () => {
      deleteProjectIcon.classList.add('hidden');
    });
    deleteProjectIcon.addEventListener('click', () => {
      deleteProjectEvent(projectId);
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

  const setTodoTitle = (todoId, title, todoCard, cardSection) => {
    const titleContainer = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('title-container');
    _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createText(titleContainer, 'after', 'h2', title, 'none', 'font-medium');
    const ellipsis = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createIcon(titleContainer, 'fa-solid', 'fa-ellipsis-vertical', 'fa-lg', 'ellipsis-container');
    const floatingSelection = createFloatingSelection(todoId, titleContainer, cardSection);
    floatingSelection.classList.add('hidden');
    todoCard.appendChild(titleContainer);

    ellipsis.addEventListener('click', () => {
      floatingSelection.classList.toggle('hidden');
    });
  };

  function createFloatingSelection(todoId, container, cardSection) {
    const selectionContainer = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('selection-container');
    const optionsList = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createList(selectionContainer, 'options-list');
    const minimizeCardOption = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createListItem(optionsList, 'Minimize Todo');
    const deleteTodoOption = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createListItem(optionsList, 'Delete Todo');
    container.appendChild(selectionContainer);
    (cardSection.classList.contains('hidden')) ?
        minimizeCardOption.textContent = 'Maximize Todo' :
        minimizeCardOption.textContent = 'Minimize Todo';
    minimizeCardOption.addEventListener('click', () => {
      minimizeTodoEvent(todoId);
    });
    deleteTodoOption.addEventListener('click', () => {
      deleteTodoEvent(todoId);
    });

    return selectionContainer;
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
      const taskContainer = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('task-container');
      const taskNameCircleContainer = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('task-name-circle-container');
      const taskElement = setTask(task.name, taskNameCircleContainer);
      if (task.isCompleted) {
        taskElement.classList.add('task-done');
      } else {
        taskElement.classList.remove('task-done');
      }
      setTaskCheckCircle(todoId, taskNameCircleContainer, taskElement, task);
      taskContainer.appendChild(taskNameCircleContainer);
      const deleteProjectIcon = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createIcon(taskContainer, 'fa-solid', 'fa-xmark', 'fa-lg', 'hidden');
      todoCard.appendChild(taskContainer);
      const divider = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('checklist-divide');
      const hr = document.createElement('hr');
      divider.appendChild(hr);
      todoCard.appendChild(divider);
      taskContainer.addEventListener('mouseenter', () => {
        deleteProjectIcon.classList.remove('hidden');
      });
      taskContainer.addEventListener('mouseleave', () => {
        deleteProjectIcon.classList.add('hidden');
      });
      deleteProjectIcon.addEventListener('click', () => {
        deleteTaskEvent(todoId, task.id);
      });
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
    const formEvent = () => {
      const taskName = taskForm.value;
      addTaskEvent(projectId, todoId, taskName);
    }
    taskSubmitButton.addEventListener('click', formEvent);
    taskForm.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        formEvent();
      }
    })
  }

  const setNotes = (notes, todoCard) => {
    _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createText(todoCard, 'after', 'h3', 'Notes', 'none', 'notes-heading');
    _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createText(todoCard, 'after', 'p', notes);
  };

  const addTodoCard = (todo) => {
    const todoCardContainer = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv();
    const todoCard = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('todo-card');
    const cardTopSection = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('card-top-section');
    const cardBottomSection = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('card-bottom-section');
    if (todo.isMinimized === true) {
      cardBottomSection.classList.add('hidden');
    }
    setTodoTitle(todo.todoId, todo.title, cardTopSection, cardBottomSection);
    setTodoStatus(todo.due, todo.priority,cardTopSection);
    setTodoDescription(todo.desc, cardTopSection);
    setTodoTasks(todo.todoId, todo.tasks, cardBottomSection);
    setAddTaskButton(todo.projectId, todo.todoId, cardBottomSection);
    setNotes(todo.notes, cardBottomSection);
    todoCard.appendChild(cardTopSection);
    todoCard.appendChild(cardBottomSection);

    const addTodoButton = document.querySelector('#todo-add-container');
    todoCardContainer.appendChild(todoCard);
    todoList.insertBefore(todoCardContainer, addTodoButton);
  };

  const setTodoForm = (container) => {
    const form = document.createElement('form');
    form.noValidate = true;
    
    _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createFormLabel('datetime-label', 'Due Date', form);
    _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createDateTimeInput('due-date-input', form);
    const todoTitle = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createInputForm('todo-title', 'Title', form);
    const titleError = document.createElement('span');
    titleError.classList.add('error');
    form.appendChild(titleError);
    _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createSelectForm('priority-select', form, 'Priority', 'Urgent', 'Normal', 'Unimportant')
    const todoDescription = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createTextAreaForm('description-textarea', 'Description', form);
    const todoNotes = _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createTextAreaForm('notes-input', 'Notes', form);
     _view_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].createButtonForm('button', 'todo-submit-btn', 'SUBMIT', form);
    todoTitle.required = true;

    todoTitle.addEventListener('input', () => {
      if (todoTitle.validity.valid) {
        titleError.textContent = '';
        titleError.className = 'error';
      }
    })
    const formEvent = () => {
      if (!todoTitle.validity.valid) {
        showError();
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
          due: document.querySelector('#due-date-input').value.replace('T', ' '),
          priority: document.querySelector('#priority-select').value,
          desc: desc,
          notes: notes
        };
        addTodoEvent(todo);
        resetTodoSubmitForm();
      };
    }

  form.addEventListener('submit', (event) => {
    formEvent();
    event.preventDefault();
  }
  );
  todoTitle.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      formEvent();
    }
  });
  todoDescription.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      formEvent();
    }
  });
  todoNotes.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      formEvent();
    }
  });
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
    const projectNameForm = document.querySelector('#project-name-form');
    const formEvent = () => {
      const projectName = projectNameForm.value;
      handler(projectName);
      resetProjectSubmitForm();
    }
    submitButton.addEventListener('click', formEvent);
    projectNameForm.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        formEvent();
      }
    })
  };

  const bindToggleTask = (callback) => {
    toggleTaskEvent = callback;
  };

  const bindDeleteProject = (callback) => {
    deleteProjectEvent = callback;
  };

  const bindDeleteTask = (callback) => {
    deleteTaskEvent = callback;
  };

  const bindDeleteTodo = (callback) => {
    deleteTodoEvent = callback;
  }

  const bindMinimizeTodo = (callback) => {
    minimizeTodoEvent = callback;
  }

  addProjectButton.addEventListener('click', toggleProjectForm);

  return { 
      resetProjectView,
      resetProjectList,
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
      bindToggleTask,
      bindDeleteProject,
      bindDeleteTodo,
      bindDeleteTask,
      bindMinimizeTodo
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxPQUFPLFVBQVUsVUFBVSxNQUFNLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE9BQU8sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZ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QUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7QUN0RjdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7O0FBRUEsV0FBVztBQUNYOztBQUVBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7O0FDMUIxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hHTztBQUNBO0FBQ007O0FBRXZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDbERuQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDLDRCQUE0QixhQUFhO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUMsNkJBQTZCLGFBQWE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDLDZCQUE2QixhQUFhO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUMsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELFFBQVE7QUFDMUQ7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDLG1DQUFtQyxhQUFhO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUMsNEJBQTRCLGFBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDNUpVOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpRUFBa0I7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsK0RBQWdCO0FBQ2pELDRCQUE0QixvRUFBcUI7QUFDakQ7QUFDQSw4QkFBOEIsZ0VBQWlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxJQUFJLGdFQUFpQjtBQUNyQjs7QUFFQTtBQUNBLElBQUksZ0VBQWlCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQiwrREFBZ0I7QUFDM0MsSUFBSSxnRUFBaUI7QUFDckIscUJBQXFCLGdFQUFpQjtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLCtCQUErQiwrREFBZ0I7QUFDL0Msd0JBQXdCLGdFQUFpQjtBQUN6QywrQkFBK0Isb0VBQXFCO0FBQ3BELDZCQUE2QixvRUFBcUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsK0RBQWdCO0FBQ25DLElBQUksZ0VBQWlCLCtCQUErQixRQUFRO0FBQzVELDBCQUEwQixnRUFBaUI7QUFDM0M7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksZ0VBQWlCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCLGdFQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLCtEQUFnQjtBQUM1QztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsK0RBQWdCO0FBQzVDLHNDQUFzQywrREFBZ0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdFQUFpQjtBQUNqRDtBQUNBLHNCQUFzQiwrREFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0EsMEJBQTBCLHNFQUF1QjtBQUNqRCw4QkFBOEIsK0RBQWdCO0FBQzlDLHFCQUFxQixxRUFBc0I7QUFDM0MsNkJBQTZCLHNFQUF1QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxJQUFJLGdFQUFpQjtBQUNyQixJQUFJLGdFQUFpQjtBQUNyQjs7QUFFQTtBQUNBLDhCQUE4QiwrREFBZ0I7QUFDOUMscUJBQXFCLCtEQUFnQjtBQUNyQywyQkFBMkIsK0RBQWdCO0FBQzNDLDhCQUE4QiwrREFBZ0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscUVBQXNCO0FBQzFCLElBQUkseUVBQTBCO0FBQzlCLHNCQUFzQixxRUFBc0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzRUFBdUI7QUFDM0IsNEJBQTRCLHdFQUF5QjtBQUNyRCxzQkFBc0Isd0VBQXlCO0FBQy9DLEtBQUssc0VBQXVCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QixpRUFBa0I7QUFDL0MsOEJBQThCLGlFQUFrQjtBQUNoRCwwQkFBMEIsc0VBQXVCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTiw0QkFBNEIsaUVBQWtCO0FBQzlDLHVCQUF1QixxRUFBc0I7QUFDN0MseUJBQXlCLHNFQUF1QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxJQUFJOzs7Ozs7VUNsY25CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2lCOztBQUV0QyxrRUFBeUIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2p1c3QtdG9kby1pdC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vanVzdC10b2RvLWl0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vanVzdC10b2RvLWl0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2p1c3QtdG9kby1pdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vanVzdC10b2RvLWl0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2p1c3QtdG9kby1pdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvLi9zcmMvdXNlci5qcyIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvLi9zcmMvdmlldy1oZWxwZXJzLmpzIiwid2VicGFjazovL2p1c3QtdG9kby1pdC8uL3NyYy92aWV3LmpzIiwid2VicGFjazovL2p1c3QtdG9kby1pdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanVzdC10b2RvLWl0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qdXN0LXRvZG8taXQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2p1c3QtdG9kby1pdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogI2ZlY2FjYTtcXG4gIC8qIC0tc2Vjb25kYXJ5LWNvbG9yOiBoc2woMCwgODMlLCA5OCUpOyAqL1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNGOEZGRTg7XFxuICAtLWdyZXktdGV4dC1jb2xvcjogIzlhOWE5YTtcXG4gIC0tbGlnaHQtZ3JleTogI2NkY2RjZDtcXG4gIC0tbGlnaHRlci1ncmV5OiAjZjFmMWYxO1xcbiAgLS1jYXJkLWNvbG9yOiAjRkZGRkZGO1xcbiAgLS11cmdlbnQtcHJpbWFyeS1jb2xvcjogI0ZGMDAwMDtcXG4gIC0tdXJnZW50LXNlY29uZGFyeS1jb2xvcjogI0ZGREVERTtcXG4gIC0tdW5pbXBvcnRhbnQtcHJpbWFyeS1jb2xvcjogIzg2ODY4NjtcXG4gIC0tdW5pbXBvcnRhbnQtc2Vjb25kYXJ5LWNvbG9yOiAjRDVENUQ1O1xcbiAgLS1ub3JtYWwtcHJpbWFyeS1jb2xvcjogIzAwOTUyQTtcXG4gIC0tbm9ybWFsLXNlY29uZGFyeS1jb2xvcjogIzk0RkZCMjtcXG4gIC0tZXJyb3ItY29sb3I6ICNiZDAzMDM7XFxuICAtLXBvaW50ZXI6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogJ051bml0bycsICdSb2JvdG8nLCAnc2Fucy1zZXJpZic7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuYm9keSwgaDEsIGgyLCBoMywgcCwgdWwsIGxpIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5mb250LWxhcmdlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmZvbnQtbWVkaXVtIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZm9udC1yZWd1bGFyIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmZvbnQtc21hbGwge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG59XFxuXFxuLnByaW1hcnktY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5zZWNvbmRhcnktY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmdyZXktZm9udCB7XFxuICBjb2xvcjogdmFyKC0tZ3JleS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLmxpZ2h0LWdyZXkge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbn1cXG5cXG4ucC0yNCB7XFxuICBwYWRkaW5nOiAyNHB4O1xcbn1cXG5cXG4ucC00OCB7XFxuICBwYWRkaW5nOiA0OHB4O1xcbn1cXG5cXG4ubWItOCB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5tYi0xNiB7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4ubWItMzIge1xcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcXG59XFxuXFxuLm1iLTQ4IHtcXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XFxufVxcblxcbi5mbGV4LWNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNjb250YWluZXJ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjFmciA1ZnI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jc2lkZWJhciBoMSB7XFxuICBtYXJnaW4tYm90dG9tOiA4NHB4O1xcbn1cXG5cXG4jcHJvamVjdC1jb250YWluZXIge1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbn1cXG5cXG4ubmF2LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNwcm9qZWN0cyBsaSB7XFxuICBjdXJzb3I6IHZhcigtLXBvaW50ZXIpO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHBhZGRpbmctdG9wOiAzcHg7XFxufVxcblxcbiNwcm9qZWN0cyBsaTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI3NpZGViYXIgaDIge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI3NpZGViYXIgaDI6bnRoLWNoaWxkKG4rMSkge1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuI3NpZGViYXIgaDI6bnRoLW9mLXR5cGUoMikge1xcbiAgbWFyZ2luLXRvcDogMzJweDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0biB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuXFxuI3RvZG8tbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDM1MHB4O1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMjRweDtcXG59XFxuXFxuLnRvZG8tY2FyZCB7XFxuICBwYWRkaW5nOiAyNHB4IDI4cHggMzJweCAyOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWNvbG9yKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnN0YXR1cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxufVxcblxcbi50b2RvLWNhcmQgaDMge1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLmNoZWNrbGlzdC1jaXJjbGUge1xcbiAgbWluLXdpZHRoOiAxOHB4O1xcbiAgbWluLWhlaWdodDogMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgY3Vyc29yOiB2YXIoLS1wb2ludGVyKTtcXG59XFxuXFxuLmNoZWNrbGlzdC1kaXZpZGUge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuLmNoZWNrbGlzdC1kaXZpZGUgaHIge1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1ncmV5KTtcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbiB7XFxuICBjb2xvcjogdmFyKC0tZ3JleS10ZXh0LWNvbG9yKTtcXG4gIGN1cnNvcjogdmFyKC0tcG9pbnRlcik7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG59XFxuXFxuLnN1Ym1pdC10YXNrLWJ0biB7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi50YXNrLWZvcm0ge1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4ubm90ZXMtaGVhZGluZyB7XFxuICBtYXJnaW4tdG9wOiAyNHB4O1xcbn1cXG5cXG4uYWRkLXRvZG8tYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMjI5LCAyMjkpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHZhcigtLXBvaW50ZXIpO1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuXFxuI3RvZG8tZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNjAlO1xcbn1cXG5cXG4jdG9kby1mb3JtLWNvbnRhaW5lciBpbnB1dCwgXFxuI3RvZG8tZm9ybS1jb250YWluZXIgc2VsZWN0LFxcbiN0b2RvLWZvcm0tY29udGFpbmVyIHRleHRhcmVhIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuI3RvZG8tZm9ybS1jb250YWluZXIgaW5wdXQ6bnRoLWNoaWxkKG4rMyksIFxcbiN0b2RvLWZvcm0tY29udGFpbmVyIHNlbGVjdCxcXG4jdG9kby1mb3JtLWNvbnRhaW5lciB0ZXh0YXJlYSB7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG4jdG9kby1mb3JtLWNvbnRhaW5lciBsYWJlbCB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuI3RvZG8tZm9ybS1jb250YWluZXIgc2VsZWN0LFxcbiN0b2RvLWZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9XFxcImRhdGV0aW1lLWxvY2FsXFxcIl0ge1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbiN0b2RvLXN1Ym1pdC1idG4ge1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jdG9kby1mb3JtLWNvbnRhaW5lciBvcHRpb246bnRoLWNoaWxkKG4rMSkge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jdG9kby1mb3JtLWNvbnRhaW5lciBidXR0b24ge1xcbiAgd2lkdGg6IDQwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhc2stbmFtZS1jaXJjbGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgLmZhLXhtYXJrIHtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDE0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbiNwcm9qZWN0LW5hbWUtZm9ybSB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1jb250YWluZXIgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDBweCA4cHg7XFxuICBoZWlnaHQ6IDM3cHhcXG59XFxuXFxuLmNpcmNsZS1maWxsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi50YXNrLWRvbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByaW9yaXR5LWxhYmVsLXVyZ2VudCxcXG4ucHJpb3JpdHktbGFiZWwtbm9ybWFsLFxcbi5wcmlvcml0eS1sYWJlbC11bmltcG9ydGFudCB7XFxuICBwYWRkaW5nOiA0cHggNnB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxufVxcblxcbi5wcmlvcml0eS1sYWJlbC11cmdlbnQge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS11cmdlbnQtcHJpbWFyeS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11cmdlbnQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS11cmdlbnQtcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5wcmlvcml0eS1sYWJlbC1ub3JtYWwge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ub3JtYWwtcHJpbWFyeS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3JtYWwtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1ub3JtYWwtcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5wcmlvcml0eS1sYWJlbC11bmltcG9ydGFudCB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXVuaW1wb3J0YW50LXByaW1hcnktY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdW5pbXBvcnRhbnQtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS11bmltcG9ydGFudC1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmVycm9yIHtcXG4gIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LWxpc3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7IFxcbiAgZ2FwOiA0OHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLmZhLXhtYXJrOmhvdmVyLFxcbi5mYS1lbGxpcHNpcy12ZXJ0aWNhbCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lbGxpcHNpcy1jb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG59XFxuXFxuLmVsbGlwc2lzLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLnRpdGxlLWNvbnRhaW5lciBsaSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxufVxcblxcbi50b2RvLWNhcmQgLnNlbGVjdGlvbi1jb250YWluZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNjBweDtcXG4gIGxlZnQ6IDIwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBw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QUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix5Q0FBeUM7QUFDM0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjZmVjYWNhO1xcbiAgLyogLS1zZWNvbmRhcnktY29sb3I6IGhzbCgwLCA4MyUsIDk4JSk7ICovXFxuICAtLXNlY29uZGFyeS1jb2xvcjogI0Y4RkZFODtcXG4gIC0tZ3JleS10ZXh0LWNvbG9yOiAjOWE5YTlhO1xcbiAgLS1saWdodC1ncmV5OiAjY2RjZGNkO1xcbiAgLS1saWdodGVyLWdyZXk6ICNmMWYxZjE7XFxuICAtLWNhcmQtY29sb3I6ICNGRkZGRkY7XFxuICAtLXVyZ2VudC1wcmltYXJ5LWNvbG9yOiAjRkYwMDAwO1xcbiAgLS11cmdlbnQtc2Vjb25kYXJ5LWNvbG9yOiAjRkZERURFO1xcbiAgLS11bmltcG9ydGFudC1wcmltYXJ5LWNvbG9yOiAjODY4Njg2O1xcbiAgLS11bmltcG9ydGFudC1zZWNvbmRhcnktY29sb3I6ICNENUQ1RDU7XFxuICAtLW5vcm1hbC1wcmltYXJ5LWNvbG9yOiAjMDA5NTJBO1xcbiAgLS1ub3JtYWwtc2Vjb25kYXJ5LWNvbG9yOiAjOTRGRkIyO1xcbiAgLS1lcnJvci1jb2xvcjogI2JkMDMwMztcXG4gIC0tcG9pbnRlcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgJ1JvYm90bycsICdzYW5zLXNlcmlmJztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5ib2R5LCBoMSwgaDIsIGgzLCBwLCB1bCwgbGkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmZvbnQtbGFyZ2Uge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZm9udC1tZWRpdW0ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5mb250LXJlZ3VsYXIge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uZm9udC1zbWFsbCB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbn1cXG5cXG4ucHJpbWFyeS1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnNlY29uZGFyeS1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4uZ3JleS1mb250IHtcXG4gIGNvbG9yOiB2YXIoLS1ncmV5LXRleHQtY29sb3IpO1xcbn1cXG5cXG4ubGlnaHQtZ3JleSB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxufVxcblxcbi5wLTI0IHtcXG4gIHBhZGRpbmc6IDI0cHg7XFxufVxcblxcbi5wLTQ4IHtcXG4gIHBhZGRpbmc6IDQ4cHg7XFxufVxcblxcbi5tYi04IHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLm1iLTE2IHtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5tYi0zMiB7XFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbn1cXG5cXG4ubWItNDgge1xcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcXG59XFxuXFxuLmZsZXgtY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuMWZyIDVmcjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNzaWRlYmFyIGgxIHtcXG4gIG1hcmdpbi1ib3R0b206IDg0cHg7XFxufVxcblxcbiNwcm9qZWN0LWNvbnRhaW5lciB7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxufVxcblxcbi5uYXYtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Byb2plY3RzIGxpIHtcXG4gIGN1cnNvcjogdmFyKC0tcG9pbnRlcik7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBtYXJnaW4tbGVmdDogMjRweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcGFkZGluZy10b3A6IDNweDtcXG59XFxuXFxuI3Byb2plY3RzIGxpOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jc2lkZWJhciBoMiB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jc2lkZWJhciBoMjpudGgtY2hpbGQobisxKSB7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4jc2lkZWJhciBoMjpudGgtb2YtdHlwZSgyKSB7XFxuICBtYXJnaW4tdG9wOiAzMnB4O1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG5cXG4jdG9kby1saXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tY29sdW1uczogMzUwcHg7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4udG9kby1jYXJkIHtcXG4gIHBhZGRpbmc6IDI0cHggMjhweCAzMnB4IDI4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtY29sb3IpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc3RhdHVzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjRweDtcXG59XFxuXFxuLnRvZG8tY2FyZCBoMyB7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4uY2hlY2tsaXN0LWNpcmNsZSB7XFxuICBtaW4td2lkdGg6IDE4cHg7XFxuICBtaW4taGVpZ2h0OiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBjdXJzb3I6IHZhcigtLXBvaW50ZXIpO1xcbn1cXG5cXG4uY2hlY2tsaXN0LWRpdmlkZSB7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG4uY2hlY2tsaXN0LWRpdmlkZSBociB7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbn1cXG5cXG4uYWRkLXRhc2stYnV0dG9uIHtcXG4gIGNvbG9yOiB2YXIoLS1ncmV5LXRleHQtY29sb3IpO1xcbiAgY3Vyc29yOiB2YXIoLS1wb2ludGVyKTtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgcGFkZGluZzogNnB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbn1cXG5cXG4uc3VibWl0LXRhc2stYnRuIHtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5ub3Rlcy1oZWFkaW5nIHtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxufVxcblxcbi5hZGQtdG9kby1idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyMjksIDIyOSk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGN1cnNvcjogdmFyKC0tcG9pbnRlcik7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbn1cXG5cXG4jdG9kby1mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA2MCU7XFxufVxcblxcbiN0b2RvLWZvcm0tY29udGFpbmVyIGlucHV0LCBcXG4jdG9kby1mb3JtLWNvbnRhaW5lciBzZWxlY3QsXFxuI3RvZG8tZm9ybS1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG4jdG9kby1mb3JtLWNvbnRhaW5lciBpbnB1dDpudGgtY2hpbGQobiszKSwgXFxuI3RvZG8tZm9ybS1jb250YWluZXIgc2VsZWN0LFxcbiN0b2RvLWZvcm0tY29udGFpbmVyIHRleHRhcmVhIHtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcblxcbiN0b2RvLWZvcm0tY29udGFpbmVyIGxhYmVsIHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4jdG9kby1mb3JtLWNvbnRhaW5lciBzZWxlY3QsXFxuI3RvZG8tZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1cXFwiZGF0ZXRpbWUtbG9jYWxcXFwiXSB7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuI3RvZG8tc3VibWl0LWJ0biB7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiN0b2RvLWZvcm0tY29udGFpbmVyIG9wdGlvbjpudGgtY2hpbGQobisxKSB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiN0b2RvLWZvcm0tY29udGFpbmVyIGJ1dHRvbiB7XFxuICB3aWR0aDogNDAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFzay1uYW1lLWNpcmNsZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTZweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciAuZmEteG1hcmsge1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuI3Byb2plY3QtbmFtZS1mb3JtIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLWNvbnRhaW5lciBidXR0b24ge1xcbiAgcGFkZGluZzogMHB4IDhweDtcXG4gIGhlaWdodDogMzdweFxcbn1cXG5cXG4uY2lyY2xlLWZpbGxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnRhc2stZG9uZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJpb3JpdHktbGFiZWwtdXJnZW50LFxcbi5wcmlvcml0eS1sYWJlbC1ub3JtYWwsXFxuLnByaW9yaXR5LWxhYmVsLXVuaW1wb3J0YW50IHtcXG4gIHBhZGRpbmc6IDRweCA2cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG59XFxuXFxuLnByaW9yaXR5LWxhYmVsLXVyZ2VudCB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXVyZ2VudC1wcmltYXJ5LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVyZ2VudC1zZWNvbmRhcnktY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXVyZ2VudC1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnByaW9yaXR5LWxhYmVsLW5vcm1hbCB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLW5vcm1hbC1wcmltYXJ5LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vcm1hbC1zZWNvbmRhcnktY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW5vcm1hbC1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnByaW9yaXR5LWxhYmVsLXVuaW1wb3J0YW50IHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdW5pbXBvcnRhbnQtcHJpbWFyeS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11bmltcG9ydGFudC1zZWNvbmRhcnktY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLXVuaW1wb3J0YW50LXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3QtbGlzdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDsgXFxuICBnYXA6IDQ4cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4uZmEteG1hcms6aG92ZXIsXFxuLmZhLWVsbGlwc2lzLXZlcnRpY2FsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVsbGlwc2lzLWNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbn1cXG5cXG4uZWxsaXBzaXMtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi50aXRsZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyIGxpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbi50aXRsZS1jb250YWluZXIgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG59XFxuXFxuLnRvZG8tY2FyZCAuc2VsZWN0aW9uLWNvbnRhaW5lciB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA2MHB4O1xcbiAgbGVmdDogMjAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCI7XG5pbXBvcnQgcHJvamVjdEZhY3RvcnkgZnJvbSAnLi9wcm9qZWN0J1xuaW1wb3J0IHRvZG9GYWN0b3J5IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB0YXNrRmFjdG9yeSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgdmlldyBmcm9tICcuL3ZpZXcnO1xuXG5jb25zdCBjb250cm9sbGVyID0gKCgpID0+IHtcbiAgbGV0IGN1cnJlbnRQcm9qZWN0SWQgPSB1c2VyLmdldFByb2plY3RJZENvdW50ZXIoKTtcblxuICBjb25zdCBpbml0aWFsaXplVXNlciA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9ICdZb3VyIFByb2plY3QnO1xuICAgIGNvbnN0IHByb2plY3REZXNjID0gJ1RoaXMgaXMgeW91ciBwcm9qZWN0LiBUaGlzIHRleHQgYmx1cmIgaXMgeW91ciBwcm9qZWN0IGRlc2NyaXB0aW9uLCBwdXQgYW55dGhpbmcgaGVyZS4nO1xuICAgIGNvbnN0IHByb2plY3RJZCA9IHVzZXIuZ2V0UHJvamVjdElkQ291bnRlcigpO1xuICAgIGN1cnJlbnRQcm9qZWN0SWQgPSB1c2VyLmdldFByb2plY3RJZENvdW50ZXIoKTtcbiAgICB1c2VyLmluY3JlbWVudFByb2plY3RJZENvdW50ZXIoKTtcbiAgICBjb25zdCBmaXJzdFByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShwcm9qZWN0TmFtZSwgcHJvamVjdERlc2MsIHByb2plY3RJZCk7XG4gICAgZmlyc3RQcm9qZWN0LmJpbmRPblRvZG9MaXN0Q2hhbmdlZChvblRvZG9MaXN0Q2hhbmdlZCk7XG4gICAgY29uc3QgdG9kb0lkID0gZmlyc3RQcm9qZWN0LmdldFRvZG9JZENvdW50ZXIoKTtcbiAgICBmaXJzdFByb2plY3QuaW5jcmVtZW50VG9kb0lkQ291bnRlcigpO1xuICAgIGNvbnN0IHRvZG9UaXRsZSA9ICdUbyBkbyc7XG4gICAgY29uc3QgdG9kb0Rlc2MgPSAnVGhpcyBpcyBhIHRvZG8uIEFkZCBjaGVja2xpc3QgdGFza3MsIGR1ZSBkYXRlcywgYW5kIHByaW9yaXRpZXMgaGVyZS4nO1xuICAgIGNvbnN0IGR1ZURhdGUgPSAnVHVlcywgMTA6IDMwIGFtJztcbiAgICBjb25zdCBwcmlvcml0eSA9ICdVcmdlbnQnO1xuICAgIGNvbnN0IG5vdGVzID0gJ0FkZCBub3RlcyBhbmQgYW55IGFkZGl0aW9uYWwgdGhvdWdodHMgaGVyZSc7XG4gICAgY29uc3QgZmlyc3RUb2RvID0gdG9kb0ZhY3RvcnkodG9kb0lkLCB0b2RvVGl0bGUsIHRvZG9EZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpO1xuICAgIGNvbnN0IHRhc2tOYW1lID0gJ01ha2UgeW91ciBmaXJzdCB0YXNrJztcbiAgICBjb25zdCBmaXJzdFRhc2sgPSB0YXNrRmFjdG9yeSh0YXNrTmFtZSwgZmlyc3RUb2RvLmdldFRhc2tJZENvdW50ZXIoKSk7XG4gICAgZmlyc3RUb2RvLmFkZFRhc2soZmlyc3RUYXNrKTtcbiAgICBmaXJzdFRvZG8uaW5jcmVtZW50VGFza0lkQ291bnRlcigpO1xuICAgIGZpcnN0UHJvamVjdC5pbml0aWFsQWRkVG9kbyhmaXJzdFRvZG8pO1xuICAgIHVzZXIuYWRkUHJvamVjdChmaXJzdFByb2plY3QpO1xuICB9XG5cbiAgY29uc3QgaW5pdGlhbGl6ZVNpZGViYXJWaWV3ID0gKCkgPT4ge1xuICAgIHVzZXIuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgdmlldy5zZXRQcm9qZWN0TGlzdEl0ZW0ocHJvamVjdC5nZXROYW1lKCksIHByb2plY3QuZ2V0SWQoKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdGlhbGl6ZVByb2plY3RWaWV3ID0gKCkgPT4ge1xuICAgIGlmICh1c2VyLmdldFByb2plY3RzKCkubGVuZ3RoICE9PSAwKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gdXNlci5nZXRQcm9qZWN0cygpWzBdO1xuICAgICAgdmlldy5zZXRDdXJyZW50UHJvamVjdElkKHByb2plY3QuZ2V0SWQoKSk7XG4gICAgICB2aWV3LnNldFByb2plY3RUaXRsZShwcm9qZWN0LmdldE5hbWUoKSk7XG4gICAgICB2aWV3LnNldFByb2plY3REZXNjcmlwdGlvbihwcm9qZWN0LmdldERlc2NyaXB0aW9uKCkpO1xuICAgICAgdmlldy5zZXRBZGRUb2RvQnV0dG9uKCk7XG4gICAgICBhZGRUb2Rvcyhwcm9qZWN0KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9hZFByb2plY3QgPSAoaWQpID0+IHtcbiAgICB2aWV3LnJlc2V0UHJvamVjdFZpZXcoKTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IHVzZXIuZ2V0UHJvamVjdHMoKTtcbiAgICBjb25zdCBwcm9qZWN0VGFyZ2V0ID0gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuZ2V0SWQoKSA9PT0gaWQpO1xuICAgIGN1cnJlbnRQcm9qZWN0SWQgPSBpZDtcbiAgICB2aWV3LnNldEN1cnJlbnRQcm9qZWN0SWQocHJvamVjdFRhcmdldC5nZXRJZCgpKTtcbiAgICB2aWV3LnNldFByb2plY3RUaXRsZShwcm9qZWN0VGFyZ2V0LmdldE5hbWUoKSk7XG4gICAgdmlldy5zZXRQcm9qZWN0RGVzY3JpcHRpb24ocHJvamVjdFRhcmdldC5nZXREZXNjcmlwdGlvbigpKTtcbiAgICB2aWV3LnNldEFkZFRvZG9CdXR0b24oKTtcbiAgICBhZGRUb2Rvcyhwcm9qZWN0VGFyZ2V0KTtcbiAgfVxuXG4gIGNvbnN0IGluaXRpYWxpemVWaWV3ID0gKCkgPT4ge1xuICAgIGluaXRpYWxpemVTaWRlYmFyVmlldygpO1xuICAgIGluaXRpYWxpemVQcm9qZWN0VmlldygpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRvZG9zID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gcHJvamVjdC5nZXRUb2RvTGlzdCgpO1xuICAgIGxpc3QuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIGNvbnN0IHRvZG9PYmogPSB7XG4gICAgICAgIHByb2plY3RJZDogcHJvamVjdC5nZXRJZCgpLFxuICAgICAgICB0b2RvSWQ6IHRvZG8uZ2V0SWQoKSxcbiAgICAgICAgdGl0bGU6IHRvZG8uZ2V0VGl0bGUoKSxcbiAgICAgICAgZHVlOiB0b2RvLmdldER1ZURhdGUoKSxcbiAgICAgICAgcHJpb3JpdHk6IHRvZG8uZ2V0UHJpb3JpdHkoKSxcbiAgICAgICAgZGVzYzogdG9kby5nZXREZXNjcmlwdGlvbigpLFxuICAgICAgICBpc01pbmltaXplZDogdG9kby5jaGVja0lzTWluaW1pemVkKCksXG4gICAgICAgIHRhc2tzOiB0b2RvLmdldENoZWNrTGlzdCgpLm1hcCh0YXNrID0+ICh7XG4gICAgICAgICAgbmFtZTogdGFzay5nZXROYW1lKCksXG4gICAgICAgICAgaWQ6IHRhc2suZ2V0SWQoKSxcbiAgICAgICAgICBpc0NvbXBsZXRlZDogdGFzay5jaGVja0NvbXBsZXRlZCgpXG4gICAgICAgIH0pKSxcbiAgICAgICAgbm90ZXM6IHRvZG8uZ2V0Tm90ZXMoKVxuICAgICAgfTtcbiAgICAgIHRvZG8uYmluZE9uVGFza0xpc3RDaGFuZ2Uob25UYXNrTGlzdENoYW5nZWQpO1xuICAgICAgdG9kby5iaW5kT25Ub2RvQ2hhbmdlKG9uVG9kb0NoYW5nZWQpO1xuICAgICAgdmlldy5hZGRUb2RvQ2FyZCh0b2RvT2JqKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBhZGRTdWJtaXRQcm9qZWN0RXZlbnQgPSAoKSA9PiB7XG4gICAgdmlldy5iaW5kU3VibWl0UHJvamVjdChoYW5kbGVTdWJtaXRQcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBhZGRTdWJtaXRUb2RvRXZlbnQgPSAoKSA9PiB7XG4gICAgdmlldy5iaW5kU3VibWl0VG9kbyhoYW5kbGVTdWJtaXRUb2RvKTtcbiAgfTtcblxuICAvLyBUZW1wb3JhcnkgaW1wbGVtZW50YXRpb24uIEluIGZ1dHVyZSByZXNldCBvbmx5IHRoZSB0YXNrIGxpc3Qgb2YgYVxuICAvLyB0b2RvIGNhcmQgaW5zdGVhZCBvZiBhbGwgdGhlIHRvZG8gY2FyZHMgaW4gYSBwcm9qZWN0LlxuICBjb25zdCBvblRhc2tMaXN0Q2hhbmdlZCA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHVzZXIuZ2V0UHJvamVjdEJ5SWQoY3VycmVudFByb2plY3RJZCk7XG4gICAgdmlldy5yZXNldFRvZG9zKCk7XG4gICAgYWRkVG9kb3MoY3VycmVudFByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IG9uVG9kb0xpc3RDaGFuZ2VkID0gKCkgPT4ge1xuICAgIG9uVGFza0xpc3RDaGFuZ2VkKCk7XG4gIH07XG5cbiAgY29uc3Qgb25Ub2RvQ2hhbmdlZCA9ICgpID0+IHtcbiAgICBvblRhc2tMaXN0Q2hhbmdlZCgpO1xuICB9XG5cbiAgY29uc3Qgb25Qcm9qZWN0TGlzdENoYW5nZSA9ICgpID0+IHtcbiAgICB2aWV3LnJlc2V0UHJvamVjdExpc3QoKTtcbiAgICB1c2VyLmdldFByb2plY3RzKCkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIHZpZXcuc2V0UHJvamVjdExpc3RJdGVtKHByb2plY3QuZ2V0TmFtZSgpLCBwcm9qZWN0LmdldElkKCkpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uUHJvamVjdFN3aXRjaCA9IChpZCkgPT4ge1xuICAgIGxvYWRQcm9qZWN0KGlkKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXRUYXNrID0gKHByb2plY3RJZCwgdG9kb0lkLCB0YXNrTmFtZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RUYXJnZXQgPSB1c2VyLmdldFByb2plY3RCeUlkKHByb2plY3RJZCk7XG4gICAgY29uc3QgdG9kb1RhcmdldCA9IHByb2plY3RUYXJnZXQuZ2V0VG9kb0J5SWQodG9kb0lkKTtcbiAgICBjb25zdCBuZXdUYXNrID0gdGFza0ZhY3RvcnkodGFza05hbWUsIHRvZG9UYXJnZXQuZ2V0VGFza0lkQ291bnRlcigpKTtcbiAgICB0b2RvVGFyZ2V0LmluY3JlbWVudFRhc2tJZENvdW50ZXIoKTtcbiAgICB0b2RvVGFyZ2V0LmFkZFRhc2sobmV3VGFzayk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXRUb2RvID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHVzZXIuZ2V0UHJvamVjdEJ5SWQodG9kby5wcm9qZWN0SWQpO1xuICAgIGNvbnN0IHRvZG9JZCA9IGN1cnJlbnRQcm9qZWN0LmdldFRvZG9JZENvdW50ZXIoKTtcbiAgICBjdXJyZW50UHJvamVjdC5pbmNyZW1lbnRUb2RvSWRDb3VudGVyKCk7XG4gICAgY29uc3QgbmV3VG9kbyA9IHRvZG9GYWN0b3J5KFxuICAgICAgdG9kb0lkLFxuICAgICAgdG9kby50aXRsZSxcbiAgICAgIHRvZG8uZGVzYyxcbiAgICAgIHRvZG8uZHVlLFxuICAgICAgdG9kby5wcmlvcml0eSxcbiAgICAgIHRvZG8ubm90ZXNcbiAgICApO1xuICAgIG5ld1RvZG8uYmluZE9uVGFza0xpc3RDaGFuZ2Uob25UYXNrTGlzdENoYW5nZWQpO1xuICAgIGN1cnJlbnRQcm9qZWN0LmFkZFRvZG8obmV3VG9kbyk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXRQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBkZXNjID0gJ1RoaXMgaXMgeW91ciBwcm9qZWN0LiBUaGlzIHRleHQgYmx1cmIgaXMgeW91ciBwcm9qZWN0IGRlc2NyaXB0aW9uLCBwdXQgYW55dGhpbmcgaGVyZS4nO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeShuYW1lLCBkZXNjLCB1c2VyLmdldFByb2plY3RJZENvdW50ZXIoKSk7XG4gICAgbmV3UHJvamVjdC5iaW5kT25Ub2RvTGlzdENoYW5nZWQob25Ub2RvTGlzdENoYW5nZWQpO1xuICAgIHVzZXIuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICB1c2VyLmluY3JlbWVudFByb2plY3RJZENvdW50ZXIoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVUYXNrVG9nZ2xlID0gKHRvZG9JZCwgdGFza0lkKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IHVzZXIuZ2V0UHJvamVjdEJ5SWQoY3VycmVudFByb2plY3RJZCk7XG4gICAgY29uc3QgdG9kbyA9IHByb2plY3QuZ2V0VG9kb0J5SWQodG9kb0lkKTtcbiAgICBjb25zdCB0YXNrID0gdG9kby5nZXRUYXNrQnlJZCh0YXNrSWQpO1xuICAgIHRhc2sudG9nZ2xlQ29tcGxldGUoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVQcm9qZWN0ID0gKHByb2plY3RJZCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSB1c2VyLmdldFByb2plY3RCeUlkKHByb2plY3RJZCk7XG4gICAgdXNlci5yZW1vdmVQcm9qZWN0KHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVRvZG8gPSAodG9kb0lkKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IHVzZXIuZ2V0UHJvamVjdEJ5SWQoY3VycmVudFByb2plY3RJZCk7XG4gICAgY29uc3QgdG9kbyA9IHByb2plY3QuZ2V0VG9kb0J5SWQodG9kb0lkKTtcbiAgICBwcm9qZWN0LnJlbW92ZVRvZG8odG9kbyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlVGFzayA9ICh0b2RvSWQsIHRhc2tJZCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSB1c2VyLmdldFByb2plY3RCeUlkKGN1cnJlbnRQcm9qZWN0SWQpO1xuICAgIGNvbnN0IHRvZG8gPSBwcm9qZWN0LmdldFRvZG9CeUlkKHRvZG9JZCk7XG4gICAgY29uc3QgdGFzayA9IHRvZG8uZ2V0VGFza0J5SWQodGFza0lkKTtcbiAgICB0b2RvLnJlbW92ZVRhc2sodGFzayk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTWluaW1pemVUb2RvID0gKHRvZG9JZCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSB1c2VyLmdldFByb2plY3RCeUlkKGN1cnJlbnRQcm9qZWN0SWQpO1xuICAgIGNvbnN0IHRvZG8gPSBwcm9qZWN0LmdldFRvZG9CeUlkKHRvZG9JZCk7XG4gICAgdG9kby50b2dnbGVNaW5pbWl6ZSgpO1xuICB9O1xuICBcbiAgaW5pdGlhbGl6ZVVzZXIoKTtcbiAgdmlldy5iaW5kQWRkVGFzayhoYW5kbGVTdWJtaXRUYXNrKTtcbiAgdmlldy5iaW5kQWRkVG9kbyhhZGRTdWJtaXRUb2RvRXZlbnQpO1xuICB2aWV3LmJpbmRBZGRQcm9qZWN0KGFkZFN1Ym1pdFByb2plY3RFdmVudCk7XG4gIHVzZXIuYmluZFByb2plY3RMaXN0Q2hhbmdlZChvblByb2plY3RMaXN0Q2hhbmdlKTtcbiAgdmlldy5iaW5kQ2hhbmdlUHJvamVjdChvblByb2plY3RTd2l0Y2gpO1xuICB2aWV3LmJpbmRUb2dnbGVUYXNrKGhhbmRsZVRhc2tUb2dnbGUpO1xuICB2aWV3LmJpbmREZWxldGVQcm9qZWN0KGhhbmRsZURlbGV0ZVByb2plY3QpO1xuICB2aWV3LmJpbmREZWxldGVUYXNrKGhhbmRsZURlbGV0ZVRhc2spO1xuICB2aWV3LmJpbmREZWxldGVUb2RvKGhhbmRsZURlbGV0ZVRvZG8pO1xuICB2aWV3LmJpbmRNaW5pbWl6ZVRvZG8oaGFuZGxlTWluaW1pemVUb2RvKTtcblxuICByZXR1cm4geyBpbml0aWFsaXplVmlldyB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbGxlcjsiLCJjb25zdCBwcm9qZWN0RmFjdG9yeSA9IChuYW1lLCBkZXNjcmlwdGlvbiwgaWQpID0+IHtcbiAgY29uc3QgdG9kb0xpc3QgPSBbXTtcbiAgbGV0IHRvZG9JZENvdW50ZXIgPSAwO1xuICBsZXQgb25Ub2RvTGlzdENoYW5nZWQgPSAoKSA9PiB7fTtcblxuICBjb25zdCBpbmNyZW1lbnRUb2RvSWRDb3VudGVyID0gKCkgPT4ge1xuICAgIHRvZG9JZENvdW50ZXIgKz0gMTtcbiAgfTtcbiAgY29uc3QgZ2V0VG9kb0J5SWQgPSAoaWQpID0+IHtcbiAgICByZXR1cm4gdG9kb0xpc3QuZmluZCh0b2RvID0+IHRvZG8uZ2V0SWQoKSA9PT0gaWQpO1xuICB9XG4gIGNvbnN0IGdldFRvZG9JZENvdW50ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRvZG9JZENvdW50ZXI7XG4gIH07XG4gIGNvbnN0IGNvcHlQcm9qZWN0ID0gKCkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0RmFjdG9yeShuYW1lLCBkZXNjcmlwdGlvbik7XG4gIH07XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbmFtZTtcbiAgfTtcblxuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gIH07XG5cbiAgY29uc3QgZ2V0VG9kb0xpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRvZG9MaXN0O1xuICB9O1xuXG4gIGNvbnN0IGVkaXROYW1lID0gKG5ld05hbWUpID0+IHtcbiAgICBuYW1lID0gbmV3TmFtZTtcbiAgfTtcblxuICBjb25zdCBlZGl0RGVzY3JpcHRpb24gPSAobmV3RGVzYykgPT4ge1xuICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzYztcbiAgfTtcblxuICBjb25zdCBpbml0aWFsQWRkVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgdG9kb0xpc3QucHVzaCh0b2RvKTtcbiAgfTtcblxuICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHtcbiAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xuICAgIG9uVG9kb0xpc3RDaGFuZ2VkKCk7XG4gIH1cblxuICBjb25zdCByZW1vdmVUb2RvID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRvZG9MaXN0LmluZGV4T2YodG9kbyk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRvZG9MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIG9uVG9kb0xpc3RDaGFuZ2VkKCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0SWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGlkO1xuICB9XG5cbiAgY29uc3Qgc2V0SWQgPSAobmV3SWQpID0+IHtcbiAgICBpZCA9IG5ld0lkO1xuICB9XG5cbiAgY29uc3QgYmluZE9uVG9kb0xpc3RDaGFuZ2VkID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgb25Ub2RvTGlzdENoYW5nZWQgPSBjYWxsYmFjaztcbiAgfTtcblxuICByZXR1cm4geyBcbiAgICBpbmNyZW1lbnRUb2RvSWRDb3VudGVyLFxuICAgIGdldFRvZG9CeUlkLFxuICAgIGdldFRvZG9JZENvdW50ZXIsXG4gICAgZ2V0TmFtZSxcbiAgICBnZXREZXNjcmlwdGlvbixcbiAgICBnZXRUb2RvTGlzdCxcbiAgICBjb3B5UHJvamVjdCxcbiAgICBlZGl0TmFtZSxcbiAgICBlZGl0RGVzY3JpcHRpb24sXG4gICAgaW5pdGlhbEFkZFRvZG8sXG4gICAgYWRkVG9kbyxcbiAgICByZW1vdmVUb2RvLFxuICAgIGdldElkLFxuICAgIHNldElkLFxuICAgIGJpbmRPblRvZG9MaXN0Q2hhbmdlZFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdEZhY3Rvcnk7IiwiY29uc3QgdGFza0ZhY3RvcnkgPSAobmFtZSwgaWQpID0+IHtcbiAgbGV0IGlzQ29tcGxldGVkID0gZmFsc2U7XG5cbiAgY29uc3QgZ2V0SWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGlkO1xuICB9XG4gIGNvbnN0IHNldElkID0gKG5ld0lkKSA9PiB7XG4gICAgaWQgPSBuZXdJZDtcbiAgfVxuICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgIHJldHVybiBuYW1lO1xuICB9O1xuICBjb25zdCBjaGVja0NvbXBsZXRlZCA9ICgpID0+IHtcbiAgICByZXR1cm4gaXNDb21wbGV0ZWQ7XG4gIH07XG4gIGNvbnN0IGVkaXROYW1lID0gKG5ld05hbWUpID0+IHtcbiAgICBuYW1lID0gbmV3TmFtZTtcbiAgfTtcbiAgY29uc3QgdG9nZ2xlQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgaXNDb21wbGV0ZWQgPSAhaXNDb21wbGV0ZWQ7XG4gICAgY29uc29sZS5sb2coe2lkLCBpc0NvbXBsZXRlZH0pXG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0SWQsIHNldElkLCBnZXROYW1lLCBjaGVja0NvbXBsZXRlZCwgZWRpdE5hbWUsIHRvZ2dsZUNvbXBsZXRlfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tGYWN0b3J5OyIsImNvbnN0IHRvZG9GYWN0b3J5ID0gKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcykgPT4ge1xuICBjb25zdCBjaGVja0xpc3QgPSBbXTtcbiAgbGV0IHRhc2tJZENvdW50ZXIgPSAwO1xuICBsZXQgb25UYXNrTGlzdENoYW5nZSA9ICgpID0+IHt9O1xuICBsZXQgb25Ub2RvQ2hhbmdlID0gKCkgPT4ge307XG4gIGxldCBpc01pbmltaXplZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGdldFRhc2tCeUlkID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIGNoZWNrTGlzdC5maW5kKHRhc2sgPT4gdGFzay5nZXRJZCgpID09PSBpZCk7XG4gIH1cbiAgY29uc3QgZ2V0VGFza0lkQ291bnRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gdGFza0lkQ291bnRlcjtcbiAgfTtcbiAgY29uc3QgaW5jcmVtZW50VGFza0lkQ291bnRlciA9ICgpID0+IHtcbiAgICB0YXNrSWRDb3VudGVyICs9IDE7XG4gIH07XG4gIGNvbnN0IGdldElkID0gKCkgPT4ge1xuICAgIHJldHVybiBpZDtcbiAgfTtcbiAgY29uc3Qgc2V0SWQgPSAobmV3SWQpID0+IHtcbiAgICBpZCA9IG5ld0lkO1xuICB9O1xuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGl0bGU7XG4gIH07XG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgfTtcbiAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gZHVlRGF0ZTtcbiAgfTtcbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByaW9yaXR5O1xuICB9O1xuICBjb25zdCBnZXROb3RlcyA9ICgpID0+IHtcbiAgICByZXR1cm4gbm90ZXM7XG4gIH07XG4gIGNvbnN0IGdldENoZWNrTGlzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gY2hlY2tMaXN0O1xuICB9XG4gIGNvbnN0IGVkaXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuICAgIHRpdGxlID0gbmV3VGl0bGU7XG4gIH07XG4gIGNvbnN0IGVkaXREZXNjcmlwdGlvbiA9IChuZXdEZXNjKSA9PiB7XG4gICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjO1xuICB9O1xuICBjb25zdCBlZGl0RHVlRGF0ZSA9IChuZXdEdWVEYXRlKSA9PiB7XG4gICAgZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gIH07XG4gIGNvbnN0IGVkaXROb3RlcyA9IChuZXdOb3RlcykgPT4ge1xuICAgIG5vdGVzID0gbmV3Tm90ZXM7XG4gIH07XG4gIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge1xuICAgIGNoZWNrTGlzdC5wdXNoKHRhc2spO1xuICAgIG9uVGFza0xpc3RDaGFuZ2UoaWQpO1xuICB9O1xuICBjb25zdCByZW1vdmVUYXNrID0gKHRhc2spID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGNoZWNrTGlzdC5pbmRleE9mKHRhc2spO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBjaGVja0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgb25UYXNrTGlzdENoYW5nZSgpO1xuICB9O1xuICBjb25zdCB0b2dnbGVNaW5pbWl6ZSA9ICgpID0+IHtcbiAgICBpc01pbmltaXplZCA9ICFpc01pbmltaXplZDtcbiAgICBvblRhc2tMaXN0Q2hhbmdlKCk7XG4gIH07XG4gIGNvbnN0IGNoZWNrSXNNaW5pbWl6ZWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGlzTWluaW1pemVkO1xuICB9O1xuXG4gIGNvbnN0IGJpbmRPblRhc2tMaXN0Q2hhbmdlID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgb25UYXNrTGlzdENoYW5nZSA9IGNhbGxiYWNrO1xuICB9O1xuXG4gIGNvbnN0IGJpbmRPblRvZG9DaGFuZ2UgPSAoY2FsbGJhY2spID0+IHtcbiAgICBvblRvZG9DaGFuZ2UgPSBjYWxsYmFjaztcbiAgfVxuICBcbiAgcmV0dXJuIHtcbiAgICBnZXRUYXNrQnlJZCxcbiAgICBnZXRUYXNrSWRDb3VudGVyLFxuICAgIGluY3JlbWVudFRhc2tJZENvdW50ZXIsXG4gICAgZ2V0SWQsXG4gICAgc2V0SWQsXG4gICAgZ2V0VGl0bGUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0RHVlRGF0ZSxcbiAgICBnZXRQcmlvcml0eSxcbiAgICBnZXROb3RlcyxcbiAgICBnZXRDaGVja0xpc3QsXG4gICAgZWRpdFRpdGxlLFxuICAgIGVkaXREZXNjcmlwdGlvbixcbiAgICBlZGl0RHVlRGF0ZSxcbiAgICBlZGl0Tm90ZXMsXG4gICAgYWRkVGFzayxcbiAgICByZW1vdmVUYXNrLFxuICAgIGJpbmRPblRhc2tMaXN0Q2hhbmdlLFxuICAgIGJpbmRPblRvZG9DaGFuZ2UsXG4gICAgdG9nZ2xlTWluaW1pemUsXG4gICAgY2hlY2tJc01pbmltaXplZCxcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kb0ZhY3Rvcnk7IiwiaW1wb3J0IHRvZG9GYWN0b3J5IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB0YXNrRmFjdG9yeSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgcHJvamVjdEZhY3RvcnkgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jb25zdCB1c2VyID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcbiAgbGV0IHByb2plY3RJZENvdW50ZXIgPSAwO1xuICBsZXQgb25Qcm9qZWN0c0xpc3RDaGFuZ2VkID0gKCkgPT4ge307XG5cbiAgY29uc3QgaW5jcmVtZW50UHJvamVjdElkQ291bnRlciA9ICgpID0+IHtcbiAgICBwcm9qZWN0SWRDb3VudGVyICs9IDE7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdElkQ291bnRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdElkQ291bnRlcjtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdHM7XG4gIH1cbiAgY29uc3QgZ2V0UHJvamVjdEJ5SWQgPSAoaWQpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuZ2V0SWQoKSA9PT0gaWQpO1xuICB9O1xuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuXG4gICAgb25Qcm9qZWN0c0xpc3RDaGFuZ2VkKCk7XG4gIH07XG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgb25Qcm9qZWN0c0xpc3RDaGFuZ2VkKCk7XG4gIH07XG5cbiAgY29uc3QgYmluZFByb2plY3RMaXN0Q2hhbmdlZCA9IChjYWxsYmFjaykgPT4ge1xuICAgIG9uUHJvamVjdHNMaXN0Q2hhbmdlZCA9IGNhbGxiYWNrO1xuICB9XG5cbiAgcmV0dXJuIHsgXG4gICAgZ2V0UHJvamVjdHMsIFxuICAgIGFkZFByb2plY3QsIFxuICAgIHJlbW92ZVByb2plY3QsIFxuICAgIGJpbmRQcm9qZWN0TGlzdENoYW5nZWQsXG4gICAgZ2V0UHJvamVjdEJ5SWQsXG4gICAgaW5jcmVtZW50UHJvamVjdElkQ291bnRlcixcbiAgICBnZXRQcm9qZWN0SWRDb3VudGVyIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyOyIsImNvbnN0IHZpZXdIZWxwZXJzID0gKCgpID0+IHtcblxuICAvLyBVc2VkIGZ1bmN0aW9uIGluc3RlYWQgb2YgYXJyb3cgZnVuY3Rpb24gYmVjYXVzZSBcbiAgLy8gdmFyaWFibGUgYXJndW1lbnRzIGlzIGJ1Z2d5IHdpdGggYXJyb3cgZnVuY3Rpb25zLlxuXG4gIGZ1bmN0aW9uIGNyZWF0ZURpdigpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7YXJndW1lbnRzW2ldfWApO1xuICAgIH1cbiAgICByZXR1cm4gZGl2O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUlkRGl2KGlkKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlkID0gaWQ7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGAke2FyZ3VtZW50c1tpXX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpdjtcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVMaXN0KGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKGAke2FyZ3VtZW50c1tpXX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH07XG5cbiAgZnVuY3Rpb24gY3JlYXRlTGlzdEl0ZW0obGlzdCwgdGV4dCkge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBpZiAodGV4dCkge1xuICAgICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICByZXR1cm4gbGlzdEl0ZW07XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnB1dEZvcm0oaWQsIHBsYWNlaG9sZGVyLCBjb250YWluZXIpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaWYgKGlkICE9PSAnbm9uZScpIHtcbiAgICAgIGlucHV0LmlkID0gaWQ7XG4gICAgfVxuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgZm9yIChsZXQgaSA9IDM7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoYCR7YXJndW1lbnRzW2ldfWApO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHJldHVybiBpbnB1dDtcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVGb3JtTGFiZWwoaWQsIHRleHQsIGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC5pZCA9IGlkO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIHJldHVybiBsYWJlbDtcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVUZXh0QXJlYUZvcm0oaWQsIHBsYWNlaG9sZGVyLCBjb250YWluZXIpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgaW5wdXQuaWQgPSBpZDtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgIGZvciAobGV0IGkgPSAzOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKGAke2FyZ3VtZW50c1tpXX1gKTtcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH07XG5cbiAgZnVuY3Rpb24gY3JlYXRlRGF0ZVRpbWVJbnB1dChpZCwgY29udGFpbmVyKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnR5cGUgPSAnZGF0ZXRpbWUtbG9jYWwnO1xuICAgIGlucHV0LmlkID0gaWQ7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVCdXR0b25Gb3JtKGVsZW1lbnQsIGlkLCB0ZXh0LCBjb250YWluZXIpIHtcbiAgICBsZXQgYnRuO1xuICAgIGlmIChlbGVtZW50ID09PSAnZGl2Jykge1xuICAgICAgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50ID09PSAnYnV0dG9uJykge1xuICAgICAgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgfVxuICAgIGJ0bi5pZCA9IGlkO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgZm9yIChsZXQgaSA9IDQ7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKGAke2FyZ3VtZW50c1tpXX1gKTtcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgcmV0dXJuIGJ0bjtcbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVTZWxlY3RGb3JtKGlkLCBjb250YWluZXIsIHRleHQpIHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBzZWxlY3QuaWQgPSBpZDtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24udmFsdWUgPSAnJztcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIGZvciAobGV0IGkgPSAzOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBvcHRpb25zLnZhbHVlID0gYXJndW1lbnRzW2ldO1xuICAgICAgb3B0aW9ucy50ZXh0Q29udGVudCA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25zKTtcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIElmIGluc2VydFBvc2l0aW9uIGlzICdiZWZvcmUnLCBhcmd1bWVudFs0XSBzaG91bGQgYmUgdGhlXG4gICAqIG5vZGUgdG8gaW5zZXJ0IGJlZm9yZS5cbiAgICogSWYgaW5zZXJ0UG9zaXRpb24gaXMgJ2FmdGVyJyBhbmQgdGhlcmUgYXJlIGNsYXNzZXMgdG8gYWRkLFxuICAgKiBhcmd1bWVudFs0XSBzaG91bGQgYmUgZmlsbGVkIHdpdGggYW55IHZhbHVlLlxuICAgKi9cbiAgZnVuY3Rpb24gY3JlYXRlVGV4dChjb250YWluZXIsIGluc2VydFBvc2l0aW9uLCBlbGVtZW50LCB0ZXh0KSB7XG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke2VsZW1lbnR9YCk7XG4gICAgdGV4dEVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGZvciAobGV0IGkgPSA1OyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0ZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2FyZ3VtZW50c1tpXX1gKTtcbiAgICB9XG4gICAgaWYgKGluc2VydFBvc2l0aW9uID09PSAnYmVmb3JlJykge1xuICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZSh0ZXh0RWxlbWVudCwgYXJndW1lbnRzWzRdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRFbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHRleHRFbGVtZW50O1xuICB9O1xuICBcbiAgZnVuY3Rpb24gY3JlYXRlSWNvbihjb250YWluZXIpIHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpY29uLmNsYXNzTGlzdC5hZGQoYCR7YXJndW1lbnRzW2ldfWApO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgcmV0dXJuIGljb247XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVEaXYsXG4gICAgY3JlYXRlSWREaXYsXG4gICAgY3JlYXRlTGlzdCxcbiAgICBjcmVhdGVMaXN0SXRlbSxcbiAgICBjcmVhdGVJbnB1dEZvcm0sXG4gICAgY3JlYXRlRGF0ZVRpbWVJbnB1dCxcbiAgICBjcmVhdGVGb3JtTGFiZWwsXG4gICAgY3JlYXRlVGV4dEFyZWFGb3JtLFxuICAgIGNyZWF0ZUJ1dHRvbkZvcm0sXG4gICAgY3JlYXRlU2VsZWN0Rm9ybSxcbiAgICBjcmVhdGVUZXh0LFxuICAgIGNyZWF0ZUljb25cbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHZpZXdIZWxwZXJzOyIsImltcG9ydCBoZWxwZXIgZnJvbSAnLi92aWV3LWhlbHBlcnMnO1xuXG5jb25zdCB2aWV3ID0gKCgpID0+IHtcbiAgbGV0IGN1cnJlbnRQcm9qZWN0SWQ7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhcicpO1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cycpO1xuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LWJ0bicpO1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtY29udGFpbmVyJyk7XG4gIGxldCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWxpc3QnKTtcbiAgY29uc3Qgc2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2V0dGluZ3MnKTtcbiAgbGV0IHNob3dQcm9qZWN0Rm9ybUV2ZW50ID0gKCkgPT4ge307XG4gIGxldCBzZXRUb2RvRm9ybUV2ZW50ID0gKCkgPT4ge307XG4gIGxldCBzZXRQcm9qZWN0U3dpdGNoRXZlbnQgPSAoKSA9PiB7fTtcbiAgbGV0IGFkZFRvZG9FdmVudCA9ICgpID0+IHt9O1xuICBsZXQgYWRkVGFza0V2ZW50ID0gKCkgPT4ge307XG4gIGxldCB0b2dnbGVUYXNrRXZlbnQgPSAoKSA9PiB7fTtcbiAgbGV0IGRlbGV0ZVByb2plY3RFdmVudCA9ICgpID0+IHt9O1xuICBsZXQgZGVsZXRlVG9kb0V2ZW50ID0gKCkgPT4ge307XG4gIGxldCBkZWxldGVUYXNrRXZlbnQgPSAoKSA9PiB7fTtcbiAgbGV0IG1pbmltaXplVG9kb0V2ZW50ID0gKCkgPT4ge307XG5cbiAgY29uc3Qgc2V0Q3VycmVudFByb2plY3RJZCA9IChpZCkgPT4ge1xuICAgIGN1cnJlbnRQcm9qZWN0SWQgPSBpZDtcbiAgfTtcblxuICBjb25zdCByZXNldFByb2plY3RWaWV3ID0gKCkgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gcHJvamVjdENvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkO1xuICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICBwcm9qZWN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgZWxlbWVudCA9IHByb2plY3RDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZDtcbiAgICB9XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChoZWxwZXIuY3JlYXRlSWREaXYoJ3RvZG8tbGlzdCcpKTtcbiAgICB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWxpc3QnKTtcbiAgfTtcblxuICBjb25zdCByZXNldFByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gcHJvamVjdHMuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgIGlmIChlbGVtZW50LmlkID09PSAnYWRkLXByb2plY3QtYnRuJykge1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RzLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICBlbGVtZW50ID0gcHJvamVjdHMuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICB9IFxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXRQcm9qZWN0TGlzdEl0ZW0gPSAocHJvamVjdCwgcHJvamVjdElkKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdExpc3RDb250YWluZXIgPSBoZWxwZXIuY3JlYXRlRGl2KCdwcm9qZWN0LWxpc3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJvamVjdExpc3RJdGVtID0gaGVscGVyLmNyZWF0ZUxpc3RJdGVtKHByb2plY3RMaXN0Q29udGFpbmVyLCBwcm9qZWN0KTtcbiAgICBwcm9qZWN0TGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdwcm9qZWN0LWlkJywgcHJvamVjdElkKTtcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0SWNvbiA9IGhlbHBlci5jcmVhdGVJY29uKHByb2plY3RMaXN0Q29udGFpbmVyLCAnZmEtc29saWQnLCAnZmEteG1hcmsnLCAnZmEtbGcnLCAnaGlkZGVuJyk7XG4gICAgcHJvamVjdHMuaW5zZXJ0QmVmb3JlKHByb2plY3RMaXN0Q29udGFpbmVyLCBhZGRQcm9qZWN0QnV0dG9uKTtcbiAgICBwcm9qZWN0TGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAocHJvamVjdElkICE9PSBjdXJyZW50UHJvamVjdElkKSB7XG4gICAgICAgIHNldFByb2plY3RTd2l0Y2hFdmVudChwcm9qZWN0SWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHByb2plY3RMaXN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICBkZWxldGVQcm9qZWN0SWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0TGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgZGVsZXRlUHJvamVjdEljb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfSk7XG4gICAgZGVsZXRlUHJvamVjdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkZWxldGVQcm9qZWN0RXZlbnQocHJvamVjdElkKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzZXRQcm9qZWN0VGl0bGUgPSAodGl0bGUpID0+IHtcbiAgICBoZWxwZXIuY3JlYXRlVGV4dChwcm9qZWN0Q29udGFpbmVyLCAnYmVmb3JlJywgJ2gyJywgdGl0bGUsIHRvZG9MaXN0LCAnZm9udC1tZWRpdW0nLCAnbWItMTYnKTtcbiAgfTtcblxuICBjb25zdCBzZXRQcm9qZWN0RGVzY3JpcHRpb24gPSAoZGVzY3JpcHRpb24pID0+IHtcbiAgICBoZWxwZXIuY3JlYXRlVGV4dChwcm9qZWN0Q29udGFpbmVyLCAnYmVmb3JlJywgJ3AnLCBkZXNjcmlwdGlvbiwgdG9kb0xpc3QsICdmb250LXJlZ3VsYXInLCAnbWItNDgnKTtcbiAgfTtcblxuICBjb25zdCByZXNldFRvZG9zID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9MaXN0SXRlbXMgPSB0b2RvTGlzdC5jaGlsZHJlbjtcbiAgICBjb25zdCBsaXN0TGVuZ3RoID0gdG9kb0xpc3RJdGVtcy5sZW5ndGgtMTtcbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBsaXN0TGVuZ3RoKSB7XG4gICAgICB0b2RvTGlzdC5yZW1vdmVDaGlsZCh0b2RvTGlzdEl0ZW1zWzBdKTtcbiAgICAgIGkrKztcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0VG9kb1RpdGxlID0gKHRvZG9JZCwgdGl0bGUsIHRvZG9DYXJkLCBjYXJkU2VjdGlvbikgPT4ge1xuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gaGVscGVyLmNyZWF0ZURpdigndGl0bGUtY29udGFpbmVyJyk7XG4gICAgaGVscGVyLmNyZWF0ZVRleHQodGl0bGVDb250YWluZXIsICdhZnRlcicsICdoMicsIHRpdGxlLCAnbm9uZScsICdmb250LW1lZGl1bScpO1xuICAgIGNvbnN0IGVsbGlwc2lzID0gaGVscGVyLmNyZWF0ZUljb24odGl0bGVDb250YWluZXIsICdmYS1zb2xpZCcsICdmYS1lbGxpcHNpcy12ZXJ0aWNhbCcsICdmYS1sZycsICdlbGxpcHNpcy1jb250YWluZXInKTtcbiAgICBjb25zdCBmbG9hdGluZ1NlbGVjdGlvbiA9IGNyZWF0ZUZsb2F0aW5nU2VsZWN0aW9uKHRvZG9JZCwgdGl0bGVDb250YWluZXIsIGNhcmRTZWN0aW9uKTtcbiAgICBmbG9hdGluZ1NlbGVjdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB0b2RvQ2FyZC5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG5cbiAgICBlbGxpcHNpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGZsb2F0aW5nU2VsZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUZsb2F0aW5nU2VsZWN0aW9uKHRvZG9JZCwgY29udGFpbmVyLCBjYXJkU2VjdGlvbikge1xuICAgIGNvbnN0IHNlbGVjdGlvbkNvbnRhaW5lciA9IGhlbHBlci5jcmVhdGVEaXYoJ3NlbGVjdGlvbi1jb250YWluZXInKTtcbiAgICBjb25zdCBvcHRpb25zTGlzdCA9IGhlbHBlci5jcmVhdGVMaXN0KHNlbGVjdGlvbkNvbnRhaW5lciwgJ29wdGlvbnMtbGlzdCcpO1xuICAgIGNvbnN0IG1pbmltaXplQ2FyZE9wdGlvbiA9IGhlbHBlci5jcmVhdGVMaXN0SXRlbShvcHRpb25zTGlzdCwgJ01pbmltaXplIFRvZG8nKTtcbiAgICBjb25zdCBkZWxldGVUb2RvT3B0aW9uID0gaGVscGVyLmNyZWF0ZUxpc3RJdGVtKG9wdGlvbnNMaXN0LCAnRGVsZXRlIFRvZG8nKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0aW9uQ29udGFpbmVyKTtcbiAgICAoY2FyZFNlY3Rpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkgP1xuICAgICAgICBtaW5pbWl6ZUNhcmRPcHRpb24udGV4dENvbnRlbnQgPSAnTWF4aW1pemUgVG9kbycgOlxuICAgICAgICBtaW5pbWl6ZUNhcmRPcHRpb24udGV4dENvbnRlbnQgPSAnTWluaW1pemUgVG9kbyc7XG4gICAgbWluaW1pemVDYXJkT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbWluaW1pemVUb2RvRXZlbnQodG9kb0lkKTtcbiAgICB9KTtcbiAgICBkZWxldGVUb2RvT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZGVsZXRlVG9kb0V2ZW50KHRvZG9JZCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2VsZWN0aW9uQ29udGFpbmVyO1xuICB9O1xuXG4gIGNvbnN0IHNldFRvZG9TdGF0dXMgPSAoZHVlRGF0ZSwgcHJpb3JpdHksIHRvZG9DYXJkKSA9PiB7XG4gICAgY29uc3Qgc3RhdHVzID0gaGVscGVyLmNyZWF0ZURpdignbWItMTYnLCAnc3RhdHVzLWNvbnRhaW5lcicpXG4gICAgaGVscGVyLmNyZWF0ZVRleHQoc3RhdHVzLCAnYWZ0ZXInLCAncCcsIGBEdWU6ICR7ZHVlRGF0ZX1gLCAnbm9uZScsICdmb250LXNtYWxsJyk7XG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGhlbHBlci5jcmVhdGVUZXh0KHN0YXR1cywgJ2FmdGVyJywgJ3AnLCBwcmlvcml0eSwgJ25vbmUnLCAnZm9udC1zbWFsbCcpO1xuICAgIGlmIChwcmlvcml0eS50b0xvd2VyQ2FzZSgpID09PSAndXJnZW50Jykge1xuICAgICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sYWJlbC11cmdlbnQnKTtcbiAgICB9IGVsc2UgaWYgKHByaW9yaXR5LnRvTG93ZXJDYXNlKCkgPT09ICdub3JtYWwnKSB7XG4gICAgICBwcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxhYmVsLW5vcm1hbCcpO1xuICAgIH0gZWxzZSBpZiAocHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gJ3VuaW1wb3J0YW50Jykge1xuICAgICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sYWJlbC11bmltcG9ydGFudCcpO1xuICAgIH1cbiAgICB0b2RvQ2FyZC5hcHBlbmRDaGlsZChzdGF0dXMpO1xuICB9O1xuXG4gIGNvbnN0IHNldFRvZG9EZXNjcmlwdGlvbiA9IChkZXNjLCB0b2RvQ2FyZCkgPT4ge1xuICAgIGhlbHBlci5jcmVhdGVUZXh0KHRvZG9DYXJkLCAnYWZ0ZXInLCAncCcsIGRlc2MsICdub25lJywgJ21iLTgnKTtcbiAgfTtcblxuICBjb25zdCBzZXRUYXNrID0gKHRhc2ssIGNvbnRhaW5lcikgPT4ge1xuICAgIGNvbnN0IHRhc2tOYW1lID0gaGVscGVyLmNyZWF0ZVRleHQoY29udGFpbmVyLCAnYWZ0ZXInLCAncCcsIHRhc2spO1xuICAgIHJldHVybiB0YXNrTmFtZTtcbiAgfTtcblxuICBjb25zdCBzZXRUYXNrQ2hlY2tDaXJjbGUgPSAodG9kb0lkLCBjb250YWluZXIsIHRhc2tFbGVtZW50LCB0YXNrT2JqKSA9PiB7XG4gICAgY29uc3QgY2hlY2tsaXN0Q2lyY2xlID0gaGVscGVyLmNyZWF0ZURpdignY2hlY2tsaXN0LWNpcmNsZScpO1xuICAgIGlmICh0YXNrT2JqLmlzQ29tcGxldGVkKSB7XG4gICAgICBjaGVja2xpc3RDaXJjbGUuY2xhc3NMaXN0LmFkZCgnY2lyY2xlLWZpbGxlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGVja2xpc3RDaXJjbGUuY2xhc3NMaXN0LnJlbW92ZSgnY2lyY2xlLWZpbGxlZCcpO1xuICAgIH1cbiAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGNoZWNrbGlzdENpcmNsZSwgdGFza0VsZW1lbnQpO1xuICAgIGNoZWNrbGlzdENpcmNsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNoZWNrbGlzdENpcmNsZS5jbGFzc0xpc3QudG9nZ2xlKCdjaXJjbGUtZmlsbGVkJyk7XG4gICAgICB0YXNrRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCd0YXNrLWRvbmUnKTtcbiAgICAgIHRvZ2dsZVRhc2tFdmVudCh0b2RvSWQsIHRhc2tPYmouaWQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNldFRvZG9UYXNrcyA9ICh0b2RvSWQsIHRhc2tzLCB0b2RvQ2FyZCkgPT4ge1xuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gaGVscGVyLmNyZWF0ZURpdigndGFzay1jb250YWluZXInKTtcbiAgICAgIGNvbnN0IHRhc2tOYW1lQ2lyY2xlQ29udGFpbmVyID0gaGVscGVyLmNyZWF0ZURpdigndGFzay1uYW1lLWNpcmNsZS1jb250YWluZXInKTtcbiAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gc2V0VGFzayh0YXNrLm5hbWUsIHRhc2tOYW1lQ2lyY2xlQ29udGFpbmVyKTtcbiAgICAgIGlmICh0YXNrLmlzQ29tcGxldGVkKSB7XG4gICAgICAgIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZG9uZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1kb25lJyk7XG4gICAgICB9XG4gICAgICBzZXRUYXNrQ2hlY2tDaXJjbGUodG9kb0lkLCB0YXNrTmFtZUNpcmNsZUNvbnRhaW5lciwgdGFza0VsZW1lbnQsIHRhc2spO1xuICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTmFtZUNpcmNsZUNvbnRhaW5lcik7XG4gICAgICBjb25zdCBkZWxldGVQcm9qZWN0SWNvbiA9IGhlbHBlci5jcmVhdGVJY29uKHRhc2tDb250YWluZXIsICdmYS1zb2xpZCcsICdmYS14bWFyaycsICdmYS1sZycsICdoaWRkZW4nKTtcbiAgICAgIHRvZG9DYXJkLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgICAgY29uc3QgZGl2aWRlciA9IGhlbHBlci5jcmVhdGVEaXYoJ2NoZWNrbGlzdC1kaXZpZGUnKTtcbiAgICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICAgIGRpdmlkZXIuYXBwZW5kQ2hpbGQoaHIpO1xuICAgICAgdG9kb0NhcmQuYXBwZW5kQ2hpbGQoZGl2aWRlcik7XG4gICAgICB0YXNrQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZVByb2plY3RJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgfSk7XG4gICAgICB0YXNrQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZVByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgfSk7XG4gICAgICBkZWxldGVQcm9qZWN0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGVsZXRlVGFza0V2ZW50KHRvZG9JZCwgdGFzay5pZCk7XG4gICAgICB9KTtcbiAgICB9KVxuICB9O1xuXG4gIGNvbnN0IHNldEFkZFRhc2tCdXR0b24gPSAocHJvamVjdElkLCB0b2RvSWQsIHRvZG9DYXJkKSA9PiB7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGhlbHBlci5jcmVhdGVCdXR0b25Gb3JtKCdkaXYnLCAnbm9uZScsICdBZGQgVGFzaycsIHRvZG9DYXJkLCAncCcsICdhZGQtdGFzay1idXR0b24nKTtcbiAgICBjb25zdCB0YXNrRm9ybUNvbnRhaW5lciA9IGhlbHBlci5jcmVhdGVEaXYoJ2hpZGRlbicpO1xuICAgIGNvbnN0IHRhc2tGb3JtID0gaGVscGVyLmNyZWF0ZUlucHV0Rm9ybSgnbm9uZScsICdFbnRlciB0YXNrIG5hbWUnLCB0YXNrRm9ybUNvbnRhaW5lciwgJ3Rhc2stZm9ybScpO1xuICAgIGNvbnN0IHRhc2tTdWJtaXRCdXR0b24gPSBoZWxwZXIuY3JlYXRlQnV0dG9uRm9ybSgnYnV0dG9uJywgJ25vbmUnLCAnU3VibWl0JywgdGFza0Zvcm1Db250YWluZXIsICdzdWJtaXQtdGFzay1idG4nKTtcbiAgICB0b2RvQ2FyZC5hcHBlbmRDaGlsZCh0YXNrRm9ybUNvbnRhaW5lcik7XG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRhc2tGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH0pO1xuICAgIGNvbnN0IGZvcm1FdmVudCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tOYW1lID0gdGFza0Zvcm0udmFsdWU7XG4gICAgICBhZGRUYXNrRXZlbnQocHJvamVjdElkLCB0b2RvSWQsIHRhc2tOYW1lKTtcbiAgICB9XG4gICAgdGFza1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZvcm1FdmVudCk7XG4gICAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmb3JtRXZlbnQoKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgc2V0Tm90ZXMgPSAobm90ZXMsIHRvZG9DYXJkKSA9PiB7XG4gICAgaGVscGVyLmNyZWF0ZVRleHQodG9kb0NhcmQsICdhZnRlcicsICdoMycsICdOb3RlcycsICdub25lJywgJ25vdGVzLWhlYWRpbmcnKTtcbiAgICBoZWxwZXIuY3JlYXRlVGV4dCh0b2RvQ2FyZCwgJ2FmdGVyJywgJ3AnLCBub3Rlcyk7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9kb0NhcmQgPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvZG9DYXJkQ29udGFpbmVyID0gaGVscGVyLmNyZWF0ZURpdigpO1xuICAgIGNvbnN0IHRvZG9DYXJkID0gaGVscGVyLmNyZWF0ZURpdigndG9kby1jYXJkJyk7XG4gICAgY29uc3QgY2FyZFRvcFNlY3Rpb24gPSBoZWxwZXIuY3JlYXRlRGl2KCdjYXJkLXRvcC1zZWN0aW9uJyk7XG4gICAgY29uc3QgY2FyZEJvdHRvbVNlY3Rpb24gPSBoZWxwZXIuY3JlYXRlRGl2KCdjYXJkLWJvdHRvbS1zZWN0aW9uJyk7XG4gICAgaWYgKHRvZG8uaXNNaW5pbWl6ZWQgPT09IHRydWUpIHtcbiAgICAgIGNhcmRCb3R0b21TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbiAgICBzZXRUb2RvVGl0bGUodG9kby50b2RvSWQsIHRvZG8udGl0bGUsIGNhcmRUb3BTZWN0aW9uLCBjYXJkQm90dG9tU2VjdGlvbik7XG4gICAgc2V0VG9kb1N0YXR1cyh0b2RvLmR1ZSwgdG9kby5wcmlvcml0eSxjYXJkVG9wU2VjdGlvbik7XG4gICAgc2V0VG9kb0Rlc2NyaXB0aW9uKHRvZG8uZGVzYywgY2FyZFRvcFNlY3Rpb24pO1xuICAgIHNldFRvZG9UYXNrcyh0b2RvLnRvZG9JZCwgdG9kby50YXNrcywgY2FyZEJvdHRvbVNlY3Rpb24pO1xuICAgIHNldEFkZFRhc2tCdXR0b24odG9kby5wcm9qZWN0SWQsIHRvZG8udG9kb0lkLCBjYXJkQm90dG9tU2VjdGlvbik7XG4gICAgc2V0Tm90ZXModG9kby5ub3RlcywgY2FyZEJvdHRvbVNlY3Rpb24pO1xuICAgIHRvZG9DYXJkLmFwcGVuZENoaWxkKGNhcmRUb3BTZWN0aW9uKTtcbiAgICB0b2RvQ2FyZC5hcHBlbmRDaGlsZChjYXJkQm90dG9tU2VjdGlvbik7XG5cbiAgICBjb25zdCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tYWRkLWNvbnRhaW5lcicpO1xuICAgIHRvZG9DYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9DYXJkKTtcbiAgICB0b2RvTGlzdC5pbnNlcnRCZWZvcmUodG9kb0NhcmRDb250YWluZXIsIGFkZFRvZG9CdXR0b24pO1xuICB9O1xuXG4gIGNvbnN0IHNldFRvZG9Gb3JtID0gKGNvbnRhaW5lcikgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5ub1ZhbGlkYXRlID0gdHJ1ZTtcbiAgICBcbiAgICBoZWxwZXIuY3JlYXRlRm9ybUxhYmVsKCdkYXRldGltZS1sYWJlbCcsICdEdWUgRGF0ZScsIGZvcm0pO1xuICAgIGhlbHBlci5jcmVhdGVEYXRlVGltZUlucHV0KCdkdWUtZGF0ZS1pbnB1dCcsIGZvcm0pO1xuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGhlbHBlci5jcmVhdGVJbnB1dEZvcm0oJ3RvZG8tdGl0bGUnLCAnVGl0bGUnLCBmb3JtKTtcbiAgICBjb25zdCB0aXRsZUVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRpdGxlRXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlRXJyb3IpO1xuICAgIGhlbHBlci5jcmVhdGVTZWxlY3RGb3JtKCdwcmlvcml0eS1zZWxlY3QnLCBmb3JtLCAnUHJpb3JpdHknLCAnVXJnZW50JywgJ05vcm1hbCcsICdVbmltcG9ydGFudCcpXG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gaGVscGVyLmNyZWF0ZVRleHRBcmVhRm9ybSgnZGVzY3JpcHRpb24tdGV4dGFyZWEnLCAnRGVzY3JpcHRpb24nLCBmb3JtKTtcbiAgICBjb25zdCB0b2RvTm90ZXMgPSBoZWxwZXIuY3JlYXRlVGV4dEFyZWFGb3JtKCdub3Rlcy1pbnB1dCcsICdOb3RlcycsIGZvcm0pO1xuICAgICBoZWxwZXIuY3JlYXRlQnV0dG9uRm9ybSgnYnV0dG9uJywgJ3RvZG8tc3VibWl0LWJ0bicsICdTVUJNSVQnLCBmb3JtKTtcbiAgICB0b2RvVGl0bGUucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgdG9kb1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgaWYgKHRvZG9UaXRsZS52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICB0aXRsZUVycm9yLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIHRpdGxlRXJyb3IuY2xhc3NOYW1lID0gJ2Vycm9yJztcbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnN0IGZvcm1FdmVudCA9ICgpID0+IHtcbiAgICAgIGlmICghdG9kb1RpdGxlLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgIHNob3dFcnJvcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGRlc2M7XG4gICAgICAgIGxldCBub3RlcztcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbi10ZXh0YXJlYScpLnZhbHVlID09PSAnJykge1xuICAgICAgICAgIGRlc2MgPSAnVGhpcyBpcyBhIHRvZG8uIEFkZCBjaGVja2xpc3QgdGFza3MsIGEgZHVlIGRhdGUsIGFuZCBwcmlvcml0aWVzIGhlcmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24tdGV4dGFyZWEnKS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigoJyNub3Rlcy1pbnB1dCcpKS52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICBub3RlcyA9ICdBZGQgbm90ZXMgYW5kIGFueSBhZGRpdGlvbmFsIHRob3VnaHRzIGhlcmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigoJyNub3Rlcy1pbnB1dCcpKS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b2RvID0ge1xuICAgICAgICAgIHByb2plY3RJZDogY3VycmVudFByb2plY3RJZCxcbiAgICAgICAgICB0aXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tdGl0bGUnKS52YWx1ZSxcbiAgICAgICAgICBkdWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZS1pbnB1dCcpLnZhbHVlLnJlcGxhY2UoJ1QnLCAnICcpLFxuICAgICAgICAgIHByaW9yaXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHktc2VsZWN0JykudmFsdWUsXG4gICAgICAgICAgZGVzYzogZGVzYyxcbiAgICAgICAgICBub3Rlczogbm90ZXNcbiAgICAgICAgfTtcbiAgICAgICAgYWRkVG9kb0V2ZW50KHRvZG8pO1xuICAgICAgICByZXNldFRvZG9TdWJtaXRGb3JtKCk7XG4gICAgICB9O1xuICAgIH1cblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGZvcm1FdmVudCgpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgKTtcbiAgdG9kb1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZm9ybUV2ZW50KCk7XG4gICAgfVxuICB9KTtcbiAgdG9kb0Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZm9ybUV2ZW50KCk7XG4gICAgfVxuICB9KTtcbiAgdG9kb05vdGVzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZm9ybUV2ZW50KCk7XG4gICAgfVxuICB9KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGZ1bmN0aW9uIHNob3dFcnJvcigpIHtcbiAgICBpZiAodG9kb1RpdGxlLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgdGl0bGVFcnJvci50ZXh0Q29udGVudCA9ICdZb3UgbmVlZCB0byBlbnRlciBhIHRpdGxlLic7XG4gICAgfVxuICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0QWRkVG9kb0J1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRUb2RvQ29udGFpbmVyID0gaGVscGVyLmNyZWF0ZUlkRGl2KCd0b2RvLWFkZC1jb250YWluZXInKTtcbiAgICBjb25zdCB0b2RvRm9ybUNvbnRhaW5lciA9IGhlbHBlci5jcmVhdGVJZERpdigndG9kby1mb3JtLWNvbnRhaW5lcicsICdoaWRkZW4nKTtcbiAgICBjb25zdCBhZGRUb2RvQnV0dG9uID0gaGVscGVyLmNyZWF0ZUJ1dHRvbkZvcm0oJ2RpdicsICdhZGQtdG9kby1idXR0b24nLCAnQWRkIFRvZG8nLCBhZGRUb2RvQ29udGFpbmVyLCAnYWRkLXRvZG8tYnV0dG9uJywgJ2dyZXktZm9udCcsICdmb250LW1lZGl1bScpO1xuICAgIHNldFRvZG9Gb3JtKHRvZG9Gb3JtQ29udGFpbmVyKTtcbiAgICBhZGRUb2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Gb3JtQ29udGFpbmVyKTtcbiAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZChhZGRUb2RvQ29udGFpbmVyKTtcbiAgICBzZXRUb2RvRm9ybUV2ZW50KCk7XG5cbiAgICBhZGRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdG9kb0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2ZsZXgnID9cbiAgICAgICAgdG9kb0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJyA6XG4gICAgICAgIHRvZG9Gb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfSlcbiAgfTtcblxuICBjb25zdCB0b2dnbGVQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0tY29udGFpbmVyJyk7XG4gICAgaWYgKHByb2plY3RGb3JtQ29udGFpbmVyKSB7XG4gICAgICAocHJvamVjdEZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSA/IFxuICAgICAgICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnIDpcbiAgICAgICAgcHJvamVjdEZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGhlbHBlci5jcmVhdGVJZERpdigncHJvamVjdC1mb3JtLWNvbnRhaW5lcicpO1xuICAgICAgY29uc3QgbmFtZUZvcm0gPSBoZWxwZXIuY3JlYXRlSW5wdXRGb3JtKCdwcm9qZWN0LW5hbWUtZm9ybScsICdFbnRlciB0aGUgcHJvamVjdCBuYW1lJywgZm9ybUNvbnRhaW5lcik7XG4gICAgICBjb25zdCBmb3JtU3VibWl0ID0gaGVscGVyLmNyZWF0ZUJ1dHRvbkZvcm0oJ2J1dHRvbicsICdzdWJtaXQtcHJvamVjdC1idXR0b24nLCAnRU5URVInLCBmb3JtQ29udGFpbmVyKTtcbiAgICAgIHNpZGViYXIuaW5zZXJ0QmVmb3JlKGZvcm1Db250YWluZXIsIHNldHRpbmdzKTtcbiAgICAgIHNob3dQcm9qZWN0Rm9ybUV2ZW50KCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlc2V0VG9kb1N1Ym1pdEZvcm0gPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tdGl0bGUnKS52YWx1ZSA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZS1pbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LXNlbGVjdCcpLnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uLXRleHRhcmVhJykudmFsdWUgPSAnJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZXMtaW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWZvcm0tY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfTtcblxuICBjb25zdCByZXNldFByb2plY3RTdWJtaXRGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUtZm9ybScpO1xuICAgIHByb2plY3ROYW1lRm9ybS52YWx1ZSA9ICcnO1xuICAgIGNvbnN0IHByb2plY3RGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybS1jb250YWluZXInKTtcbiAgICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIGNvbnN0IGJpbmRDaGFuZ2VQcm9qZWN0ID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgc2V0UHJvamVjdFN3aXRjaEV2ZW50ID0gY2FsbGJhY2s7XG4gIH07XG5cbiAgY29uc3QgYmluZEFkZFRhc2sgPSAoY2FsbGJhY2spID0+IHtcbiAgICBhZGRUYXNrRXZlbnQgPSBjYWxsYmFjaztcbiAgfTtcblxuICBjb25zdCBiaW5kU3VibWl0VG9kbyA9IChjYWxsYmFjaykgPT4ge1xuICAgIGFkZFRvZG9FdmVudCA9IGNhbGxiYWNrO1xuICB9O1xuXG4gIGNvbnN0IGJpbmRBZGRUb2RvID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgc2V0VG9kb0Zvcm1FdmVudCA9IGNhbGxiYWNrO1xuICB9XG5cbiAgY29uc3QgYmluZEFkZFByb2plY3QgPSAoY2FsbGJhY2spID0+IHtcbiAgICBzaG93UHJvamVjdEZvcm1FdmVudCA9IGNhbGxiYWNrO1xuICB9O1xuXG4gIGNvbnN0IGJpbmRTdWJtaXRQcm9qZWN0ID0gKGhhbmRsZXIpID0+IHtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LXByb2plY3QtYnV0dG9uJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZS1mb3JtJyk7XG4gICAgY29uc3QgZm9ybUV2ZW50ID0gKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZUZvcm0udmFsdWU7XG4gICAgICBoYW5kbGVyKHByb2plY3ROYW1lKTtcbiAgICAgIHJlc2V0UHJvamVjdFN1Ym1pdEZvcm0oKTtcbiAgICB9XG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZm9ybUV2ZW50KTtcbiAgICBwcm9qZWN0TmFtZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmb3JtRXZlbnQoKTtcbiAgICAgIH1cbiAgICB9KVxuICB9O1xuXG4gIGNvbnN0IGJpbmRUb2dnbGVUYXNrID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgdG9nZ2xlVGFza0V2ZW50ID0gY2FsbGJhY2s7XG4gIH07XG5cbiAgY29uc3QgYmluZERlbGV0ZVByb2plY3QgPSAoY2FsbGJhY2spID0+IHtcbiAgICBkZWxldGVQcm9qZWN0RXZlbnQgPSBjYWxsYmFjaztcbiAgfTtcblxuICBjb25zdCBiaW5kRGVsZXRlVGFzayA9IChjYWxsYmFjaykgPT4ge1xuICAgIGRlbGV0ZVRhc2tFdmVudCA9IGNhbGxiYWNrO1xuICB9O1xuXG4gIGNvbnN0IGJpbmREZWxldGVUb2RvID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgZGVsZXRlVG9kb0V2ZW50ID0gY2FsbGJhY2s7XG4gIH1cblxuICBjb25zdCBiaW5kTWluaW1pemVUb2RvID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgbWluaW1pemVUb2RvRXZlbnQgPSBjYWxsYmFjaztcbiAgfVxuXG4gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVQcm9qZWN0Rm9ybSk7XG5cbiAgcmV0dXJuIHsgXG4gICAgICByZXNldFByb2plY3RWaWV3LFxuICAgICAgcmVzZXRQcm9qZWN0TGlzdCxcbiAgICAgIHJlc2V0VG9kb3MsXG4gICAgICBzZXRDdXJyZW50UHJvamVjdElkLFxuICAgICAgc2V0UHJvamVjdFRpdGxlLFxuICAgICAgc2V0UHJvamVjdERlc2NyaXB0aW9uLFxuICAgICAgYWRkVG9kb0NhcmQsXG4gICAgICBzZXRQcm9qZWN0TGlzdEl0ZW0sXG4gICAgICBzZXRBZGRUb2RvQnV0dG9uLFxuICAgICAgYmluZFN1Ym1pdFByb2plY3QsXG4gICAgICBiaW5kQWRkUHJvamVjdCxcbiAgICAgIHRvZ2dsZVByb2plY3RGb3JtLFxuICAgICAgYmluZEFkZFRvZG8sXG4gICAgICBiaW5kQWRkVGFzayxcbiAgICAgIGJpbmRTdWJtaXRUb2RvLFxuICAgICAgYmluZENoYW5nZVByb2plY3QsXG4gICAgICBiaW5kVG9nZ2xlVGFzayxcbiAgICAgIGJpbmREZWxldGVQcm9qZWN0LFxuICAgICAgYmluZERlbGV0ZVRvZG8sXG4gICAgICBiaW5kRGVsZXRlVGFzayxcbiAgICAgIGJpbmRNaW5pbWl6ZVRvZG9cbiAgICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB2aWV3OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcblxuY29udHJvbGxlci5pbml0aWFsaXplVmlldygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==