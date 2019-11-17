/** @author Patrick Carroll **/


/**
 * @classdesc
 * An game object which will be updated and can be rendered onto the canvas.
 *
 * @class Object
 * @memberOf Hoot.Objects
 * @constructor
 * @since 1.0.0
 *
 * @param {Hoot.Objects.Manager} [Manager] - The object manager itself.
 */
class Object {

    /*
     * Constructor
     */
    constructor(manager) {

        /**
         * @name Hoot.Objects.Object#manager - The manager of all the game objects.
         * @type {Hoot.Objects.Manager}
         * @readonly
         */
        this.manager = manager;

    }

}


//Export
module.exports = Object;