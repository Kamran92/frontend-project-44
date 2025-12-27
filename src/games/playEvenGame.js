import { getRandomInRange } from '../helpers/getRandomInRange.js'

export const playEvenGame = () => {
  const randomNumber = getRandomInRange()
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no'

  return { question: randomNumber, correctAnswer }
}
