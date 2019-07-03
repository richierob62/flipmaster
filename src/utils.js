export const incrementVector = (vector, increment) =>
  vector.map((v, i) => v + increment[i])

export const randomId = () => {
  let id = ''
  const letters = 'abcdefghijklmnopqrstuvwzyz'
  for (let index = 0; index < 30; index++) {
    const idx = Math.floor(Math.random() * 26)
    id += letters[idx]
  }
  return id
}
