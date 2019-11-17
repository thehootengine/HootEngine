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
         * @name Hoot.Objects.Manager#engine - The game engine handler itself.
         * @type {Hoot.Core.Engine}
         * @readonly
         */
        this.engine = engine;

    }

}


//Export
module.exports = Manager;