#!/usr/bin/env node
import gameEven from '../src/games/index-even.js';
import getName from '../src/getName.js';
import { startGames } from '../src/communicateWithUser.js';

startGames();
const name = getName();
gameEven(name);
