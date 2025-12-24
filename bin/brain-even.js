#!/usr/bin/env node

import { runGame } from './src/index.js'
import { playEvenGame } from './src/games/playEvenGame.js'

runGame({
  gameDescription: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateRound: playEvenGame,
})
