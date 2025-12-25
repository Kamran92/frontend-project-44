#!/usr/bin/env node

import { runGame } from './src/index.js'
import { playBrainPrime } from './src/games/playBrainPrime.js'

runGame({
  gameDescription: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateRound: playBrainPrime,
})
