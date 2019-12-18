/** @author Patrick Carroll **/


/**
 * @classdesc
 * Handles all the emitting and receiving on events.
 *
 * @class EventHandler
 * @memberOf Hoot.Events
 * @constructor
 * @since 1.0.0
 */
class EventHandler {

    /*
     * Constructor
     */
    constructor() {

        /**
         * @name Hoot.Events.EventHandler#target
         * @type {EventTarget}
         * @readonly
         */
        this.target = new EventTarget();


        /**
         * @name Hoot.Events.EventHandler#basePath
         * @type {string}
         */
        this.basePath = "hoot_";

    }


    /*
     * Methods
     */

    /**
     * @method Hoot.Events.EventEmitter#on - Listens for events.
     *
     * @param {string} [Name] - The name of the event being listened for.
     * @param {function} [Callback] - The callback function called when the event is emitted.
     * @param {*} [Scope] - The scope of the callback function.
     */
    on(name, callback, scope) {

        const cb = callback.bind(scope);

        this.target.addEventListener(name, function(e) {

            cb(e.detail);

        }, { once: false });

    }


    /**
     * @method Hoot.Events.EventEmitter#once - Listens for events but will only emit once after that the listener is removed.
     *
     * @param {string} [Name] - The name of the event being listened for.
     * @param {function} [Callback] - The callback function called when the event is emitted.
     * @param {*} [Scope] - The scope of the callback function.
     */
    once(name, callback, scope) {

        const path = this.basePath + name;
        const cb = callback.bind(scope);

        this.target.addEventListener(path, function(e) {

            cb(e.detail);

        }, { once: true });

    }


    /**
     * @method Hoot.Events.EventEmitter#emit - Emits events.
     *
     * @param {string} [Name] - The name of the event being emitted.
     * @param {object} [Data] - Data that can be passed through with the event.
     */
    emit(name, data) {

        const path = this.basePath + name;

        const event = new CustomEvent(path, { detail: data });

        this.target.dispatchEvent(event);

    }


    /*
     * Getters & Setters
     */

    /**
     * @method Hoot.Events.EventEmitter#getTarget
     * @returns {EventTarget}
     */
    getTarget() {
        return this.target;
    }


    /**
     * @method Hoot.Events.EventEmitter#getBasePath
     * @returns {string}
     */
    getBasePath() {
        return this.basePath;
    }

}


//Export
module.exports = EventHandler;