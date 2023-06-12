#!/usr/bin/env node
import gameCalc from '../src/games/index-calc.js';
import username from '../src/getName.js';
import { startGames } from '../src/communicateWithUser.js';

startGames();
const name = username();
gameCalc(name);
