import { randomId } from './utils'

class Lever {
  constructor(game, pos, rotation) {
    this.type = 'lever'

    this.id = randomId()
    this.game = game
    this.pos = pos
    this.rotation = rotation

    // from position & rotation, we will position checkpoints
    this.deltas = []
    for (let index = 0; index <= 50; index++) {
      this.deltas.push(index * 2)
    }

    this.img = new Image()
    this.img.src = './assets/flipmaster_spritesheet.png'
    if (rotation === 45) {
      this.spriteCoordinates = [196, 0, 82, 82]
      this.size = [82, 82]
      this.pos[1] -= 38
    } else if (rotation === -45) {
      this.spriteCoordinates = [120, 0, 76, 76]
      this.size = [76, 76]
      this.pos[1] -= 28
    } else {
      this.spriteCoordinates = [0, 0, 100, 15]
      this.size = [100, 15]
    }

    this.draw = this.draw.bind(this)
    // this.detectCollisions = this.detectCollisions.bind(this)
    this.updateCheckPoints = this.updateCheckPoints.bind(this)
  }

  update(ctx) {
    this.updateCheckPoints()
    // this.detectCollisions()
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

  updateCheckPoints() {
    this.checkPoints = this.deltas.map(delta => [
      this.pos[0] + delta * Math.cos(this.rotation),
      this.pos[1] + delta * Math.sin(this.rotation)
    ])
    // this.sector = {
    //   minX: Infinity,
    //   maxX: -Infinity,
    //   minY: -Infinity,
    //   maxY: Infinity
    // }
    // this.checkPoints.forEach(cp => {
    //   this.sector.minX = cp[0] < this.sector.minX ? cp[0] : this.sector.minX
    //   this.sector.maxX = cp[0] > this.sector.maxX ? cp[0] : this.sector.maxX
    //   this.sector.minY = cp[1] < this.sector.minY ? cp[1] : this.sector.minY
    //   this.sector.maxY = cp[1] > this.sector.maxY ? cp[1] : this.sector.maxY
    // })
  }

  // sleep() {
  //   this.sleeping = true
  //   setInterval(() => {
  //     this.sleeping = false
  //   }, 100)
  // }

  // detectCollisions() {
  // if (this.sleeping) return

  // const allBalls = this.game.gameAssets.filter(
  //   asset => asset.type === 'sphere'
  // )

  // allBalls.forEach(ball => {
  //   this.checkPoints.forEach(checkPoint => {
  //     const dist = Math.sqrt(
  //       (ball.pos[0] - checkPoint[0]) ** 2 +
  //         (ball.pos[1] - checkPoint[1]) ** 2
  //     )
  //     const collided = dist <= 13.5

  //     if (collided) {
  //       if (this.rotation === 0) {
  //         ball.vel[1] = -ball.vel[1]
  //       }
  //     }

  // if (this.rotation === 0) {
  //   const ydelta = Math.abs(ball.pos[1] - checkPoint[1])
  //   const xdelta = Math.abs(ball.pos[0] - checkPoint[0])
  //   if (xdelta <= 17 || ydelta <= 17) {
  //     ball.vel[1] = -ball.vel[1]
  //     this.sleep()
  //   }
  // }
  // if (this.rotation === 45) {
  //   if (ball.pos[1] < checkPoint[1] && ball.pos[0] < checkPoint[0]) {
  //     const xDiff = ball.pos[0] - checkPoint[0]
  //     const yDiff = ball.pos[1] - checkPoint[1]
  //     const dist = Math.sqrt(xDiff ** 2 + yDiff ** 2)
  //     if (dist < 5) {
  //       ball.vel = [-2, Math.min(-ball.vel[1] * 0.5, -4)]
  //     }
  //   }
  // }
  // if (this.rotation === -45) {
  //   if (ball.pos[1] < checkPoint[1] && ball.pos[0] > checkPoint[0]) {
  //     const xDiff = ball.pos[0] - checkPoint[0]
  //     const yDiff = ball.pos[1] - checkPoint[1]
  //     const dist = Math.sqrt(xDiff ** 2 + yDiff ** 2)
  //     if (dist < 5) {
  //       ball.vel = [2, Math.min(-ball.vel[1] * 0.5, -4)]
  //     }
  //   }
  // }
  //     })
  //     // }
  //   })
  // }

  // inSector(ball) {
  //   return (
  //     ball.pos[0] >= this.sector.minX &&
  //     ball.pos[0] <= this.sector.maxX &&
  //     ball.pos[1] >= this.sector.minY &&
  //     ball.pos[1] <= this.sector.maxY
  //   )
  // }
}

export default Lever
