const MAX_RANDOM_NUMBER = 100;

export const makeRandomIntegerNumber = (firstNum, secondNum) => {
  if (!secondNum) {
    const max = firstNum || MAX_RANDOM_NUMBER;
    return Math.floor(Math.random() * max);
  }

  const minRandomNumber = firstNum;
  const maxRandomNumber = secondNum;
  return Math.floor(Math.random() * (maxRandomNumber - minRandomNumber + 1)) + minRandomNumber;
};

export const makeWrongAnswerMessage = (answer, rightAnswer) => `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
