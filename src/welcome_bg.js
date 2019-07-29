import { randomId } from './utils'

class WelcomeBackground {
  constructor(game, pos) {
    this.type = 'welcome_bg'

    this.id = randomId()
    this.game = game
    this.pos = pos

    this.draw = this.draw.bind(this)
  }

  update(ctx) {
    this.draw(ctx)
  }

  draw(ctx) {
    ctx.fillStyle = '#222'
    ctx.fillRect(this.pos.x(), this.pos.y(), 700, 600)
  }

  slide(slide) {
    //
  }
}

export default WelcomeBackground
