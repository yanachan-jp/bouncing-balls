class Scene1 extends Phaser.Scene {
  constructor() {
    super('bootGame');
  }

  preload() {
    this.load.image('background', 'assets/images/background.png');

    this.load.spritesheet('ball', 'assets/spritesheets/ball.png', {
      frameWidth: 20,
      frameHeight: 20,
    });

    this.load.audio('audio_bounce', ['assets/sounds/Bounce.mp3']);
    this.load.audio('music', ['assets/sounds/music.mp3']);
  }

  create() {
    this.add.text(20, 20, 'Bouncy Ball');
    this.scene.start('playGame');

    this.anims.create({
      key: 'ball',
      frames: this.anims.generateFrameNumbers('ball', {
        start: 0,
        end: 1,
      }),
      frameRate: 20,
      repeat: -1,
    });
  }
}
