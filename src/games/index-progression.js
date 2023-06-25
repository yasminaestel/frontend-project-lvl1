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
  const firstIndex = getRandom(101, 0);
  const difference = getRandom(10, 1);
  const arrayLength = getRandom(6, 6);
  const lineMassive = generateProgression(firstIndex, difference, arrayLength);

  let number = difference;
  let correctAnswer;
  if (number < lineMassive.length) {
    correctAnswer = lineMassive[number];
    lineMassive.splice(number, 1, '..');
  } else {
    number -= 5;
    correctAnswer = lineMassive[number];
    lineMassive.splice(number, 1, '..');
  }

  const question = `${lineMassive.join(' ')}`;
  return [question, correctAnswer.toString()];
};

export default () => {
  const rules = 'What number is missing in the progression?';
  gameLogic(rules, getRoundGameProgression);
};
