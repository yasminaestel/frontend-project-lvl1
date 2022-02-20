import getRandomNumber from "../getRandomNumber.js";
import readlineSync from "readline-sync";
import startGames from "../startGames.js";

startGames();
const username = readlineSync.question("May I have your name? ");
console.log(`Hello, ${username}!`);
console.log("What number is missing in the progression?");
const gameGcd = () => {
let attemptCounter = 0;
  for (let i = 1; i <= 3; i += 1) {
        let firstIndex = getRandomNumber();
        let difference = getRandomNumber();
        let arrayLength = getRandomNumber();
        let massiveRandom = [];
        massiveRandom[0] = firstIndex;
            for (let i = 1; i <= arrayLength; i++) {
                massiveRandom[i] = massiveRandom[i - 1] + difference;
            }
    const num = getRandomNumber();      
    let newMassiveRandom = massiveRandom.splice(num, 1, '...');
    const youAnswer = readlineSync.question("You answer: ");
    if (youAnswer === `${num}`) {
        console.log("Correct!");
        return (attemptCounter += 1);
      } else {
        console.log(
          `'${youAnswer}' is wrong answer ;(. Correct answer was ${num}.`
        );
        console.log(`Let's try again, ${username}!`);
        return;
      }
    }
    if (attemptCounter === 3) {
    console.log(`Congratulations, ${username}!`);
      }
    };
export default gameProgression;
