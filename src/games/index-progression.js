import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';
import randomLength from '../randomLength.js';
import randomDiff from '../randomDiff.js';
import startGames from '../startGames.js';

startGames();
const username = readlineSync.question('May I have your name? ');
console.log(`Hello, ${username}!`);
console.log('What number is missing in the progression?');
const gameProgression = () => {
  let attemptCounter = 0;
  for (let i = 1; i <= 3; i += 1) {
    const firstIndex = getRandomNumber();
    const difference = randomDiff();
    const arrayLength = randomLength();
    const lineMassive = [firstIndex];
    for (let index = 1; index < arrayLength; index += 1) {
      const intermediateVariable = lineMassive[index - 1] + difference;
      lineMassive.push(intermediateVariable);
    }
    const number = difference;
    let answerRight;
    if (number < lineMassive.length) {
      answerRight = lineMassive[number];
      lineMassive.splice(number, 1, '..');
    } else {
      answerRight = lineMassive[4];
      lineMassive.splice(4, 1, '..');
    }
    const str = lineMassive.join(' ');
    console.log(`Question: ${str}`);
    const youAnswer = readlineSync.question('You answer: ');
    if (youAnswer === `${answerRight}`) {
      console.log('Correct!');
      attemptCounter += 1;
    } else {
      console.log(`${youAnswer} is wrong answer ;(. Correct answer was ${answerRight}.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }
  if (attemptCounter === 3) {
    console.log(`Congratulations, ${username}!`);
  }
};

export default gameProgression;
