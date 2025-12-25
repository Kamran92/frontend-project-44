import { getRandomInRange } from '../index.js'

const getGcd = ({ num1, num2 }) => {
  while (num2) {
    const temp = num2
    num2 = num1 % num2
    num1 = temp
  }

  return num1
}

export const playBrainGcd = () => {
  const num1 = getRandomInRange({ min: 1, max: 100 })
  const num2 = getRandomInRange({ min: 1, max: 100 })

  const correctAnswer = getGcd({ num1, num2 })

  return {
    question: `${num1} ${num2}`,
    correctAnswer,
  }
}
