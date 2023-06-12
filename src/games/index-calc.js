import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';
import getRandomOperation from '../getRandomOperation.js';
import { getNegativeAnswer, getPossitiveAnswer, endGame } from '../communicateWithUser.js';

const gameCalc = (name) => {
  console.log('What is the result of the expression?');
  let attemptCounter = 0;
  for (let i = 1; i <= 3; i += 1) {
    const a = getRandomNumber();
    const b = getRandomNumber();
    const operation = getRandomOperation();
    let rightAnswer;
    switch (operation) {
      case '+':
        rightAnswer = a + b;
        break;
      case '-':
        rightAnswer = a - b;
        break;
      default:
        rightAnswer = a * b;
        break;
    }
    console.log(`Question: ${a} ${operation} ${b}`);
    const answer = readlineSync.question('You answer: ');
    if (answer === `${rightAnswer}`) {
      getPossitiveAnswer(name);
      attemptCounter += 1;
    } else {
      getNegativeAnswer(answer, name);
      return;
    }
  }
  if (attemptCounter === 3) {
    endGame(name);
  }
};

export default gameCalc;
