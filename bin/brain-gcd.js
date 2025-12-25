#!/usr/bin/env node

import { runGame } from './src/index.js'
import { playBrainGcd } from './src/games/playBrainGcd.js'

runGame({
  gameDescription: 'Find the greatest common divisor of given numbers.',
  generateRound: playBrainGcd,
})
