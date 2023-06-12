#!/usr/bin/env node

import gameEven from '../src/games/index-even.js';
import username from '../src/getName.js';
import { startGames } from '../src/communicateWithUser.js';

startGames();
const name = username();
gameEven(name);
