(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Hoot", [], factory);
	else if(typeof exports === 'object')
		exports["Hoot"] = factory();
	else
		root["Hoot"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./hoot.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./core/Config.js":
/*!************************!*\
  !*** ./core/Config.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** @author Patrick Carroll **/\n\n\n/**\n * @classdesc\n * Configures all the items handled by the game engine.\n *\n * @class Config\n * @memberOf Hoot.Core\n * @constructor\n * @since 1.0.0\n *\n * @param {object} [Config] - The config given by the game engine.\n */\nclass Config {\n\n    /*\n     * Constructor\n     */\n    constructor(config) {\n\n        if (config === undefined || config === null) {\n            config = {};\n        }\n\n\n        let display = config.display || {};\n\n\n        /**\n         * @name Hoot.Core.Config#parent - The parent element of the display's canvas element.\n         * @type {String | Element}\n         * @readonly\n         */\n        this.parent = this.fix(\"parent\", display, null);\n\n\n        /**\n         * @name Hoot.Core.Config#width - The width of the display's canvas element.\n         * @type {Number}\n         * @readonly\n         */\n        this.width = this.fix(\"width\", display, 800);\n\n\n        /**\n         * @name Hoot.Core.Config#height - The height of the display's canvas element.\n         * @type {Number}\n         * @readonly\n         */\n        this.height = this.fix(\"height\", display, 600);\n\n\n        /**\n         * @name Hoot.Core.Config#smoothing - Should the display's pixels be smoothed or should pixel art stay crisp.\n         * @type {Boolean}\n         * @readonly\n         */\n        this.smoothingEnabled = this.fix(\"smoothingEnabled\", display, null);\n\n    }\n\n\n    /*\n     * Methods\n     */\n    fix(key, object, defaultValue) {\n\n        if (object[key] === undefined || object[key] === null) {\n            return defaultValue;\n        }else {\n\n            return object[key];\n\n        }\n\n    }\n\n\n    /*\n     * Getters & Setters\n     */\n\n    /**\n     * @method Hoot.Core.Config#getParent - Returns the config's parent field value.\n     * @returns {String}\n     */\n    getParent() {\n        return this.parent;\n    }\n\n\n    /**\n     * @method Hoot.Core.Config#getWidth - Returns the config's width field value.\n     * @returns {Number}\n     */\n    getWidth() {\n        return this.width;\n    }\n\n\n    /**\n     * @method Hoot.Core.Config#getHeight - Returns the config's height field value.\n     * @returns {Number}\n     */\n    getHeight() {\n        return this.height;\n    }\n\n\n    /**\n     * @method Hoot.Core.Config#getSmoothingEnabled - Returns the config's smoothingEnabled field value.\n     * @returns {Boolean}\n     */\n    getSmoothingEnabled() {\n        return this.smoothingEnabled;\n    }\n\n\n    /**\n     * @method Hoot.Core.Config#getBackgroundColor - Returns the config's backgroundColor field value.\n     * @returns {String}\n     */\n    getBackgroundColor() {\n        return this.backgroundColor;\n    }\n\n}\n\n\n//Export\nmodule.exports = Config;\n\n//# sourceURL=webpack:///./core/Config.js");

/***/ }),

/***/ "./core/Engine.js":
/*!************************!*\
  !*** ./core/Engine.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** @author Patrick Carroll **/\n\n\n/**\n * @classdesc\n * The engine class handles and manages all of the different components of the game.\n *\n * @class Engine\n * @memberOf Hoot.Core\n * @constructor\n * @since 1.0.0\n *\n * @param {object} [Config] - Configures the engine and it's components.\n */\nclass Engine {\n\n    /*\n     * Constructor\n     */\n    constructor(config) {\n\n        /**\n         * @name Hoot.Core.Engine#events - Handles all the events.\n         * @type {Hoot.Events.EventHandler}\n         * @readonly\n         */\n        this.events = new Hoot.Events.EventHandler();\n\n\n        /**\n         * @name Hoot.Core.Engine#config - Configures the entire game engine.\n         * @type {Hoot.Core.Config}\n         * @readonly\n         */\n        this.config = new Hoot.Core.Config(config);\n\n\n        /**\n         * @name Hoot.Core.Engine#display - The display of the game.\n         * @type {Hoot.Graphics.Display}\n         * @readonly\n         */\n        this.display = new Hoot.Graphics.Display(this);\n\n    }\n\n\n    /*\n     * Getters & Setters\n     */\n\n    /**\n     * @method Hoot.Core.Engine#getEvents\n     * @returns {Hoot.Events.EventHandler}\n     */\n    getEvents() {\n        return this.events;\n    }\n\n\n    /**\n     * @method Hoot.Core.Engine#getConfig\n     * @returns {Hoot.Core.Config}\n     */\n    getConfig() {\n        return this.config;\n    }\n\n\n    /**\n     * @method Hoot.Core.Engine#getDisplay\n     * @returns {Hoot.Graphics.Display}\n     */\n    getDisplay() {\n        return this.display;\n    }\n\n}\n\n\n//Export\nmodule.exports = Engine;\n\n//# sourceURL=webpack:///./core/Engine.js");

/***/ }),

/***/ "./core/index.js":
/*!***********************!*\
  !*** ./core/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/** @author Patrick Carroll **/\n\n\n/**\n * @namespace Hoot.Core\n */\nconst Core = {\n    Config: __webpack_require__(/*! ./Config.js */ \"./core/Config.js\"),\n    Engine: __webpack_require__(/*! ./Engine.js */ \"./core/Engine.js\")\n};\n\n\n//Export\nmodule.exports = Core;\n\n//# sourceURL=webpack:///./core/index.js");

/***/ }),

/***/ "./events/EventHandler.js":
/*!********************************!*\
  !*** ./events/EventHandler.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** @author Patrick Carroll **/\n\n\n/**\n * @classdesc\n * Handles all the emitting and receiving on events.\n *\n * @class EventHandler\n * @memberOf Hoot.Events\n * @constructor\n * @since 1.0.0\n *\n * @see Hoot.Core.Game#events\n */\nclass EventHandler {\n\n    /*\n     * Constructor\n     */\n    constructor() {\n\n        /**\n         * @name Hoot.Events.EventHandler#target\n         * @type {EventTarget}\n         * @readonly\n         */\n        this.target = new EventTarget();\n\n\n        /**\n         * @name Hoot.Events.EventHandler#basePath\n         * @type {string}\n         */\n        this.basePath = \"hoot_\";\n\n    }\n\n\n    /*\n     * Methods\n     */\n\n    /**\n     * @method Hoot.Events.EventEmitter#on - Listens for events.\n     *\n     * @param {string} [Name] - The name of the event being listened for.\n     * @param {function} [Callback] - The callback function called when the event is emitted.\n     * @param {*} [Scope] - The scope of the callback function.\n     */\n    on(name, callback, scope) {\n\n        const cb = callback.bind(scope);\n\n        this.target.addEventListener(name, function(e) {\n\n            cb(e.detail);\n\n        }, { once: false });\n\n    }\n\n\n    /**\n     * @method Hoot.Events.EventEmitter#once - Listens for events but will only emit once after that the listener is removed.\n     *\n     * @param {string} [Name] - The name of the event being listened for.\n     * @param {function} [Callback] - The callback function called when the event is emitted.\n     * @param {*} [Scope] - The scope of the callback function.\n     */\n    once(name, callback, scope) {\n\n        const path = this.basePath + name;\n        const cb = callback.bind(scope);\n\n        this.target.addEventListener(path, function(e) {\n\n            cb(e.detail);\n\n        }, { once: true });\n\n    }\n\n\n    /**\n     * @method Hoot.Events.EventEmitter#emit - Emits events.\n     *\n     * @param {string} [Name] - The name of the event being emitted.\n     * @param {object} [Data] - Data that can be passed through with the event.\n     */\n    emit(name, data) {\n\n        const path = this.basePath + name;\n\n        const event = new CustomEvent(path, { detail: data });\n\n        this.target.dispatchEvent(event);\n\n    }\n\n\n    /*\n     * Getters & Setters\n     */\n\n    /**\n     * @method Hoot.Events.EventEmitter#getTarget\n     * @returns {EventTarget}\n     */\n    getTarget() {\n        return this.target;\n    }\n\n\n    /**\n     * @method Hoot.Events.EventEmitter#getBasePath\n     * @returns {string}\n     */\n    getBasePath() {\n        return this.basePath;\n    }\n\n}\n\n\n//Export\nmodule.exports = EventHandler;\n\n//# sourceURL=webpack:///./events/EventHandler.js");

/***/ }),

/***/ "./events/index.js":
/*!*************************!*\
  !*** ./events/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/** @author Patrick Carroll **/\n\n\n/**\n * @namespace Hoot.Events\n */\nconst Events = {\n    EventHandler: __webpack_require__(/*! ./EventHandler.js */ \"./events/EventHandler.js\")\n};\n\n\n//Export\nmodule.exports = Events;\n\n//# sourceURL=webpack:///./events/index.js");

/***/ }),

/***/ "./graphics/Display.js":
/*!*****************************!*\
  !*** ./graphics/Display.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** @author Patrick Carroll **/\n\n\n/**\n * @classdesc\n * The display class creates and manages the display or game canvas.\n *\n * @class Display\n * @memberOf Hoot.Graphics\n * @constructor\n * @since 1.0.0\n *\n * @param {Hoot.Core.Engine} [Engine] - The game engine or handler.\n */\nclass Display {\n\n    /*\n     * Constructor\n     */\n    constructor(engine) {\n\n        /**\n         * @name Hoot.Graphics.Display#events - Handles all the events.\n         * @type {Hoot.Events.EventHandler}\n         * @readonly\n         */\n        this.events = new Hoot.Events.EventHandler();\n\n\n        /**\n         * @name Hoot.Graphics.Display#engine - The game engine handler itself.\n         * @type {Hoot.Core.Engine}\n         * @readonly\n         */\n        this.engine = engine || null;\n\n\n        /**\n         * @name Hoot.Graphics.Display#canvas - The canvas that game objects will render to.\n         * @type {HTMLCanvasElement}\n         */\n        this.canvas = document.createElement(\"canvas\");\n\n\n        /**\n         * @name Hoot.Graphics.Display#context - The canvas context that will manage canvas rendering.\n         * @type {(CanvasRenderingContext2D | null) | (WebGLRenderingContext | null) | (CanvasRenderingContext2D | WebGLRenderingContext | null)}\n         */\n        this.context = this.canvas.getContext(\"2d\");\n\n\n        this.parent = document.getElementById(this.engine.getConfig().getParent()) || document.body;\n\n\n        /**\n         * @name Hoot.Graphics.Display#initialized - Has the canvas already been initialized.\n         * @type {Boolean}\n         */\n        this.initialized = false;\n\n\n        this.init();\n    }\n\n\n    init() {\n\n        //Smoothing\n        this.context.imageSmoothingEnabled = this.engine.getConfig().getSmoothingEnabled();\n\n        //Background or Clear Color\n        this.canvas.style.backgroundColor = this.engine.getConfig().getBackgroundColor();\n\n        //Size\n        this.canvas.width = this.engine.getConfig().getWidth();\n        this.canvas.height = this.engine.getConfig().getHeight();\n\n\n        if (document.readyState === \"complete\") {\n            this.parent.appendChild(this.canvas);\n        }else {\n            window.onload = function() {\n\n                this.parent.appendChild(this.canvas);\n\n            }.bind(this);\n        }\n\n        //END\n        this.initialized = true;\n\n    }\n\n\n    /*\n     * Getters and Setters\n     */\n\n    /**\n     * @method Hoot.Graphics.Display#getEvents\n     * @returns {Hoot.Events.EventHandler}\n     */\n    getEvents() {\n        return this.events;\n    }\n\n\n    /**\n     * @method Hoot.Graphics.Display#getEngine\n     * @returns {Hoot.Core.Engine}\n     */\n    getEngine() {\n        return this.engine;\n    }\n\n\n    /**\n     * @method Hoot.Graphics.Display#getCanvas\n     * @returns {HTMLCanvasElement}\n     */\n    getCanvas() {\n        return this.canvas;\n    }\n\n\n    /**\n     * @method Hoot.Graphics.Display#getContext\n     * @returns {CanvasRenderingContext2D|WebGLRenderingContext}\n     */\n    getContext() {\n        return this.context;\n    }\n\n}\n\n\n//Export\nmodule.exports = Display;\n\n//# sourceURL=webpack:///./graphics/Display.js");

/***/ }),

/***/ "./graphics/index.js":
/*!***************************!*\
  !*** ./graphics/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/** @author Patrick Carroll **/\n\n\n/**\n * @namespace Hoot.Graphics\n */\nconst Graphics = {\n    Display: __webpack_require__(/*! ./Display.js */ \"./graphics/Display.js\")\n};\n\n\n//Export\nmodule.exports = Graphics;\n\n//# sourceURL=webpack:///./graphics/index.js");

/***/ }),

/***/ "./hoot.js":
/*!*****************!*\
  !*** ./hoot.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/** @author Patrick Carroll **/\n\n\n/**\n * @namespace Hoot\n */\nconst Hoot = {\n    Core: __webpack_require__(/*! ./core */ \"./core/index.js\"),\n    Events: __webpack_require__(/*! ./events */ \"./events/index.js\"),\n    Graphics: __webpack_require__(/*! ./graphics */ \"./graphics/index.js\")\n};\n\n\n//Export\nmodule.exports = Hoot;\n\n//# sourceURL=webpack:///./hoot.js");

/***/ })

/******/ });
});