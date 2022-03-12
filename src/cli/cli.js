import readlineSync from 'readline-sync';

const askForAName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export default askForAName;
