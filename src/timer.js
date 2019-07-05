import Constants from './constants'
import Vector from './vector'
import { randomId } from './utils'

class Timer {
  constructor(game, pos) {
    this.type = 'timer'

    this.id = randomId()

    this.game = game
    this.pos = pos

    this.draw = this.draw.bind(this)
  }

  update(ctx) {
    this.draw(ctx)
  }

  draw(ctx) {
    const x = this.pos.x()
    const y = this.pos.y()
    ctx.fillStyle = 'rebeccapurple'
    ctx.lineWidth = 1
    ctx.strokeStyle = '#333'
    ctx.beginPath()
    const endAngle = (2 * Math.PI * 3) / 4
    const topAngle = (-1 * Math.PI) / 2
    const slope = (endAngle - topAngle) / (Constants.HUMAN_TIME / 1000)
    const startAngle = slope * this.game.timeElapsed + topAngle

    ctx.moveTo(x, y)
    ctx.arc(x, y, 40, startAngle, endAngle, false)
    ctx.lineTo(x, y)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
  }

  slide() {
    // nothing
  }
}

export default Timer
