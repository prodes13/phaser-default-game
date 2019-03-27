import Phaser from 'phaser'
import GameScene from './GameScene'
import PreloadScene from './PreloadScene'

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300},
        debug: false
      }
    },
    scene: [PreloadScene, GameScene]
}

export { config }
