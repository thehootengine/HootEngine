/** @author Patrick Carroll **/


/**
 * @classdesc
 *
 * @class Manager
 * @memberOf Hoot.Sprites
 * @constructor
 * @since 1.0.0
 *
 * @param {Hoot.Core.Engine} [Engine] - The game engine itself.
 */
class Manager {

    /*
     * Constructor
     */
    constructor(engine) {

        /**
         * @name Hoot.Sprites.Manager#events - The event handler that manages/handles all the events.
         * @type {Hoot.Events.EventHandler}
         * @readonly
         */
        this.events = new Hoot.Events.EventHandler();


        /**
         * @name Hoot.Sprites.Manager#engine - The game engine itself.
         * @type {Hoot.Core.Engine}
         * @readonly
         */
        this.engine = engine;


        /**
         * @name Hoot.Sprites.Manager#sprites - All of the sprites being managed by this class.
         * @type {Array}
         */
        this.sprites = [];


        /**
         * @name Hoot.Sprites.Manager#initialized - Has the sprite manager class been initialized.
         * @type {boolean}
         */
        this.initialized = false;

    }


    /*
     * Methods
     */

    /**
     * @method Hoot.Sprites.Manager#init - Initializes the sprite manager class.
     */
    init() {

        //END
        console.log("Sprite manager initialized!");
        this.initialized = true;

    }


    /**
     * @method Hoot.Sprites.Manager#addSprite - Add a sprite to be managed by this class.
     *
     * @param {Hoot.Sprites.Sprite} [Sprite]
     */
    addSprite(sprite) {

        this.sprites.push(sprite);

    }


    /*
     * Getters & Setters
     */

    /**
     * @method Hoot.Sprites.Manager#getEvents
     * @returns {Hoot.Events.EventHandler}
     */
    getEvents() {
        return this.events;
    }


    /**
     * @method Hoot.Sprites.Manager#getEngine
     * @returns {Hoot.Core.Engine}
     */
    getEngine() {
        return this.engine;
    }


    /**
     * @method Hoot.Sprites.Manager#getSprites
     * @returns {Array}
     */
    getSprites() {
        return this.sprites;
    }


    /**
     * @method Hoot.Sprites.Manager#getInitialized
     * @returns {boolean}
     */
    getInitialized() {
        return this.initialized;
    }

}


//Export
module.exports = Manager;