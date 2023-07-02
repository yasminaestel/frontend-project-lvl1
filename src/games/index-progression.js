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

const getRoundGameProgression = () => {
  const firstIndex = getRandom(0, 101);
  const difference = getRandom(1, 10);
  const arrayLength = getRandom(5, 10);
  const progression = generateProgression(firstIndex, difference, arrayLength);

  const hiddenNumberIndex = getRandom(0, progression.length - 1);
  const correctAnswer = progression[hiddenNumberIndex];
  progression.splice(hiddenNumberIndex, 1, '..');

  const question = `${progression.join(' ')}`;
  return [question, correctAnswer.toString()];
};

export default () => {
  const rules = 'What number is missing in the progression?';
  gameLogic(rules, getRoundGameProgression);
};
