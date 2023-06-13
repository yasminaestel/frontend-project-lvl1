import gameLogic from '../index.js';
import { getRandom } from '../utilis.js';

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const functionGame = () => {
    const number = getRandom(101, 0);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    const question = `${number}`;
    return [question, correctAnswer];
  };
  gameLogic(rules, functionGame);
};
