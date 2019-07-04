import Vector from './vector'
import { randomId } from './utils'

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
    this.img.src = './assets/flipmaster_spritesheet.png'

    this.spriteCoordinates = [290, 79, 23, 100]
    this.size = [23, 100]

    this.game.addAsset(this)

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

export default Bar
