import Bar from './bar'

class WallManager {
  constructor(game, pos) {
    this.game = game
    this.pos = pos
    this.buildWalls()
  }

  buildWalls() {
    this.game.addAsset(new Bar(this.game, this, [0, 0], 'right'))
    this.game.addAsset(new Bar(this.game, this, [0, -100], 'right'))
    this.game.addAsset(new Bar(this.game, this, [0, -200], 'right'))
    this.game.addAsset(new Bar(this.game, this, [0, -300], 'right'))
    this.game.addAsset(new Bar(this.game, this, [0, -400], 'right'))
    this.game.addAsset(new Bar(this.game, this, [0, -500], 'right'))
    this.game.addAsset(new Bar(this.game, this, [615, 0], 'left'))
    this.game.addAsset(new Bar(this.game, this, [615, -100], 'left'))
    this.game.addAsset(new Bar(this.game, this, [615, -200], 'left'))
    this.game.addAsset(new Bar(this.game, this, [615, -300], 'left'))
    this.game.addAsset(new Bar(this.game, this, [615, -400], 'left'))
    this.game.addAsset(new Bar(this.game, this, [615, -500], 'left'))
  }
}

export default WallManager
