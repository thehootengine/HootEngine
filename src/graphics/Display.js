/** @author Patrick Carroll **/


/**
 * @classdesc
 * The display class creates and manages the display or game canvas.
 *
 * @class Display
 * @memberOf Hoot.Graphics
 * @constructor
 * @since 1.0.0
 *
 * @param {Hoot.Core.Engine} [Engine] - The game engine or handler.
 */
class Display {

    /*
     * Constructor
     */
    constructor(engine) {

        /**
         * @name Hoot.Graphics.Display#events - Handles all the events.
         * @type {Hoot.Events.EventHandler}
         * @readonly
         */
        this.events = new Hoot.Events.EventHandler();


        /**
         * @name Hoot.Graphics.Display#engine - The game engine handler itself.
         * @type {Hoot.Core.Engine}
         * @readonly
         */
        this.engine = engine || null;


        /**
         * @name Hoot.Graphics.Display#canvas - The canvas that game objects will render to.
         * @type {HTMLCanvasElement}
         */
        this.canvas = document.createElement("canvas");


        /**
         * @name Hoot.Graphics.Display#context - The canvas context that will manage canvas rendering.
         * @type {(CanvasRenderingContext2D | null) | (WebGLRenderingContext | null) | (CanvasRenderingContext2D | WebGLRenderingContext | null)}
         */
        this.context = this.canvas.getContext("2d");

    }


    /*
     * Getters and Setters
     */

    /**
     * @method Hoot.Graphics.Display#getEvents
     * @returns {Hoot.Events.EventHandler}
     */
    getEvents() {
        return this.events;
    }


    /**
     * @method Hoot.Graphics.Display#getEngine
     * @returns {Hoot.Core.Engine}
     */
    getEngine() {
        return this.engine;
    }


    /**
     * @method Hoot.Graphics.Display#getCanvas
     * @returns {HTMLCanvasElement}
     */
    getCanvas() {
        return this.canvas;
    }


    /**
     * @method Hoot.Graphics.Display#getContext
     * @returns {CanvasRenderingContext2D|WebGLRenderingContext}
     */
    getContext() {
        return this.context;
    }

}


//Export
module.exports = Display;