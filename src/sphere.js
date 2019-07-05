/* eslint-disable operator-assignment */
import Constants from './constants'
import Sound from './sound'
import Vector from './vector'
import { randomId } from './utils'
import spriteMeta from '../public/assets/flipmaster_spritesheet'

class Sphere {
  constructor(game, pos, vel) {
    this.type = 'sphere'

    this.id = randomId()

    this.quadrant = null
    this.game = game
    this.pos = pos
    this.vel = vel
    this.gravity = new Vector(0, Constants.GRAVITY)
    this.stuck = false

    this.bounceCheck = null

    this.img = new Image()
    this.img.src = './assets/flipmaster_spritesheet.png'

    const { x, y, w, h } = spriteMeta['sphere.png'].frame
    this.spriteCoordinates = [x, y, w, h]
    this.size = [w, h]

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
      this.pos.x(),
      this.pos.y(),
      ...this.size
    )
  }

  tick() {
    this.updateVectors()
    this.checkForCollisions()
    this.cleanup()
  }

  removeFromQuadrant() {
    if (!this.quadrant) return
    delete this.quadrant[this.id]
  }

  updateQuadrant() {
    if (this.pos.x() <= 400 && this.pos.y() >= 400) {
      this.quadrant = this.game.lowerLeft
    } else if (this.pos.x() > 400 && this.pos.y() >= 400) {
      this.quadrant = this.game.lowerRight
    } else if (this.pos.x() <= 400 && this.pos.y() < 400) {
      this.quadrant = this.game.upperLeft
    } else {
      this.quadrant = this.game.upperRight
    }
    this.quadrant[this.id] = this
  }

  updateVectors() {
    if (this.force) {
      this.vel = this.vel.add(this.force)
      this.force = null
    }
    this.vel = this.vel.add(this.gravity)
    this.pos = this.pos.add(this.vel)
  }

  fakeMove() {
    const fakeData = {
      pos: new Vector(this.pos.x(), this.pos.y()),
      vel: new Vector(this.vel.x(), this.vel.y())
    }

    if (this.force) {
      fakeData.vel = fakeData.vel.add(this.force)
    }
    fakeData.vel = fakeData.vel.add(this.gravity)
    fakeData.pos = fakeData.pos.add(fakeData.vel)

    return fakeData
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
      this.pos.x() < 0 ||
      this.pos.x() > 800 ||
      this.pos.y() < -1000 ||
      this.pos.y() > 1000
    )
  }

  checkForCollisions() {
    Object.values(this.game.gameAssets).forEach(asset => {
      if (asset.id !== this.id) {
        this.assessCollisionProspects(this, asset)
      }
    })
  }

  assessCollisionProspects(sphere, b) {
    if (['timer', 'start_btn', 'game_header', 'winner'].indexOf(b.type) >= 0) {
      return
    }

    // const nextPos = this.fakeMove()

    const sphere_ul_x = sphere.pos.x()
    const sphere_ul_y = sphere.pos.y()
    const sphere_lr_x = sphere_ul_x + sphere.size[0]
    const sphere_lr_y = sphere_ul_y + sphere.size[1]

    const b_ul_x = b.pos.x()
    const b_ul_y = b.pos.y()
    const b_lr_x = b_ul_x + b.size[0]
    const b_lr_y = b_ul_y + b.size[1]

    const separate =
      sphere_lr_x < b_ul_x ||
      b_lr_x < sphere_ul_x ||
      sphere_lr_y < b_ul_y ||
      b_lr_y < sphere_ul_y

    if (separate && this.bounceCheck === b.id) {
      this.bounceCheck = null
    }

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
      sphere.pos.x(),
      sphere.pos.y(),
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

    cloneContext.drawImage(
      b.img,
      ...b.spriteCoordinates,
      b.pos.x(),
      b.pos.y(),
      ...b.size
    )

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
        if (b.type === 'sphere') {
          b.vel = b.vel.flip()
          sphere.vel = sphere.vel.flip()
          return
        }

        if (b.type !== 'basket') {
          if (b.type === 'lever') sphere.vel = sphere.vel.multiply(0.93)

          const surfaceNormal =
            b.type !== 'sphere' ? b.vector.normal() : b.vel.normal()
          const dotProduct = sphere.vel.dotProduct(surfaceNormal)
          const bounceVector = surfaceNormal.multiply(-2 * dotProduct)
          sphere.vel = sphere.vel.add(bounceVector)

          if (!this.bounceCheck || this.bounceCheck !== b.id) {
            this.bounceCheck = b.id
            this.game.bounce.play()
          }

          // on level surface and still going down
          if (
            b.type === 'lever' &&
            b.rotation === 0 &&
            sphere.pos.x() > b.pos.x() &&
            sphere.pos.x() < b.pos.x() + b.size[0] &&
            sphere.pos.y() > b.pos.y() - 10
          ) {
            sphere.vel = new Vector(sphere.vel.value[0], 0)
            sphere.stuck = true
          } else {
            sphere.stuck = false
          }

          break
        } else {
          if (b.side === 'left') {
            this.game.badBasketDrop.play()
          } else {
            this.game.goodBasketDrop.play()
          }
          b.spheres[sphere.id] = sphere.id
          sphere.game.delete(sphere)
        }
      }
    }
  }

  slide(slide) {
    if (this.stuck) this.pos.value[0] += slide
  }
}

export default Sphere

// Playing cards in plastic container tilt, cards movement inside 3
