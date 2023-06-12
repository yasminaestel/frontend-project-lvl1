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
    let correctAnswer;
    switch (operation) {
      case '+':
        correctAnswer = a + b;
        break;
      case '-':
        correctAnswer = a - b;
        break;
      default:
        correctAnswer = a * b;
        break;
    }
    console.log(`Question: ${a} ${operation} ${b}`);
    const answerUser = readlineSync.question('You answer: ');
    if (answerUser === `${correctAnswer}`) {
      getPossitiveAnswer(name);
      attemptCounter += 1;
    } else {
      getNegativeAnswer(answerUser, name, correctAnswer);
      return;
    }
  }
  if (attemptCounter === 3) {
    endGame(name);
  }
};

export default gameCalc;
