import gameLogic from '../index.js';
import getRandom from '../utilis.js';

const operators = ['+', '-', '*'];

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

export const getRoundGameCalc = () => {
  const a = getRandom(0, 101);
  const b = getRandom(0, 101);
  const operation = operators[Math.floor(Math.random() * operators.length)];
  const correctAnswer = calculate(a, b, operation);

  const question = `${a} ${operation} ${b}`;
  return [question, correctAnswer.toString()];
};

export default () => {
  const rules = 'What is the result of the expression?';
  gameLogic(rules, getRoundGameCalc);
};
