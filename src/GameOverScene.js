import { Scene } from 'phaser'

class GameOverScene extends Scene {
  constructor() {
    super('gameover')
  }
  preload() {
    this.load.image('logo', 'assets/logo.png');
  }
  create() {
    this.add.image(400, 300, 'logo')
    this.gameOverText = this.add.text(400, 500, 'Game Over!', { fontSize: '64px', fill: 'red' });
    this.gameOverText.setOrigin(.5); // 1, 0, .5 for diferent position on x
    this.input.on('pointerdown', () => this.scene.start('preload'));
  }
}

export default GameOverScene
