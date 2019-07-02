class Bar {
  constructor(game, wall, pos, activeSide) {
    this.type = 'bar'

    this.game = game
    this.pos = pos
    this.wall = wall
    this.activeSide = activeSide

    this.img = new Image()
    this.img.src = './assets/flipmaster_spritesheet.png'

    this.spriteCoordinates = [0, 0, 14, 100]
    this.size = [14, 100]

    this.game.addAsset(this)

    this.draw = this.draw.bind(this)
  }

  update(ctx) {
    this.draw(ctx)
  }

  draw(ctx) {
    const abs_x = this.pos[0] + this.wall.pos[0]
    const abs_y = this.pos[1] + this.wall.pos[1]

    ctx.drawImage(
      this.img,
      ...this.spriteCoordinates,
      abs_x,
      abs_y,
      ...this.size
    )
  }
}

export default Bar
