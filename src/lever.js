import Constants from './constants'
import Vector from './vector'
import { randomId } from './utils'
import spriteMeta from '../public/assets/flipmaster_spritesheet'

class Lever {
  constructor(game, pos, rotation) {
    this.type = 'lever'

    this.id = randomId()
    this.game = game
    this.originalY = pos.value[1]
    this.pos = pos
    this.rotation = rotation

    this.diagonalAdjustment = -25

    this.img = new Image()
    this.img.src = './assets/flipmaster_spritesheet.png'
    if (rotation === 45) {
      const { x, y, w, h } = spriteMeta['lever_2.png'].frame
      this.spriteCoordinates = [x, y, w, h]
      this.size = [w, h]
      this.pos.value[1] += this.diagonalAdjustment
      this.vector = new Vector(1, -1)
    } else if (rotation === -45) {
      const { x, y, w, h } = spriteMeta['lever_neg45.png'].frame
      this.spriteCoordinates = [x, y, w, h]
      this.size = [w, h]
      this.pos.value[1] += this.diagonalAdjustment
      this.vector = new Vector(1, 1)
    } else {
      const { x, y, w, h } = spriteMeta['lever_2.png'].frame
      this.spriteCoordinates = [x, y, w, h]
      this.size = [w, h]
      this.vector = new Vector(1, 0)
    }

    this.draw = this.draw.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  update(ctx) {
    if (this.game.currentPlayer !== 'computer') {
      window.addEventListener('click', this.handleClick)
    } else {
      window.removeEventListener('click', this.handleClick)
    }
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

  handleClick(e) {
    if (this.game.clickInProgress) return

    e.stopPropagation()
    const bbox_ul_x = this.pos.x()
    const bbox_ul_y = this.pos.y()
    const bbox_lr_x = bbox_ul_x + this.size[0]
    const bbox_lr_y = bbox_ul_y + this.size[1]

    const rect = this.game.canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    if (bbox_ul_x <= x && bbox_lr_x >= x && bbox_ul_y <= y && bbox_lr_y >= y) {
      // this lever

      if (this.game.leversChanged > Constants.NUMBER_CHANGED_BY_HUMAN) return

      this.game.leversChanged += 1
      this.game.clickInProgress = this.id
      console.log(this.game.leversChanged)

      if (this.rotation !== 0) {
        const { x, y, w, h } = spriteMeta['lever_2.png'].frame
        this.spriteCoordinates = [x, y, w, h]
        this.size = [w, h]
        this.pos.value[1] = this.originalY
        this.vector = new Vector(1, 0)
        this.rotation = 0
      } else if (x > bbox_ul_x + this.size[0] / 2) {
        const { x, y, w, h } = spriteMeta['lever_neg45.png'].frame
        this.spriteCoordinates = [x, y, w, h]
        this.size = [w, h]
        this.pos.value[1] = this.originalY + this.diagonalAdjustment
        this.vector = new Vector(1, 1)
        this.rotation = -45
      } else {
        const { x, y, w, h } = spriteMeta['lever_45.png'].frame
        this.spriteCoordinates = [x, y, w, h]
        this.size = [w, h]
        this.pos.value[1] = this.originalY + this.diagonalAdjustment
        this.vector = new Vector(1, -1)
        this.rotation = 45
      }

      this.game.flip.play()
      this.game.clickInProgress = null
    }
  }

  slide(slide) {
    this.pos.value[0] += slide
  }

  flipTo45() {
    const { x, y, w, h } = spriteMeta['lever_45.png'].frame
    this.spriteCoordinates = [x, y, w, h]
    this.size = [w, h]
    this.pos.value[1] = this.originalY + this.diagonalAdjustment
    this.vector = new Vector(1, -1)
    this.rotation = 45
    this.game.computerFlip.play()
  }

  flipToFlat() {
    const { x, y, w, h } = spriteMeta['lever_2.png'].frame
    this.spriteCoordinates = [x, y, w, h]
    this.size = [w, h]
    this.pos.value[1] = this.originalY
    this.rotation = 0
    this.vector = new Vector(1, 0)
    this.game.computerFlip.play()
  }
}

export default Lever
