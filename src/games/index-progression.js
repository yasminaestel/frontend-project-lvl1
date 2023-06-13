import gameLogic from '../index.js';
import { getRandom } from '../utilis.js';

export default () => {
  const rules = 'What number is missing in the progression?';
  const functionGameProgression = () => {
    const firstIndex = getRandom(101, 0);
    const difference = getRandom(10, 1);
    const arrayLength = getRandom(6, 6);
    const lineMassive = [firstIndex];
    for (let index = 1; index < arrayLength; index += 1) {
      const intermediateVariable = lineMassive[index - 1] + difference;
      lineMassive.push(intermediateVariable);
    }
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
  gameLogic(rules, functionGameProgression);
};
