import gameLogic from '../index.js';
import { getRandom } from '../utilis.js';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGcd(b, a % b);
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const functionGame = () => {
    const number1 = getRandom(101, 0);
    const number2 = getRandom(101, 0);
    const correctAnswer = getGcd(number1, number2);

    const question = `${number1} ${number2}`;
    return [question, correctAnswer.toString()];
  };
  gameLogic(rules, functionGame);
};
