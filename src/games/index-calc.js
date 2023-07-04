import gameLogic from '../index.js';
import getRandom from '../utilis.js';

export const getRoundGameCalc = () => {
  const firstNumber = getRandom(1, 10);
  const secondNumber = getRandom(1, 10);
  const operatorNumber = getRandom(1, 3);
  let operator;
  let correctAnswer;

  switch (operatorNumber) {
    case 1:
      operator = '+';
      correctAnswer = firstNumber + secondNumber;
      break;
    case 2:
      operator = '-';
      correctAnswer = firstNumber - secondNumber;
      break;
    case 3:
      operator = '*';
      correctAnswer = firstNumber * secondNumber;
      break;
    default:
      break;
  }

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  return [question, correctAnswer.toString()];
};

export default () => {
  const rules = 'What is the result of the expression?';
  gameLogic(rules, getRoundGameCalc);
};
