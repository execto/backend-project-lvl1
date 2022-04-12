import { ANSWER } from './constants.js';
import { isEven } from './utils.js';
import { makeRandomIntegerNumber } from '../../utils.js';

const game = {
  helloMessage: 'Answer "yes" if the number is even, otherwise answer "no".',
  setupQuestion() {
    const number = makeRandomIntegerNumber();
    const rightAnswer = isEven(number) ? ANSWER.yes : ANSWER.no;

    return {
      question: number,
      rightAnswer,
    };
  },
  makeWrongAnswerMessage(answer, correctAnswer) {
    return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
  },
  isAnswerCorrect(answer, rightAnswer) {
    return answer.toLowerCase().trim() === rightAnswer;
  },
};

export default game;
