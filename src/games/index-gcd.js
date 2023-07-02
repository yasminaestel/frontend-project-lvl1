import gameLogic from '../index.js';
import getRandom from '../utilis.js';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGcd(b, a % b);
};

export const getRoundGameGcd = () => {
  const number1 = getRandom(0, 101);
  const number2 = getRandom(0, 101);
  const correctAnswer = getGcd(number1, number2);

  const question = `${number1} ${number2}`;
  return [question, correctAnswer.toString()];
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  gameLogic(rules, getRoundGameGcd);
};
