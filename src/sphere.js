import Constants from './constants'
import { incrementVector } from './utils'

class Sphere {
  constructor(game, pos, vel) {
    this.type = 'sphere'

    this.game = game
    this.pos = pos
    this.vel = vel
    this.gravity = [0, Constants.GRAVITY]

    this.img = new Image()
    this.img.src = './assets/flipmaster_spritesheet.png'

    this.spriteCoordinates = [100, 0, 20, 20]
    this.size = [20, 20]

    this.tick = this.tick.bind(this)
    this.draw = this.draw.bind(this)
  }

  update(ctx) {
    this.tick(ctx)
    this.draw(ctx)
  }

  draw(ctx) {
    ctx.drawImage(
      this.img,
      ...this.spriteCoordinates,
      ...this.pos,
      ...this.size
    )
  }

  tick() {
    this.pos = incrementVector(this.pos, this.vel)
    this.vel = incrementVector(this.vel, this.gravity)
    if (this.force) {
      this.vel = incrementVector(this.vel, this.force)
      this.force = null
    }
    this.cleanup()
  }

  applyForce(force) {
    this.force = force
  }

  cleanup() {
    if (this.outOfBounds()) {
      this.game.delete(this)
    }
  }

  outOfBounds() {
    return (
      this.pos[0] < 0 ||
      this.pos[0] > 800 ||
      this.pos[1] < -1000 ||
      this.pos[1] > 1000
    )
  }
}

export default Sphere
