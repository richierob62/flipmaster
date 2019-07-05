/* eslint-disable one-var */
/* eslint-disable class-methods-use-this */
import { randomId } from './utils'
import spriteMeta from '../public/assets/flipmaster_spritesheet'

class GameHeader {
  constructor(game, pos) {
    this.type = 'game_header'

    this.id = randomId()

    this.game = game
    this.pos = pos

    this.img = new Image()
    this.img.src = './assets/flipmaster_spritesheet.png'

    const { x, y, w, h } = spriteMeta['game_header.png'].frame

    this.spriteCoordinates = [x, y, w, h]
    this.size = [w / 2, h / 2]

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
}

export default GameHeader
