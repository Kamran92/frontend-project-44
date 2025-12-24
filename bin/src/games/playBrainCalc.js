import { getRandomInRange } from '../index.js'

export const playBrainCalc = () => {
  const operators = ['+', '-', '*']

  const num1 = getRandomInRange({ min: 1, max: 10 })
  const num2 = getRandomInRange({ min: 1, max: 10 })
  const operator = operators[getRandomInRange({ min: 0, max: operators.length - 1 })]

  let correctAnswer

  switch (operator) {
    case '+':
      correctAnswer = num1 + num2
      break
    case '-':
      correctAnswer = num1 - num2
      break
    case '*':
      correctAnswer = num1 * num2
      break
    default:
      correctAnswer = 0
  }

  return {
    question: `${num1} ${operator} ${num2}`,
    correctAnswer,
  }
}
