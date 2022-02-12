/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ui/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/meaxure/interfaces.ts":
/*!***********************************!*\
  !*** ./src/meaxure/interfaces.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// Copyright 2020 Jebbs. All rights reserved.\n// Use of this source code is governed by the MIT\n// license that can be found in the LICENSE file.\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.shadowType = exports.SMType = void 0;\nvar SMType;\n(function (SMType) {\n    SMType[\"text\"] = \"text\";\n    SMType[\"symbol\"] = \"symbol\";\n    SMType[\"slice\"] = \"slice\";\n    SMType[\"shape\"] = \"shape\";\n    SMType[\"group\"] = \"group\";\n    SMType[\"hotspot\"] = \"hotspot\";\n})(SMType = exports.SMType || (exports.SMType = {}));\n;\nvar shadowType;\n(function (shadowType) {\n    shadowType[\"outer\"] = \"Outer\";\n    shadowType[\"inner\"] = \"Inner\";\n})(shadowType = exports.shadowType || (exports.shadowType = {}));\n\n\n//# sourceURL=webpack:///./src/meaxure/interfaces.ts?");

/***/ }),

/***/ "./ui/common.ts":
/*!**********************!*\
  !*** ./ui/common.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.init = exports.project = exports.localize = exports.timestamp = exports.langs = exports.I18N = exports.state = void 0;\nexports.state = {\n    zoom: 1,\n    unit: 'px',\n    scale: 1,\n    artboardIndex: undefined,\n    colorFormat: 'color-hex',\n    current: undefined,\n    codeType: 'css',\n};\nexports.I18N = {};\nexports.langs = navigator.language.toLocaleLowerCase();\nexports.timestamp = new Date().getTime();\nfunction localize(str) {\n    let lang = exports.langs === 'zh' ? 'zh-cn' : exports.langs;\n    return (exports.I18N[lang] && exports.I18N[lang][str]) ? exports.I18N[lang][str] : str;\n}\nexports.localize = localize;\nexports.project = {};\nfunction init(data) {\n    exports.state.scale = 1;\n    exports.state.colorFormat = data.colorFormat;\n    exports.state.unit = data.unit;\n    exports.I18N = data.languages || {};\n    exports.project = data;\n}\nexports.init = init;\n\n\n//# sourceURL=webpack:///./ui/common.ts?");

/***/ }),

/***/ "./ui/events/alignElement.ts":
/*!***********************************!*\
  !*** ./ui/events/alignElement.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.alignElement = exports.Edge = void 0;\nvar Edge;\n(function (Edge) {\n    Edge[Edge[\"vtop\"] = 32] = \"vtop\";\n    Edge[Edge[\"vbottom\"] = 16] = \"vbottom\";\n    Edge[Edge[\"vmiddle\"] = 8] = \"vmiddle\";\n    Edge[Edge[\"hleft\"] = 4] = \"hleft\";\n    Edge[Edge[\"hright\"] = 2] = \"hright\";\n    Edge[Edge[\"hcenter\"] = 1] = \"hcenter\";\n})(Edge = exports.Edge || (exports.Edge = {}));\nfunction alignElement(options) {\n    let fromRect = options.fromRect || options.target.getBoundingClientRect();\n    let from = options.fromEdge;\n    let to = options.toEdge;\n    let fromHasV = !!(0b111000 & from);\n    let toHasV = !!(0b111000 & to);\n    let fromHasH = !!(0b000111 & from);\n    let toHasH = !!(0b000111 & to);\n    let offsetX = 0;\n    let offsetY = 0;\n    if (fromHasH && toHasH) {\n        offsetX = options.toRect.x - fromRect.x; // left-to-left offset\n        if (from & Edge.hcenter)\n            offsetX -= fromRect.width / 2;\n        if (from & Edge.hright)\n            offsetX -= fromRect.width;\n        if (to & Edge.hcenter)\n            offsetX += options.toRect.width / 2;\n        if (to & Edge.hright)\n            offsetX += options.toRect.width;\n    }\n    if (fromHasV && toHasV) {\n        offsetY = options.toRect.y - fromRect.y; // top-to-top offset\n        if (from & Edge.vmiddle)\n            offsetY -= fromRect.height / 2;\n        if (from & Edge.vbottom)\n            offsetY -= fromRect.height;\n        if (to & Edge.vmiddle)\n            offsetY += options.toRect.height / 2;\n        if (to & Edge.vbottom)\n            offsetY += options.toRect.height;\n    }\n    options.scroller.scrollTop -= offsetY;\n    options.scroller.scrollLeft -= offsetX;\n}\nexports.alignElement = alignElement;\n\n\n//# sourceURL=webpack:///./ui/events/alignElement.ts?");

/***/ }),

/***/ "./ui/events/artboards.ts":
/*!********************************!*\
  !*** ./ui/events/artboards.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.artboardsEvents = void 0;\nconst helper_1 = __webpack_require__(/*! ./helper */ \"./ui/events/helper.ts\");\nconst delegate_1 = __webpack_require__(/*! ./delegate */ \"./ui/events/delegate.ts\");\nconst navigate_1 = __webpack_require__(/*! ./navigate */ \"./ui/events/navigate.ts\");\nfunction artboardsEvents() {\n    let artboardsList = document.querySelector('#artboards');\n    delegate_1.eventDelegate(artboardsList, 'click', '.artboard', function (event) {\n        let index = helper_1.getIndex(this);\n        navigate_1.gotoArtboard(index);\n    });\n    delegate_1.eventDelegate(artboardsList, 'change', 'input[name=page]', function (event) {\n        var pObjectID = document.querySelector('.page-list input[name=page]:checked').value;\n        document.querySelector('.pages-select h3')\n            .innerHTML = this.parentElement.querySelector('span').innerHTML;\n        document.querySelectorAll('.artboard-list li').forEach((li) => {\n            if (pObjectID == 'all' || li.getAttribute('data-page-id') == pObjectID) {\n                li.style.display = '';\n            }\n            else {\n                li.style.display = 'none';\n            }\n        });\n        document.querySelector('.pages-select').blur();\n        event.stopPropagation();\n    });\n}\nexports.artboardsEvents = artboardsEvents;\n\n\n//# sourceURL=webpack:///./ui/events/artboards.ts?");

/***/ }),

/***/ "./ui/events/delegate.ts":
/*!*******************************!*\
  !*** ./ui/events/delegate.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.eventDelegate = void 0;\nfunction eventDelegate(parent, type, target, listener, options) {\n    if (typeof parent == 'string') {\n        document.querySelectorAll(parent).forEach(el => el.addEventListener(type, wrappedListener));\n        return;\n    }\n    parent.addEventListener(type, wrappedListener);\n    function wrappedListener(event) {\n        let targetElement = event.target;\n        let parentElement = event.currentTarget;\n        while (targetElement !== parentElement) {\n            if (targetElement.matches(target)) {\n                listener.call(targetElement, ...arguments);\n                return;\n            }\n            targetElement = targetElement.parentElement;\n        }\n    }\n}\nexports.eventDelegate = eventDelegate;\n\n\n//# sourceURL=webpack:///./ui/events/delegate.ts?");

/***/ }),

/***/ "./ui/events/distance.ts":
/*!*******************************!*\
  !*** ./ui/events/distance.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.hideDistance = exports.distance = void 0;\nconst helper_1 = __webpack_require__(/*! ../render/helper */ \"./ui/render/helper.ts\");\nconst common_1 = __webpack_require__(/*! ../common */ \"./ui/common.ts\");\nconst helper_2 = __webpack_require__(/*! ./helper */ \"./ui/events/helper.ts\");\nfunction distance() {\n    if (common_1.state.selectedIndex === undefined)\n        return;\n    if (common_1.state.selectedIndex == common_1.state.targetIndex && !common_1.state.tempTargetRect)\n        return;\n    var selectedRect = getRect(common_1.state.selectedIndex), targetRect = common_1.state.tempTargetRect || getRect(common_1.state.targetIndex), topData, rightData, bottomData, leftData, x = helper_1.zoomSize(selectedRect.x + selectedRect.width / 2), y = helper_1.zoomSize(selectedRect.y + selectedRect.height / 2);\n    let selectedX2 = selectedRect.x + selectedRect.width;\n    let selectedY2 = selectedRect.y + selectedRect.height;\n    let targetX2 = targetRect.x + targetRect.width;\n    let targetY2 = targetRect.y + targetRect.height;\n    if (!helper_2.getIntersection(selectedRect, targetRect)) {\n        if (selectedRect.y > targetY2) { //top\n            topData = {\n                x: x,\n                y: helper_1.zoomSize(targetY2),\n                h: helper_1.zoomSize(selectedRect.y - targetY2),\n                distance: helper_1.unitSize(selectedRect.y - targetY2),\n                percentageDistance: helper_1.percentageSize((selectedRect.y - targetY2), common_1.state.current.height)\n            };\n        }\n        if (selectedX2 < targetRect.x) { //right\n            rightData = {\n                x: helper_1.zoomSize(selectedX2),\n                y: y,\n                w: helper_1.zoomSize(targetRect.x - selectedX2),\n                distance: helper_1.unitSize(targetRect.x - selectedX2),\n                percentageDistance: helper_1.percentageSize((targetRect.x - selectedX2), common_1.state.current.width)\n            };\n        }\n        if (selectedY2 < targetRect.y) { //bottom\n            bottomData = {\n                x: x,\n                y: helper_1.zoomSize(selectedY2),\n                h: helper_1.zoomSize(targetRect.y - selectedY2),\n                distance: helper_1.unitSize(targetRect.y - selectedY2),\n                percentageDistance: helper_1.percentageSize((targetRect.y - selectedY2), common_1.state.current.height)\n            };\n        }\n        if (selectedRect.x > targetX2) { //left\n            leftData = {\n                x: helper_1.zoomSize(targetX2),\n                y: y,\n                w: helper_1.zoomSize(selectedRect.x - targetX2),\n                distance: helper_1.unitSize(selectedRect.x - targetX2),\n                percentageDistance: helper_1.percentageSize((selectedRect.x - targetX2), common_1.state.current.width)\n            };\n        }\n    }\n    else {\n        var distance = getDistance(selectedRect, targetRect);\n        if (distance.top != 0) { //top\n            topData = {\n                x: x,\n                y: (distance.top > 0) ? helper_1.zoomSize(targetRect.y) : helper_1.zoomSize(selectedRect.y),\n                h: helper_1.zoomSize(Math.abs(distance.top)),\n                distance: helper_1.unitSize(Math.abs(distance.top)),\n                percentageDistance: helper_1.percentageSize(Math.abs(distance.top), common_1.state.current.height)\n            };\n        }\n        if (distance.right != 0) { //right\n            rightData = {\n                x: (distance.right > 0) ? helper_1.zoomSize(selectedX2) : helper_1.zoomSize(targetX2),\n                y: y,\n                w: helper_1.zoomSize(Math.abs(distance.right)),\n                distance: helper_1.unitSize(Math.abs(distance.right)),\n                percentageDistance: helper_1.percentageSize(Math.abs(distance.right), common_1.state.current.width)\n            };\n        }\n        if (distance.bottom != 0) { //bottom\n            bottomData = {\n                x: x,\n                y: (distance.bottom > 0) ? helper_1.zoomSize(selectedY2) : helper_1.zoomSize(targetY2),\n                h: helper_1.zoomSize(Math.abs(distance.bottom)),\n                distance: helper_1.unitSize(Math.abs(distance.bottom)),\n                percentageDistance: helper_1.percentageSize(Math.abs(distance.bottom), common_1.state.current.height)\n            };\n        }\n        if (distance.left != 0) { //left\n            leftData = {\n                x: (distance.left > 0) ? helper_1.zoomSize(targetRect.x) : helper_1.zoomSize(selectedRect.x),\n                y: y,\n                w: helper_1.zoomSize(Math.abs(distance.left)),\n                distance: helper_1.unitSize(Math.abs(distance.left)),\n                percentageDistance: helper_1.percentageSize(Math.abs(distance.left), common_1.state.current.width)\n            };\n        }\n    }\n    if (topData) {\n        let td = document.querySelector('#td');\n        td.style.left = topData.x + 'px';\n        td.style.top = topData.y + 'px';\n        td.style.height = topData.h + 'px';\n        td.style.display = '';\n        let tdDiv = document.querySelector('#td div');\n        tdDiv.setAttribute('data-height', topData.distance);\n        tdDiv.setAttribute('percentage-height', topData.percentageDistance);\n    }\n    if (rightData) {\n        let rd = document.querySelector('#rd');\n        rd.style.left = rightData.x + 'px';\n        rd.style.top = rightData.y + 'px';\n        rd.style.width = rightData.w + 'px';\n        rd.style.display = '';\n        let rdDiv = document.querySelector('#rd div');\n        rdDiv.setAttribute('data-width', rightData.distance);\n        rdDiv.setAttribute('percentage-width', rightData.percentageDistance);\n    }\n    if (bottomData) {\n        let bd = document.querySelector('#bd');\n        bd.style.left = bottomData.x + 'px';\n        bd.style.top = bottomData.y + 'px';\n        bd.style.height = bottomData.h + 'px';\n        bd.style.display = '';\n        let bdDiv = document.querySelector('#bd div');\n        bdDiv.setAttribute('data-height', bottomData.distance);\n        bdDiv.setAttribute('percentage-height', bottomData.percentageDistance);\n    }\n    if (leftData) {\n        let ld = document.querySelector('#ld');\n        ld.style.left = leftData.x + 'px';\n        ld.style.top = leftData.y + 'px';\n        ld.style.width = leftData.w + 'px';\n        ld.style.display = '';\n        let ldDiv = document.querySelector('#ld div');\n        ldDiv.setAttribute('data-width', leftData.distance);\n        ldDiv.setAttribute('percentage-width', leftData.percentageDistance);\n    }\n    document.querySelector('.selected')\n        .classList.add('hidden');\n}\nexports.distance = distance;\nfunction hideDistance() {\n    var _a;\n    ['#td', '#rd', '#bd', '#ld'].forEach(s => {\n        let el = document.querySelector(s);\n        el.style.display = 'none';\n    });\n    (_a = document.querySelector('.selected')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');\n}\nexports.hideDistance = hideDistance;\nfunction getRect(index) {\n    var layer = common_1.state.current.layers[index];\n    return layer.rect;\n}\nfunction getDistance(selected, target) {\n    return {\n        top: (selected.y - target.y),\n        right: (target.x + target.width - selected.x - selected.width),\n        bottom: (target.y + target.height - selected.y - selected.height),\n        left: (selected.x - target.x)\n    };\n}\n\n\n//# sourceURL=webpack:///./ui/events/distance.ts?");

/***/ }),

/***/ "./ui/events/dragExportable.ts":
/*!*************************************!*\
  !*** ./ui/events/dragExportable.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.dragExportableEvents = void 0;\nconst delegate_1 = __webpack_require__(/*! ./delegate */ \"./ui/events/delegate.ts\");\nfunction dragExportableEvents() {\n    delegate_1.eventDelegate(document.body, 'dragstart', '.exportable .dragExp', function (event) {\n        this.style.width = 'auto';\n        this.style.height = 'auto';\n        let rect = this.getBoundingClientRect();\n        let left = event.pageX - rect.left - this.offsetWidth / 2;\n        let top = event.pageY - rect.top - this.offsetHeight / 2;\n        this.style.left = left + 'px';\n        this.style.top = top + 'px';\n    });\n    delegate_1.eventDelegate(document.body, 'dragend', '.exportable .dragExp', function (event) {\n        this.style.left = '';\n        this.style.top = '';\n        this.style.width = '';\n        this.style.height = '';\n    });\n}\nexports.dragExportableEvents = dragExportableEvents;\n\n\n//# sourceURL=webpack:///./ui/events/dragExportable.ts?");

/***/ }),

/***/ "./ui/events/flow.ts":
/*!***************************!*\
  !*** ./ui/events/flow.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.setFlowMode = exports.flowEvents = exports.flowMode = void 0;\nconst navigate_1 = __webpack_require__(/*! ./navigate */ \"./ui/events/navigate.ts\");\nconst helper_1 = __webpack_require__(/*! ./helper */ \"./ui/events/helper.ts\");\nconst screen_1 = __webpack_require__(/*! ../render/screen */ \"./ui/render/screen.ts\");\nconst tab_1 = __webpack_require__(/*! ./tab */ \"./ui/events/tab.ts\");\nconst alignElement_1 = __webpack_require__(/*! ./alignElement */ \"./ui/events/alignElement.ts\");\nexports.flowMode = undefined;\nfunction flowEvents() {\n    flowModeSwitchEvents();\n    flowClickEvents();\n}\nexports.flowEvents = flowEvents;\nfunction flowClickEvents() {\n    let flows = document.querySelector('#flows');\n    flows.addEventListener('click', function (event) {\n        helper_1.removeSelected();\n        tab_1.hideNavBar();\n        let target = helper_1.getEventTarget(flows, event, '.flow');\n        if (!target) {\n            flows.classList.remove('show-flows');\n            setTimeout(() => {\n                flows.classList.add('show-flows');\n            }, 0);\n            event.stopPropagation();\n            return;\n        }\n        let id = target.dataset.flowTarget;\n        if (id == 'back') {\n            navigate_1.historyBackUntilAnotherArtboard();\n        }\n        else {\n            navigate_1.gotoArtboard(id);\n        }\n        event.stopPropagation();\n    });\n}\nfunction flowModeSwitchEvents() {\n    document.querySelector('#flow-mode').addEventListener('change', function () {\n        setFlowMode(this.checked);\n        navigate_1.updateURLHash();\n    });\n}\nfunction setFlowMode(enabled) {\n    exports.flowMode = enabled;\n    let viewer = document.querySelector('.screen-viewer');\n    let screen = document.querySelector('#screen');\n    let currentRect = screen.getBoundingClientRect();\n    let inputFlowMode = document.querySelector('#flow-mode');\n    // set checked won't trigge change event\n    inputFlowMode.checked = enabled;\n    let hideOnFLow = [\n        '#layers',\n        '#unit',\n        '.header-left [data-id=\"slices\"]',\n        '.header-left [data-id=\"colors\"]',\n        '.header-right',\n        '#artboards .flow-starts',\n    ];\n    let showOnFlow = [\n        '#flows',\n        '#artboards .flow-starts',\n    ];\n    const hideOnFLowDisplay = exports.flowMode ? 'none' : '';\n    const showOnFLowDisplay = exports.flowMode ? '' : 'none';\n    hideOnFLow.forEach(s => {\n        let el = document.querySelector(s);\n        if (el)\n            el.style.display = hideOnFLowDisplay;\n    });\n    showOnFlow.forEach(s => {\n        let el = document.querySelector(s);\n        if (el)\n            el.style.display = showOnFLowDisplay;\n    });\n    if (exports.flowMode) {\n        screen.classList.add('flow');\n        helper_1.removeSelected();\n        tab_1.hideNavBar();\n    }\n    else {\n        screen.classList.remove('flow');\n        tab_1.showNavBar();\n    }\n    screen_1.updateScreen();\n    alignElement_1.alignElement({\n        scroller: viewer,\n        target: screen,\n        toRect: currentRect,\n        fromEdge: alignElement_1.Edge.hcenter | alignElement_1.Edge.vtop,\n        toEdge: alignElement_1.Edge.hcenter | alignElement_1.Edge.vtop\n    });\n}\nexports.setFlowMode = setFlowMode;\n\n\n//# sourceURL=webpack:///./ui/events/flow.ts?");

/***/ }),

/***/ "./ui/events/hashChange.ts":
/*!*********************************!*\
  !*** ./ui/events/hashChange.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.setShouldBackToAnother = exports.hashChangeEvents = void 0;\nconst navigate_1 = __webpack_require__(/*! ./navigate */ \"./ui/events/navigate.ts\");\nconst common_1 = __webpack_require__(/*! ../common */ \"./ui/common.ts\");\nlet shouldBackToAnother = false;\nfunction hashChangeEvents() {\n    window.addEventListener('hashchange', function (ev) {\n        if (shouldBackToAnother) {\n            let currentIndex = navigate_1.parseURLHash().artboardIndex;\n            if (currentIndex == common_1.state.artboardIndex) {\n                history.back();\n                return;\n            }\n            else {\n                shouldBackToAnother = false;\n            }\n        }\n        navigate_1.navigateByURLHash();\n    });\n}\nexports.hashChangeEvents = hashChangeEvents;\nfunction setShouldBackToAnother(value) {\n    shouldBackToAnother = value;\n}\nexports.setShouldBackToAnother = setShouldBackToAnother;\n\n\n//# sourceURL=webpack:///./ui/events/hashChange.ts?");

/***/ }),

/***/ "./ui/events/helper.ts":
/*!*****************************!*\
  !*** ./ui/events/helper.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.clickElement = exports.getIntersection = exports.scaleSize = exports.removeSelected = exports.selectedLayer = exports.mouseoutLayer = exports.getIndex = exports.getEventTarget = void 0;\nconst common_1 = __webpack_require__(/*! ../common */ \"./ui/common.ts\");\nconst distance_1 = __webpack_require__(/*! ./distance */ \"./ui/events/distance.ts\");\nfunction getEventTarget(eventNode, event, selector) {\n    let current = event.target;\n    while (current && current !== eventNode) {\n        if (current.matches(selector))\n            return current;\n        current = current.parentElement;\n    }\n    return undefined;\n}\nexports.getEventTarget = getEventTarget;\nfunction getIndex(element) {\n    return parseInt(element.dataset.index);\n}\nexports.getIndex = getIndex;\nfunction mouseoutLayer() {\n    var _a;\n    (_a = document.querySelector('.hover')) === null || _a === void 0 ? void 0 : _a.classList.remove('hover');\n    document.querySelector('#rulers').style.display = 'none';\n}\nexports.mouseoutLayer = mouseoutLayer;\nfunction selectedLayer() {\n    var _a;\n    if (common_1.state.selectedIndex == undefined)\n        return false;\n    (_a = document.querySelector('.selected')) === null || _a === void 0 ? void 0 : _a.classList.remove('selected');\n    document.querySelector('#layer-' + common_1.state.selectedIndex).classList.add('selected');\n    document.querySelector('#rulers').style.display = 'none';\n}\nexports.selectedLayer = selectedLayer;\nfunction removeSelected() {\n    if (common_1.state.selectedIndex === undefined)\n        return false;\n    document.querySelector('#layer-' + common_1.state.selectedIndex).classList.remove('selected');\n    document.querySelector('#rulers').style.display = 'none';\n    document.querySelector('#inspector').classList.remove('active');\n    common_1.state.selectedIndex = undefined;\n    common_1.state.tempTargetRect = undefined;\n    distance_1.hideDistance();\n}\nexports.removeSelected = removeSelected;\nfunction scaleSize(length) {\n    return Math.round(length / common_1.state.scale * 10) / 10;\n}\nexports.scaleSize = scaleSize;\nfunction getIntersection(a, b) {\n    let x1 = Math.max(a.x, b.x);\n    let y1 = Math.max(a.y, b.y);\n    let x2 = Math.min(a.x + a.width, b.x + b.width);\n    let y2 = Math.min(a.y + a.height, b.y + b.height);\n    let width = x2 - x1;\n    let height = y2 - y1;\n    if (width <= 0 || height <= 0) {\n        // no intersection\n        return undefined;\n    }\n    return {\n        x: x1,\n        y: y1,\n        width: width,\n        height: height,\n    };\n}\nexports.getIntersection = getIntersection;\nfunction clickElement(element) {\n    let e = document.createEvent(\"MouseEvents\");\n    e.initEvent(\"click\", true, true);\n    element.dispatchEvent(e);\n}\nexports.clickElement = clickElement;\n\n\n//# sourceURL=webpack:///./ui/events/helper.ts?");

/***/ }),

/***/ "./ui/events/index.ts":
/*!****************************!*\
  !*** ./ui/events/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.events = void 0;\nconst artboards_1 = __webpack_require__(/*! ./artboards */ \"./ui/events/artboards.ts\");\nconst dragExportable_1 = __webpack_require__(/*! ./dragExportable */ \"./ui/events/dragExportable.ts\");\nconst layerEvents_1 = __webpack_require__(/*! ./layerEvents */ \"./ui/events/layerEvents.ts\");\nconst zoom_1 = __webpack_require__(/*! ./zoom */ \"./ui/events/zoom.ts\");\nconst unit_1 = __webpack_require__(/*! ./unit */ \"./ui/events/unit.ts\");\nconst notes_1 = __webpack_require__(/*! ./notes */ \"./ui/events/notes.ts\");\nconst inspector_1 = __webpack_require__(/*! ./inspector */ \"./ui/events/inspector.ts\");\nconst tab_1 = __webpack_require__(/*! ./tab */ \"./ui/events/tab.ts\");\nconst slices_1 = __webpack_require__(/*! ./slices */ \"./ui/events/slices.ts\");\nconst panMode_1 = __webpack_require__(/*! ./panMode */ \"./ui/events/panMode.ts\");\nconst percentageMode_1 = __webpack_require__(/*! ./percentageMode */ \"./ui/events/percentageMode.ts\");\nconst zoom_2 = __webpack_require__(/*! ./keyboard/zoom */ \"./ui/events/keyboard/zoom.ts\");\nconst flow_1 = __webpack_require__(/*! ./flow */ \"./ui/events/flow.ts\");\nconst hashChange_1 = __webpack_require__(/*! ./hashChange */ \"./ui/events/hashChange.ts\");\nconst switch_1 = __webpack_require__(/*! ./keyboard/switch */ \"./ui/events/keyboard/switch.ts\");\nfunction events() {\n    layerEvents_1.layerEvents();\n    artboards_1.artboardsEvents();\n    zoom_1.zoomEvents();\n    unit_1.unitEvents();\n    notes_1.noteEvents();\n    inspector_1.inspectorEvents();\n    tab_1.tabEvents();\n    slices_1.sliceEvents();\n    panMode_1.panModeEvents();\n    percentageMode_1.percentageModeEvents();\n    zoom_2.keyboardZoomEvents();\n    dragExportable_1.dragExportableEvents();\n    flow_1.flowEvents();\n    switch_1.keyboardSwitchEvents();\n    hashChange_1.hashChangeEvents();\n}\nexports.events = events;\n\n\n//# sourceURL=webpack:///./ui/events/index.ts?");

/***/ }),

/***/ "./ui/events/inspector.ts":
/*!********************************!*\
  !*** ./ui/events/inspector.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.inspectorEvents = void 0;\nconst common_1 = __webpack_require__(/*! ../common */ \"./ui/common.ts\");\nconst colors_1 = __webpack_require__(/*! ../render/colors */ \"./ui/render/colors.ts\");\nconst delegate_1 = __webpack_require__(/*! ./delegate */ \"./ui/events/delegate.ts\");\nconst helper_1 = __webpack_require__(/*! ../render/helper */ \"./ui/render/helper.ts\");\nfunction inspectorEvents() {\n    let formats = ['color-hex', 'argb-hex', 'css-rgba', 'css-hsla', 'ui-color'];\n    let inspector = document.querySelector('#inspector');\n    delegate_1.eventDelegate(inspector, 'click', '.color label', function (event) {\n        let current = formats.indexOf(common_1.state.colorFormat);\n        let next = (current + 1) % formats.length;\n        common_1.state.colorFormat = formats[next];\n        document.querySelectorAll('.color input').forEach((i) => {\n            let colors = JSON.parse(decodeURI(i.dataset.color));\n            i.value = colors[common_1.state.colorFormat];\n        });\n        colors_1.colors();\n    });\n    delegate_1.eventDelegate(inspector, 'dblclick', 'input, textarea', function (event) {\n        this.select();\n    });\n    //复制代码\n    function copy(id) {\n        let center = $(id);\n        center.select();\n        document.execCommand(\"copy\");\n    }\n    $('.inspector').mousedown(function () {\n        $('.copyAll').click(function () {\n            copy('.select #css');\n            helper_1.message('---✅ - ( ´´ิ∀´ิ` ) - 复制成功 ---');\n        });\n    });\n}\nexports.inspectorEvents = inspectorEvents;\n\n\n//# sourceURL=webpack:///./ui/events/inspector.ts?");

/***/ }),

/***/ "./ui/events/keyboard/switch.ts":
/*!**************************************!*\
  !*** ./ui/events/keyboard/switch.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.keyboardSwitchEvents = void 0;\nconst helper_1 = __webpack_require__(/*! ../helper */ \"./ui/events/helper.ts\");\nfunction keyboardSwitchEvents() {\n    window.addEventListener('keydown', event => {\n        switch (String.fromCharCode(event.which)) {\n            case 'F':\n                helper_1.clickElement(document.querySelector('#flow-mode'));\n                event.preventDefault();\n                return false;\n            case 'N':\n                helper_1.clickElement(document.querySelector('#show-notes'));\n                event.preventDefault();\n                return false;\n            default:\n                break;\n        }\n    });\n}\nexports.keyboardSwitchEvents = keyboardSwitchEvents;\n\n\n//# sourceURL=webpack:///./ui/events/keyboard/switch.ts?");

/***/ }),

/***/ "./ui/events/keyboard/zoom.ts":
/*!************************************!*\
  !*** ./ui/events/keyboard/zoom.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.keyboardZoomEvents = void 0;\nconst helper_1 = __webpack_require__(/*! ../helper */ \"./ui/events/helper.ts\");\nconst common_1 = __webpack_require__(/*! ../../common */ \"./ui/common.ts\");\nconst zoom_1 = __webpack_require__(/*! ../zoom */ \"./ui/events/zoom.ts\");\nfunction keyboardZoomEvents() {\n    window.addEventListener('keydown', event => {\n        // control or command key\n        if (!event.ctrlKey && !event.metaKey)\n            return;\n        switch (event.which) {\n            case 187:\n                if (common_1.state.zoom < 4)\n                    helper_1.clickElement(document.querySelector('.zoom-out'));\n                event.preventDefault();\n                return false;\n            case 189:\n                if (common_1.state.zoom > .25)\n                    helper_1.clickElement(document.querySelector('.zoom-in'));\n                event.preventDefault();\n                return false;\n            case 48:\n                zoom_1.zoomRender(1);\n                event.preventDefault();\n                return false;\n            default:\n                break;\n        }\n    });\n}\nexports.keyboardZoomEvents = keyboardZoomEvents;\n\n\n//# sourceURL=webpack:///./ui/events/keyboard/zoom.ts?");

/***/ }),

/***/ "./ui/events/layerEvents.ts":
/*!**********************************!*\
  !*** ./ui/events/layerEvents.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.layerEvents = void 0;\nconst common_1 = __webpack_require__(/*! ../common */ \"./ui/common.ts\");\nconst helper_1 = __webpack_require__(/*! ./helper */ \"./ui/events/helper.ts\");\nconst inspector_1 = __webpack_require__(/*! ../render/inspector */ \"./ui/render/inspector/index.ts\");\nconst distance_1 = __webpack_require__(/*! ./distance */ \"./ui/events/distance.ts\");\nconst panMode_1 = __webpack_require__(/*! ./panMode */ \"./ui/events/panMode.ts\");\nfunction layerEvents() {\n    document.body.addEventListener('click', function (event) {\n        if (panMode_1.panMode)\n            return;\n        if (helper_1.getEventTarget(document.body, event, 'header, #inspector, .navbar')) {\n            event.stopPropagation();\n            return;\n        }\n        let target = event.target;\n        if (target.classList.contains('layer') || target.classList.contains('slice-layer')) {\n            var selected = (!target.classList.contains('slice-layer')) ?\n                target :\n                document.querySelector('.layer-' + target.dataset.objectid);\n            common_1.state.selectedIndex = helper_1.getIndex(selected);\n            distance_1.hideDistance();\n            helper_1.mouseoutLayer();\n            helper_1.selectedLayer();\n            inspector_1.inspector();\n            return;\n        }\n        helper_1.removeSelected();\n    });\n    document.body.addEventListener('mousemove', function (event) {\n        if (panMode_1.panMode)\n            return;\n        helper_1.mouseoutLayer();\n        distance_1.hideDistance();\n        let target = event.target;\n        if (target.classList.contains('screen-viewer') || target.classList.contains('screen-viewer-inner')) {\n            common_1.state.tempTargetRect = getEdgeRect(event);\n            common_1.state.targetIndex = undefined;\n            distance_1.distance();\n        }\n        else if (target.classList.contains('layer')) {\n            common_1.state.targetIndex = helper_1.getIndex(event.target);\n            common_1.state.tempTargetRect = undefined;\n            mouseoverLayer();\n            distance_1.distance();\n        }\n        else {\n            common_1.state.tempTargetRect = undefined;\n        }\n    });\n}\nexports.layerEvents = layerEvents;\nfunction mouseoverLayer() {\n    if (common_1.state.targetIndex && common_1.state.selectedIndex == common_1.state.targetIndex)\n        return false;\n    var target = document.querySelector('#layer-' + common_1.state.targetIndex);\n    target.classList.add('hover');\n    let rv = document.querySelector('#rv');\n    rv.style.left = target.offsetLeft + 'px';\n    rv.style.width = target.offsetWidth + 'px';\n    let rh = document.querySelector('#rh');\n    rh.style.top = target.offsetTop + 'px';\n    rh.style.height = target.offsetHeight + 'px';\n    document.querySelector('#rulers').style.display = '';\n}\nfunction getEdgeRect(event) {\n    let screen = document.querySelector('#screen');\n    let rect = screen.getBoundingClientRect();\n    let x = (event.pageX - rect.left) / common_1.state.zoom;\n    let y = (event.pageY - rect.top) / common_1.state.zoom;\n    let width = 10;\n    let height = 10;\n    let xScope = (x >= 0 && x <= common_1.state.current.width);\n    let yScope = (y >= 0 && y <= common_1.state.current.height);\n    // left and top\n    if (x <= 0 && y <= 0) {\n        x = -10;\n        y = -10;\n    }\n    // right and top\n    else if (x >= common_1.state.current.width && y <= 0) {\n        x = common_1.state.current.width;\n        y = -10;\n    }\n    // right and bottom\n    else if (x >= common_1.state.current.width && y >= common_1.state.current.height) {\n        x = common_1.state.current.width;\n        y = common_1.state.current.height;\n    }\n    // left and bottom\n    else if (x <= 0 && y >= common_1.state.current.height) {\n        x = -10;\n        y = common_1.state.current.height;\n    }\n    // top\n    else if (y <= 0 && xScope) {\n        x = 0;\n        y = -10;\n        width = common_1.state.current.width;\n    }\n    // right\n    else if (x >= common_1.state.current.width && yScope) {\n        x = common_1.state.current.width;\n        y = 0;\n        height = common_1.state.current.height;\n    }\n    // bottom\n    else if (y >= common_1.state.current.height && xScope) {\n        x = 0;\n        y = common_1.state.current.height;\n        width = common_1.state.current.width;\n    }\n    // left\n    else if (x <= 0 && yScope) {\n        x = -10;\n        y = 0;\n        height = common_1.state.current.height;\n    }\n    if (xScope && yScope) {\n        x = 0;\n        y = 0;\n        width = common_1.state.current.width;\n        height = common_1.state.current.height;\n    }\n    return {\n        x: x,\n        y: y,\n        width: width,\n        height: height,\n    };\n}\n\n\n//# sourceURL=webpack:///./ui/events/layerEvents.ts?");

/***/ }),

/***/ "./ui/events/navigate.ts":
/*!*******************************!*\
  !*** ./ui/events/navigate.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.parseURLHash = exports.getURLHash = exports.historyBackUntilAnotherArtboard = exports.updateURLHash = exports.navigateByURLHash = exports.gotoArtboard = void 0;\nconst common_1 = __webpack_require__(/*! ../common */ \"./ui/common.ts\");\nconst layers_1 = __webpack_require__(/*! ../render/layers */ \"./ui/render/layers.ts\");\nconst notes_1 = __webpack_require__(/*! ../render/notes */ \"./ui/render/notes.ts\");\nconst helper_1 = __webpack_require__(/*! ../render/helper */ \"./ui/render/helper.ts\");\nconst screen_1 = __webpack_require__(/*! ../render/screen */ \"./ui/render/screen.ts\");\nconst flow_1 = __webpack_require__(/*! ./flow */ \"./ui/events/flow.ts\");\nconst helper_2 = __webpack_require__(/*! ./helper */ \"./ui/events/helper.ts\");\nconst hashChange_1 = __webpack_require__(/*! ./hashChange */ \"./ui/events/hashChange.ts\");\nfunction gotoArtboard(para, updateHash = true) {\n    var _a, _b;\n    hashChange_1.setShouldBackToAnother(false);\n    let index;\n    if (typeof para == 'number') {\n        index = para;\n    }\n    else {\n        index = layers_1.MapArtboardIDToIndex[para];\n        if (index < 0) {\n            helper_1.message(common_1.localize('Target artboard not exported.'));\n            return;\n        }\n    }\n    if (common_1.state.artboardIndex == index)\n        return;\n    // clear flows animation before switch\n    let flows = document.querySelector('#flows');\n    flows.classList.remove('show-flows');\n    helper_2.removeSelected();\n    common_1.state.artboardIndex = index;\n    common_1.state.selectedIndex = undefined;\n    common_1.state.current = common_1.project.artboards[common_1.state.artboardIndex];\n    screen_1.updateScreen(true);\n    layers_1.layers();\n    notes_1.notes();\n    document.querySelectorAll('.active').forEach(e => e.classList.remove('active'));\n    (_a = document.querySelector('#artboard-' + index)) === null || _a === void 0 ? void 0 : _a.classList.add('active');\n    (_b = document.querySelector('#startpoint-' + index)) === null || _b === void 0 ? void 0 : _b.classList.add('active');\n    if (updateHash)\n        updateURLHash();\n    document.title = common_1.state.current.name + ' - Sketch MeaXure';\n}\nexports.gotoArtboard = gotoArtboard;\nfunction navigateByURLHash(updateHash = true) {\n    let setting = parseURLHash();\n    gotoArtboard(setting.artboardIndex, false);\n    if (flow_1.flowMode !== setting.flowMode) {\n        flow_1.setFlowMode(setting.flowMode);\n    }\n    if (updateHash)\n        updateURLHash();\n}\nexports.navigateByURLHash = navigateByURLHash;\nfunction updateURLHash() {\n    let hash = getURLHash();\n    if (window.location.hash == hash)\n        return;\n    window.location.hash = hash;\n}\nexports.updateURLHash = updateURLHash;\nfunction historyBackUntilAnotherArtboard() {\n    hashChange_1.setShouldBackToAnother(true);\n    history.back();\n}\nexports.historyBackUntilAnotherArtboard = historyBackUntilAnotherArtboard;\nfunction getURLHash() {\n    return `#${flow_1.flowMode ? 'p' : 's'}${common_1.state.artboardIndex}`;\n}\nexports.getURLHash = getURLHash;\nfunction parseURLHash() {\n    let result = {\n        flowMode: false,\n        artboardIndex: 0,\n    };\n    /**\n     *  #[s|p][index]\n      s: specification mode\n      p: prototype mode\n      index: artboard index\n     */\n    let hash = window.location.hash;\n    result.flowMode = hash.substr(1, 1) === 'p';\n    let index = Number(hash.substr(1));\n    if (isNaN(index))\n        index = Number(hash.substr(2));\n    if (isNaN(index))\n        index = 0;\n    result.artboardIndex = index;\n    return result;\n}\nexports.parseURLHash = parseURLHash;\n\n\n//# sourceURL=webpack:///./ui/events/navigate.ts?");

/***/ }),

/***/ "./ui/events/notes.ts":
/*!****************************!*\
  !*** ./ui/events/notes.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.noteEvents = void 0;\nconst helper_1 = __webpack_require__(/*! ./helper */ \"./ui/events/helper.ts\");\nconst distance_1 = __webpack_require__(/*! ./distance */ \"./ui/events/distance.ts\");\nconst delegate_1 = __webpack_require__(/*! ./delegate */ \"./ui/events/delegate.ts\");\nfunction noteEvents() {\n    let notes = document.querySelector('#notes');\n    document.querySelector('#show-notes')\n        .addEventListener('change', function () {\n        let target = this;\n        notes.style.display = target.checked ? '' : 'none';\n    });\n    delegate_1.eventDelegate(notes, 'mousemove', '.note', function (event) {\n        helper_1.mouseoutLayer();\n        distance_1.hideDistance();\n        let note = this.querySelector('div');\n        note.style.display = '';\n        if (note.clientWidth > 160) {\n            note.style.width = '160px';\n            note.style.whiteSpace = 'normal';\n        }\n        event.stopPropagation();\n    });\n    notes.addEventListener('mouseout', function (event) {\n        notes.querySelectorAll('.note div').forEach((div) => div.style.display = 'none');\n    });\n}\nexports.noteEvents = noteEvents;\n\n\n//# sourceURL=webpack:///./ui/events/notes.ts?");

/***/ }),

/***/ "./ui/events/panMode.ts":
/*!******************************!*\
  !*** ./ui/events/panMode.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.panModeEvents = exports.panMode = void 0;\nconst helper_1 = __webpack_require__(/*! ./helper */ \"./ui/events/helper.ts\");\nconst distance_1 = __webpack_require__(/*! ./distance */ \"./ui/events/distance.ts\");\nexports.panMode = false;\nfunction panModeEvents() {\n    let moving = false;\n    let moveData;\n    window.addEventListener('keydown', event => {\n        if (event.which !== 32)\n            return;\n        document.getElementById('cursor').style.display = '';\n        document.querySelector('.screen-viewer').classList.add('moving-screen');\n        helper_1.mouseoutLayer();\n        distance_1.hideDistance();\n        exports.panMode = true;\n        event.preventDefault();\n    });\n    window.addEventListener('keyup', event => {\n        if (event.which !== 32)\n            return;\n        document.getElementById('cursor').style.display = 'none';\n        document.getElementById('cursor').classList.remove('moving');\n        document.querySelector('.screen-viewer').classList.remove('moving-screen');\n        exports.panMode = false;\n        moving = false;\n        event.preventDefault();\n    });\n    window.addEventListener('mousemove', event => {\n        let cursor = document.getElementById('cursor');\n        cursor.style.left = event.clientX + 'px';\n        cursor.style.top = event.clientY + 'px';\n        if (!moving)\n            return;\n        let viewer = document.querySelector('.screen-viewer');\n        viewer.scrollLeft = (moveData.x - event.clientX) + moveData.scrollLeft;\n        viewer.scrollTop = (moveData.y - event.clientY) + moveData.scrollTop;\n        event.preventDefault();\n    });\n    window.addEventListener('mousedown', event => {\n        if (!exports.panMode)\n            return;\n        let cursor = document.getElementById('cursor');\n        let viewer = document.querySelector('.screen-viewer');\n        cursor.classList.add('moving');\n        moveData = {\n            x: event.clientX,\n            y: event.clientY,\n            scrollLeft: viewer.scrollLeft,\n            scrollTop: viewer.scrollTop,\n        };\n        moving = true;\n        event.preventDefault();\n    });\n    window.addEventListener('mouseup', event => {\n        if (!exports.panMode || !moving)\n            return;\n        let cursor = document.getElementById('cursor');\n        let viewer = document.querySelector('.screen-viewer');\n        viewer.classList.remove('moving-screen');\n        cursor.classList.remove('moving');\n        moving = false;\n        event.preventDefault();\n    });\n}\nexports.panModeEvents = panModeEvents;\n\n\n//# sourceURL=webpack:///./ui/events/panMode.ts?");

/***/ }),

/***/ "./ui/events/percentageMode.ts":
/*!*************************************!*\
  !*** ./ui/events/percentageMode.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.percentageModeEvents = void 0;\nfunction percentageModeEvents() {\n    window.addEventListener('keydown', event => {\n        if (event.which !== 18)\n            return;\n        document.getElementById('screen').classList.add('percentage-mode');\n        event.preventDefault();\n    });\n    window.addEventListener('keyup', event => {\n        if (event.which !== 18)\n            return;\n        document.getElementById('screen').classList.remove('percentage-mode');\n        event.preventDefault();\n    });\n}\nexports.percentageModeEvents = percentageModeEvents;\n\n\n//# sourceURL=webpack:///./ui/events/percentageMode.ts?");

/***/ }),

/***/ "./ui/events/slices.ts":
/*!*****************************!*\
  !*** ./ui/events/slices.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.sliceEvents = void 0;\nconst helper_1 = __webpack_require__(/*! ./helper */ \"./ui/events/helper.ts\");\nconst helper_2 = __webpack_require__(/*! ../render/helper */ \"./ui/render/helper.ts\");\nconst common_1 = __webpack_require__(/*! ../common */ \"./ui/common.ts\");\nconst delegate_1 = __webpack_require__(/*! ./delegate */ \"./ui/events/delegate.ts\");\nfunction sliceEvents() {\n    let slices = document.querySelector('#slices');\n    delegate_1.eventDelegate(slices, 'mouseover', 'li', function (event) {\n        document.querySelectorAll('.layer-' + this.dataset.objectid)\n            .forEach(div => div.classList.add('has-slice'));\n    });\n    delegate_1.eventDelegate(slices, 'mouseout', 'li', function (event) {\n        document.querySelectorAll('.has-slice')\n            .forEach(div => div.classList.remove('has-slice'));\n    });\n    delegate_1.eventDelegate(slices, 'click', 'li', function (event) {\n        let layercls = '.layer-' + this.dataset.objectid;\n        let instances = document.querySelectorAll(layercls);\n        let instance = instances[0];\n        if (!instances.length) {\n            helper_2.message(common_1.localize('The slice not in current artboard.'));\n            return;\n        }\n        let offsets = instance.getBoundingClientRect();\n        let viewer = document.querySelector('.screen-viewer');\n        let scrolls = {\n            left: viewer.scrollLeft,\n            top: viewer.scrollTop,\n        };\n        let sizes = {\n            width: instance.clientWidth,\n            height: instance.clientHeight\n        };\n        let viewerSizes = {\n            width: viewer.clientWidth,\n            height: viewer.clientHeight\n        };\n        viewer.scrollLeft = (offsets.left + scrolls.left) - ((viewerSizes.width - sizes.width) / 2);\n        viewer.scrollTop = (offsets.top + scrolls.top - 60) - ((viewerSizes.height - sizes.height) / 2);\n        helper_1.clickElement(instance);\n    });\n}\nexports.sliceEvents = sliceEvents;\n\n\n//# sourceURL=webpack:///./ui/events/slices.ts?");

/***/ }),

/***/ "./ui/events/tab.ts":
/*!**************************!*\
  !*** ./ui/events/tab.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.showBtnNav = exports.showNavBar = exports.hideNavBar = exports.tabEvents = void 0;\nconst delegate_1 = __webpack_require__(/*! ./delegate */ \"./ui/events/delegate.ts\");\nfunction tabEvents() {\n    let tab = document.querySelector('.header-left .tab');\n    let navbar = document.querySelector('.navbar');\n    let showBtn = document.querySelector('.showBtn');\n    delegate_1.eventDelegate(tab, 'click', 'li', function (event) {\n        let current = tab.querySelector('.current');\n        if (this === current) {\n            // this.classList.remove('current');\n            showBtnNav(false);\n            return;\n        }\n        current === null || current === void 0 ? void 0 : current.classList.remove('current');\n        let id = this.dataset.id;\n        this.classList.add('current');\n        showBtnNav(true);\n        navbar.querySelectorAll('section').forEach((sec) => sec.style.display = 'none');\n        navbar.querySelector('#' + id).style.display = '';\n    });\n    showBtn.addEventListener('click', function (event) {\n        let on = navbar.classList.contains('on');\n        if (on) {\n            showBtnNav(false);\n        }\n        else {\n            showBtnNav(true);\n        }\n    });\n}\nexports.tabEvents = tabEvents;\nfunction hideNavBar() {\n    var _a;\n    let tab = document.querySelector('.header-left .tab');\n    (_a = tab.querySelector('.current')) === null || _a === void 0 ? void 0 : _a.classList.remove('current');\n    showBtnNav(false);\n}\nexports.hideNavBar = hideNavBar;\nfunction showNavBar() {\n    let tab = document.querySelector('.icon-artboards');\n    tab.classList.add('current');\n    showBtnNav(true);\n}\nexports.showNavBar = showNavBar;\nfunction showBtnNav(even) {\n    let navbar = document.querySelector('.navbar');\n    let showBtn = document.querySelector('.showBtn');\n    if (even) {\n        navbar.classList.add('on');\n        showBtn.style.backgroundPositionY = '';\n    }\n    else {\n        navbar.classList.remove('on');\n        showBtn.style.backgroundPositionY = 'top';\n    }\n}\nexports.showBtnNav = showBtnNav;\n\n\n//# sourceURL=webpack:///./ui/events/tab.ts?");

/***/ }),

/***/ "./ui/events/unit.ts":
/*!***************************!*\
  !*** ./ui/events/unit.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.unitEvents = void 0;\nconst common_1 = __webpack_require__(/*! ../common */ \"./ui/common.ts\");\nconst layers_1 = __webpack_require__(/*! ../render/layers */ \"./ui/render/layers.ts\");\nconst inspector_1 = __webpack_require__(/*! ../render/inspector */ \"./ui/render/inspector/index.ts\");\nconst slices_1 = __webpack_require__(/*! ../render/slices */ \"./ui/render/slices.ts\");\nconst delegate_1 = __webpack_require__(/*! ./delegate */ \"./ui/events/delegate.ts\");\nfunction unitEvents() {\n    let unit = document.querySelector('#unit');\n    delegate_1.eventDelegate(unit, 'change', 'input[name=resolution]', function (event) {\n        let checked = unit.querySelector('input[name=resolution]:checked');\n        common_1.state.unit = checked.dataset.unit;\n        common_1.state.scale = Number(checked.dataset.scale);\n        layers_1.layers();\n        inspector_1.inspector();\n        unit.blur();\n        unit.querySelector('p').innerText = checked.dataset.name;\n        slices_1.slices();\n    });\n    delegate_1.eventDelegate(unit, 'click', 'h3, .overlay', function (event) {\n        unit.blur();\n    });\n}\nexports.unitEvents = unitEvents;\n\n\n//# sourceURL=webpack:///./ui/events/unit.ts?");

/***/ }),

/***/ "./ui/events/zoom.ts":
/*!***************************!*\
  !*** ./ui/events/zoom.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.zoomRender = exports.zoomEvents = void 0;\nconst common_1 = __webpack_require__(/*! ../common */ \"./ui/common.ts\");\nconst screen_1 = __webpack_require__(/*! ../render/screen */ \"./ui/render/screen.ts\");\nconst layers_1 = __webpack_require__(/*! ../render/layers */ \"./ui/render/layers.ts\");\nconst notes_1 = __webpack_require__(/*! ../render/notes */ \"./ui/render/notes.ts\");\nconst zoom_1 = __webpack_require__(/*! ../render/zoom */ \"./ui/render/zoom.ts\");\nconst distance_1 = __webpack_require__(/*! ./distance */ \"./ui/events/distance.ts\");\nconst delegate_1 = __webpack_require__(/*! ./delegate */ \"./ui/events/delegate.ts\");\nconst alignElement_1 = __webpack_require__(/*! ./alignElement */ \"./ui/events/alignElement.ts\");\nfunction zoomEvents() {\n    let zoomer = document.querySelector('#zoom');\n    delegate_1.eventDelegate(zoomer, 'click', '.zoom-in:not(disabled), .zoom-out:not(disabled)', function (event) {\n        if (this.classList.contains('zoom-in')) {\n            zoomRender(common_1.state.zoom - .25);\n        }\n        else {\n            zoomRender(common_1.state.zoom + .25);\n        }\n        event.stopPropagation();\n    });\n    document.querySelector('.zoom-text').addEventListener('click', function (event) {\n        zoomRender(1);\n    });\n}\nexports.zoomEvents = zoomEvents;\nfunction zoomRender(val) {\n    common_1.state.targetIndex = undefined;\n    document.querySelector('#rulers').style.display = 'none';\n    distance_1.hideDistance();\n    let viewer = document.querySelector('.screen-viewer');\n    let screen = document.querySelector('#screen');\n    let currentRect = screen.getBoundingClientRect();\n    let screenPoint = screenPointOnViewerCenter(viewer, screen);\n    let screenPoint2 = {\n        x: screenPoint.x * val / common_1.state.zoom,\n        y: screenPoint.y * val / common_1.state.zoom,\n    };\n    common_1.state.zoom = val;\n    zoom_1.zoom();\n    screen_1.updateScreen();\n    alignElement_1.alignElement({\n        scroller: viewer,\n        target: screen,\n        toRect: currentRect,\n        fromEdge: alignElement_1.Edge.hleft | alignElement_1.Edge.vtop,\n        toEdge: alignElement_1.Edge.hleft | alignElement_1.Edge.vtop,\n    });\n    viewer.scrollLeft += screenPoint2.x - screenPoint.x;\n    viewer.scrollTop += screenPoint2.y - screenPoint.y;\n    document.querySelectorAll('#layers, #notes').forEach(e => e.innerHTML = '');\n    setTimeout(function () {\n        layers_1.layers();\n        notes_1.notes();\n    }, 150);\n}\nexports.zoomRender = zoomRender;\nfunction screenPointOnViewerCenter(viewer, screen) {\n    let viewerRect = viewer.getBoundingClientRect();\n    let screenRect = screen.getBoundingClientRect();\n    let viewerCenter = {\n        x: viewerRect.x + viewerRect.width / 2,\n        y: viewerRect.y + viewerRect.height / 2,\n    };\n    return {\n        x: viewerCenter.x - screenRect.x,\n        y: viewerCenter.y - screenRect.y,\n    };\n}\n\n\n//# sourceURL=webpack:///./ui/events/zoom.ts?");

/***/ }),

/***/ "./ui/index.ts":
/*!*********************!*\
  !*** ./ui/index.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst render_1 = __webpack_require__(/*! ./render */ \"./ui/render/index.ts\");\nwindow.meaxure = {\n    render: render_1.render,\n};\n\n\n//# sourceURL=webpack:///./ui/index.ts?");

/***/ }),

/***/ "./ui/render/artboards.ts":
/*!********************************!*\
  !*** ./ui/render/artboards.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.artboards = void 0;\nconst common_1 = __webpack_require__(/*! ../common */ \"./ui/common.ts\");\nconst common_2 = __webpack_require__(/*! ../common */ \"./ui/common.ts\");\nfunction artboards() {\n    let artboardListHTML = [];\n    let pagesSelect = [];\n    let flowStarts = [];\n    let pagesData = {};\n    artboardListHTML.push('<ul class=\"artboard-list\">');\n    common_1.project.artboards.forEach((artboard, index) => {\n        if (!pagesData[artboard.pageObjectID]) {\n            pagesData[artboard.pageObjectID] = {\n                name: artboard.pageName,\n                objectID: artboard.pageObjectID,\n                count: 0\n            };\n        }\n        pagesData[artboard.pageObjectID].count++;\n        let classNames = (common_2.state.artboardIndex == index) ? ' active' : '';\n        let imageData = (artboard.imageBase64) ? artboard.imageBase64 : artboard.imageIconPath + '?' + common_1.timestamp;\n        let artboardLiBody = `<picture class=\"preview-img\" data-name=\"${artboard.name}\">` +\n            `<img alt=\"${artboard.name}\" src=\"${imageData}\">` +\n            `</picture>` +\n            `<div>` +\n            `<h3>${artboard.name}</h3>` +\n            `<small>${artboard.pageName}</small>` +\n            `</div>`;\n        artboardListHTML.push(`<li id=\"artboard-${index}\" class=\"artboard${classNames}\" data-page-id=\"${artboard.pageObjectID}\" data-id=\"${artboard.objectID}\" data-index=\"${index}\" >` +\n            artboardLiBody +\n            `</li>`);\n        if (artboard.flowStartPoint)\n            flowStarts.push(`<li id=\"startpoint-${index}\" class=\"artboard${classNames}\" data-page-id=\"${artboard.pageObjectID}\" data-id=\"${artboard.objectID}\" data-index=\"${index}\" >` +\n                artboardLiBody +\n                `</li>`);\n    });\n    artboardListHTML.push('</ul>');\n    pagesSelect.push('<div class=\"pages-select\" tabindex=\"0\">', `<h3>${common_1.localize('All artboards')} <em>(${common_1.project.artboards.length})</em></h3>`, '<ul class=\"page-list\">', `<li><label><input type=\"radio\" name=\"page\" value=\"all\" checked=\"checked\"><span>${common_1.localize('All artboards')} <em>(${common_1.project.artboards.length})</em></span></label></li>`);\n    Object.keys(pagesData).forEach(objectID => {\n        let artboard = pagesData[objectID];\n        pagesSelect.push(`<li><label><input type=\"radio\" name=\"page\" value=\"${artboard.objectID}\"><span>${artboard.name} <em>(${artboard.count})</em></span></label></li>`);\n    });\n    pagesSelect.push('</ul>');\n    pagesSelect.push('</div>');\n    if (flowStarts.length) {\n        flowStarts.unshift('<div class=\"flow-starts\">', '<div class=\"title\">', `<h3>${common_1.localize('Start points')} <em>(${flowStarts.length})</em></h3>`, '</div>', '<ul class=\"artboard-list\">');\n        flowStarts.push('</ul>', '</div>');\n    }\n    document.querySelector('#artboards').innerHTML = [flowStarts.join(''), pagesSelect.join(''), artboardListHTML.join('')].join('');\n}\nexports.artboards = artboards;\n\n\n//# sourceURL=webpack:///./ui/render/artboards.ts?");

/***/ }),

/***/ "./ui/render/atlas.ts":
/*!****************************!*\
  !*** ./ui/render/atlas.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.allAtlasMethod = void 0;\n/// <reference path=\"../../node_modules/@types/jquery/index.d.ts\"/>\nconst common_1 = __webpack_require__(/*! ../common */ \"./ui/common.ts\");\nfunction allAtlasMethod() {\n    //判断瀑布流状态\n    let navbar = sessionStorage.getItem(\"navbar\");\n    navbar == 'open' ? navbarOpen() : '';\n    //瀑布流\n    function atlasMethod() {\n        if ($('.navbar').hasClass('open')) {\n            $('header').css('display', 'none');\n            var one = $('.artboard'), //one 单张元素 \n            div = $('.section-view'); //div  容器\n            var colCount; //定义列数              parseInt() 函数可解析一个字符串，并返回一个整数。\n            var colHeightArry = []; //定义列高度数组\n            var imgWidth = $(one).outerWidth(true); //获取单张宽度\n            var imgNub = common_1.project.artboards.length; //获取图片数量 \n            var colCount = parseInt(($(div).width() / imgWidth).toString()); //div宽度 / 单张宽度 = 列数\n            var zWidth = parseInt(($(div).width()).toString()) - imgWidth * colCount; //总宽度 - （单张宽度 X 列数 = 净宽度）=剩余宽度\n            if (imgNub < colCount) { //当图片数量小于列数时\n                zWidth = parseInt(($(div).width()).toString()) - imgWidth * imgNub; //总宽度 - （单张宽度 X 图片数量 = 图片总宽度）=剩余宽度\n            }\n            for (var i = 0; i < colCount; i++) {\n                colHeightArry[i] = 0;\n            }\n            $(one).each(function () {\n                if ($(this).css('display') !== 'none') {\n                    var minValue = colHeightArry[0]; //定义最小的高度\n                    var minIndex = 0; //定义最小高度的下标\n                    for (var i = 0; i < colCount; i++) {\n                        if (colHeightArry[i] < minValue) { //如果最小高度组数中的值小于最小值\n                            minValue = colHeightArry[i]; //那么认为最小高度数组中的值是真正的最小值\n                            minIndex = i; //最小下标为当前下标\n                        }\n                    }\n                    $(this).css({\n                        left: zWidth / 2 + minIndex * imgWidth,\n                        top: minValue\n                    });\n                    $(this).children(\"picture\").css({\n                        display: 'block',\n                        opacity: '1'\n                    });\n                    colHeightArry[minIndex] += $(this).outerHeight(true);\n                }\n            });\n        }\n    }\n    //展开瀑布流\n    $('.muser').click(function () {\n        $('.navbar').addClass('open');\n        atlasMethod();\n        sessionStorage.setItem(\"navbar\", \"open\");\n        let muserT = setInterval(atlasMethod, 100);\n        setTimeout(function () {\n            clearInterval(muserT);\n        }, 1000);\n        locationActive();\n    });\n    //收起瀑布流\n    $('.artboard').click(function () {\n        $('.navbar').removeClass('open');\n        $('.icon-artboards').addClass('current');\n        sessionStorage.setItem(\"navbar\", \"cleos\");\n        $('picture').css({\n            display: '',\n            opacity: ''\n        });\n        $('header').css('display', '');\n        locationActive();\n    });\n    //选中光标在可视区域\n    function locationActive() {\n        setTimeout(function () {\n            let Atop = $('.artboard-list > .active').offset().top;\n            let artb = $(\".section-view\");\n            if (0 < Atop && Atop < artb.height()) {\n            }\n            else {\n                let p = Atop - artb.height() / 2;\n                artb.scrollTop(p + artb.scrollTop());\n            }\n        }, 600);\n    }\n    //瀑布流定时器\n    let setInT = setInterval(atlasMethod, 300);\n    //当窗口加载完毕，停止定时器\n    $(window).on('load', function () {\n        setTimeout(function () {\n            clearInterval(setInT);\n        }, 1000);\n    });\n    //强制停止定时器\n    setTimeout(function () {\n        clearInterval(setInT);\n    }, 10000);\n    //当窗口大小重置之后，重新执行\n    $(window).on('resize', function () {\n        atlasMethod();\n        locationActive();\n    });\n    locationActive();\n    function navbarOpen() {\n        $('.navbar').addClass('open');\n    }\n}\nexports.allAtlasMethod = allAtlasMethod;\n\n\n//# sourceURL=webpack:///./ui/render/atlas.ts?");

/***/ }),

/***/ "./ui/render/colors.ts":
/*!*****************************!*\
  !*** ./ui/render/colors.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.colors = void 0;\nconst common_1 = __webpack_require__(/*! ../common */ \"./ui/common.ts\");\nconst common_2 = __webpack_require__(/*! ../common */ \"./ui/common.ts\");\nfunction colors() {\n    if (!common_2.project.colors) {\n        return false;\n    }\n    if (!common_2.project.colorNames)\n        common_2.project.colorNames = {};\n    var colorListHTML = [];\n    colorListHTML.push('<ul class=\"color-list\">');\n    common_2.project.colors.forEach((color, index) => {\n        common_2.project.colorNames[color.color['argb-hex']] = color.name;\n        colorListHTML.push('<li id=\"color-' + index + '\" data-color=\"' + encodeURI(JSON.stringify(color.color)) + '\">', '<em><i style=\"background:' + color.color['css-rgba'] + '\"></i></em>', '<div>', '<h3>' + color.name + '</h3>', '<small>' + color.color[common_1.state.colorFormat] + '</small>', '</div>', '</li>');\n    });\n    colorListHTML.push('</ul>');\n    if (common_2.project.colors.length > 0) {\n        document.querySelector('#colors').innerHTML = colorListHTML.join('');\n    }\n}\nexports.colors = colors;\n\n\n//# sourceURL=webpack:///./ui/render/colors.ts?");

/***/ }),

/***/ "./ui/render/helper.ts":
/*!*****************************!*\
  !*** ./ui/render/helper.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.message = exports.unitBorderRadius = exports.unitCss = exports.unitSize = exports.percentageSize = exports.zoomSize = void 0;\nconst common_1 = __webpack_require__(/*! ../common */ \"./ui/common.ts\");\nfunction zoomSize(size) {\n    return size * common_1.state.zoom / common_1.project.resolution;\n}\nexports.zoomSize = zoomSize;\nfunction percentageSize(size, size2) {\n    return (Math.round(size / size2 * 1000) / 10) + \"%\";\n}\nexports.percentageSize = percentageSize;\nfunction unitSize(value, isText) {\n    // logic point\n    let pt = value / common_1.project.resolution;\n    // convert to display value\n    let sz = Math.round(pt * common_1.state.scale * 100) / 100;\n    let units = common_1.state.unit.split(\"/\");\n    let unit = units[0];\n    if (units.length > 1 && isText) {\n        unit = units[1];\n    }\n    return sz + unit;\n}\nexports.unitSize = unitSize;\nfunction unitCss(value) {\n    let fontSize = /^font-size:/;\n    let borderRadius = /^border-radius:/;\n    let border = /^border:/;\n    let boxShadow = /^box-shadow:/;\n    let width = /^width:/;\n    let height = /^height:/;\n    let lineHeight = /^line-height:/;\n    let layerData = common_1.state.current.layers[common_1.state.selectedIndex];\n    return value.map(item => {\n        if (fontSize.test(item)) {\n            return 'font-size: ' + unitCssName(item);\n        }\n        if (width.test(item)) {\n            return 'width: ' + unitWidthHeight(layerData, 'width');\n        }\n        if (height.test(item)) {\n            return 'height: ' + unitWidthHeight(layerData, 'height');\n        }\n        if (lineHeight.test(item)) {\n            return 'line-height: ' + unitCssName(item);\n        }\n        if (borderRadius.test(item)) {\n            return 'border-radius: ' + unitBorderRadius(layerData.radius, item);\n        }\n        if (border.test(item)) {\n            return unitBorder(layerData, item);\n        }\n        if (boxShadow.test(item)) {\n            return unitBoxShadow(layerData, item);\n        }\n        return item;\n    });\n}\nexports.unitCss = unitCss;\nfunction unitCssName(name) {\n    let p = name.replace(/[^\\d.]/g, \"\");\n    let pt = p / common_1.project.resolution;\n    let sz = Math.round(pt * common_1.state.scale * 100) / 100;\n    let units = common_1.state.unit.split(\"/\");\n    let unit = units[0];\n    return sz + unit + \";\";\n}\n//unit BorderRadius\nfunction unitBorderRadius(layerDataRadius, name) {\n    if (layerDataRadius) {\n        return unitProperBorderRadius(layerDataRadius);\n    }\n    else {\n        let e = /\\d+(.\\d+)?/g;\n        let l = name.match(e);\n        if (l.length == 1) {\n            return unitCssName(name);\n        }\n        else {\n            return unitProperBorderRadius(l);\n        }\n    }\n}\nexports.unitBorderRadius = unitBorderRadius;\nfunction unitProperBorderRadius(name) {\n    let Radius = [];\n    for (let i = 0; i < name.length; i++) {\n        Radius.push(unitSize(name[i]));\n    }\n    return Radius.join(' ') + ';';\n}\n//unit Width height\nfunction unitWidthHeight(layerData, value) {\n    let results = value == 'width' ? unitSize(layerData.rect.width) : unitSize(layerData.rect.height);\n    return results + ';';\n}\n// border\nfunction unitBorder(layerData, e) {\n    let borders = [];\n    if (layerData.borders != undefined) {\n        for (let i = layerData.borders.length - 1; i >= 0; i--) {\n            let border = layerData.borders[i];\n            borders.push('border: ' + unitSize(border.thickness) + ' solid ' + border.color['css-rgba'] + \";\");\n        }\n        return borders.join('');\n    }\n    else {\n        return e;\n    }\n}\n// Box-Shadow\nfunction unitBoxShadow(layerData, e) {\n    let shadows = [];\n    if (layerData.shadows) {\n        for (let i = layerData.shadows.length - 1; i >= 0; i--) {\n            let shadow = layerData.shadows[i];\n            let type = shadow.type == 'Inner' ? 'inset ' : '';\n            shadows.push('box-shadow: ' + type + unitSize(shadow.offsetX) + ' ' + unitSize(shadow.offsetY) + ' ' + unitSize(shadow.blurRadius) + ' ' + unitSize(shadow.spread) + ' ', shadow.color['css-rgba'] + \";\");\n        }\n        return shadows.join('');\n    }\n    else {\n        return e;\n    }\n}\nlet msgTimeout;\nfunction message(msg) {\n    let message = document.querySelector('#message');\n    message.innerText = msg;\n    message.style.display = 'inherit';\n    if (msgTimeout) {\n        clearTimeout(msgTimeout);\n        msgTimeout = undefined;\n    }\n    msgTimeout = setTimeout(() => message.style.display = 'none', 1000);\n}\nexports.message = message;\n\n\n//# sourceURL=webpack:///./ui/render/helper.ts?");

/***/ }),

/***/ "./ui/render/index.ts":
/*!****************************!*\
  !*** ./ui/render/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.render = void 0;\nconst common_1 = __webpack_require__(/*! ../common */ \"./ui/common.ts\");\nconst artboards_1 = __webpack_require__(/*! ./artboards */ \"./ui/render/artboards.ts\");\nconst slices_1 = __webpack_require__(/*! ./slices */ \"./ui/render/slices.ts\");\nconst colors_1 = __webpack_require__(/*! ./colors */ \"./ui/render/colors.ts\");\nconst unit_1 = __webpack_require__(/*! ./unit */ \"./ui/render/unit.ts\");\nconst zoom_1 = __webpack_require__(/*! ./zoom */ \"./ui/render/zoom.ts\");\nconst events_1 = __webpack_require__(/*! ../events */ \"./ui/events/index.ts\");\nconst navigate_1 = __webpack_require__(/*! ../events/navigate */ \"./ui/events/navigate.ts\");\nconst atlas_1 = __webpack_require__(/*! ../render/atlas */ \"./ui/render/atlas.ts\");\nfunction render(data) {\n    common_1.init(data);\n    document.querySelector('#app').innerHTML = [\n        '<header>',\n        '<div class=\"header-center\">',\n        '<div class=\"muser\"></div>',\n        '<div id=\"zoom\" class=\"zoom-widget\">',\n        '<button class=\"zoom-in\"></button>',\n        '<label class=\"zoom-text\"></label>',\n        '<button class=\"zoom-out\"></button>',\n        '</div>',\n        '<div class=\"flow-mode\">',\n        `<label for=\"flow-mode\">${common_1.localize('FLOW')}</label>`,\n        `<div class=\"slidebox\" title=\"${common_1.localize('Keyboard shortcut')}: f\">`,\n        '<input id=\"flow-mode\" type=\"checkbox\" name=\"flow-mode\">',\n        '<label for=\"flow-mode\"></label>',\n        '</div>',\n        '</div>',\n        '<h1></h1>',\n        '<div class=\"show-notes\">',\n        `<label for=\"show-notes\">${common_1.localize('NOTES')}</label>`,\n        `<div class=\"slidebox\" title=\"${common_1.localize('Keyboard shortcut')}: n\">`,\n        '<input id=\"show-notes\" type=\"checkbox\" name=\"show-notes\" checked=\"checked\">',\n        '<label for=\"show-notes\"></label>',\n        '</div>',\n        '</div>',\n        '</div>',\n        '</header>',\n        '<main>',\n        '<aside class=\"navbar on\">',\n        '<div class=\"header-left\">',\n        '<div class=\"showBtn\"></div>',\n        '<ul class=\"tab\">',\n        '<li class=\"icon-artboards current\" data-id=\"artboards\"></li>',\n        '<li class=\"icon-slices\" data-id=\"slices\"></li>',\n        '<li class=\"icon-colors\" data-id=\"colors\"></li>',\n        '</ul>',\n        '</div>',\n        '<div class=\"section-view\">',\n        '<section id=\"artboards\"></section>',\n        `<section id=\"slices\" style=\"display: none;\"><div class=\"empty\">${common_1.localize('No slices added!')}</div></section>`,\n        `<section id=\"colors\" style=\"display: none;\"><div class=\"empty\">${common_1.localize('No colors added!')}</div></section>`,\n        '</div>',\n        '</aside>',\n        '<section class=\"screen-viewer\">',\n        '<div class=\"screen-viewer-inner\">',\n        '<div id=\"screen\" class=\"screen\">',\n        '<div id=\"rulers\" style=\"display:none;\">',\n        '<div id=\"rv\" class=\"ruler v\"></div>',\n        '<div id=\"rh\" class=\"ruler h\"></div>',\n        '</div>',\n        '<div id=\"flows\"></div>',\n        '<div id=\"layers\"></div>',\n        '<div id=\"notes\"></div>',\n        '<div id=\"td\" class=\"distance v\" style=\"display:none;\"><div data-height=\"3\"></div></div>',\n        '<div id=\"rd\" class=\"distance h\" style=\"display:none;\"><div data-width=\"\"></div></div>',\n        '<div id=\"bd\" class=\"distance v\" style=\"display:none;\"><div data-height=\"\"></div></div>',\n        '<div id=\"ld\" class=\"distance h\" style=\"display:none;\"><div data-width=\"\"></div></div>',\n        '</div>',\n        '</div>',\n        '<div class=\"overlay\"></div>',\n        '</section>',\n        '<aside class=\"inspector\" id=\"inspector\">',\n        '<div class=\"header-right\"><div id=\"unit\" class=\"unit-box\" tabindex=\"0\">XHDPI @2x (dp/sp)</div></div>',\n        '<div  id=\"inspectorCenter\"></div>',\n        '</aside>',\n        '</main>',\n        '<div id=\"message\" class=\"message\"></div>',\n        '<div id=\"cursor\" class=\"cursor\" style=\"display: none;\"></div>'\n    ].join('');\n    zoom_1.zoom();\n    unit_1.unit();\n    artboards_1.artboards();\n    slices_1.slices();\n    colors_1.colors();\n    events_1.events();\n    navigate_1.navigateByURLHash(false);\n    atlas_1.allAtlasMethod();\n}\nexports.render = render;\n\n\n//# sourceURL=webpack:///./ui/render/index.ts?");

/***/ }),

/***/ "./ui/render/inspector/borders.ts":
/*!****************************************!*\
  !*** ./ui/render/inspector/borders.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.renderBorders = void 0;\nconst common_1 = __webpack_require__(/*! ../../common */ \"./ui/common.ts\");\nconst helper_1 = __webpack_require__(/*! ../helper */ \"./ui/render/helper.ts\");\nconst shared_1 = __webpack_require__(/*! ./shared */ \"./ui/render/inspector/shared.ts\");\nfunction renderBorders(layerData) {\n    if (!layerData.borders || !layerData.borders.length)\n        return '';\n    var borders = [];\n    for (let i = layerData.borders.length - 1; i >= 0; i--) {\n        let border = layerData.borders[i];\n        borders.push('<div class=\"items-group\">', '<h4>' + common_1.localize(border.position + ' Border') + '</h4>', '<div class=\"item\" data-label=\"' + common_1.localize('Weight') + ':\">', '<label><input id=\"font-family\" type=\"text\" value=\"' + helper_1.unitSize(border.thickness) + '\" readonly=\"readonly\"></label>', '<label></label>', '</div>');\n        borders.push('<div class=\"item\" data-label=\"' + common_1.localize(border.fillType) + ':\">');\n        if (border.fillType.toLowerCase() == \"color\") {\n            borders.push(shared_1.colorItem(border.color));\n        }\n        else {\n            borders.push('<div class=\"colors gradient\">');\n            border.gradient.colorStops.forEach(gradient => borders.push(shared_1.colorItem(gradient.color)));\n            borders.push('</div>');\n        }\n        borders.push('</div>');\n        borders.push('</div>');\n    }\n    return shared_1.propertyType('BORDERS', borders.join(''));\n}\nexports.renderBorders = renderBorders;\n\n\n//# sourceURL=webpack:///./ui/render/inspector/borders.ts?");

/***/ }),

/***/ "./ui/render/inspector/codeTemplate.ts":
/*!*********************************************!*\
  !*** ./ui/render/inspector/codeTemplate.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.renderCodeTemplate = void 0;\nconst helper_1 = __webpack_require__(/*! ../helper */ \"./ui/render/helper.ts\");\nconst helper_2 = __webpack_require__(/*! ../../events/helper */ \"./ui/events/helper.ts\");\nconst shared_1 = __webpack_require__(/*! ./shared */ \"./ui/render/inspector/shared.ts\");\nfunction renderCodeTemplate(layerData) {\n    if (!layerData.css || !layerData.css.length)\n        return '';\n    var tab = ['<ul class=\"tab\" id=\"code-tab\" >',\n        '<li class=\"icon-css-panel\" data-id=\"css-panel\" data-codeType=\"css\"></li>',\n        '<li class=\"icon-android-panel\" data-id=\"android-panel\" data-codeType=\"android\" ></li>',\n        '<li class=\"icon-ios-panel\" data-id=\"ios-panel\" data-codeType=\"ios\" ></li>',\n        '</ul>'\n    ].join('');\n    var css = [\n        '<div id=\"css-panel\" class=\"code-item item\">',\n        '<label><textarea id=\"css\" rows=\"' + (layerData.css.length + 1) + '\" readonly=\"readonly\">' + helper_1.unitCss(layerData.css).join(\"\\r\\n\") + '</textarea></label>',\n        '</div>'\n    ].join('');\n    var android = [];\n    if (layerData.type == \"text\") {\n        android.push('<div id=\"android-panel\"  class=\"code-item item\">', '<label><textarea id=\"css\" rows=\"6\" readonly=\"readonly\">' +\n            \"&lt;TextView\\r\\n\" + getAndroidWithHeight(layerData) +\n            \"android:text=\\\"\" + layerData.content + \"\\\"\\r\\n\" + \"android:textColor=\\\"\" + layerData.color[\"argb-hex\"] + \"\\\"\\r\\n\" +\n            \"android:textSize=\\\"\" + helper_1.unitSize(layerData.fontSize, true) + \"\\\"\\r\\n\" + \"/&gt;\" + '</textarea></label>', '</div>');\n    }\n    else if (layerData.type == \"shape\") {\n        android.push('<div id=\"android-panel\" class=\"code-item item\">', '<label><textarea id=\"css\" rows=\"6\" readonly=\"readonly\">' +\n            \"&lt;View\\r\\n\" + getAndroidWithHeight(layerData) +\n            getAndroidShapeBackground(layerData) +\n            \"/&gt;\" + '</textarea></label>', '</div>');\n    }\n    else if (layerData.type == \"slice\") {\n        android.push('<div id=\"android-panel\" class=\"code-item item\">', '<label><textarea id=\"css\" rows=\"6\" readonly=\"readonly\">' +\n            \"&lt;ImageView\\r\\n\" + getAndroidWithHeight(layerData) +\n            getAndroidImageSrc(layerData) + \"/&gt;\" +\n            '</textarea></label>', '</div>');\n    }\n    var ios = [];\n    if (layerData.type == \"text\") {\n        ios.push('<div id=\"ios-panel\"  class=\"code-item item\">', '<label><textarea id=\"css\" rows=\"6\" readonly=\"readonly\">' +\n            \"UILabel *label = [[UILabel alloc] init];\\r\\n\" +\n            \"label.frame = CGRectMake(\" + helper_2.scaleSize(layerData.rect.x) + \"\\, \" + helper_2.scaleSize(layerData.rect.y) + \"\\, \" +\n            helper_2.scaleSize(layerData.rect.width) + \"\\, \" + helper_2.scaleSize(layerData.rect.height) + \");\\r\\n\" +\n            \"label.text = \\@\\\"\" + layerData.content + \"\\\";\\r\\n\" +\n            \"label.font = [UIFont fontWithName:\\@\\\"\" + layerData.fontFace + \"\\\" size:\" + helper_2.scaleSize(layerData.fontSize) + \"];\\r\\n\" +\n            \"label.textColor = [UIColor colorWithRed:\" + layerData.color.rgb.r + \"/255.0 green:\" + layerData.color.rgb.g + \"/255.0 blue:\" + layerData.color.rgb.b + \"/255.0 alpha:\" + layerData.color.alpha + \"/255.0];\\r\\n\" +\n            '</textarea></label>', '</div>');\n    }\n    else if (layerData.type == \"shape\") {\n        ios.push('<div id=\"ios-panel\" class=\"code-item item\">', '<label><textarea id=\"css\" rows=\"6\" readonly=\"readonly\">' +\n            \"UIView *view = [[UIView alloc] init];\\r\\n\" +\n            \"view.frame = CGRectMake(\" + helper_2.scaleSize(layerData.rect.x) + \"\\, \" + helper_2.scaleSize(layerData.rect.y) + \"\\, \" +\n            helper_2.scaleSize(layerData.rect.width) + \"\\, \" + helper_2.scaleSize(layerData.rect.height) + \");\\r\\n\" +\n            getIOSShapeBackground(layerData) +\n            '</textarea></label>', '</div>');\n    }\n    else if (layerData.type == \"slice\") {\n        ios.push('<div id=\"ios-panel\" class=\"code-item item\">', '<label><textarea id=\"css\" rows=\"6\" readonly=\"readonly\">' +\n            \"UIImageView *imageView = [[UIImageView alloc] init];\\r\\n\" +\n            \"imageView.frame = CGRectMake(\" + helper_2.scaleSize(layerData.rect.x) + \"\\, \" + helper_2.scaleSize(layerData.rect.y) + \"\\, \" +\n            helper_2.scaleSize(layerData.rect.width) + \"\\, \" + helper_2.scaleSize(layerData.rect.height) + \");\\r\\n\" +\n            getIOSImageSrc(layerData) +\n            '</textarea></label>', '</div>');\n    }\n    var copyAll = [\"<div class='copyAll'>copyAllCode</div>\"];\n    return shared_1.propertyType('CODE TEMPLATE', [tab, css, android.join(''), ios.join(''), copyAll].join(''), true);\n}\nexports.renderCodeTemplate = renderCodeTemplate;\nfunction getAndroidWithHeight(layerData) {\n    return \"android:layout_width=\\\"\" + helper_1.unitSize(layerData.rect.width, false) + \"\\\"\\r\\n\" + \"android:layout_height=\\\"\" + helper_1.unitSize(layerData.rect.height, false) + \"\\\"\\r\\n\";\n}\nfunction getAndroidShapeBackground(layerData) {\n    var colorCode = \"\";\n    if (layerData.type != \"shape\" || typeof (layerData.fills) == 'undefined' || layerData.fills.length == 0)\n        return colorCode;\n    var f;\n    for (f in layerData.fills) {\n        if (layerData.fills[f].fillType.toLowerCase() == \"color\") {\n            return \"android:background=\\\"\" + layerData.fills[f].color[\"argb-hex\"] + \"\\\"\\r\\n\";\n        }\n    }\n    return colorCode;\n}\nfunction getAndroidImageSrc(layerData) {\n    if (layerData.type != \"slice\" || typeof (layerData.exportable) == 'undefined')\n        return \"\";\n    return \"android:src=\\\"\\@mipmap/\" + layerData.exportable[0].name + \".\" + layerData.exportable[0].format + \"\\\"\\r\\n\";\n}\nfunction getIOSShapeBackground(layerData) {\n    var colorCode = \"\";\n    if (layerData.type != \"shape\" || typeof (layerData.fills) == 'undefined' || layerData.fills.length == 0)\n        return colorCode;\n    var f;\n    for (f in layerData.fills) {\n        if (layerData.fills[f].fillType.toLowerCase() == \"color\") {\n            return \"view.backgroundColor = [UIColor colorWithRed:\" + layerData.fills[f].color.rgb.r + \"/255.0 green:\" + layerData.fills[f].color.rgb.g + \"/255.0 blue:\" + layerData.fills[f].color.rgb.b + \"/255.0 alpha:\" + layerData.fills[f].color.alpha + \"/255.0]\\;\\r\\n\";\n        }\n    }\n    return colorCode;\n}\nfunction getIOSImageSrc(layerData) {\n    if (layerData.type != \"slice\" || typeof (layerData.exportable) == 'undefined')\n        return \"\";\n    return \"imageView.image = [UIImage imageNamed:\\@\\\"\" + layerData.exportable[0].name + \".\" + layerData.exportable[0].format + \"\\\"];\\r\\n\";\n}\n\n\n//# sourceURL=webpack:///./ui/render/inspector/codeTemplate.ts?");

/***/ }),

/***/ "./ui/render/inspector/exportable.ts":
/*!*******************************************!*\
  !*** ./ui/render/inspector/exportable.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.renderExportable = void 0;\nconst shared_1 = __webpack_require__(/*! ./shared */ \"./ui/render/inspector/shared.ts\");\nfunction renderExportable(layerData) {\n    if (!layerData.exportable || !layerData.exportable.length)\n        return '';\n    var expHTML = [], path = 'assets/';\n    expHTML.push('<ul class=\"exportable\">');\n    layerData.exportable.forEach(exportable => {\n        var filePath = path + exportable.path;\n        expHTML.push('<li>', '<a href=\"' + filePath\n            + '\"target=\"_blank\" download '\n            + 'data-format=\"' + exportable.format.toUpperCase()\n            + '\"><img class=\"dragExp\" src=\"' + filePath + '\" alt=\"' + exportable.path\n            + '\"><img class=\"thumbExp\" src=\"' + filePath + '\" alt=\"' + exportable.path\n            + '\">'\n            + exportable.path.replace('drawable-', '')\n            + '</a>', '</li>');\n    });\n    expHTML.push('</ul>');\n    if (document.location.protocol == 'file:') {\n        expHTML.push('按(option)或(alt)点击即可下载');\n    }\n    return shared_1.propertyType('EXPORTABLE', expHTML.join(''));\n}\nexports.renderExportable = renderExportable;\n\n\n//# sourceURL=webpack:///./ui/render/inspector/exportable.ts?");

/***/ }),

/***/ "./ui/render/inspector/fills.ts":
/*!**************************************!*\
  !*** ./ui/render/inspector/fills.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.renderFills = void 0;\nconst common_1 = __webpack_require__(/*! ../../common */ \"./ui/common.ts\");\nconst shared_1 = __webpack_require__(/*! ./shared */ \"./ui/render/inspector/shared.ts\");\nfunction renderFills(layerData) {\n    if (!layerData.fills || !layerData.fills.length)\n        return '';\n    var fills = [];\n    let fillsData = layerData.fills;\n    for (let i = fillsData.length - 1; i >= 0; i--) {\n        let fill = fillsData[i];\n        fills.push('<div class=\"item items-group\" data-label=\"' + common_1.localize(fill.fillType) + ':\">');\n        if (fill.fillType.toLowerCase() == \"color\") {\n            fills.push(shared_1.colorItem(fill.color));\n        }\n        else {\n            fills.push('<div class=\"gradient\">');\n            fill.gradient.colorStops.forEach(gradient => fills.push(shared_1.colorItem(gradient.color)));\n            fills.push('</div>');\n        }\n        fills.push('</div>');\n    }\n    return shared_1.propertyType('FILLS', fills.join(''));\n}\nexports.renderFills = renderFills;\n\n\n//# sourceURL=webpack:///./ui/render/inspector/fills.ts?");

/***/ }),

/***/ "./ui/render/inspector/font.ts":
/*!*************************************!*\
  !*** ./ui/render/inspector/font.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.renderFont = void 0;\nconst common_1 = __webpack_require__(/*! ../../common */ \"./ui/common.ts\");\nconst helper_1 = __webpack_require__(/*! ../helper */ \"./ui/render/helper.ts\");\nconst shared_1 = __webpack_require__(/*! ./shared */ \"./ui/render/inspector/shared.ts\");\nfunction renderFont(layerData) {\n    if (layerData.type != 'text')\n        return '';\n    var fontFamily = [\n        '<div class=\"item\" data-label=\"' + common_1.localize('Family') + ':\">',\n        '<label><input id=\"font-family\" type=\"text\" value=\"' + layerData.fontFace + '\" readonly=\"readonly\"></label>',\n        '</div>'\n    ].join(''), textColor = [\n        '<div class=\"item\" data-label=\"' + common_1.localize('Color') + ':\">',\n        '<div class=\"color\">',\n        shared_1.colorItem(layerData.color),\n        '</div>',\n        '</div>'\n    ].join(''), fontSize = (layerData.fontSize) ? [\n        '<div class=\"item\" data-label=\"' + common_1.localize('Size') + ':\">',\n        '<label><input id=\"opacity\" type=\"text\" value=\"' + helper_1.unitSize(layerData.fontSize, true) + '\" readonly=\"readonly\"></label>',\n        '<label></label>',\n        '</div>'\n    ].join('') : '', spacing = [\n        '<div class=\"item\" data-label=\"' + common_1.localize('Spacing') + ':\">',\n        '<label data-label=\"' + common_1.localize('Character') + '\"><input id=\"letter-spacing\" type=\"text\" value=\"' + helper_1.unitSize(layerData.letterSpacing, true) + '\" readonly=\"readonly\"></label>',\n        '<label data-label=\"' + common_1.localize('Line') + '\"><input id=\"line-height\" type=\"text\" value=\"' + (layerData.lineHeight ? helper_1.unitSize(layerData.lineHeight, true) : 'Auto') + '\" readonly=\"readonly\"></label>',\n        '</div>'\n    ].join(''), content = [\n        '<div class=\"item\">',\n        '<label data-label=\"' + common_1.localize('Content') + '\"><textarea id=\"content\" rows=\"2\" readonly=\"readonly\" style=\"font-family: ' + layerData.fontFace + ', sans-serif\">' + layerData.content + '</textarea></label>',\n        '</div>'\n    ].join('');\n    return shared_1.propertyType('TYPEFACE', [fontFamily, textColor, fontSize, spacing, content].join(''));\n}\nexports.renderFont = renderFont;\n\n\n//# sourceURL=webpack:///./ui/render/inspector/font.ts?");

/***/ }),

/***/ "./ui/render/inspector/index.ts":
/*!**************************************!*\
  !*** ./ui/render/inspector/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.inspector = void 0;\nconst common_1 = __webpack_require__(/*! ../../common */ \"./ui/common.ts\");\nconst codeTemplate_1 = __webpack_require__(/*! ./codeTemplate */ \"./ui/render/inspector/codeTemplate.ts\");\nconst properties_1 = __webpack_require__(/*! ./properties */ \"./ui/render/inspector/properties.ts\");\nconst shadows_1 = __webpack_require__(/*! ./shadows */ \"./ui/render/inspector/shadows.ts\");\nconst borders_1 = __webpack_require__(/*! ./borders */ \"./ui/render/inspector/borders.ts\");\nconst font_1 = __webpack_require__(/*! ./font */ \"./ui/render/inspector/font.ts\");\nconst exportable_1 = __webpack_require__(/*! ./exportable */ \"./ui/render/inspector/exportable.ts\");\nconst fills_1 = __webpack_require__(/*! ./fills */ \"./ui/render/inspector/fills.ts\");\nfunction inspector() {\n    if (common_1.state.selectedIndex === undefined ||\n        (!common_1.state.current && !common_1.state.current.layers && !common_1.state.current.layers[common_1.state.selectedIndex]))\n        return false;\n    let layerData = common_1.state.current.layers[common_1.state.selectedIndex];\n    let html = [\n        '<h2>' + layerData.name + '</h2>',\n        properties_1.renderProperties(layerData),\n        fills_1.renderFills(layerData),\n        font_1.renderFont(layerData),\n        borders_1.renderBorders(layerData),\n        shadows_1.renderShadows(layerData),\n        codeTemplate_1.renderCodeTemplate(layerData),\n        exportable_1.renderExportable(layerData),\n    ];\n    let inspector = document.querySelector('#inspector');\n    let inspectorCenter = document.querySelector('#inspectorCenter');\n    inspector.classList.add('active');\n    inspectorCenter.innerHTML = html.join('');\n    // select previously used tab\n    let li = inspector.querySelector('[data-codeType=' + common_1.state.codeType + ']');\n    if (li) {\n        li.classList.add('select');\n        inspector.querySelector(\"#\" + li.getAttribute('data-id')).classList.add('select');\n    }\n    document.querySelectorAll('#code-tab li').forEach(li => li.addEventListener('click', function () {\n        var _a;\n        let target = this;\n        let id = target.getAttribute('data-id');\n        common_1.state.codeType = target.getAttribute('data-codeType');\n        target.parentElement.querySelector('li.select').classList.remove('select');\n        target.classList.add('select');\n        (_a = inspector.querySelector('div.item.select')) === null || _a === void 0 ? void 0 : _a.classList.remove('select');\n        inspector.querySelector(\"#\" + id).classList.add('select');\n    }));\n}\nexports.inspector = inspector;\n\n\n//# sourceURL=webpack:///./ui/render/inspector/index.ts?");

/***/ }),

/***/ "./ui/render/inspector/properties.ts":
/*!*******************************************!*\
  !*** ./ui/render/inspector/properties.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.renderProperties = void 0;\nconst common_1 = __webpack_require__(/*! ../../common */ \"./ui/common.ts\");\nconst helper_1 = __webpack_require__(/*! ../helper */ \"./ui/render/helper.ts\");\nconst shared_1 = __webpack_require__(/*! ./shared */ \"./ui/render/inspector/shared.ts\");\nfunction renderProperties(layerData) {\n    let position = [\n        '<div class=\"item\" data-label=\"' + common_1.localize('Position') + ':\">',\n        '<label data-label=\"' + common_1.localize('X') + '\"><input id=\"position-x\" type=\"text\" value=\"' + helper_1.unitSize(layerData.rect.x) + '\" readonly=\"readonly\"></label>',\n        '<label data-label=\"' + common_1.localize('Y') + '\"><input id=\"position-y\" type=\"text\" value=\"' + helper_1.unitSize(layerData.rect.y) + '\" readonly=\"readonly\"></label>',\n        '</div>'\n    ].join('');\n    let size = [\n        '<div class=\"item\" data-label=\"' + common_1.localize('Size') + ':\">',\n        '<label data-label=\"' + common_1.localize('Width') + '\"><input id=\"size-width\" type=\"text\" value=\"' + helper_1.unitSize(layerData.rect.width) + '\" readonly=\"readonly\"></label>',\n        '<label data-label=\"' + common_1.localize('Height') + '\"><input id=\"size-height\" type=\"text\" value=\"' + helper_1.unitSize(layerData.rect.height) + '\" readonly=\"readonly\"></label>',\n        '</div>'\n    ].join('');\n    let opacity = (typeof layerData.opacity == 'number') ? [\n        '<div class=\"item\" data-label=\"' + common_1.localize('Opacity') + ':\">',\n        '<label><input id=\"opacity\" type=\"text\" value=\"' + Math.round(layerData.opacity * 10000) / 100 + '%\" readonly=\"readonly\"></label>',\n        '<label></label>',\n        '</div>'\n    ].join('') : '';\n    let radius = (layerData.radius) ? ((layerData.radius.length >= 2) ? [\n        '<div class=\"item\" data-label=\"' + common_1.localize('Radius') + ':\">',\n        '<label><input id=\"radius\" type=\"text\" value=\"' + helper_1.unitBorderRadius(layerData.radius, undefined) + '\" readonly=\"readonly\"></label>',\n        '</div>'\n    ].join('') : [\n        '<div class=\"item\" data-label=\"' + common_1.localize('Radius') + ':\">',\n        '<label><input id=\"radius\" type=\"text\" value=\"' + helper_1.unitBorderRadius(layerData.radius, undefined) + '\" readonly=\"readonly\"></label>',\n        '<label></label>',\n        '</div>'\n    ].join('')) : '';\n    let styleName = (layerData.styleName) ? [\n        '<div class=\"item\" data-label=\"' + common_1.localize('Style') + ':\">',\n        '<label><input id=\"styleName\" type=\"text\" value=\"' + layerData.styleName + '\" readonly=\"readonly\"></label>',\n        '</div>'\n    ].join('') : '';\n    return shared_1.propertyType('PROPERTIES', [position, size, opacity, radius, styleName].join(''));\n}\nexports.renderProperties = renderProperties;\n\n\n//# sourceURL=webpack:///./ui/render/inspector/properties.ts?");

/***/ }),

/***/ "./ui/render/inspector/shadows.ts":
/*!****************************************!*\
  !*** ./ui/render/inspector/shadows.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.renderShadows = void 0;\nconst common_1 = __webpack_require__(/*! ../../common */ \"./ui/common.ts\");\nconst helper_1 = __webpack_require__(/*! ../helper */ \"./ui/render/helper.ts\");\nconst shared_1 = __webpack_require__(/*! ./shared */ \"./ui/render/inspector/shared.ts\");\nfunction renderShadows(layerData) {\n    if (!layerData.shadows || !layerData.shadows.length)\n        return '';\n    var shadows = [];\n    for (let i = layerData.shadows.length - 1; i >= 0; i--) {\n        let shadow = layerData.shadows[i];\n        shadows.push('<div class=\"items-group\">', '<h4>' + common_1.localize(shadow.type + ' Shadow') + '</h4>', '<div class=\"item\" data-label=\"' + common_1.localize('Offset') + ':\">', '<label data-label=\"' + common_1.localize('X') + '\"><input id=\"offset-x\" type=\"text\" value=\"' + helper_1.unitSize(shadow.offsetX) + '\" readonly=\"readonly\"></label>', '<label data-label=\"' + common_1.localize('Y') + '\"><input id=\"offset-y\" type=\"text\" value=\"' + helper_1.unitSize(shadow.offsetY) + '\" readonly=\"readonly\"></label>', '</div>', '<div class=\"item\" data-label=\"' + common_1.localize('Effect') + ':\">', '<label data-label=\"' + common_1.localize('Blur') + '\"><input id=\"offset-x\" type=\"text\" value=\"' + helper_1.unitSize(shadow.blurRadius) + '\" readonly=\"readonly\"></label>', '<label data-label=\"' + common_1.localize('Spread') + '\"><input id=\"offset-y\" type=\"text\" value=\"' + helper_1.unitSize(shadow.spread) + '\" readonly=\"readonly\"></label>', '</div>', '<div class=\"item\" data-label=\"' + common_1.localize('Color') + ':\">', shared_1.colorItem(shadow.color), '</div>', '</div>');\n    }\n    return shared_1.propertyType('SHADOWS', shadows.join(''));\n}\nexports.renderShadows = renderShadows;\n\n\n//# sourceURL=webpack:///./ui/render/inspector/shadows.ts?");

/***/ }),

/***/ "./ui/render/inspector/shared.ts":
/*!***************************************!*\
  !*** ./ui/render/inspector/shared.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.propertyType = exports.colorItem = void 0;\nconst common_1 = __webpack_require__(/*! ../../common */ \"./ui/common.ts\");\nconst common_2 = __webpack_require__(/*! ../../common */ \"./ui/common.ts\");\nfunction colorItem(color) {\n    var colorName = (common_2.project.colorNames) ? common_2.project.colorNames[color['argb-hex']] : '';\n    colorName = (colorName) ? ' data-name=\"' + colorName + '\"' : '';\n    return [\n        '<div class=\"color\"' + colorName + '>',\n        '<label><em><i style=\"background-color:' + color['css-rgba'] + ';\"></i></em></label><input data-color=\"' + encodeURI(JSON.stringify(color)) + '\" type=\"text\" value=\"' + color[common_1.state.colorFormat] + '\" readonly=\"readonly\">',\n        '</div>'\n    ].join('');\n}\nexports.colorItem = colorItem;\nfunction propertyType(title, content, isCode) {\n    var nopadding = isCode ? ' style=\"padding:0\"' : '';\n    return ['<section>',\n        '<h3>' + common_2.localize(title) + '</h3>',\n        '<div class=\"context\"' + nopadding + '>',\n        content,\n        '</div>',\n        '</section>'\n    ].join('');\n}\nexports.propertyType = propertyType;\n\n\n//# sourceURL=webpack:///./ui/render/inspector/shared.ts?");

/***/ }),

/***/ "./ui/render/layers.ts":
/*!*****************************!*\
  !*** ./ui/render/layers.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.layers = exports.MapArtboardIDToIndex = void 0;\nconst common_1 = __webpack_require__(/*! ../common */ \"./ui/common.ts\");\nconst helper_1 = __webpack_require__(/*! ./helper */ \"./ui/render/helper.ts\");\nconst interfaces_1 = __webpack_require__(/*! ../../src/meaxure/interfaces */ \"./src/meaxure/interfaces.ts\");\nexports.MapArtboardIDToIndex = undefined;\nfunction layers() {\n    specLayers();\n    flowLayers();\n}\nexports.layers = layers;\nfunction specLayers() {\n    let layersHTML = [];\n    common_1.state.current.layers.forEach((layer, index) => {\n        if (layer.type == interfaces_1.SMType.group || layer.type == interfaces_1.SMType.hotspot)\n            return;\n        let x = helper_1.zoomSize(layer.rect.x);\n        let y = helper_1.zoomSize(layer.rect.y);\n        let width = helper_1.zoomSize(layer.rect.width);\n        let height = helper_1.zoomSize(layer.rect.height);\n        let classNames = ['layer'];\n        let rotation = layer.rotation;\n        classNames.push('layer-' + layer.objectID);\n        if (common_1.state.selectedIndex == index)\n            classNames.push('selected');\n        layersHTML.push([`\n<div id=\"layer-${index}\" \n    class=\"${classNames.join(' ')}\" data-index=\"${index}\" \n    percentage-width=\"${helper_1.percentageSize(layer.rect.width, common_1.state.current.width)}\" \n    percentage-height=\"${helper_1.percentageSize(layer.rect.height, common_1.state.current.height)}\" \n    data-width=\"${helper_1.unitSize(layer.rect.width)}\" \n    data-height=\"${helper_1.unitSize(layer.rect.height)}\" \n    style=\"left: ${x}px; top: ${y}px; width: ${width}px; height: ${height}px; transform: rotate(${rotation}deg);\"\n>\n    <i class=\"tl\"></i><i class=\"tr\"></i><i class=\"bl\"></i><i class=\"br\"></i>\n    <b class=\"et h\"></b><b class=\"er v\"></b><b class=\"eb h\"></b><b class=\"el v\"></b>\n</div>`].join(''));\n    });\n    document.querySelector('#layers').innerHTML = layersHTML.join('');\n}\nfunction flowLayers() {\n    exports.MapArtboardIDToIndex = common_1.project.artboards.reduce((p, c, i) => {\n        p[c.objectID] = i;\n        return p;\n    }, { 'back': -1 });\n    let layersHTML = [];\n    common_1.state.current.layers.filter(layer => layer.flow && exports.MapArtboardIDToIndex[layer.flow.targetId] !== undefined)\n        .forEach((layer, index) => {\n        let x = helper_1.zoomSize(layer.rect.x);\n        let y = helper_1.zoomSize(layer.rect.y);\n        let width = helper_1.zoomSize(layer.rect.width);\n        let height = helper_1.zoomSize(layer.rect.height);\n        let classNames = ['flow'];\n        layersHTML.push([`\n<div class=\"${classNames.join(' ')}\"\n    data-flow-target=\"${layer.flow.targetId}\"\n    style=\"left: ${x}px; top: ${y}px; width: ${width}px; height: ${height}px;\"\n></div>`].join(''));\n    });\n    document.querySelector('#flows').innerHTML = layersHTML.join('');\n}\n\n\n//# sourceURL=webpack:///./ui/render/layers.ts?");

/***/ }),

/***/ "./ui/render/notes.ts":
/*!****************************!*\
  !*** ./ui/render/notes.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.notes = void 0;\nconst common_1 = __webpack_require__(/*! ../common */ \"./ui/common.ts\");\nconst helper_1 = __webpack_require__(/*! ./helper */ \"./ui/render/helper.ts\");\nfunction notes() {\n    var notesHTML = [];\n    common_1.state.current.notes.forEach((note, index) => {\n        notesHTML.push('<div class=\"note\" data-index=\"' + (index + 1) + '\" style=\"left: ' + helper_1.zoomSize(note.rect.x) + 'px; top: ' + helper_1.zoomSize(note.rect.y) + 'px;\"><div style=\"white-space:nowrap;display:none;\">' + note.note + '</div></div>');\n    });\n    document.querySelector('#notes').innerHTML = notesHTML.join('');\n}\nexports.notes = notes;\n\n\n//# sourceURL=webpack:///./ui/render/notes.ts?");

/***/ }),

/***/ "./ui/render/screen.ts":
/*!*****************************!*\
  !*** ./ui/render/screen.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.updateScreen = void 0;\nconst common_1 = __webpack_require__(/*! ../common */ \"./ui/common.ts\");\nconst helper_1 = __webpack_require__(/*! ./helper */ \"./ui/render/helper.ts\");\nconst flow_1 = __webpack_require__(/*! ../events/flow */ \"./ui/events/flow.ts\");\nfunction updateScreen(resetScroll = false) {\n    let imageData = (common_1.state.current.imageBase64) ? common_1.state.current.imageBase64 : common_1.state.current.imagePath + '?' + common_1.timestamp;\n    let screen = document.querySelector('#screen');\n    let viewerInner = screen.parentElement;\n    let viewer = document.querySelector('.screen-viewer');\n    screen.style.width = helper_1.zoomSize(common_1.state.current.width) + 'px';\n    screen.style.height = helper_1.zoomSize(common_1.state.current.height) + 'px';\n    screen.style.background = '#FFF url(' + imageData + ') no-repeat';\n    screen.style.backgroundSize = helper_1.zoomSize(common_1.state.current.width) + 'px ' + helper_1.zoomSize(common_1.state.current.height) + 'px';\n    // viewer size\n    let maxSize = Math.max(common_1.state.current.width, common_1.state.current.height, viewer.clientWidth, viewer.clientHeight) * 5;\n    if (flow_1.flowMode) {\n        viewerInner.style.width = helper_1.zoomSize(common_1.state.current.width) + 'px';\n        viewerInner.style.height = helper_1.zoomSize(common_1.state.current.height) + 'px';\n        screen.style.marginLeft = '0';\n        screen.style.marginTop = '0';\n        viewer.scrollTop = 0;\n        return;\n    }\n    else {\n        viewerInner.style.width = maxSize + 'px';\n        viewerInner.style.height = maxSize + 'px';\n        screen.style.marginLeft = -helper_1.zoomSize(common_1.state.current.width / 2) + 'px';\n        screen.style.marginTop = -helper_1.zoomSize(common_1.state.current.height / 2) + 'px';\n    }\n    // set scroll\n    if (resetScroll) {\n        viewer.scrollLeft = flow_1.flowMode ? 0 : (maxSize - viewer.clientWidth) / 2;\n        let suitHight = screen.clientHeight > viewer.clientHeight ? screen.clientHeight : viewer.clientHeight;\n        viewer.scrollTop = flow_1.flowMode ? 0 : (maxSize - suitHight) / 2;\n    }\n}\nexports.updateScreen = updateScreen;\n\n\n//# sourceURL=webpack:///./ui/render/screen.ts?");

/***/ }),

/***/ "./ui/render/slices.ts":
/*!*****************************!*\
  !*** ./ui/render/slices.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.slices = void 0;\nconst common_1 = __webpack_require__(/*! ../common */ \"./ui/common.ts\");\nconst helper_1 = __webpack_require__(/*! ./helper */ \"./ui/render/helper.ts\");\nfunction slices() {\n    if (!common_1.project.slices) {\n        return false;\n    }\n    var sliceListHTML = [];\n    sliceListHTML.push('<ul class=\"asset-list\">');\n    common_1.project.slices.forEach(sliceLayer => {\n        if (sliceLayer.exportable.length > 0) {\n            var asset = JSON.parse(JSON.stringify(sliceLayer.exportable)).pop();\n            sliceListHTML.push('<li id=\"slice-' + sliceLayer.objectID + '\" class=\"slice-layer\" data-objectId=\"' + sliceLayer.objectID + '\">', '<picture><img src=\"' + 'assets/' + asset.path + '\" alt=\"\"></picture>', '<div>', '<h3>' + sliceLayer.name + '</h3>', '<small>' + helper_1.unitSize(sliceLayer.rect.width) + ' × ' + helper_1.unitSize(sliceLayer.rect.height) + '</small>', '</div>', '</li>');\n        }\n    });\n    sliceListHTML.push('</ul>');\n    if (common_1.project.slices.length > 0) {\n        document.querySelector('#slices').innerHTML = sliceListHTML.join('');\n    }\n}\nexports.slices = slices;\n\n\n//# sourceURL=webpack:///./ui/render/slices.ts?");

/***/ }),

/***/ "./ui/render/unit.ts":
/*!***************************!*\
  !*** ./ui/render/unit.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.unit = void 0;\nconst common_1 = __webpack_require__(/*! ../common */ \"./ui/common.ts\");\nconst common_2 = __webpack_require__(/*! ../common */ \"./ui/common.ts\");\nfunction unit() {\n    let unitsData = [\n        {\n            name: common_2.localize('Device switch'),\n            units: [\n                { name: common_2.localize('Web View') + ' - px', unit: 'px', scale: 1 },\n                { name: common_2.localize('iOS Devices') + ' - pt', unit: 'pt', scale: 1 },\n                { name: common_2.localize('Android Devices') + ' - dp/sp', unit: 'dp/sp', scale: 1 },\n            ]\n        },\n        {\n            name: common_2.localize('Convert to pixels'),\n            units: [\n                { name: 'IOS ' + common_2.localize('Points') + ' @1x', unit: 'px', scale: 1 },\n                { name: 'IOS ' + common_2.localize('Retina') + ' @2x', unit: 'px', scale: 2 },\n                { name: 'IOS ' + common_2.localize('Retina HD') + ' @3x', unit: 'px', scale: 3 },\n                { name: 'Android LDPI @0.75x', unit: 'px', scale: .75 },\n                { name: 'Android MDPI @1x', unit: 'px', scale: 1 },\n                { name: 'Android HDPI @1.5x', unit: 'px', scale: 1.5 },\n                { name: 'Android XHDPI @2x', unit: 'px', scale: 2 },\n                { name: 'Android XXHDPI @3x', unit: 'px', scale: 3 },\n                { name: 'Android XXXHDPI @4x', unit: 'px', scale: 4 }\n            ]\n        },\n        {\n            name: common_2.localize('Convert to others'),\n            units: [\n                { name: 'CSS Rem 8px', unit: 'rem', scale: 1 / 8 },\n                { name: 'CSS Rem 10px', unit: 'rem', scale: 1 / 10 },\n                { name: 'CSS Rem 12px', unit: 'rem', scale: 1 / 12 },\n                { name: 'CSS Rem 14px', unit: 'rem', scale: 1 / 14 },\n                { name: 'CSS Rem 16px', unit: 'rem', scale: 1 / 16 },\n                { name: 'Ubuntu Grid', unit: 'gu', scale: 1 / 27 }\n            ]\n        }\n    ];\n    let unitHtml = [];\n    let unitList = [];\n    let unitCurrent = '';\n    let hasCurrent = '';\n    unitsData.forEach(data => {\n        if (data.name)\n            unitList.push('<li class=\"sub-title\">' + common_2.localize(data.name) + '</li>');\n        data.units.forEach(unit => {\n            var checked = '';\n            if (!hasCurrent && unit.unit == common_1.state.unit) {\n                checked = ' checked=\"checked\"';\n                hasCurrent = common_2.localize(unit.name);\n            }\n            unitList.push('<li><label><input type=\"radio\" name=\"resolution\" data-name=\"' + common_2.localize(unit.name) +\n                '\" data-unit=\"' + unit.unit +\n                '\" data-scale=\"' + unit.scale + '\"' + checked +\n                '><span>' + common_2.localize(unit.name) + '</span></label></li>');\n        });\n    });\n    // if (!hasCurrent) {\n    //     unitCurrent = '<li><label><input type=\"radio\" name=\"resolution\" data-name=\"' + localize('Custom') +\n    //         ' (' + state.scale + ', ' + state.unit + ')\" data-unit=\"' + state.unit +\n    //         '\" data-scale=\"' + state.scale +\n    //         '\" checked=\"checked\"><span>' + localize('Custom') + ' (' + state.scale + ', ' + state.unit + ')</span></label></li>';\n    //     hasCurrent = localize('Custom') + ' (' + state.scale + ', ' + state.unit + ')';\n    // }\n    unitHtml.push('<h3>' + common_2.localize('Unit switch') +\n        '</h3>', '<p>' + hasCurrent + '</p>', '<ul>', unitCurrent, unitList.join(''), '</ul>');\n    document.querySelector('#unit').innerHTML = unitHtml.join('');\n}\nexports.unit = unit;\n\n\n//# sourceURL=webpack:///./ui/render/unit.ts?");

/***/ }),

/***/ "./ui/render/zoom.ts":
/*!***************************!*\
  !*** ./ui/render/zoom.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.zoom = void 0;\nconst common_1 = __webpack_require__(/*! ../common */ \"./ui/common.ts\");\nfunction zoom() {\n    var zoomText = common_1.state.zoom * 100 + '%';\n    (common_1.state.zoom <= .25) ? zoomMethods(true, '.zoom-in') : zoomMethods(false, '.zoom-in');\n    (common_1.state.zoom >= 4) ? zoomMethods(true, '.zoom-out') : zoomMethods(false, '.zoom-out');\n    document.querySelector('.zoom-text').innerHTML = zoomText;\n}\nexports.zoom = zoom;\nfunction zoomMethods(Boolean, className) {\n    let obtain = document.querySelector(className);\n    if (Boolean) {\n        obtain.setAttribute('disabled', 'disabled');\n    }\n    else {\n        obtain.removeAttribute('disabled');\n    }\n}\n\n\n//# sourceURL=webpack:///./ui/render/zoom.ts?");

/***/ })

/******/ });console.log('onlineJS:Sun Feb 13 2022 00:53:02 GMT+0800 (中国标准时间)')