/** @author Patrick Carroll **/


/**
 * @classdesc
 *
 * @class Sprite
 * @memberOf Hoot.Sprites
 * @constructor
 * @since 1.0.0
 *
 * @param {Hoot.Core.Engine} [Engine] - The game engine itself.
 */
class Sprite {

    /*
     * Constructor
     */
    constructor(engine, image, options) {

        /**
         * @name Hoot.Sprites.Sprite#events - The event handler that manages/handles all the events.
         * @type {Hoot.Events.EventHandler}
         * @readonly
         */
        this.events = new Hoot.Events.EventHandler();


        /**
         * @name Hoot.Sprites.Sprite#engine - The game engine itself.
         * @type {Hoot.Core.Engine}
         * @readonly
         */
        this.engine = engine;


        /**
         * @name Hoot.Sprites.Sprite#manager - The sprite manager that manages this and all the other sprites.
         * @type {Hoot.Sprites.Manager}
         * @readonly
         */
        this.manager = this.engine.getSpriteManager();

    }


    /*
     * Getters & Setters
     */

    /**
     * @method Hoot.Sprites.Sprite#getEvents
     * @returns {Hoot.Events.EventHandler}
     */
    getEvents() {
        return this.events;
    }


    /**
     * @method Hoot.Sprites.Sprite#getEngine
     * @returns {Hoot.Core.Engine}
     */
    getEngine() {
        return this.engine;
    }


    /**
     * @method Hoot.Sprites.Sprite#getManager
     * @returns {Hoot.Sprites.Manager}
     */
    getManager() {
        return this.manager;
    }

}


//Export
module.exports = Sprite;