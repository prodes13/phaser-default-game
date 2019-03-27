import { Scene } from 'phaser'

class PreloadScene extends Scene {
  constructor() {
    super('preload')
  }
  preload() {
    this.load.image('logo', 'assets/logo.png');
  }
  create() {
    this.add.image(400, 300, 'logo')
    this.add.text(400, 500, 'Click to start!', { fontSize: '64px', fill: 'green' }).setOrigin(.5)
    this.input.on('pointerdown', () => this.scene.start('game'));
  }
}

export default PreloadScene
