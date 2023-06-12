#!/usr/bin/env node
import gameProgression from '../src/games/index-progression.js';
import getName from '../src/getName.js';
import { startGames } from '../src/communicateWithUser.js';

startGames();
const name = getName();
gameProgression(name);
