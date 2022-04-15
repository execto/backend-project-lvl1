import { makeRandomIntegerNumber } from '../../utils.js';
import { ANSWER } from './constants.js';
import { isPrime } from './utils.js';

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
