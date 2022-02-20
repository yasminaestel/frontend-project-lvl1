import getRandomNumber from "../getRandomNumber.js";
import randomLength from "../randomLength.js";
import randomDiff from "../randomDiff.js";
import readlineSync from "readline-sync";
import startGames from "../startGames.js";

startGames();
const username = readlineSync.question("May I have your name? ");
console.log(`Hello, ${username}!`);
console.log("What number is missing in the progression?");
const gameProgression = () => {
  let attemptCounter = 0;
  for (let i = 1; i <= 3; i += 1) {
    let firstIndex = getRandomNumber();
    let difference = randomDiff();
    let arrayLength = randomLength();
    let massiveRandom = [];
    massiveRandom[0] = firstIndex;
    for (let i = 1; i <= arrayLength; i++) {
      massiveRandom[i] = massiveRandom[i - 1] + difference;
    }
    let number = randomDiff();
    let newMassiveRandom = massiveRandom.splice(number, 1, "...");
    console.log(`Question: ${newMassiveRandom}`);
    const youAnswer = readlineSync.question("You answer: ");
    if (youAnswer === `massiveRandom[number]`) {
      console.log("Correct!");
      return (attemptCounter += 1);
    } else {
      console.log(
        `'${youAnswer}' is wrong answer ;(. Correct answer was ${number}.`
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
