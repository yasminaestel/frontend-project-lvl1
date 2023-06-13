import gameLogic from '../index.js';
import { getRandom } from '../utilis.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const functionGameEven = () => {
    const isEven = (number) => number % 2 === 0;
    const number = getRandom(101, 0);
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    const question = `${number}`;
    return [question, correctAnswer];
  };
  gameLogic(rules, functionGameEven);
};
