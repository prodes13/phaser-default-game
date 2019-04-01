import Phaser, { Scene } from 'phaser'

class PreloadScene extends Scene {
  constructor() {
    super('preload')
  }
  preload() {
    this.load.image('logo', 'assets/logo.png');
    this.load.image('particle', 'assets/particle-blue.png');
  }
  create() {
    const logo = this.add.image(400, 300, 'logo');
    logo.setDepth(2);
    this.add.text(400, 500, 'Click to start!', { fontSize: '64px', fill: 'green' }).setOrigin(.5)
    this.input.on('pointerdown', () => this.scene.start('game'));
    this.input.keyboard.on('keydown', () => this.scene.start('testing'))

    const p = this.add.particles('particle');
    const e = p.createEmitter();
    e.setPosition(400, 300);
    e.setSpeed(200);
    e.setBlendMode(Phaser.BlendModes.ADD);
  }
}

export default PreloadScene
