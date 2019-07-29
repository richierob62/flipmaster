/* eslint-disable one-var */
/* eslint-disable class-methods-use-this */
import { randomId } from './utils'
import spriteMeta from '../public/assets/flipmaster_spritesheet'

class Winner {
  constructor(game, pos, win) {
    this.type = 'winner'

    this.id = randomId()

    this.game = game
    this.pos = pos
    this.win = win

    this.img = new Image()
    this.img.src = this.game.spriteSheet

    if (this.win) {
      const { x, y, w, h } = spriteMeta['you_won.jpg'].frame
      this.spriteCoordinates = [x, y, w, h]
      this.size = [w, h]
    } else {
      const { x, y, w, h } = spriteMeta['you_lost.jpg'].frame
      this.spriteCoordinates = [x, y, w, h]
      this.size = [w, h]
    }

    this.handleClick = this.handleClick.bind(this)

    window.addEventListener('click', this.handleClick)

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

  handleClick(e) {
    e.stopPropagation()

    console.log(e.clientX)

    const bbox_ul_x = this.pos.x()
    const bbox_ul_y = this.pos.y()
    const bbox_lr_x = bbox_ul_x + this.size[0]
    const bbox_lr_y = bbox_ul_y + this.size[1]

    const rect = this.game.canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    if (bbox_ul_x <= x && bbox_lr_x >= x && bbox_ul_y <= y && bbox_lr_y >= y) {
      window.removeEventListener('click', this.handleClick)
      this.game.start()
    }
  }
}

export default Winner
