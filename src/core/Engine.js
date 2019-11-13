/** @author Patrick Carroll **/


/**
 * @classdesc
 * The engine class handles and manages all of the different components of the game.
 *
 * @class Engine
 * @memberOf Hoot.Core
 * @constructor
 * @since 1.0.0
 *
 * @param {object} [Config] - Configures the engine and it's components.
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
     * @method Hoot.Core.Engine#getDisplay
     * @returns {Hoot.Graphics.Display}
     */
    getDisplay() {
        return this.display;
    }

}


//Export
module.exports = Engine;