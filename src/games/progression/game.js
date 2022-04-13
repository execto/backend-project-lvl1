import { getRandomNumberFromProgression, makeProgression, makeProgressionForQuestion } from './utils.js';

const game = {
  helloMessage: 'What number is missing in the progression?',
  setupQuestion() {
    const { missingNumber, progressionForQuestion } = game.setupProgression();

    return {
      question: progressionForQuestion,
      rightAnswer: missingNumber,
    };
  },
  setupProgression() {
    const progression = makeProgression();
    const missingNumber = getRandomNumberFromProgression(progression);
    const progressionForQuestion = makeProgressionForQuestion(progression, missingNumber);

    return {
      missingNumber,
      progressionForQuestion,
    };
  },
  isAnswerCorrect(answer, rightAnswer) {
    const gamerAnswer = Number(answer.replace(/\s/g, ''));

    return gamerAnswer === rightAnswer;
  },
};

export default game;
