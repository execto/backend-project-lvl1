import { MAX_RANDOM_NUMBER } from './constants.js';

export const makeRandomIntegerNumber = (...args) => {
  if (args.length <= 1) {
    const maxNumber = args[0] ? args[0] : MAX_RANDOM_NUMBER;
    return Math.floor(Math.random() * maxNumber);
  }

  const [minNumber, maxNumber] = args;
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

export const makeWrongAnswerMessage = (answer, rightAnswer) => `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
