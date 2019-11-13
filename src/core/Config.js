/** @author Patrick Carroll **/


/**
 * @classdesc
 * Configures all the items handled by the game engine.
 *
 * @class Config
 * @memberOf Hoot.Core
 * @constructor
 * @since 1.0.0
 *
 * @param {object} [Config] - The config given by the game engine.
 */
class Config {

    /*
     * Constructor
     */
    constructor(config) {

        if (config === undefined || config === null) {
            config = {};
        }


        let display = config.display || {};


        /**
         * @name Hoot.Core.Config#parent - The parent element of the display's canvas element.
         * @type {String | Element}
         * @readonly
         */
        this.parent = this.fix("parent", display, null);


        /**
         * @name Hoot.Core.Config#width - The width of the display's canvas element.
         * @type {Number}
         * @readonly
         */
        this.width = this.fix("width", display, 800);


        /**
         * @name Hoot.Core.Config#height - The height of the display's canvas element.
         * @type {Number}
         * @readonly
         */
        this.height = this.fix("height", display, 600);


        /**
         * @name Hoot.Core.Config#smoothing - Should the display's pixels be smoothed or should pixel art stay crisp.
         * @type {Boolean}
         * @readonly
         */
        this.smoothingEnabled = this.fix("smoothingEnabled", display, null);

    }


    /*
     * Methods
     */
    fix(key, object, defaultValue) {

        if (object[key] === undefined || object[key] === null) {
            return defaultValue;
        }else {

            return object[key];

        }

    }


    /*
     * Getters & Setters
     */

    /**
     * @method Hoot.Core.Config#getParent - Returns the config's parent field value.
     * @returns {String}
     */
    getParent() {
        return this.parent;
    }


    /**
     * @method Hoot.Core.Config#getWidth - Returns the config's width field value.
     * @returns {Number}
     */
    getWidth() {
        return this.width;
    }


    /**
     * @method Hoot.Core.Config#getHeight - Returns the config's height field value.
     * @returns {Number}
     */
    getHeight() {
        return this.height;
    }


    /**
     * @method Hoot.Core.Config#getSmoothingEnabled - Returns the config's smoothingEnabled field value.
     * @returns {Boolean}
     */
    getSmoothingEnabled() {
        return this.smoothingEnabled;
    }


    /**
     * @method Hoot.Core.Config#getBackgroundColor - Returns the config's backgroundColor field value.
     * @returns {String}
     */
    getBackgroundColor() {
        return this.backgroundColor;
    }

}


//Export
module.exports = Config;