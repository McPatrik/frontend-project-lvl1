#!/usr/bin/env node
import { logicGame } from '../src/index.js';
import { task, answerS } from '../games/brain-prime.js';

logicGame(task, answerS);
