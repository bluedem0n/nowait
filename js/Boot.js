var ZombiesGame = {};

ZombiesGame.Boot = function (game) {};

ZombiesGame.Boot.prototype = {

  init: function () {},

  preload: function () {
    this.load.image('preloaderBar', "assets/preloader.png");
  },

  create: function () {
    this.state.start('Preloader');
  }
};
