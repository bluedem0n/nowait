var ZombiesGame = {};

ZombiesGame.Boot = function (game) {};

ZombiesGame.Boot.prototype = {

  app: function () {},

  preload: function () {
    this.load.image('preloaderBar', "assets/preloader.png");
  },

  create: function () {
    this.state.start('Preloader');
  }
};
