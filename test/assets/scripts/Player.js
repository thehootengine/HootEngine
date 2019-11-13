
class Player extends Hoot.GameObjects.Sprite {

    constructor(scene, x, y, textureKey, frameNumber) {
        super(scene, x, y, textureKey, frameNumber);

        this.scene = scene;

        this.scene.factory.add.existing(this);

    }

}