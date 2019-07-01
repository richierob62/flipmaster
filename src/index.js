window.addEventListener('DOMContentLoaded', event => {
  const canvas = document.getElementById('canvas')
  const c = canvas.getContext('2d')
  c.fillStyle = 'red'
  c.fillRect(100, 100, 400, 300)
})
