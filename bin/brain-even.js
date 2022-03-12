#!/usr/bin/env node

import askForAName from '../src/cli/cli.js';
import { getAnswer } from '../src/cli/cli-even.js';
import { getWrongAnswerMessage, isAnswerCorrect, makeRandomIntegerNumber } from '../src/utils/even-game.js';

const MAX_QUESTIONS_COUNT = 3;

console.log('Welcome to the Brain Games!');

const gamerName = askForAName();
console.log(`Hello, ${gamerName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let isGameWon = true;
let allowNextQuestion = true;
let questionsCount = 0;

while (allowNextQuestion) {
  questionsCount += 1;
  const number = makeRandomIntegerNumber();
  console.log(`Question: ${number}`);

  const answer = getAnswer();
  const isCorrect = isAnswerCorrect(answer, number);
  if (!isCorrect) {
    isGameWon = false;
    console.log(getWrongAnswerMessage(answer));
    break;
  }
  console.log('Correct!');
  allowNextQuestion = questionsCount < MAX_QUESTIONS_COUNT;
}

if (isGameWon) {
  console.log(`Congratulations, ${gamerName}!`);
} else {
  console.log(`Let's try again, ${gamerName}!`);
}
