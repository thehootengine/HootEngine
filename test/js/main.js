
class BootScene extends Hoot.Scenes.BasicScene {

    constructor() {
        super("BootScene");
    }

    boot(data) {


    }

    preload() {

        this.loader.load("img-test", "./assets/images/test-image.png", {});
        this.loader.load("img-wall", "./assets/images/wall.png");

        this.loader.load("js-player", "./assets/scripts/Player.js");

    }

    create() {

        this.sprite = this.factory.add.sprite(64, 64, "img-test", 0);

    }

    update() {


    }

}

const gameConfig = {
    parent: null,
    width: 960,
    height: 720,
    imageSmoothing: false,
    clearBeforeRender: true,
    shadows: true,
    shaders: true,
    scenes: [
        BootScene
    ]
};

const engine = new Hoot.Core.Engine(gameConfig);

engine.scenes.start("BootScene", {});