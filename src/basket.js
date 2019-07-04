/* eslint-disable one-var */
/* eslint-disable class-methods-use-this */
import { randomId } from './utils'

class Basket {
  constructor(game, pos, side) {
    this.type = 'basket'

    this.id = randomId()

    this.game = game
    this.pos = pos
    this.side = side
    this.spheres = {}

    this.img = new Image()
    this.img.src = './assets/flipmaster_spritesheet.png'

    this.spriteCoordinates = [0, 79, 290, 91]
    this.size = [290, 91]

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

    // ellipse for score
    let centerX, centerY, color
    if (this.side === 'left') {
      centerX = 250
      centerY = 700
      color = 'red'
    } else {
      centerX = 550
      centerY = 700
      color = 'green'
    }
    this.drawEllipse(ctx, centerX, centerY, 150, 80, color)

    // ctx.fillStyle = this.side === 'left' ? 'red' : 'green'
    ctx.font = '40px Comic Sans MS'
    ctx.fillStyle = 'white'
    ctx.textAlign = 'center'
    ctx.fillText(Object.keys(this.spheres).length, centerX, centerY + 10)
  }

  drawEllipse(ctx, centerX, centerY, width, height, color) {
    ctx.beginPath()

    ctx.moveTo(centerX, centerY - height / 2) // A1

    ctx.bezierCurveTo(
      centerX + width / 2,
      centerY - height / 2,
      centerX + width / 2,
      centerY + height / 2,
      centerX,
      centerY + height / 2
    )

    ctx.bezierCurveTo(
      centerX - width / 2,
      centerY + height / 2,
      centerX - width / 2,
      centerY - height / 2,
      centerX,
      centerY - height / 2
    )

    ctx.fillStyle = color
    ctx.fill()
    ctx.closePath()
  }
}

export default Basket
