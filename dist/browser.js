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
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// index
// entry file for the module
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

quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.getAttr = Ele.getAttr.bind(Ele);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.setAttr = Ele.setAttr.bind(Ele);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.toggleAttr = Ele.toggleAttr.bind(Ele);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.setCss = Ele.setCss.bind(Ele);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.toggleClass = Ele.toggleClass.bind(Ele);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.getHtml = Ele.getHtml.bind(Ele);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.setHtml = Ele.setHtml.bind(Ele);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.qs = Nod.scopedQuery.bind(Nod);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.qsa = Nod.scopedQueryAll.bind(Nod);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.getProp = Target.getProp.bind(Target);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.setProp = Target.setProp.bind(Target);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.getData = Target.getData.bind(Target);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.setData = Target.setData.bind(Target);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.setHdlr = Target.setHandler.bind(Target);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.setHdlrs = Target.setsHandler.bind(Target);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.allHdlr = Target.allHandler.bind(Target);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.trigHdlr = Target.triggerHandler.bind(Target);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.trigHdlrs = Target.triggersHandler.bind(Target);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.ael = Target.addListener.bind(Target);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.aelDelegate = Target.addDelegatedListener.bind(Target);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.aelPassive = Target.addPassiveListener.bind(Target);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.aelOnce = Target.addListenerOnce.bind(Target);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.rel = Target.removeListener.bind(Target);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.trigEvt = Target.triggerNoBubble.bind(Target);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.trigBubble = Target.triggerBubble.bind(Target);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.trigSetup = Target.triggerSetup.bind(Target);
quidphp_node_temp__WEBPACK_IMPORTED_MODULE_0__.Shortcut.trigTeardown = Target.triggerTeardown.bind(Target); // export



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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// browser
// script with a some functions related to browsers detection
// import
 // export

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // isOldIe
  // retourne vrai si le navigateur est une vieille version de IE (IE 10 ou moins)
  isOldIe: function isOldIe() {
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.Str["in"]('MSIE ', window.navigator.userAgent);
  },
  // isIe11
  // retourne vrai si le navigateur est ie11
  isIe11: function isIe11() {
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.Str["in"]('Trident/', window.navigator.userAgent);
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// dataTarget
// script for storing datas within targets
// import
 // export 

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
    var isPojo = _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(node[dataKey]);

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
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(key);
    var data = this.allData(node);
    return data != null ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.get(key, data) : undefined;
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
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(key, true);
    var $inst = this;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
      var data = $inst.allData(ele, true);
      if (value === undefined) _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.unsetRef(key, data);else _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.setRef(key, value, data);
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// doc
// object for document and document fragment targets
// import
 // export

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
      r.width = _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.round(document.documentElement.scrollWidth);
      r.height = _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.round(document.documentElement.scrollHeight);
    } else {
      var children = this.children(value);
      _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(children, function (ele) {
        var dimension = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getDimension(ele);
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// dom
// script with functions related to html and dom
// import
 // export

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
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(value)) r = value;else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.is(value)) r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.cast(value);else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.is(value)) r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.getHtml(value);else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.is(value)) r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getOuterHtml(value);else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.are(value)) r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getOuterHtml(value);
    return r;
  },
  // htmlNodes
  // prend un maximum d'input et retourne un tableau de nodes
  // possible de cloner
  htmlNodes: function htmlNodes(value, clone) {
    var r = [];
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(value)) r = this.parse(value);else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.is(value)) {
      value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.realNode(value);
      r.push(clone === true ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.clone(value) : value);
    } else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.are(value)) r = clone === true ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.clones(value) : value;else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.is(value)) r.push(clone === true ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.clone(value) : value);
    return r;
  },
  // safeHtml
  // fait quelques modifications à une string html pour éviter des injections
  safeHtml: function safeHtml(html) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(html);
    html = html.replace(/<\!DOCTYPE[^>]*>/i, '');
    html = html.replace(/<(html|head|body)([\s\>])/gi, '<div data-tag="$1"$2');
    html = html.replace(/<\/(html|head|body)\>/gi, '</div>');
    html = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.trim(html);
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
    r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.children(fragment, null, true);
    return r;
  },
  // parseOne
  // comme parse mais retourne seulement la première node du tableau
  parseOne: function parseOne(html) {
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.valueFirst(this.parse(html));
  },
  // querySelector
  // comme parse one, mais cherche pour en enfant via query selector
  // retourne le html de cette node
  querySelector: function querySelector(value, html) {
    var r = undefined;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value);
    var nodes = this.parse(html);

    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isNotEmpty(nodes)) {
      var finds = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.mergedQsa(nodes, value);

      if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isNotEmpty(finds)) {
        var find = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.valueFirst(finds);
        r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getHtml(find);
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
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.accumulate(r.docEle, r.doc, function (ele) {
      return _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.is(ele) ? ele : null;
    });
    r.html = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.find(r.docEle, "[data-tag='html']") || _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.valueFirst(r.docEle);

    if (r.html != null) {
      _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.removeAttr(r.html, 'data-tag');
      r.htmlAttr = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.attr(r.html);
      r.head = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.scopedQuery(r.html, "[data-tag='head']");
      r.body = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.scopedQuery(r.html, "[data-tag='body']");

      if (r.head != null) {
        var title = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.scopedQuery(r.head, "title");
        var titleReplace = {
          '<': '&lt;',
          '>': '&gt;',
          ' & ': ' &amp; '
        };
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.removeAttr(r.head, 'data-tag');
        r.headAttr = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.attr(r.head);
        r.title = title != null ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getText(title) : '?';
        r.titleHtml = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.replace(titleReplace, r.title);
        r.meta = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.scopedQueryAll(r.head, "meta");
      }
    }

    if (r.body != null) {
      _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.removeAttr(r.body, 'data-tag');
      r.bodyAttr = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.attr(r.body);
    } else {
      var _html = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getOuterHtml(r.doc);

      var newBody = _index_js__WEBPACK_IMPORTED_MODULE_0__.Html.div(_html, {
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// eleTarget
// script with many functions related to element nodes
// import
 // export

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

      if (this.match(node, '[tabindex]') || _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](tag, tags)) {
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
        if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](axis, ['x', 'horizontal'])) r = scroll.scrollableX;else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](axis, ['y', 'vertical'])) r = scroll.scrollableY;else r = scroll.scrollableX === true ? scroll.scrollableX : scroll.scrollableY;
      }
    }

    return r;
  },
  // hasAttr
  // retourne vrai si la node a l'attribut
  hasAttr: function hasAttr(node, value) {
    return this.is(node) && _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(value) ? node.hasAttribute(value) : false;
  },
  // hasClass
  // retourne vrai si la node a la classe
  hasClass: function hasClass(node, value) {
    return this.is(node) && _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(value) ? node.classList.contains(value) : false;
  },
  // tag
  // retourne le nom de la tag en lowerCase
  tag: function tag(node) {
    var r = null;
    var tag = this.getProp(node, 'tagName');
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(tag)) r = tag.toLowerCase();
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
      if (start == null || _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isStart(start, value)) r[value] = style.getPropertyValue(value);
    }

    return r;
  },
  // getCss
  // permet de retourner une valeur css
  getCss: function getCss(node, key, cast, pseudo) {
    var r = undefined;
    this.typecheck(node);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(key); // fix pour ie11 qui retourne mauvais computed style pour width/height (box-model)

    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Browser.isIe11() && _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](key, ['width', 'height'])) {
      var dimension = this.getDimension(node);
      r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(dimension[key]) + "px";
    } else {
      var style = window.getComputedStyle(node, pseudo);
      r = style.getPropertyValue(key);
    }

    r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.cast(r, cast);
    return r;
  },
  // attr
  // retourne un objet contenant tous les attributs d'une balise
  attr: function attr(node, start) {
    var r = {};
    this.typecheck(node);
    var attr = node.attributes;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.each(attr, function (value) {
      var name = value.name;
      if (start == null || _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isStart(start, name)) r[name] = value.value;
    });
    return r;
  },
  // attrStr
  // retourne les attributs d'une node sous forme de string
  attrStr: function attrStr(node, start) {
    var r = null;
    var attr = this.attr(node, start);
    if (attr != null) r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.str(attr, '=', ' ', true);
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
      r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.cast(r, cast);
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
    r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.cast(r);
    if (trim === true) r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.trim(r);
    if (cast != null) r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.cast(r, cast);
    return r;
  },
  // getDimension
  // retourne la dimension de la node
  // il est possible de retourner la dimension si on change de façon temporaire le display
  getDimension: function getDimension(node, display) {
    this.typecheck(node);
    display = display === true ? 'block' : display;
    var displayToggle = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(display);
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
      width: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(rect.width),
      height: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(rect.height)
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

    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](tag, ['html', 'body'])) r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Win.getScroll();else {
      var rect = this.getBoundingRect(node);
      r = {
        top: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(node.scrollTop),
        left: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(node.scrollLeft),
        width: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(node.scrollWidth),
        height: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(node.scrollHeight),
        innerWidth: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(rect.width),
        innerHeight: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(rect.height),
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
      top: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(node.offsetTop),
      left: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(node.offsetLeft)
    };
  },
  // getOffsetDoc
  // retourne un objet avec les données pour le offset de la node (par rapport au document)
  getOffsetDoc: function getOffsetDoc(node) {
    var rect = this.getBoundingRect(node);
    var scroll = _index_js__WEBPACK_IMPORTED_MODULE_0__.Win.getScroll();
    return {
      top: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(rect.top + scroll.top),
      left: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(rect.left + scroll.left)
    };
  },
  // getOffsetWin
  // retourne un objet avec les données pour le offset de la node (par rapport à la window)
  getOffsetWin: function getOffsetWin(node) {
    var rect = this.getBoundingRect(node);
    return {
      top: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(rect.top),
      left: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.ceil(rect.left)
    };
  },
  // setAttr
  // change un attribut sur une ou plusieurs nodes
  // si undefined, efface l'attribut
  setAttr: function setAttr(nodes, key, value) {
    nodes = this.toArray(nodes);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(key, true);
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is(value)) value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Json.encode(value);
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.is(value)) value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.toInt(value);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
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
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(key, true);
    var $inst = this;
    var defaultValue = _index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.is(bool) ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Bool.toInt(bool) : null;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
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
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.typecheck(value);
    var $inst = this;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
      _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.each(value, function (v, k) {
        $inst.setAttr(ele, k, v);
      });
    });
  },
  // emptyAttr
  // permet de retirer tous les attributs à une ou plusieurs nodes
  emptyAttr: function emptyAttr(nodes) {
    nodes = this.toArray(nodes);
    var $inst = this;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
      _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.each(ele.attributes, function (value) {
        if (value != null) $inst.removeAttr(ele, value.name);
      });
    });
  },
  // addId
  // ajoute un id aux éléments contenus dans l'objet qui n'en ont pas
  addId: function addId(nodes, value) {
    nodes = this.toArray(nodes);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value);
    var $inst = this;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
      if (!$inst.match(ele, "[id]")) {
        var newId = value + _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.unique();
        $inst.setProp(ele, 'id', newId);
      }
    });
  },
  // setCss
  // permet de changer une valeur inline du css
  setCss: function setCss(node, key, value) {
    this.typecheck(node);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(key);
    key = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.toCamelCase('-', key);
    if (value == null) value = '';
    node.style[key] = value;
  },
  // setValue
  // permet de changer la valeur d'une node
  // si la valeur est un objet, encode en json
  setValue: function setValue(node, value) {
    this.typecheck(node);
    value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.cast(value, true);
    node.value = value;
  },
  // toggleClass
  // permet d'ajouter ou enlever une classe sur une ou plusieurs nodes
  toggleClass: function toggleClass(nodes, value, bool) {
    nodes = this.toArray(nodes);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value, true);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
      ele.classList.toggle(value, bool);
    });
  },
  // setDimension
  // permet de changer la largeur et hauteur de la node
  setDimension: function setDimension(node, width, height) {
    this.typecheck(node);

    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.is(width)) {
      width = width === true ? this.getDimension(node, width).width : width;
      width = width === false ? undefined : width;
      width = _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is(width) ? width + "px" : width;
      this.setCss(node, 'width', width);
    }

    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Scalar.is(height)) {
      height = height === true ? this.getDimension(node, height).height : height;
      height = height === false ? undefined : height;
      height = _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is(height) ? height + "px" : height;
      this.setCss(node, 'height', height);
    }
  },
  // setScroll
  // permet de changer les valeurs du scroll
  setScroll: function setScroll(node, top, left) {
    this.typecheck(node);
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is(top)) node.scrollTop = top > 0 ? top : 0;
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is(left)) node.scrollLeft = left > 0 ? left : 0;
  },
  // focus
  // permet de mettre le focus sur une node
  // possible de tenter de prevent le scroll
  focus: function focus(node, preventScroll) {
    this.typecheck(node);

    if (preventScroll === true) {
      var scroll = _index_js__WEBPACK_IMPORTED_MODULE_0__.Win.getScroll();
      node.focus();
      _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.timeout(0, function () {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Win.setScroll(scroll.top, scroll.left);
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
    var query = _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.makeQuery();
    keyProp = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(keyProp) ? keyProp : 'name';
    valueProp = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(valueProp) ? valueProp : 'value';
    var $inst = this;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
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
    value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Dom.htmlNodes(value);
    node.prepend.apply(node, value);
  },
  // append
  // ajoute du contenu html comme dernier enfant de la node
  append: function append(node, value) {
    this.typecheck(node);
    value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Dom.htmlNodes(value);
    node.append.apply(node, value);
  },
  // insertBefore
  // permet d'insérer une ou plusieurs node avant une autre
  insertBefore: function insertBefore(node, value) {
    this.typecheck(node);
    value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Dom.htmlNodes(value);
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.accumulate([], value, function (ele) {
      return node.insertAdjacentElement('beforebegin', ele);
    });
  },
  // insertAfter
  // permet d'insérer une ou plusieurs node après une autre
  insertAfter: function insertAfter(node, value) {
    this.typecheck(node);
    value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Dom.htmlNodes(value);
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.accumulate([], value, function (ele) {
      return node.insertAdjacentElement('afterend', ele);
    });
  },
  // wrapAll
  // permet d'enrobber un groupe de node dans une une nouvelle balise html
  wrapAll: function wrapAll(nodes, value) {
    var r = null;
    nodes = this.toArray(nodes, true);
    value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Dom.htmlNodes(value);

    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isNotEmpty(value)) {
      r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.valueFirst(value);
      var firstNode = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.valueFirst(nodes);
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// event
// script containing event management functions
// import
 // export

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
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(event.keyCode) && _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](event.keyCode, this.specialKeyCode)) r = true;
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
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(type, true);
    var r = 'event';
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str["in"]('.', type) || _index_js__WEBPACK_IMPORTED_MODULE_0__.Str["in"](':', type)) r = 'customEvent';
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// handler
// script for handler management (functions stored in targets)
// import
 // export

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // isTriggerHandlerEqual
  // retourne vrai si la handler de chaque node retourne la valeur donné en argument
  isTriggerHandlerEqual: function isTriggerHandlerEqual(nodes, type, equal) {
    nodes = this.toArray(nodes);
    var args = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.merge([type], _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.sliceStart(3, arguments));
    var $inst = this;
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.every(nodes, function (ele) {
      var funcArgs = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.merge([ele], args);
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
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(type);
    var handlers = this.allHandler(node);
    return handlers != null ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.get(type, handlers) : undefined;
  },
  // setHandler
  // permet d'emmagasiné une handler dans chaque node fournit en argument
  setHandler: function setHandler(nodes, type, handler) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(type, true);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Func.typecheck(handler);
    nodes = this.toArray(nodes);
    var $inst = this;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
      var all = $inst.allHandler(ele, true);
      _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.setRef(type, handler, all);
    });
  },
  // setsHandler
  // permet d'ajouter plusieurs handlers à partir d'un objet
  setsHandler: function setsHandler(nodes, typeStart, obj) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(typeStart, true);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.typecheck(obj);
    var $inst = this;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.each(obj, function (value, key) {
      var type = typeStart + key;
      $inst.setHandler(nodes, type, value);
    });
  },
  // removeHandler
  // permet de retirer un handler emmagasiné dans une ou plusiuers node
  removeHandler: function removeHandler(nodes, type) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(type, true);
    nodes = this.toArray(nodes);
    var $inst = this;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
      var all = $inst.allHandler(ele, true);
      _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.unsetRef(type, all);
    });
  },
  // triggerHandler
  // permet de lancer le handler sur la première node donnée en argument
  // retourne le résultat de la méthode ou undefined
  triggerHandler: function triggerHandler(node, type) {
    var r = undefined;
    this.typecheck(node);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(type, true);
    var handler = this.getHandler(node, type);

    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Func.is(handler)) {
      var args = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.sliceStart(2, arguments);
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
    var args = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.sliceStart(2, arguments);
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.accumulate([], nodes, function (ele) {
      return $inst.triggerHandler.apply($inst, _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.merge([ele, type], args));
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// historyState
// script with functions related to the history states
// import
 // export

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // is
  // retourne vrai si la valeur est un objet compatible pour un état d'historique
  is: function is(state) {
    var r = false;
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(state) && _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(state.url) && _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.is(state.timestamp)) r = true;
    return r;
  },
  // isChangeValid
  // retourne vrai si le changement de state est valide
  isChangeValid: function isChangeValid(state, previous, differentPathQuery) {
    var r = false;

    if (this.is(state) && this.is(previous)) {
      var isInternal = _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isInternal(state.url, previous.url);
      var hasExtension = _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.hasExtension(state.url);
      var isHashChange = _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isHashChange(state.url, previous.url);
      var isSameWithHash = _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isSameWithHash(state.url, previous.url);

      if (isInternal === true && hasExtension === false && isHashChange === false && isSameWithHash === false) {
        if (!differentPathQuery || _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.isSamePathQuery(state.url, previous.url) === false) r = true;
      }
    }

    return r;
  },
  // make
  // retourne un objet état d'historique (avec url absolute, title et timestamp)
  make: function make(value, title, noEmptyHash) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value);
    var uri = _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.absolute(value, true);
    var valueEndsHash = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEnd('#', value);
    var uriEndsHash = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEnd('#', uri);
    if (noEmptyHash === true && uriEndsHash === true) uri = uri.slice(0, -1);else if (noEmptyHash !== true && valueEndsHash === true && uriEndsHash === false) uri += "#";
    return {
      url: uri,
      title: title || null,
      timestamp: _index_js__WEBPACK_IMPORTED_MODULE_0__.Datetime.now()
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// listener
// script containing event listeners functions for target elements
// import
 // export

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new function () {
  // addListener
  // méthode qui permet d'ajouter un nouveau listener d'événement
  // retourne un tableau avec les paramètres pour retirer le listener
  this.addListener = function (nodes, type, func, register, delegate, option) {
    var r = null;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(type, true);
    nodes = this.toArray(nodes);
    var $inst = this;

    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isNotEmpty(nodes)) {
      option = Object.assign({
        capture: false,
        once: false
      }, option);
      var thirdArg = _index_js__WEBPACK_IMPORTED_MODULE_0__.Evt.support.once === true ? option : option.capture;
      var handler = addListenerHandler.call(this, type, func, delegate, thirdArg, option);
      _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
        ele.addEventListener(type, handler, thirdArg);
        if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(register) || register === true) $inst.registerListener(ele, register, type, handler, thirdArg);
      });
      r = [type, handler, thirdArg];
    }

    return r;
  }; // registerListener
  // permet d'enregistrer un event listener dans la node
  // ceci permet de le retirer par la suite


  this.registerListener = function (node, register, type, handler, option) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(type, true);
    register = register === true ? type : register;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(register, true);
    var data = this.getOrSetData(node, 'rel', {});
    var entry = [type, handler, option];
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.setRef(register, entry, data);
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
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
      if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(args)) {
        var key = args;
        var data = $inst.getData(ele, 'rel');

        if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(data)) {
          args = _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.get(key, data);
          _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.unsetRef(key, data);
        }
      }

      if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(args)) ele.removeEventListener.apply(ele, args);
    });
  }; // trigger
  // utilisé par triggerBubble et triggerNoBubble pour envoyer des événements


  this.trigger = function (nodes, type, option) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(type, true);
    nodes = this.toArray(nodes);

    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isNotEmpty(nodes)) {
      var event = _index_js__WEBPACK_IMPORTED_MODULE_0__.Evt.createFromType(type, option);
      _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
        ele.dispatchEvent(event);
      });
    }
  }; // triggerBubble
  // permet de lancer des événements sur chaque node
  // ces événements bubble


  this.triggerBubble = function (nodes, type) {
    var data = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.sliceStart(2, arguments);
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
    var data = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.sliceStart(2, arguments);
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
    var sliced = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.sliceStart(1, arguments);
    var args = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.merge([nodes, 'component:setup'], sliced);
    this.triggerNoBubble.apply(this, args);
    args = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.merge([nodes, 'component:ready'], sliced);
    this.triggerNoBubble.apply(this, args);
  }; // triggerTeardown
  // fonction utilisé pour lancer le démontange d'un component
  // ces événements ne bubble pas


  this.triggerTeardown = function (nodes) {
    var args = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.merge([nodes, 'component:teardown'], _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.sliceStart(1, arguments));
    return this.triggerNoBubble.apply(this, args);
  }; // addListenerHandler
  // retourne le handler utilisé par addListener
  // ajoute le support pour once si non supporté par le navigateur


  var addListenerHandler = function addListenerHandler(type, func, delegate, thirdArg, option) {
    var $inst = this;

    var handler = function handler(event) {
      var go = delegate == null;
      var context = this;
      if (option.once === true && _index_js__WEBPACK_IMPORTED_MODULE_0__.Evt.support.once === false) $inst.removeListener(event.target, [type, handler, thirdArg]);

      if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(delegate) && event.target != null) {
        go = prepareDelegate.call(this, event, delegate);
        context = event.triggerTarget;
      }

      if (go === true) {
        var args = [event];
        var detail = event.detail;
        args = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.merge(args, detail);
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
    var nodes = _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.scopedQueryAll(this, delegate);
    var delegateTarget = this;
    var triggerTarget = context;
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](context, nodes)) r = true;else {
      r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.some(nodes, function (node) {
        if (node.contains(context)) {
          triggerTarget = _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.closest(context, delegate);
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// nod
// object for element, text and document nodes
// import
 // nodTarget
// méthodes pour un grand ensemble de nodes

var NodTarget = {
  // is
  // retourne vrai si la valeur est un element, un textNode ou un document
  is: function is(value) {
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.is(value) || _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.is(value) || this.isText(value) || this.isDoctype(value);
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
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value, false);

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
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.accumulate([], value, function (ele) {
      return $inst.clone(ele);
    });
  },
  // remove
  // permet d'effacer une ou plusieurs nodes du dom
  // utilise arguments
  remove: function remove(value) {
    var nodes = this.toArray(value);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
      ele.remove();
    });
  }
}; // eleDocTarget
// objet pour les nodes qui contiennent du html (element + doc seulement)

var EleDocTarget = {
  // isEmpty
  // retourne vrai si la valeur est une node et qu'elle est vide
  isEmpty: function isEmpty(value) {
    return this.is(value) ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isEmpty(this.getHtml(value)) : false;
  },
  // isNotEmpty
  // retourne vrai si la valeur est une node et qu'elle n'est pas vide
  isNotEmpty: function isNotEmpty(value) {
    return this.is(value) ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(this.getHtml(value)) : false;
  },
  // getHtml
  // retourne le html dans la node ou le document
  getHtml: function getHtml(value) {
    var r = '';
    var children = _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.children(value, null, true);
    r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getOuterHtml(children);
    return r;
  },
  // setHtml
  // permet de changer le html dans la node ou le document
  // efface tous les enfants et ajoute la ou les nouvelles nodes
  setHtml: function setHtml(node, value, clone) {
    this.typecheck(node);
    node = this.realNode(node);
    var children = _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.children(node, null, true);
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(value)) value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Json.encode(value);
    value = _index_js__WEBPACK_IMPORTED_MODULE_0__.Dom.htmlNodes(value, clone);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.remove(children);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(value, function (ele) {
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
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value);
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
    nodes = _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.toArray(nodes);
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.accumulate('', nodes, function (ele) {
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// request
// script with functions related to the current request
// import
 // export

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // relative
  // retourne l'uri relative courante
  // possible d'inclure le hash
  relative: function relative(hash) {
    var r = window.location.pathname + window.location.search;
    if (hash === true && window.location.hash) r += _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.makeHash(window.location.hash, true);
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
    if (twoDot !== true) r = r.substring(0, _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.pos(':', r));
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
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.makeHash(window.location.hash);
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// selector
// script with methods related to selecting and matching nodes
// import
 // export

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // scopedQuery
  // méthode utilisé pour faire une recherche et retourner le premier enfant d'une target qui match le selector
  // possible de faire un typecheck (ele non vide) si le dernier argument est true
  scopedQuery: function scopedQuery(node, selector, typecheck) {
    var r = null;
    node = this.realNode(node);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.typecheck(node);

    if (node != null) {
      selector = _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.is(node) ? selector : ":scope " + selector;
      r = node.querySelector(selector);
    }

    if (typecheck === true) _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.typecheck(r);
    return r;
  },
  // scopedQueryAll
  // méthode utilisé pour faire une recherche et retourner les enfants d'une target qui match le selector
  // doit retourner un array, pas une node list
  // possible de faire un typecheck (eles non vide) si le dernier argument est true
  scopedQueryAll: function scopedQueryAll(node, selector, typecheck) {
    var r = null;
    node = this.realNode(node);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.typecheck(node);

    if (node != null) {
      selector = _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.is(node) ? selector : ":scope " + selector;
      r = node.querySelectorAll(selector);
      if (r instanceof NodeList) r = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.toArray(r);
    }

    if (typecheck === true) _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.typechecks(r, true);
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
      _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
        _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.mergeRef(r, $inst.scopedQueryAll(ele, selector));
      });
    }

    if (typecheck === true) _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.typechecks(r, true);
    return r;
  },
  // closest
  // retourne la node ou le parent le plus proche de la node qui retourne vrai au pattern
  closest: function closest(node, value) {
    node = this.realNode(node);
    this.typecheck(node);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value);
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
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.typecheck(node);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value);
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.Doc.is(node) ? false : node.matches(value);
  },
  // some
  // retourne vrai si au moins une node retourne vrai au pattern
  some: function some(nodes, value) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value);
    nodes = this.toArray(nodes);
    var $inst = this;
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.some(nodes, function (ele) {
      return $inst.match(ele, value);
    });
  },
  // every
  // retourne vrai si toutes les nodes retournent vrai au pattern
  every: function every(nodes, value) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value);
    nodes = this.toArray(nodes);
    var $inst = this;
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.every(nodes, function (ele) {
      return $inst.match(ele, value);
    });
  },
  // filter
  // permet de filtrer les nodes d'un tableau qui match le pattern
  filter: function filter(nodes, value) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value);
    nodes = this.toArray(nodes);
    var $inst = this;
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.filter(nodes, function (ele) {
      return $inst.match(ele, value);
    });
  },
  // find
  // retourne la première valeur d'un tableau qui match le pattern
  find: function find(nodes, value) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value);
    nodes = this.toArray(nodes);
    var $inst = this;
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.find(nodes, function (ele) {
      return $inst.match(ele, value);
    });
  },
  // parent
  // retourne le parent de la node, le parent peut être valider contre un sélecteur
  parent: function parent(node, value) {
    var r = null;
    node = this.realNode(node);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.typecheck(node);
    var parent = node.parentNode;

    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.is(parent)) {
      if (value == null || _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.match(parent, value)) r = parent;
    }

    return r;
  },
  // parents
  // permet de retourner tous les parents d'une node
  // possible d'arrêter à un point
  parents: function parents(node, value, until) {
    var r = [];
    node = this.realNode(node);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.typecheck(node);

    while (node = _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.parent(node)) {
      if (until != null && _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.match(node, until)) break;
      if (value == null || _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.match(node, value)) r.push(node);
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
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.typecheck(node);
    var hasChildren = node.children != null;
    var childs;
    if (withTextNodes === true) childs = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.toArray(node.childNodes);else {
      if (hasChildren === true) childs = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.toArray(node.children);else {
        childs = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.accumulate([], node.childNodes, function (value) {
          return _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.is(value) ? value : null;
        });
      }
    }
    if (value == null) r = childs;else r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.filter(childs, value);
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// target
// script with basic functions related to event targets elements
// import
 // export

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // is
  // retourne vrai si la valeur est une node, un document, un fragment de document ou window
  is: function is(value) {
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.is(value) || _index_js__WEBPACK_IMPORTED_MODULE_0__.Win.is(value);
  },
  // are
  // retourne vrai si la valeur est une collection de node non vide
  are: function are(value) {
    var $inst = this;
    value = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.toArray(value);
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(value) ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.every(value, function (v) {
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
    if (!are || are === true && type === true && _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.isEmpty(value)) error = true;
    if (error === true) throw new Error(value);
    return value;
  },
  // getProp
  // retourne une propriété d'une node
  getProp: function getProp(node, key) {
    this.typecheck(node);
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.get(key, node);
  },
  // setProp
  // permet de changer la propriété sur une node ou plusieurs node
  setProp: function setProp(nodes, key, value) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(key);
    nodes = this.toArray(nodes);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
      _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.setRef(key, value, ele);
    });
  },
  // propStr
  // prend un ensemble de node et retourne une string concatené pour une même prop
  // un séparateur peut être fourni, sinon utilise -
  propStr: function propStr(nodes, prop, separator) {
    nodes = this.toArray(nodes);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(prop, true);
    separator = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(separator) ? separator : '-';
    var $inst = this;
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.reduce('', nodes, function (r, ele) {
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
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(propKey, true);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(propValue, true);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.each(nodes, function (ele) {
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
    if (this.is(value)) value = [value];else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.is(value)) value = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.toArray(value);else if (value == null) value = [];
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// uri
// script with a set of helper functions related to uri management
// import
 // export

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // isInternal
  // retourne vrai si l'uri et la comparaison ont le même scheme et host
  isInternal: function isInternal(uri, compare) {
    var r = false;

    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(uri)) {
      compare = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(compare) ? this.parse(compare) : _index_js__WEBPACK_IMPORTED_MODULE_0__.Request.parse();
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

    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(uri)) {
      var parse = this.parse(uri);
      if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(parse.hash)) r = true;
    }

    return r;
  },
  // isOnlyHash
  // retourne vrai si l'uri est seulement un hash
  isOnlyHash: function isOnlyHash(value) {
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.length(value) > 1 && _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isStart('#', value);
  },
  // isSamePathQuery
  // retourne vrai si l'uri est la même que la comparaison
  // compare path et query
  isSamePathQuery: function isSamePathQuery(uri, compare) {
    var r = false;

    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(uri)) {
      compare = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(compare) ? this.parse(compare) : _index_js__WEBPACK_IMPORTED_MODULE_0__.Request.parse();
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

    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(uri)) {
      compare = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(compare) ? this.parse(compare) : _index_js__WEBPACK_IMPORTED_MODULE_0__.Request.parse();
      var parse = this.parse(uri);
      if (parse.pathname === compare.pathname && parse.search === compare.search && parse.hash === compare.hash) r = true;
    }

    return r;
  },
  // isHashChange
  // retourne vrai si l'uri est la même que la comparaison mais que le hash change
  isHashChange: function isHashChange(uri, compare) {
    var r = false;

    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(uri)) {
      compare = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(compare) ? this.parse(compare) : _index_js__WEBPACK_IMPORTED_MODULE_0__.Request.parse();
      var parse = this.parse(uri);

      if (parse.protocol === compare.protocol && parse.host === compare.host && parse.pathname === compare.pathname && parse.search === compare.search) {
        if ((_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(parse.hash) || _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(compare.hash)) && parse.hash !== compare.hash) r = true;
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
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(path)) r = path.substr(path.lastIndexOf("/") + 1);
    return r;
  },
  // filename
  // retourne le filename du path de l'uri
  filename: function filename(uri) {
    var r = null;
    var basename = this.basename(uri);
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(basename)) r = basename.replace(/\.[^.$]+$/, '');
    return r;
  },
  // extension
  // retourne l'extension du path de l'uri
  extension: function extension(uri) {
    var r = null;
    var parse = this.parse(uri);
    var regex = /(?:\.([^.]+))?$/;
    var result = regex.exec(parse.pathname);
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr.is(result) && result.length === 2) r = result[1];
    return r;
  },
  // parse
  // retourne un objet avec les différentes parties d'une uri séparés
  // ne marche pas bien sur ie11
  parse: function parse(uri) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(uri);
    var schemeHost = _index_js__WEBPACK_IMPORTED_MODULE_0__.Request.schemeHost();
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isStart("#", uri)) uri = _index_js__WEBPACK_IMPORTED_MODULE_0__.Request.relative() + uri;
    return new URL(uri, schemeHost);
  },
  // build
  // prend un objet parse et retourne une string uri
  // possible de retourner une string relative ou absolute
  // possible d'inclure ou non le hash
  build: function build(parse, absolute, hash) {
    var r = '';
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.typecheck(parse);

    if (absolute === true) {
      r += _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(parse.protocol) ? parse.protocol : _index_js__WEBPACK_IMPORTED_MODULE_0__.Request.scheme(true);
      r += "//";
      r += _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(parse.host) ? parse.host : _index_js__WEBPACK_IMPORTED_MODULE_0__.Request.host();
    }

    r += parse.pathname;

    if (parse.search) {
      var searchParams = parse.search instanceof URLSearchParams ? parse.search : this.makeQuery(parse.search);
      var query = searchParams.toString();
      if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(query)) r += "?" + query;
    }

    if (parse.hash && hash === true) r += this.makeHash(parse.hash, true);
    return r;
  },
  // makeQuery
  // permet de retourner un objet urlSearchParams à partir d'une string ou un object
  makeQuery: function makeQuery(value) {
    var r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(value) ? new URLSearchParams(value) : new URLSearchParams();

    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(value)) {
      _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.each(value, function (value, key) {
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

    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(value)) {
      r = value;
      var hasHash = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isStart('#', r);
      if (symbol === true) r = !hasHash ? "#" + r : r;else if (hasHash) r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.sub(1, true, r);
    } else if (symbol === true) r = '#';

    return r;
  },
  // getMailto
  // permet d'obtenir un email à partir d'un mailto (comme dans un href)
  getMailto: function getMailto(value) {
    var r = null;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value);

    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(value)) {
      var email = value.replace(/mailto:/, '');
      if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Validate.isEmail(email)) r = email;
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// win
// object for window target
// import
 // export

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
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.Obj.is(value) && !(value instanceof Window) && value.window === value;
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
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](axis, ['x', 'horizontal'])) r = scroll.scrollableX;else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Arr["in"](axis, ['y', 'vertical'])) r = scroll.scrollableY;else r = scroll.scrollableX === true ? scroll.scrollableX : scroll.scrollableY;
    return r;
  },
  // getScroll
  // retourne le scroll de la window
  // retourne aussi les dimensions externes et internes, ainsi qu'un bool indiquant si une direction est scrollable
  getScroll: function getScroll() {
    var r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.replace({
      top: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.round(window.pageYOffset),
      left: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.round(window.pageXOffset),
      width: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.round(document.documentElement.scrollWidth),
      height: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.round(document.documentElement.scrollHeight),
      innerWidth: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.round(window.innerWidth),
      innerHeight: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.round(window.innerHeight),
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
      width: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.round(window.innerWidth),
      height: _index_js__WEBPACK_IMPORTED_MODULE_0__.Num.round(window.innerHeight)
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./index.js");
/*
 * This file is part of the QuidPHP package <https://quidphp.com>
 * Author: Pierre-Philippe Emond <emondpph@gmail.com>
 * License: https://github.com/quidphp/browser/blob/master/LICENSE
 */
// xhr
// script with some logic for ajax calls and xhr object
// import
 // export

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new function () {
  // inst
  var $inst = this; // isStatusSuccess
  // retourne vrai si le statut est un succès

  this.isStatusSuccess = function (value) {
    return _index_js__WEBPACK_IMPORTED_MODULE_0__.Integer.is(value) && value >= 200 && value < 400;
  }; // isResponseJson
  // retourne vrai si la réponse du xhr a un content type de json


  this.isResponseJson = function (xhr) {
    var r = false;

    if (xhr instanceof XMLHttpRequest) {
      var contentType = xhr.getResponseHeader('Content-Type');
      if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str["in"]('/json', contentType)) r = true;
    }

    return r;
  }; // trigger
  // fonction utilisé pour lancer une requête ajax
  // retourne null ou un objet promise ajax


  this.trigger = function (config, extraEvents) {
    config = prepareConfig.call(this, config);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(config.url, true);
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
        if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Func.is(config.progress) && event.lengthComputable === true) {
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
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.typecheck(value, true);
    return {
      url: value
    };
  }; // callEvent
  // function utilisé pour faire les appels aux callbacks de la requête ajax
  // pour les callbacks, this est xhr mais xhr est aussi envoyé en dernier argument


  var callEvent = function callEvent(type, xhr, config, extraEvents) {
    var configCallback = _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.get(type, config);
    var extraCallback = _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(extraEvents) ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.get(type, extraEvents) : null;
    var args = _index_js__WEBPACK_IMPORTED_MODULE_0__.ArrLike.sliceStart(4, arguments);
    args.push(xhr);
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Func.is(configCallback)) configCallback.apply(xhr, args);
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Func.is(extraCallback)) extraCallback.apply(xhr, args);
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
    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(config) && _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(config.uri)) config.url = config.uri;
    config = _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.replace(defaultConfig(), config);
    if (!_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.is(config.method)) config.method = 'get';
    config.method = config.method.toUpperCase();

    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(config.data)) {
      if (config.method === 'POST') config.data = this.pojoToFormData(config.data);else {
        var parse = _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.parse(config.url);
        var query = _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.makeQuery(config.data).toString();
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
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.typecheck(node);
    var r = _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.is(config) ? config : {};
    var tagName = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.tag(node);
    if (r.method == null) r = configNodeMethod(r, node, tagName);
    r = configNodeUrl(r, node, tagName);
    if (r.data == null) r = configNodeData(r, node, tagName);
    if (events === true) r = this.configNodeEvents(node, r);
    r = prepareConfig.call(this, r);
    return r;
  }; // configNodeEvents
  // fait la configuration des événements à envoyer à la node pour la requête ajax


  this.configNodeEvents = function (node, config) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.typecheck(node);
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.typecheck(config);

    config.before = function (xhr) {
      _index_js__WEBPACK_IMPORTED_MODULE_0__.Target.triggerHandler(node, 'ajax:before', xhr);
    };

    config.progress = function (percent, event, xhr) {
      _index_js__WEBPACK_IMPORTED_MODULE_0__.Target.triggerHandler(node, 'ajax:progress', percent, event, xhr);
    };

    config.success = function (xhr) {
      var responseText = _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(xhr.responseText) && Xhr.isResponseJson(xhr) ? _index_js__WEBPACK_IMPORTED_MODULE_0__.Json.decode(xhr.responseText) : xhr.responseText;
      _index_js__WEBPACK_IMPORTED_MODULE_0__.Target.triggerHandler(node, 'ajax:success', responseText, xhr);
    };

    config.error = function (xhr) {
      var parsedError = $inst.parseError(xhr.responseText);
      _index_js__WEBPACK_IMPORTED_MODULE_0__.Target.triggerHandler(node, 'ajax:error', parsedError, xhr);
    };

    config.complete = function (xhr) {
      _index_js__WEBPACK_IMPORTED_MODULE_0__.Target.triggerHandler(node, 'ajax:complete', xhr);
    };

    return config;
  }; // pojoToFormData
  // permet de transformer un pojo en formData


  this.pojoToFormData = function (value) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.typecheck(value);
    var r = new FormData();
    _index_js__WEBPACK_IMPORTED_MODULE_0__.Pojo.each(value, function (val, key) {
      r.append(key, val);
    });
    return r;
  }; // parseError
  // cette méthode gère l'affichage pour un xhr en erreur


  this.parseError = function (responseText) {
    var r = '';

    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(responseText)) {
      r = responseText;
      var html;
      var parse = _index_js__WEBPACK_IMPORTED_MODULE_0__.Dom.parseOne(responseText);

      if (parse != null) {
        var ajaxParse = _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.scopedQuery(parse, ".ajax-parse-error");
        if (ajaxParse != null) html = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getOuterHtml(ajaxParse);

        if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Vari.isEmpty(html)) {
          var body = _index_js__WEBPACK_IMPORTED_MODULE_0__.Nod.scopedQuery(parse, "body,[data-tag='body']");
          if (body != null) html = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getHtml(body);
        }

        if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(html)) r = html;
      }
    }

    return r;
  }; // configNodeUrl
  // fait la configuration de l'url pour une node
  // pour un form get, ajoute les données du formulaire comme query


  var configNodeUrl = function configNodeUrl(r, node, tagName) {
    if (r.url == null) r.url = _index_js__WEBPACK_IMPORTED_MODULE_0__.Target.triggerHandler(node, 'ajax:getUrl');
    if (r.url == null) r.url = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getUri(node);

    if (r.url != null && tagName === 'form' && _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.icompare(r.method, 'get')) {
      var query = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.triggerHandler(node, 'form:serialize');
      var parse = _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.parse(r.url);

      if (query != null && parse != null) {
        parse.search = query;
        r.url = _index_js__WEBPACK_IMPORTED_MODULE_0__.Uri.build(parse);
      }
    }

    return r;
  }; // configNodeMethod
  // fait la configuration de la méthode pour une node


  var configNodeMethod = function configNodeMethod(r, node, tagName) {
    r.method = _index_js__WEBPACK_IMPORTED_MODULE_0__.Target.triggerHandler(node, 'ajax:getMethod');

    if (r.method == null) {
      if (tagName === 'form') r.method = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getAttr(node, "method") || 'get';else r.method = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getAttr(node, 'data-method') || 'get';
    }

    return r;
  }; // configNodeData
  // fait la configuration des datas pour une node
  // pour un formulaire seulement si c'est post


  var configNodeData = function configNodeData(r, node, tagName) {
    r.data = _index_js__WEBPACK_IMPORTED_MODULE_0__.Target.triggerHandler(node, 'ajax:getData');

    if (r.data == null && tagName === 'form' && _index_js__WEBPACK_IMPORTED_MODULE_0__.Str.icompare(r.method, 'post')) {
      var formData = new FormData(node);
      var clicked = _index_js__WEBPACK_IMPORTED_MODULE_0__.Target.triggerHandler(node, 'form:getClickedSubmit');

      if (clicked != null) {
        var clickedName = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getAttr(clicked, 'name');

        if (_index_js__WEBPACK_IMPORTED_MODULE_0__.Str.isNotEmpty(clickedName)) {
          var clickedVal = _index_js__WEBPACK_IMPORTED_MODULE_0__.Ele.getValue(clicked);
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












// build
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

// shortcut
const d = console.log;
const assert = _src_debug_js__WEBPACK_IMPORTED_MODULE_1__["default"].assertThrow.bind(_src_debug_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
const logError = _src_debug_js__WEBPACK_IMPORTED_MODULE_1__["default"].logError.bind(_src_debug_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	window.Quid = __webpack_exports__;
/******/ 	
/******/ })()
;