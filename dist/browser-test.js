/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Arr": () => (/* reexport safe */ quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Arr),
/* harmony export */   "ArrLike": () => (/* reexport safe */ quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.ArrLike),
/* harmony export */   "Bool": () => (/* reexport safe */ quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Bool),
/* harmony export */   "Browser": () => (/* reexport safe */ _src_browser_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Component": () => (/* reexport safe */ quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Component),
/* harmony export */   "Datetime": () => (/* reexport safe */ quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Datetime),
/* harmony export */   "Debug": () => (/* reexport safe */ quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Debug),
/* harmony export */   "Doc": () => (/* binding */ Doc),
/* harmony export */   "Dom": () => (/* reexport safe */ _src_dom_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Ele": () => (/* binding */ Ele),
/* harmony export */   "Env": () => (/* reexport safe */ quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Env),
/* harmony export */   "Evt": () => (/* binding */ Evt),
/* harmony export */   "Factory": () => (/* reexport safe */ quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Factory),
/* harmony export */   "Func": () => (/* reexport safe */ quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Func),
/* harmony export */   "HistoryState": () => (/* reexport safe */ _src_historyState_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Html": () => (/* reexport safe */ quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Html),
/* harmony export */   "Integer": () => (/* reexport safe */ quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Integer),
/* harmony export */   "Json": () => (/* reexport safe */ quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Json),
/* harmony export */   "Nav": () => (/* reexport safe */ quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Nav),
/* harmony export */   "Nod": () => (/* binding */ Nod),
/* harmony export */   "Num": () => (/* reexport safe */ quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Num),
/* harmony export */   "Obj": () => (/* reexport safe */ quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Obj),
/* harmony export */   "Pojo": () => (/* reexport safe */ quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Pojo),
/* harmony export */   "Request": () => (/* reexport safe */ _src_request_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "Scalar": () => (/* reexport safe */ quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Scalar),
/* harmony export */   "Shortcut": () => (/* reexport safe */ quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut),
/* harmony export */   "Str": () => (/* reexport safe */ quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Str),
/* harmony export */   "Target": () => (/* binding */ Target),
/* harmony export */   "Test": () => (/* reexport safe */ quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Test),
/* harmony export */   "TestSuite": () => (/* reexport safe */ quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.TestSuite),
/* harmony export */   "Tool": () => (/* reexport safe */ quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Tool),
/* harmony export */   "Uri": () => (/* reexport safe */ _src_uri_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "Validate": () => (/* reexport safe */ quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Validate),
/* harmony export */   "Vari": () => (/* reexport safe */ quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Vari),
/* harmony export */   "Win": () => (/* binding */ Win),
/* harmony export */   "Xhr": () => (/* reexport safe */ _src_xhr_js__WEBPACK_IMPORTED_MODULE_6__["default"])
/* harmony export */ });
/* harmony import */ var quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quidphp-node-temp */ "./node_modules/quidphp-node-temp/index.js");
/* harmony import */ var _src_browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/browser.js */ "./src/browser.js");
/* harmony import */ var _src_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/dom.js */ "./src/dom.js");
/* harmony import */ var _src_historyState_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/historyState.js */ "./src/historyState.js");
/* harmony import */ var _src_request_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/request.js */ "./src/request.js");
/* harmony import */ var _src_uri_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/uri.js */ "./src/uri.js");
/* harmony import */ var _src_xhr_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/xhr.js */ "./src/xhr.js");
/* harmony import */ var _src_data_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/data.js */ "./src/data.js");
/* harmony import */ var _src_doc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/doc.js */ "./src/doc.js");
/* harmony import */ var _src_ele_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/ele.js */ "./src/ele.js");
/* harmony import */ var _src_evt_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/evt.js */ "./src/evt.js");
/* harmony import */ var _src_handler_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/handler.js */ "./src/handler.js");
/* harmony import */ var _src_listener_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/listener.js */ "./src/listener.js");
/* harmony import */ var _src_nod_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/nod.js */ "./src/nod.js");
/* harmony import */ var _src_selector_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/selector.js */ "./src/selector.js");
/* harmony import */ var _src_target_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/target.js */ "./src/target.js");
/* harmony import */ var _src_win_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/win.js */ "./src/win.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// import quidphp-node
 // simple import






 // type import










 // build

var Evt = (0,quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Factory)(quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Tool.Type, _src_evt_js__WEBPACK_IMPORTED_MODULE_10__["default"]);
var Win = (0,quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Factory)(_src_target_js__WEBPACK_IMPORTED_MODULE_15__["default"], _src_data_js__WEBPACK_IMPORTED_MODULE_7__["default"], _src_handler_js__WEBPACK_IMPORTED_MODULE_11__["default"], _src_listener_js__WEBPACK_IMPORTED_MODULE_12__["default"], _src_nod_js__WEBPACK_IMPORTED_MODULE_13__.EleWinTarget, _src_win_js__WEBPACK_IMPORTED_MODULE_16__["default"]);
var Doc = (0,quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Factory)(_src_target_js__WEBPACK_IMPORTED_MODULE_15__["default"], _src_data_js__WEBPACK_IMPORTED_MODULE_7__["default"], _src_handler_js__WEBPACK_IMPORTED_MODULE_11__["default"], _src_listener_js__WEBPACK_IMPORTED_MODULE_12__["default"], _src_selector_js__WEBPACK_IMPORTED_MODULE_14__["default"], _src_nod_js__WEBPACK_IMPORTED_MODULE_13__.NodTarget, _src_nod_js__WEBPACK_IMPORTED_MODULE_13__.EleDocTarget, _src_doc_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
var Ele = (0,quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Factory)(_src_target_js__WEBPACK_IMPORTED_MODULE_15__["default"], _src_data_js__WEBPACK_IMPORTED_MODULE_7__["default"], _src_handler_js__WEBPACK_IMPORTED_MODULE_11__["default"], _src_listener_js__WEBPACK_IMPORTED_MODULE_12__["default"], _src_selector_js__WEBPACK_IMPORTED_MODULE_14__["default"], _src_nod_js__WEBPACK_IMPORTED_MODULE_13__.NodTarget, _src_nod_js__WEBPACK_IMPORTED_MODULE_13__.EleWinTarget, _src_nod_js__WEBPACK_IMPORTED_MODULE_13__.EleDocTarget, _src_ele_js__WEBPACK_IMPORTED_MODULE_9__["default"], quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Tool.ArrLoop);
var Nod = (0,quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Factory)(_src_target_js__WEBPACK_IMPORTED_MODULE_15__["default"], _src_data_js__WEBPACK_IMPORTED_MODULE_7__["default"], _src_handler_js__WEBPACK_IMPORTED_MODULE_11__["default"], _src_listener_js__WEBPACK_IMPORTED_MODULE_12__["default"], _src_selector_js__WEBPACK_IMPORTED_MODULE_14__["default"], _src_nod_js__WEBPACK_IMPORTED_MODULE_13__.NodTarget);
var Target = (0,quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Factory)(_src_target_js__WEBPACK_IMPORTED_MODULE_15__["default"], _src_data_js__WEBPACK_IMPORTED_MODULE_7__["default"], _src_handler_js__WEBPACK_IMPORTED_MODULE_11__["default"], _src_listener_js__WEBPACK_IMPORTED_MODULE_12__["default"]); // shortcut

var NewShortcut = {};
NewShortcut.getAttr = Ele.getAttr.bind(Ele);
NewShortcut.setAttr = Ele.setAttr.bind(Ele);
NewShortcut.toggleAttr = Ele.toggleAttr.bind(Ele);
NewShortcut.setCss = Ele.setCss.bind(Ele);
NewShortcut.toggleClass = Ele.toggleClass.bind(Ele);
NewShortcut.getHtml = Ele.getHtml.bind(Ele);
NewShortcut.setHtml = Ele.setHtml.bind(Ele);
NewShortcut.qs = Nod.scopedQuery.bind(Nod);
NewShortcut.qsa = Nod.scopedQueryAll.bind(Nod);
NewShortcut.getProp = Target.getProp.bind(Target);
NewShortcut.setProp = Target.setProp.bind(Target);
NewShortcut.getData = Target.getData.bind(Target);
NewShortcut.setData = Target.setData.bind(Target);
NewShortcut.setHdlr = Target.setHandler.bind(Target);
NewShortcut.setHdlrs = Target.setsHandler.bind(Target);
NewShortcut.allHdlr = Target.allHandler.bind(Target);
NewShortcut.trigHdlr = Target.triggerHandler.bind(Target);
NewShortcut.trigHdlrs = Target.triggersHandler.bind(Target);
NewShortcut.ael = Target.addListener.bind(Target);
NewShortcut.aelDelegate = Target.addDelegatedListener.bind(Target);
NewShortcut.aelPassive = Target.addPassiveListener.bind(Target);
NewShortcut.aelOnce = Target.addListenerOnce.bind(Target);
NewShortcut.rel = Target.removeListener.bind(Target);
NewShortcut.trigEvt = Target.triggerNoBubble.bind(Target);
NewShortcut.trigBubble = Target.triggerBubble.bind(Target);
NewShortcut.trigSetup = Target.triggerSetup.bind(Target);
NewShortcut.trigTeardown = Target.triggerTeardown.bind(Target);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut = _objectSpread(_objectSpread({}, quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut), NewShortcut); // export



/***/ }),

/***/ "./src/browser.js":
/*!************************!*\
  !*** ./src/browser.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// browser
// script with a some functions related to browsers detection
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // isOldIe
  // retourne vrai si le navigateur est une vieille version de IE (IE 10 ou moins)
  isOldIe: function isOldIe() {
    return Str["in"]('MSIE ', window.navigator.userAgent);
  },
  // isIe11
  // retourne vrai si le navigateur est ie11
  isIe11: function isIe11() {
    return Str["in"]('Trident/', window.navigator.userAgent);
  },
  // isIe
  // retourne vrai si le navigateur est internet explorer
  isIe: function isIe() {
    return this.isOldIe() || this.isIe11();
  },
  // isUnsupported
  // retourne vrai si le navigateur est insupporté (donc vieux ie11)
  // si onlyEdge est true alors IE11 est aussi non supporté
  isUnsupported: function isUnsupported(onlyEdge) {
    return onlyEdge === true && this.isIe11() ? true : this.isOldIe();
  },
  // allowsCookie
  // retourne vrai si les cookies sont activés
  allowsCookie: function allowsCookie() {
    return navigator.cookieEnabled;
  }
});

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// dataTarget
// script for storing datas within targets
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // hasData
  // retourne vrai si la node a les données
  hasData: function hasData(node, value) {
    return this.getData(node, value) !== undefined;
  },
  // getDataKey
  // retourne la clé de date
  getDataKey: function getDataKey() {
    return '_quid_';
  },
  // allData
  // retourne toutes les données liés à la node
  // peut créer l'objet si inexistant
  allData: function allData(node, create) {
    var r = undefined;
    this.typecheck(node);
    var dataKey = this.getDataKey();
    var isPojo = Pojo.is(node[dataKey]);

    if (!isPojo && create === true) {
      isPojo = true;
      node[dataKey] = {};
    }

    if (isPojo === true) r = node[dataKey];
    return r;
  },
  // getData
  // permet de retourner une data d'une node
  // envoie une exception si plus d'une node
  getData: function getData(node, key) {
    Str.typecheck(key);
    var data = this.allData(node);
    return data != null ? Pojo.get(key, data) : undefined;
  },
  // flashData
  // retourne la data et efface l'entrée de la node
  flashData: function flashData(node, key) {
    var r = this.getData(node, key);
    this.removeData(node, key);
    return r;
  },
  // setData
  // change de la data sur une ou plusieurs nodes
  // ceci n'affecte pas le dom, seulement stocké dans l'objet
  // si undefined efface la data
  setData: function setData(nodes, key, value) {
    nodes = this.toArray(nodes);
    Str.typecheck(key, true);
    var $inst = this;
    Arr.each(nodes, function (ele) {
      var data = $inst.allData(ele, true);
      if (value === undefined) Pojo.unsetRef(key, data);else Pojo.setRef(key, value, data);
    });
  },
  // removeData
  // enlève une donnée de la ou les nodes
  removeData: function removeData(nodes, key) {
    return this.setData(nodes, key, undefined);
  },
  // getOrSetData
  // crée une data dans une node si la valeur est présenement inexistante
  // sinon retourne la data de la node
  getOrSetData: function getOrSetData(node, key, value) {
    var r = undefined;
    var current = this.getData(node, key);

    if (current == null && value != null) {
      this.setData(node, key, value);
      r = value;
    } else r = current;

    return r;
  }
});

/***/ }),

/***/ "./src/doc.js":
/*!********************!*\
  !*** ./src/doc.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// doc
// object for document and document fragment targets
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // is
  // retourne vrai si la valeur est un document, un fragment de document ou un template
  is: function is(value) {
    return this.isCurrent(value) || this.isFragment(value) || this.isTemplate(value);
  },
  // is
  // retourne vrai si la valeur est le document courant
  isCurrent: function isCurrent(value) {
    return value === document;
  },
  // isFragment
  // retourne vrai si la valeur est un fragment de document
  isFragment: function isFragment(value) {
    return value instanceof DocumentFragment;
  },
  // getDimension
  // retourne la dimension du document, c'est à dire la dimension des premiers enfants du document
  getDimension: function getDimension(value) {
    this.typecheck(value);
    var r = {
      width: 0,
      height: 0
    };

    if (this.isCurrent(value)) {
      r.width = Num.round(document.documentElement.scrollWidth);
      r.height = Num.round(document.documentElement.scrollHeight);
    } else {
      var children = this.children(value);
      Arr.each(children, function (ele) {
        var dimension = Ele.getDimension(ele);
        r.width += dimension.width;
        r.height += dimension.height;
      });
    }

    return r;
  }
});

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// dom
// script with functions related to html and dom
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // selectorInput
  // retourne un selector commun à utiliser pour les inputs
  selectorInput: function selectorInput(all) {
    var r = 'input,select,textarea,button';
    r += all !== true ? "[type='submit']" : '';
    return r;
  },
  // htmlStr
  // prend un maximum d'input et retourne une string html
  htmlStr: function htmlStr(value) {
    var r = '';
    if (Str.is(value)) r = value;else if (Scalar.is(value)) r = Str.cast(value);else if (Doc.is(value)) r = Doc.getHtml(value);else if (Ele.is(value)) r = Ele.getOuterHtml(value);else if (Ele.are(value)) r = Ele.getOuterHtml(value);
    return r;
  },
  // htmlNodes
  // prend un maximum d'input et retourne un tableau de nodes
  // possible de cloner
  htmlNodes: function htmlNodes(value, clone) {
    var r = [];
    if (Str.is(value)) r = this.parse(value);else if (Doc.is(value)) {
      value = Doc.realNode(value);
      r.push(clone === true ? Doc.clone(value) : value);
    } else if (Ele.are(value)) r = clone === true ? Ele.clones(value) : value;else if (Ele.is(value)) r.push(clone === true ? Ele.clone(value) : value);
    return r;
  },
  // safeHtml
  // fait quelques modifications à une string html pour éviter des injections
  safeHtml: function safeHtml(html) {
    Str.typecheck(html);
    html = html.replace(/<\!DOCTYPE[^>]*>/i, '');
    html = html.replace(/<(html|head|body)([\s\>])/gi, '<div data-tag="$1"$2');
    html = html.replace(/<\/(html|head|body)\>/gi, '</div>');
    html = Str.trim(html);
    return html;
  },
  // parse
  // parse une string html, retourne un tableau avec les nodes
  // utilise l'élément template de document
  // retourne un tableau
  parse: function parse(html) {
    var r = [];
    html = this.safeHtml(html);
    var template = document.createElement('template');
    template.innerHTML = html;
    var fragment = template.content;
    r = Doc.children(fragment, null, true);
    return r;
  },
  // parseOne
  // comme parse mais retourne seulement la première node du tableau
  parseOne: function parseOne(html) {
    return Arr.valueFirst(this.parse(html));
  },
  // querySelector
  // comme parse one, mais cherche pour en enfant via query selector
  // retourne le html de cette node
  querySelector: function querySelector(value, html) {
    var r = undefined;
    Str.typecheck(value);
    var nodes = this.parse(html);

    if (Arr.isNotEmpty(nodes)) {
      var finds = Ele.mergedQsa(nodes, value);

      if (Arr.isNotEmpty(finds)) {
        var find = Arr.valueFirst(finds);
        r = Ele.getHtml(find);
      }
    }

    return r;
  },
  // doc
  // prend une string html
  // retourne un objet avec les différents éléments d'un document décortiqués
  doc: function doc(html) {
    var r = {
      doc: this.parse(html),
      docEle: [],
      html: null,
      htmlAttr: null,
      head: null,
      headAttr: null,
      title: '?',
      titleHtml: '?',
      meta: null,
      body: null,
      bodyAttr: null
    };
    Arr.accumulate(r.docEle, r.doc, function (ele) {
      return Ele.is(ele) ? ele : null;
    });
    r.html = Ele.find(r.docEle, "[data-tag='html']") || Arr.valueFirst(r.docEle);

    if (r.html != null) {
      Ele.removeAttr(r.html, 'data-tag');
      r.htmlAttr = Ele.attr(r.html);
      r.head = Ele.scopedQuery(r.html, "[data-tag='head']");
      r.body = Ele.scopedQuery(r.html, "[data-tag='body']");

      if (r.head != null) {
        var title = Ele.scopedQuery(r.head, "title");
        var titleReplace = {
          '<': '&lt;',
          '>': '&gt;',
          ' & ': ' &amp; '
        };
        Ele.removeAttr(r.head, 'data-tag');
        r.headAttr = Ele.attr(r.head);
        r.title = title != null ? Ele.getText(title) : '?';
        r.titleHtml = Str.replace(titleReplace, r.title);
        r.meta = Ele.scopedQueryAll(r.head, "meta");
      }
    }

    if (r.body != null) {
      Ele.removeAttr(r.body, 'data-tag');
      r.bodyAttr = Ele.attr(r.body);
    } else {
      var _html = Ele.getOuterHtml(r.doc);

      var newBody = Html.div(_html, {
        dataTag: 'body'
      });
      r.body = this.parseOne(newBody);
    }

    return r;
  }
});

/***/ }),

/***/ "./src/ele.js":
/*!********************!*\
  !*** ./src/ele.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// eleTarget
// script with many functions related to element nodes
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // is
  // retourne vrai si la valeur est une node
  is: function is(value) {
    return value instanceof HTMLElement;
  },
  // isVisible
  // retourne vrai si la node est visible
  isVisible: function isVisible(value) {
    return this.is(value) ? !!(value.offsetWidth || value.offsetHeight) : false;
  },
  // isHidden
  // retourne vrai si la node est invisible
  isHidden: function isHidden(value) {
    return this.is(value) ? !this.isVisible(value) : false;
  },
  // isTag
  // retourne vrai si la tag est celle donnée en argument
  isTag: function isTag(node, value) {
    return this.is(node) && this.tag(node) === value;
  },
  // isFocused
  // retourne vrai si la node a présentement le focus
  isFocused: function isFocused(node) {
    return node === document.activeElement;
  },
  // isFocusable
  // retourne vrai si la node peut recevoir le focus
  isFocusable: function isFocusable(node) {
    var r = false;

    if (this.is(node)) {
      var tag = this.tag(node);
      var tags = ['input', 'textarea', 'select', 'a', 'button'];
      var dimension = this.getDimension(node);

      if (this.match(node, '[tabindex]') || Arr["in"](tag, tags)) {
        if (dimension.width > 0 && dimension.height > 0) r = true;
      }
    }

    return r;
  },
  // isScrollable
  // retourne vrai si la node est scrollable dans un axis ou n'importe quel axis
  // retourne toujours faux si overflow est visible
  isScrollable: function isScrollable(node, axis) {
    var r = false;

    if (this.is(node)) {
      var overflow = this.getCss(node, 'overflow');

      if (overflow !== 'visible') {
        var scroll = this.getScroll(node);
        if (Arr["in"](axis, ['x', 'horizontal'])) r = scroll.scrollableX;else if (Arr["in"](axis, ['y', 'vertical'])) r = scroll.scrollableY;else r = scroll.scrollableX === true ? scroll.scrollableX : scroll.scrollableY;
      }
    }

    return r;
  },
  // hasAttr
  // retourne vrai si la node a l'attribut
  hasAttr: function hasAttr(node, value) {
    return this.is(node) && Str.is(value) ? node.hasAttribute(value) : false;
  },
  // hasClass
  // retourne vrai si la node a la classe
  hasClass: function hasClass(node, value) {
    return this.is(node) && Str.is(value) ? node.classList.contains(value) : false;
  },
  // tag
  // retourne le nom de la tag en lowerCase
  tag: function tag(node) {
    var r = null;
    var tag = this.getProp(node, 'tagName');
    if (Str.is(tag)) r = tag.toLowerCase();
    return r;
  },
  // css
  // retourne un objet contenant toutes les règles css
  css: function css(node, start, pseudo) {
    var r = {};
    this.typecheck(node);
    var style = window.getComputedStyle(node, pseudo);

    for (var i = 0; i < style.length; i++) {
      var value = style.item(i);
      if (start == null || Str.isStart(start, value)) r[value] = style.getPropertyValue(value);
    }

    return r;
  },
  // getCss
  // permet de retourner une valeur css
  getCss: function getCss(node, key, cast, pseudo) {
    var r = undefined;
    this.typecheck(node);
    Str.typecheck(key); // fix pour ie11 qui retourne mauvais computed style pour width/height (box-model)

    if (Browser.isIe11() && Arr["in"](key, ['width', 'height'])) {
      var dimension = this.getDimension(node);
      r = Num.ceil(dimension[key]) + "px";
    } else {
      var style = window.getComputedStyle(node, pseudo);
      r = style.getPropertyValue(key);
    }

    r = Scalar.cast(r, cast);
    return r;
  },
  // attr
  // retourne un objet contenant tous les attributs d'une balise
  attr: function attr(node, start) {
    var r = {};
    this.typecheck(node);
    var attr = node.attributes;
    ArrLike.each(attr, function (value) {
      var name = value.name;
      if (start == null || Str.isStart(start, name)) r[name] = value.value;
    });
    return r;
  },
  // attrStr
  // retourne les attributs d'une node sous forme de string
  attrStr: function attrStr(node, start) {
    var r = null;
    var attr = this.attr(node, start);
    if (attr != null) r = Obj.str(attr, '=', ' ', true);
    return r;
  },
  // getAttr
  // retourne un attribut
  // possible de retourner la valeur json décodé, ou forcer un int/bool
  getAttr: function getAttr(node, key, cast) {
    var r = undefined;
    this.typecheck(node);

    if (this.hasAttr(node, key)) {
      r = node.getAttribute(key);
      r = Scalar.cast(r, cast);
    }

    return r;
  },
  // dataAttr
  // retourne un objet contenant tous les data-attributs d'une balise
  dataAttr: function dataAttr(node) {
    return this.attr(node, 'data-');
  },
  // getValue
  // retourne la valeur pour une node, surtout pour les formulaires
  // la valeur retourné peut être trim
  getValue: function getValue(node, trim, cast) {
    var r = undefined;
    this.typecheck(node);
    r = node.value;
    r = Str.cast(r);
    if (trim === true) r = Str.trim(r);
    if (cast != null) r = Scalar.cast(r, cast);
    return r;
  },
  // getDimension
  // retourne la dimension de la node
  // il est possible de retourner la dimension si on change de façon temporaire le display
  getDimension: function getDimension(node, display) {
    this.typecheck(node);
    display = display === true ? 'block' : display;
    var displayToggle = Str.isNotEmpty(display);
    var currentDisplay, currentWidth, currentHeight;

    if (displayToggle) {
      currentDisplay = node.style.display;
      currentWidth = node.style.width;
      currentHeight = node.style.height;
      node.style.display = display;
      node.style.width = 'auto';
      node.style.height = 'auto';
    }

    var rect = this.getBoundingRect(node);

    if (displayToggle) {
      node.style.display = currentDisplay;
      node.style.width = currentWidth;
      node.style.height = currentHeight;
    }

    return {
      width: Num.ceil(rect.width),
      height: Num.ceil(rect.height)
    };
  },
  // getBoundingRect
  // retourne l'objet bounding rect pour la node
  getBoundingRect: function getBoundingRect(node) {
    this.typecheck(node);
    return node.getBoundingClientRect();
  },
  // getScroll
  // retourne un object avec les données pour le scroll
  // retourne aussi les dimensions externes et internes, ainsi qu'un bool indiquant si une direction est scrollable
  getScroll: function getScroll(node) {
    var r = null;
    this.typecheck(node);
    var tag = this.tag(node); // scrollTop n'est pas sur la tag HTML dans IE

    if (Arr["in"](tag, ['html', 'body'])) r = Win.getScroll();else {
      var rect = this.getBoundingRect(node);
      r = {
        top: Num.ceil(node.scrollTop),
        left: Num.ceil(node.scrollLeft),
        width: Num.ceil(node.scrollWidth),
        height: Num.ceil(node.scrollHeight),
        innerWidth: Num.ceil(rect.width),
        innerHeight: Num.ceil(rect.height),
        scrollableX: false,
        scrollableY: false
      };

      if (r.innerWidth > 0 && r.innerHeight > 0) {
        if (r.width > r.innerWidth) r.scrollableX = true;
        if (r.height > r.innerHeight) r.scrollableY = true;
      }
    }
    return r;
  },
  // getOffset
  // retourne tous les offsets de la node (par rapport au parent, au document et à la window)
  getOffset: function getOffset(node) {
    return {
      parent: this.getOffsetParent(node),
      doc: this.getOffsetDoc(node),
      win: this.getOffsetWin(node)
    };
  },
  // getOffsetParent
  // retourne un objet avec les données pour le offset de la node (par rapport à son parent scrollable)
  getOffsetParent: function getOffsetParent(node) {
    this.typecheck(node);
    return {
      top: Num.ceil(node.offsetTop),
      left: Num.ceil(node.offsetLeft)
    };
  },
  // getOffsetDoc
  // retourne un objet avec les données pour le offset de la node (par rapport au document)
  getOffsetDoc: function getOffsetDoc(node) {
    var rect = this.getBoundingRect(node);
    var scroll = Win.getScroll();
    return {
      top: Num.ceil(rect.top + scroll.top),
      left: Num.ceil(rect.left + scroll.left)
    };
  },
  // getOffsetWin
  // retourne un objet avec les données pour le offset de la node (par rapport à la window)
  getOffsetWin: function getOffsetWin(node) {
    var rect = this.getBoundingRect(node);
    return {
      top: Num.ceil(rect.top),
      left: Num.ceil(rect.left)
    };
  },
  // setAttr
  // change un attribut sur une ou plusieurs nodes
  // si undefined, efface l'attribut
  setAttr: function setAttr(nodes, key, value) {
    nodes = this.toArray(nodes);
    Str.typecheck(key, true);
    if (Obj.is(value)) value = Json.encode(value);
    if (Bool.is(value)) value = Bool.toInt(value);
    Arr.each(nodes, function (ele) {
      if (value === undefined) ele.removeAttribute(key);else ele.setAttribute(key, value);
    });
  },
  // removeAttr
  // enlève un attribut sur une ou plusieurs nodes
  removeAttr: function removeAttr(nodes, key) {
    return this.setAttr(nodes, key, undefined);
  },
  // toggleAttr
  // permet d'ajouter ou enlever un attribut sur une ou plusieurs nodes
  // l'atttribut est toujours présent, si true ou inexistant valeur est 1, sinon valeur est 0
  toggleAttr: function toggleAttr(nodes, key, bool) {
    nodes = this.toArray(nodes);
    Str.typecheck(key, true);
    var $inst = this;
    var defaultValue = Bool.is(bool) ? Bool.toInt(bool) : null;
    Arr.each(nodes, function (ele) {
      var value = defaultValue;

      if (value == null) {
        value = $inst.getAttr(ele, key, 'int');
        value = value === 1 ? false : true;
      }

      $inst.setAttr(ele, key, value);
    });
  },
  // setsAttr
  // remplace tous les attributs d'une ou plusieurs nodes, il faut fournir un plain object
  // possible de retirer les attributs existants
  setsAttr: function setsAttr(nodes, value) {
    nodes = this.toArray(nodes);
    Pojo.typecheck(value);
    var $inst = this;
    Arr.each(nodes, function (ele) {
      Pojo.each(value, function (v, k) {
        $inst.setAttr(ele, k, v);
      });
    });
  },
  // emptyAttr
  // permet de retirer tous les attributs à une ou plusieurs nodes
  emptyAttr: function emptyAttr(nodes) {
    nodes = this.toArray(nodes);
    var $inst = this;
    Arr.each(nodes, function (ele) {
      ArrLike.each(ele.attributes, function (value) {
        if (value != null) $inst.removeAttr(ele, value.name);
      });
    });
  },
  // addId
  // ajoute un id aux éléments contenus dans l'objet qui n'en ont pas
  addId: function addId(nodes, value) {
    nodes = this.toArray(nodes);
    Str.typecheck(value);
    var $inst = this;
    Arr.each(nodes, function (ele) {
      if (!$inst.match(ele, "[id]")) {
        var newId = value + Integer.unique();
        $inst.setProp(ele, 'id', newId);
      }
    });
  },
  // setCss
  // permet de changer une valeur inline du css
  setCss: function setCss(node, key, value) {
    this.typecheck(node);
    Str.typecheck(key);
    key = Str.toCamelCase('-', key);
    if (value == null) value = '';
    node.style[key] = value;
  },
  // setValue
  // permet de changer la valeur d'une node
  // si la valeur est un objet, encode en json
  setValue: function setValue(node, value) {
    this.typecheck(node);
    value = Str.cast(value, true);
    node.value = value;
  },
  // toggleClass
  // permet d'ajouter ou enlever une classe sur une ou plusieurs nodes
  toggleClass: function toggleClass(nodes, value, bool) {
    nodes = this.toArray(nodes);
    Str.typecheck(value, true);
    Arr.each(nodes, function (ele) {
      ele.classList.toggle(value, bool);
    });
  },
  // setDimension
  // permet de changer la largeur et hauteur de la node
  setDimension: function setDimension(node, width, height) {
    this.typecheck(node);

    if (Scalar.is(width)) {
      width = width === true ? this.getDimension(node, width).width : width;
      width = width === false ? undefined : width;
      width = Num.is(width) ? width + "px" : width;
      this.setCss(node, 'width', width);
    }

    if (Scalar.is(height)) {
      height = height === true ? this.getDimension(node, height).height : height;
      height = height === false ? undefined : height;
      height = Num.is(height) ? height + "px" : height;
      this.setCss(node, 'height', height);
    }
  },
  // setScroll
  // permet de changer les valeurs du scroll
  setScroll: function setScroll(node, top, left) {
    this.typecheck(node);
    if (Num.is(top)) node.scrollTop = top > 0 ? top : 0;
    if (Num.is(left)) node.scrollLeft = left > 0 ? left : 0;
  },
  // focus
  // permet de mettre le focus sur une node
  // possible de tenter de prevent le scroll
  focus: function focus(node, preventScroll) {
    this.typecheck(node);

    if (preventScroll === true) {
      var scroll = Win.getScroll();
      node.focus();
      Func.timeout(0, function () {
        Win.setScroll(scroll.top, scroll.left);
      });
    } else node.focus();
  },
  // getUri
  // retourne l'uri à partir d'une node
  getUri: function getUri(node) {
    var r = undefined;
    var tag = this.tag(node);
    if (tag === 'form') r = this.getAttr(node, "action");else r = this.getAttr(node, "href") || this.getAttr(node, 'data-href');
    return r;
  },
  // serialize
  // permet de serializer une ou plusieurs nodes
  // il faut spécifier la prop pour clé et celle pour value
  serialize: function serialize(nodes, keyProp, valueProp) {
    var r = '';
    nodes = this.toArray(nodes);
    var query = Uri.makeQuery();
    keyProp = Str.is(keyProp) ? keyProp : 'name';
    valueProp = Str.is(valueProp) ? valueProp : 'value';
    var $inst = this;
    Arr.each(nodes, function (ele) {
      var key = $inst.getProp(ele, keyProp);
      var value = $inst.getProp(ele, valueProp);
      query.append(key, value);
    });
    r = query.toString();
    return r;
  },
  // prepend
  // ajout une ou plusieurs nodes comme premiers enfant de la node
  prepend: function prepend(node, value) {
    this.typecheck(node);
    value = Dom.htmlNodes(value);
    node.prepend.apply(node, value);
  },
  // append
  // ajoute du contenu html comme dernier enfant de la node
  append: function append(node, value) {
    this.typecheck(node);
    value = Dom.htmlNodes(value);
    node.append.apply(node, value);
  },
  // insertBefore
  // permet d'insérer une ou plusieurs node avant une autre
  insertBefore: function insertBefore(node, value) {
    this.typecheck(node);
    value = Dom.htmlNodes(value);
    return Arr.accumulate([], value, function (ele) {
      return node.insertAdjacentElement('beforebegin', ele);
    });
  },
  // insertAfter
  // permet d'insérer une ou plusieurs node après une autre
  insertAfter: function insertAfter(node, value) {
    this.typecheck(node);
    value = Dom.htmlNodes(value);
    return Arr.accumulate([], value, function (ele) {
      return node.insertAdjacentElement('afterend', ele);
    });
  },
  // wrapAll
  // permet d'enrobber un groupe de node dans une une nouvelle balise html
  wrapAll: function wrapAll(nodes, value) {
    var r = null;
    nodes = this.toArray(nodes, true);
    value = Dom.htmlNodes(value);

    if (Arr.isNotEmpty(value)) {
      r = Arr.valueFirst(value);
      var firstNode = Arr.valueFirst(nodes);
      this.insertBefore(firstNode, value);
      this.append(r, nodes);
    }

    return r;
  }
});

/***/ }),

/***/ "./src/evt.js":
/*!********************!*\
  !*** ./src/evt.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// event
// script containing event management functions
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // specialKeyCode
  // code de clavier spécial
  specialKeyCode: [9, 10, 13, 16, 17, 18, 19, 20, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 91, 92, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 144, 145],
  // support
  // retourne un objet indiquant si le browser support passive et once
  support: function () {
    var support = {
      passive: false,
      once: false
    };

    try {
      var options = {
        get passive() {
          support.passive = true;
          return false;
        },

        get once() {
          support.once = true;
          return false;
        }

      };
      window.addEventListener("test-support", null, options);
      window.removeEventListener("test-support", null, options);
    } catch (err) {
      support.passive = false;
      support.once = false;
    }

    return support;
  }(),
  // is
  // retourne vrai si la valeur est un événement
  is: function is(value) {
    return value instanceof Event;
  },
  // isSpecialKeyCode
  // retourne vrai si l'event a un keyCode considéré comme spécial (non printable)
  isSpecialKeyCode: function isSpecialKeyCode(event) {
    var r = false;
    this.typecheck(event);
    if (Integer.is(event.keyCode) && Arr["in"](event.keyCode, this.specialKeyCode)) r = true;
    return r;
  },
  // preventStop
  // permet de faire un prevent default et stop propagation à un événement
  preventStop: function preventStop(event, immediate) {
    this.typecheck(event);
    event.preventDefault();
    if (immediate === true) event.stopImmediatePropagation();else event.stopPropagation();
    return false;
  },
  // nameFromType
  // retourne event ou custom event selon le type
  // un nom de type avec un . ou : est custom
  nameFromType: function nameFromType(type) {
    Str.typecheck(type, true);
    var r = 'event';
    if (Str["in"]('.', type) || Str["in"](':', type)) r = 'customEvent';
    return r;
  },
  // createFromType
  // crée l'objet event à partir d'un type
  createFromType: function createFromType(type, option) {
    var r = null;
    var name = this.nameFromType(type);
    if (name === 'customEvent') r = new CustomEvent(type, option);else if (name === 'event') r = new Event(type, option);
    return r;
  },
  // getTriggerTarget
  // retourne la trigger target, en lien avec les bindings delegate
  // créés la propirété triggerTarget sur l'objet event
  getTriggerTarget: function getTriggerTarget(event) {
    var r = null;
    this.typecheck(event);

    if (event.target) {
      if (event.triggerTarget != null) r = event.triggerTarget;else r = event.target;
    }

    return r;
  }
});

/***/ }),

/***/ "./src/handler.js":
/*!************************!*\
  !*** ./src/handler.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// handler
// script for handler management (functions stored in targets)
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // isTriggerHandlerEqual
  // retourne vrai si la handler de chaque node retourne la valeur donné en argument
  isTriggerHandlerEqual: function isTriggerHandlerEqual(nodes, type, equal) {
    nodes = this.toArray(nodes);
    var args = Arr.merge([type], ArrLike.sliceStart(3, arguments));
    var $inst = this;
    return Arr.every(nodes, function (ele) {
      var funcArgs = Arr.merge([ele], args);
      var result = $inst.triggerHandler.apply($inst, funcArgs);
      return result === equal;
    });
  },
  // allHandler
  // retourne de l'objet avec toutes les handler lié à la node
  // possible de créer l'objet si non existant
  // envoie une erreur si plusieurs nodes
  allHandler: function allHandler(node, create) {
    this.typecheck(node);
    return this.getOrSetData(node, '_handler_', create === true ? {} : undefined);
  },
  // getHandler
  // méthode qui retourne un handler emmagasiné dans une node
  // envoie une erreur si plusieurs nodes
  getHandler: function getHandler(node, type) {
    Str.typecheck(type);
    var handlers = this.allHandler(node);
    return handlers != null ? Pojo.get(type, handlers) : undefined;
  },
  // setHandler
  // permet d'emmagasiné une handler dans chaque node fournit en argument
  setHandler: function setHandler(nodes, type, handler) {
    Str.typecheck(type, true);
    Func.typecheck(handler);
    nodes = this.toArray(nodes);
    var $inst = this;
    Arr.each(nodes, function (ele) {
      var all = $inst.allHandler(ele, true);
      Pojo.setRef(type, handler, all);
    });
  },
  // setsHandler
  // permet d'ajouter plusieurs handlers à partir d'un objet
  setsHandler: function setsHandler(nodes, typeStart, obj) {
    Str.typecheck(typeStart, true);
    Pojo.typecheck(obj);
    var $inst = this;
    Pojo.each(obj, function (value, key) {
      var type = typeStart + key;
      $inst.setHandler(nodes, type, value);
    });
  },
  // removeHandler
  // permet de retirer un handler emmagasiné dans une ou plusiuers node
  removeHandler: function removeHandler(nodes, type) {
    Str.typecheck(type, true);
    nodes = this.toArray(nodes);
    var $inst = this;
    Arr.each(nodes, function (ele) {
      var all = $inst.allHandler(ele, true);
      Pojo.unsetRef(type, all);
    });
  },
  // triggerHandler
  // permet de lancer le handler sur la première node donnée en argument
  // retourne le résultat de la méthode ou undefined
  triggerHandler: function triggerHandler(node, type) {
    var r = undefined;
    this.typecheck(node);
    Str.typecheck(type, true);
    var handler = this.getHandler(node, type);

    if (Func.is(handler)) {
      var args = ArrLike.sliceStart(2, arguments);
      r = handler.apply(node, args);
    }

    return r;
  },
  // triggersHandler
  // permet de lancer un handler sur plusieurs nodes
  // retorne un tableau avec tous les résultats
  triggersHandler: function triggersHandler(nodes, type) {
    nodes = this.toArray(nodes);
    var $inst = this;
    var args = ArrLike.sliceStart(2, arguments);
    return Arr.accumulate([], nodes, function (ele) {
      return $inst.triggerHandler.apply($inst, Arr.merge([ele, type], args));
    });
  }
});

/***/ }),

/***/ "./src/historyState.js":
/*!*****************************!*\
  !*** ./src/historyState.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// historyState
// script with functions related to the history states
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // is
  // retourne vrai si la valeur est un objet compatible pour un état d'historique
  is: function is(state) {
    var r = false;
    if (Pojo.is(state) && Str.is(state.url) && Num.is(state.timestamp)) r = true;
    return r;
  },
  // isChangeValid
  // retourne vrai si le changement de state est valide
  isChangeValid: function isChangeValid(state, previous, differentPathQuery) {
    var r = false;

    if (this.is(state) && this.is(previous)) {
      var isInternal = Uri.isInternal(state.url, previous.url);
      var hasExtension = Uri.hasExtension(state.url);
      var isHashChange = Uri.isHashChange(state.url, previous.url);
      var isSameWithHash = Uri.isSameWithHash(state.url, previous.url);

      if (isInternal === true && hasExtension === false && isHashChange === false && isSameWithHash === false) {
        if (!differentPathQuery || Uri.isSamePathQuery(state.url, previous.url) === false) r = true;
      }
    }

    return r;
  },
  // make
  // retourne un objet état d'historique (avec url absolute, title et timestamp)
  make: function make(value, title, noEmptyHash) {
    Str.typecheck(value);
    var uri = Uri.absolute(value, true);
    var valueEndsHash = Str.isEnd('#', value);
    var uriEndsHash = Str.isEnd('#', uri);
    if (noEmptyHash === true && uriEndsHash === true) uri = uri.slice(0, -1);else if (noEmptyHash !== true && valueEndsHash === true && uriEndsHash === false) uri += "#";
    return {
      url: uri,
      title: title || null,
      timestamp: Datetime.now()
    };
  }
});

/***/ }),

/***/ "./src/listener.js":
/*!*************************!*\
  !*** ./src/listener.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// listener
// script containing event listeners functions for target elements
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new function () {
  // addListener
  // méthode qui permet d'ajouter un nouveau listener d'événement
  // retourne un tableau avec les paramètres pour retirer le listener
  this.addListener = function (nodes, type, func, register, delegate, option) {
    var r = null;
    Str.typecheck(type, true);
    nodes = this.toArray(nodes);
    var $inst = this;

    if (Arr.isNotEmpty(nodes)) {
      option = Object.assign({
        capture: false,
        once: false
      }, option);
      var thirdArg = Evt.support.once === true ? option : option.capture;
      var handler = addListenerHandler.call(this, type, func, delegate, thirdArg, option);
      Arr.each(nodes, function (ele) {
        ele.addEventListener(type, handler, thirdArg);
        if (Str.isNotEmpty(register) || register === true) $inst.registerListener(ele, register, type, handler, thirdArg);
      });
      r = [type, handler, thirdArg];
    }

    return r;
  }; // registerListener
  // permet d'enregistrer un event listener dans la node
  // ceci permet de le retirer par la suite


  this.registerListener = function (node, register, type, handler, option) {
    Str.typecheck(type, true);
    register = register === true ? type : register;
    Str.typecheck(register, true);
    var data = this.getOrSetData(node, 'rel', {});
    var entry = [type, handler, option];
    Pojo.setRef(register, entry, data);
  }; // addListenerOnce
  // comme ael, mais le listener ne peut être déclenché qu'une seule fois


  this.addListenerOnce = function (node, type, func, register, delegate, option) {
    return this.addListener(node, type, func, register, delegate, Object.assign({}, option, {
      once: true
    }));
  }; // addDelegatedListener
  // permet d'ajouter un event listener qui se trigge seulement selon le delegate


  this.addDelegatedListener = function (node, type, delegate, func, register, option) {
    return this.addListener(node, type, func, register, delegate, option);
  }; // addPassiveListener
  // permet d'ajouter un event listener passif, utile pour scroll


  this.addPassiveListener = function (node, type, func, register, delegate, option) {
    return this.addListener(node, type, func, register, delegate, Object.assign({}, option, {
      passive: true
    }));
  }; // removeListener
  // permet de retirer un event listener
  // args est le tableau retournée par addListener (contient type, handler et option)


  this.removeListener = function (nodes, args) {
    nodes = this.toArray(nodes);
    var $inst = this;
    Arr.each(nodes, function (ele) {
      if (Str.isNotEmpty(args)) {
        var key = args;
        var data = $inst.getData(ele, 'rel');

        if (Pojo.is(data)) {
          args = Pojo.get(key, data);
          Pojo.unsetRef(key, data);
        }
      }

      if (Arr.is(args)) ele.removeEventListener.apply(ele, args);
    });
  }; // trigger
  // utilisé par triggerBubble et triggerNoBubble pour envoyer des événements


  this.trigger = function (nodes, type, option) {
    Str.typecheck(type, true);
    nodes = this.toArray(nodes);

    if (Arr.isNotEmpty(nodes)) {
      var event = Evt.createFromType(type, option);
      Arr.each(nodes, function (ele) {
        ele.dispatchEvent(event);
      });
    }
  }; // triggerBubble
  // permet de lancer des événements sur chaque node
  // ces événements bubble


  this.triggerBubble = function (nodes, type) {
    var data = ArrLike.sliceStart(2, arguments);
    var option = {
      bubbles: true,
      cancelable: true,
      detail: data
    };
    return this.trigger(nodes, type, option);
  }; // triggerNoBubble
  // permet de lancer des événements sur chaque node
  // ces événements ne bubble pas


  this.triggerNoBubble = function (nodes, type) {
    var data = ArrLike.sliceStart(2, arguments);
    var option = {
      bubbles: false,
      cancelable: true,
      detail: data
    };
    return this.trigger(nodes, type, option);
  }; // triggerSetup
  // fonction utilisé pour lancer le setup sur un component
  // lance component:ready après le setup
  // ces événements ne bubble pas


  this.triggerSetup = function (nodes) {
    var sliced = ArrLike.sliceStart(1, arguments);
    var args = Arr.merge([nodes, 'component:setup'], sliced);
    this.triggerNoBubble.apply(this, args);
    args = Arr.merge([nodes, 'component:ready'], sliced);
    this.triggerNoBubble.apply(this, args);
  }; // triggerTeardown
  // fonction utilisé pour lancer le démontange d'un component
  // ces événements ne bubble pas


  this.triggerTeardown = function (nodes) {
    var args = Arr.merge([nodes, 'component:teardown'], ArrLike.sliceStart(1, arguments));
    return this.triggerNoBubble.apply(this, args);
  }; // addListenerHandler
  // retourne le handler utilisé par addListener
  // ajoute le support pour once si non supporté par le navigateur


  var addListenerHandler = function addListenerHandler(type, func, delegate, thirdArg, option) {
    var $inst = this;

    var handler = function handler(event) {
      var go = delegate == null;
      var context = this;
      if (option.once === true && Evt.support.once === false) $inst.removeListener(event.target, [type, handler, thirdArg]);

      if (Str.isNotEmpty(delegate) && event.target != null) {
        go = prepareDelegate.call(this, event, delegate);
        context = event.triggerTarget;
      }

      if (go === true) {
        var args = [event];
        var detail = event.detail;
        args = Arr.merge(args, detail);
        func.apply(context, args);
      }
    };

    return handler;
  }; // prepareDelegate
  // handlertion protégé
  // gère la délégation et le changement à l'objet event


  var prepareDelegate = function prepareDelegate(event, delegate) {
    var r = false;
    var context = event.target;
    var nodes = Nod.scopedQueryAll(this, delegate);
    var delegateTarget = this;
    var triggerTarget = context;
    if (Arr["in"](context, nodes)) r = true;else {
      r = Arr.some(nodes, function (node) {
        if (node.contains(context)) {
          triggerTarget = Nod.closest(context, delegate);
          return true;
        }
      });
    }
    event.delegateTarget = delegateTarget;
    event.triggerTarget = triggerTarget;
    return r;
  };
}());

/***/ }),

/***/ "./src/nod.js":
/*!********************!*\
  !*** ./src/nod.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EleDocTarget": () => (/* binding */ EleDocTarget),
/* harmony export */   "EleWinTarget": () => (/* binding */ EleWinTarget),
/* harmony export */   "NodTarget": () => (/* binding */ NodTarget)
/* harmony export */ });
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// nod
// object for element, text and document nodes
var NodTarget = {
  // is
  // retourne vrai si la valeur est un element, un textNode ou un document
  is: function is(value) {
    return Ele.is(value) || Doc.is(value) || this.isText(value) || this.isDoctype(value);
  },
  // isText
  // retourne vrai si c'est une texte node
  isText: function isText(value) {
    return value != null && value.nodeType === Node.TEXT_NODE;
  },
  // isDoctype
  // retourne vrai si c'est une node doctype
  isDoctype: function isDoctype(value) {
    return value != null && value.nodeType === Node.DOCUMENT_TYPE_NODE;
  },
  // isTemplate
  // retourne vrai si la valeur est un élément template
  isTemplate: function isTemplate(value) {
    return value instanceof HTMLTemplateElement;
  },
  // realNode
  // retourne la vrai node
  // utilisé pour les méthodes du sélecteur
  realNode: function realNode(value) {
    var r = value;
    if (this.isTemplate(value)) r = value.content;
    return r;
  },
  // getText
  // retourne le text contenu dans une node et ses enfants
  // ne retourne aucune balise html
  getText: function getText(node) {
    this.typecheck(node);
    return node.textContent != null ? node.textContent : undefined;
  },
  // setText
  // permet de changer contenu texte d'une balise
  setText: function setText(node, value) {
    this.typecheck(node);
    Str.typecheck(value, false);

    if (node.textContent != null) {
      value = value == null ? '' : value;
      node.textContent = value;
    }
  },
  // clone
  // clone une node ou un document
  clone: function clone(value) {
    this.typecheck(value);
    return value.cloneNode(true);
  },
  // clones
  // permet de cloner un tableau de nodes ou document
  clones: function clones(value) {
    var $inst = this;
    var nodes = this.toArray(value);
    return Arr.accumulate([], value, function (ele) {
      return $inst.clone(ele);
    });
  },
  // remove
  // permet d'effacer une ou plusieurs nodes du dom
  // utilise arguments
  remove: function remove(value) {
    var nodes = this.toArray(value);
    Arr.each(nodes, function (ele) {
      ele.remove();
    });
  }
}; // eleDocTarget
// objet pour les nodes qui contiennent du html (element + doc seulement)

var EleDocTarget = {
  // isEmpty
  // retourne vrai si la valeur est une node et qu'elle est vide
  isEmpty: function isEmpty(value) {
    return this.is(value) ? Str.isEmpty(this.getHtml(value)) : false;
  },
  // isNotEmpty
  // retourne vrai si la valeur est une node et qu'elle n'est pas vide
  isNotEmpty: function isNotEmpty(value) {
    return this.is(value) ? Str.isNotEmpty(this.getHtml(value)) : false;
  },
  // getHtml
  // retourne le html dans la node ou le document
  getHtml: function getHtml(value) {
    var r = '';
    var children = Nod.children(value, null, true);
    r = Ele.getOuterHtml(children);
    return r;
  },
  // setHtml
  // permet de changer le html dans la node ou le document
  // efface tous les enfants et ajoute la ou les nouvelles nodes
  setHtml: function setHtml(node, value, clone) {
    this.typecheck(node);
    node = this.realNode(node);
    var children = Nod.children(node, null, true);
    if (Pojo.is(value)) value = Json.encode(value);
    value = Dom.htmlNodes(value, clone);
    Nod.remove(children);
    Arr.each(value, function (ele) {
      node.appendChild(ele);
    });
  },
  // replaceHtml
  // comme setHtml, mais le html est seulement remplacer si différent
  // utilise une balise pour avoir le même encodage que la string
  // il faut absolument fournir une string
  // retourne vrai si le html a été changé
  replaceHtml: function replaceHtml(node, value) {
    var r = false;
    Str.typecheck(value);
    var current = this.getHtml(node);
    var newElement = document.createElement('div');
    this.setHtml(newElement, value);
    var newValue = this.getHtml(newElement);

    if (current !== newValue) {
      r = true;
      this.setHtml(node, value);
    }

    return r;
  },
  // getOuterHtml
  // retourne le outerHtml d'une ou plusieurs nodes
  getOuterHtml: function getOuterHtml(nodes) {
    nodes = Nod.toArray(nodes);
    return Arr.accumulate('', nodes, function (ele) {
      var content = '';
      if (ele.outerHTML != null) content = ele.outerHTML;else if (ele.textContent != null) content = ele.textContent;
      return content;
    });
  }
}; // eleWinTarget 
// objet pour les méthodes communes entre node et window

var EleWinTarget = {
  // blur
  // permet de retirer le focus d'une node ou window
  blur: function blur(node) {
    this.typecheck(node);
    node.blur();
  }
}; // export



/***/ }),

/***/ "./src/request.js":
/*!************************!*\
  !*** ./src/request.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// request
// script with functions related to the current request
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // relative
  // retourne l'uri relative courante
  // possible d'inclure le hash
  relative: function relative(hash) {
    var r = window.location.pathname + window.location.search;
    if (hash === true && window.location.hash) r += Uri.makeHash(window.location.hash, true);
    return r;
  },
  // absolute
  // retourne l'uri absolute courante
  absolute: function absolute() {
    return window.location.href;
  },
  // scheme
  // retourne le scheme courant
  // possible de retourne avec ou sans le :
  scheme: function scheme(twoDot) {
    var r = location.protocol;
    if (twoDot !== true) r = r.substring(0, Str.pos(':', r));
    return r;
  },
  // host
  // retourne le host courante
  host: function host() {
    return location.hostname;
  },
  // schemeHost
  // retourne le schemeHost courant
  schemeHost: function schemeHost() {
    return location.origin;
  },
  // fragment
  // retourne le fragment de l'uri sans le hash
  fragment: function fragment() {
    return Uri.makeHash(window.location.hash);
  },
  // parse
  // retourne un objet avec les différentes parties de l'uri courante séparés
  parse: function parse() {
    return new URL(this.absolute());
  }
});

/***/ }),

/***/ "./src/selector.js":
/*!*************************!*\
  !*** ./src/selector.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// selector
// script with methods related to selecting and matching nodes
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // scopedQuery
  // méthode utilisé pour faire une recherche et retourner le premier enfant d'une target qui match le selector
  // possible de faire un typecheck (ele non vide) si le dernier argument est true
  scopedQuery: function scopedQuery(node, selector, typecheck) {
    var r = null;
    node = this.realNode(node);
    Nod.typecheck(node);

    if (node != null) {
      selector = Doc.is(node) ? selector : ":scope " + selector;
      r = node.querySelector(selector);
    }

    if (typecheck === true) Ele.typecheck(r);
    return r;
  },
  // scopedQueryAll
  // méthode utilisé pour faire une recherche et retourner les enfants d'une target qui match le selector
  // doit retourner un array, pas une node list
  // possible de faire un typecheck (eles non vide) si le dernier argument est true
  scopedQueryAll: function scopedQueryAll(node, selector, typecheck) {
    var r = null;
    node = this.realNode(node);
    Nod.typecheck(node);

    if (node != null) {
      selector = Doc.is(node) ? selector : ":scope " + selector;
      r = node.querySelectorAll(selector);
      if (r instanceof NodeList) r = ArrLike.toArray(r);
    }

    if (typecheck === true) Ele.typechecks(r, true);
    return r;
  },
  // mergedQsa
  // permet de faire un querySelectorAll sur plusieurs nodes
  // retourne un array avec les résultats merged
  mergedQsa: function mergedQsa(nodes, selector, typecheck) {
    var r = null;
    var $inst = this;
    nodes = this.toArray(nodes);

    if (nodes != null) {
      r = [];
      Arr.each(nodes, function (ele) {
        Arr.mergeRef(r, $inst.scopedQueryAll(ele, selector));
      });
    }

    if (typecheck === true) Ele.typechecks(r, true);
    return r;
  },
  // closest
  // retourne la node ou le parent le plus proche de la node qui retourne vrai au pattern
  closest: function closest(node, value) {
    node = this.realNode(node);
    this.typecheck(node);
    Str.typecheck(value);
    return node.closest(value);
  },
  // closestParent
  // retourne le parent le plus proche de la node qui retourne vrai au pattern
  closestParent: function closestParent(node, value) {
    var parent = this.parent(node);
    return parent != null ? this.closest(parent, value) : null;
  },
  // match
  // retourne vrai si la node match le pattern
  match: function match(node, value) {
    node = this.realNode(node);
    Nod.typecheck(node);
    Str.typecheck(value);
    return Doc.is(node) ? false : node.matches(value);
  },
  // some
  // retourne vrai si au moins une node retourne vrai au pattern
  some: function some(nodes, value) {
    Str.typecheck(value);
    nodes = this.toArray(nodes);
    var $inst = this;
    return Arr.some(nodes, function (ele) {
      return $inst.match(ele, value);
    });
  },
  // every
  // retourne vrai si toutes les nodes retournent vrai au pattern
  every: function every(nodes, value) {
    Str.typecheck(value);
    nodes = this.toArray(nodes);
    var $inst = this;
    return Arr.every(nodes, function (ele) {
      return $inst.match(ele, value);
    });
  },
  // filter
  // permet de filtrer les nodes d'un tableau qui match le pattern
  filter: function filter(nodes, value) {
    Str.typecheck(value);
    nodes = this.toArray(nodes);
    var $inst = this;
    return Arr.filter(nodes, function (ele) {
      return $inst.match(ele, value);
    });
  },
  // find
  // retourne la première valeur d'un tableau qui match le pattern
  find: function find(nodes, value) {
    Str.typecheck(value);
    nodes = this.toArray(nodes);
    var $inst = this;
    return Arr.find(nodes, function (ele) {
      return $inst.match(ele, value);
    });
  },
  // parent
  // retourne le parent de la node, le parent peut être valider contre un sélecteur
  parent: function parent(node, value) {
    var r = null;
    node = this.realNode(node);
    Nod.typecheck(node);
    var parent = node.parentNode;

    if (Nod.is(parent)) {
      if (value == null || Nod.match(parent, value)) r = parent;
    }

    return r;
  },
  // parents
  // permet de retourner tous les parents d'une node
  // possible d'arrêter à un point
  parents: function parents(node, value, until) {
    var r = [];
    node = this.realNode(node);
    Nod.typecheck(node);

    while (node = Nod.parent(node)) {
      if (until != null && Nod.match(node, until)) break;
      if (value == null || Nod.match(node, value)) r.push(node);
    }

    return r;
  },
  // prev
  // retourne l'élément précédant la node
  prev: function prev(node, value) {
    var r = null;
    node = this.realNode(node);
    this.typecheck(node);
    var sibling = node.previousElementSibling;

    if (this.is(sibling)) {
      if (value == null || this.match(sibling, value)) r = sibling;
    }

    return r;
  },
  // prevs
  // retourne tous les éléments précédant la node
  // possible d'arrêter à un point
  prevs: function prevs(node, value, until) {
    var r = [];
    node = this.realNode(node);
    this.typecheck(node);

    while (node = this.prev(node)) {
      if (until != null && this.match(node, until)) break;
      if (value == null || this.match(node, value)) r.push(node);
    }

    return r;
  },
  // next
  // retourne l'élément suivant la node
  next: function next(node, value) {
    var r = null;
    node = this.realNode(node);
    this.typecheck(node);
    var sibling = node.nextElementSibling;

    if (this.is(sibling, true)) {
      if (value == null || this.match(sibling, value)) r = sibling;
    }

    return r;
  },
  // nexts
  // retourne tous les éléments suivant la node
  // possible d'arrêter à un point
  nexts: function nexts(node, value, until) {
    var r = [];
    node = this.realNode(node);
    this.typecheck(node);

    while (node = this.next(node)) {
      if (until != null && this.match(node, until)) break;
      if (value == null || this.match(node, value)) r.push(node);
    }

    return r;
  },
  // children
  // retourne les enfants de la node
  // possible de seulement retourner les enfants valides avec le sélecteur
  // méthode plus complexe pour gérer le fait que document n'a pas de propriété children sur ie11
  children: function children(node, value, withTextNodes) {
    var r = null;
    node = this.realNode(node);
    Nod.typecheck(node);
    var hasChildren = node.children != null;
    var childs;
    if (withTextNodes === true) childs = ArrLike.toArray(node.childNodes);else {
      if (hasChildren === true) childs = ArrLike.toArray(node.children);else {
        childs = ArrLike.accumulate([], node.childNodes, function (value) {
          return Ele.is(value) ? value : null;
        });
      }
    }
    if (value == null) r = childs;else r = Nod.filter(childs, value);
    return r;
  },
  // realNode
  // permet de remplacer la node pour les méthodes du sélector
  // à étendre
  realNode: function realNode(node) {
    return node;
  }
});

/***/ }),

/***/ "./src/target.js":
/*!***********************!*\
  !*** ./src/target.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// target
// script with basic functions related to event targets elements
// targetRoot
// object for elements, documents and window
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // is
  // retourne vrai si la valeur est une node, un document, un fragment de document ou window
  is: function is(value) {
    return Nod.is(value) || Win.is(value);
  },
  // are
  // retourne vrai si la valeur est une collection de node non vide
  are: function are(value) {
    var $inst = this;
    value = ArrLike.toArray(value);
    return Arr.is(value) ? Arr.every(value, function (v) {
      return $inst.is(v);
    }) : false;
  },
  // typecheck
  // envoie une exception si la valeur n'est pas une node
  typecheck: function typecheck(value, type) {
    var error = false;
    var is = this.is(value);
    if (!(is || type === false && value == null)) error = true;
    if (error === true) throw new Error(value);
    return value;
  },
  // typechecks
  // envoie une exception si la valeur n'est pas un tableau de nodes
  typechecks: function typechecks(value, type) {
    var error = false;
    var are = this.are(value);
    if (!are || are === true && type === true && Arr.isEmpty(value)) error = true;
    if (error === true) throw new Error(value);
    return value;
  },
  // getProp
  // retourne une propriété d'une node
  getProp: function getProp(node, key) {
    this.typecheck(node);
    return Obj.get(key, node);
  },
  // setProp
  // permet de changer la propriété sur une node ou plusieurs node
  setProp: function setProp(nodes, key, value) {
    Str.typecheck(key);
    nodes = this.toArray(nodes);
    Arr.each(nodes, function (ele) {
      Obj.setRef(key, value, ele);
    });
  },
  // propStr
  // prend un ensemble de node et retourne une string concatené pour une même prop
  // un séparateur peut être fourni, sinon utilise -
  propStr: function propStr(nodes, prop, separator) {
    nodes = this.toArray(nodes);
    Str.typecheck(prop, true);
    separator = Str.isNotEmpty(separator) ? separator : '-';
    var $inst = this;
    return Arr.reduce('', nodes, function (r, ele) {
      r += r.length ? separator : "";
      return r += $inst.getProp(ele, prop);
    });
  },
  // propObj
  // permet de retourner un objet à partir de plusieurs nodes
  // il faut spécifier une prop pour clé et une autre pour valeur
  propObj: function propObj(nodes, propKey, propValue) {
    var r = {};
    nodes = this.toArray(nodes);
    var $inst = this;
    Str.typecheck(propKey, true);
    Str.typecheck(propValue, true);
    Arr.each(nodes, function (ele) {
      var key = $inst.getProp(ele, propKey);
      var value = $inst.getProp(ele, propValue);
      r[key] = value;
    });
    return r;
  },
  // toArray
  // wrap une node ou un node-like dans un array, si ce n'est pas un array
  // transforme une arr like en array
  // transform null en array vide
  // envoie automatiquement dans le typecheck
  // les array vide passent le typecheck
  toArray: function toArray(value) {
    if (this.is(value)) value = [value];else if (ArrLike.is(value)) value = ArrLike.toArray(value);else if (value == null) value = [];
    return this.typechecks.call(this, value);
  }
});

/***/ }),

/***/ "./src/uri.js":
/*!********************!*\
  !*** ./src/uri.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// uri
// script with a set of helper functions related to uri management
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // isInternal
  // retourne vrai si l'uri et la comparaison ont le même scheme et host
  isInternal: function isInternal(uri, compare) {
    var r = false;

    if (Str.is(uri)) {
      compare = Str.is(compare) ? this.parse(compare) : Request.parse();
      var parse = this.parse(uri);
      if (parse.protocol === compare.protocol && parse.host === compare.host) r = true;
    }

    return r;
  },
  // isExternal
  // retourne vrai si l'uri et la comparaison n'ont pas le même scheme et host
  isExternal: function isExternal(uri, compare) {
    return this.isInternal(uri, compare) ? false : true;
  },
  // hasExtension
  // retourne vrai si l'uri a une extension
  hasExtension: function hasExtension(uri) {
    return this.extension(uri) != null;
  },
  // hasFragment
  // retourne vrai si l'uri a un hash
  hasFragment: function hasFragment(uri) {
    var r = false;

    if (Str.is(uri)) {
      var parse = this.parse(uri);
      if (Str.isNotEmpty(parse.hash)) r = true;
    }

    return r;
  },
  // isOnlyHash
  // retourne vrai si l'uri est seulement un hash
  isOnlyHash: function isOnlyHash(value) {
    return Str.length(value) > 1 && Str.isStart('#', value);
  },
  // isSamePathQuery
  // retourne vrai si l'uri est la même que la comparaison
  // compare path et query
  isSamePathQuery: function isSamePathQuery(uri, compare) {
    var r = false;

    if (Str.is(uri)) {
      compare = Str.is(compare) ? this.parse(compare) : Request.parse();
      var parse = this.parse(uri);
      if (parse.pathname === compare.pathname && parse.search === compare.search) r = true;
    }

    return r;
  },
  // isSamePathQueryHash
  // retourne vrai si l'uri est la même que la comparaison
  // compare path, query et hash
  isSamePathQueryHash: function isSamePathQueryHash(uri, compare) {
    var r = false;

    if (Str.is(uri)) {
      compare = Str.is(compare) ? this.parse(compare) : Request.parse();
      var parse = this.parse(uri);
      if (parse.pathname === compare.pathname && parse.search === compare.search && parse.hash === compare.hash) r = true;
    }

    return r;
  },
  // isHashChange
  // retourne vrai si l'uri est la même que la comparaison mais que le hash change
  isHashChange: function isHashChange(uri, compare) {
    var r = false;

    if (Str.is(uri)) {
      compare = Str.is(compare) ? this.parse(compare) : Request.parse();
      var parse = this.parse(uri);

      if (parse.protocol === compare.protocol && parse.host === compare.host && parse.pathname === compare.pathname && parse.search === compare.search) {
        if ((Str.isNotEmpty(parse.hash) || Str.isNotEmpty(compare.hash)) && parse.hash !== compare.hash) r = true;
      }
    }

    return r;
  },
  // isSameWithHash
  // retourne vrai si l'uri est la même que la comparaison, que l'uri a un hash et que le hash est identique
  isSameWithHash: function isSameWithHash(uri, compare) {
    return this.hasFragment(uri) && uri === compare;
  },
  // relative
  // retourne une uri relative
  relative: function relative(uri, hash) {
    return this.build(this.parse(uri), false, hash);
  },
  // absolute
  // retourne une uri absolute
  absolute: function absolute(uri, hash) {
    return this.build(this.parse(uri), true, hash);
  },
  // path
  // retourne le pathname de l'uri
  path: function path(uri) {
    return this.parse(uri).pathname;
  },
  // query
  // retourne le query de l'uri sans le ?
  query: function query(uri) {
    return this.makeQuery(this.parse(uri).search).toString();
  },
  // fragment
  // retourne le hash de l'uri sans le symbole
  fragment: function fragment(uri) {
    return this.makeHash(this.parse(uri).hash, false);
  },
  // basename
  // retourne le basename du path de l'uri
  basename: function basename(uri) {
    var r = null;
    var path = this.path(uri);
    if (Str.is(path)) r = path.substr(path.lastIndexOf("/") + 1);
    return r;
  },
  // filename
  // retourne le filename du path de l'uri
  filename: function filename(uri) {
    var r = null;
    var basename = this.basename(uri);
    if (Str.is(basename)) r = basename.replace(/\.[^.$]+$/, '');
    return r;
  },
  // extension
  // retourne l'extension du path de l'uri
  extension: function extension(uri) {
    var r = null;
    var parse = this.parse(uri);
    var regex = /(?:\.([^.]+))?$/;
    var result = regex.exec(parse.pathname);
    if (Arr.is(result) && result.length === 2) r = result[1];
    return r;
  },
  // parse
  // retourne un objet avec les différentes parties d'une uri séparés
  // ne marche pas bien sur ie11
  parse: function parse(uri) {
    Str.typecheck(uri);
    var schemeHost = Request.schemeHost();
    if (Str.isStart("#", uri)) uri = Request.relative() + uri;
    return new URL(uri, schemeHost);
  },
  // build
  // prend un objet parse et retourne une string uri
  // possible de retourner une string relative ou absolute
  // possible d'inclure ou non le hash
  build: function build(parse, absolute, hash) {
    var r = '';
    Obj.typecheck(parse);

    if (absolute === true) {
      r += Str.is(parse.protocol) ? parse.protocol : Request.scheme(true);
      r += "//";
      r += Str.is(parse.host) ? parse.host : Request.host();
    }

    r += parse.pathname;

    if (parse.search) {
      var searchParams = parse.search instanceof URLSearchParams ? parse.search : this.makeQuery(parse.search);
      var query = searchParams.toString();
      if (Str.isNotEmpty(query)) r += "?" + query;
    }

    if (parse.hash && hash === true) r += this.makeHash(parse.hash, true);
    return r;
  },
  // makeQuery
  // permet de retourner un objet urlSearchParams à partir d'une string ou un object
  makeQuery: function makeQuery(value) {
    var r = Str.is(value) ? new URLSearchParams(value) : new URLSearchParams();

    if (Pojo.is(value)) {
      Pojo.each(value, function (value, key) {
        value = value == null ? '' : value;
        r.append(key, value);
      });
    }

    return r;
  },
  // makeHash
  // permet de faire une hash avec ou sans le hash
  makeHash: function makeHash(value, symbol) {
    var r = '';

    if (Str.isNotEmpty(value)) {
      r = value;
      var hasHash = Str.isStart('#', r);
      if (symbol === true) r = !hasHash ? "#" + r : r;else if (hasHash) r = Str.sub(1, true, r);
    } else if (symbol === true) r = '#';

    return r;
  },
  // getMailto
  // permet d'obtenir un email à partir d'un mailto (comme dans un href)
  getMailto: function getMailto(value) {
    var r = null;
    Str.typecheck(value);

    if (Str.isNotEmpty(value)) {
      var email = value.replace(/mailto:/, '');
      if (Validate.isEmail(email)) r = email;
    }

    return r;
  }
});

/***/ }),

/***/ "./src/win.js":
/*!********************!*\
  !*** ./src/win.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// win
// object for window target
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // is
  // retourne vrai si la valeur est une window ou une window proxy
  is: function is(value) {
    return this.isCurrent(value) || this.isProxy(value);
  },
  // isCurrent
  // retourne vrai si la valeur est la window courante
  isCurrent: function isCurrent(value) {
    return value instanceof Window;
  },
  // isProxy
  // retourne vrai si la valeur est une window proxy
  isProxy: function isProxy(value) {
    return Obj.is(value) && !(value instanceof Window) && value.window === value;
  },
  // hasHistoryApi
  // retourne vrai si le navigateur courant supporte history API
  hasHistoryApi: function hasHistoryApi() {
    var r = false;

    if (window.history && window.history.pushState && window.history.replaceState) {
      if (!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/)) r = true;
    }

    return r;
  },
  // isScrollable
  // retourne vrai si la fenêtre est scrollable dans un axis, ou n'importe quel axis
  isScrollable: function isScrollable(axis) {
    var r = false;
    var scroll = this.getScroll();
    if (Arr["in"](axis, ['x', 'horizontal'])) r = scroll.scrollableX;else if (Arr["in"](axis, ['y', 'vertical'])) r = scroll.scrollableY;else r = scroll.scrollableX === true ? scroll.scrollableX : scroll.scrollableY;
    return r;
  },
  // getScroll
  // retourne le scroll de la window
  // retourne aussi les dimensions externes et internes, ainsi qu'un bool indiquant si une direction est scrollable
  getScroll: function getScroll() {
    var r = Pojo.replace({
      top: Num.round(window.pageYOffset),
      left: Num.round(window.pageXOffset),
      width: Num.round(document.documentElement.scrollWidth),
      height: Num.round(document.documentElement.scrollHeight),
      innerWidth: Num.round(window.innerWidth),
      innerHeight: Num.round(window.innerHeight),
      scrollableX: false,
      scrollableY: false
    });

    if (r.innerWidth > 0 && r.innerHeight > 0) {
      // ajout de 1px à cause d'un problème sur Safari
      if (r.width > r.innerWidth + 1) r.scrollableX = true;
      if (r.height > r.innerHeight + 1) r.scrollableY = true;
    }

    return r;
  },
  // setScroll
  // permet de changer le scroll de la window, sans animation
  setScroll: function setScroll(top, left) {
    left = left > 0 ? left : 0;
    top = top > 0 ? top : 0;
    window.scrollTo(left, top);
  },
  // focus
  // permet de mettre le focus sur une window
  focus: function focus(node) {
    this.typecheck(node);
    node.focus();
  },
  // getDimension
  // retourne la dimension interne de la fênetre
  getDimension: function getDimension() {
    return {
      width: Num.round(window.innerWidth),
      height: Num.round(window.innerHeight)
    };
  }
});

/***/ }),

/***/ "./src/xhr.js":
/*!********************!*\
  !*** ./src/xhr.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// xhr
// script with some logic for ajax calls and xhr object
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new function () {
  // inst
  var $inst = this; // isStatusSuccess
  // retourne vrai si le statut est un succès

  this.isStatusSuccess = function (value) {
    return Integer.is(value) && value >= 200 && value < 400;
  }; // isResponseJson
  // retourne vrai si la réponse du xhr a un content type de json


  this.isResponseJson = function (xhr) {
    var r = false;

    if (xhr instanceof XMLHttpRequest) {
      var contentType = xhr.getResponseHeader('Content-Type');
      if (Str["in"]('/json', contentType)) r = true;
    }

    return r;
  }; // trigger
  // fonction utilisé pour lancer une requête ajax
  // retourne null ou un objet promise ajax


  this.trigger = function (config, extraEvents) {
    config = prepareConfig.call(this, config);
    Str.typecheck(config.url, true);
    var xhr = new XMLHttpRequest();
    xhr.open(config.method, config.url, true);
    xhr.timeout = config.timeout;
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    xhr.ontimeout = function () {
      callEvent('error', xhr, config, extraEvents);
    };

    xhr.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE) {
        var isSuccess = $inst.isStatusSuccess(this.status);
        if (isSuccess === false) callEvent('error', xhr, config, extraEvents);else if (isSuccess === true) callEvent('success', xhr, config, extraEvents);
        callEvent('complete', xhr, config, extraEvents);
      }
    };

    if (xhr.upload != null) {
      xhr.upload.addEventListener("progress", function (event) {
        if (Func.is(config.progress) && event.lengthComputable === true) {
          var percent = parseInt(event.loaded / event.total * 100);
          callEvent('progress', xhr, config, extraEvents, percent, event);
        }
      });
    } // before


    callEvent('before', xhr, config, extraEvents);
    xhr.send(config.data);
    return xhr;
  }; // configFromString
  // retounre un tableau avec la string comme url


  this.configFromString = function (value) {
    Str.typecheck(value, true);
    return {
      url: value
    };
  }; // callEvent
  // function utilisé pour faire les appels aux callbacks de la requête ajax
  // pour les callbacks, this est xhr mais xhr est aussi envoyé en dernier argument


  var callEvent = function callEvent(type, xhr, config, extraEvents) {
    var configCallback = Pojo.get(type, config);
    var extraCallback = Pojo.is(extraEvents) ? Pojo.get(type, extraEvents) : null;
    var args = ArrLike.sliceStart(4, arguments);
    args.push(xhr);
    if (Func.is(configCallback)) configCallback.apply(xhr, args);
    if (Func.is(extraCallback)) extraCallback.apply(xhr, args);
  }; // defaultConfig
  // retourne la configuration par défaut pour une requête ajax


  var defaultConfig = function defaultConfig() {
    return {
      url: undefined,
      method: undefined,
      data: undefined,
      timeout: 10000
    };
  }; // prepareConfig
  // dernière préparation à la configuration ajax


  var prepareConfig = function prepareConfig(config) {
    if (Pojo.is(config) && Str.is(config.uri)) config.url = config.uri;
    config = Pojo.replace(defaultConfig(), config);
    if (!Str.is(config.method)) config.method = 'get';
    config.method = config.method.toUpperCase();

    if (Pojo.is(config.data)) {
      if (config.method === 'POST') config.data = this.pojoToFormData(config.data);else {
        var parse = Uri.parse(config.url);
        var query = Uri.makeQuery(config.data).toString();
        parse.search = query;
        config.url = parse.toString();
      }
    }

    if (!config.data instanceof FormData) config.data = null;
    return config;
  }; // configFromNode
  // met à jour le tableau de config à partir de la tag
  // retourne null si ajax:confirm est false


  this.configFromNode = function (node, config, events) {
    Ele.typecheck(node);
    var r = Pojo.is(config) ? config : {};
    var tagName = Ele.tag(node);
    if (r.method == null) r = configNodeMethod(r, node, tagName);
    r = configNodeUrl(r, node, tagName);
    if (r.data == null) r = configNodeData(r, node, tagName);
    if (events === true) r = this.configNodeEvents(node, r);
    r = prepareConfig.call(this, r);
    return r;
  }; // configNodeEvents
  // fait la configuration des événements à envoyer à la node pour la requête ajax


  this.configNodeEvents = function (node, config) {
    Ele.typecheck(node);
    Pojo.typecheck(config);

    config.before = function (xhr) {
      Target.triggerHandler(node, 'ajax:before', xhr);
    };

    config.progress = function (percent, event, xhr) {
      Target.triggerHandler(node, 'ajax:progress', percent, event, xhr);
    };

    config.success = function (xhr) {
      var responseText = Str.isNotEmpty(xhr.responseText) && Xhr.isResponseJson(xhr) ? Json.decode(xhr.responseText) : xhr.responseText;
      Target.triggerHandler(node, 'ajax:success', responseText, xhr);
    };

    config.error = function (xhr) {
      var parsedError = $inst.parseError(xhr.responseText);
      Target.triggerHandler(node, 'ajax:error', parsedError, xhr);
    };

    config.complete = function (xhr) {
      Target.triggerHandler(node, 'ajax:complete', xhr);
    };

    return config;
  }; // pojoToFormData
  // permet de transformer un pojo en formData


  this.pojoToFormData = function (value) {
    Pojo.typecheck(value);
    var r = new FormData();
    Pojo.each(value, function (val, key) {
      r.append(key, val);
    });
    return r;
  }; // parseError
  // cette méthode gère l'affichage pour un xhr en erreur


  this.parseError = function (responseText) {
    var r = '';

    if (Str.isNotEmpty(responseText)) {
      r = responseText;
      var html;
      var parse = Dom.parseOne(responseText);

      if (parse != null) {
        var ajaxParse = Nod.scopedQuery(parse, ".ajax-parse-error");
        if (ajaxParse != null) html = Ele.getOuterHtml(ajaxParse);

        if (Vari.isEmpty(html)) {
          var body = Nod.scopedQuery(parse, "body,[data-tag='body']");
          if (body != null) html = Ele.getHtml(body);
        }

        if (Str.isNotEmpty(html)) r = html;
      }
    }

    return r;
  }; // configNodeUrl
  // fait la configuration de l'url pour une node
  // pour un form get, ajoute les données du formulaire comme query


  var configNodeUrl = function configNodeUrl(r, node, tagName) {
    if (r.url == null) r.url = Target.triggerHandler(node, 'ajax:getUrl');
    if (r.url == null) r.url = Ele.getUri(node);

    if (r.url != null && tagName === 'form' && Str.icompare(r.method, 'get')) {
      var query = Ele.triggerHandler(node, 'form:serialize');
      var parse = Uri.parse(r.url);

      if (query != null && parse != null) {
        parse.search = query;
        r.url = Uri.build(parse);
      }
    }

    return r;
  }; // configNodeMethod
  // fait la configuration de la méthode pour une node


  var configNodeMethod = function configNodeMethod(r, node, tagName) {
    r.method = Target.triggerHandler(node, 'ajax:getMethod');

    if (r.method == null) {
      if (tagName === 'form') r.method = Ele.getAttr(node, "method") || 'get';else r.method = Ele.getAttr(node, 'data-method') || 'get';
    }

    return r;
  }; // configNodeData
  // fait la configuration des datas pour une node
  // pour un formulaire seulement si c'est post


  var configNodeData = function configNodeData(r, node, tagName) {
    r.data = Target.triggerHandler(node, 'ajax:getData');

    if (r.data == null && tagName === 'form' && Str.icompare(r.method, 'post')) {
      var formData = new FormData(node);
      var clicked = Target.triggerHandler(node, 'form:getClickedSubmit');

      if (clicked != null) {
        var clickedName = Ele.getAttr(clicked, 'name');

        if (Str.isNotEmpty(clickedName)) {
          var clickedVal = Ele.getValue(clicked);
          formData.append(clickedName, clickedVal);
        }
      }

      r.data = formData;
    }

    return r;
  };
}());

/***/ }),

/***/ "./node_modules/quidphp-node-temp/index.js":
/*!*************************************************!*\
  !*** ./node_modules/quidphp-node-temp/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Arr": () => (/* binding */ Arr),
/* harmony export */   "ArrLike": () => (/* binding */ ArrLike),
/* harmony export */   "Bool": () => (/* binding */ Bool),
/* harmony export */   "Component": () => (/* binding */ Component),
/* harmony export */   "Datetime": () => (/* reexport safe */ _src_datetime_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Debug": () => (/* reexport safe */ _src_debug_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Env": () => (/* reexport safe */ _src_env_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Factory": () => (/* reexport safe */ _src_factory_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Func": () => (/* binding */ Func),
/* harmony export */   "Html": () => (/* reexport safe */ _src_html_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "Integer": () => (/* binding */ Integer),
/* harmony export */   "Json": () => (/* reexport safe */ _src_json_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "Nav": () => (/* reexport safe */ _src_nav_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "Num": () => (/* binding */ Num),
/* harmony export */   "Obj": () => (/* binding */ Obj),
/* harmony export */   "Pojo": () => (/* binding */ Pojo),
/* harmony export */   "Scalar": () => (/* binding */ Scalar),
/* harmony export */   "Shortcut": () => (/* binding */ Shortcut),
/* harmony export */   "Str": () => (/* binding */ Str),
/* harmony export */   "Test": () => (/* binding */ Test),
/* harmony export */   "TestSuite": () => (/* reexport safe */ _src_testSuite_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "Tool": () => (/* binding */ Tool),
/* harmony export */   "Validate": () => (/* reexport safe */ _src_validate_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "Vari": () => (/* reexport safe */ _src_vari_js__WEBPACK_IMPORTED_MODULE_9__["default"])
/* harmony export */ });
/* harmony import */ var _src_datetime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/datetime.js */ "./node_modules/quidphp-node-temp/src/datetime.js");
/* harmony import */ var _src_debug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/debug.js */ "./node_modules/quidphp-node-temp/src/debug.js");
/* harmony import */ var _src_env_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/env.js */ "./node_modules/quidphp-node-temp/src/env.js");
/* harmony import */ var _src_factory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/factory.js */ "./node_modules/quidphp-node-temp/src/factory.js");
/* harmony import */ var _src_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/html.js */ "./node_modules/quidphp-node-temp/src/html.js");
/* harmony import */ var _src_json_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/json.js */ "./node_modules/quidphp-node-temp/src/json.js");
/* harmony import */ var _src_nav_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/nav.js */ "./node_modules/quidphp-node-temp/src/nav.js");
/* harmony import */ var _src_testSuite_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/testSuite.js */ "./node_modules/quidphp-node-temp/src/testSuite.js");
/* harmony import */ var _src_validate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/validate.js */ "./node_modules/quidphp-node-temp/src/validate.js");
/* harmony import */ var _src_vari_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/vari.js */ "./node_modules/quidphp-node-temp/src/vari.js");
/* harmony import */ var _src_arr_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/arr.js */ "./node_modules/quidphp-node-temp/src/arr.js");
/* harmony import */ var _src_arrLike_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/arrLike.js */ "./node_modules/quidphp-node-temp/src/arrLike.js");
/* harmony import */ var _src_bool_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/bool.js */ "./node_modules/quidphp-node-temp/src/bool.js");
/* harmony import */ var _src_func_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/func.js */ "./node_modules/quidphp-node-temp/src/func.js");
/* harmony import */ var _src_integer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/integer.js */ "./node_modules/quidphp-node-temp/src/integer.js");
/* harmony import */ var _src_num_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/num.js */ "./node_modules/quidphp-node-temp/src/num.js");
/* harmony import */ var _src_obj_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/obj.js */ "./node_modules/quidphp-node-temp/src/obj.js");
/* harmony import */ var _src_pojo_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/pojo.js */ "./node_modules/quidphp-node-temp/src/pojo.js");
/* harmony import */ var _src_scalar_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./src/scalar.js */ "./node_modules/quidphp-node-temp/src/scalar.js");
/* harmony import */ var _src_str_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./src/str.js */ "./node_modules/quidphp-node-temp/src/str.js");
/* harmony import */ var _src_type_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./src/type.js */ "./node_modules/quidphp-node-temp/src/type.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/node/blob/master/LICENSE
 */

// simple import











// type import












// shortcut
const d = console.log;
const assert = _src_debug_js__WEBPACK_IMPORTED_MODULE_1__["default"].assertThrow.bind(_src_debug_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
const logError = _src_debug_js__WEBPACK_IMPORTED_MODULE_1__["default"].logError.bind(_src_debug_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

// type build
const Arr = (0,_src_factory_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_src_type_js__WEBPACK_IMPORTED_MODULE_20__["default"],_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjBase,_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjKeyValue,_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjEach,_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjCopyFilterMap,_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjWrite,_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjWriteSelf,_src_arr_js__WEBPACK_IMPORTED_MODULE_10__.ArrBase,_src_arr_js__WEBPACK_IMPORTED_MODULE_10__.ArrWriteSelf,_src_arr_js__WEBPACK_IMPORTED_MODULE_10__.ArrLoop);
const ArrLike = (0,_src_factory_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_src_type_js__WEBPACK_IMPORTED_MODULE_20__["default"],_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjBase,_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjKeyValue,_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjEach,_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjCopyFilterMap,_src_arr_js__WEBPACK_IMPORTED_MODULE_10__.ArrBase,_src_arrLike_js__WEBPACK_IMPORTED_MODULE_11__["default"],_src_arr_js__WEBPACK_IMPORTED_MODULE_10__.ArrLoop);
const Bool = (0,_src_factory_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_src_type_js__WEBPACK_IMPORTED_MODULE_20__["default"],_src_bool_js__WEBPACK_IMPORTED_MODULE_12__["default"]);
const Func = (0,_src_factory_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_src_type_js__WEBPACK_IMPORTED_MODULE_20__["default"],_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjBase,_src_func_js__WEBPACK_IMPORTED_MODULE_13__["default"]);
const Integer = (0,_src_factory_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_src_type_js__WEBPACK_IMPORTED_MODULE_20__["default"],_src_num_js__WEBPACK_IMPORTED_MODULE_15__.NumPrimitive,_src_integer_js__WEBPACK_IMPORTED_MODULE_14__["default"]);
const Num = (0,_src_factory_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_src_type_js__WEBPACK_IMPORTED_MODULE_20__["default"],_src_num_js__WEBPACK_IMPORTED_MODULE_15__.NumPrimitive,_src_num_js__WEBPACK_IMPORTED_MODULE_15__.NumFormat);
const Obj = (0,_src_factory_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_src_type_js__WEBPACK_IMPORTED_MODULE_20__["default"],_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjBase,_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjKeyValue,_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjEach,_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjCopyFilterMap,_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjWrite,_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjWriteSelf,_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjProto);
const Pojo = (0,_src_factory_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_src_type_js__WEBPACK_IMPORTED_MODULE_20__["default"],_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjBase,_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjKeyValue,_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjEach,_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjCopyFilterMap,_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjWrite,_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjWriteSelf,_src_pojo_js__WEBPACK_IMPORTED_MODULE_17__["default"]);
const Scalar = (0,_src_factory_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_src_type_js__WEBPACK_IMPORTED_MODULE_20__["default"],_src_scalar_js__WEBPACK_IMPORTED_MODULE_18__["default"]);
const Str = (0,_src_factory_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_src_type_js__WEBPACK_IMPORTED_MODULE_20__["default"],_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjBase,_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjKeyValue,_src_obj_js__WEBPACK_IMPORTED_MODULE_16__.ObjEach,_src_str_js__WEBPACK_IMPORTED_MODULE_19__["default"]);
const Tool = { Type: _src_type_js__WEBPACK_IMPORTED_MODULE_20__["default"], ArrLoop: _src_arr_js__WEBPACK_IMPORTED_MODULE_10__.ArrLoop };
const Test = { };
const Component = { };
const Shortcut = { d, assert, logError };

// export


/***/ }),

/***/ "./node_modules/quidphp-node-temp/src/arr.js":
/*!***************************************************!*\
  !*** ./node_modules/quidphp-node-temp/src/arr.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrBase": () => (/* binding */ ArrBase),
/* harmony export */   "ArrLoop": () => (/* binding */ ArrLoop),
/* harmony export */   "ArrWriteSelf": () => (/* binding */ ArrWriteSelf)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/quidphp-node-temp/index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/node/blob/master/LICENSE
 */
 
// arr
// script with some objects related to array manipulation

// import


// arrBase
// fonctions relatives à la lecture de tableau
const ArrBase = {
    
    // is
    // retourne vrai si la valeur est un tableau
    is: function(value) 
    {
        return Array.isArray(value);
    },
    
    
    // in
    // retourne vrai si la valeur est dans le tableau
    // retourne un boolean
    in: function(value,array) 
    {
        return (this.is(array))? Array.prototype.includes.call(array,value):null;
    },
    
    
    // keys
    // retourne un tableau avec clés du présent tableau
    keys: function(array)
    {
        this.typecheck(array);
        
        return Array.from(Array.prototype.keys.call(array));
    },
    
    
    // valueFirst
    // retourne le première valeur dans le tableau
    valueFirst: function(array)
    {
        this.typecheck(array);
        return (array.length)? array[0]:undefined;
    },
    
    
    // valueLast 
    // retourne la dernière valeur dans le tableau
    valueLast: function(array)
    {
        this.typecheck(array);
        return (array.length)? array[array.length-1]:undefined;
    },
    
    
    // keyFirst
    // retourne la première clé d'un tableau
    keyFirst: function(array)
    {
        this.typecheck(array);
        return (array.length)? 0:undefined;
    },
    
    
    // keyLast
    // retourne la dernière clé d'un tableau
    keyLast: function(array)
    {
        this.typecheck(array);
        return (array.length)? array.length-1:undefined;
    },
    
    
    // search
    // retourne l'index de la valeur dans le tableau
    search: function(value,array) 
    {
        let r = null;
        this.typecheck(array);
        
        r = Array.prototype.indexOf.call(array,value);
        r = (r === -1)? null:r;
        
        return r;
    },
    
    
    // slice
    // fait un slice sur un tableau avec un start et un end
    slice: function(start,end,array)
    {
        let r = null;
        this.typecheck(array);
        
        start = _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(start)? start:0;
        end = _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(end)? end:undefined;
        r = Array.prototype.slice.call(array,start,end);
        
        return r;
    },
    
    
    // sliceStart
    // fait un slice à partir du début d'un tableau
    sliceStart: function(start,array)
    {
        return this.slice(start,true,array);
    },
    
    
    // merge
    // retourne un nouveau tableau avec le contenu de tous les tableaux merged (concat)
    merge: function(array)
    {
        let r = null;
        this.typecheck(array);
        
        const args = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.sliceStart(1,arguments);
        r = Array.prototype.concat.apply(array,args);
        
        return r;
    },
    
    
    // clean
    // retourne un nouveau tableau avec les valeurs vides retirés
    clean: function(array)
    {
        return this.filter(array,function(ele) {
            return _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isNotReallyEmpty(ele);
        });
    },
    
    
    // valueStrip
    // permet de retourner un nouveau tableau sans la valeur donné en argument
    valueStrip: function(value,array) 
    {
        return this.filter(array,function(v) {
            return (v === value)? false:true;
        });
    },
    

    // find
    // retourne la première valeur de l'objet dont le callback retourne true, utilise la méthode du prototype
    find: function(array,callback) {
        this.typecheck(array);
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);
        
        return Array.prototype.find.call(array,callback);
    },
    
    
    // some
    // vérifie qu'au moins une entrée du tableau passe le test de la fonction anonyme
    some: function(array,callback)
    {
        this.typecheck(array);
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);
        
        return Array.prototype.some.call(array,callback);
    },
    
    
    // every
    // vérifie que toutes les entrée du tableau passe le test de la fonction anonyme
    every: function(array,callback)
    {
        this.typecheck(array);
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);
        
        return Array.prototype.every.call(array,callback);
    },
    
    
    // map
    // permet de créer un nouvel objet avec les valeurs changés selon la fonction de rappel, utilise la méthode du prototype
    map: function(array,callback)
    {
        this.typecheck(array);
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);
        
        return Array.prototype.map.call(array,callback);
    },
    
    
    // filter
    // permet de créer un nouvel objet avec seulement les entrées qui retournent true, utilise la méthode du prototype
    filter: function(array,callback)
    {
        this.typecheck(array);
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);
        
        return Array.prototype.filter.call(array,callback);
    },
    
    
    // reduce
    // retourne une valeur simple à partir d'un tableau
    // changement de l'ordre des arguments, de même la clé est envoyé au callback en troisième argument
    reduce: function(r,array,callback)
    {
        this.typecheck(array);
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);
        
        return Array.prototype.reduce.call(array,callback,r);
    },
    
    
    // column
    // retourne un tableau avec une seule propriété de chaque pojo dans le tableau
    column: function(prop,array)
    {
        const r = [];
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(prop,true);
        
        this.each(array,function(value) {
            if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(value) && _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.keyExists(prop,value))
            r.push(value[prop]);
        });
        
        return r;
    },
    
    
    // new
    // retourne la cible pour la copie
    new: function()
    {
        return [];
    }
}


// arrWriteSelf
// fonctions relatives à l'écriture sur des tableaux (en référence)
const ArrWriteSelf = {
    
    // mergeRef
    // permet de fusionner plusieurs tableaux dans le premier tableau
    // le premier tableau est modifié
    mergeRef: function(array)
    {
        this.typecheck(array);
        let r = array;
        const inst = this;
        const args = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.sliceStart(1,arguments);
        
        this.each(args,function(value) {
            if(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(value))
            value = [value];
            
            Array.prototype.push.apply(r,value);
        });
        
        return r;
    },
    
    
    // reverseRef
    // permet de renverser le tableau courant
    reverseRef: function(array)
    {
        this.typecheck(array);
        return array.reverse();
    },
    
    
    // spliceValue
    // permet de retourner le même tableau sans la valeur donné en argument
    // retourne la valeur splice
    spliceValue: function(value,array,replace)
    {
        let r = null;
        let index = this.search(value,array);
        this.typecheck(array);
        
        let args = [index,1];
        if(typeof(replace) !== 'undefined')
        args.push(replace);
        
        r = Array.prototype.splice.apply(array,args);
        
        return r;
    }
}

// arrLoop
// fonctions relatives à certains loops spéciaux
const ArrLoop = {
    
    // timeouts
    // permet de lancer un callback sur chaque element du tableau avec timeout différent (selon index)
    timeouts: function(array,timeout,indexTimeout,callback) 
    {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.typecheck(timeout);
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.typecheck(indexTimeout);
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);
        
        return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(array,function(value, index) {
            const funcTimeout = timeout + (index * indexTimeout);
            
            const funcWrap = function() {
                callback(value,index,funcTimeout);
            }
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.timeout(funcTimeout,funcWrap);
        });
    },
    
    
    // oddEven
    // permet d'appeler une méthode de callback différents selon si l'élément est odd ou even
    oddEven: function(array,funcOdd,funcEven) 
    {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typechecks([funcOdd,funcEven],false);
        
        return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(array,function(value,index) {
            const key = index + 1;
            
            if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.isOdd(key))
            {
                if(funcOdd != null)
                funcOdd(value,index)
            }
            
            else if(funcEven != null)
            funcEven(value,index);
        });
    }
}

// export


/***/ }),

/***/ "./node_modules/quidphp-node-temp/src/arrLike.js":
/*!*******************************************************!*\
  !*** ./node_modules/quidphp-node-temp/src/arrLike.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/quidphp-node-temp/index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/node/blob/master/LICENSE
 */
 
// arrLike
// script with some functions related to array like management

// import


// arrLikeRead
// méthodes pour des variables comme des tableaux
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    
    // is
    // retourne vrai si la variable est comme un tableau (array-like)
    // retourne faux si la valeur est un array
    is: function(value)
    {
        let r = false;
        
        if(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(value) && !_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.is(value) && !_index_js__WEBPACK_IMPORTED_MODULE_0__.Func.is(value) && !_index_js__WEBPACK_IMPORTED_MODULE_0__.Env.isWindow(value))
        {
            const type = _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.type(value);
            const length = !!value && "length" in value && value.length;
            r = type === 'array' || length === 0 || typeof length === "number" && length > 0 && (length - 1) in value;
        }
        
        return r;
    },
    
    
    // toArray
    // retourne la même valeur si c'est un tableau, sinon converti le array like
    // moins stricte que le toArray de obj
    toArray: function(value) 
    {
        return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(value)? value:(this.is(value) ? Array.from(value):null);
    }
});

/***/ }),

/***/ "./node_modules/quidphp-node-temp/src/bool.js":
/*!****************************************************!*\
  !*** ./node_modules/quidphp-node-temp/src/bool.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/node/blob/master/LICENSE
 */
 
// bool
// methods for bool primitive type
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    
    // is
    // retourne vrai si la valeur est une fonction
    is: function(value) 
    {
        return typeof(value) === 'boolean';
    },
    
    
    // toInt
    // retourne un numéro à partir d'un boolean
    toInt: function(value)
    {
        let r = null;
        this.typecheck(value);
        
        if(value === true)
        r = 1;

        else if(value === false)
        r = 0;

        return r;
    },
    
    
    // toggle
    // permet de faire un toggle sur une valeur boolean
    toggle: function(value)
    {
        let r = null;
        this.typecheck(value);
        
        if(value === true)
        r = false;

        else if(value === false)
        r = true;

        return r;
    }
});

/***/ }),

/***/ "./node_modules/quidphp-node-temp/src/datetime.js":
/*!********************************************************!*\
  !*** ./node_modules/quidphp-node-temp/src/datetime.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/quidphp-node-temp/index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/node/blob/master/LICENSE
 */
 
// datetime
// script with functions related to date and time

// import


// datetime
// méthodes relatives à la date et au temps
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    
    // now
    // retourne le timestamp courant
    now: function() 
    {
        return (new Date).getTime();
    },
    
    
    // localeFormat
    // méthode de base pour formatter une date
    // locale doit être fourni en premier argumnet
    localeFormat: function(locale,date,option)
    {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(locale);
        date = (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(date))? new Date(date):new Date();
        
        return date.toLocaleString(locale,option);
    },
    
    
    // year
    // retourne l'année courante
    year: function()
    {
        return (new Date).getFullYear();
    },
    
    
    // ymd
    // retourne le format en ymd
    // possible de spécifier le year, month et day
    ymd: function(timestamp,year,month,day) {
        let r = (_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(timestamp))? new Date(timestamp*1000):new Date;
        
        r.setHours(0,0,0);
        
        if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(day))
        r.setDate(day);
        
        if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(month))
        r.setMonth(month - 1);
        
        if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(year))
        r.setFullYear(year);

        return r.toISOString().substr(0, 10);
    },
    
    
    // his
    // retourne le temps en format hh:mm:ss
    his: function(timestamp) {
        const date = (_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(timestamp))? new Date(timestamp*1000):new Date;
        const dateText = date.toTimeString();
        
        return dateText.split(' ')[0];
    }
});

/***/ }),

/***/ "./node_modules/quidphp-node-temp/src/debug.js":
/*!*****************************************************!*\
  !*** ./node_modules/quidphp-node-temp/src/debug.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/quidphp-node-temp/index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/node/blob/master/LICENSE
 */
 
// debug
// script with functions related to debugging

// import


// debug
// fonctions relatives au débogagge
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new function()
{   
    // status debug, peut être scalar
    let debug = false;
    
    
    // status
    // active ou désactive le débogagge
    this.status = (function()
    {
        return function(value) {
            if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.is(value))
            debug = value;
            
            return debug;
        }
    })()
    
    
    // is
    // retourne vrai si la valeur pour le débogagge est le même
    this.is = function(value)
    {
        return debug === true || debug === value;
    }
    
    
    // assertThrow
    // comme assert mais lance une erreur
    this.assertThrow = function(value) 
    {
        if(value !== true)
        throw new Error();
    },
    
    
    // logError
    // permet de logger une erreur
    this.logError = function(value)
    {
        console.error('Catched',value);
    }
});

/***/ }),

/***/ "./node_modules/quidphp-node-temp/src/env.js":
/*!***************************************************!*\
  !*** ./node_modules/quidphp-node-temp/src/env.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/quidphp-node-temp/index.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/node/blob/master/LICENSE
 */

// env
// methods related to javascript environnement

// import


// javascript
// méthodes relatives à l'environnement javascript
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    
    // isNode
    // retourne vrai si l'environnement courant est dans node
    isNode: function() 
    {
        return (typeof process !== 'undefined') && (typeof process.release !== 'undefined') && (process.release.name === 'node');
    },
    
    
    // isBrowser
    // retourne vrai si l'environnement courant est dans le navigateur
    isBrowser: function() 
    {
        return !this.isNode();
    },
    
    
    // isWindow
    // retourne vrai si la variable est un window ou un proxy
    isWindow: function(value) 
    {
        let r = false;
        
        if(this.isBrowser() && _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is(value))
        r = value instanceof Window || value.window === value;
        
        return r;
    },
    
    
    // isTarget
    // retourne vrai si la variable est est un target html
    // soit window, document, element, textNode, doctype
    isTarget: function(value) 
    {
        let r = false;
        
        if(this.isBrowser() && _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is(value))
        r = value instanceof HTMLElement || value instanceof HTMLTemplateElement || value instanceof DocumentFragment || value === document || this.isWindow(value) || _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](value.nodeType,[Node.TEXT_NODE,Node.DOCUMENT_TYPE_NODE]);
        
        return r;
    }
});

/***/ }),

/***/ "./node_modules/quidphp-node-temp/src/factory.js":
/*!*******************************************************!*\
  !*** ./node_modules/quidphp-node-temp/src/factory.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/node/blob/master/LICENSE
 */
 
// factory
// script with a method to create the objects with prototype

// factory
// méthode pour merger plusieurs objets, avec support pour prototype
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(prototype)
{
    const r = Object.create((prototype === true)? {}:(prototype || null));
    const args = Array.prototype.slice.call(arguments,1);
    Object.assign.apply(null,[r].concat(args));
    
    return r;
}

/***/ }),

/***/ "./node_modules/quidphp-node-temp/src/func.js":
/*!****************************************************!*\
  !*** ./node_modules/quidphp-node-temp/src/func.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/quidphp-node-temp/index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/node/blob/master/LICENSE
 */
 
// handler
// script with methods related to functions

// import


// funcObj
// méthodes relatives à des valeurs fonctions
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    
    // is
    // retourne vrai si la valeur est une fonction
    is: function(value) 
    {
        return typeof value === "function" && typeof value.nodeType !== "number";
    },
    
    
    // noop
    // retourne une fonction vide
    noop: function() 
    {
        return function() {};
    },
    
    
    // async
    // comme timeout, mais la durée est automatiquement 0
    async: function(func,context) 
    {
        return this.timeout(0,func,context);
    },
    
    
    // timeout
    // permet d'appeler une fois après un timeout
    // si timeout n'est pas integer, utlise 0
    // retourne le timeout
    timeout: function(delay,func,context) 
    {
        this.typecheck(func);
        
        if(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(delay))
        delay = 0;
        
        return setTimeout(func.bind(context),delay);
    },
    
    
    // debounce
    // permet d'appeler une fonction une seule fois après le délai spécifié par le timeout
    // retourne une nouvelle fonction
    debounce: function(delay,func) 
    {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.typecheck(delay);
        this.typecheck(func);
        const $inst = this;
        let timeout;
        
        return function() {
            const $this = this;
            const args = arguments;
            
            if(timeout)
            clearTimeout(timeout);
            
            timeout = $inst.timeout(delay,function() {
                func.apply($this,args);
            });
        }
    },
    
    
    // debounceOnce
    // comme debounce mais la function ne pourra être appelé qu'une fois
    debounceOnce: function(delay,func)
    {
        let once = false;
        Func.typecheck(func);
        
        return this.debounce(delay,function() {
            const args = arguments;
            
            if(once === false)
            {
                func.apply(this,args);
                once = true;
            }
        });
    },
    
    
    // throttle
    // permet de limiter le rythme d'appel à une fonction
    // retourne une nouvelle fonction
    throttle: function(delay,func) 
    {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.typecheck(delay);
        this.typecheck(func);
        const $inst = this;
        let canCall = true;
        
        return function() {
            const $this = this;
            
            if(canCall === true)
            {
                func.apply($this,arguments);
                canCall = false;
                
                $inst.timeout(delay,function() {
                    canCall = true;
                });
            }
        }
    }
});

/***/ }),

/***/ "./node_modules/quidphp-node-temp/src/html.js":
/*!****************************************************!*\
  !*** ./node_modules/quidphp-node-temp/src/html.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/quidphp-node-temp/index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/node/blob/master/LICENSE
 */
 
// html
// script containing event listeners functions for target elements

// import


// html
// méthodes relatives à la génération de html
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    
    // valueAttr
    // retourne l'attribut à utiliser pour la valeur d'un tag selflcosing
    valueAttr: {
        br: 'data-value',
        hr: 'data-value',
        img: 'src',
        meta: 'content',
        link: 'href',
        input: 'value'
    },
    
    
    // htmlEscapes
    // convertiseur pour les caractères html à escape
    htmlEscapes: {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    },
    
    
    // isSelfClosing
    // retourne vrai si la balise se ferme dans l'ouverture
    isSelfClosing: function(tag) 
    {
        return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](tag,['br','hr','img','meta','link','input'])
    },
    
    
    // escape
    // permet de faire un escape des caractères html dangereux sur une string
    // transforme < > ' " &
    escape: function(value)
    {
        let r = null;
        const $inst = this;
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value);
        
        return value.replace(/[&<>"']/g,function(value) {
            return $inst.htmlEscapes[value];
        });
    },
    
    
    // start
    // ouvre une tag html
    start: function(tag,value,attr) 
    {
        let r = '';
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(tag,true);
        const isSelfClosing = this.isSelfClosing(tag);
        const attrStr = this.attr(attr,tag,value);
        
        r += "<";
        r += tag;
        
        if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(attrStr))
        {
            r += " ";
            r += attrStr;
        }
        
        if(isSelfClosing === true)
        r += "/>";
        
        else
        {
            r += ">";
            r += this.value(value);
        }
        
        return r;
    },
    
    
    // end
    // ferme une tag html
    end: function(tag) 
    {
        let r = '';
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(tag,true);
        const isSelfClosing = this.isSelfClosing(tag);
        
        if(isSelfClosing === false)
        {
            r += "</";
            r += tag;
            r += ">";
        }
        
        return r;
    },
    
    
    // value
    // permet de préparer la valeur du input
    value: function(value,isAttr)
    {
        if(value === true)
        value = (isAttr === true)? 1:'&nbsp;';
        
        else if(value === false)
        value = (isAttr === true)? 0:'';
        
        if(isAttr !== true)
        {
            if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(value))
            value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.values(value);
            
            if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(value))
            value = value.join(', ');
        }
        
        return _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.cast(value,true);
    },
    
    
    // attr
    // génère la string d'attribut pour la balise
    // possible de fournir une tag et une valeur
    attr: function(attr,tag,value)
    {
        let r = '';
        const isSelfClosing = this.isSelfClosing(tag);
        attr = this.attrToPojo(attr);
        
        if(isSelfClosing === true && _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.keyExists(tag,this.valueAttr))
        {
            const valueAttr = _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.get(tag,this.valueAttr);
            
            if(valueAttr != null)
            {
                const current = _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.get(valueAttr,attr);
                
                if(current == null || value != null)
                attr[valueAttr] = this.value(value,true);
            }
        }
        
        attr = this.prepareAttr(attr);
        r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.str(attr,"="," ",true);
        
        return r;
    },
    
    
    // attrToPojo
    // permet de transformer un argument attr en pojo
    attrToPojo: function(attr)
    {
        let r = {};
        
        if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(attr))
        r = {class: attr};
        
        if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(attr))
        r = attr;
        
        return r;
    },
    
    
    // prepareAttr
    // utilisé pour préparer un objet attr
    // remplace les clés camelcase
    // gestion de la clé data contenant un objet
    // gestion des classes en tableau
    prepareAttr: function(attr)
    {
        let r = {};
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.typecheck(attr);
        
        const defaultKeyValue = function(key,value) {
            return {
                key: _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.fromCamelCase('-',key),
                value: (_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.is(value))? _index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.toInt(value):value
            } 
        };
        
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.each(attr,function(value,key) {
            const keyValue = defaultKeyValue(key,value);
            key = keyValue.key;
            value = keyValue.value;
            
            if(key === 'class' && _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(value))
            value = value.join(' ');
            
            else if(key === 'data' && _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(value))
            {
                _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.each(value,function(value2,key2) {
                    const keyValue2 = defaultKeyValue(key2,value2);
                    const newKey = 'data-'+keyValue2.key;
                    r[newKey] = keyValue2.value;
                });
                value = null;
            }
            
            if(value != null)
            r[key] = value;
        });
        
        return r;
    },
    
    
    // tag
    // ouvre et ferme une tag avec contenu et attribut
    tag: function(tag,value,attr) 
    {
        return this.start(tag,value,attr)+this.end(tag);
    },
    
    
    // tagCond
    // ouvre et ferme une tag avec contenu et attribut seulement si la valeur n'est pas vide
    tagCond: function(tag,value,attr)
    {
        return (_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isNotEmpty(this.value(value)))? this.tag(tag,value,attr):'';
    },
    
    
    // div
    // ouvre et ferme une tag div avec contenu et attribut
    div: function(value,attr) 
    {
        return this.tag('div',value,attr);
    },
    
    
    // span
    // ouvre et ferme une tag span avec contenu et attribut
    span: function(value,attr) 
    {
        return this.tag('span',value,attr);
    },
    
    
    // ul
    // ouvre et ferme une tag ul avec contenu et attribut
    ul: function(value,attr) 
    {
        return this.tag('ul',value,attr);
    },
    
    
    // li
    // ouvre et ferme une tag li avec contenu et attribut
    li: function(value,attr) 
    {
        return this.tag('li',value,attr);
    },
    
    
    // input
    // ouvre et ferme une tag input avec valeur et attribut
    input: function(value,attr) 
    {
        return this.tag('input',value,_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.replace({type: 'text'}, this.attrToPojo(attr)));
    },
    
    
    // button
    // ouvre et ferme une tag button avec contenu et attribut
    button: function(value,attr) 
    {
        return this.tag('button',value,_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.replace({type: 'button'}, this.attrToPojo(attr)));
    }
});

/***/ }),

/***/ "./node_modules/quidphp-node-temp/src/integer.js":
/*!*******************************************************!*\
  !*** ./node_modules/quidphp-node-temp/src/integer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/quidphp-node-temp/index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/node/blob/master/LICENSE
 */

// integer
// methods related to integer numbers

// import


// integerPrimitive
// méthodes pour des valeurs numérique integer
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    
    // is
    // retourne vrai si la valeur est un int
    is: function(value)
    {
        return _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is(value) && parseInt(value) === value;
    },
    
    
    // cast
    // retourne le nombre sous forme de int
    cast: function(value)
    {
        return (_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.isNotBool(value) && value !== '')? parseInt(value):null;
    },
    
    
    // toBool
    // retourne un booléean à partir d'un int
    toBool: function(value)
    {
        let r = null;
        this.typecheck(value);
        
        if(value === 1)
        r = true;

        else if(value === 0)
        r = false;
        
        return r;
    },
    
    
    // toggle
    // toggle des valeurs primaires (1/0)
    toggle: function(value)
    {
        let r = null;
        this.typecheck(value);
        
        if(value === 1)
        r = 0;

        else if(value === 0)
        r = 1;

        return r;
    },
    
    
    // range
    // retourne un tableau range
    range: function(min,max,inc)
    {
        let r = null;
        min = (min == null)? 1:min;
        inc = (inc == null)? 1:inc;
        
        if(this.isPositive(min,true) && this.isPositive(max,true) && this.isPositive(inc))
        {
            const length = Math.floor((max - min) / inc) + 1;
            const arr = Array(length).fill(min);
            
            r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.map(arr,function(x,y) {
                return x + y * inc;
            });
        }
        
        return r;
    },
    
    
    // unique
    // retourne un int jamais utilisé, utile pour générer des ids unique
    unique: (function(value)
    {
        let i = 0;
        return function() {
            return i++;
        };
    })()
});

/***/ }),

/***/ "./node_modules/quidphp-node-temp/src/json.js":
/*!****************************************************!*\
  !*** ./node_modules/quidphp-node-temp/src/json.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/quidphp-node-temp/index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/node/blob/master/LICENSE
 */
 
// json
// script with methods related to json format

// import


// json
// méthodes relatives à l'encodage et décodage de string json
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    
    // encode
    // encode une valeur en json
    encode: function(value) 
    {
        return JSON.stringify(value);
    },
    
    
    // decode
    // decode une valeur à partir d'un json
    decode: function(value) 
    {
        return JSON.parse(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value));
    },
    
    
    // recode
    // encode et decode une valeur
    // permet de faire des copies complêtes
    recode: function(value) 
    {
        return this.decode(this.encode(value));
    }
});

/***/ }),

/***/ "./node_modules/quidphp-node-temp/src/nav.js":
/*!***************************************************!*\
  !*** ./node_modules/quidphp-node-temp/src/nav.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/quidphp-node-temp/index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/node/blob/master/LICENSE
 */
 
// nav
// script with helper functions related to navigation and pagination

// import


// nav
// méthodes relatives à une navigation via index
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    
    // isFirst
    // retourne vrai si la valeur est la première
    isFirst: function(value,max) 
    {
        return (value === this.getFirst(max));
    },
    
    
    // hasPrev
    // retourne vrai s'il y a une valeur précédente
    hasPrev: function(value,max,loop) 
    {
        return (this.getPrev(value,max,loop) != null);
    },
    
    
    // hasNext
    // retourne vrai s'il y a une valeur suivante
    hasNext: function(value,max,loop) 
    {
        return (this.getNext(value,max,loop) != null);
    },
    
    
    // isLast
    // retourne vrai si la valeur est la dernière
    isLast: function(value,max) 
    {
        return (value === this.getLast(max));
    },
    
    
    // isIndex
    // retourne vrai si la valeur est comprise dans le maximum
    isIndex: function(value,max)
    {
        return (this.getIndex(value,max) === value);
    },
    
    
    // getFirst
    // retourne la premier valeur
    getFirst: function(max)
    {
        return (_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isPositive(max))? 0:null;
    },
    
    
    // getPrev
    // retourne la valeur précédente
    getPrev: function(value,max,loop)
    {
        let r = null;

        if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isPositive(max))
        {
            const last = (max - 1);
            value = (_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(value))? value:last;
            const newVal = (value - 1);
            
            if(newVal < 0)
            {
                if(loop === true)
                r = last;
            }
            
            else
            r = newVal;
        }
        
        return r;
    },
    
    
    // getNext
    // retourne la valeur suivante
    getNext: function(value,max,loop)
    {
        let r = null;
        
        if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isPositive(max))
        {
            const last = (max - 1);
            value = (_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(value))? value:-1;
            const newVal = (value + 1);
            
            if(newVal > last)
            {
                if(loop === true)
                r = 0;
            }
            
            else
            r = newVal;
        }
        
        return r;
    },
    
    
    // getLast
    // retourne la dernière valeur
    getLast: function(max)
    {
        return (_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isPositive(max))? (max - 1):null;
    },
    
    
    // getIndex
    // retourne la valeur si elle elle comprise dans le maximum
    getIndex: function(value,max)
    {
        return (_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(value) && value >= 0 && _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isPositive(max) && value < max)? value:null;
    },
    
    
    // index
    // retourne l'index du nouvel élément
    index: function(value,current,max,loop)
    {
        let r = null;
        
        if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isPositive(max))
        {
            if(value === 'first')
            r = this.getFirst(max);
            
            else if(value ==='last')
            r = this.getLast(max);
            
            else if(value ==='prev')
            r = this.getPrev(current,max,loop);
            
            else if(value ==='next')
            r = this.getNext(current,max,loop);
            
            else if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(value))
            r = this.getIndex(value,max);
        }
        
        return r;
    },
    
    
    // indexObj
    // retourne l'objet de l'index du nouvel élément
    indexObj: function(value,current,objs,loop)
    {
        let r = null;
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.typechecks(objs,false);
        
        if(objs != null)
        {
            const max = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(objs);
            
            if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is(value))
            value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.search(value,objs);
            
            if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is(current))
            current = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.search(current,objs);
            
            const index = this.index(value,current,max,loop);
            
            if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(index))
            r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.get(index,objs);
        }
        
        return r;
    }
});

/***/ }),

/***/ "./node_modules/quidphp-node-temp/src/num.js":
/*!***************************************************!*\
  !*** ./node_modules/quidphp-node-temp/src/num.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumFormat": () => (/* binding */ NumFormat),
/* harmony export */   "NumPrimitive": () => (/* binding */ NumPrimitive)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/quidphp-node-temp/index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/node/blob/master/LICENSE
 */

// num
// script with functions related to numbers

// import


// numPrimitive
// méthodes pour des valeurs numériques
const NumPrimitive =  {
    
    // is
    // retourne vrai si la valeur est un nombre
    is: function(value)
    {
        let r = false;
        const type = _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.type(value);
        
        if(type === "number" || type === "string")
        r = !isNaN(value - parseFloat(value));
        
        return r;
    },
    
    
    // isEmpty
    // retourne vrai si c'est une variable numérique vide
    isEmpty: function(value)
    {
        return (this.is(value))? _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEmpty(this.cast(value)):false;
    },
    
    
    // isNotEmpty
    // retourne vrai si c'est une variable numérique non-vide
    isNotEmpty: function(value)
    {
        return (this.is(value))? _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isNotEmpty(this.cast(value)):false;
    },
    
    
    // isPositive
    // retourne vrai si c'est une variable numérique positive (> 0)
    // si allowZero est true, retourne true si zero
    isPositive: function(value,allowZero)
    {
        let r = false;
        
        if(this.is(value))
        {
            value = this.cast(value);
            
            if(value > 0 || (allowZero === true && value === 0))
            r = true;
        }
        
        return r;
    },
    
    
    // isNegative
    // retourne vrai si c'est une variable numérique positive (< 0)
    // si allowZero est true, retourne true si zero
    isNegative: function(value,allowZero)
    {
        let r = false;
        
        if(this.is(value))
        {
            value = this.cast(value);
            
            if(value < 0 || (allowZero === true && value === 0))
            r = true;
        }
        
        return r;
    },
    
    
    // isOdd
    // vérifie que la valeur est un chiffre impair
    isOdd: function(value)
    {
        return (this.is(value) && !_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(value / 2));
    },
    
    
    // isEven
    // vérifie que la valeur est un chiffre pair
    isEven: function(value)
    {
        return (this.is(value) && _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(value / 2));
    },
    
    
    // isNan
    // retourne vrai si la valeur est nan
    isNan: function(value)
    {
        return isNaN(value);
    },
    
    
    // cast
    // retourne la variable sous forme de nombre
    cast: function(value)
    {
        return (_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.isNotBool(value) && value !== '')? parseFloat(value):null;
    },
    
    
    // str
    // retourne le nombre sous forme de string
    str: function(value)
    {
        this.typecheck(value);
        return Number(value).toString();
    }
}


// numFormat
// contient des méthodes pour formatter un chiffre
const NumFormat = {
    
    // decimal
    // permet de formatter un nombre en forçant le nombre de décimal
    decimal: function(value,decimal)
    {
        this.typecheck(value);
        decimal = (_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(decimal))? decimal:2;
        
        return value.toFixed(decimal);
    },

    // round
    // arrondi le nombre sous forme de int
    round: function(value)
    {
        value = this.cast(value);
        this.typecheck(value);

        return Math.round(value);
    },
    
    
    // floor
    // amène le nombre au int plus petit
    floor: function(value)
    {
        value = this.cast(value);
        this.typecheck(value);
        
        return Math.floor(value);
    },
    
    
    // ceil
    // amène le nombre au int plus grand
    ceil: function(value)
    {
        value = this.cast(value);
        this.typecheck(value);
        
        return Math.ceil(value);
    }
}

// export


/***/ }),

/***/ "./node_modules/quidphp-node-temp/src/obj.js":
/*!***************************************************!*\
  !*** ./node_modules/quidphp-node-temp/src/obj.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjBase": () => (/* binding */ ObjBase),
/* harmony export */   "ObjCopyFilterMap": () => (/* binding */ ObjCopyFilterMap),
/* harmony export */   "ObjEach": () => (/* binding */ ObjEach),
/* harmony export */   "ObjFactory": () => (/* binding */ ObjFactory),
/* harmony export */   "ObjKeyValue": () => (/* binding */ ObjKeyValue),
/* harmony export */   "ObjProto": () => (/* binding */ ObjProto),
/* harmony export */   "ObjWrite": () => (/* binding */ ObjWrite),
/* harmony export */   "ObjWriteSelf": () => (/* binding */ ObjWriteSelf)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/quidphp-node-temp/index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/node/blob/master/LICENSE
 */
 
// obj
// script with a set of helper functions related to objects

// import


// objBase
// base methods for objects
const ObjBase = {
    
    // is
    // retourne vrai si c'est un objet
    is: function(value)
    {
        return _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.type(value) === 'object';
    },

    
    // isEqual
    // compare plusieurs objets (ou array)
    // retourne vrai si les valeurs contenus sont égales
    isEqual: function() 
    {
        let r = false;
        const args = Array.from(arguments);
        
        if(args.length > 1 && this.is(args[0]))
        r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEqual.apply(null,args);
        
        return r;
    },
    
    
    // length
    // retourne la longueur de l'objet
    length: function(value) 
    {
        this.typecheck(value);
        const keys = Object.keys(value);
        
        return keys.length;
    }
}


// objKeyValue
// method related to keys and values within an object
const ObjKeyValue = {
    
    // isKey
    // retourne vrai si la valeur est une clé de propriété valide
    isKey: function(prop)
    {
        return _index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.isNotBool(prop);
    },
    
    
    // keyExists
    // retourne vrai si l'objet a la propriété, ne cherche pas dans le prototype
    keyExists: function(prop,obj)
    {
        return (this.isKey(prop) && this.is(obj))? obj.hasOwnProperty(prop):false
    },
    
    
    // keys
    // retourne les clés de l'objet
    keys: function(obj)
    {
        this.typecheck(obj);
        return Object.keys(obj);
    },
    
    
    // values
    // retourne les valeurs de l'objet
    values: function(obj)
    {
        this.typecheck(obj);
        return Object.values(obj);
    },
    
    
    // get
    // permet de retourner la valeur d'une propriété d'un objet
    get: function(prop,obj)
    {
        this.typecheck(obj);
        return (this.keyExists(prop,obj))? obj[prop]:undefined;
    },
    
    
    // toArray
    // retourne un array à partir de la valeur
    toArray: function(value)
    {
        this.typecheck(value);
        return Array.from(this.values(value));
    },
    
    
    // valueFirst
    // retourne le première valeur dans l'object
    valueFirst: function(obj)
    {
        let r = undefined;
        const keys = this.keys(obj);
        
        if(keys != null)
        {
            const key = keys[0];
            r = obj[key];
        }
        
        return r;
    },
    
    
    // valueLast 
    // retourne la dernière valeur dans l'objet
    valueLast: function(obj)
    {
        let r = undefined;
        const keys = this.keys(obj);
        
        if(keys != null)
        {
            const key = keys[keys.length-1];
            r = obj[key];
        }
        
        return r;
    },
    
    
    // find
    // retourne la première valeur de l'objet dont le callback retourne true
    find: function(loop,callback)
    {
        let r = undefined;
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);
        
        this.each(loop,function(value,key) {
            const result = callback(value,key);
            
            if(result)
            {
                r = value;
                return false;
            }
        });
        
        return r;
    },
    
    
    // findKey
    // retourne la première clé dont la valeur remplit la condition de la closure
    // la clé est envoyé en deuxième argument
    findKey: function(loop,callback) 
    {
        let r = null;
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);
        
        this.each(loop,function(value,key) {
            if(callback(value,key))
            {
                r = key;
                return false;
            }
        });

        return r;
    },
    
    
    // some
    // vérifie qu'au moins une entrée de l'objet passe le test de la fonction anonyme
    some: function(loop,callback)
    {
        let r = false;
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);
        
        this.each(loop,function(value,key) {
            if(callback(value,key))
            {
                r = true;
                return false;
            }
        });

        return r;
    },
    
    
    // every
    // vérifie que toutes les entrée de l'objet passe le test de la fonction anonyme
    every: function(loop,callback)
    {
        let r = true;
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);
        
        this.each(loop,function(value,key) {
            if(!callback(value,key))
            return r = false;
        });

        return r;
    },
    
    
    // reduce
    // retourne une valeur simple à partir d'un tableau
    reduce: function(r,loop,callback)
    {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);
        
        this.each(loop,function(value,key) {
            r = callback(r,value,key);
        });
        
        return r;
    },
    
    
    // accumulate
    // comme reduce, mais le return est automatiquement append
    // si le callback retourne null, continue
    accumulate: function(r,loop,callback)
    {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);
        
        this.each(loop,function(value,key) {
            const result = callback(value,key);

            if(result == null)
            return true;

            else if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(r))
            r.push(result);
            
            else if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(r))
            r[key] = result;
            
            else
            r += result;
        });

        return r;
    },
    
    
    // str
    // permet de convertir un objet en string
    // possible de spécifier deux séparateurs
    // possible de quote les valeurs (à ce moment html escape est utilisé)
    str: function(obj,separator,separator2,quote) 
    {
        const $inst = this;
        separator = (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(separator))? separator:'=';
        separator2 = (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(separator2))? separator2:' ';
        
        return this.reduce('',obj,function(r,value,key) {
            if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(key))
            {
                value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.cast(value,true);
                
                if(quote === true)
                value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.quote(value,false,true);
                
                if(r.length)
                r += separator2;
                
                r += key;
                r += separator;
                r += value;
                
                return r;
            }
        });
    },
    
    
    // climb
    // permet de grimper dans un objet à partir d'un tableau
    // si on passe une string ou divise par /
    climb: function(array,r) 
    {
        if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(array))
        array = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.explode("/",array);
        
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.typecheck(array);
        this.typecheck(r);
        const $inst = this;
        
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(array,function(value) {
            if($inst.keyExists(value,r))
            r = r[value];
            
            else
            {
                r = undefined;
                return false;
            }
        });
        
        return r;
    }
}


// objEach
// methods for looping over an object
const ObjEach = {
    
    // each
    // méthode utilisé pour faire un for each sur un array, array like, un objet ou une string
    // retourne true si le loop a complêté
    each: function(loop,callback) 
    {
        let r = true;
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);
        let keys = this.keys(loop);
        let key;
        let value;
        let result;
        
        for (var i = 0; i < keys.length; i++) 
        {
            key = keys[i];
            value = loop[key];
            result = callback(value,key);
            
            if(result === false)
            {
                r = false;
                break;
            }
        }
        
        return r;
    }
}


// objCopyFilterMap
// methods for copying, filtering and map an object
const ObjCopyFilterMap = {
    
    // copy
    // permet de copier un objet
    copy: function(value)
    {
        this.typecheck(value);
        return Object.assign(this.new(),value);
    },
    
    
    // new
    // retourne la cible pour créer un nouvel objet du même type
    new: function()
    {
        return {};
    },
    
    
    // filter
    // permet de créer un nouvel objet avec seulement les entrées qui retournent true
    filter: function(loop,callback)
    {
        let r = this.new();
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);
        const keepKey = (Array.isArray(r))? false:true;
        
        this.each(loop,function(value,key) {
            const result = callback(value,key);
            key = (keepKey === false)? r.length:key;
            
            if(result)
            r[key] = value;
        });
        
        return r;
    },
    
    
    // map
    // permet de créer un nouvel objet avec les valeurs changés selon la fonction de rappel
    map: function(loop,callback)
    {
        let r = this.new();
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(callback);
        
        this.each(loop,function(value,key) {
            const result = callback(value,key);
            r[key] = result;
        });
        
        return r;
    }
}


// objWrite
// methods for written on a copy of the object
const ObjWrite = {
    
    // set
    // permet d'ajouter une nouvelle propriété à un objet
    // l'objet retourner est une copie
    set: function(prop,value,obj)
    {
        let r = this.copy(obj);
        r[prop] = value;
        
        return r;
    },
    
    
    // unset
    // permet de retirer une propriété d'un objet
    // l'objet retourner est une copie
    unset: function(prop,obj)
    {
        let r = this.copy(obj);
        delete r[prop];
        
        return r;
    },

    
    // unsets
    // permet de retirer plusieurs propriétés d'un objet
    // l'objet retourner est une copie
    unsets: function(props,obj)
    {
        let r = this.copy(obj);
        const $inst = this;
        
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(props,function(prop) {
            if($inst.keyExists(prop,obj))
            delete r[prop];
        });
        
        return r;
    },
    
    
    // replace
    // retourne un nouvel objet contenant le résultat d'un merge unidimensionnel de tous les objets données en argument
    replace: function() 
    {
        let r = this.new();
        let args = Array.from(arguments);
        
        if(args.length > 0)
        {
            const $inst = this;
            
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(args,function(value) {
                $inst.typecheck(value,false);
                
                if(value != null)
                r = Object.assign(r,value);
            });
        }
        
        return r;
    }
}


// objWriteSelf
// methods for writing within the object without copying it
const ObjWriteSelf = {
    
    // setRef
    // permet d'ajouter une nouvelle propriété à un objet
    // l'objet retourner est le même (pas une copie)
    setRef: function(prop,value,obj)
    {
        this.typecheck(obj);
        obj[prop] = value;
        
        return obj;
    },
    
    
    // unsetRef
    // permet de retirer une propriété d'un objet
    // l'objet retourner est le même (pas une copie)
    unsetRef: function(prop,obj)
    {
        this.typecheck(obj);
        
        if(this.keyExists(prop,obj))
        delete obj[prop];
        
        return obj;
    },
    
    
    // unsetsRef
    // permet de retirer plusieurs propriétés d'un objet
    // l'objet retourner est le même (pas une copie)
    unsetsRef: function(props,obj)
    {
        this.typecheck(obj);
        const $inst = this;
        
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(props,function(prop) {
            if($inst.keyExists(prop,obj))
            delete obj[prop];
        });
        
        return obj;
    }
}


// objProto
// methods related to object prototype
const ObjProto = {
    
    // keyExists
    // retourne vrai si l'objet a la propriété, cherche dans le protype
    keyExists: function(prop,obj)
    {
        return (this.isKey(prop) && this.is(obj))? (prop in obj):false
    }
}

// objFactory
// méthode pour merger plusieurs objets, avec support pour prototype
const ObjFactory = function(prototype)
{
    const r = Object.create((prototype === true)? {}:(prototype || null));
    const args = Array.prototype.slice.call(arguments,1);
    Object.assign.apply(null,[r].concat(args));
    
    return r;
}

// export


/***/ }),

/***/ "./node_modules/quidphp-node-temp/src/pojo.js":
/*!****************************************************!*\
  !*** ./node_modules/quidphp-node-temp/src/pojo.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/quidphp-node-temp/index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/node/blob/master/LICENSE
 */
 
// pojo
// script with a set of helper functions related to plain objects

// import


// pojoObj
// méthodes relatives à des variables objets plain javaScript
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    
    // is
    // retourne vrai si c'est un objet plain
    is: function(value)
    {
        return (value != null && typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype && value.toString() === '[object Object]');
    },
    
    
    // gets
    // permet de retourner un nouveau pojo avec seulement les propriétés donnés en premier argumnet
    gets: function(props,obj)
    {
        let r = {};
        this.typecheck(obj);
        const $inst = this;
        
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(props,function(prop) {
            r[prop] = ($inst.keyExists(prop,obj))? obj[prop]:undefined;
        });
        
        return r;
    },
    
    
    // replaceRecursive
    // retourne un nouvel objet contenant le résultat d'un merge multidimensionnel de tous les plain objets données en argument
    replaceRecursive: function() 
    {
        let r = null;
        let args = Array.from(arguments);
        
        if(args.length > 0)
        {
            r = this.copy(args[0]);
            const $inst = this;
            const loop = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.sliceStart(1,args);
            
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(loop,function(value) {
                if(value != null)
                {
                    $inst.each(value,function(value2,key2) {
                        if($inst.is(r[key2]) && $inst.keyExists(key2,r))
                        r[key2] = $inst.replaceRecursive(r[key2],value2);
                        
                        else
                        r[key2] = value2;
                    });
                }
            });
        }

        return r;
    }
});

/***/ }),

/***/ "./node_modules/quidphp-node-temp/src/scalar.js":
/*!******************************************************!*\
  !*** ./node_modules/quidphp-node-temp/src/scalar.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/quidphp-node-temp/index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/node/blob/master/LICENSE
 */
 
// scalar
// script with functions related to scalar values

// import


// scalarPrimitive
// méthodes relatives à des variables de type scalar (bool, number, string)
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({    
    
    // is
    // retourne vrai si la valeur est scalar
    is: function(value) 
    {
        let r = false;
        const type = typeof value;
        
        if(type === 'boolean' || type === 'number' || type === 'string')
        r = true;
        
        return r;
    },
    
    
    // isNotBool
    // retourne vrai si scalar mais pas bool
    isNotBool: function(value)
    {
        return this.is(value) && !_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.is(value);
    },
    
    
    // cast
    // permet de cast une valeur selon un type donné en deuxième argument
    cast: function(r,type)
    {
        if(r != null && type != null)
        {
            if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](type,[true,'json']))
            r = Json.decode(r);
            
            else if(type === 'int')
            r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.cast(r);
            
            else if(type === 'num')
            r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.cast(r);
            
            else if(type === 'bool' && this.is(r))
            r = this.toBool(r);
        }
        
        return r;
    },
    
    
    // toBool
    // retourne un booléean à partir d'un scalar
    toBool: function(value)
    {
        let r = null;
        this.typecheck(value);
        
        if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](value,[1,'1',true,'true']))
        r = true;

        else if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](value,[0,'0',false,'false']))
        r = false;
        
        return r;
    }
});

/***/ }),

/***/ "./node_modules/quidphp-node-temp/src/str.js":
/*!***************************************************!*\
  !*** ./node_modules/quidphp-node-temp/src/str.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/quidphp-node-temp/index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/node/blob/master/LICENSE
 */
 
// str
// script with a set of helper functions related to strings

// import


// strPrimitive
// méthodes relatives à des valeurs strings
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    
    // is
    // retourne vrai si la valeur est une string
    is: function(value) 
    {
        return typeof(value) === 'string';
    },

    
    // isStart
    // retourne vrai si la string commence par needle
    isStart: function(needle,value)
    {
        return (this.is(needle) && this.is(value))? value.startsWith(needle):null;
    },


    // isEnd
    // retourne vrai si la string finit par needle
    isEnd: function(needle,value)
    {
        return (this.is(needle) && this.is(value))? value.endsWith(needle):null;
    },

    
    // isEqual
    // retourne vrai si les deux valeurs sont égales si comparés comme string
    isEqual: function(value,value2)
    {
        return this.cast(value) === this.cast(value2);
    },
    
    
    // in
    // retourne vrai si la valeur est dans la string
    // retourne un boolean
    in: function(value,string) 
    {
        return (this.is(string) && this.is(value))? string.includes(value):null;
    },
    
    
    // icompare
    // compare deux string de façon insensible à la case
    icompare: function(value,value2)
    {
        return (this.is(value) && this.is(value2))? (value.toUpperCase() === value2.toUpperCase()):false
    },
    
    
    // cast
    // retourne une valeur string
    // si la valeur est null retourne ''
    // si la valeur est objet, et que json est true -> envoie à json encode
    cast: function(value,json)
    {
        let r = '';
        
        if(value != null)
        {
            if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is(value) && json === true)
            r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Json.encode(value);                
            
            else
            r = String(value)
        }
        
        return r;
    },
    
    
    // toNum
    // retourne la string sous forme de nombre
    toNum: function(value) 
    {
        this.typecheck(value);
        return _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.cast(value);
    },
    
    
    // toInt
    // retourne la string sous forme de integer
    toInt: function(value) 
    {
        this.typecheck(value);
        return _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.cast(value);
    },
    
    
    // pos
    // retourne l'index de la valeur dans la string
    pos: function(value,string) 
    {
        this.typecheck(string);
        let r = string.indexOf(value);
        r = (r === -1)? null:r;
        
        return r;
    },
    
    
    // lower
    // retourne la chaîne en lower case
    lower: function(value)
    {
        this.typecheck(value);
        return value.toLowerCase();
    },
    
    
    // lowerFirst
    // met la première lettre de la string lowercase
    lowerFirst: function(value)
    {
        this.typecheck(value);
        return (this.isNotEmpty(value))? value.charAt(0).toLowerCase() + value.slice(1):null;
    },
    
    
    // upper
    // retourne la chaîne en uppercase
    upper: function(value)
    {
        this.typecheck(value);
        return value.toUpperCase();
    },
    
    
    // upperFirst
    // met la première lettre de la string uppercase
    upperFirst: function(value)
    {
        this.typecheck(value);
        return (this.isNotEmpty(value))? value.charAt(0).toUpperCase() + value.slice(1):null;
    },

    
    // trim
    // trim une string
    trim: function(value)
    {
        this.typecheck(value);
        return value.trim();
    },
    
    
    // quote
    // permet d'enrobber une string dans des quotes
    // possible de spécifier double ou non
    // possible de faire un escape html
    quote: function(value,double,escape)
    {
        let r = null;
        this.typecheck(value);
        const quote = (double === true)? '"':"'";
        
        if(escape === true)
        value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Html.escape(value);
        
        r = quote+value+quote;
        
        return r;
    },
    
    
    // sub
    // retourne une nouvelle sous chaîne
    sub: function(start,end,string)
    {
        this.typecheck(string);
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.typecheck(start);
        return string.substring(start,(end === true)? undefined:end);
    },
    
    
    // excerpt
    // retourne une nouvelle sous chaîne
    // peut ajouter un suffix si la chaîne a été coupé
    excerpt: function(limit,string,suffix)
    {
        let r = this.sub(0,limit,string);
        
        if(r !== string && this.isNotEmpty(suffix))
        r += suffix;
        
        return r;
    },
    
    
    // explode
    // explode une chaîne
    // retourne un tableau dans tous les cas
    explode: function(delimiter,value,clean)
    {
        this.typechecks([delimiter,value]);
        let r = value.split(delimiter);
        
        if(clean === true)
        r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.clean(r);
        
        return r;
    },
    
    
    // explodeIndex
    // split une string et retourne l'index demandé en premier argument
    explodeIndex: function(index,delimiter,value)
    {
        let r = undefined;
        const x = this.explode(delimiter,value);
        
        if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(index) && this.isNotEmpty(x[index]))
        r = x[index];
        
        return r;
    },
    
    
    // removeAllWhitespace
    // enlève tous les espaces blancs d'une string
    removeAllWhitespace: function(string)
    {
        this.typecheck(string);
        return string.replace(/\s/g, "");
    },
    
    
    // fromCamelCase
    // transforme une string camelcase vers une string avec séparateur
    fromCamelCase: function(delimiter,string)
    {
        this.typecheck(delimiter);
        string = this.trim(string);
        
        return string.replace(/[\w]([A-Z])/g, function(value) {
           return value[0] + delimiter + value[1];
        }).toLowerCase();
    },
    
    
    // toCamelCase
    // transforme une string avec séparateur en camelCase
    toCamelCase: function(delimiter,string)
    {
        let r = null;
        const $inst = this;
        string = this.trim(string);
        let array = this.explode(delimiter,string,true);
        
        array = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.map(array,function(word,index) {
            return (index == 0)? $inst.lower(word):$inst.upperFirst(word);
        });
        
        r = array.join('');
        r = this.removeAllWhitespace(r);
        
        return r;
    },
    
    
    // slug
    // transforme une string en slug
    slug: function(string)
    {
        string = this.lower(string);
        return string.replace(/ /g,'-').replace(/[^\w-]+/g,'').replace(/--/g,'-');
    },
    
    
    // keepNumber
    // enleve tous les caractères non numérique
    keepNumber: function(string)
    {
        this.typecheck(string);
        return string.replace(/[^0-9]/g,'');
    },
    
    
    // replace
    // permet de remplacer le contenu d'une string via un pojo
    replace: function(pojo,string)
    {
        this.typecheck(string);
        
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.each(pojo,function(value,key) {
            string = string.replace(key,value);
        });
        
        return string;
    }
});

/***/ }),

/***/ "./node_modules/quidphp-node-temp/src/testSuite.js":
/*!*********************************************************!*\
  !*** ./node_modules/quidphp-node-temp/src/testSuite.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/quidphp-node-temp/index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/node/blob/master/LICENSE
 */
 
// testSuite
// script with a method to run a suite of tests

// import


// testSuite
// méthode pour lancer une suite de test
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(value) 
{
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.each(value,function(suite,key) {
        return suite();
    });
}

/***/ }),

/***/ "./node_modules/quidphp-node-temp/src/type.js":
/*!****************************************************!*\
  !*** ./node_modules/quidphp-node-temp/src/type.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/quidphp-node-temp/index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/node/blob/master/LICENSE
 */

// type
// script with common methods for all variable types

// import


// type
// méthodes communes pour tous les types de variables
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({  
    
    // is
    // retourne vrai si c'est une variable du type
    is: function(value)
    {
        return _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.type(value) !== 'object';
    },

    
    // are
    // retourne vrai si la valeur est un tableau contenant des variables du type
    are: function(value)
    {
        const $inst = this;
        
        return (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(value))? _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(value,function(v) {
            return $inst.is(v);
        }):false;
    },
    
    
    // isEmpty
    // retourne vrai si c'est une variable du type vide
    isEmpty: function(value)
    {
        return (this.is(value))? _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEmpty(value):false;
    },
    
    
    // isNotEmpty
    // retourne vrai si c'est une variable du type non-vide
    isNotEmpty: function(value)
    {
        return (this.is(value))? _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isNotEmpty(value):false;
    },
    
    
    // typecheck
    // envoie une erreur si la valeur n'est pas du type
    // si type est true, doit être du type et non vide
    // si type est false, accepte null + undefined
    typecheck: function(value,type)
    {
        if(((type === true && !this.isNotEmpty(value)) || (type !== true && !this.is(value))) && !(type === false && value == null))
        throw new Error(value);
        
        return value;
    },
    
    
    // typechecks
    // envoie une exception si la valeur n'est pas un tableau contenant des valeurs du type
    typechecks: function(value,type)
    {
        if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(value))
        {
            const $inst = this;
            
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(value,function(ele) {
                $inst.typecheck(ele,type);
            });
        }
        
        else
        throw new Error(value);
        
        return value;
    }
});

/***/ }),

/***/ "./node_modules/quidphp-node-temp/src/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/quidphp-node-temp/src/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/quidphp-node-temp/index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/node/blob/master/LICENSE
 */
 
// validate
// script with behaviours related to validation

// import


// validate
// méthodes relatives à des validations
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    
    // isNumericDash
    // retourne vrai si la valeur contient seulement des caractères numérique ou -
    isNumericDash: function(value)
    {
        return this.regex(value,"^[0-9\-]+$");
    },
    
    
    // isEmail
    // retourne vrai si la valeur est un email
    isEmail: function(value)
    {
        return this.regex(value,/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{1,4})+$/);
    },
    
    
    // isRegexStr
    // retourne vrai si une valeur un regex ou instance de RegExp
    isRegexStr: function(value)
    {
        return (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(value) || value instanceof RegExp);
    },
    
    
    // regex
    // permet de lancer un test d'expression régulière
    regex: function(value,exp)
    {
        let r = false;
        
        if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(value) && this.isRegexStr(exp))
        {
            const regex = new RegExp(exp);
            
            if(regex.test(value))
            r = true;
        }
        
        return r;
    },
    
    
    // trigger
    // lance la validation required et ensuite pattern
    trigger: function(value,required,pattern)
    {
        let r = this.required(value,required);
        
        if(r === true)
        r = this.pattern(value,pattern);
        
        return r;
    },
    
    
    // required
    // fait le test required sur la valeur
    required: function(value,required)
    {
        let r = true;
        
        if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.is(required))
        required = _index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.toInt(required);
        
        if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.isPositive(required))
        {
            value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.cast(value);
            value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.trim(value);
            
            if(!value.length)
            r = false;
        }
        
        return r;
    },
    
    
    // pattern
    // fait le test required sur la valeur
    pattern: function(value,pattern)
    {
        let r = true;
        
        if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(pattern))
        {
            value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.cast(value);
            
            if(value.length && !this.regex(value,pattern))
            r = false;
        }
        
        return r;
    }
});

/***/ }),

/***/ "./node_modules/quidphp-node-temp/src/vari.js":
/*!****************************************************!*\
  !*** ./node_modules/quidphp-node-temp/src/vari.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/quidphp-node-temp/index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/node/blob/master/LICENSE
 */
 
// vari
// script with a set of general functions related to variables

// import


// vari
// méthodes communes à toutes les variables
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({    
    
    // is
    // vrai si pas non défini
    is: function(value)
    {
        return typeof(value) !== 'undefined';
    },

    
    // isEmpty
    // retourne vrai si la variable est vide
    isEmpty: function(value)
    {
        let r = true;
        
        if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(value) || _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(value))
        r = (value.length > 0)? false:true;
        
        else if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.is(value))
        r = !value;
        
        else if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Env.isTarget(value))
        r = false;
        
        else if(value != null)
        {
            this.eachProto(value,function() {
                r = false;
                return false;
            });
        }
        
        return r;
    },
    
    
    // isNotEmpty
    // retourne vrai si la variable est non vide
    isNotEmpty: function(value)
    {
        return !this.isEmpty(value);
    },
    
    
    // isReallyEmpty
    // retourne vrai si la variable est vraiment vide (conserve les numériques et bool)
    isReallyEmpty: function(value)
    {
        return (!_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is(value) && !_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.is(value) && this.isEmpty(value))
    },
    
    
    // isNotReallyEmpty
    // retourne vrai si la variable n'est pas vraiment vide
    isNotReallyEmpty: function(value)
    {
        return !this.isReallyEmpty(value);
    },
    
    
    // isNull
    // retourne vrai si la valeur est null
    isNull: function(value)
    {
        return value === null;
    },
    
    
    // isUndefined
    // retourne vrai si la valeur est undefined
    isUndefined: function(value)
    {
        return value === undefined;
    },
    
    
    // isEqual
    // compare plusieurs variables
    // retourne vrai si les valeurs contenus sont égales
    isEqual: function() 
    {
        let r = false;
        let json = null;
        let jsonOld = undefined;
        
        r = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.each(arguments,function(value) {
            json = _index_js__WEBPACK_IMPORTED_MODULE_0__.Json.encode(value);
            
            if(typeof jsonOld === 'undefined')
            jsonOld = json;
            
            else
            return (json === jsonOld);
        });
        
        return r;
    },
    
    
    // isEqualStrict
    // comme isEqual, mais les objects et array doivent être les mêmes variables
    isEqualStrict: function()
    {
        let r = false;
        let first = undefined;
        
        r = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.each(arguments,function(value) {
            if(typeof first === 'undefined')
            first = value;
            
            else
            return Object.is(first,value);
        });
        
        return r;
    },
    
    
    // type
    // retourne le vrai type d'une variable
    type: function(value)
    {
        let r = typeof value;
        const obj = {};
        
        if(value == null)
        r = value + "";
        
        else if(r === 'function')
        {
            const str = obj.toString.call(value);
            r = obj[str] || "object";
        }
        
        return r;
    },
    
    
    // check
    // envoie une erreur si la valeur n'est pas égale à la deuxième
    check: function(value,type)
    {
        if(value !== type)
        throw new Error([value,type]);
        
        return value;
    },
    
    
    // eachProto
    // fait un each en incluant les propriétés du prototype
    // retourne true si le loop a complêté
    eachProto: function(loop,callback)
    {
        let r = null;
        
        if(_index_js__WEBPACK_IMPORTED_MODULE_0__.Func.is(callback))
        {
            r = true;
            var key;
            var value;
            let result;

            for (key in loop) 
            {
                value = loop[key];
                result = callback.call(value,value,key,loop);
                
                if(result === false)
                {
                    r = false;
                    break;
                }
            }
        }
        
        return r;
    }
});

/***/ }),

/***/ "./node_modules/quidphp-node-temp/test/node.js":
/*!*****************************************************!*\
  !*** ./node_modules/quidphp-node-temp/test/node.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Arr": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr),
/* harmony export */   "ArrLike": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike),
/* harmony export */   "Bool": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Bool),
/* harmony export */   "Component": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Component),
/* harmony export */   "Datetime": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Datetime),
/* harmony export */   "Debug": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Debug),
/* harmony export */   "Env": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Env),
/* harmony export */   "Factory": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Factory),
/* harmony export */   "Func": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Func),
/* harmony export */   "Html": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Html),
/* harmony export */   "Integer": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer),
/* harmony export */   "Json": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Json),
/* harmony export */   "Nav": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Nav),
/* harmony export */   "Num": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Num),
/* harmony export */   "Obj": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj),
/* harmony export */   "Pojo": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo),
/* harmony export */   "Scalar": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar),
/* harmony export */   "Str": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Str),
/* harmony export */   "Test": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Test),
/* harmony export */   "TestSuite": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.TestSuite),
/* harmony export */   "Tool": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Tool),
/* harmony export */   "Validate": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Validate),
/* harmony export */   "Vari": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari),
/* harmony export */   "assert": () => (/* binding */ assert),
/* harmony export */   "d": () => (/* binding */ d),
/* harmony export */   "logError": () => (/* binding */ logError)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/quidphp-node-temp/index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/node/blob/master/LICENSE
 */

// import

const { d, assert, logError } = _index_js__WEBPACK_IMPORTED_MODULE_0__.Shortcut;

// node
// script to test the node files
_index_js__WEBPACK_IMPORTED_MODULE_0__.Test.Node = function()
{   
    let r = true;
    
    try 
    {
        // prepare
        const noop = function() { };
        const isEmpty = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEmpty.bind(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str);
        
        // js
        assert(Object.getPrototypeOf(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj) === Object.getPrototypeOf(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is !== _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.each === _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.each);
        assert(!(false == null));
        assert(!(0 == null));
        assert(!('' == null));
        assert(null == null);
        assert(undefined == null);
        assert(!([] == true));
        
        // arr
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is([]));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is({}));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(arguments));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](null,[null]));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](null,null));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](true,[false]));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.keys([1,2,3]),[0,1,2]));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.search(2,[1,2,3]) === 1);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.slice(1,3,[2,4,6,8,10]),[4,6]));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.slice(1,undefined,[2,4,6,8,10]),[4,6,8,10]));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.slice(null,null,[2,4,6,8,10]),[2,4,6,8,10]));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.sliceStart(2,[2,4,6,8,10]),[6,8,10]));
        let spliceArr = [12,3,40];
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.spliceValue(3,spliceArr);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(spliceArr,[12,40]));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.spliceValue(40,spliceArr,'ok'),[40]));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(spliceArr,[12,'ok']));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.valueStrip(3,[3,2,3,1,5]),[2,1,5]));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEmpty([]));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isNotEmpty([null]));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isNotEmpty([1,2,3]));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isNotEmpty([]));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEmpty(''));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.typecheck([]),[]));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.typecheck([1],true),[1]));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.typecheck(undefined,false) === undefined);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual([],[]));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual({},{}));
        let arr = [3,2,3,1,5];
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.valueFirst(arr) === 3);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.valueLast(arr) === 5);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.valueFirst([]) === undefined);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.valueStrip('8',arr) !== arr);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.keyFirst(arr) === 0);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.keyLast(arr) === 4);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.valueStrip('8',arr),arr));
        let arrKey;
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.copy([1,2,3]),[1,2,3]));
        let arrCopy = [1,2,3];
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.copy(arrCopy) !== arrCopy);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each([1,2,3],function(value,key) {
            assert(value !== this);
            arrKey = key;
        }));
        assert(arrKey === 2);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length([1,2,3]) === 3);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.set(1,'z',['a','b','c']),['a','z','c']));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(arrCopy,[1,2,3]));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.setRef(2,4,arrCopy) === arrCopy);
        let mergeRef = [1,2,3];
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.mergeRef(mergeRef,'what',[4,5,6],arguments) === mergeRef);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.merge([1,2,3],'what',[4,5,6],arguments),mergeRef));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.merge(mergeRef) !== mergeRef);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.mergeRef(mergeRef) === mergeRef);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(mergeRef) === 8);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(arrCopy,[1,2,4]));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.merge([1,2,3],[4,5,6],arguments)) === 7);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.some([1,'2',3],function(value,index,arr) {
            assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(arr));
            return _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(value);
        }));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.some([1,'2',3],function(value,index,arr) {
            return _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is(value);
        }));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.every([1,'2',3],function(value,index,arr) {
            assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(arr));
            return _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(value);
        }));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.every([1,2,3],function(value,index,arr) {
            return _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(value);
        }));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.find([1,2,3],function(value,index,arr) {
            assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(value));
            assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(index));
            assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(arr));
            return value === 2;
        }) === 2);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.map([1,2,3],function(value,index,arr) {
            assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(arr));
            return index;
        }),[0,1,2]));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.filter([1,2,3],function(value,key,array) {
            if(value === 1)
            assert(key === 0);
            assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(arr));
            return value === 2;
        }).length === 1);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.reduce("",['test','ok','what'],function(r,value,index,arr) {
            assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(arr));
            return r += index+value;
        }) === '0test1ok2what');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.replace([1,2,2],[4,5],[0]),[0,5,2]));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.clean([null,undefined,0,'0',[],{},false,true,'',1]),[0,'0',false,true,1]));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.timeouts([1,2,3],20,20,function(value) {
            assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(value));
        }));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.oddEven([1,2,3],function(value) {
            assert(value !== 2);
        },function(value) {
            assert(value === 2);
        }));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.findKey([3,4,5],function(value,index,arr) {
            assert(arr == null);
            return (value === 4);
        }) === 1);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.accumulate(0,[2,3,4],function(value,index,arr) {
            assert(arr == null);
            return value;
        }) === 9);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.accumulate('',['eh','ok','what'],function(value,index) {
            return value;
        }) === 'ehokwhat');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.accumulate([],['eh','ok','what'],function(value,index) {
            return index+value;
        }),["0eh","1ok","2what"]));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.column('test',[{ test: 'OK'},{test2: 'WELL', test: 'OK2'},{test2: 'NOP'}]),['OK','OK2']));
        
        // arrLike
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.is([]));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.is({}));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.is(function() { }));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.is(arguments));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.is(2));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.is('str'));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.is(null));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.isEmpty(arguments));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.isNotEmpty(arguments));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.typecheck(arguments) === arguments);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.typecheck(undefined,false) === undefined);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.length(arguments) === 0);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.toArray(arrCopy) === arrCopy);
        
        // bool
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.is('true'));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.is(function() { }));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.is(null));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.is(1));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.is(true));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.typecheck(true));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.typecheck(false) === false);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.toggle(false) === true);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.isEmpty(false));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.isEmpty(0));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.isNotEmpty(true));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.toInt(true) === 1);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.toInt(false) === 0);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.typecheck(null,false) === null);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.typecheck(false) === false);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.typecheck(true,false) === true);
        
        // datetime
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Datetime.now()));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Datetime.year()));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Datetime.localeFormat('fr-CA')) >= 19);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Datetime.ymd(null,2010,2,3) === "2010-02-03");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Datetime.ymd(1519241542) === "2018-02-21");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Datetime.his(1519241542) === "14:32:22");
        
        // debug
        
        // env
        if(typeof window === 'undefined')
        {
            assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Env.isNode());
            assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Env.isBrowser());
            assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Env.isWindow('test'));
            assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Env.isTarget('test'));
        }
        else
        {
            assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Env.isNode());
            assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Env.isBrowser());
            assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Env.isWindow(window));
            assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Env.isTarget(window));
            assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Env.isTarget(document));
            const html = document.querySelector("html");
            assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Env.isTarget(html));
        }
        
        // factory
        
        // func
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Func.is('test'));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Func.is(noop));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Func.length(noop) === 0);
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(noop);
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(null,false);
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.timeout(null,function() {
            assert(true);
        });
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Func.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Func.debounce(2,function() {})));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Func.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Func.throttle(2,function() {})));
        const debounceFunc = _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.debounce(100,function(arg) {
            assert(arg === 99);
        });
        for (var i = 0; i < 100; i++) {
            debounceFunc(i);
        }
        const throttleFunc = _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.throttle(50,function(arg) {
            assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(arg));
        });
        for (var i = 0; i < 100; i++) {
            let arg = i;
            _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.timeout(arg,function() { throttleFunc(arg) });
        }
        
        // html
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.isSelfClosing('br'));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.isSelfClosing('div'));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.escape("L'arti\"cle") === "L&#39;arti&quot;cle");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.escape("<test>ok</test>") === "&lt;test&gt;ok&lt;/test&gt;");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.start('div','james') === '<div>james');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.start('img',null,{src: "james.jpg"}) === "<img src='james.jpg'/>");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.start('img','bleh.jpg',{src: "james.jpg"}) === "<img src='bleh.jpg'/>");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.start('div','james',{class: "ok", dataTest: "ok2" }) === "<div class='ok' data-test='ok2'>james");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.end('div') === '</div>');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.end('input') === '');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.value(2) === '2');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.attr({src: "james.jpg"}) === "src='james.jpg'");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.attr({src: "james.jpg"},'input','what') === "src='james.jpg' value='what'");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.tag('span','ok',{id: "test"}) === "<span id='test'>ok</span>");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.tag('input','ok',{value: "test", name: "NOé"}) === "<input value='ok' name='NOé'/>");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.tagCond('ul',false,'ok') === '');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.tagCond('ul','','ok') == '');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.tagCond('ul',null,'ok') == '');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.tagCond('ul',0,'ok') === "<ul class='ok'>0</ul>");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.tagCond('ul','0','ok') === "<ul class='ok'>0</ul>");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.tagCond('ul',true,'ok') === "<ul class='ok'>&nbsp;</ul>");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.div('well',{myattr: "L'article", myattr2: 'L"article'}) === "<div myattr='L&#39;article' myattr2='L&quot;article'>well</div>");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.span({tag: "2", well: "OK"}) === '<span>2, OK</span>');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.ul('meh') === '<ul>meh</ul>');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.li(null,{class: ['test','test2']}) === "<li class='test test2'></li>");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.span(null,{a: '', b: true, c: false, d: null, e: ['1','2']}) === "<span a='' b='1' c='0' e='[&quot;1&quot;,&quot;2&quot;]'></span>");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.span(false,{ test: 3, data: { test: 2, ok: 'WHAT', james: [1,2], james2: {ok: 'Mé'}}}) === "<span test='3' data-test='2' data-ok='WHAT' data-james='[1,2]' data-james2='{&quot;ok&quot;:&quot;Mé&quot;}'></span>");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.button(true) === "<button type='button'>&nbsp;</button>");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.button({test: "OKÉÉÉ", ble: 'MEH'}) === "<button type='button'>OKÉÉÉ, MEH</button>");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.button([1,2,3]) === "<button type='button'>1, 2, 3</button>");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.input(true,{type: 'email'}) === "<input type='email' value='1'/>");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.input(false,{type: 'text'}) === "<input type='text' value='0'/>");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.input(null,{type: 'text'}) === "<input type='text' value=''/>");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.div('ok','whatEscape') === "<div class='whatEscape'>ok</div>");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Html.button("ok","james") === "<button type='button' class='james'>ok</button>");
        
        // integer
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is('2'));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(2));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(2.2));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.cast(true) === null);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.cast('2.3') === 2);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.cast('2.6') === 2);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.cast('25px') === 25);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.cast(4) === 4);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.cast(2.3) === 2);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.cast('') === null);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.toBool(1) === true);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.toBool(0) === false);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.toggle(1) === 0);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.toggle(2) === null);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.unique()));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.unique() !== _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.unique());
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.str(40) === '40');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isEmpty(0));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isEmpty('0'));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isNotEmpty('1'));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isNotEmpty(1));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isNotEmpty(-1));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isPositive(2));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isPositive(0));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isPositive(0,true));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isPositive('2'));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isPositive(-1));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isNegative(-1));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isNegative(0));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.isNegative(0,true));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.typecheck(1) === 1);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.typecheck(0) === 0);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.typecheck(null,false) === null);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.range(0,100,1)) === 101);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.range(1,100,1)) === 100);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.range(2,18,3)) === 6);
        
        // json
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Json.encode({ok: 2}) === '{"ok":2}');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Json.decode('{"ok":2}'),{ok: 2}));
        const jObj = {ok: 2};
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Json.recode(jObj) !== jObj);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Json.recode(jObj),jObj));
        
        // nav
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.isFirst(0,10));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.isFirst(2,10));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.hasPrev(0,10,true));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.hasPrev(0,10));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.hasPrev(2,10));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.hasNext(2,10));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.hasNext(8,10));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.hasNext(9,10));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.hasNext(9,10,true));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.isLast(9,10));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.isLast(10,10));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.isIndex(2,10));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.isIndex(-2,10));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.getFirst(10) === 0);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.getPrev(1,10) === 0);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.getNext(9,10,true) === 0);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.getLast(10) === 9);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.getIndex(0,10) === 0);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.getIndex(20,10) === null);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.index('first',2,10) === 0);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.index('last',2,10) === 9);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.index('prev',2,10) === 1);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.index('next',2,10) === 3);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.index('next',9,10) === null);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.index('next',9,10,true) === 0);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.index('prev',0,10) === null);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.index('prev',0,10,true) === 9);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.index(2,0,10,true) === 2);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.index(0,0,10,true) === 0);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nav.index(11,0,10,true) === null);
        
        // num
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is('what'));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is('2 px'));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is('2'));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is('2.3'));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is(2));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is(2.2));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.isNan(2));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.cast('1.2') === 1.2);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.cast('1,2') === 1);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.cast(1) === 1);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.cast(1.2) === 1.2);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.cast(null) === null);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.cast([]) === null);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.str('2.3') === '2.3');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.cast("4.3px") === 4.3);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.str(4) === '4');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.str(2.3) === '2.3');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.isEmpty('0'));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.isEmpty(0));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.isEmpty(true));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.isNotEmpty('1.1'));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.isNotEmpty(1.1));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.isPositive('2.2'));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.isPositive('0'));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.isPositive('0',true));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.isNegative('-2.2'));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.typecheck('0') === '0');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.typecheck(2.1,true) === 2.1);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.isOdd(1));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.isEven(1));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.isEven(2));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.isOdd(11));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.isOdd(0));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.isEven(0));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.decimal(2) === '2.00');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.decimal(2.034) === '2.03');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.decimal(2.034,3) === '2.034');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.decimal(2.034,0) === '2');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.round("4.2") === 4);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.round(4.2) === 4);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.round(4) === 4);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil("4.2") === 5);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(4.2) === 5);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(4) === 4);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.floor("4.2") === 4);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.floor(4.2) === 4);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.floor(4) === 4);
        
        // obj
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is({}));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is([]));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is(arguments));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is(function() { }));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is('test'));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is(null));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is(undefined));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is(true));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.length({ test: 2, ok: 3}) === 2);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.length({}) === 0);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.length([1,2,3]) === 3);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.length({test: 2}) === 1);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEqual([],[]))
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEqual({},[]));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEqual({},{},[]));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEqual({},{},{}));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEqual([2],[2],[2]));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEqual([2],[2],[1]));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEqual({test: 2},{test: 2}));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEqual({test: 2},{test: 3}));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEqual('test','test'));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEqual('test','testz'));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEqual(3,3));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEqual(3,4));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEqual(null,null));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEqual(null,undefined));
        let objGetSet = { test: 3};
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.get('test',objGetSet) === 3);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.set('test',4,objGetSet) !== objGetSet);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.get('test',objGetSet) === 3);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.unset('test',objGetSet) !== objGetSet);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.str({str: 2, what: 'ok', loop: [1,2], meh: { what: 2 }}) === 'str=2 what=ok loop=[1,2] meh={"what":2}');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.str({str: 2, what: 'ok', loop: [1,2], meh: { what: 2 }},'!') === 'str!2 what!ok loop![1,2] meh!{"what":2}');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.str({str: 2, what: 'ok', loop: [1,2], meh: { what: 2 }},'=',' ',true) === "str='2' what='ok' loop='[1,2]' meh='{&quot;what&quot;:2}'");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.str({str: 2, what: 'ok', loop: [1,2], meh: { what: 2 }},'=',true,true) === "str='2' what='ok' loop='[1,2]' meh='{&quot;what&quot;:2}'");
        let objCopy = { test: 3};
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.copy(objCopy) !== objCopy);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj["new"](),{}));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.replace(objCopy,{test2: 4})) === 2);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEmpty({}));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEmpty([]));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEmpty(function() { }));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEmpty({ok: 2}));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEmpty([2]));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEmpty(null));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEmpty(false));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEmpty(undefined));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEmpty(function() { return 2; }));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isNotEmpty({ok: 2}));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isNotEmpty([2]));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isNotEmpty(2));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isNotEmpty(null));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.length({ test: 2, ok: 3}) === 2);
        let objKey;
        let objVal;
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.each({test: 'ok', what: 3},function(value,key) {
            assert(value !== this);
            objKey = key;
            objVal = value;
        }));
        assert(objKey === 'what');
        assert(objVal === 3);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.each({test: 'ok', what: 3},function(value,key) {
            objKey = key;
            objVal = value;
            return false;
        }) === false);
        assert(objKey === 'test');
        assert(objVal === 'ok');
        let variVal;
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.each({ok: 2},function(value) {
            variVal = value;
        }));
        assert(variVal === 2);
        let length = 0;
        
        // pojo
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is({}));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is([]));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(arguments));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(function() { }));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is('test'));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(null));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(undefined));
        let replace = {test:2, ok: {what: true}};
        let pojoGetSet = {};
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.replaceRecursive({test:2, ok: {what: true}},null,{ok: {james: false}}),{test: 2, ok: {what: true, james: false}}));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.replaceRecursive({test: 2},{test: { ok: 3}},{test: { ok: {ok: 1}, ok2: [1,2,3]}}),{test: {ok: {ok: 1}, ok2: [1, 2, 3]}}));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.climb(['test','what'],{test: {what: 'LOL'}}) === 'LOL');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.climb(['test','whatz'],{test: {what: 'LOL'}}) === undefined);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.climb('test/what',{test: {what: 'LOL'}}) === 'LOL');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.replace(replace,{ok: {james: false}}),{test: 2, ok: {james: false}}));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isEqual(replace,{test:2, ok: {what: true}}));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.set('meh',2,pojoGetSet) !== pojoGetSet);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.set('meh',2,pojoGetSet),{meh: 2}));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.setRef('meh',2,pojoGetSet) === pojoGetSet);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.get('meh',pojoGetSet) === 2);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.gets(['meh','ok','what'],{ok: 3, meh: 4, whatz: 'LOL'}),{meh:4, ok:3, what: undefined}));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isEmpty(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.unsets(['meh'],pojoGetSet)));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.unset('meh',pojoGetSet) !== pojoGetSet);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.unset('meh',pojoGetSet),{}));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.unsetRef('meh',pojoGetSet) === pojoGetSet);
        pojoGetSet.meh = 2;
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.unsetsRef(['meh','test'],pojoGetSet) === pojoGetSet);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isEmpty(pojoGetSet));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.get('meh',pojoGetSet) === undefined);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.copy(replace),replace));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.copy(replace) !== replace);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isEmpty({}));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isEmpty([]));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isNotEmpty({}));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isNotEmpty({test: 2}));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isEqual([],[]));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isEqual({ok: 2},{ok: 2}));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isEqual({ok: 2},{ok: 3}));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isKey(2));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.keyExists('test',{test: 2}));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.keyExists('test',{testz: 2}));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.valueFirst(replace) === 2);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.valueLast(replace) === replace.ok);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.get('what',pojoGetSet) === undefined);
        let pojoMapFilter = { test: 3, ok: 'what', james: { lol: true}, final: null, undef: undefined};
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.filter(pojoMapFilter,function(value) {
            return (_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(value))? false:true;
        })) === 4);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.length(pojoMapFilter) === 5);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.map(pojoMapFilter,function(value) {
            return (_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(value))? false:true;
        })['final'] === true);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.find(pojoMapFilter,function(value,key) {
            return _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(value);
        }),{lol: true}));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.toArray(pojoMapFilter)) === 5);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.findKey({james: 3, test: '4'},function(value,index) {
            return _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(value);
        }) === 'test');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.accumulate({},{james: 3, test: '4'},function(value,index) {
            return index;
        }),{james: 'james', test: 'test'}));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.some({james: 3, james2: 'ok'},function(value) {
            return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(value);
        }));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.some({james: 3, james2: 'ok'},function(value) {
            return _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(value);
        }));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.every({james: 3, james2: 'ok'},function(value) {
            return _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(value);
        }));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.every({james: 3, james2: 4},function(value,key) {
            return _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(value) && _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(key);
        }));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.reduce("",{james: 'test', ok: 'OK'},function(r,value,key) {
            return r += value+key;
        }) === 'testjamesOKok');
        
        // scalar
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.is('test'));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.is(2));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.is(true));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.is(false));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.is(null));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.isNotBool(1));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.isNotBool(false));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.isEmpty(1));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.isEmpty(false));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.isNotEmpty(1));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.isNotEmpty(false));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.typecheck('') === '');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.typecheck(true,true) === true);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.typecheck(false) === false);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.typecheck(null,false) === null);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.cast('2.4','int') === 2);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.cast('1','bool') === true);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.cast('2.4','num') === 2.4);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.cast('5d','int') === 5);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.cast('5d','bool') === null);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.toBool(1) === true);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.toBool('true') === true);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.toBool(0) === false);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.toBool(false) === false);
        
        // str
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is('WHAT'));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(''));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is([]));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(null));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.are(['test','ok']));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typechecks(['test','ok',null],false)) === 3);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isStart('a','as'));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isStart(3,'3s'));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEnd('s','as'));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEnd('a','as'));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEqual('test','test'));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEqual('2',2));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEqual(true,'true'));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEqual(undefined,''));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEqual(undefined,null));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str["in"]('a','as') === true);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str["in"]('é','aÉè') === false);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.icompare('E','e'));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.icompare('e','e'));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.icompare('éÈ','Éè'));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.icompare('2',2));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.cast(2) === '2');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.cast(false) === 'false');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.cast(true) === 'true');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.cast(null) === '');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.cast(undefined) === '');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.pos('a','as') === 0);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.pos('é','aéè') === 1);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.pos('é','aÉè') === null);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.lower('AE') === 'ae');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.lowerFirst('as') === 'as');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.lowerFirst('As') === 'as');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.lowerFirst('És') === 'és');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.upper('ae') === 'AE');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.upperFirst('as') === 'As');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.upperFirst('As') === 'As');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.trim(' As ') === 'As');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.quote('what',true) === '"what"');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.quote('what') === "'what'");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.quote("L'article\"de",false,true) === "'L&#39;article&quot;de'");
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.sub(2,true,'what') === 'at');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.sub(2,true,'éèà') === 'à');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.excerpt(3,'okkkkk','...') === 'okk...');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.excerpt(12,'okkkkk','...') === 'okkkkk');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.explode('-','la-vie-ok'),['la','vie','ok']));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.explodeIndex(2,'-','la-vie-ok') === 'ok');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.explodeIndex('2','-','la-vie-ok') === undefined);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.explodeIndex(3,'-','la-vie-ok') === undefined);
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEmpty('WHAT'));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEmpty(''));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEmpty('as'));
        assert(isEmpty(''));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(''));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty('as'));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck('ok') === 'ok');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck('') === '');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(null,false) === null);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(undefined,false) === undefined);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck('',false) === '');
        let val = null;
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.each('abcde',function(value) {
            assert(value !== this);
            val = value;
        }));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.keys('whaé'),['0','1','2','3']));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.values('whaé'),['w','h','a','é']));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.length('whaé') === 4);
        assert(val === 'e');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.each('abcde',function(value) {
            val = value;
            return (value === 'c')? false:true;
        }) === false)
        assert(val === 'c');
        let strVal = 'wéè';
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.get(1,strVal) === 'é');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.valueFirst('éèè') === 'é');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.find('john',function(ele) {
            return ele != 'j';
        }) === 'o');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.toArray('what')) === 4);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.removeAllWhitespace(' ads das sda ') === 'adsdassda');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.fromCamelCase('-','data') === 'data')
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.fromCamelCase('-','marginTopRight') === 'margin-top-right');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.fromCamelCase('|','marginTopRight') === 'margin|top|right');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.toCamelCase('-','margin-top-right') === 'marginTopRight');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.toCamelCase(' ',' margin top right ') === 'marginTopRight');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.toCamelCase('_',' margin top right ') === 'margintopright');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.toCamelCase('-','-margin--top--right-') === 'marginTopRight');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.every("aaaa",function(value,key) {
            return (value === 'a' && _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is(key))
        }));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.reduce("","aaaa",function(r,value,key) {
            return r += value+key;
        }) === 'a0a1a2a3');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.toNum("30MB") === 30);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.toNum("1,4") === 1);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.toNum("1.4") === 1.4);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.toInt("1,4") === 1);
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.slug("OK LA VIE EST BONNE") === 'ok-la-vie-est-bonne');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.slug("OK-LAé À@#?& VIE EST BONNE") === 'ok-la-vie-est-bonne');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.keepNumber("(515) 509-1502 #poste 12345") === '515509150212345');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.replace({ '[test]': 'OK', what: 'well'},"tout va [test] what WHAT!") === "tout va OK well WHAT!");
        
        // validate
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Validate.isNumericDash("213-123"));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Validate.isNumericDash("213123"));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Validate.isNumericDash("213_123"));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Validate.isEmail("test@test.com"));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Validate.isEmail("testtest.com"));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Validate.isEmail('bla@bla.zzzzzzz'));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Validate.isRegexStr("bla"));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Validate.isRegexStr(new RegExp("/asd/")));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Validate.regex("212","^[0-9\-]+$"))
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Validate.trigger('test',true,"^[0-9\-]+$"));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Validate.trigger('abc-de',true,"^[0-9\-]+$"));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Validate.trigger('',1,"^[0-9\-]+$"));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Validate.trigger('',false,"^[0-9\-]+$"));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Validate.required('test',true));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Validate.required('',true));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Validate.required('test',1));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Validate.required('test',0));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Validate.required('',1));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Validate.required('',0));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Validate.pattern('',"^[0-9\-]+$"));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Validate.pattern('01-2',"^[0-9\-]+$"));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Validate.pattern('abc',"^[0-9\-]+$"));
        
        // vari
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.is(null));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.is(undefined));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEmpty(null));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEmpty({}));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEmpty(false));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEmpty(true));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEmpty(''));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEmpty([]));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEmpty('0'));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEmpty(0));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEmpty(1));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEmpty(undefined));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isNotEmpty(2));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isNotEmpty(null));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isReallyEmpty(0));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isNotReallyEmpty(0));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isNull(null));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isNull(undefined));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isUndefined(null));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isUndefined(undefined));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEqual('test','test'));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEqual('test','testz'));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEqual(3,3));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEqual(3,4));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEqual(null,null));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEqual(null,undefined));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEqualStrict(null,null));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEqualStrict('test','test'));
        assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEqualStrict([],[]));
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.type('test') === 'string');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.type({}) === 'object');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.type([]) === 'object');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.type(function() { }) === 'object');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.type(2) === 'number');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.type(2.3) === 'number');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.type(null) === 'null');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.type(true) === 'boolean');
        assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.type(undefined) === 'undefined');
    } 
    
    catch (e) 
    {
        r = false;
        logError(e);
    }
    
    return r;
}



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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./test/browser.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Arr": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr),
/* harmony export */   "ArrLike": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike),
/* harmony export */   "Bool": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Bool),
/* harmony export */   "Browser": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Browser),
/* harmony export */   "Component": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Component),
/* harmony export */   "Datetime": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Datetime),
/* harmony export */   "Debug": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Debug),
/* harmony export */   "Doc": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc),
/* harmony export */   "Dom": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Dom),
/* harmony export */   "Ele": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele),
/* harmony export */   "Env": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Env),
/* harmony export */   "Evt": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Evt),
/* harmony export */   "Factory": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Factory),
/* harmony export */   "Func": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Func),
/* harmony export */   "HistoryState": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.HistoryState),
/* harmony export */   "Html": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Html),
/* harmony export */   "Integer": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer),
/* harmony export */   "Json": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Json),
/* harmony export */   "Nav": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Nav),
/* harmony export */   "Nod": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod),
/* harmony export */   "Num": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Num),
/* harmony export */   "Obj": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj),
/* harmony export */   "Pojo": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo),
/* harmony export */   "Request": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Request),
/* harmony export */   "Scalar": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar),
/* harmony export */   "Shortcut": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Shortcut),
/* harmony export */   "Str": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Str),
/* harmony export */   "Target": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Target),
/* harmony export */   "Test": () => (/* reexport safe */ quidphp_node_temp_test_node_js__WEBPACK_IMPORTED_MODULE_1__.Test),
/* harmony export */   "TestSuite": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.TestSuite),
/* harmony export */   "Tool": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Tool),
/* harmony export */   "Uri": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri),
/* harmony export */   "Validate": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Validate),
/* harmony export */   "Vari": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Vari),
/* harmony export */   "Win": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Win),
/* harmony export */   "Xhr": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.Xhr)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./index.js");
/* harmony import */ var quidphp_node_temp_test_node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quidphp-node-temp/test/node.js */ "./node_modules/quidphp-node-temp/test/node.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// import


var d = _index_js__WEBPACK_IMPORTED_MODULE_0__.Shortcut.d,
    assert = _index_js__WEBPACK_IMPORTED_MODULE_0__.Shortcut.assert,
    logError = _index_js__WEBPACK_IMPORTED_MODULE_0__.Shortcut.logError; // browser
// script to test the browser files

quidphp_node_temp_test_node_js__WEBPACK_IMPORTED_MODULE_1__.Test.Browser = function () {
  var r = true;

  try {
    // prepare
    var newHtml = _index_js__WEBPACK_IMPORTED_MODULE_0__.Html.start('form', null, {
      action: '/ok',
      method: 'post'
    });
    newHtml += _index_js__WEBPACK_IMPORTED_MODULE_0__.Html.input(2, {
      type: 'text',
      name: 'test-suite',
      data: {
        required: true,
        pattern: '^[0-9\-]+$'
      }
    });
    newHtml += _index_js__WEBPACK_IMPORTED_MODULE_0__.Html.input(null, {
      type: 'submit',
      name: 'test-submit3'
    });
    newHtml += _index_js__WEBPACK_IMPORTED_MODULE_0__.Html.input(null, {
      type: 'submit',
      name: 'test-submit2'
    });
    newHtml += _index_js__WEBPACK_IMPORTED_MODULE_0__.Html.input(null, {
      type: 'submit',
      name: 'test-submit'
    });
    newHtml += _index_js__WEBPACK_IMPORTED_MODULE_0__.Html.div("test <span>what</span>", {
      "class": "ok"
    });
    newHtml += _index_js__WEBPACK_IMPORTED_MODULE_0__.Html.end("form");
    newHtml += _index_js__WEBPACK_IMPORTED_MODULE_0__.Html.div(null, {
      "class": 'content',
      style: 'width: 25px; height: 25px; margin: 10px; padding: 5px; border: 5px solid green; box-sizing: content-box; border-image: none;'
    });
    newHtml += _index_js__WEBPACK_IMPORTED_MODULE_0__.Html.div(null, {
      "class": 'border',
      style: 'width: 25px; height: 25px; margin: 10px; padding: 5px; border: 5px solid green; box-sizing: border-box; border-image: none;'
    });
    newHtml += _index_js__WEBPACK_IMPORTED_MODULE_0__.Html.div('LOL', {
      "class": 'hidden',
      myattr: "L'article",
      style: "display: none; padding: 3px;"
    });
    var htmlNode = _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.scopedQuery(document, 'html');
    var selectorOne = htmlNode.querySelector("body");
    var selectorAll = htmlNode.querySelectorAll("body");
    var htmlStr = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getOuterHtml(htmlNode);
    var isEmpty = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEmpty.bind(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str);
    var bodyNode = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.scopedQuery(htmlNode, 'body');
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.prepend(bodyNode, newHtml);
    var formNode = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.scopedQuery(bodyNode, "> form");
    var formInput = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.scopedQueryAll(formNode, _index_js__WEBPACK_IMPORTED_MODULE_0__.Dom.selectorInput());
    var divNode = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.scopedQuery(formNode, "> div");
    var inputNode = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.scopedQuery(formNode, "> input[type='text']");
    var submitNode = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.scopedQuery(formNode, "> input[name='test-submit']");
    var textNode = divNode.firstChild;
    var contentBox = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.scopedQuery(bodyNode, "> div.content");
    var borderBox = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.scopedQuery(bodyNode, "> div.border");
    var fragment = document.createDocumentFragment();
    var template = document.createElement('template');
    var hiddenNode = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.scopedQuery(bodyNode, ".hidden");
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.setHtml(template, newHtml);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.setHtml(fragment, newHtml);
    var formTemplate = _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.children(template.content, 'form'); // browser

    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Browser.isOldIe()));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Browser.isIe11()));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Browser.isIe()));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Browser.isUnsupported()));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Browser.allowsCookie())); // data
    // doc

    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.is(document));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.is(fragment));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.isCurrent(document));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.is(window));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.is(htmlNode));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.isFragment(document));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.isFragment(fragment));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.isFragment(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.parent(formTemplate[0])));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.isTemplate(template));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.getDimension(document).width));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.getDimension(document).height));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.realNode(document) === document);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.realNode(fragment) === fragment);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.realNode(template) === template.content);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.getDimension(fragment), {
      width: 0,
      height: 0
    }));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isStart('<html', _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.getHtml(document)));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isStart('<form', _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.getHtml(fragment)));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.setHtml(fragment, '<div>ok</div>') === undefined);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.getHtml(fragment) === '<div>ok</div>');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isStart('<form', _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.getHtml(template)));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.setHtml(template, '<div>ok</div>') === undefined);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.getHtml(template) === '<div>ok</div>');
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.setHtml(template, newHtml);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isStart('<form', _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.getHtml(template)));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.getHtml(fragment) === '<div>ok</div>');
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.setHtml(template, fragment, true);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.getHtml(template) === '<div>ok</div>');
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.setHtml(template, newHtml, true);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.getHtml(fragment) === '<div>ok</div>');
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.setHtml(fragment, template, true);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isStart('<form', _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.getHtml(fragment)));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isStart('<form', _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.getHtml(template)));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.typecheck(document) === document);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.are([document, fragment]));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.scopedQueryAll(fragment, "input")) === 4);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.scopedQueryAll(template, "input")) === 4);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.scopedQueryAll(document, "input")) === 4);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.setHtml(template, _index_js__WEBPACK_IMPORTED_MODULE_0__.Html.div('<span>OK</span>'));
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.setHtml(fragment, _index_js__WEBPACK_IMPORTED_MODULE_0__.Html.div('<span>OK</span>'));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.scopedQueryAll(fragment, "div")) === 1);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.scopedQueryAll(template, "span")) === 1);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.tag(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.children(template)[0]) === 'div');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.tag(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.children(fragment)[0]) === 'div');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.tag(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.children(document)[0]) === 'html');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.parent(template) === null);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.parent(fragment) === null);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isNotEmpty(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.children(template)));
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.setHtml(template, newHtml); // dom

    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Dom.htmlStr(2) === '2');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Dom.htmlStr(htmlNode) === _index_js__WEBPACK_IMPORTED_MODULE_0__.Dom.htmlStr([htmlNode]));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Dom.parse(htmlStr)));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Dom.parseOne(htmlStr)));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Dom.querySelector("div[data-success]", htmlStr) === _index_js__WEBPACK_IMPORTED_MODULE_0__.Html.span("JavaScript: </span><span>Idle"));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Dom.doc(htmlStr)) === 11);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Dom.selectorInput() === "input,select,textarea,button[type='submit']");
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Dom.selectorInput(true) === "input,select,textarea,button"); // ele

    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.typechecks([]), []));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.hasData(divNode, 'what') === false);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getData(divNode, 'what') === undefined);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.allData(divNode) === undefined);
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.is(textNode));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.is(window));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.is(document));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.is(window));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.is(document));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.is(htmlNode));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.are([selectorOne]));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.are(selectorAll));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.are([htmlNode, true]));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.are(htmlNode));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.isEmpty(selectorOne));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.isEmpty(window));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.isNotEmpty(selectorOne));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.isVisible(htmlNode));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.isVisible(borderBox));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.isHidden(htmlNode));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.isTag(htmlNode, 'html'));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.isFocused(htmlNode));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.isFocusable(htmlNode));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.isFocusable(inputNode));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.some([htmlNode, divNode], 'html'));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.some([htmlNode, divNode], 'body'));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.every([htmlNode, divNode], 'html'));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.every(htmlNode, 'html'));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.tag(htmlNode) === 'html');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getOuterHtml(htmlNode)));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.isNotEmpty(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getBoundingRect(htmlNode)));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getDimension(htmlNode).width));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getDimension(htmlNode).height));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getDimension(contentBox).width > 40);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getDimension(borderBox).width === 25);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getScroll(htmlNode)) === 8);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.attr(htmlNode)));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.hasAttr(htmlNode, 'data-error'));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.hasAttr(htmlNode, 'data-errorz'));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getAttr(htmlNode, 'data-error') === 'none');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getAttr(htmlNode, 'data-errorz') == null);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.isNan(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getAttr(htmlNode, 'data-error', 'int')));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getAttr(htmlNode, 'data-error', 'bool') === null);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.attrStr(htmlNode)));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.dataAttr(htmlNode)));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getAttr(htmlNode, 'data-error') === 'none');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getHtml(htmlNode)));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getHtml(selectorOne)));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getHtml(divNode) === 'test <span>what</span>');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getText(divNode) === 'test what');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getProp(divNode, 'textContent') === 'test what');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getProp(divNode, 'textContent') === 'test what');
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.hasClass(divNode, 'test'));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getOffset(divNode)) === 3);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getOffsetParent(divNode).left === 8);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getOffsetDoc(divNode).left === 8);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getOffsetWin(divNode).left === 8);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getOffsetDoc(divNode)) === 2);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.setHandler(htmlNode, 'what', function (value) {
      setData(this, 'OK', value);
      return true;
    });
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getData(htmlNode, 'OK') == null);
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.hasData(htmlNode, 'test'));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.setData(htmlNode, 'test', 2) === undefined);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.hasData(htmlNode, 'test'));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getData(htmlNode, 'test') === 2);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.flashData(htmlNode, 'test') === 2);
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.hasData(htmlNode, 'test'));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.flashData(htmlNode, 'test', 2) === undefined);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isNotEmpty(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.allData(htmlNode)));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Func.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getHandler(htmlNode, 'what')));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.isTriggerHandlerEqual([htmlNode], 'what', true, 'james'));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.isTriggerHandlerEqual(htmlNode, 'what', true, 'james'));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.isTriggerHandlerEqual(htmlNode, 'what', false, 'james'));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getData(htmlNode, 'OK') == 'james');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.triggerHandler(htmlNode, 'what', 'no') === true);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.triggerHandler(htmlNode, 'what', 'yes') === true);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getData(htmlNode, 'OK') === 'yes');
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.setHandler(htmlNode, 'what', function () {
      return false;
    });
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.triggerHandler(htmlNode, 'what') === false);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.removeHandler(htmlNode, 'what');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getHandler(htmlNode, 'what') === undefined);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.scopedQuery(htmlNode, "body")));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.scopedQuery(htmlNode, "james") == null);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isNotEmpty(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.scopedQueryAll(htmlNode, "body")));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEmpty(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.scopedQueryAll(htmlNode, "james")));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.closest(bodyNode, 'html') === htmlNode);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.filter([htmlNode, bodyNode], "body"), [bodyNode]));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.parent(bodyNode) === htmlNode);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.parent(htmlNode) === document);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.children(htmlNode, 'body'), [bodyNode]));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEmpty(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.children(htmlNode, 'div')));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.next(submitNode, 'div') === divNode);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.prev(divNode) === submitNode);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.prev(divNode, 'span') === null);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.nexts(submitNode)) === 1);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEmpty(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.nexts(divNode)));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.prevs(divNode)) === 4);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.prevs(divNode, "input[type='submit']")) === 3);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.prevs(divNode, "input[type='text']")) === 1);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.prevs(divNode, 'input', "input[type='text']")) === 3);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.replaceHtml(divNode, 'text ok bla <span>what</span>');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.children(divNode)) === 1);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.children(document)) === 1); // ie va avoir besoin d'un polyfill

    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.parents(divNode)) === 4);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.parents(divNode, 'body')) === 1);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.parents(divNode, 'body', 'html')) === 1);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEmpty(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.parents(divNode, 'html', 'body')));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEmpty(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.parents(divNode, 'html', 'html')));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.scopedQuery(template.content, 'input')));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(formTemplate) === 1);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.css(borderBox, 'position')) === 1);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.css(borderBox)) > 250);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getCss(borderBox, 'height') === '25px');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getCss(borderBox, 'height', 'int') === 25);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getCss(borderBox, 'height', 'bool') === null);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getCss(borderBox, 'margin-top') === '10px');
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.hasAttr(divNode, 'what'));
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.setAttr(divNode, 'what', 'ok');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.hasAttr(divNode, 'what'));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getAttr(divNode, 'what') === 'ok');
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.removeAttr(divNode, 'what');
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.hasAttr(divNode, 'what'));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.hasAttr(divNode, 'toggle'));
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.toggleAttr(divNode, 'toggle');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.hasAttr(divNode, 'toggle'));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getAttr(divNode, 'toggle') === '1');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getAttr(divNode, 'toggle', 'int') === 1);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.toggleAttr(divNode, 'toggle');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getAttr(divNode, 'toggle', 'int') === 0);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.toggleAttr(divNode, 'toggle', false);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getAttr(divNode, 'toggle', 'int') === 0);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getAttr(hiddenNode, 'myattr') === "L'article");
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.toggleAttr(divNode, 'toggle', true);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getAttr(divNode, 'toggle', 'int') === 1);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.setHtml(divNode, 'what <span>ok</span>');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getHtml(divNode) === 'what <span>ok</span>');
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.setText(divNode, 'what <span>ok</span>');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getHtml(divNode) === 'what <span>ok</span>');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.setValue(inputNode, [1, 2, 3]) === undefined);
    assert(inputNode.value === _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getValue(inputNode));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getValue(inputNode) === '[1,2,3]');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.toggleClass(divNode, 'test', true) === undefined);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.hasClass(divNode, 'test'));
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.toggleClass(divNode, 'test', false);
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.hasClass(divNode, 'test'));
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.toggleClass(divNode, 'test');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.hasClass(divNode, 'test'));
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.toggleClass(divNode, 'test');
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.hasClass(divNode, 'test'));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getHtml(template) !== newHtml);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getHtml(template)) === 726); // ie11 ajoute border-image: none pour une raison

    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getCss(divNode, 'margin-top') === '0px');
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.setCss(divNode, 'margin-top', '10px');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getCss(divNode, 'margin-top') === '10px');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getCss(divNode, 'margin-top', 'int') === 10);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getCss(borderBox, 'height') === '25px');
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.setDimension(borderBox, 20, 40);
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.isScrollable(htmlNode));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getDimension(borderBox).height === 40);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getCss(borderBox, 'height') === '40px');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.setScroll(htmlNode, 0, 0) === undefined);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.setHtml(divNode, 'OK');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getHtml(divNode) === 'OK');
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.append(divNode, '<div>test</div>');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getHtml(divNode) === 'OK<div>test</div>');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getUri(formNode) === '/ok');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.propObj(formInput, 'name', 'value')) === 4);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.propStr(formInput, 'name') === 'test-suite-test-submit3-test-submit2-test-submit');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.propStr(formInput, 'name', '|') === 'test-suite|test-submit3|test-submit2|test-submit');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.serialize(formInput) === 'test-suite=%5B1%2C2%2C3%5D&test-submit3=&test-submit2=&test-submit=');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getDimension(hiddenNode).width === 0);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getDimension(hiddenNode, true).width > 0);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.isEqual(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getDimension(hiddenNode, 'block'), _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getDimension(hiddenNode, true)));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getDimension(hiddenNode, 'inline').width < _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getDimension(hiddenNode, true).width);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getDimension(hiddenNode).width === 0);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.oddEven([hiddenNode], function (value) {
      assert(value === hiddenNode);
    })); // evt

    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Evt.nameFromType('ok') === 'event');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Evt.nameFromType('ok:what') === 'customEvent');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Evt.createFromType('ok') instanceof Event);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Evt.createFromType('ok:what') instanceof CustomEvent); // handler
    // historyState

    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.HistoryState.is({
      url: 'test',
      timestamp: 1234
    }));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.HistoryState.isChangeValid({
      url: 'test',
      timestamp: 1234
    }, _index_js__WEBPACK_IMPORTED_MODULE_0__.HistoryState.make('what', 'bleh')));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.HistoryState.make('what', 'bleh')) === 3);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEnd("/#what", _index_js__WEBPACK_IMPORTED_MODULE_0__.HistoryState.make('#what', 'bleh').url));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.HistoryState.make('http://google.com/ok#', 'bleh').url === 'http://google.com/ok#');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.HistoryState.make('http://google.com/ok#', 'bleh', true).url === 'http://google.com/ok');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEnd('/#', _index_js__WEBPACK_IMPORTED_MODULE_0__.HistoryState.make("#").url));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEnd('/#', _index_js__WEBPACK_IMPORTED_MODULE_0__.HistoryState.make("#", null, true).url)); // listener
    // nod

    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.is(document));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.is(window));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.is(textNode));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.are([document, htmlNode]));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.are([document, window]));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.getText(textNode) === 'test '); // request

    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(_index_js__WEBPACK_IMPORTED_MODULE_0__.Request.relative()));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(_index_js__WEBPACK_IMPORTED_MODULE_0__.Request.relative(true)));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Request.absolute() !== _index_js__WEBPACK_IMPORTED_MODULE_0__.Request.relative());
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(_index_js__WEBPACK_IMPORTED_MODULE_0__.Request.scheme()));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Request.scheme() !== _index_js__WEBPACK_IMPORTED_MODULE_0__.Request.scheme(true));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Request.fragment()) || _index_js__WEBPACK_IMPORTED_MODULE_0__.Request.fragment() === null);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Request.parse()));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(_index_js__WEBPACK_IMPORTED_MODULE_0__.Request.parse().hostname));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(_index_js__WEBPACK_IMPORTED_MODULE_0__.Request.schemeHost())); // selector
    // target

    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Target.is(document));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Target.is(fragment));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Target.is(window));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Target.is(divNode));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Target.are([window, document]));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Target.is(textNode));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Target.typecheck(fragment) === fragment);
    var arrFragment = [fragment];
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Target.typechecks(arrFragment) === arrFragment);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Target.toArray(selectorAll)) === 1);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Target.toArray(arrFragment) === arrFragment);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Target.toArray(htmlNode)) === 1);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Target.getProp(window, 'outerHeight'))); // uri

    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isInternal("http://google.com/test", "http://google.com/test2"));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isInternal("/test", "/test2"));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isInternal("http://google.com/test", "/test2"));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isExternal("http://googlez.com/test", "http://google.com/test2"));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isExternal("/test", "/test2"));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.hasExtension("http://googlez.com/test"));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.hasExtension("http://googlez.com/test.jpg"));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.hasFragment("http://googlez.com/test.jpg"));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.hasFragment("http://googlez.com/test.jpg#james"));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.hasFragment("/test.jpg#james"));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isOnlyHash('what'));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isOnlyHash('#what'));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isOnlyHash('#'));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isSamePathQuery("/test.jpg?v=2", "http://google.com/test.jpg?v=2#ok"));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isSamePathQuery("/test.jpg?v=2", "http://google.com/test.jpg?v=3#ok"));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isSamePathQueryHash("/test.jpg?v=2#ok", "http://google.com/test.jpg?v=2#ok"));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isSamePathQueryHash("/test.jpg?v=2#ok", "http://google.com/test.jpg?v=3#ok1"));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isHashChange("/test.jpg?v=2#ok", "/test.jpg?v=2#ok2"));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isHashChange("/test.jpg?v=2#ok", "/testz.jpg?v=2#ok2"));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isHashChange("/test.jpg?v=2#ok", "/test.jpg?v=2#ok"));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isHashChange("/test.jpg?v=2", "/test.jpg?v=2"));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isSameWithHash("http://goog.com/test.jpg?v=2#ok", "http://goog.com/test.jpg?v=2#ok"));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isSameWithHash("/test.jpg?v=2", "/test.jpg?v=2"));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.relative("http://google.com/ok?v=2#what") === '/ok?v=2');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.relative("http://google.com/ok?v=2#what", true) === '/ok?v=2#what');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEnd("#james", _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.absolute("#james", true)));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEnd("/testok.php", _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.absolute("testok.php")));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEnd("#james", _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.absolute("testok.php#james")));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEnd("#james", _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.absolute("testok.php#james", true)));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.absolute("http://google.com/testok.php") === "http://google.com/testok.php");
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.path("http://google.com/testok.php?ok=2#meh") === '/testok.php');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.query("http://google.com/testok.php?ok=2#meh") === 'ok=2');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.query("http://google.com/testok.php") === '');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.fragment("http://google.com/testok.php?ok=2#meh") === 'meh');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.fragment("http://google.com/testok.php") === '');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.extension("http://google.com/ok.jpg?v=2#what") === 'jpg');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.basename("http://ok.com/james.jpg") === 'james.jpg');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.basename("james.jpg") === 'james.jpg');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.basename("/james.jpg") === 'james.jpg');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.filename("http://ok.com/james.jpg") === 'james');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.filename("/james.jpg") === 'james');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.build(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.parse("/test.ok?t=2#hash"), false, true) === '/test.ok?t=2#hash');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.build(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.parse("hash"), false, true) === '/hash');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.build(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.parse("https://google.com/ok?v=2#what"), true, true) === "https://google.com/ok?v=2#what");
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.build(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.parse("https://google.com/ok?v=2#what"), true, false) === "https://google.com/ok?v=2");
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.build(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.parse("https://google.com/ok?v=2#what"), false, false) === "/ok?v=2");
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.build(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.parse("https://google.com/ok?v=2#what"), false, true) === "/ok?v=2#what");
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.build({
      pathname: "/testd",
      search: {
        james: "OKé",
        test: 3
      }
    }) === '/testd?james=OK%C3%A9&test=3');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.build({
      pathname: "/testd",
      search: "james=OKé&test=3"
    }) === '/testd?james=OK%C3%A9&test=3');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.build({
      pathname: "/testd",
      search: _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.makeQuery({
        james: "OKé",
        test: 3
      })
    }) === '/testd?james=OK%C3%A9&test=3');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.build({
      pathname: "/meh",
      hash: "OK"
    }, true, true) !== '/meh#OK');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.build({
      pathname: "/meh",
      hash: "OK"
    }, false, true) === '/meh#OK');
    var query = _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.makeQuery('?q=URLUtils.searchéParams&topic=api');
    var query2 = _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.makeQuery({
      q: 'oké',
      what: 2
    });
    var query3 = _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.makeQuery({
      q: "la vi+e est bèlle"
    });
    assert(query instanceof URLSearchParams);
    assert(query.toString() === 'q=URLUtils.search%C3%A9Params&topic=api');
    assert(query2.toString() === 'q=ok%C3%A9&what=2');
    assert(query3.toString() === 'q=la+vi%2Be+est+b%C3%A8lle');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.makeHash(undefined, true) === '#');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.makeHash(undefined, false) === '');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.makeHash("james", true) === '#james');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.makeHash("#james", true) === '#james');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.makeHash("james") === 'james');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.makeHash("#james") === 'james');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.getMailto('mailto:test@test.com') === 'test@test.com');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.getMailto('test@test.com') === 'test@test.com');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.getMailto('mailto:testtest.com') === null); // win

    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Win.hasHistoryApi());
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Win.is(window));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Win.is(document));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Win.isCurrent(window));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Win.isProxy(window));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Win.isScrollable()));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.is(_index_js__WEBPACK_IMPORTED_MODULE_0__.Win.isScrollable('x')));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Win.getScroll()) === 8);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Win.getDimension().width > 0);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Win.getDimension().height > 0);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Win.are([window, window])); // xhr

    var formData = new FormData(formNode);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Xhr.isStatusSuccess(200));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.Xhr.isStatusSuccess(404));
    assert(!_index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.is(formData));
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Xhr.configFromNode(htmlNode)) === 4);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Xhr.configFromNode(htmlNode, null, true)) === 9);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Xhr.pojoToFormData({
      test: "ok",
      hjames: 3
    }) instanceof FormData);
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Xhr.parseError('<html><body><div>TEST</div></body></html>', 'error') === '<div>TEST</div>');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Xhr.parseError('<html><body><div class="ajax-parse-error"><div>TEST</div></div></body></html>', 'error') === '<div class="ajax-parse-error"><div>TEST</div></div>');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Xhr.parseError('') === '');
    assert(_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.length(_index_js__WEBPACK_IMPORTED_MODULE_0__.Xhr.configFromString("/test/ok")) === 1); // cleanup

    _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.remove([formNode, contentBox, contentBox, borderBox]);
  } catch (e) {
    r = false;
    logError(e);
  }

  return r;
}; // export



})();

window.Quid = __webpack_exports__;
/******/ })()
;