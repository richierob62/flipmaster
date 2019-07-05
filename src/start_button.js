import Vector from './vector'
import { randomId } from './utils'
import spriteMeta from '../public/assets/flipmaster_spritesheet'

class StartButton {
  constructor(game, pos) {
    this.type = 'start_btn'

    this.id = randomId()
    this.game = game
    this.pos = pos

    this.img = new Image()
    this.img.src = './assets/flipmaster_spritesheet.png'
    const { x, y, w, h } = spriteMeta['start.png'].frame
    this.spriteCoordinates = [x, y, w, h]
    this.size = [w, h]

    this.draw = this.draw.bind(this)
    this.handleClick = this.handleClick.bind(this)
    window.addEventListener('click', this.handleClick)
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

  slide(slide) {
    //
  }
}

export default StartButton
