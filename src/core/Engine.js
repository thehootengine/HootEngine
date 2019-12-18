/** @author Patrick Carroll **/


/**
 * @classdesc
 * The 'Engine' class handles and manages all of the different game components.
 *
 * @class Engine
 * @memberOf Hoot.Core
 * @constructor
 * @since 1.0.0
 *
 * @param {object} [Config] - Configures the engine, and it's sub-components.
 */
class Engine {

    /*
     * Constructor
     */
    constructor(config) {

        /**
         * @name Hoot.Core.Engine#events - Handles all the events.
         * @type {Hoot.Events.EventHandler}
         * @readonly
         */
        this.events = new Hoot.Events.EventHandler();


        /**
         * @name Hoot.Core.Engine#config - Configures the entire game engine.
         * @type {Hoot.Core.Config}
         * @readonly
         */
        this.config = new Hoot.Core.Config(config);


        /**
         * @name Hoot.Core.Engine#display - The display of the game.
         * @type {Hoot.Graphics.Display}
         * @readonly
         */
        this.display = new Hoot.Graphics.Display(this);


        /**
         * @name Hoot.Core.Engine#imageManager - Manages all the images that are loaded or being loaded.
         * @type {Hoot.Loader.ImageManager}
         * @readonly
         */
        this.imageManager = new Hoot.Loader.ImageManager(this);


        /**
         * @name Hoot.Core.Engine#spriteManager - Manages all the game's sprites.
         * @type {Hoot.Sprites.Manager}
         * @readonly
         */
        this.spriteManager = new Hoot.Sprites.Manager(this);


        /**
         * @name Hoot.Core.Engine#objectManager - Manages all the game's objects.
         * @type {Hoot.Objects.Manager}
         * @readonly
         */
        this.objectManager = new Hoot.Objects.Manager(this);


        /**
         * @method Hoot.Core.Engine#initialized - Has the engine been initialized.
         * @type {boolean}
         */
        this.isInitialized = false;


        /**
         * @method Hoot.Core.Engine#booted - Has the engine been booted.
         * @type {boolean}
         */
        this.isBooted = false;


        //END
        this.init();

    }


    /*
     * Methods
     */

    /**
     * @method Hoot.Core.Engine#init - Part of the engine's startup process.
     */
    init() {

        if (document.readyState === "complete") {

            this.boot();

        }else {

            window.onload = function() {

                this.boot();

            }.bind(this);

        }

        //END
        console.log("Engine initialized!");
        this.isInitialized = true;

    }


    /**
     * @method Hoot.Core.Engine#boot - Part of the engine's startup process.
     */
    boot() {

        //Display
        this.display.init();

        //Image-Manager
        this.imageManager.init();

        //Sprite-Manager
        this.spriteManager.init();

        //Object-Manager
        this.objectManager.init();


        //END
        console.log("Engine booted!");
        this.isBooted = true;

    }


    /*
     * Getters & Setters
     */

    /**
     * @method Hoot.Core.Engine#getEvents
     * @returns {Hoot.Events.EventHandler}
     */
    getEvents() {
        return this.events;
    }


    /**
     * @method Hoot.Core.Engine#getConfig
     * @returns {Hoot.Core.Config}
     */
    getConfig() {
        return this.config;
    }


    /**
     * @method Hoot.Core.Engine#getDisplay
     * @returns {Hoot.Graphics.Display}
     */
    getDisplay() {
        return this.display;
    }


    /**
     * @method Hoot.Core.Engine#getImageManager
     * @returns {Hoot.Loader.ImageManager}
     */
    getImageManager() {
        return this.imageManager;
    }


    /**
     * @method Hoot.Core.Engine#getSpriteManager
     * @returns {Hoot.Sprites.Manager}
     */
    getSpriteManager() {
        return this.spriteManager;
    }


    /**
     * @method Hoot.Core.Engine#getObjectManager
     * @returns {Hoot.Objects.Manager}
     */
    getObjectManager() {
        return this.objectManager;
    }


    /**
     * @method Hoot.Core.Engine#getInitialized
     * @returns {Boolean|boolean}
     */
    getInitialized() {
        return this.isInitialized;
    }


    /**
     * @method Hoot.Core.Engine#getBooted
     * @returns {boolean}
     */
    getBooted() {
        return this.isBooted;
    }

}


//Export
module.exports = Engine;