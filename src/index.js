import readlineSync from 'readline-sync'
import { getPlayerName } from './helpers/getPlayerName.js'

const checkAnswer = ({ correctAnswer, playerName }) => {
  const userAnswer = readlineSync.question('Your answer: ')

  if (userAnswer !== String(correctAnswer)) {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    )
    console.log(`Let's try again, ${playerName}!`)

    return false
  }

  console.log('Correct!')

  return true
}

export const runGame = ({
  gameDescription,
  generateRound,
  roundsCount = 3,
}) => {
  const playerName = getPlayerName()

  console.log(gameDescription)

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = generateRound()

    console.log(`Question: ${question}`)

    const isCorrect = checkAnswer({ correctAnswer, playerName })

    if (!isCorrect) return
  }

  console.log(`Congratulations, ${playerName}!`)
}
