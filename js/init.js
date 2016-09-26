window.onload = function() {
  var game = new Phaser.Game(400, 600, Phaser.AUTO, 'gameContainer');
  game.state.add('Boot', ZombiesGame.Boot);
  game.state.add('Preloader', ZombiesGame.Preloader);
  game.state.add('Game', ZombiesGame.Game);
  game.state.start('Boot');
};
