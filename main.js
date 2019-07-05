/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/assets/flipmaster_spritesheet.js":
/*!*************************************************!*\
  !*** ./public/assets/flipmaster_spritesheet.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'bar.png': {
    frame: { x: 491, y: 91, w: 23, h: 100 },
    rotated: false,
    trimmed: false,
    spriteSourceSize: { x: 0, y: 0, w: 23, h: 100 },
    sourceSize: { w: 23, h: 100 }
  },
  'basket.png': {
    frame: { x: 278, y: 0, w: 290, h: 91 },
    rotated: false,
    trimmed: false,
    spriteSourceSize: { x: 0, y: 0, w: 290, h: 91 },
    sourceSize: { w: 290, h: 91 }
  },
  'game_header.png': {
    frame: { x: 0, y: 91, w: 491, h: 99 },
    rotated: false,
    trimmed: false,
    spriteSourceSize: { x: 0, y: 0, w: 491, h: 99 },
    sourceSize: { w: 491, h: 99 }
  },
  'lever_2.png': {
    frame: { x: 20, y: 0, w: 100, h: 36 },
    rotated: false,
    trimmed: false,
    spriteSourceSize: { x: 0, y: 0, w: 100, h: 36 },
    sourceSize: { w: 100, h: 36 }
  },
  'lever_45.png': {
    frame: { x: 120, y: 0, w: 79, h: 79 },
    rotated: false,
    trimmed: false,
    spriteSourceSize: { x: 0, y: 0, w: 79, h: 79 },
    sourceSize: { w: 79, h: 79 }
  },
  'lever_neg45.png': {
    frame: { x: 199, y: 0, w: 79, h: 79 },
    rotated: false,
    trimmed: false,
    spriteSourceSize: { x: 0, y: 0, w: 79, h: 79 },
    sourceSize: { w: 79, h: 79 }
  },
  'sphere.png': {
    frame: { x: 0, y: 0, w: 20, h: 20 },
    rotated: false,
    trimmed: false,
    spriteSourceSize: { x: 0, y: 0, w: 20, h: 20 },
    sourceSize: { w: 20, h: 20 }
  },
  'start.png': {
    frame: { x: 514, y: 91, w: 268, h: 107 },
    rotated: false,
    trimmed: false,
    spriteSourceSize: { x: 0, y: 0, w: 268, h: 107 },
    sourceSize: { w: 268, h: 107 }
  },
  'you_lost.jpg': {
    frame: { x: 0, y: 198, w: 686, h: 414 },
    rotated: false,
    trimmed: false,
    spriteSourceSize: { x: 0, y: 0, w: 686, h: 414 },
    sourceSize: { w: 686, h: 414 }
  },
  'you_won.jpg': {
    frame: { x: 0, y: 612, w: 686, h: 414 },
    rotated: false,
    trimmed: false,
    spriteSourceSize: { x: 0, y: 0, w: 686, h: 414 },
    sourceSize: { w: 686, h: 414 }
  }
});


/***/ }),

/***/ "./src/bar.js":
/*!********************!*\
  !*** ./src/bar.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/vector.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _public_assets_flipmaster_spritesheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/assets/flipmaster_spritesheet */ "./public/assets/flipmaster_spritesheet.js");




class Bar {
  constructor(game, pos, activeSide) {
    this.type = 'bar'

    this.id = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["randomId"])()

    this.game = game
    this.pos = pos
    this.activeSide = activeSide

    if (activeSide === 'right') {
      this.vector = new _vector__WEBPACK_IMPORTED_MODULE_0__["default"](0, 1)
    } else {
      this.vector = new _vector__WEBPACK_IMPORTED_MODULE_0__["default"](0, -1)
    }

    this.img = new Image()
    this.img.src = './assets/flipmaster_spritesheet.png'

    const { x, y, w, h } = _public_assets_flipmaster_spritesheet__WEBPACK_IMPORTED_MODULE_2__["default"]['bar.png'].frame

    this.spriteCoordinates = [x, y, w, h]
    this.size = [w, h]

    this.draw = this.draw.bind(this)
  }

  update(ctx) {
    this.draw(ctx)
  }

  draw(ctx) {
    ctx.drawImage(
      this.img,
      ...this.spriteCoordinates,
      this.pos.x(),
      this.pos.y(),
      ...this.size
    )
  }

  slide(slide) {
    this.pos.value[0] += slide
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Bar);


/***/ }),

/***/ "./src/basket.js":
/*!***********************!*\
  !*** ./src/basket.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _public_assets_flipmaster_spritesheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/assets/flipmaster_spritesheet */ "./public/assets/flipmaster_spritesheet.js");
/* eslint-disable one-var */
/* eslint-disable class-methods-use-this */



class Basket {
  constructor(game, pos, side) {
    this.type = 'basket'

    this.id = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomId"])()

    this.game = game
    this.pos = pos
    this.side = side
    this.spheres = {}

    this.img = new Image()
    this.img.src = './assets/flipmaster_spritesheet.png'

    const { x, y, w, h } = _public_assets_flipmaster_spritesheet__WEBPACK_IMPORTED_MODULE_1__["default"]['basket.png'].frame

    this.spriteCoordinates = [x, y, w, h]
    this.size = [w, h]

    this.draw = this.draw.bind(this)
  }

  update(ctx) {
    this.draw(ctx)
  }

  draw(ctx) {
    ctx.drawImage(
      this.img,
      ...this.spriteCoordinates,
      this.pos.x(),
      this.pos.y(),
      ...this.size
    )

    // ellipse for score
    let centerX, centerY, color
    if (this.side === 'left') {
      centerX = 250
      centerY = 700
      color = 'red'
    } else {
      centerX = 550
      centerY = 700
      color = 'green'
    }
    this.drawEllipse(ctx, centerX, centerY, 150, 80, color)

    // ctx.fillStyle = this.side === 'left' ? 'red' : 'green'
    ctx.font = '40px Comic Sans MS'
    ctx.fillStyle = 'white'
    ctx.textAlign = 'center'
    ctx.fillText(Object.keys(this.spheres).length, centerX, centerY + 10)
  }

  drawEllipse(ctx, centerX, centerY, width, height, color) {
    ctx.beginPath()

    ctx.moveTo(centerX, centerY - height / 2) // A1

    ctx.bezierCurveTo(
      centerX + width / 2,
      centerY - height / 2,
      centerX + width / 2,
      centerY + height / 2,
      centerX,
      centerY + height / 2
    )

    ctx.bezierCurveTo(
      centerX - width / 2,
      centerY + height / 2,
      centerX - width / 2,
      centerY - height / 2,
      centerX,
      centerY - height / 2
    )

    ctx.fillStyle = color
    ctx.fill()
    ctx.closePath()
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Basket);


/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const GRAVITY = 0.3
const INTERVAL_BETWEEN_SPHERES = 2000
const PIXEL_CHECK = 5
const HUMAN_TIME = 5000
const NUMBER_CHANGED_BY_COMPUTER = 3
const NUMBER_CHANGED_BY_HUMAN = 3
const MAXIMUM_SLIDE = 50
const SLIDE_DELTA = 0.1

/* harmony default export */ __webpack_exports__["default"] = ({
  GRAVITY,
  INTERVAL_BETWEEN_SPHERES,
  PIXEL_CHECK,
  HUMAN_TIME,
  NUMBER_CHANGED_BY_COMPUTER,
  MAXIMUM_SLIDE,
  SLIDE_DELTA,
  NUMBER_CHANGED_BY_HUMAN
});


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sphere__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sphere */ "./src/sphere.js");
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar */ "./src/bar.js");
/* harmony import */ var _basket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basket */ "./src/basket.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _game_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game_header */ "./src/game_header.js");
/* harmony import */ var _lever__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lever */ "./src/lever.js");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sound */ "./src/sound.js");
/* harmony import */ var _start_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./start_button */ "./src/start_button.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timer */ "./src/timer.js");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vector */ "./src/vector.js");
/* harmony import */ var _winner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./winner */ "./src/winner.js");
/* eslint-disable no-loop-func */












class Game {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')

    this.gameAssets = {}
    this.lowerLeft = {}
    this.lowerRight = {}
    this.upperLeft = {}
    this.upperRight = {}

    this.slide = 0
    this.slideDelta = _constants__WEBPACK_IMPORTED_MODULE_3__["default"].SLIDE_DELTA
    this.timeElapsed = 0
    this.leversChanged = 0
    this.winnerAnnounced = false

    this.currentPlayer = 'human'

    this.bounce = new _sound__WEBPACK_IMPORTED_MODULE_6__["default"]('./assets/sounds/bounce.mp3', 5, 0.3)
    this.goodBasketDrop = new _sound__WEBPACK_IMPORTED_MODULE_6__["default"]('./assets/sounds/good_basket.mp3', 1, 0.5)
    this.badBasketDrop = new _sound__WEBPACK_IMPORTED_MODULE_6__["default"]('./assets/sounds/bad_basket.mp3', 1, 0.5)
    this.flip = new _sound__WEBPACK_IMPORTED_MODULE_6__["default"]('./assets/sounds/flip.mp3')
    this.computerFlip = new _sound__WEBPACK_IMPORTED_MODULE_6__["default"]('./assets/sounds/computer_flip.mp3')

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

    this.addBaskets()
    this.buildLeftWall()
    this.buildRightWall()
    this.buildLevers()

    this.animFrame = window.requestAnimationFrame(this.update)

    this.displayGameHeader()
    this.displayStartButton()
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    const grd = this.ctx.createLinearGradient(800, 0, 800, 800)
    grd.addColorStop(0, 'black')
    grd.addColorStop(1, 'white')
    this.ctx.fillStyle = grd
    this.ctx.fillRect(0, 0, 800, 800)
  }

  displayStartButton() {
    const pos = new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](250, 300)
    this.addAsset(new _start_button__WEBPACK_IMPORTED_MODULE_7__["default"](this, pos))
  }

  displayGameHeader() {
    const pos = new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](10, 10)
    this.addAsset(new _game_header__WEBPACK_IMPORTED_MODULE_4__["default"](this, pos))
  }

  start() {
    this.gameAssets = {}
    this.lowerLeft = {}
    this.lowerRight = {}
    this.upperLeft = {}
    this.upperRight = {}

    this.slide = 0
    this.slideDelta = _constants__WEBPACK_IMPORTED_MODULE_3__["default"].SLIDE_DELTA
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
      _constants__WEBPACK_IMPORTED_MODULE_3__["default"].INTERVAL_BETWEEN_SPHERES
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

  update() {
    this.clearCanvas()
    this.slideFrame()
    Object.values(this.gameAssets).forEach(asset => asset.update(this.ctx))
    this.animFrame = window.requestAnimationFrame(this.update)
    this.checkForWin()
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
        const pos = new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](50, 200)
        this.addAsset(new _winner__WEBPACK_IMPORTED_MODULE_10__["default"](this, pos, win))
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
    const pos = new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](
      110 + this.slide + Math.random() * 600,
      -10 - Math.random() * 100
    )
    const vel = new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](0, 0)
    this.addAsset(new _sphere__WEBPACK_IMPORTED_MODULE_0__["default"](this, pos, vel))
  }

  addTimer() {
    const pos = new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](400, 730)
    this.addAsset(new _timer__WEBPACK_IMPORTED_MODULE_8__["default"](this, pos))
  }

  addBaskets() {
    this.addAsset(new _basket__WEBPACK_IMPORTED_MODULE_2__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](100, 650), 'left'))
    this.addAsset(new _basket__WEBPACK_IMPORTED_MODULE_2__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](410, 650), 'right'))
  }

  buildLeftWall() {
    this.addAsset(new _bar__WEBPACK_IMPORTED_MODULE_1__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](85, 50), 'right'))
    this.addAsset(new _bar__WEBPACK_IMPORTED_MODULE_1__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](85, 150), 'right'))
    this.addAsset(new _bar__WEBPACK_IMPORTED_MODULE_1__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](85, 250), 'right'))
    this.addAsset(new _bar__WEBPACK_IMPORTED_MODULE_1__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](85, 350), 'right'))
    this.addAsset(new _bar__WEBPACK_IMPORTED_MODULE_1__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](85, 450), 'right'))
    this.addAsset(new _bar__WEBPACK_IMPORTED_MODULE_1__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](85, 550), 'right'))
  }

  buildRightWall() {
    this.addAsset(new _bar__WEBPACK_IMPORTED_MODULE_1__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](700, 50), 'left'))
    this.addAsset(new _bar__WEBPACK_IMPORTED_MODULE_1__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](700, 150), 'left'))
    this.addAsset(new _bar__WEBPACK_IMPORTED_MODULE_1__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](700, 250), 'left'))
    this.addAsset(new _bar__WEBPACK_IMPORTED_MODULE_1__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](700, 350), 'left'))
    this.addAsset(new _bar__WEBPACK_IMPORTED_MODULE_1__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](700, 450), 'left'))
    this.addAsset(new _bar__WEBPACK_IMPORTED_MODULE_1__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](700, 550), 'left'))
  }

  buildLevers() {
    this.addAsset(new _lever__WEBPACK_IMPORTED_MODULE_5__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](100, 100), 0))
    // this.addAsset(new Lever(this, new Vector(200, 100), 0))
    this.addAsset(new _lever__WEBPACK_IMPORTED_MODULE_5__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](300, 100), 0))
    // this.addAsset(new Lever(this, new Vector(400, 100), 0))
    this.addAsset(new _lever__WEBPACK_IMPORTED_MODULE_5__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](500, 100), 0))
    // this.addAsset(new Lever(this, new Vector(600, 100), 0))
    // this.addAsset(new Lever(this, new Vector(100, 200), 0))
    this.addAsset(new _lever__WEBPACK_IMPORTED_MODULE_5__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](200, 200), 0))
    // this.addAsset(new Lever(this, new Vector(300, 200), 0))
    this.addAsset(new _lever__WEBPACK_IMPORTED_MODULE_5__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](400, 200), 0))
    // this.addAsset(new Lever(this, new Vector(500, 200), 0))
    this.addAsset(new _lever__WEBPACK_IMPORTED_MODULE_5__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](600, 200), 0))
    this.addAsset(new _lever__WEBPACK_IMPORTED_MODULE_5__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](100, 300), 0))
    this.addAsset(new _lever__WEBPACK_IMPORTED_MODULE_5__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](200, 300), 0))
    this.addAsset(new _lever__WEBPACK_IMPORTED_MODULE_5__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](300, 300), 0))
    this.addAsset(new _lever__WEBPACK_IMPORTED_MODULE_5__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](400, 300), 0))
    this.addAsset(new _lever__WEBPACK_IMPORTED_MODULE_5__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](500, 300), 0))
    this.addAsset(new _lever__WEBPACK_IMPORTED_MODULE_5__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](600, 300), 0))
    // this.addAsset(new Lever(this, new Vector(100, 400), 0))
    // this.addAsset(new Lever(this, new Vector(200, 400), 0))
    this.addAsset(new _lever__WEBPACK_IMPORTED_MODULE_5__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](300, 400), 0))
    this.addAsset(new _lever__WEBPACK_IMPORTED_MODULE_5__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](400, 400), 0))
    // this.addAsset(new Lever(this, new Vector(500, 400), 0))
    // this.addAsset(new Lever(this, new Vector(600, 400), 0))
    this.addAsset(new _lever__WEBPACK_IMPORTED_MODULE_5__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](100, 500), 0))
    this.addAsset(new _lever__WEBPACK_IMPORTED_MODULE_5__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](200, 500), 0))
    this.addAsset(new _lever__WEBPACK_IMPORTED_MODULE_5__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](300, 500), 0))
    this.addAsset(new _lever__WEBPACK_IMPORTED_MODULE_5__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](400, 500), 0))
    this.addAsset(new _lever__WEBPACK_IMPORTED_MODULE_5__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](500, 500), 0))
    this.addAsset(new _lever__WEBPACK_IMPORTED_MODULE_5__["default"](this, new _vector__WEBPACK_IMPORTED_MODULE_9__["default"](600, 500), 0))
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
        _constants__WEBPACK_IMPORTED_MODULE_3__["default"].HUMAN_TIME
      )
      this.timerStartTime = Date.now()
      this.timerInterval = window.setInterval(this.incrementTime, 100)
    }
  }

  incrementTime() {
    this.timeElapsed =
      ((Date.now() - this.timerStartTime) / 1000) %
      (_constants__WEBPACK_IMPORTED_MODULE_3__["default"].HUMAN_TIME / 1000)
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
    if (Math.abs(this.slide) >= _constants__WEBPACK_IMPORTED_MODULE_3__["default"].MAXIMUM_SLIDE) {
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

/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./src/game_header.js":
/*!****************************!*\
  !*** ./src/game_header.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _public_assets_flipmaster_spritesheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/assets/flipmaster_spritesheet */ "./public/assets/flipmaster_spritesheet.js");
/* eslint-disable one-var */
/* eslint-disable class-methods-use-this */



class GameHeader {
  constructor(game, pos) {
    this.type = 'game_header'

    this.id = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomId"])()

    this.game = game
    this.pos = pos

    this.img = new Image()
    this.img.src = './assets/flipmaster_spritesheet.png'

    const { x, y, w, h } = _public_assets_flipmaster_spritesheet__WEBPACK_IMPORTED_MODULE_1__["default"]['game_header.png'].frame

    this.spriteCoordinates = [x, y, w, h]
    this.size = [w / 2, h / 2]

    this.draw = this.draw.bind(this)
  }

  update(ctx) {
    this.draw(ctx)
  }

  draw(ctx) {
    ctx.drawImage(
      this.img,
      ...this.spriteCoordinates,
      this.pos.x(),
      this.pos.y(),
      ...this.size
    )
  }
}

/* harmony default export */ __webpack_exports__["default"] = (GameHeader);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


window.addEventListener('DOMContentLoaded', event => {
  const canvas = document.getElementById('canvas')
  const game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas)
})


/***/ }),

/***/ "./src/lever.js":
/*!**********************!*\
  !*** ./src/lever.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/vector.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _public_assets_flipmaster_spritesheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/assets/flipmaster_spritesheet */ "./public/assets/flipmaster_spritesheet.js");




class Lever {
  constructor(game, pos, rotation) {
    this.type = 'lever'

    this.id = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["randomId"])()
    this.game = game
    this.originalY = pos.value[1]
    this.pos = pos
    this.rotation = rotation

    this.diagonalAdjustment = -25

    this.img = new Image()
    this.img.src = './assets/flipmaster_spritesheet.png'
    if (rotation === 45) {
      const { x, y, w, h } = _public_assets_flipmaster_spritesheet__WEBPACK_IMPORTED_MODULE_2__["default"]['lever_2.png'].frame
      this.spriteCoordinates = [x, y, w, h]
      this.size = [w, h]
      this.pos.value[1] += this.diagonalAdjustment
      this.vector = new _vector__WEBPACK_IMPORTED_MODULE_0__["default"](1, -1)
    } else if (rotation === -45) {
      const { x, y, w, h } = _public_assets_flipmaster_spritesheet__WEBPACK_IMPORTED_MODULE_2__["default"]['lever_neg45.png'].frame
      this.spriteCoordinates = [x, y, w, h]
      this.size = [w, h]
      this.pos.value[1] += this.diagonalAdjustment
      this.vector = new _vector__WEBPACK_IMPORTED_MODULE_0__["default"](1, 1)
    } else {
      const { x, y, w, h } = _public_assets_flipmaster_spritesheet__WEBPACK_IMPORTED_MODULE_2__["default"]['lever_2.png'].frame
      this.spriteCoordinates = [x, y, w, h]
      this.size = [w, h]
      this.vector = new _vector__WEBPACK_IMPORTED_MODULE_0__["default"](1, 0)
    }

    this.draw = this.draw.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  update(ctx) {
    if (this.game.currentPlayer !== 'computer') {
      window.addEventListener('click', this.handleClick)
    } else {
      window.removeEventListener('click', this.handleClick)
    }
    this.draw(ctx)
  }

  draw(ctx) {
    ctx.drawImage(
      this.img,
      ...this.spriteCoordinates,
      this.pos.x(),
      this.pos.y(),
      ...this.size
    )
  }

  handleClick(e) {
    e.stopPropagation()
    const bbox_ul_x = this.pos.x()
    const bbox_ul_y = this.pos.y()
    const bbox_lr_x = bbox_ul_x + this.size[0]
    const bbox_lr_y = bbox_ul_y + this.size[1]

    const rect = this.game.canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    if (bbox_ul_x <= x && bbox_lr_x >= x && bbox_ul_y <= y && bbox_lr_y >= y) {
      // this lever

      this.game.leversChanged += 1

      if (this.rotation !== 0) {
        const { x, y, w, h } = _public_assets_flipmaster_spritesheet__WEBPACK_IMPORTED_MODULE_2__["default"]['lever_2.png'].frame
        this.spriteCoordinates = [x, y, w, h]
        this.size = [w, h]
        this.pos.value[1] = this.originalY
        this.vector = new _vector__WEBPACK_IMPORTED_MODULE_0__["default"](1, 0)
        this.rotation = 0
      } else if (x > bbox_ul_x + this.size[0] / 2) {
        const { x, y, w, h } = _public_assets_flipmaster_spritesheet__WEBPACK_IMPORTED_MODULE_2__["default"]['lever_neg45.png'].frame
        this.spriteCoordinates = [x, y, w, h]
        this.size = [w, h]
        this.pos.value[1] = this.originalY + this.diagonalAdjustment
        this.vector = new _vector__WEBPACK_IMPORTED_MODULE_0__["default"](1, 1)
        this.rotation = -45
      } else {
        const { x, y, w, h } = _public_assets_flipmaster_spritesheet__WEBPACK_IMPORTED_MODULE_2__["default"]['lever_45.png'].frame
        this.spriteCoordinates = [x, y, w, h]
        this.size = [w, h]
        this.pos.value[1] = this.originalY + this.diagonalAdjustment
        this.vector = new _vector__WEBPACK_IMPORTED_MODULE_0__["default"](1, -1)
        this.rotation = 45
      }

      this.game.flip.play()
    }
  }

  slide(slide) {
    this.pos.value[0] += slide
  }

  flipTo45() {
    const { x, y, w, h } = _public_assets_flipmaster_spritesheet__WEBPACK_IMPORTED_MODULE_2__["default"]['lever_45.png'].frame
    this.spriteCoordinates = [x, y, w, h]
    this.size = [w, h]
    this.pos.value[1] = this.originalY + this.diagonalAdjustment
    this.vector = new _vector__WEBPACK_IMPORTED_MODULE_0__["default"](1, -1)
    this.rotation = 45
    this.game.computerFlip.play()
  }

  flipToFlat() {
    const { x, y, w, h } = _public_assets_flipmaster_spritesheet__WEBPACK_IMPORTED_MODULE_2__["default"]['lever_2.png'].frame
    this.spriteCoordinates = [x, y, w, h]
    this.size = [w, h]
    this.pos.value[1] = this.originalY
    this.rotation = 0
    this.vector = new _vector__WEBPACK_IMPORTED_MODULE_0__["default"](1, 0)
    this.game.computerFlip.play()
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Lever);


/***/ }),

/***/ "./src/sound.js":
/*!**********************!*\
  !*** ./src/sound.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Sound {
  constructor(src, max = 1, vol = 1) {
    this.max = max
    this.streamNum = 0
    this.streams = []
    for (let index = 0; index < max; index++) {
      const sound = new Audio(src)
      sound.volume = vol
      this.streams.push(sound)
    }
  }

  play() {
    this.streamNum = (this.streamNum + 1) % this.max
    this.streams[this.streamNum].play()
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Sound);


/***/ }),

/***/ "./src/sphere.js":
/*!***********************!*\
  !*** ./src/sphere.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sound */ "./src/sound.js");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector */ "./src/vector.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _public_assets_flipmaster_spritesheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/flipmaster_spritesheet */ "./public/assets/flipmaster_spritesheet.js");
/* eslint-disable operator-assignment */






class Sphere {
  constructor(game, pos, vel) {
    this.type = 'sphere'

    this.id = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["randomId"])()

    this.quadrant = null
    this.game = game
    this.pos = pos
    this.vel = vel
    this.gravity = new _vector__WEBPACK_IMPORTED_MODULE_2__["default"](0, _constants__WEBPACK_IMPORTED_MODULE_0__["default"].GRAVITY)
    this.stuck = false

    this.bounceCheck = null

    this.img = new Image()
    this.img.src = './assets/flipmaster_spritesheet.png'

    const { x, y, w, h } = _public_assets_flipmaster_spritesheet__WEBPACK_IMPORTED_MODULE_4__["default"]['sphere.png'].frame
    this.spriteCoordinates = [x, y, w, h]
    this.size = [w, h]

    this.tick = this.tick.bind(this)
    this.draw = this.draw.bind(this)
    this.updateQuadrant = this.updateQuadrant.bind(this)
    this.updateVectors = this.updateVectors.bind(this)
    this.removeFromQuadrant = this.removeFromQuadrant.bind(this)
    this.assessCollisionProspects = this.assessCollisionProspects.bind(this)

    this.updateQuadrant()
  }

  update(ctx) {
    this.tick(ctx)
    this.draw(ctx)
  }

  draw(ctx) {
    ctx.drawImage(
      this.img,
      ...this.spriteCoordinates,
      this.pos.x(),
      this.pos.y(),
      ...this.size
    )
  }

  tick() {
    this.updateVectors()
    this.checkForCollisions()
    this.cleanup()
  }

  removeFromQuadrant() {
    if (!this.quadrant) return
    delete this.quadrant[this.id]
  }

  updateQuadrant() {
    if (this.pos.x() <= 400 && this.pos.y() >= 400) {
      this.quadrant = this.game.lowerLeft
    } else if (this.pos.x() > 400 && this.pos.y() >= 400) {
      this.quadrant = this.game.lowerRight
    } else if (this.pos.x() <= 400 && this.pos.y() < 400) {
      this.quadrant = this.game.upperLeft
    } else {
      this.quadrant = this.game.upperRight
    }
    this.quadrant[this.id] = this
  }

  updateVectors() {
    if (this.force) {
      this.vel = this.vel.add(this.force)
      this.force = null
    }
    this.vel = this.vel.add(this.gravity)
    this.pos = this.pos.add(this.vel)
  }

  fakeMove() {
    const fakeData = {
      pos: new _vector__WEBPACK_IMPORTED_MODULE_2__["default"](this.pos.x(), this.pos.y()),
      vel: new _vector__WEBPACK_IMPORTED_MODULE_2__["default"](this.vel.x(), this.vel.y())
    }

    if (this.force) {
      fakeData.vel = fakeData.vel.add(this.force)
    }
    fakeData.vel = fakeData.vel.add(this.gravity)
    fakeData.pos = fakeData.pos.add(fakeData.vel)

    return fakeData
  }

  applyForce(force) {
    this.force = force
  }

  cleanup() {
    if (this.outOfBounds()) {
      this.game.delete(this)
    }
  }

  outOfBounds() {
    return (
      this.pos.x() < 0 ||
      this.pos.x() > 800 ||
      this.pos.y() < -1000 ||
      this.pos.y() > 1000
    )
  }

  checkForCollisions() {
    Object.values(this.game.gameAssets).forEach(asset => {
      if (asset.id !== this.id) {
        this.assessCollisionProspects(this, asset)
      }
    })
  }

  assessCollisionProspects(sphere, b) {
    if (['timer', 'start_btn', 'game_header', 'winner'].indexOf(b.type) >= 0) {
      return
    }

    // const nextPos = this.fakeMove()

    const sphere_ul_x = sphere.pos.x()
    const sphere_ul_y = sphere.pos.y()
    const sphere_lr_x = sphere_ul_x + sphere.size[0]
    const sphere_lr_y = sphere_ul_y + sphere.size[1]

    const b_ul_x = b.pos.x()
    const b_ul_y = b.pos.y()
    const b_lr_x = b_ul_x + b.size[0]
    const b_lr_y = b_ul_y + b.size[1]

    const separate =
      sphere_lr_x < b_ul_x ||
      b_lr_x < sphere_ul_x ||
      sphere_lr_y < b_ul_y ||
      b_lr_y < sphere_ul_y

    if (separate && this.bounceCheck === b.id) {
      this.bounceCheck = null
    }

    if (separate) return

    // time to look at pixel overlap
    const overlap_ul_x = sphere_ul_x < b_ul_x ? b_ul_x : sphere_ul_x
    const overlap_ul_y = sphere_ul_y < b_ul_y ? b_ul_y : sphere_ul_y
    const overlap_lr_x = sphere_lr_x < b_lr_x ? sphere_lr_x : b_lr_x
    const overlap_lr_y = sphere_lr_y < b_lr_y ? sphere_lr_y : b_lr_y

    // less than pixel overlap
    if (overlap_lr_x - overlap_ul_x < 1 || overlap_lr_y - overlap_ul_y < 1)
      return

    // create a new canvas
    const newCanvas = document.createElement('canvas')
    newCanvas.width = 800
    newCanvas.height = 800

    const cloneContext = newCanvas.getContext('2d')
    cloneContext.clearRect(
      overlap_ul_x,
      overlap_ul_y,
      overlap_lr_x - overlap_ul_x,
      overlap_lr_y - overlap_ul_y
    )
    cloneContext.drawImage(
      this.img,
      ...this.spriteCoordinates,
      sphere.pos.x(),
      sphere.pos.y(),
      ...this.size
    )

    const sphereImageData = cloneContext.getImageData(
      overlap_ul_x,
      overlap_ul_y,
      overlap_lr_x - overlap_ul_x,
      overlap_lr_y - overlap_ul_y
    )

    cloneContext.clearRect(
      overlap_ul_x,
      overlap_ul_y,
      overlap_lr_x - overlap_ul_x,
      overlap_lr_y - overlap_ul_y
    )

    cloneContext.drawImage(
      b.img,
      ...b.spriteCoordinates,
      b.pos.x(),
      b.pos.y(),
      ...b.size
    )

    const bImageData = cloneContext.getImageData(
      overlap_ul_x,
      overlap_ul_y,
      overlap_lr_x - overlap_ul_x,
      overlap_lr_y - overlap_ul_y
    )

    const resolution = 4 * _constants__WEBPACK_IMPORTED_MODULE_0__["default"].PIXEL_CHECK
    for (
      let index = 0;
      index < sphereImageData.data.length;
      index += resolution
    ) {
      if (sphereImageData.data[index + 3] && bImageData.data[index + 3]) {
        if (b.type === 'sphere') {
          b.vel = b.vel.flip()
          sphere.vel = sphere.vel.flip()
          return
        }

        if (b.type !== 'basket') {
          if (b.type === 'lever') sphere.vel = sphere.vel.multiply(0.93)

          const surfaceNormal =
            b.type !== 'sphere' ? b.vector.normal() : b.vel.normal()
          const dotProduct = sphere.vel.dotProduct(surfaceNormal)
          const bounceVector = surfaceNormal.multiply(-2 * dotProduct)
          sphere.vel = sphere.vel.add(bounceVector)

          if (!this.bounceCheck || this.bounceCheck !== b.id) {
            this.bounceCheck = b.id
            this.game.bounce.play()
          }

          // on level surface and still going down
          if (
            b.type === 'lever' &&
            b.rotation === 0 &&
            sphere.pos.x() > b.pos.x() &&
            sphere.pos.x() < b.pos.x() + b.size[0] &&
            sphere.pos.y() > b.pos.y() - 10
          ) {
            sphere.vel = new _vector__WEBPACK_IMPORTED_MODULE_2__["default"](sphere.vel.value[0], 0)
            sphere.stuck = true
          } else {
            sphere.stuck = false
          }

          break
        } else {
          if (b.side === 'left') {
            this.game.badBasketDrop.play()
          } else {
            this.game.goodBasketDrop.play()
          }
          b.spheres[sphere.id] = sphere.id
          sphere.game.delete(sphere)
        }
      }
    }
  }

  slide(slide) {
    if (this.stuck) this.pos.value[0] += slide
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Sphere);

// Playing cards in plastic container tilt, cards movement inside 3


/***/ }),

/***/ "./src/start_button.js":
/*!*****************************!*\
  !*** ./src/start_button.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/vector.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _public_assets_flipmaster_spritesheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/assets/flipmaster_spritesheet */ "./public/assets/flipmaster_spritesheet.js");




class StartButton {
  constructor(game, pos) {
    this.type = 'start_btn'

    this.id = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["randomId"])()
    this.game = game
    this.pos = pos

    this.img = new Image()
    this.img.src = './assets/flipmaster_spritesheet.png'
    const { x, y, w, h } = _public_assets_flipmaster_spritesheet__WEBPACK_IMPORTED_MODULE_2__["default"]['start.png'].frame
    this.spriteCoordinates = [x, y, w, h]
    this.size = [w, h]

    this.draw = this.draw.bind(this)
    this.handleClick = this.handleClick.bind(this)
    window.addEventListener('click', this.handleClick)
  }

  update(ctx) {
    this.draw(ctx)
  }

  draw(ctx) {
    ctx.drawImage(
      this.img,
      ...this.spriteCoordinates,
      this.pos.x(),
      this.pos.y(),
      ...this.size
    )
  }

  handleClick(e) {
    e.stopPropagation()
    const bbox_ul_x = this.pos.x()
    const bbox_ul_y = this.pos.y()
    const bbox_lr_x = bbox_ul_x + this.size[0]
    const bbox_lr_y = bbox_ul_y + this.size[1]

    const rect = this.game.canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    if (bbox_ul_x <= x && bbox_lr_x >= x && bbox_ul_y <= y && bbox_lr_y >= y) {
      window.removeEventListener('click', this.handleClick)
      this.game.start()
    }
  }

  slide(slide) {
    //
  }
}

/* harmony default export */ __webpack_exports__["default"] = (StartButton);


/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vector */ "./src/vector.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.js");




class Timer {
  constructor(game, pos) {
    this.type = 'timer'

    this.id = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["randomId"])()

    this.game = game
    this.pos = pos

    this.draw = this.draw.bind(this)
  }

  update(ctx) {
    this.draw(ctx)
  }

  draw(ctx) {
    const x = this.pos.x()
    const y = this.pos.y()
    ctx.fillStyle = 'rebeccapurple'
    ctx.lineWidth = 1
    ctx.strokeStyle = '#333'
    ctx.beginPath()
    const endAngle = (2 * Math.PI * 3) / 4
    const topAngle = (-1 * Math.PI) / 2
    const slope = (endAngle - topAngle) / (_constants__WEBPACK_IMPORTED_MODULE_0__["default"].HUMAN_TIME / 1000)
    const startAngle = slope * this.game.timeElapsed + topAngle

    ctx.moveTo(x, y)
    ctx.arc(x, y, 40, startAngle, endAngle, false)
    ctx.lineTo(x, y)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
  }

  slide() {
    // nothing
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Timer);


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: incrementVector, randomId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementVector", function() { return incrementVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomId", function() { return randomId; });
const incrementVector = (vector, increment) =>
  vector.map((v, i) => v + increment[i])

const randomId = () => {
  let id = ''
  const letters = 'abcdefghijklmnopqrstuvwzyz'
  for (let index = 0; index < 30; index++) {
    const idx = Math.floor(Math.random() * 26)
    id += letters[idx]
  }
  return id
}


/***/ }),

/***/ "./src/vector.js":
/*!***********************!*\
  !*** ./src/vector.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Vector {
  constructor(x, y) {
    this.value = [x, y]
  }

  normal() {
    const [a, b] = this.value
    if (a === 0) return new Vector(b, a)
    const demom = Math.sqrt((b / a) ** 2 + 1)
    const x = (-1 * b) / a / demom
    const y = 1 / demom
    return new Vector(x, y)
  }

  x() {
    return this.value[0]
  }

  y() {
    return this.value[1]
  }

  mag() {
    return Math.sqrt(this.value[0] ** 2 + this.value[1] ** 2)
  }

  dotProduct(vector) {
    const [a, b] = this.value
    const [x, y] = vector.value
    return a * x + b * y
  }

  add(vector) {
    const [a, b] = this.value
    const [x, y] = vector.value
    return new Vector(a + x, b + y)
  }

  multiply(scalar) {
    const [a, b] = this.value
    return new Vector(a * scalar, b * scalar)
  }

  flip() {
    const [a, b] = this.value
    return new Vector(-a, -b)
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Vector);


/***/ }),

/***/ "./src/winner.js":
/*!***********************!*\
  !*** ./src/winner.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _public_assets_flipmaster_spritesheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/assets/flipmaster_spritesheet */ "./public/assets/flipmaster_spritesheet.js");
/* eslint-disable one-var */
/* eslint-disable class-methods-use-this */



class Winner {
  constructor(game, pos, win) {
    this.type = 'winner'

    this.id = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomId"])()

    this.game = game
    this.pos = pos
    this.win = win

    this.img = new Image()
    this.img.src = './assets/flipmaster_spritesheet.png'

    if (this.win) {
      const { x, y, w, h } = _public_assets_flipmaster_spritesheet__WEBPACK_IMPORTED_MODULE_1__["default"]['you_won.jpg'].frame
      this.spriteCoordinates = [x, y, w, h]
      this.size = [w, h]
    } else {
      const { x, y, w, h } = _public_assets_flipmaster_spritesheet__WEBPACK_IMPORTED_MODULE_1__["default"]['you_lost.jpg'].frame
      this.spriteCoordinates = [x, y, w, h]
      this.size = [w, h]
    }

    this.handleClick = this.handleClick.bind(this)

    window.addEventListener('click', this.handleClick)

    this.draw = this.draw.bind(this)
  }

  update(ctx) {
    this.draw(ctx)
  }

  draw(ctx) {
    ctx.drawImage(
      this.img,
      ...this.spriteCoordinates,
      this.pos.x(),
      this.pos.y(),
      ...this.size
    )
  }

  handleClick(e) {
    e.stopPropagation()

    console.log(e.clientX)

    const bbox_ul_x = this.pos.x()
    const bbox_ul_y = this.pos.y()
    const bbox_lr_x = bbox_ul_x + this.size[0]
    const bbox_lr_y = bbox_ul_y + this.size[1]

    const rect = this.game.canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    if (bbox_ul_x <= x && bbox_lr_x >= x && bbox_ul_y <= y && bbox_lr_y >= y) {
      window.removeEventListener('click', this.handleClick)
      this.game.start()
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Winner);


/***/ })

/******/ });
//# sourceMappingURL=main.js.map