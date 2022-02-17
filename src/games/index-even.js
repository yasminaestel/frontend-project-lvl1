import getRandomNumber from "../getRandomNumber.js";
import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");
export const username = readlineSync.question("May I have your name? ");
console.log(`Hello, ${username}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const gameEven = () => {
  console.log(`Question:${getRandomNumber}`);
  const youAnswer = readlineSync.question("You answer: ");
  let attemptCounter = 0;
  for (let i = 1; i <= 3; i += 1) {
    if ((getRandomNumber % 2 === 0 && youAnswer === "yes") || (getRandomNumber % 2 !== 0 && youAnswer === "no")) {
      console.log("Correct!");
      return attemptCounter += 1;
    } if (getRandomNumber % 2 !== 0 && youAnswer !== "no") {
        console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
        console.log(`Let's try again, ${username}!`);
        return;
    } if (numberRandom % 2 === 0 && youAnswer !== "yes") {
        console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
        console.log(`Let's try again, ${username}!`);
        return;
  }
}
if (attemptCounter === 3) {
    console.log(`Congratulations, ${ username }!`);
    }
}

export default gameEven;
