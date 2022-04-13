import { askForAName, getAnswer } from './cli/cli.js';
import { makeWrongAnswerMessage } from './utils.js';

const MAX_QUESTIONS_COUNT = 3;

const startGame = (game) => {
  const {
    helloMessage, setupQuestion, isAnswerCorrect,
  } = game;

  console.log('Welcome to the Brain Games!');

  const gamerName = askForAName();
  console.log(`Hello, ${gamerName}!`);

  console.log(helloMessage);

  let isGameWon = true;
  let allowNextQuestion = true;
  let questionsCount = 0;

  while (allowNextQuestion) {
    questionsCount += 1;
    const { question, rightAnswer } = setupQuestion();
    console.log(`Question: ${question}`);

    const answer = getAnswer();
    const isCorrect = isAnswerCorrect(answer, rightAnswer);
    if (!isCorrect) {
      isGameWon = false;
      allowNextQuestion = false;
      console.log(makeWrongAnswerMessage(answer, rightAnswer));
    } else {
      console.log('Correct!');
      allowNextQuestion = questionsCount < MAX_QUESTIONS_COUNT;
    }
  }

  const gameoverMessage = isGameWon ? `Congratulations, ${gamerName}!` : `Let's try again, ${gamerName}!`;
  console.log(gameoverMessage);
};

export default startGame;
