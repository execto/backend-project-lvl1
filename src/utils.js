import { MAX_RANDOM_NUMBER } from './constants.js';

export const makeRandomIntegerNumber = (maxNumber = MAX_RANDOM_NUMBER) => (
  Math.floor(Math.random() * maxNumber)
);

export const makeWrongAnswerMessage = (answer, rightAnswer) => `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
