#!/usr/bin/env node
import gamePrime from '../src/games/index-prime.js';
import getName from '../src/getName.js';
import { startGames } from '../src/communicateWithUser.js';

startGames();
const name = getName();
gamePrime(name);
