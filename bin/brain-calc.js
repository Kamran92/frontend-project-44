#!/usr/bin/env node

import { runGame } from './src/index.js'
import { playBrainCalc } from './src/games/playBrainCalc.js'

runGame({
  gameDescription: 'What is the result of the expression?',
  generateRound: playBrainCalc,
})
