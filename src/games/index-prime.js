import gameLogic from '../index.js';
import { getRandom } from '../utilis.js';

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const functionGamePrime = () => {
    const isPrime = (num) => {
      if (num <= 1) return false;
      if (num === 2) return true;
      for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) return false;
      }
      return true;
    };
    const number = getRandom(101, 0);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    const question = `${number}`;
    return [question, correctAnswer];
  };
  gameLogic(rules, functionGamePrime);
};
