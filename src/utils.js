import { MAX_RANDOM_NUMBER } from './constants.js';

export const makeRandomIntegerNumber = (maxNumber = MAX_RANDOM_NUMBER) => (
  Math.floor(Math.random() * maxNumber)
);
