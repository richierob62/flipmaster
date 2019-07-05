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

export default Sound
