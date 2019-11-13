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


        /**
         * @name Hoot.Core.Config#parent - The parent element of the display's canvas element.
         * @type {String}
         * @readonly
         */
        this.parent = this.fix("parent", config, null);


        /**
         * @name Hoot.Core.Config#width - The width of the display's canvas element.
         * @type {Number}
         * @readonly
         */
        this.width = this.fix("width", config, null);


        /**
         * @name Hoot.Core.Config#height - The height of the display's canvas element.
         * @type {Number}
         * @readonly
         */
        this.height = this.fix("height", config, null);

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

}


//Export
module.exports = Config;