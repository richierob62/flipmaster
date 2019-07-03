import Bar from './bar'
import Lever from './lever'

class WallManager {
  constructor(game, pos) {
    this.game = game
    this.pos = pos
    this.buildWalls()
    this.addLevers()
  }

  buildWalls() {
    this.game.addAsset(new Bar(this.game, this, [615, 0], 'left'))
    this.game.addAsset(new Bar(this.game, this, [615, -100], 'left'))
    this.game.addAsset(new Bar(this.game, this, [615, -200], 'left'))
    this.game.addAsset(new Bar(this.game, this, [615, -300], 'left'))
    this.game.addAsset(new Bar(this.game, this, [615, -400], 'left'))
    this.game.addAsset(new Bar(this.game, this, [615, -500], 'left'))
  }

  addLevers() {
    const randomRotations = [0, 45, -45]
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [15, 0],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [115, 0],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [215, 0],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [315, 0],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [415, 0],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [515, 0],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [15, -100],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [115, -100],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [215, -100],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [315, -100],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [415, -100],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [515, -100],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [15, -200],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [115, -200],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [215, -200],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [315, -200],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [415, -200],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [515, -200],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [15, -300],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [115, -300],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [215, -300],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [315, -300],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [415, -300],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [515, -300],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [15, -400],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [115, -400],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [215, -400],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [315, -400],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [415, -400],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
    this.game.addAsset(
      new Lever(
        this.game,
        this,
        [515, -400],
        randomRotations[Math.floor(Math.random() * 4)]
      )
    )
  }
}

export default WallManager
