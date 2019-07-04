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

export default Vector
