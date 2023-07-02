import gameLogic from '../index.js';
import getRandom from '../utilis.js';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export const getRoundGamePrime = () => {
  const number = getRandom(0, 101);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  const question = `${number}`;
  return [question, correctAnswer];
};

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameLogic(rules, getRoundGamePrime);
};
