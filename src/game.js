import Ball from './sphere'
import Basket from './basket'
import Constants from './constants'
import Lever from './lever'
import WallManager from './wall'

class Game {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.gameAssets = []
    this.update = this.update.bind(this)
    this.clearCanvas = this.clearCanvas.bind(this)

    this.addAsset = this.addAsset.bind(this)
    this.addBall = this.addBall.bind(this)

    this.WallManager = new WallManager(this, [85, 550])
    this.addLevers()
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
  }

  delete(asset) {
    const idx = this.gameAssets.indexOf(asset)
    this.gameAssets = this.gameAssets
      .slice(0, idx)
      .concat(this.gameAssets.slice(idx + 1))
  }

  addLevers() {
    this.addAsset(new Lever(this, [100, 200], 0))
    this.addAsset(new Lever(this, [200, 200], 0))
    this.addAsset(new Lever(this, [300, 200], 0))
    this.addAsset(new Lever(this, [400, 200], 0))
    this.addAsset(new Lever(this, [500, 200], 0))
    this.addAsset(new Lever(this, [600, 200], 0))
    this.addAsset(new Lever(this, [100, 300], 0))
    this.addAsset(new Lever(this, [200, 300], 0))
    this.addAsset(new Lever(this, [300, 300], 0))
    this.addAsset(new Lever(this, [400, 300], 0))
    this.addAsset(new Lever(this, [500, 300], 0))
    this.addAsset(new Lever(this, [600, 300], 0))
    this.addAsset(new Lever(this, [100, 400], 0))
    this.addAsset(new Lever(this, [200, 400], 0))
    this.addAsset(new Lever(this, [300, 400], 0))
    this.addAsset(new Lever(this, [400, 400], 0))
    this.addAsset(new Lever(this, [500, 400], 0))
    this.addAsset(new Lever(this, [600, 400], 0))
    this.addAsset(new Lever(this, [100, 500], 0))
    this.addAsset(new Lever(this, [200, 500], 0))
    this.addAsset(new Lever(this, [300, 500], 0))
    this.addAsset(new Lever(this, [400, 500], 0))
    this.addAsset(new Lever(this, [500, 500], 0))
    this.addAsset(new Lever(this, [600, 500], 0))
  }

  addBall() {
    const pos = [Math.random() * 800, -10 - Math.random() * 500]
    this.addAsset(new Ball(this, pos, [0, 0]))
  }

  addBaskets() {
    this.addAsset(new Basket(this, [105, 650], 'left'))
    this.addAsset(new Basket(this, [400, 650], 'right'))
  }
}

export default Game
