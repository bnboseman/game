let game = new Phaser.Game(600,400,Phaser.AUTO);

let GameState = {
	preload: function() {
	    game.load.image('einstein', 'images/ra_einstein.png')
	},
	create: function() {
	    let s = game.add.sprite(80,0, 'einstein');

	    s.rotation = 0.14;

	},
	update: function() {

	}
};

game.state.add('GameState', GameState);
game.state.start('GameState');