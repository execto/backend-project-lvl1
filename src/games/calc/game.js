import { makeRandomIntegerNumber } from '../../utils.js';
import { MATH_FUNCS, OPERATORS } from './constants.js';

const game = {
  helloMessage: 'What is the result of the expression?',
  setupQuestion() {
    const leftOperand = makeRandomIntegerNumber();
    const rightOperand = makeRandomIntegerNumber();
    const operator = OPERATORS[makeRandomIntegerNumber(3)];
    const mathFunc = MATH_FUNCS[operator];
    const rightAnswer = mathFunc(leftOperand, rightOperand);

    return {
      question: `${leftOperand} ${operator} ${rightOperand}`,
      rightAnswer,
    };
  },
  isAnswerCorrect(answer, rightAnswer) {
    const gamerAnswer = Number(answer.replace(/\s/g, ''));

    return gamerAnswer === rightAnswer;
  },
};

export default game;
