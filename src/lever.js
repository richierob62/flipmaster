import Vector from './vector'
import { randomId } from './utils'

class Lever {
  constructor(game, pos, rotation) {
    this.type = 'lever'

    this.id = randomId()
    this.game = game
    this.placedPosition = new Vector(pos.x(), pos.y())
    this.pos = pos
    this.rotation = rotation

    this.pos45Adjustment = -38
    this.posNeg45Adjustment = -28

    this.img = new Image()
    this.img.src = './assets/flipmaster_spritesheet.png'
    if (rotation === 45) {
      this.spriteCoordinates = [199, 0, 79, 79]
      this.size = [82, 82]
      this.pos.value[1] += this.pos45Adjustment
      this.vector = new Vector(1, -1)
    } else if (rotation === -45) {
      this.spriteCoordinates = [120, 0, 79, 79]
      this.size = [79, 79]
      this.pos.value[1] += this.posNeg45Adjustment
      this.vector = new Vector(1, 1)
    } else {
      this.spriteCoordinates = [20, 0, 100, 22]
      this.size = [100, 22]
      this.vector = new Vector(1, 0)
    }

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
      if (this.rotation !== 0) {
        this.spriteCoordinates = [20, 0, 100, 22]
        this.size = [100, 22]
        this.pos = this.placedPosition
        this.vector = new Vector(1, 0)
      } else {
        console.log(`x: ${x} y: ${y}`)
        console.log(this.pos.value)
        if (x > bbox_ul_x + this.size[0] / 2) {
          console.log('right side')
          // right 0
          // right 45
          // right -45
        } else {
          console.log('left side')
        }
      }
    }
  }
}

export default Lever
