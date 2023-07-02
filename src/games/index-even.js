import gameLogic from '../index.js';
import getRandom from '../utilis.js';

const isEven = (number) => number % 2 === 0;

export const getRoundGameEven = () => {
  const number = getRandom(0, 101);
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  const question = `${number}`;
  return [question, correctAnswer];
};

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  gameLogic(rules, getRoundGameEven);
};
