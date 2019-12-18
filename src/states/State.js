/** @author Patrick Carroll **/


/**
 * @classdesc
 * A state is the section of the game's run process.
 *
 * @class State
 * @memberOf Hoot.States
 * @constructor
 * @since 1.0.0
 *
 * @param {String} name - The name of the state, also used to call the state.
 * @param {Function} callback - Called before the state code and other functions are called.
 * @param {*} callbackScope - The scope of the callback function.
 * @param {Hoot.States.StateManager} stateManager - The state manager itself.
 */
class State {

    /*
     * Constructor
     */
    constructor(name, callbackScope, stateManager) {

        /**
         * @name Hoot.States.State#events - The event handler which handles all events wither emitted or recieved during the game.
         * @type {Hoot.Events.EventHandler}
         * @readonly
         */
        this.events = new Hoot.Events.EventHandler();


        /**
         * @name Hoot.States.State#name - The name of the state.
         * @type {*|string}
         */
        this.name = name || "";


        /**
         * @name Hoot.States.State#preCallback - The first callback function usually used to initialize the state.
         * @type {Function|null}
         */
        this.preCallback = null;


        /**
         * @name Hoot.States.State#callback - The second callback function usually holds the main code/processes of the state.
         * @type {Function|null}
         */
        this.callback = null;


        /**
         * @name Hoot.States.State#postCallback - The third callback function usually holds the clean up code/processes of the state.
         * @type {Function|null}
         */
        this.postCallback = null;


        /**
         * @name Hoot.States.State#callbackScope - The scope of the callback functions.
         * @type {*|null}
         */
        this.callbackScope = callbackScope || null;


        /**
         * @name Hoot.States.State#stateManager - The state manager itself.
         * @type {Hoot.States.StateManager|null}
         */
        this.stateManager = stateManager || null;


        /**
         * @name Hoot.States.State#engine - The game engine itself.
         * @type {Hoot.Core.Engine|null}
         */
        this.engine = this.stateManager.getEngine() || null;


        /**
         * @name Hoot.States.State#shouldLoop - Should this state be looped.
         * @type {boolean}
         */
        this.shouldLoop = false;


        /**
         * @name Hoot.States.State#enableRender - Enables the render function if this state is being looped.
         * @type {boolean}
         */
        this.enableRender = false;


        /**
         * @name Hoot.States.State#preferredFPS - The preferred frames per second of the game.
         * @type {number}
         */
        this.preferredFPS = 60;


        /**
         * @name Hoot.States.State#timestep - Used if the state should be looped.
         * @type {number}
         */
        this.timestep = 1000 / this.preferredFPS;


        /**
         * @name Hoot.States.State#lastFrameTimeMs - The last frame time (milliseconds).
         * @type {number}
         */
        this.lastFrameTimeMs = 0;


        /**
         * @name Hoot.States.State#delta - The accumulated time, that was skipped.
         * @type {number}
         */
        this.delta = 0;


        /**
         * @name Hoot.States.State#isActive - Is this state currently active or not?
         * @type {boolean}
         */
        this.isActive = false;

    }


    start(data) {

        if (!this.isActive) {
            this.isActive = true;

            if (this.shouldLoop) {
                let cb = this.init.bind(this.initScope);
                cb(this, data);

                requestAnimationFrame(this.mainLoop);
            }else {
                let cb = this.init.bind(this.initScope);
                cb(this, data);

                requestAnimationFrame(this.mainLoop);
            }
        }else {
            console.log("State already active!");
        }

    }


    mainLoop(timestamp) {

        if (this.isActive && this.shouldLoop) {
            this.delta += timestamp - this.lastFrameTimeMs;
            this.lastFrameTimeMs = timestamp;

            while(this.delta >= this.timestep) {
                this.tick(this.timestep);

                this.delta -= this.timestep;
            }

            if (this.enableRender) {
                this.render();
            }

            requestAnimationFrame(this.mainLoop);
        }

    }


    tick(delta) {

        for (let i in this.callbacks.tick) {
            this.callbacks.tick[i](this);
        }

    }


    render() {

        for (let i in this.callbacks.render) {
            this.callbacks.render[i](this);
        }

    }


    stop() {

        this.isActive = false;

    }


    /*
     * Getters & Setters
     */

    /**
     * @method Hoot.States.State#getEvents
     * @returns {Hoot.Events.EventHandler}
     */
    getEvents() {
        return this.events;
    }


    /**
     * @method Hoot.States.State#getName
     * @returns {*|string}
     */
    getName() {
        return this.name;
    }


    /**
     * @method Hoot.States.State#getCallback
     * @returns {*|Function}
     */
    getCallback() {
        return this.callback;
    }


    /**
     * @method Hoot.States.State#getCallbackScope
     * @returns {*}
     */
    getCallbackScope() {
        return this.callbackScope;
    }


    /**
     * @method Hoot.States.State#getStateManager
     * @returns {Hoot.States.StateManager}
     */
    getStateManager() {
        return this.stateManager;
    }


    /**
     * @method Hoot.States.State#getEngine
     * @returns {Hoot.Core.Engine}
     */
    getEngine() {
        return this.engine;
    }


    /**
     * @method Hoot.States.State#getShouldLoop
     * @returns {boolean}
     */
    getShouldLoop() {
        return this.shouldLoop;
    }


    /**
     * @method Hoot.States.State#getEnableRender
     * @returns {boolean}
     */
    getEnableRender() {
        return this.enableRender;
    }


    /**
     * @method Hoot.States.State#getPreferredFPS
     * @returns {number}
     */
    getPreferredFPS() {
        return this.preferredFPS;
    }


    /**
     * @method Hoot.States.State#getTimestep
     * @returns {number}
     */
    getTimestep() {
        return this.timestep;
    }


    /**
     * @method Hoot.States.State#getLastFrameTimeMs
     * @returns {number}
     */
    getLastFrameTimeMs() {
        return this.lastFrameTimeMs;
    }


    /**
     * @method Hoot.States.State#getDelta
     * @returns {number}
     */
    getDelta() {
        return this.delta;
    }


    /**
     * @method Hoot.States.State#getActive
     * @returns {boolean}
     */
    getActive() {
        return this.isActive;
    }

}


//Export
module.exports = State;