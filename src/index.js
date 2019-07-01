import Constants from './constants'

window.addEventListener('DOMContentLoaded', event => {
  const canvas = document.getElementById('canvas')
  const c = canvas.getContext('2d')
  c.fillStyle = 'white'
  c.fillRect(0, 0, Constants.GAME_WIDTH, Constants.GAME_HEIGHT)
})
