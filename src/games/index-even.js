import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';
import { getNegativeAnswer, getPossitiveAnswer, endGame } from '../communicateWithUser.js';

const attemptСounter = 3;

const isEven = (number) => number % 2 === 0;

export default (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < attemptСounter; i += 1) {
    const number = getRandomNumber();
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('You answer: ');

    if (userAnswer.toLowerCase() === correctAnswer) {
      getPossitiveAnswer(name);
    } else {
      getNegativeAnswer(userAnswer, name, correctAnswer);
      return;
    }
  }

  endGame(name);
};
