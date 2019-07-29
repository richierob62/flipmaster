import Ball from './sphere'
import Bar from './bar'
import Basket from './basket'
import Constants from './constants'
import GameHeader from './game_header'
import Instructions from './instructions'
import Lever from './lever'
import Sound from './sound'
import StartButton from './start_button'
import Timer from './timer'
import Vector from './vector'
import WelcomeBackground from './welcome_bg'
import Winner from './winner'

class Game {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')

    this.spriteSheet = './assets/flipmaster_spritesheet.png'

    this.gameAssets = {}
    this.lowerLeft = {}
    this.lowerRight = {}
    this.upperLeft = {}
    this.upperRight = {}

    this.slide = 0
    this.slideDelta = Constants.SLIDE_DELTA
    this.timeElapsed = 0
    this.leversChanged = 0
    this.winnerAnnounced = false

    this.currentPlayer = 'human'

    this.bounce = new Sound('./assets/sounds/bounce.mp3', 5, 0.3)
    this.goodBasketDrop = new Sound('./assets/sounds/good_basket.mp3', 1, 0.5)
    this.badBasketDrop = new Sound('./assets/sounds/bad_basket.mp3', 1, 0.5)
    this.flip = new Sound('./assets/sounds/flip.mp3')
    this.computerFlip = new Sound('./assets/sounds/computer_flip.mp3')

    this.update = this.update.bind(this)
    this.clearCanvas = this.clearCanvas.bind(this)
    this.addAsset = this.addAsset.bind(this)
    this.addBall = this.addBall.bind(this)
    this.computerPlay = this.computerPlay.bind(this)
    this.switchToComputer = this.switchToComputer.bind(this)
    this.startCycle = this.startCycle.bind(this)
    this.incrementTime = this.incrementTime.bind(this)
    this.stop = this.stop.bind(this)
    this.removeWinnerDisplay = this.removeWinnerDisplay.bind(this)
    this.removeStartButton = this.removeStartButton.bind(this)
    this.start = this.start.bind(this)
    this.emptyBaskets = this.emptyBaskets.bind(this)
    this.resetLevers = this.resetLevers.bind(this)
    this.displayWelcomeBackground = this.displayWelcomeBackground.bind(this)
    this.displayGameHeader = this.displayGameHeader.bind(this)
    this.displayStartButton = this.displayStartButton.bind(this)
    this.displayInstructions = this.displayInstructions.bind(this)
    this.addBaskets = this.addBaskets.bind(this)
    this.buildLeftWall = this.buildLeftWall.bind(this)
    this.buildRightWall = this.buildRightWall.bind(this)
    this.buildLevers = this.buildLevers.bind(this)

    this.animFrame = window.requestAnimationFrame(this.update)

    this.displayStaticGameAssets()
    this.displayWelcomePage()
  }

  displayStaticGameAssets() {
    this.addBaskets()
    this.buildLeftWall()
    this.buildRightWall()
    this.buildLevers()
  }

  displayWelcomePage() {
    this.displayWelcomeBackground()
    this.displayGameHeader()
    this.displayStartButton()
    this.displayInstructions()
  }

  displayWelcomeBackground() {
    const pos = new Vector(50, 150)
    this.addAsset(new WelcomeBackground(this, pos))
  }

  displayGameHeader() {
    const pos = new Vector(275, 180)
    this.addAsset(new GameHeader(this, pos))
  }

  displayStartButton() {
    const pos = new Vector(260, 640)
    this.addAsset(new StartButton(this, pos))
  }

  displayInstructions() {
    const pos = new Vector(400, 275)
    this.addAsset(new Instructions(this, pos))
  }

  update() {
    this.clearCanvas()
    this.slideFrame()
    Object.values(this.gameAssets).forEach(asset => asset.update(this.ctx))
    this.animFrame = window.requestAnimationFrame(this.update)
    this.checkForWin()
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    const grd = this.ctx.createLinearGradient(800, 0, 800, 800)
    grd.addColorStop(0, 'black')
    grd.addColorStop(1, 'white')
    this.ctx.fillStyle = grd
    this.ctx.fillRect(0, 0, 800, 800)
  }

  ///////////////////

  start() {
    this.gameAssets = {}
    this.lowerLeft = {}
    this.lowerRight = {}
    this.upperLeft = {}
    this.upperRight = {}

    this.slide = 0
    this.slideDelta = Constants.SLIDE_DELTA
    this.timeElapsed = 0
    this.winnerAnnounced = false

    this.currentPlayer = 'human'

    this.addBaskets()
    this.buildLeftWall()
    this.buildRightWall()
    this.buildLevers()

    this.animFrame = window.requestAnimationFrame(this.update)

    this.addTimer()

    this.addBall()

    this.ballAdder = window.setInterval(
      this.addBall,
      Constants.INTERVAL_BETWEEN_SPHERES
    )

    this.gameStopped = false
    this.startCycle()
  }

  stop() {
    window.clearInterval(this.ballAdder)
    window.clearInterval(this.timerInterval)
    window.clearInterval(this.switchTimer)

    this.gameStopped = true
    Object.values(this.gameAssets).forEach(asset => {
      if (asset.type === 'sphere') {
        delete this.gameAssets[asset.id]
      }
    })
  }

  emptyBaskets() {
    Object.values(this.gameAssets).forEach(asset => {
      if (asset.type === 'basket') {
        asset.spheres = {}
      }
    })
  }

  resetLevers() {
    Object.values(this.gameAssets).forEach(asset => {
      if (asset.type === 'lever') {
        asset.flipToFlat()
      }
    })
  }

  removeWinnerDisplay() {
    const disp = Object.values(this.gameAssets).filter(
      asset => asset.type === 'winner'
    )[0]
    if (disp) delete this.gameAssets[disp.id]
  }

  removeStartButton() {
    const btn = Object.values(this.gameAssets).filter(
      asset => asset.type === 'start_btn'
    )[0]
    if (btn) delete this.gameAssets[btn.id]
  }

  checkForWin() {
    const basket = Object.values(this.gameAssets).filter(
      asset =>
        asset.type === 'basket' && Object.values(asset.spheres).length >= 20
    )
    if (basket[0]) {
      const win = basket[0].side === 'right'
      if (!this.winnerAnnounced) {
        this.winnerAnnounced = true
        const pos = new Vector(50, 200)
        this.addAsset(new Winner(this, pos, win))
        this.stop()
      }
    }
  }

  addAsset(asset) {
    this.gameAssets[asset.id] = asset
    if (asset.type !== 'sphere') {
      if (asset.pos.x() <= 400 && asset.pos.y() >= 400) {
        this.lowerLeft[asset.id] = asset
      } else if (asset.pos.x() > 400 && asset.pos.y() >= 400) {
        this.lowerRight[asset.id] = asset
      } else if (asset.pos.x() <= 400 && asset.pos.y() < 400) {
        this.upperLeft[asset.id] = asset
      } else {
        this.upperRight[asset.id] = asset
      }
    }
  }

  delete(asset) {
    delete this.gameAssets[asset.id]
    delete this.lowerLeft[asset.id]
    delete this.lowerRight[asset.id]
    delete this.upperLeft[asset.id]
    delete this.upperRight[asset.id]
  }

  addBall() {
    const pos = new Vector(
      110 + this.slide + Math.random() * 600,
      -10 - Math.random() * 100
    )
    const vel = new Vector(0, 0)
    this.addAsset(new Ball(this, pos, vel))
  }

  addTimer() {
    const pos = new Vector(400, 730)
    this.addAsset(new Timer(this, pos))
  }

  addBaskets() {
    this.addAsset(new Basket(this, new Vector(100, 650), 'left'))
    this.addAsset(new Basket(this, new Vector(410, 650), 'right'))
  }

  buildLeftWall() {
    this.addAsset(new Bar(this, new Vector(85, 50), 'right'))
    this.addAsset(new Bar(this, new Vector(85, 150), 'right'))
    this.addAsset(new Bar(this, new Vector(85, 250), 'right'))
    this.addAsset(new Bar(this, new Vector(85, 350), 'right'))
    this.addAsset(new Bar(this, new Vector(85, 450), 'right'))
    this.addAsset(new Bar(this, new Vector(85, 550), 'right'))
  }

  buildRightWall() {
    this.addAsset(new Bar(this, new Vector(700, 50), 'left'))
    this.addAsset(new Bar(this, new Vector(700, 150), 'left'))
    this.addAsset(new Bar(this, new Vector(700, 250), 'left'))
    this.addAsset(new Bar(this, new Vector(700, 350), 'left'))
    this.addAsset(new Bar(this, new Vector(700, 450), 'left'))
    this.addAsset(new Bar(this, new Vector(700, 550), 'left'))
  }

  buildLevers() {
    this.addAsset(new Lever(this, new Vector(100, 100), 0))
    this.addAsset(new Lever(this, new Vector(300, 100), 0))
    this.addAsset(new Lever(this, new Vector(500, 100), 0))
    this.addAsset(new Lever(this, new Vector(200, 200), 0))
    this.addAsset(new Lever(this, new Vector(400, 200), 0))
    this.addAsset(new Lever(this, new Vector(600, 200), 0))
    this.addAsset(new Lever(this, new Vector(100, 300), 0))
    this.addAsset(new Lever(this, new Vector(200, 300), 0))
    this.addAsset(new Lever(this, new Vector(300, 300), 0))
    this.addAsset(new Lever(this, new Vector(400, 300), 0))
    this.addAsset(new Lever(this, new Vector(500, 300), 0))
    this.addAsset(new Lever(this, new Vector(600, 300), 0))
    this.addAsset(new Lever(this, new Vector(300, 400), 0))
    this.addAsset(new Lever(this, new Vector(400, 400), 0))
    this.addAsset(new Lever(this, new Vector(100, 500), 0))
    this.addAsset(new Lever(this, new Vector(200, 500), 0))
    this.addAsset(new Lever(this, new Vector(300, 500), 0))
    this.addAsset(new Lever(this, new Vector(400, 500), 0))
    this.addAsset(new Lever(this, new Vector(500, 500), 0))
    this.addAsset(new Lever(this, new Vector(600, 500), 0))
  }

  startCycle() {
    if (this.gameStopped) return
    if (this.currentPlayer === 'computer') {
      window.clearInterval(this.timerInterval)
      window.clearInterval(this.switchTimer)
      this.computerPlay()
    } else {
      this.leversChanged = 0
      this.switchTimer = window.setTimeout(
        this.switchToComputer,
        Constants.HUMAN_TIME
      )
      this.timerStartTime = Date.now()
      this.timerInterval = window.setInterval(this.incrementTime, 100)
    }
  }

  incrementTime() {
    this.timeElapsed =
      ((Date.now() - this.timerStartTime) / 1000) %
      (Constants.HUMAN_TIME / 1000)
  }

  switchToComputer() {
    this.currentPlayer = 'computer'
    this.startCycle()
  }

  computerPlay() {
    const levers = Object.values(this.gameAssets).filter(
      asset => asset.type === 'lever' && asset.rotation !== 45
    )
    let selected = []
    if (levers.length <= this.leversChanged / 2 + 1) {
      selected = levers
    } else {
      while (selected.length < this.leversChanged / 2 + 1) {
        const random = levers[Math.floor(Math.random() * levers.length)]
        if (selected.indexOf(random) === -1) selected.push(random)
      }
    }
    selected.forEach(lever => {
      if (lever.rotation === 0) {
        lever.flipTo45()
      } else {
        lever.flipToFlat()
      }
    })
    this.currentPlayer = 'human'
    this.leversChanged = 0
    this.startCycle()
  }

  slideFrame() {
    if (Math.abs(this.slide) >= Constants.MAXIMUM_SLIDE) {
      this.slideDelta = -1 * this.slideDelta
    }
    Object.values(this.gameAssets)
      .filter(
        asset =>
          asset.type === 'lever' ||
          asset.type === 'bar' ||
          asset.type === 'sphere'
      )
      .forEach(asset => asset.slide(this.slideDelta))
    this.slide += this.slideDelta
  }
}

export default Game
