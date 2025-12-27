import readlineSync from 'readline-sync'

export const getPlayerName = () => {
  console.log('Welcome to the Brain Games!')

  const userName = readlineSync.question('May I have your name? ')
  const displayName = userName || 'Player'

  console.log(`Hello, ${displayName}!`)

  return displayName
}
