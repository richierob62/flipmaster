class Lever {
  constructor(game, pos, rotation) {
    this.type = 'lever'

    this.game = game
    this.pos = pos
    this.rotation = rotation

    this.img = new Image()
    this.img.src = './assets/flipmaster_spritesheet.png'
    this.spriteCoordinates = [304, 0, 100, 15]
    this.size = [100, 15]

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

export default Lever
