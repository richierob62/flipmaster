import Ball from './sphere'
import Bar from './bar'
import Basket from './basket'
import Constants from './constants'
import Lever from './lever'
import Vector from './vector'

class Game {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')

    this.gameAssets = {}
    this.lowerLeft = {}
    this.lowerRight = {}
    this.upperLeft = {}
    this.upperRight = {}

    this.update = this.update.bind(this)
    this.clearCanvas = this.clearCanvas.bind(this)

    this.addAsset = this.addAsset.bind(this)
    this.addBall = this.addBall.bind(this)

    this.addBaskets()
    this.buildLeftWall()
    this.buildRightWall()
    this.buildLevers()

    window.requestAnimationFrame(this.update)

    this.addBall()
    window.setInterval(this.addBall, Constants.INTERVAL_BETWEEN_SPHERES)
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
  }

  update() {
    this.clearCanvas()

    Object.values(this.gameAssets).forEach(asset => asset.update(this.ctx))
    window.requestAnimationFrame(this.update)
  }

  addAsset(asset) {
    this.gameAssets[asset.id] = asset
    if (asset.type !== 'sphere') {
      if (asset.pos.x() <= 400 && asset.pos.y() >= 400) {
        this.lowerLeft[asset.id] = asset
      } else if (asset.pos.x() > 400 && asset.pos.y() >= 400) {
        this.lowerRight[asset.id] = asset
      } else if (asset.pos.x() <= 400 && asset.pos.y() < 400) {
        this.upperLeft[asset.id] = asset
      } else {
        this.upperRight[asset.id] = asset
      }
    }
  }

  delete(asset) {
    delete this.gameAssets[asset.id]
    delete this.lowerLeft[asset.id]
    delete this.lowerRight[asset.id]
    delete this.upperLeft[asset.id]
    delete this.upperRight[asset.id]
  }

  addBall() {
    const pos = new Vector(110 + Math.random() * 600, -10 - Math.random() * 500)
    const vel = new Vector(-1 + Math.random() * 2, 0)
    this.addAsset(new Ball(this, pos, vel))
  }

  addBaskets() {
    this.addAsset(new Basket(this, new Vector(100, 650), 'left'))
    this.addAsset(new Basket(this, new Vector(410, 650), 'right'))
  }

  buildLeftWall() {
    this.addAsset(new Bar(this, new Vector(85, 50), 'right'))
    this.addAsset(new Bar(this, new Vector(85, 150), 'right'))
    this.addAsset(new Bar(this, new Vector(85, 250), 'right'))
    this.addAsset(new Bar(this, new Vector(85, 350), 'right'))
    this.addAsset(new Bar(this, new Vector(85, 450), 'right'))
    this.addAsset(new Bar(this, new Vector(85, 550), 'right'))
  }

  buildRightWall() {
    this.addAsset(new Bar(this, new Vector(700, 50), 'left'))
    this.addAsset(new Bar(this, new Vector(700, 150), 'left'))
    this.addAsset(new Bar(this, new Vector(700, 250), 'left'))
    this.addAsset(new Bar(this, new Vector(700, 350), 'left'))
    this.addAsset(new Bar(this, new Vector(700, 450), 'left'))
    this.addAsset(new Bar(this, new Vector(700, 550), 'left'))
  }

  buildLevers() {
    const randomRotation = () => [0, 45, -45][Math.floor(Math.random() * 4)]
    this.addAsset(new Lever(this, new Vector(100, 100), randomRotation()))
    // this.addAsset(new Lever(this, new Vector(200, 100), randomRotation()))
    this.addAsset(new Lever(this, new Vector(300, 100), randomRotation()))
    // this.addAsset(new Lever(this, new Vector(400, 100), randomRotation()))
    this.addAsset(new Lever(this, new Vector(500, 100), randomRotation()))
    // this.addAsset(new Lever(this, new Vector(600, 100), randomRotation()))
    // this.addAsset(new Lever(this, new Vector(100, 200), randomRotation()))
    this.addAsset(new Lever(this, new Vector(200, 200), randomRotation()))
    // this.addAsset(new Lever(this, new Vector(300, 200), randomRotation()))
    this.addAsset(new Lever(this, new Vector(400, 200), randomRotation()))
    // this.addAsset(new Lever(this, new Vector(500, 200), randomRotation()))
    this.addAsset(new Lever(this, new Vector(600, 200), randomRotation()))
    this.addAsset(new Lever(this, new Vector(100, 300), randomRotation()))
    this.addAsset(new Lever(this, new Vector(200, 300), randomRotation()))
    this.addAsset(new Lever(this, new Vector(300, 300), randomRotation()))
    this.addAsset(new Lever(this, new Vector(400, 300), randomRotation()))
    this.addAsset(new Lever(this, new Vector(500, 300), randomRotation()))
    this.addAsset(new Lever(this, new Vector(600, 300), randomRotation()))
    // this.addAsset(new Lever(this, new Vector(100, 400), randomRotation()))
    // this.addAsset(new Lever(this, new Vector(200, 400), randomRotation()))
    this.addAsset(new Lever(this, new Vector(300, 400), randomRotation()))
    this.addAsset(new Lever(this, new Vector(400, 400), randomRotation()))
    // this.addAsset(new Lever(this, new Vector(500, 400), randomRotation()))
    // this.addAsset(new Lever(this, new Vector(600, 400), randomRotation()))
    this.addAsset(new Lever(this, new Vector(100, 500), randomRotation()))
    this.addAsset(new Lever(this, new Vector(200, 500), randomRotation()))
    this.addAsset(new Lever(this, new Vector(300, 500), randomRotation()))
    this.addAsset(new Lever(this, new Vector(400, 500), randomRotation()))
    this.addAsset(new Lever(this, new Vector(500, 500), randomRotation()))
    this.addAsset(new Lever(this, new Vector(600, 500), randomRotation()))
  }
}

export default Game
