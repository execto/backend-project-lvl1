import { Answer } from '../types/even-game.js';

const MAX_RANDOM_NUMBER = 100;

const isEven = (number) => number % 2 === 0;

export const makeRandomIntegerNumber = () => Math.floor(Math.random() * MAX_RANDOM_NUMBER);

export const isAnswerCorrect = (answer, number) => {
  const isEvenNumber = isEven(number);

  return (isEvenNumber && answer === Answer.yes) || (!isEvenNumber && answer === Answer.no);
};

export const getWrongAnswerMessage = (answer) => {
  const correctAnswer = answer === Answer.no ? Answer.yes : Answer.no;

  return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
};
