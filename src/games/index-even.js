import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';
import { getNegativeAnswer, getPossitiveAnswer, endGame } from '../communicateWithUser.js';

export default (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let attemptCounter = 0;
  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const answerUser = readlineSync.question('You answer: ');
    if ((number % 2 === 0 && answerUser === 'yes') || (number % 2 !== 0 && answerUser === 'no')) {
      getPossitiveAnswer(name);
      attemptCounter += 1;
    }
    if (number % 2 !== 0 && answerUser !== 'no') {
      const correctAnswer = 'no';
      getNegativeAnswer(answerUser, name, correctAnswer);
      return;
    }
    if (number % 2 === 0 && answerUser !== 'yes') {
      const correctAnswer = 'yes';
      getNegativeAnswer(answerUser, name, correctAnswer);
      return;
    }
  }
  if (attemptCounter === 3) {
    endGame(name);
  }
};
