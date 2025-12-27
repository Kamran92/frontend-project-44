export const getRandomInRange = ({ min = 1, max = 100 }) => {
  const range = max - min + 1
  const randomArray = new Uint32Array(1)
  crypto.getRandomValues(randomArray)

  return min + (randomArray[0] % range)
}
