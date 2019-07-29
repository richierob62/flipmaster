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

  line_1(ctx) {
    ctx.font = '25px Comic Sans MS'
    ctx.fillStyle = 'white'
    ctx.textAlign = 'center'
    this.wrapText(
      ctx,
      "Let's Play Flipmaster!",
      this.pos.x(),
      this.pos.y(),
      500,
      35
    )
  }

  line_2(ctx) {
    ctx.font = '15px Comic Sans MS'
    this.wrapText(
      ctx,
      `You job is to get more balls falling into your basket (green) than fall into the other (red) one.  First to collect 20 balls wins! `,
      this.pos.x(),
      this.pos.y() + 35,
      500,
      25
    )
  }

  squishy(ctx) {
    const squishy = new Image()
    squishy.src = this.game.spriteSheet
    let { x, y, w, h } = spriteMeta['lever_2.png'].frame
    let spriteCoordinates = [x, y, w, h]
    let size = [w, h]
    ctx.drawImage(
      squishy,
      ...spriteCoordinates,
      this.pos.x() - 320,
      this.pos.y() + 100,
      ...size
    )
  }

  line_3(ctx) {
    ctx.textAlign = 'left'
    ctx.font = '20px Comic Sans MS'
    this.wrapText(
      ctx,
      `Sticky Pads trap spheres and slow them down..`,
      this.pos.x() - 200,
      this.pos.y() + 120,
      500,
      25
    )
  }

  line_4(ctx) {
    ctx.textAlign = 'left'
    ctx.font = '20px Comic Sans MS'
    this.wrapText(
      ctx,
      `Click them on the left side to get a`,
      this.pos.x() - 200,
      this.pos.y() + 175,
      500,
      25
    )
  }

  fortyfive(ctx) {
    const fortyfive = new Image()
    fortyfive.src = this.game.spriteSheet
    let { x, y, w, h } = spriteMeta['lever_45.png'].frame
    let spriteCoordinates = [x, y, w, h]
    let size = [w, h]
    ctx.drawImage(
      fortyfive,
      ...spriteCoordinates,
      this.pos.x() + 150,
      this.pos.y() + 130,
      ...size
    )
  }

  line_5(ctx) {
    ctx.textAlign = 'left'
    ctx.font = '20px Comic Sans MS'
    this.wrapText(
      ctx,
      `and on the right side to get a`,
      this.pos.x() - 300,
      this.pos.y() + 240,
      500,
      25
    )
  }

  negfortyfive(ctx) {
    const lever_neg45 = new Image()
    lever_neg45.src = this.game.spriteSheet
    let { x, y, w, h } = spriteMeta['lever_neg45.png'].frame
    let spriteCoordinates = [x, y, w, h]
    let size = [w, h]
    ctx.drawImage(
      lever_neg45,
      ...spriteCoordinates,
      this.pos.x(),
      this.pos.y() + 190,
      ...size
    )
  }

  line_6(ctx) {
    ctx.textAlign = 'left'
    ctx.font = '20px Comic Sans MS'
    this.wrapText(
      ctx,
      `BUT... There's a catch.  Each time the timer resets, the computer will flip ONE MORE than you did on your last turn.`,
      this.pos.x() - 300,
      this.pos.y() + 320,
      600,
      25
    )
  }

  draw(ctx) {
    this.line_1(ctx)
    this.line_2(ctx)
    this.squishy(ctx)
    this.line_3(ctx)
    this.line_4(ctx)
    this.fortyfive(ctx)
    this.line_5(ctx)
    this.negfortyfive(ctx)
    this.line_6(ctx)
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
