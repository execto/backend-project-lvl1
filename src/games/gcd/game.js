import { makeRandomIntegerNumber } from '../../utils.js';
import findGcd from './utils.js';

const game = {
  helloMessage: 'Find the greatest common divisor of given numbers.',
  setupQuestion() {
    const firstNumber = makeRandomIntegerNumber();
    const secondNumber = makeRandomIntegerNumber();
    const rightAnswer = findGcd(firstNumber, secondNumber);

    return {
      question: `${firstNumber} ${secondNumber}`,
      rightAnswer,
    };
  },
  isAnswerCorrect(answer, rightAnswer) {
    const gamerAnswer = Number(answer.replace(/\s/g, ''));

    return gamerAnswer === rightAnswer;
  },
};

export default game;
