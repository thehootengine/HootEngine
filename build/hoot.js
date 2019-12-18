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

eval("/** @author Patrick Carroll **/\n\n\n/**\n * @classdesc\n * The 'Engine' class handles and manages all of the different game components.\n *\n * @class Engine\n * @memberOf Hoot.Core\n * @constructor\n * @since 1.0.0\n *\n * @param {object} [Config] - Configures the engine, and it's sub-components.\n */\nclass Engine {\n\n    /*\n     * Constructor\n     */\n    constructor(config) {\n\n        /**\n         * @name Hoot.Core.Engine#events - Handles all the events.\n         * @type {Hoot.Events.EventHandler}\n         * @readonly\n         */\n        this.events = new Hoot.Events.EventHandler();\n\n\n        /**\n         * @name Hoot.Core.Engine#config - Configures the entire game engine.\n         * @type {Hoot.Core.Config}\n         * @readonly\n         */\n        this.config = new Hoot.Core.Config(config);\n\n\n        /**\n         * @name Hoot.Core.Engine#display - The display of the game.\n         * @type {Hoot.Graphics.Display}\n         * @readonly\n         */\n        this.display = new Hoot.Graphics.Display(this);\n\n\n        /**\n         * @name Hoot.Core.Engine#imageManager - Manages all the images that are loaded or being loaded.\n         * @type {Hoot.Loader.ImageManager}\n         * @readonly\n         */\n        this.imageManager = new Hoot.Loader.ImageManager(this);\n\n\n        /**\n         * @name Hoot.Core.Engine#spriteManager - Manages all the game's sprites.\n         * @type {Hoot.Sprites.Manager}\n         * @readonly\n         */\n        this.spriteManager = new Hoot.Sprites.Manager(this);\n\n\n        /**\n         * @name Hoot.Core.Engine#objectManager - Manages all the game's objects.\n         * @type {Hoot.Objects.Manager}\n         * @readonly\n         */\n        this.objectManager = new Hoot.Objects.Manager(this);\n\n\n        /**\n         * @method Hoot.Core.Engine#initialized - Has the engine been initialized.\n         * @type {boolean}\n         */\n        this.isInitialized = false;\n\n\n        /**\n         * @method Hoot.Core.Engine#booted - Has the engine been booted.\n         * @type {boolean}\n         */\n        this.isBooted = false;\n\n\n        //END\n        this.init();\n\n    }\n\n\n    /*\n     * Methods\n     */\n\n    /**\n     * @method Hoot.Core.Engine#init - Part of the engine's startup process.\n     */\n    init() {\n\n        if (document.readyState === \"complete\") {\n\n            this.boot();\n\n        }else {\n\n            window.onload = function() {\n\n                this.boot();\n\n            }.bind(this);\n\n        }\n\n        //END\n        console.log(\"Engine initialized!\");\n        this.isInitialized = true;\n\n    }\n\n\n    /**\n     * @method Hoot.Core.Engine#boot - Part of the engine's startup process.\n     */\n    boot() {\n\n        //Display\n        this.display.init();\n\n        //Image-Manager\n        this.imageManager.init();\n\n        //Sprite-Manager\n        this.spriteManager.init();\n\n        //Object-Manager\n        this.objectManager.init();\n\n\n        //END\n        console.log(\"Engine booted!\");\n        this.isBooted = true;\n\n    }\n\n\n    /*\n     * Getters & Setters\n     */\n\n    /**\n     * @method Hoot.Core.Engine#getEvents\n     * @returns {Hoot.Events.EventHandler}\n     */\n    getEvents() {\n        return this.events;\n    }\n\n\n    /**\n     * @method Hoot.Core.Engine#getConfig\n     * @returns {Hoot.Core.Config}\n     */\n    getConfig() {\n        return this.config;\n    }\n\n\n    /**\n     * @method Hoot.Core.Engine#getDisplay\n     * @returns {Hoot.Graphics.Display}\n     */\n    getDisplay() {\n        return this.display;\n    }\n\n\n    /**\n     * @method Hoot.Core.Engine#getImageManager\n     * @returns {Hoot.Loader.ImageManager}\n     */\n    getImageManager() {\n        return this.imageManager;\n    }\n\n\n    /**\n     * @method Hoot.Core.Engine#getSpriteManager\n     * @returns {Hoot.Sprites.Manager}\n     */\n    getSpriteManager() {\n        return this.spriteManager;\n    }\n\n\n    /**\n     * @method Hoot.Core.Engine#getObjectManager\n     * @returns {Hoot.Objects.Manager}\n     */\n    getObjectManager() {\n        return this.objectManager;\n    }\n\n\n    /**\n     * @method Hoot.Core.Engine#getInitialized\n     * @returns {Boolean|boolean}\n     */\n    getInitialized() {\n        return this.isInitialized;\n    }\n\n\n    /**\n     * @method Hoot.Core.Engine#getBooted\n     * @returns {boolean}\n     */\n    getBooted() {\n        return this.isBooted;\n    }\n\n}\n\n\n//Export\nmodule.exports = Engine;\n\n//# sourceURL=webpack:///./core/Engine.js");

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

eval("/** @author Patrick Carroll **/\n\n\n/**\n * @classdesc\n * Handles all the emitting and receiving on events.\n *\n * @class EventHandler\n * @memberOf Hoot.Events\n * @constructor\n * @since 1.0.0\n */\nclass EventHandler {\n\n    /*\n     * Constructor\n     */\n    constructor() {\n\n        /**\n         * @name Hoot.Events.EventHandler#target\n         * @type {EventTarget}\n         * @readonly\n         */\n        this.target = new EventTarget();\n\n\n        /**\n         * @name Hoot.Events.EventHandler#basePath\n         * @type {string}\n         */\n        this.basePath = \"hoot_\";\n\n    }\n\n\n    /*\n     * Methods\n     */\n\n    /**\n     * @method Hoot.Events.EventEmitter#on - Listens for events.\n     *\n     * @param {string} [Name] - The name of the event being listened for.\n     * @param {function} [Callback] - The callback function called when the event is emitted.\n     * @param {*} [Scope] - The scope of the callback function.\n     */\n    on(name, callback, scope) {\n\n        const cb = callback.bind(scope);\n\n        this.target.addEventListener(name, function(e) {\n\n            cb(e.detail);\n\n        }, { once: false });\n\n    }\n\n\n    /**\n     * @method Hoot.Events.EventEmitter#once - Listens for events but will only emit once after that the listener is removed.\n     *\n     * @param {string} [Name] - The name of the event being listened for.\n     * @param {function} [Callback] - The callback function called when the event is emitted.\n     * @param {*} [Scope] - The scope of the callback function.\n     */\n    once(name, callback, scope) {\n\n        const path = this.basePath + name;\n        const cb = callback.bind(scope);\n\n        this.target.addEventListener(path, function(e) {\n\n            cb(e.detail);\n\n        }, { once: true });\n\n    }\n\n\n    /**\n     * @method Hoot.Events.EventEmitter#emit - Emits events.\n     *\n     * @param {string} [Name] - The name of the event being emitted.\n     * @param {object} [Data] - Data that can be passed through with the event.\n     */\n    emit(name, data) {\n\n        const path = this.basePath + name;\n\n        const event = new CustomEvent(path, { detail: data });\n\n        this.target.dispatchEvent(event);\n\n    }\n\n\n    /*\n     * Getters & Setters\n     */\n\n    /**\n     * @method Hoot.Events.EventEmitter#getTarget\n     * @returns {EventTarget}\n     */\n    getTarget() {\n        return this.target;\n    }\n\n\n    /**\n     * @method Hoot.Events.EventEmitter#getBasePath\n     * @returns {string}\n     */\n    getBasePath() {\n        return this.basePath;\n    }\n\n}\n\n\n//Export\nmodule.exports = EventHandler;\n\n//# sourceURL=webpack:///./events/EventHandler.js");

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

eval("/** @author Patrick Carroll **/\n\n\n/**\n * @classdesc\n * The display class creates and manages the display or game canvas.\n *\n * @class Display\n * @memberOf Hoot.Graphics\n * @constructor\n * @since 1.0.0\n *\n * @param {Hoot.Core.Engine} [Engine] - The game engine or handler.\n */\nclass Display {\n\n    /*\n     * Constructor\n     */\n    constructor(engine) {\n\n        /**\n         * @name Hoot.Graphics.Display#events - Handles all the events.\n         * @type {Hoot.Events.EventHandler}\n         * @readonly\n         */\n        this.events = new Hoot.Events.EventHandler();\n\n\n        /**\n         * @name Hoot.Graphics.Display#engine - The game engine handler itself.\n         * @type {Hoot.Core.Engine}\n         * @readonly\n         */\n        this.engine = engine;\n\n\n        /**\n         * @name Hoot.Graphics.Display#canvas - The canvas that game objects will render to.\n         * @type {HTMLCanvasElement}\n         */\n        this.canvas = document.createElement(\"canvas\");\n\n\n        /**\n         * @name Hoot.Graphics.Display#context - The canvas context that will manage canvas rendering.\n         * @type {(CanvasRenderingContext2D | null) | (WebGLRenderingContext | null) | (CanvasRenderingContext2D | WebGLRenderingContext | null)}\n         */\n        this.context = this.canvas.getContext(\"2d\");\n\n\n        /**\n         * @name Hoot.Graphics.Display#parent - The parent element where the canvas will be appended too.\n         * @type {HTMLElement}\n         */\n        this.parent = document.getElementById(this.engine.getConfig().getParent()) || document.body;\n\n\n        /**\n         * @name Hoot.Graphics.Display#initialized - Has the display already been initialized.\n         * @type {boolean}\n         */\n        this.initialized = false;\n\n    }\n\n\n    /*\n     * Methods\n     */\n\n    /**\n     * @method Hoot.Graphics.Display#init - Initializes the display class.\n     */\n    init() {\n\n        //Smoothing\n        this.context.imageSmoothingEnabled = this.engine.getConfig().getSmoothingEnabled();\n\n        //Background or Clear Color\n        this.canvas.style.backgroundColor = this.engine.getConfig().getBackgroundColor();\n\n        //Size\n        this.canvas.width = this.engine.getConfig().getWidth();\n        this.canvas.height = this.engine.getConfig().getHeight();\n\n        //Append\n        this.parent.appendChild(this.canvas);\n\n        //END\n        console.log(\"Display initialized!\");\n        this.initialized = true;\n\n    }\n\n\n    /**\n     * @method Hoot.Graphics.Display#drawObject - Draws an object onto the canvas.\n     *\n     * @param {Hoot.Objects.Object} object - The object that will be drawn onto the screen.\n     */\n    drawObject(object) {\n\n\n\n    }\n\n\n    /*\n     * Getters and Setters\n     */\n\n    /**\n     * @method Hoot.Graphics.Display#getEvents\n     * @returns {Hoot.Events.EventHandler}\n     */\n    getEvents() {\n        return this.events;\n    }\n\n\n    /**\n     * @method Hoot.Graphics.Display#getEngine\n     * @returns {Hoot.Core.Engine}\n     */\n    getEngine() {\n        return this.engine;\n    }\n\n\n    /**\n     * @method Hoot.Graphics.Display#getCanvas\n     * @returns {HTMLCanvasElement}\n     */\n    getCanvas() {\n        return this.canvas;\n    }\n\n\n    /**\n     * @method Hoot.Graphics.Display#getContext\n     * @returns {CanvasRenderingContext2D|WebGLRenderingContext}\n     */\n    getContext() {\n        return this.context;\n    }\n\n\n    /**\n     * @method Hoot.Graphics.Display#getParent\n     * @returns {HTMLElement}\n     */\n    getParent() {\n        return this.parent;\n    }\n\n\n    /**\n     * @method Hoot.Graphics.Display#getInitialized\n     * @returns {Boolean}\n     */\n    getInitialized() {\n        return this.initialized;\n    }\n\n}\n\n\n//Export\nmodule.exports = Display;\n\n//# sourceURL=webpack:///./graphics/Display.js");

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

eval("/** @author Patrick Carroll **/\n\n\n/**\n * @namespace Hoot\n */\nconst Hoot = {\n    Core: __webpack_require__(/*! ./core */ \"./core/index.js\"),\n    Events: __webpack_require__(/*! ./events */ \"./events/index.js\"),\n    Graphics: __webpack_require__(/*! ./graphics */ \"./graphics/index.js\"),\n    Loader: __webpack_require__(/*! ./loader */ \"./loader/index.js\"),\n    Objects: __webpack_require__(/*! ./objects */ \"./objects/index.js\"),\n    Sprites: __webpack_require__(/*! ./sprites */ \"./sprites/index.js\"),\n    States: __webpack_require__(/*! ./states */ \"./states/index.js\")\n};\n\n\n//Export\nmodule.exports = Hoot;\n\n//# sourceURL=webpack:///./hoot.js");

/***/ }),

/***/ "./loader/ImageManager.js":
/*!********************************!*\
  !*** ./loader/ImageManager.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** @author Patrick Carroll **/\n\n\n/**\n * @classdesc\n * Manages all the images that are loaded or being loaded or in queue and are waiting to be loaded.\n *\n * @class ImageManager\n * @memberOf Hoot.Loader\n * @constructor\n * @since 1.0.0\n *\n * @param {Hoot.Core.Engine} [Engine] - The game engine itself.\n */\nclass ImageManager {\n\n    /*\n     * Constructor\n     */\n    constructor(engine) {\n\n        /**\n         * @name Hoot.Loader.ImageManager#events - The event handler that manages/handles all the events.\n         * @type {Hoot.Events.EventHandler}\n         * @readonly\n         */\n        this.events = new Hoot.Events.EventHandler();\n\n\n        /**\n         * @name Hoot.Loader.ImageManager#engine - The game engine itself.\n         * @type {Hoot.Core.Engine}\n         * @readonly\n         */\n        this.engine = engine;\n\n\n        /**\n         * @name Hoot.Loader.ImageManager#images - All of the images being managed.\n         * @type {Array}\n         */\n        this.imageObjects = [];\n\n\n        /**\n         * @name Hoot.Loader.ImageManager#initialized - Has the image manager been initialized.\n         * @type {boolean}\n         */\n        this.isInitialized = false;\n\n    }\n\n\n    /*\n     * Methods\n     */\n\n    /**\n     * @method Hoot.Loader.ImageManager#init - Initialize the image manager class.\n     */\n    init() {\n\n        //END\n        console.log(\"Image manager initialized!\");\n        this.initialized = true;\n\n        this.events.emit(\"init\", { imageManager: this });\n\n    }\n\n\n    /**\n     * @method Hoot.Loader.ImageManager#loadImage - Loads an image that can be used by sprites.\n     *\n     * @param {Hoot.Loader.Image} [Image]\n     */\n    loadImage(imageObject) {\n\n        this.imageObjects.push(imageObject);\n\n        imageObject.load();\n\n    }\n\n\n    /*\n     * Getters & Setters\n     */\n\n    /**\n     * @method Hoot.Loader.ImageManager#getEvents\n     * @returns {Hoot.Events.EventHandler}\n     */\n    getEvents() {\n        return this.events;\n    }\n\n\n    /**\n     * @method Hoot.Loader.ImageManager#getEngine\n     * @returns {Hoot.Core.Engine}\n     */\n    getEngine() {\n        return this.engine;\n    }\n\n\n    /**\n     * @method Hoot.Loader.ImageManager#getImages\n     * @returns {Array}\n     */\n    getImages() {\n        return this.images;\n    }\n\n\n    /**\n     * @method Hoot.Loader.ImageManager#getInitialized\n     * @returns {boolean}\n     */\n    getInitialized() {\n        return this.isInitialized;\n    }\n\n}\n\n\n//Export\nmodule.exports = ImageManager;\n\n//# sourceURL=webpack:///./loader/ImageManager.js");

/***/ }),

/***/ "./loader/ImageObject.js":
/*!*******************************!*\
  !*** ./loader/ImageObject.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** @author Patrick Carroll **/\n\n\n/**\n * @classdesc\n * A Hoot recognized image that can be used for rendering certain file types onto the screen/canvas.\n *\n * @class ImageObject\n * @memberOf Hoot.Loader\n * @constructor\n * @since 1.0.0\n *\n * @param {Hoot.Core.Engine} [Engine] - The game engine itself.\n */\nclass ImageObject {\n\n    /*\n     * Constructor\n     */\n    constructor(engine, path, options) {\n\n        /**\n         * @name Hoot.Loader.ImageObject#events - The event handler that manages/handles all the events.\n         * @type {Hoot.Events.EventHandler}\n         * @readonly\n         */\n        this.events = new Hoot.Events.EventHandler();\n\n\n        /**\n         * @name Hoot.Loader.ImageObject#engine - The game engine itself.\n         * @type {Hoot.Core.Engine}\n         * @readonly\n         */\n        this.engine = engine;\n\n\n        /**\n         * @name Hoot.Loader.ImageObject#manager - The image manager which manages this and all the other images.\n         * @type {Hoot.Loader.ImageObjectManager}\n         * @readonly\n         */\n        this.manager = this.engine.getImageManager();\n\n\n        /**\n         * @name Hoot.Loader.ImageObject#path - The path where the image can be found.\n         * @type {string|null}\n         */\n        this.path = path || null;\n\n\n        /**\n         * @name Hoot.Loader.ImageObject#options - The options set for the image object, items like width and height.\n         * @type {{}}\n         */\n        this.options = options || {};\n\n\n        /**\n         * @name Hoot.Loader.ImageObject#data - The image itself.\n         * @type {Image}\n         */\n        this.image = new Image();\n\n\n        /**\n         * @name Hoot.Loader.ImageObject#loaded - Has the image been loaded or not.\n         * @type {boolean}\n         */\n        this.isLoaded = false;\n\n    }\n\n\n    /*\n     * Methods\n     */\n\n    /**\n     * @method Hoot.Loader.ImageObject#load - Loads the image.\n     */\n    load() {\n\n        this.image.onload = function() {\n\n            this.isLoaded = true;\n\n            this.events.emit(\"load\", { image: this, imageData: this.data });\n\n        }.bind(this);\n\n\n        if (this.path != null) {\n            this.image.src = this.path;\n        }\n\n    }\n\n\n    /*\n     * Getters & Setters\n     */\n\n    /**\n     * @method Hoot.Loader.ImageObject#getEvents\n     * @returns {Hoot.Events.EventHandler}\n     */\n    getEvents() {\n        return this.events;\n    }\n\n\n    /**\n     * @method Hoot.Loader.ImageObject#getEngine\n     * @returns {Hoot.Core.Engine}\n     */\n    getEngine() {\n        return this.engine;\n    }\n\n\n    /**\n     * @method Hoot.Loader.ImageObject#getManager\n     * @returns {Hoot.Loader.ImageObjectManager}\n     */\n    getManager() {\n        return this.manager;\n    }\n\n\n    /**\n     * @method Hoot.Loader.ImageObject#getImage\n     * @returns {Hoot.Loader.ImageObject#image\n     */\n    getImage() {\n        return this.image;\n    }\n\n}\n\n\n//Export\nmodule.exports = ImageObject;\n\n//# sourceURL=webpack:///./loader/ImageObject.js");

/***/ }),

/***/ "./loader/index.js":
/*!*************************!*\
  !*** ./loader/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/** @author Patrick Carroll **/\n\n\n/**\n * @namespace Hoot.Loader\n */\nconst Loader = {\n    ImageObject: __webpack_require__(/*! ./ImageObject.js */ \"./loader/ImageObject.js\"),\n    ImageManager: __webpack_require__(/*! ./ImageManager.js */ \"./loader/ImageManager.js\")\n};\n\n\n//Export\nmodule.exports = Loader;\n\n//# sourceURL=webpack:///./loader/index.js");

/***/ }),

/***/ "./objects/Manager.js":
/*!****************************!*\
  !*** ./objects/Manager.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** @author Patrick Carroll **/\n\n\n/**\n * @classdesc\n * Manages all the game's individual objects.\n *\n * @class Manager\n * @memberOf Hoot.Objects\n * @constructor\n * @since 1.0.0\n *\n * @param {Hoot.Core.Engine} [Engine] - The engine itself.\n */\nclass Manager {\n\n    /*\n     * Constructor\n     */\n    constructor(engine) {\n\n        /**\n         * @name Hoot.Objects.Manager#events - The event handler that manages/handles all the events.\n         * @type {Hoot.Events.EventHandler}\n         * @readonly\n         */\n        this.events = new Hoot.Events.EventHandler();\n\n\n        /**\n         * @name Hoot.Objects.Manager#engine - The game engine handler itself.\n         * @type {Hoot.Core.Engine}\n         * @readonly\n         */\n        this.engine = engine;\n\n\n        /**\n         * @name Hoot.Objects.Manager#objects - All of the objects added.\n         * @type {Array}\n         */\n        this.objects = [];\n\n\n        /**\n         * @name Hoot.Objects.Manager#initialized - Has the Object Manager already been initialized.\n         * @type {boolean}\n         */\n        this.initialized = false;\n\n    }\n\n\n    /*\n     * Methods\n     */\n\n    /**\n     * @method Hoot.Objects.Manager#init - Initializes the entire game object manager class.\n     */\n    init() {\n\n        //END\n        console.log(\"Object manager initialized!\");\n        this.initialized = true;\n\n    }\n\n\n    /**\n     * @method Hoot.Objects.Manager#addObject - Add an object to be managed by this manager.\n     * @param {Hoot.Objects.Object} object - The object itself.\n     */\n    addObject(object) {\n\n        this.objects.push(object);\n\n    }\n\n\n    /*\n     * Getters & Setters\n     */\n\n    /**\n     * @method Hoot.Objects.Manager#getEvents\n     * @returns {Hoot.Events.EventHandler}\n     */\n    getEvents() {\n        return this.events;\n    }\n\n\n    /**\n     * @method Hoot.Objects.Manager#getEngine\n     * @returns {Hoot.Core.Engine}\n     */\n    getEngine() {\n        return this.engine;\n    }\n\n\n    /**\n     * @method Hoot.Objects.Manager#getObjects\n     * @returns {Array}\n     */\n    getObjects() {\n        return this.objects;\n    }\n\n\n    /**\n     * @method Hoot.Objects.Manager#getInitialized\n     * @returns {boolean}\n     */\n    getInitialized() {\n        return this.initialized;\n    }\n\n}\n\n\n//Export\nmodule.exports = Manager;\n\n//# sourceURL=webpack:///./objects/Manager.js");

/***/ }),

/***/ "./objects/Object.js":
/*!***************************!*\
  !*** ./objects/Object.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** @author Patrick Carroll **/\n\n\n/**\n * @classdesc\n * An game object which will be updated and can be rendered onto the canvas.\n *\n * @class Object\n * @memberOf Hoot.Objects\n * @constructor\n * @since 1.0.0\n *\n * @param {Hoot.Core.Engine} [Engine] - The object manager itself.\n */\nclass Object {\n\n    /*\n     * Constructor\n     */\n    constructor(engine, sprite) {\n\n        /**\n         * @name Hoot.Objects.Object#events - The event handler that manages/handles all the events.\n         * @type {Hoot.Events.EventHandler}\n         * @readonly\n         */\n        this.events = new Hoot.Events.EventHandler();\n\n\n        /**\n         * @name Hoot.Objects.Object#engine - The game engine itself.\n         * @type {Hoot.Core.Engine}\n         * @readonly\n         */\n        this.engine = engine;\n\n\n        /**\n         * @name Hoot.Objects.Object#manager - The manager of all the game objects.\n         * @type {Hoot.Objects.Manager}\n         * @readonly\n         */\n        this.manager = this.engine.getManager();\n\n\n        /**\n         * @name Hoot.Objects.Object#sprite - The sprite being used for rendering the game object onto the canvas element/display.\n         * @type {Hoot.Sprites.Sprite}\n         */\n        this.sprite = null;\n\n    }\n\n\n    /*\n     * Getters & Setters\n     */\n\n    /**\n     * @method Hoot.Objects.Object#getEvents\n     * @returns {Hoot.Events.EventHandler}\n     */\n    getEvents() {\n        return this.events;\n    }\n\n\n    /**\n     * @method Hoot.Objects.Object#getEngine\n     * @returns {Hoot.Core.Engine}\n     */\n    getEngine() {\n        return this.engine;\n    }\n\n\n    /**\n     * @method Hoot.Objects.Object#getManager\n     * @returns {Hoot.Objects.Manager}\n     */\n    getManager() {\n        return this.manager;\n    }\n\n\n    /**\n     * @method Hoot.Objects.Object#getSprite\n     * @returns {Hoot.Sprites.Sprite}\n     */\n    getSprite() {\n        return this.sprite;\n    }\n\n}\n\n\n//Export\nmodule.exports = Object;\n\n//# sourceURL=webpack:///./objects/Object.js");

/***/ }),

/***/ "./objects/index.js":
/*!**************************!*\
  !*** ./objects/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/** @author Patrick Carroll **/\n\n\n/**\n * @namespace Hoot.Objects\n */\nconst Objects = {\n    Manager: __webpack_require__(/*! ./Manager.js */ \"./objects/Manager.js\"),\n    Object: __webpack_require__(/*! ./Object.js */ \"./objects/Object.js\")\n};\n\n\n//Export\nmodule.exports = Objects;\n\n//# sourceURL=webpack:///./objects/index.js");

/***/ }),

/***/ "./sprites/Manager.js":
/*!****************************!*\
  !*** ./sprites/Manager.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** @author Patrick Carroll **/\n\n\n/**\n * @classdesc\n *\n * @class Manager\n * @memberOf Hoot.Sprites\n * @constructor\n * @since 1.0.0\n *\n * @param {Hoot.Core.Engine} [Engine] - The game engine itself.\n */\nclass Manager {\n\n    /*\n     * Constructor\n     */\n    constructor(engine) {\n\n        /**\n         * @name Hoot.Sprites.Manager#events - The event handler that manages/handles all the events.\n         * @type {Hoot.Events.EventHandler}\n         * @readonly\n         */\n        this.events = new Hoot.Events.EventHandler();\n\n\n        /**\n         * @name Hoot.Sprites.Manager#engine - The game engine itself.\n         * @type {Hoot.Core.Engine}\n         * @readonly\n         */\n        this.engine = engine;\n\n\n        /**\n         * @name Hoot.Sprites.Manager#sprites - All of the sprites being managed by this class.\n         * @type {Array}\n         */\n        this.sprites = [];\n\n\n        /**\n         * @name Hoot.Sprites.Manager#initialized - Has the sprite manager class been initialized.\n         * @type {boolean}\n         */\n        this.initialized = false;\n\n    }\n\n\n    /*\n     * Methods\n     */\n\n    /**\n     * @method Hoot.Sprites.Manager#init - Initializes the sprite manager class.\n     */\n    init() {\n\n        //END\n        console.log(\"Sprite manager initialized!\");\n        this.initialized = true;\n\n    }\n\n\n    /**\n     * @method Hoot.Sprites.Manager#addSprite - Add a sprite to be managed by this class.\n     *\n     * @param {Hoot.Sprites.Sprite} [Sprite]\n     */\n    addSprite(sprite) {\n\n        this.sprites.push(sprite);\n\n    }\n\n\n    /*\n     * Getters & Setters\n     */\n\n    /**\n     * @method Hoot.Sprites.Manager#getEvents\n     * @returns {Hoot.Events.EventHandler}\n     */\n    getEvents() {\n        return this.events;\n    }\n\n\n    /**\n     * @method Hoot.Sprites.Manager#getEngine\n     * @returns {Hoot.Core.Engine}\n     */\n    getEngine() {\n        return this.engine;\n    }\n\n\n    /**\n     * @method Hoot.Sprites.Manager#getSprites\n     * @returns {Array}\n     */\n    getSprites() {\n        return this.sprites;\n    }\n\n\n    /**\n     * @method Hoot.Sprites.Manager#getInitialized\n     * @returns {boolean}\n     */\n    getInitialized() {\n        return this.initialized;\n    }\n\n}\n\n\n//Export\nmodule.exports = Manager;\n\n//# sourceURL=webpack:///./sprites/Manager.js");

/***/ }),

/***/ "./sprites/Sprite.js":
/*!***************************!*\
  !*** ./sprites/Sprite.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** @author Patrick Carroll **/\n\n\n/**\n * @classdesc\n *\n * @class Sprite\n * @memberOf Hoot.Sprites\n * @constructor\n * @since 1.0.0\n *\n * @param {Hoot.Core.Engine} [Engine] - The game engine itself.\n */\nclass Sprite {\n\n    /*\n     * Constructor\n     */\n    constructor(engine, image, options) {\n\n        /**\n         * @name Hoot.Sprites.Sprite#events - The event handler that manages/handles all the events.\n         * @type {Hoot.Events.EventHandler}\n         * @readonly\n         */\n        this.events = new Hoot.Events.EventHandler();\n\n\n        /**\n         * @name Hoot.Sprites.Sprite#engine - The game engine itself.\n         * @type {Hoot.Core.Engine}\n         * @readonly\n         */\n        this.engine = engine;\n\n\n        /**\n         * @name Hoot.Sprites.Sprite#manager - The sprite manager that manages this and all the other sprites.\n         * @type {Hoot.Sprites.Manager}\n         * @readonly\n         */\n        this.manager = this.engine.getSpriteManager();\n\n    }\n\n\n    /*\n     * Getters & Setters\n     */\n\n    /**\n     * @method Hoot.Sprites.Sprite#getEvents\n     * @returns {Hoot.Events.EventHandler}\n     */\n    getEvents() {\n        return this.events;\n    }\n\n\n    /**\n     * @method Hoot.Sprites.Sprite#getEngine\n     * @returns {Hoot.Core.Engine}\n     */\n    getEngine() {\n        return this.engine;\n    }\n\n\n    /**\n     * @method Hoot.Sprites.Sprite#getManager\n     * @returns {Hoot.Sprites.Manager}\n     */\n    getManager() {\n        return this.manager;\n    }\n\n}\n\n\n//Export\nmodule.exports = Sprite;\n\n//# sourceURL=webpack:///./sprites/Sprite.js");

/***/ }),

/***/ "./sprites/index.js":
/*!**************************!*\
  !*** ./sprites/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/** @author Patrick Carroll **/\n\n\n/**\n * @namespace Hoot.Sprites\n */\nconst Sprites = {\n    Manager: __webpack_require__(/*! ./Manager.js */ \"./sprites/Manager.js\"),\n    Sprite: __webpack_require__(/*! ./Sprite.js */ \"./sprites/Sprite.js\")\n};\n\n\n//Export\nmodule.exports = Sprites;\n\n//# sourceURL=webpack:///./sprites/index.js");

/***/ }),

/***/ "./states/State.js":
/*!*************************!*\
  !*** ./states/State.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** @author Patrick Carroll **/\n\n\n/**\n * @classdesc\n * A state is the section of the game's run process.\n *\n * @class State\n * @memberOf Hoot.States\n * @constructor\n * @since 1.0.0\n *\n * @param {String} name - The name of the state, also used to call the state.\n * @param {Function} callback - Called before the state code and other functions are called.\n * @param {*} callbackScope - The scope of the callback function.\n * @param {Hoot.States.StateManager} stateManager - The state manager itself.\n */\nclass State {\n\n    /*\n     * Constructor\n     */\n    constructor(name, callbackScope, stateManager) {\n\n        /**\n         * @name Hoot.States.State#events - The event handler which handles all events wither emitted or recieved during the game.\n         * @type {Hoot.Events.EventHandler}\n         * @readonly\n         */\n        this.events = new Hoot.Events.EventHandler();\n\n\n        /**\n         * @name Hoot.States.State#name - The name of the state.\n         * @type {*|string}\n         */\n        this.name = name || \"\";\n\n\n        /**\n         * @name Hoot.States.State#preCallback - The first callback function usually used to initialize the state.\n         * @type {Function|null}\n         */\n        this.preCallback = null;\n\n\n        /**\n         * @name Hoot.States.State#callback - The second callback function usually holds the main code/processes of the state.\n         * @type {Function|null}\n         */\n        this.callback = null;\n\n\n        /**\n         * @name Hoot.States.State#postCallback - The third callback function usually holds the clean up code/processes of the state.\n         * @type {Function|null}\n         */\n        this.postCallback = null;\n\n\n        /**\n         * @name Hoot.States.State#callbackScope - The scope of the callback functions.\n         * @type {*|null}\n         */\n        this.callbackScope = callbackScope || null;\n\n\n        /**\n         * @name Hoot.States.State#stateManager - The state manager itself.\n         * @type {Hoot.States.StateManager|null}\n         */\n        this.stateManager = stateManager || null;\n\n\n        /**\n         * @name Hoot.States.State#engine - The game engine itself.\n         * @type {Hoot.Core.Engine|null}\n         */\n        this.engine = this.stateManager.getEngine() || null;\n\n\n        /**\n         * @name Hoot.States.State#shouldLoop - Should this state be looped.\n         * @type {boolean}\n         */\n        this.shouldLoop = false;\n\n\n        /**\n         * @name Hoot.States.State#enableRender - Enables the render function if this state is being looped.\n         * @type {boolean}\n         */\n        this.enableRender = false;\n\n\n        /**\n         * @name Hoot.States.State#preferredFPS - The preferred frames per second of the game.\n         * @type {number}\n         */\n        this.preferredFPS = 60;\n\n\n        /**\n         * @name Hoot.States.State#timestep - Used if the state should be looped.\n         * @type {number}\n         */\n        this.timestep = 1000 / this.preferredFPS;\n\n\n        /**\n         * @name Hoot.States.State#lastFrameTimeMs - The last frame time (milliseconds).\n         * @type {number}\n         */\n        this.lastFrameTimeMs = 0;\n\n\n        /**\n         * @name Hoot.States.State#delta - The accumulated time, that was skipped.\n         * @type {number}\n         */\n        this.delta = 0;\n\n\n        /**\n         * @name Hoot.States.State#isActive - Is this state currently active or not?\n         * @type {boolean}\n         */\n        this.isActive = false;\n\n    }\n\n\n    start(data) {\n\n        if (!this.isActive) {\n            this.isActive = true;\n\n            if (this.shouldLoop) {\n                let cb = this.init.bind(this.initScope);\n                cb(this, data);\n\n                requestAnimationFrame(this.mainLoop);\n            }else {\n                let cb = this.init.bind(this.initScope);\n                cb(this, data);\n\n                requestAnimationFrame(this.mainLoop);\n            }\n        }else {\n            console.log(\"State already active!\");\n        }\n\n    }\n\n\n    mainLoop(timestamp) {\n\n        if (this.isActive && this.shouldLoop) {\n            this.delta += timestamp - this.lastFrameTimeMs;\n            this.lastFrameTimeMs = timestamp;\n\n            while(this.delta >= this.timestep) {\n                this.tick(this.timestep);\n\n                this.delta -= this.timestep;\n            }\n\n            if (this.enableRender) {\n                this.render();\n            }\n\n            requestAnimationFrame(this.mainLoop);\n        }\n\n    }\n\n\n    tick(delta) {\n\n        for (let i in this.callbacks.tick) {\n            this.callbacks.tick[i](this);\n        }\n\n    }\n\n\n    render() {\n\n        for (let i in this.callbacks.render) {\n            this.callbacks.render[i](this);\n        }\n\n    }\n\n\n    stop() {\n\n        this.isActive = false;\n\n    }\n\n\n    /*\n     * Getters & Setters\n     */\n\n    /**\n     * @method Hoot.States.State#getEvents\n     * @returns {Hoot.Events.EventHandler}\n     */\n    getEvents() {\n        return this.events;\n    }\n\n\n    /**\n     * @method Hoot.States.State#getName\n     * @returns {*|string}\n     */\n    getName() {\n        return this.name;\n    }\n\n\n    /**\n     * @method Hoot.States.State#getCallback\n     * @returns {*|Function}\n     */\n    getCallback() {\n        return this.callback;\n    }\n\n\n    /**\n     * @method Hoot.States.State#getCallbackScope\n     * @returns {*}\n     */\n    getCallbackScope() {\n        return this.callbackScope;\n    }\n\n\n    /**\n     * @method Hoot.States.State#getStateManager\n     * @returns {Hoot.States.StateManager}\n     */\n    getStateManager() {\n        return this.stateManager;\n    }\n\n\n    /**\n     * @method Hoot.States.State#getEngine\n     * @returns {Hoot.Core.Engine}\n     */\n    getEngine() {\n        return this.engine;\n    }\n\n\n    /**\n     * @method Hoot.States.State#getShouldLoop\n     * @returns {boolean}\n     */\n    getShouldLoop() {\n        return this.shouldLoop;\n    }\n\n\n    /**\n     * @method Hoot.States.State#getEnableRender\n     * @returns {boolean}\n     */\n    getEnableRender() {\n        return this.enableRender;\n    }\n\n\n    /**\n     * @method Hoot.States.State#getPreferredFPS\n     * @returns {number}\n     */\n    getPreferredFPS() {\n        return this.preferredFPS;\n    }\n\n\n    /**\n     * @method Hoot.States.State#getTimestep\n     * @returns {number}\n     */\n    getTimestep() {\n        return this.timestep;\n    }\n\n\n    /**\n     * @method Hoot.States.State#getLastFrameTimeMs\n     * @returns {number}\n     */\n    getLastFrameTimeMs() {\n        return this.lastFrameTimeMs;\n    }\n\n\n    /**\n     * @method Hoot.States.State#getDelta\n     * @returns {number}\n     */\n    getDelta() {\n        return this.delta;\n    }\n\n\n    /**\n     * @method Hoot.States.State#getActive\n     * @returns {boolean}\n     */\n    getActive() {\n        return this.isActive;\n    }\n\n}\n\n\n//Export\nmodule.exports = State;\n\n//# sourceURL=webpack:///./states/State.js");

/***/ }),

/***/ "./states/StateManager.js":
/*!********************************!*\
  !*** ./states/StateManager.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** @author Patrick Carroll **/\n\n\n/**\n * @classdesc\n * Handles all the states in the game from the default ones like 'preload' and 'draw' to the ones added by developers.\n *\n * @class StateManager\n * @memberOf Hoot.States\n * @constructor\n * @since 1.0.0\n *\n * @param {Hoot.States.Engine} [Engine] - The engine itself.\n */\nclass StateManager {\n\n    /*\n     * Constructor\n     */\n    constructor(engine) {\n\n        /**\n         * @name Hoot.States.StateManager#events - The event handler itself, that manages all the events of the game.\n         * @type {Hoot.Events.EventHandler}\n         * @readonly\n         */\n        this.events = new Hoot.Events.EventHandler();\n\n\n        /**\n         * @name Hoot.States.StateManager#engine - The game engine itself.\n         * @type {Hoot.States.Engine}\n         * @readonly\n         */\n        this.engine = engine;\n\n\n        /**\n         * @name Hoot.States.StateManager#states - All of the states, includes states added by default by the game engine.\n         * @type {Array}\n         */\n        this.states = [];\n\n\n        /**\n         * @name Hoot.States.StateManager#isInitialized - Is the state manager initialized.\n         * @type {boolean}\n         */\n        this.isInitialized = false;\n\n    }\n\n\n    /*\n     * Methods\n     */\n\n    init() {\n\n        //END\n        console.log(\"State manager initialized!\");\n        this.isInitialized = true;\n\n    }\n\n\n    add(name, callback, callbackScope, shouldLoop, enableRender) {\n\n        let state = new Hoot.States.State(name, callback, callbackScope, this);\n\n        state.shouldLoop = shouldLoop || false;\n        state.enableRender = enableRender || false;\n\n        this.states.push(state);\n\n    }\n\n\n    /*\n     * Getters & Setters\n     */\n\n    /**\n     * @method Hoot.States.StateManager#getEvents\n     * @returns {Hoot.Events.EventHandler}\n     */\n    getEvents() {\n        return this.events;\n    }\n\n\n    /**\n     * @method Hoot.States.StateManager#getEngine\n     * @returns {Hoot.States.Engine}\n     */\n    getEngine() {\n        return this.engine;\n    }\n\n\n    /**\n     * @method Hoot.States.StateManager#getState\n     * @param {String} name - The name of the state.\n     * @returns {Hoot.States.State}\n     */\n    getState(name) {\n        for (let i in this.states) {\n            if (this.states[i].name === name) {\n                return this.states[i];\n            }\n        }\n    }\n\n\n    /**\n     * @method Hoot.States.StateManager#getInitialized\n     * @returns {boolean}\n     */\n    getInitialized() {\n        return this.isInitialized;\n    }\n\n}\n\n\n//Export\nmodule.exports = StateManager;\n\n//# sourceURL=webpack:///./states/StateManager.js");

/***/ }),

/***/ "./states/index.js":
/*!*************************!*\
  !*** ./states/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/** @author Patrick Carroll **/\n\n\n/**\n * @namespace Hoot.States\n */\nconst States = {\n    StateManager: __webpack_require__(/*! ./StateManager.js */ \"./states/StateManager.js\"),\n    State: __webpack_require__(/*! ./State.js */ \"./states/State.js\")\n};\n\n\n//Export\nmodule.exports = States;\n\n//# sourceURL=webpack:///./states/index.js");

/***/ })

/******/ });
});