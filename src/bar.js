import { randomId } from './utils'

class Bar {
  constructor(game, pos, activeSide) {
    this.type = 'bar'

    this.id = randomId()

    this.game = game
    this.pos = pos
    this.activeSide = activeSide

    this.img = new Image()
    this.img.src = './assets/flipmaster_spritesheet.png'

    this.spriteCoordinates = [290, 82, 14, 100]
    this.size = [14, 100]

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
      ...this.pos,
      ...this.size
    )
  }
}

export default Bar
