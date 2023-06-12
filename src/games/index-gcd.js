import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';
import { getNegativeAnswer, getPossitiveAnswer, endGame } from '../communicateWithUser.js';

const gameGcd = (name) => {
  console.log('Find the greatest common divisor of given numbers.');
  let attemptCounter = 0;
  for (let i = 1; i <= 3; i += 1) {
    let number1 = getRandomNumber();
    let number2 = getRandomNumber();
    console.log(`Question: ${number1} ${number2}`);
    const answerUser = readlineSync.question('You answer: ');
    while (number1 !== number2) {
      if (number1 === 0 || number2 === 0) {
        number1 = 0;
        number2 = number1;
      } else if (number1 > number2) {
        number1 -= number2;
      }
      if (number1 < number2) {
        number2 -= number1;
      }
    }
    const gcd = number1;
    if (answerUser === `${gcd}`) {
      getPossitiveAnswer(name);
      attemptCounter += 1;
    } else {
      getNegativeAnswer(answerUser, name, gcd);
      return;
    }
  }

  if (attemptCounter === 3) {
    endGame(name);
  }
};

export default gameGcd;
