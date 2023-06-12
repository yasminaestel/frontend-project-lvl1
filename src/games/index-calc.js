import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';
import getRandomOperation from '../getRandomOperation.js';
import { getNegativeAnswer, getPossitiveAnswer, endGame } from '../communicateWithUser.js';

const attemptСounter = 3;

const calculate = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      return a * b;
  }
};

export default (name) => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < attemptСounter; i += 1) {
    const a = getRandomNumber();
    const b = getRandomNumber();
    const operation = getRandomOperation();
    const correctAnswer = calculate(a, b, operation);

    console.log(`Question: ${a} ${operation} ${b}`);
    const userAnswer = readlineSync.question('You answer: ');

    if (userAnswer === `${correctAnswer}`) {
      getPossitiveAnswer(name);
    } else {
      getNegativeAnswer(userAnswer, name, correctAnswer);
      return;
    }
  }

  endGame(name);
};
