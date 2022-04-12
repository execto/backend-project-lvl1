#!/usr/bin/env node

import { askForAName } from '../src/cli/cli.js';

console.log('Welcome to the Brain Games!');

const name = askForAName();
console.log(`Hello, ${name}!`);
