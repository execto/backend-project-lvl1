import readlineSync from 'readline-sync';

export const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');

  return answer.toLowerCase();
};
