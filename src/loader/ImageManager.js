/** @author Patrick Carroll **/


/**
 * @classdesc
 * Manages all the images that are loaded or being loaded or in queue and are waiting to be loaded.
 *
 * @class ImageManager
 * @memberOf Hoot.Loader
 * @constructor
 * @since 1.0.0
 *
 * @param {Hoot.Core.Engine} [Engine] - The game engine itself.
 */
class ImageManager {

    /*
     * Constructor
     */
    constructor(engine) {

        /**
         * @name Hoot.Loader.ImageManager#events - The event handler that manages/handles all the events.
         * @type {Hoot.Events.EventHandler}
         * @readonly
         */
        this.events = new Hoot.Events.EventHandler();


        /**
         * @name Hoot.Loader.ImageManager#engine - The game engine itself.
         * @type {Hoot.Core.Engine}
         * @readonly
         */
        this.engine = engine;


        /**
         * @name Hoot.Loader.ImageManager#images - All of the images being managed.
         * @type {Array}
         */
        this.images = [];


        /**
         * @name Hoot.Loader.ImageManager#initialized - Has the image manager been initialized.
         * @type {boolean}
         */
        this.initialized = false;

    }


    /*
     * Methods
     */

    /**
     * @method Hoot.Loader.ImageManager#init - Initialize the image manager class.
     */
    init() {

        //END
        console.log("Image Manager initialized!");
        this.initialized = true;

    }


    /**
     * @method Hoot.Loader.ImageManager#loadImage - Loads an image that can be used by sprites.
     *
     * @param {Hoot.Loader.Image} [Image]
     */
    loadImage(image) {

        this.images.push(image);

        image.load();

    }


    /*
     * Getters & Setters
     */

    /**
     * @method Hoot.Loader.ImageManager#getEvents
     * @returns {Hoot.Events.EventHandler}
     */
    getEvents() {
        return this.events;
    }


    /**
     * @method Hoot.Loader.ImageManager#getEngine
     * @returns {Hoot.Core.Engine}
     */
    getEngine() {
        return this.engine;
    }


    /**
     * @method Hoot.Loader.ImageManager#getImages
     * @returns {Array}
     */
    getImages() {
        return this.images;
    }


    /**
     * @method Hoot.Loader.ImageManager#getInitialized
     * @returns {boolean}
     */
    getInitialized() {
        return this.initialized;
    }

}


//Export
module.exports = ImageManager;