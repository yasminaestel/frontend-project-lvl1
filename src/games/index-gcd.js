import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';
import { getNegativeAnswer, getPossitiveAnswer, endGame } from '../communicateWithUser.js';

const attemptСounter = 3;

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGcd(b, a % b);
};

export default (name) => {
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < attemptСounter; i += 1) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const gcd = getGcd(number1, number2);

    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = readlineSync.question('You answer: ');

    if (userAnswer === `${gcd}`) {
      getPossitiveAnswer(name);
    } else {
      getNegativeAnswer(userAnswer, name, gcd);
      return;
    }
  }

  endGame(name);
};
