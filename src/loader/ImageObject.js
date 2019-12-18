/** @author Patrick Carroll **/


/**
 * @classdesc
 * A Hoot recognized image that can be used for rendering certain file types onto the screen/canvas.
 *
 * @class ImageObject
 * @memberOf Hoot.Loader
 * @constructor
 * @since 1.0.0
 *
 * @param {Hoot.Core.Engine} [Engine] - The game engine itself.
 */
class ImageObject {

    /*
     * Constructor
     */
    constructor(engine, path, options) {

        /**
         * @name Hoot.Loader.ImageObject#events - The event handler that manages/handles all the events.
         * @type {Hoot.Events.EventHandler}
         * @readonly
         */
        this.events = new Hoot.Events.EventHandler();


        /**
         * @name Hoot.Loader.ImageObject#engine - The game engine itself.
         * @type {Hoot.Core.Engine}
         * @readonly
         */
        this.engine = engine;


        /**
         * @name Hoot.Loader.ImageObject#manager - The image manager which manages this and all the other images.
         * @type {Hoot.Loader.ImageObjectManager}
         * @readonly
         */
        this.manager = this.engine.getImageManager();


        /**
         * @name Hoot.Loader.ImageObject#path - The path where the image can be found.
         * @type {string|null}
         */
        this.path = path || null;


        /**
         * @name Hoot.Loader.ImageObject#options - The options set for the image object, items like width and height.
         * @type {{}}
         */
        this.options = options || {};


        /**
         * @name Hoot.Loader.ImageObject#data - The image itself.
         * @type {Image}
         */
        this.image = new Image();


        /**
         * @name Hoot.Loader.ImageObject#loaded - Has the image been loaded or not.
         * @type {boolean}
         */
        this.isLoaded = false;

    }


    /*
     * Methods
     */

    /**
     * @method Hoot.Loader.ImageObject#load - Loads the image.
     */
    load() {

        this.image.onload = function() {

            this.isLoaded = true;

            this.events.emit("load", { image: this, imageData: this.data });

        }.bind(this);


        if (this.path != null) {
            this.image.src = this.path;
        }

    }


    /*
     * Getters & Setters
     */

    /**
     * @method Hoot.Loader.ImageObject#getEvents
     * @returns {Hoot.Events.EventHandler}
     */
    getEvents() {
        return this.events;
    }


    /**
     * @method Hoot.Loader.ImageObject#getEngine
     * @returns {Hoot.Core.Engine}
     */
    getEngine() {
        return this.engine;
    }


    /**
     * @method Hoot.Loader.ImageObject#getManager
     * @returns {Hoot.Loader.ImageObjectManager}
     */
    getManager() {
        return this.manager;
    }


    /**
     * @method Hoot.Loader.ImageObject#getImage
     * @returns {Hoot.Loader.ImageObject#image
     */
    getImage() {
        return this.image;
    }

}


//Export
module.exports = ImageObject;