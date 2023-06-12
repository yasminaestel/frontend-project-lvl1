import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';
import { getNegativeAnswer, getPossitiveAnswer, endGame } from '../communicateWithUser.js';

export default (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
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
      for (let index = 2; index <= num / 2; index += 1) {
        if (num % index === 0) {
          correctAnswer = 'no';
          return correctAnswer;
        }
      }
      correctAnswer = 'yes';
      return correctAnswer;
    };
    isPrime(number);
    const answerUser = readlineSync.question('You answer: ');
    if (answerUser === correctAnswer) {
      getPossitiveAnswer(name);
      attemptCounter += 1;
    } else {
      getNegativeAnswer(answerUser, name, correctAnswer);
      return;
    }

    if (attemptCounter === 3) {
      endGame(name);
    }
  }
};