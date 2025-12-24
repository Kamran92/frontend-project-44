import { getRandomInRange } from '../index.js'

export const playEvenGame = () => {
  const randomNumber = getRandomInRange({ min: 1, max: 100 })
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no'

  return { question: randomNumber, correctAnswer }
}
