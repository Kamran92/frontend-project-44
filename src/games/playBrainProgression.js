import { getRandomInRange } from '../helpers/getRandomInRange.js'

const generateProgression = ({ start, step, length }) => {
  const progression = []

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }

  return progression
}

export const playBrainProgression = () => {
  const length = 10
  const start = getRandomInRange({ min: 1, max: 50 })
  const step = getRandomInRange({ min: 1, max: 10 })
  const hiddenIndex = getRandomInRange({ min: 0, max: length - 1 })

  const progression = generateProgression({ start, step, length })
  const correctAnswer = progression[hiddenIndex]

  const progressionWithHidden = progression
    .map((num, index) => (index === hiddenIndex ? '..' : num))
    .join(' ')

  return {
    question: progressionWithHidden,
    correctAnswer,
  }
}
