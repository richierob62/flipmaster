import Ball from './sphere'
import Bar from './bar'
import Basket from './basket'
import Constants from './constants'
import Lever from './lever'

class Game {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.gameAssets = []
    this.update = this.update.bind(this)
    this.clearCanvas = this.clearCanvas.bind(this)

    this.addAsset = this.addAsset.bind(this)
    this.addBall = this.addBall.bind(this)

    this.lowerLeft = []
    this.lowerRight = []
    this.upperLeft = []
    this.upperRight = []

    this.buildLeftWall()
    this.buildRightWall()
    this.buildLevers()

    this.addBaskets()

    window.requestAnimationFrame(this.update)

    window.setInterval(this.addBall, Constants.INTERVAL_BETWEEN_SPHERES)
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
  }

  update() {
    this.clearCanvas()
    this.gameAssets.forEach(asset => asset.update(this.ctx))
    window.requestAnimationFrame(this.update)
  }

  addAsset(asset) {
    this.gameAssets.push(asset)
    if (asset.type !== 'sphere') {
      if (asset.pos[0] < 300 && asset.pos[1] >= 300) {
        this.lowerLeft.push(asset)
      } else if (asset.pos[0] >= 300 && asset.pos[1] >= 300) {
        this.lowerRight.push(asset)
      } else if (asset.pos[0] < 300 && asset.pos[1] < 300) {
        this.upperLeft.push(asset)
      } else {
        this.upperRight.push(asset)
      }
    }
  }

  delete(asset) {
    const idx = this.gameAssets.indexOf(asset)
    this.gameAssets = this.gameAssets
      .slice(0, idx)
      .concat(this.gameAssets.slice(idx + 1))
  }

  addBall() {
    const pos = [Math.random() * 800, -10 - Math.random() * 500]
    this.addAsset(new Ball(this, pos, [-1 + Math.random() * 2, 0]))
  }

  addBaskets() {
    this.addAsset(new Basket(this, [105, 650], 'left'))
    this.addAsset(new Basket(this, [400, 650], 'right'))
  }

  buildLeftWall() {
    this.addAsset(new Bar(this, [85, 50], 'right'))
    this.addAsset(new Bar(this, [85, 150], 'right'))
    this.addAsset(new Bar(this, [85, 250], 'right'))
    this.addAsset(new Bar(this, [85, 350], 'right'))
    this.addAsset(new Bar(this, [85, 450], 'right'))
    this.addAsset(new Bar(this, [85, 550], 'right'))
  }

  buildRightWall() {
    this.addAsset(new Bar(this, [700, 50], 'left'))
    this.addAsset(new Bar(this, [700, 150], 'left'))
    this.addAsset(new Bar(this, [700, 250], 'left'))
    this.addAsset(new Bar(this, [700, 350], 'left'))
    this.addAsset(new Bar(this, [700, 450], 'left'))
    this.addAsset(new Bar(this, [700, 550], 'left'))
  }

  buildLevers() {
    const randomRotation = () => [0, 45, -45][Math.floor(Math.random() * 4)]
    this.addAsset(new Lever(this, [100, 100], randomRotation()))
    this.addAsset(new Lever(this, [200, 100], randomRotation()))
    this.addAsset(new Lever(this, [300, 100], randomRotation()))
    this.addAsset(new Lever(this, [400, 100], randomRotation()))
    this.addAsset(new Lever(this, [500, 100], randomRotation()))
    this.addAsset(new Lever(this, [600, 100], randomRotation()))
    this.addAsset(new Lever(this, [100, 200], randomRotation()))
    this.addAsset(new Lever(this, [200, 200], randomRotation()))
    this.addAsset(new Lever(this, [300, 200], randomRotation()))
    this.addAsset(new Lever(this, [400, 200], randomRotation()))
    this.addAsset(new Lever(this, [500, 200], randomRotation()))
    this.addAsset(new Lever(this, [600, 200], randomRotation()))
    this.addAsset(new Lever(this, [100, 300], randomRotation()))
    this.addAsset(new Lever(this, [200, 300], randomRotation()))
    this.addAsset(new Lever(this, [300, 300], randomRotation()))
    this.addAsset(new Lever(this, [400, 300], randomRotation()))
    this.addAsset(new Lever(this, [500, 300], randomRotation()))
    this.addAsset(new Lever(this, [600, 300], randomRotation()))
    this.addAsset(new Lever(this, [100, 400], randomRotation()))
    this.addAsset(new Lever(this, [200, 400], randomRotation()))
    this.addAsset(new Lever(this, [300, 400], randomRotation()))
    this.addAsset(new Lever(this, [400, 400], randomRotation()))
    this.addAsset(new Lever(this, [500, 400], randomRotation()))
    this.addAsset(new Lever(this, [600, 400], randomRotation()))
    this.addAsset(new Lever(this, [100, 500], randomRotation()))
    this.addAsset(new Lever(this, [200, 500], randomRotation()))
    this.addAsset(new Lever(this, [300, 500], randomRotation()))
    this.addAsset(new Lever(this, [400, 500], randomRotation()))
    this.addAsset(new Lever(this, [500, 500], randomRotation()))
    this.addAsset(new Lever(this, [600, 500], randomRotation()))
  }
}

export default Game
