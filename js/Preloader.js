ZombiesGame.Preloader = function (game) {

  this.preloadBar = null;

};

ZombiesGame.Preloader.prototype = {

  preload: function () {

    this.preloadBar = this.add.sprite(50, 290, 'preloaderBar');
    this.load.setPreloadSprite(this.preloadBar);

    this.load.image("head", "assets/head.png");
    this.load.image("floor", "assets/floor.png");
    this.load.image("jeep", "assets/jeep.png");
    this.load.image("blood", "assets/blood.png");

    this.load.spritesheet("zombie", "assets/zombie.png", 50, 50);
  },

  create: function () {
    this.preloadBar.cropEnabled = false;
  },

  update: function () {
      this.state.start('Game');
  }
};
