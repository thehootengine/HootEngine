/** @author Patrick Carroll **/


/**
 * @classdesc
 * Manages all the game's individual objects.
 *
 * @class Manager
 * @memberOf Hoot.Objects
 * @constructor
 * @since 1.0.0
 *
 * @param {Hoot.Core.Engine} [Engine] - The engine itself.
 */
class Manager {

    /*
     * Constructor
     */
    constructor(engine) {

        /**
         * @name Hoot.Objects.Manager#events - The event handler that manages/handles all the events.
         * @type {Hoot.Events.EventHandler}
         * @readonly
         */
        this.events = new Hoot.Events.EventHandler();


        /**
         * @name Hoot.Objects.Manager#engine - The game engine handler itself.
         * @type {Hoot.Core.Engine}
         * @readonly
         */
        this.engine = engine;


        /**
         * @name Hoot.Objects.Manager#objects - All of the objects added.
         * @type {Array}
         */
        this.objects = [];


        /**
         * @name Hoot.Objects.Manager#initialized - Has the Object Manager already been initialized.
         * @type {boolean}
         */
        this.initialized = false;

    }


    /*
     * Methods
     */

    /**
     * @method Hoot.Objects.Manager#init - Initializes the entire game object manager class.
     */
    init() {

        //END
        console.log("Object manager initialized!");
        this.initialized = true;

    }


    /**
     * @method Hoot.Objects.Manager#addObject - Add an object to be managed by this manager.
     * @param {Hoot.Objects.Object} object - The object itself.
     */
    addObject(object) {

        this.objects.push(object);

    }


    /*
     * Getters & Setters
     */

    /**
     * @method Hoot.Objects.Manager#getEvents
     * @returns {Hoot.Events.EventHandler}
     */
    getEvents() {
        return this.events;
    }


    /**
     * @method Hoot.Objects.Manager#getEngine
     * @returns {Hoot.Core.Engine}
     */
    getEngine() {
        return this.engine;
    }


    /**
     * @method Hoot.Objects.Manager#getObjects
     * @returns {Array}
     */
    getObjects() {
        return this.objects;
    }


    /**
     * @method Hoot.Objects.Manager#getInitialized
     * @returns {boolean}
     */
    getInitialized() {
        return this.initialized;
    }

}


//Export
module.exports = Manager;