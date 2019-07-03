/* eslint-disable operator-assignment */
import { incrementVector, randomId } from './utils'

import Constants from './constants'

class Sphere {
  constructor(game, pos, vel) {
    this.type = 'sphere'

    this.id = randomId()

    this.quadrant = null
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
    this.updateQuadrant = this.updateQuadrant.bind(this)
    this.updateVectors = this.updateVectors.bind(this)
    this.removeFromQuadrant = this.removeFromQuadrant.bind(this)
    this.assessCollisionProspects = this.assessCollisionProspects.bind(this)

    this.updateQuadrant()
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
    this.removeFromQuadrant()
    this.updateVectors()
    this.updateQuadrant()
    this.checkForCollisions()
    this.cleanup()
  }

  removeFromQuadrant() {
    if (!this.quadrant) return
    delete this.quadrant[this.id]
  }

  updateQuadrant() {
    if (this.pos[0] <= 300 && this.pos[1] >= 300) {
      this.quadrant = this.game.lowerLeft
    } else if (this.pos[0] > 300 && this.pos[1] >= 300) {
      this.quadrant = this.game.lowerRight
    } else if (this.pos[0] <= 300 && this.pos[1] < 300) {
      this.quadrant = this.game.upperLeft
    } else {
      this.quadrant = this.game.upperRight
    }
    this.quadrant[this.id] = this
  }

  updateVectors() {
    this.pos = incrementVector(this.pos, this.vel)
    this.vel = incrementVector(this.vel, this.gravity)
    if (this.force) {
      this.vel = incrementVector(this.vel, this.force)
      this.force = null
    }
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

  checkForCollisions() {
    if (!this.quadrant) return
    Object.values(this.quadrant).forEach(asset => {
      if (asset.id !== this.id) {
        this.assessCollisionProspects(this, asset)
      }
    })
  }

  assessCollisionProspects(sphere, b) {
    const sphere_ul_x = sphere.pos[0]
    const sphere_ul_y = sphere.pos[1]
    const sphere_lr_x = sphere_ul_x + sphere.size[0]
    const sphere_lr_y = sphere_ul_y + sphere.size[1]

    const b_ul_x = b.pos[0]
    const b_ul_y = b.pos[1]
    const b_lr_x = b_ul_x + b.size[0]
    const b_lr_y = b_ul_y + b.size[1]

    const separate =
      sphere_lr_x < b_ul_x ||
      b_lr_x < sphere_ul_x ||
      sphere_lr_y < b_ul_y ||
      b_lr_y < sphere_ul_y

    if (separate) return

    // time to look at pixel overlap
    const overlap_ul_x = sphere_ul_x < b_ul_x ? b_ul_x : sphere_ul_x
    const overlap_ul_y = sphere_ul_y < b_ul_y ? b_ul_y : sphere_ul_y
    const overlap_lr_x = sphere_lr_x < b_lr_x ? sphere_lr_x : b_lr_x
    const overlap_lr_y = sphere_lr_y < b_lr_y ? sphere_lr_y : b_lr_y

    // less than pixel overlap
    if (overlap_lr_x - overlap_ul_x < 1 || overlap_lr_y - overlap_ul_y < 1)
      return

    // create a new canvas
    const newCanvas = document.createElement('canvas')
    newCanvas.width = 800
    newCanvas.height = 800

    const cloneContext = newCanvas.getContext('2d')
    cloneContext.clearRect(
      overlap_ul_x,
      overlap_ul_y,
      overlap_lr_x - overlap_ul_x,
      overlap_lr_y - overlap_ul_y
    )

    cloneContext.drawImage(
      this.img,
      ...this.spriteCoordinates,
      ...this.pos,
      ...this.size
    )

    const sphereImageData = cloneContext.getImageData(
      overlap_ul_x,
      overlap_ul_y,
      overlap_lr_x - overlap_ul_x,
      overlap_lr_y - overlap_ul_y
    )

    cloneContext.clearRect(
      overlap_ul_x,
      overlap_ul_y,
      overlap_lr_x - overlap_ul_x,
      overlap_lr_y - overlap_ul_y
    )

    cloneContext.drawImage(b.img, ...b.spriteCoordinates, ...b.pos, ...b.size)

    const bImageData = cloneContext.getImageData(
      overlap_ul_x,
      overlap_ul_y,
      overlap_lr_x - overlap_ul_x,
      overlap_lr_y - overlap_ul_y
    )

    const resolution = 4 * Constants.PIXEL_CHECK
    for (
      let index = 0;
      index < sphereImageData.data.length;
      index += resolution
    ) {
      if (sphereImageData.data[index + 3] && bImageData.data[index + 3]) {
        if (b.type === 'lever' && b.rotation === 45) {
          const y_portion_of_y = sphere.vel[1] * Math.cos(Math.PI / 4) ** 2
          const x_portion_of_y =
            sphere.vel[1] * Math.sin(Math.PI / 4) * Math.cos(Math.PI / 4)
          const x_portion_of_x = sphere.vel[0]
          const y_portion_of_x =
            (sphere.vel[0] * Math.cos(Math.PI / 4)) / Math.sin(Math.PI / 4)
          sphere.vel[0] = sphere.vel[0] - x_portion_of_y - x_portion_of_x
          sphere.vel[1] = sphere.vel[1] - y_portion_of_y - y_portion_of_x
        }
        if (b.type === 'lever' && b.rotation === -45) {
          const y_portion_of_y =
            sphere.vel[1] * Math.cos((3 * Math.PI) / 4) ** 2
          const x_portion_of_y =
            sphere.vel[1] *
            Math.sin((3 * Math.PI) / 4) *
            Math.cos((3 * Math.PI) / 4)
          const x_portion_of_x = sphere.vel[0]
          const y_portion_of_x =
            (sphere.vel[0] * Math.cos((3 * Math.PI) / 4)) /
            Math.sin((3 * Math.PI) / 4)
          sphere.vel[0] = sphere.vel[0] - x_portion_of_y - x_portion_of_x
          sphere.vel[1] = sphere.vel[1] - y_portion_of_y - y_portion_of_x
        }
        if (b.type === 'lever' && b.rotation === 0) {
          sphere.vel[1] = -Math.max(Math.abs(sphere.vel[1]), 2)
        }
        if (b.type === 'bar') {
          sphere.vel[0] = -sphere.vel[0]
        }
        if (b.type === 'basket') {
          b.spheres[sphere.id] = sphere.id
          sphere.game.delete(sphere)
        }
      }
    }
  }
}

export default Sphere
