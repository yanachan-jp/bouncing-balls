class Ball extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    const x = scene.player;
    const y = scene.player.y - 16;

    super(scene, x, y, 'ball');
    scene.add.existing(this);

    this.ballSound.play();
  }
}
