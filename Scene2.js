class Scene2 extends Phaser.Scene {
  constructor() {
    super('playGame');
  }

  create() {
    // background
    this.background = this.add.tileSprite(0, 0, config.width, config.height, 'background');
    this.background.setOrigin(0, 0);

    this.add.text(20, 20, 'Bouncing away', { font: '25px Arial', fill: 'yellow' });

    // // random ball
    this.physics.world.setBoundsCollision();

    this.ball = this.physics.add.group();

    for (let i = 0; i < gameSettings.maxBall; i++) {
      const ball = this.physics.add.sprite(20, 20, 'ball');
      this.ball.add(ball);
      ball.setRandomPosition(0, 0, game.config.width, game.config.height);
      ball.setVelocity(gameSettings.ballVel, gameSettings.ballVel);
      ball.setBounce(1);
      ball.setCollideWorldBounds(true);
      ball.body.collideWorldBounds = true;
    }

    // ball sound
    this.ballSound = this.sound.add('audio_bounce');

    // background music
    this.music = this.sound.add('music');

    const musicConfig = {
      mute: false,
      volume: 1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0,
    };
    this.music.play(musicConfig);
  }

  update() {
    this.background.tilePositionY -= 0.5;
    for (let i = 0; i < gameSettings.maxBall; i++) {
      console.log(this.ball.children.entries[i].body.onCollide);
    // if (this.ball.children.entries[i].body.onCollide) {
    //   console.log('yaaay');
    //  }
    // console.log(this.ball.children.entries[i].body.onCollide);
    }
  }

  // left to do collision flags - play sound when ball hits canvas walls

  ballBounce() {
    if (this.ball === this.physics.arcade.collide) {
      this.ballSound.play();
    }
  }

  collide() {
    console.log('collide');
    this.ballSound.play();
  }
}
