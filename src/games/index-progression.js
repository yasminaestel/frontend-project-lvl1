import gameLogic from '../index.js';
import getRandom from '../utilis.js';

const generateProgression = (firstIndex, difference, arrayLength) => {
  const progression = [firstIndex];
  for (let index = 1; index < arrayLength; index += 1) {
    const intermediateVariable = progression[index - 1] + difference;
    progression.push(intermediateVariable);
  }
  return progression;
};

export const getRoundGameProgression = () => {
  const firstIndex = getRandom(0, 101);
  const difference = getRandom(1, 10);
  const arrayLength = getRandom(4, 12);
  const progression = generateProgression(firstIndex, difference, arrayLength);

  let hiddenNumberIndex = getRandom(1, progression.length - 1);
  let correctAnswer;
  if (hiddenNumberIndex < progression.length) {
    correctAnswer = progression[hiddenNumberIndex];
    progression.splice(hiddenNumberIndex, 1, '..');
  } else {
    hiddenNumberIndex -= 5;
    correctAnswer = progression[hiddenNumberIndex];
    progression.splice(hiddenNumberIndex, 1, '..');
  }

  const question = `${progression.join(' ')}`;
  return [question, correctAnswer.toString()];
};

export default () => {
  const rules = 'What number is missing in the progression?';
  gameLogic(rules, getRoundGameProgression);
};
