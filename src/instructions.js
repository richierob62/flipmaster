import Vector from './vector'
import { randomId } from './utils'
import spriteMeta from '../public/assets/flipmaster_spritesheet'

class Instructions {
  constructor(game, pos) {
    this.type = 'instructions'

    this.id = randomId()
    this.game = game
    this.pos = pos

    this.draw = this.draw.bind(this)
    this.wrapText = this.wrapText.bind(this)
  }

  update(ctx) {
    this.draw(ctx)
  }

  draw(ctx) {
    ctx.font = '25px Comic Sans MS'
    ctx.fillStyle = 'white'
    ctx.textAlign = 'center'
    this.wrapText(
      ctx,
      'Welcome to Flipmaster!',
      this.pos.x(),
      this.pos.y(),
      500,
      35
    )
    ctx.font = '15px Comic Sans MS'
    this.wrapText(
      ctx,
      `You job is to get more balls falling into your basket (green) than fall into the other (red) one.`,
      this.pos.x(),
      this.pos.y() + 35,
      500,
      25
    )
  }

  wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ')
    const lines = []
    let idx = 0
    words.forEach(word => {
      if (!lines[idx]) {
        lines[idx] = word
      } else {
        const dimData = ctx.measureText(lines[idx] + ' ' + word)
        if (dimData.width <= maxWidth) {
          lines[idx] += ' ' + word
        } else {
          idx++
          lines[idx] = word
        }
      }
    })
    lines.forEach(line => {
      ctx.fillText(line, x, y)
      y += lineHeight
    })
  }

  slide(slide) {
    //
  }
}

export default Instructions
