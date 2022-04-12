import readlineSync from 'readline-sync';

export const askForAName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');

  return answer;
};
