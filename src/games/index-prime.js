import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';
import { getNegativeAnswer, getPossitiveAnswer, endGame } from '../communicateWithUser.js';

const attemptСounter = 3;

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export default (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < attemptСounter; i += 1) {
    const number = getRandomNumber();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('You answer: ');

    if (userAnswer === correctAnswer) {
      getPossitiveAnswer(name);
    } else {
      getNegativeAnswer(userAnswer, name, correctAnswer);
      return;
    }
  }

  endGame(name);
};
