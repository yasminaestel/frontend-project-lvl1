import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

console.log('Welcome to the Brain Games!');
const username = readlineSync.question('May I have your name?');
console.log(`Hello, ${username}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const gameEven = () => {
  let attemptCounter = 0;
  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const youAnswer = readlineSync.question('You answer: ');
    if ((number % 2 === 0 && youAnswer === 'yes') || (number % 2 !== 0 && youAnswer === 'no')) {
      console.log('Correct!');
      attemptCounter += 1;
    }
    if (number % 2 !== 0 && youAnswer !== 'no') {
      console.log(`${youAnswer} is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    if (number % 2 === 0 && youAnswer !== 'yes') {
      console.log(`${youAnswer} is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }
  if (attemptCounter === 3) {
    console.log(`Congratulations, ${username}!`);
  }
};

export default gameEven;
