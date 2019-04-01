import { Scene } from 'phaser'

class TestingScene extends Scene {
  constructor() {
    super('testing');
    this.logo = '';
  }
  preload() {
    this.logo = this.load.image('logo', 'assets/logo.png');
  }
  create() {
    this.logo = this.add.image(400, 300, 'logo');
    console.log(this.logo)
    this.gameOverText = this.add.text(400, 500, 'Testing!', { fontSize: '64px', fill: 'red' });
    this.gameOverText.setOrigin(.5); // 1, 0, .5 for diferent position on x
    this.input.on('pointerdown', () => this.scene.start('preload'));
  }
}

export default TestingScene
