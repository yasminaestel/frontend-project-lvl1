import gameLogic from '../index.js';
import { getRandom, getRandomOperation } from '../utilis.js';

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

export default () => {
  const rules = 'What is the result of the expression?';

  const functionGameCalc = () => {
    const a = getRandom(101, 0);
    const b = getRandom(101, 0);
    const operation = getRandomOperation();
    const correctAnswer = calculate(a, b, operation);

    const question = `${a} ${operation} ${b}`;

    return [question, correctAnswer.toString()];
  };
  gameLogic(rules, functionGameCalc);
};
