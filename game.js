const gameSettings = {
  maxBall: 2,
  ballVel: 100,
};

const config = {
  width: 800,
  height: 600,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2],
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false, debugShowVelocity: false,
    },
  },
};


const game = new Phaser.Game(config);
