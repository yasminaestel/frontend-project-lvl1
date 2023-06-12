import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';
import getRandomLength from '../getRandomLength.js';
import getRandomDiff from '../getRandomDiff.js';
import { getNegativeAnswer, getPossitiveAnswer, endGame } from '../communicateWithUser.js';

export default (name) => {
  console.log('What number is missing in the progression?');
  let attemptCounter = 0;
  for (let i = 1; i <= 3; i += 1) {
    const firstIndex = getRandomNumber();
    const difference = getRandomDiff();
    const arrayLength = getRandomLength();
    const lineMassive = [firstIndex];
    for (let index = 1; index < arrayLength; index += 1) {
      const intermediateVariable = lineMassive[index - 1] + difference;
      lineMassive.push(intermediateVariable);
    }
    let number = difference;
    let correctAnswer;
    if (number < lineMassive.length) {
      correctAnswer = lineMassive[number];
      lineMassive.splice(number, 1, '..');
    } else {
      number -= 5;
      correctAnswer = lineMassive[number];
      lineMassive.splice(number, 1, '..');
    }
    const str = lineMassive.join(' ');
    console.log(`Question: ${str}`);
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
