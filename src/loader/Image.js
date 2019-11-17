/** @author Patrick Carroll **/


/**
 * @classdesc
 * A Hoot recognized image that can be used for rendering certain file types onto the screen/canvas.
 *
 * @class Image
 * @memberOf Hoot.Loader
 * @constructor
 * @since 1.0.0
 *
 * @param {Hoot.Core.Engine} [Engine] - The game engine itself.
 */
class Image {

    /*
     * Constructor
     */
    constructor(engine) {

        /**
         * @name Hoot.Loader.Image#events - The event handler that manages/handles all the events.
         * @type {Hoot.Events.EventHandler}
         * @readonly
         */
        this.events = new Hoot.Events.EventHandler();


        /**
         * @name Hoot.Loader.Image#engine - The game engine itself.
         * @type {Hoot.Core.Engine}
         * @readonly
         */
        this.engine = engine;


        /**
         * @name Hoot.Loader.Image#manager - The image manager which manages this and all the other images.
         * @type {Hoot.Loader.ImageManager}
         * @readonly
         */
        this.manager = this.engine.getImageManager();

    }


    /*
     * Methods
     */

    /**
     * @method Hoot.Loader.Image#load - Loads the image.
     */
    load() {

    }


    /*
     * Getters & Setters
     */

    /**
     * @method Hoot.Loader.Image#getEvents
     * @returns {Hoot.Events.EventHandler}
     */
    getEvents() {
        return this.events;
    }


    /**
     * @method Hoot.Loader.Image#getEngine
     * @returns {Hoot.Core.Engine}
     */
    getEngine() {
        return this.engine;
    }


    /**
     * @method Hoot.Loader.Image#getManager
     * @returns {Hoot.Loader.ImageManager}
     */
    getManager() {
        return this.manager;
    }

}


//Export
module.exports = Image;