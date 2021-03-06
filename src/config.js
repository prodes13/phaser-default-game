import Phaser from 'phaser'
import GameScene from './GameScene'
import PreloadScene from './PreloadScene'
import GameOverScene from './GameOverScene'
import TestingScene from './TestingScene'

const config = {
    type: Phaser.WEBGL,
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
    scene: [PreloadScene, GameScene, GameOverScene, TestingScene]
}

export { config }
