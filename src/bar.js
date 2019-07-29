import Vector from './vector'
import { randomId } from './utils'
import spriteMeta from '../public/assets/flipmaster_spritesheet'

class Bar {
  constructor(game, pos, activeSide) {
    this.type = 'bar'

    this.id = randomId()

    this.game = game
    this.pos = pos
    this.activeSide = activeSide

    if (activeSide === 'right') {
      this.vector = new Vector(0, 1)
    } else {
      this.vector = new Vector(0, -1)
    }

    this.img = new Image()
    this.img.src = this.game.spriteSheet

    const { x, y, w, h } = spriteMeta['bar.png'].frame

    this.spriteCoordinates = [x, y, w, h]
    this.size = [w, h]

    this.draw = this.draw.bind(this)
  }

  update(ctx) {
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

  slide(slide) {
    this.pos.value[0] += slide
  }
}

export default Bar
