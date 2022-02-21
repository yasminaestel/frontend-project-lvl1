import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';
import startGames from '../startGames.js';

startGames();
const username = readlineSync.question("May I have your name? ");
console.log(`Hello, ${username}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const gamePrime = () => {
  let attemptCounter = 0;
  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    let correctAnswer;
    const isPrime = (num) => {
      if (num < 2) {
        correctAnswer = 'no';
        return correctAnswer;
      }
      if (num === 2) {
        correctAnswer = 'yes';
        return correctAnswer;
      }
      for (let i = 2; i <= num / 2; i += 1) {
        if (num % i === 0) {
          correctAnswer = 'no';
          return correctAnswer;
        }
      }
      correctAnswer = 'yes';
      return correctAnswer;
    };
    isPrime(number);
    const yourAnswer = readlineSync.question('You answer: ');
    if (yourAnswer === correctAnswer) {
      console.log('Correct!');
      attemptCounter += 1;
    } else {
      console.log(
        `${yourAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`
      );
      console.log(`Let's try again, ${username}!`);
      return;
    }

    if (attemptCounter === 3) {
      console.log(`Congratulations, ${username}!`);
    }
  };
};

export default gamePrime;
