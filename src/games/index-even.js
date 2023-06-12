import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';
import { getNegativeAnswer, getPossitiveAnswer, endGame } from '../communicateWithUser.js';

export default (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let attemptCounter = 0;
  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('You answer: ');
    if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
      getPossitiveAnswer(name);
      attemptCounter += 1;
    }
    if (number % 2 !== 0 && answer !== 'no') {
      getNegativeAnswer(answer, name);
      return;
    }
    if (number % 2 === 0 && answer !== 'yes') {
      getNegativeAnswer(answer, name);
      return;
    }
  }
  if (attemptCounter === 3) {
    endGame(name);
  }
};
