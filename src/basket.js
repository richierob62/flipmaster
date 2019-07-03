class Basket {
  constructor(game, pos, side) {
    this.type = 'basket'

    this.game = game
    this.pos = pos
    this.side = side

    this.img = new Image()
    this.img.src = './assets/flipmaster_spritesheet.png'

    this.spriteCoordinates = [0, 82, 290, 91]
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
      ...this.pos,
      ...this.size
    )
  }
}

export default Basket
