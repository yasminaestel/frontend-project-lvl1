#!/usr/bin/env node
import gameGcd from '../src/games/index-gcd.js';
import username from '../src/getName.js';
import { startGames } from '../src/communicateWithUser.js';

startGames();
const name = username();
gameGcd(name);
