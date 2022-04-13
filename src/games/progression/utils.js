import { makeRandomIntegerNumber } from '../../utils.js';

export const makeProgression = () => {
  const progressionStep = makeRandomIntegerNumber(2, 10);
  const progressionLength = makeRandomIntegerNumber(5, 10);
  const startNumber = makeRandomIntegerNumber();

  const progression = [];
  for (let i = 0, step = startNumber; i < progressionLength; i += 1, step += progressionStep) {
    progression.push(step);
  }

  return progression;
};

export const getRandomNumberFromProgression = (progression) => {
  const rndNumberIndex = makeRandomIntegerNumber(progression.length - 1);

  return progression[rndNumberIndex];
};

export const makeProgressionForQuestion = (progression, missingNumber) => {
  const clonedProgression = [...progression];
  const numberIndex = clonedProgression.indexOf(missingNumber);
  clonedProgression[numberIndex] = '..';

  return clonedProgression.join(' ');
};
