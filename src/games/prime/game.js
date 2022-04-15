import { makeRandomIntegerNumber } from '../../utils.js';
import { isPrime } from './utils.js';

export const ANSWER = {
  yes: 'yes',
  no: 'no',
};

const game = {
  helloMessage: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  setupQuestion() {
    const number = makeRandomIntegerNumber();
    const rightAnswer = isPrime(number) ? ANSWER.yes : ANSWER.no;

    return {
      question: number,
      rightAnswer,
    };
  },
  isAnswerCorrect(answer, rightAnswer) {
    return answer.toLowerCase().trim() === rightAnswer;
  },
};

export default game;
