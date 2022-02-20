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
        massiveRandom = massiveRandom.push(firstIndex);
        for (let index = 1; index <= arrayLength; index++) {
            let newNumber = massiveRandom[index - 1] + difference;
            massiveRandom = massiveRandom.push(`${newNumber}`);
        }
        let number = randomDiff();
        let answerRight = massiveRandom[number];
        let a = massiveRandom.splice(number, 1, "..");
        console.log(`Question: ${massiveRandom.join()}`);
        const youAnswer = readlineSync.question("You answer: ");
        if (youAnswer === `${answerRight}`) {
            console.log("Correct!");
            attemptCounter += 1;
        } else {
            console.log(
                `'${youAnswer}' is wrong answer ;(. Correct answer was ${answerRight}.`
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
