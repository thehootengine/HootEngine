/** @author Patrick Carroll **/


/**
 * @classdesc
 * Handles all the states in the game from the default ones like 'preload' and 'draw' to the ones added by developers.
 *
 * @class StateManager
 * @memberOf Hoot.States
 * @constructor
 * @since 1.0.0
 *
 * @param {Hoot.States.Engine} [Engine] - The engine itself.
 */
class StateManager {

    /*
     * Constructor
     */
    constructor(engine) {

        /**
         * @name Hoot.States.StateManager#events - The event handler itself, that manages all the events of the game.
         * @type {Hoot.Events.EventHandler}
         * @readonly
         */
        this.events = new Hoot.Events.EventHandler();


        /**
         * @name Hoot.States.StateManager#engine - The game engine itself.
         * @type {Hoot.States.Engine}
         * @readonly
         */
        this.engine = engine;


        /**
         * @name Hoot.States.StateManager#states - All of the states, includes states added by default by the game engine.
         * @type {Array}
         */
        this.states = [];


        /**
         * @name Hoot.States.StateManager#isInitialized - Is the state manager initialized.
         * @type {boolean}
         */
        this.isInitialized = false;

    }


    /*
     * Methods
     */

    init() {

        //END
        console.log("State manager initialized!");
        this.isInitialized = true;

    }


    add(name, callback, callbackScope, shouldLoop, enableRender) {

        let state = new Hoot.States.State(name, callback, callbackScope, this);

        state.shouldLoop = shouldLoop || false;
        state.enableRender = enableRender || false;

        this.states.push(state);

    }


    /*
     * Getters & Setters
     */

    /**
     * @method Hoot.States.StateManager#getEvents
     * @returns {Hoot.Events.EventHandler}
     */
    getEvents() {
        return this.events;
    }


    /**
     * @method Hoot.States.StateManager#getEngine
     * @returns {Hoot.States.Engine}
     */
    getEngine() {
        return this.engine;
    }


    /**
     * @method Hoot.States.StateManager#getState
     * @param {String} name - The name of the state.
     * @returns {Hoot.States.State}
     */
    getState(name) {
        for (let i in this.states) {
            if (this.states[i].name === name) {
                return this.states[i];
            }
        }
    }


    /**
     * @method Hoot.States.StateManager#getInitialized
     * @returns {boolean}
     */
    getInitialized() {
        return this.isInitialized;
    }

}


//Export
module.exports = StateManager;