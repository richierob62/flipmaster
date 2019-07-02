import Ball from './sphere'
import Game from './game'
import Lever from './lever'

window.addEventListener('DOMContentLoaded', event => {
  const canvas = document.getElementById('canvas')
  const game = new Game(canvas)
})
