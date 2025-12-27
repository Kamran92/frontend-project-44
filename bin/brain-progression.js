#!/usr/bin/env node

import { runGame } from '../src/index.js'
import { playBrainProgression } from '../src/games/playBrainProgression.js'

runGame({
  gameDescription: 'What number is missing in the progression?',
  generateRound: playBrainProgression,
})
