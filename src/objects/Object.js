/** @author Patrick Carroll **/


/**
 * @classdesc
 * An game object which will be updated and can be rendered onto the canvas.
 *
 * @class Object
 * @memberOf Hoot.Objects
 * @constructor
 * @since 1.0.0
 *
 * @param {Hoot.Core.Engine} [Engine] - The object manager itself.
 */
class Object {

    /*
     * Constructor
     */
    constructor(engine, sprite) {

        /**
         * @name Hoot.Objects.Object#events - The event handler that manages/handles all the events.
         * @type {Hoot.Events.EventHandler}
         * @readonly
         */
        this.events = new Hoot.Events.EventHandler();


        /**
         * @name Hoot.Objects.Object#engine - The game engine itself.
         * @type {Hoot.Core.Engine}
         * @readonly
         */
        this.engine = engine;


        /**
         * @name Hoot.Objects.Object#manager - The manager of all the game objects.
         * @type {Hoot.Objects.Manager}
         * @readonly
         */
        this.manager = this.engine.getManager();


        /**
         * @name Hoot.Objects.Object#sprite - The sprite being used for rendering the game object onto the canvas element/display.
         * @type {Hoot.Sprites.Sprite}
         */
        this.sprite = null;

    }


    /*
     * Getters & Setters
     */

    /**
     * @method Hoot.Objects.Object#getEvents
     * @returns {Hoot.Events.EventHandler}
     */
    getEvents() {
        return this.events;
    }


    /**
     * @method Hoot.Objects.Object#getEngine
     * @returns {Hoot.Core.Engine}
     */
    getEngine() {
        return this.engine;
    }


    /**
     * @method Hoot.Objects.Object#getManager
     * @returns {Hoot.Objects.Manager}
     */
    getManager() {
        return this.manager;
    }


    /**
     * @method Hoot.Objects.Object#getSprite
     * @returns {Hoot.Sprites.Sprite}
     */
    getSprite() {
        return this.sprite;
    }

}


//Export
module.exports = Object;