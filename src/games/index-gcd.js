import getRandomNumber from "../getRandomNumber.js";
import readlineSync from "readline-sync";
import startGames from "../startGames.js";

startGames ();
const username = readlineSync.question("May I have your name? ");
console.log(`Hello, ${username}!`);
console.log('Find the greatest common divisor of given numbers.');
const nod = (number1, number2) => {
    let number3;
    while (number1 != number2) {
        if (number1 > number2) {
            number1 = number1 - number2;
        } else
        if (number1 < number2) {
            number3 = number1;
            number1 = number2;
            number2 = number3;}
        }
        return number1;
    }
const gameGcd = () => {
let attemptCounter = 0;
    for (let i = 1; i <= 3; i += 1) {
        const number1 = getRandomNumber();
        const number2 = getRandomNumber();
        console.log(`Question: ${number1} ${number2}` );
        const youAnswer = readlineSync.question("You answer: ");
        nod (number1, number2);
    if (youAnswer === `${number1}`) {
        console.log("Correct!");
        attemptCounter += 1;
    } else {
        console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was ${number1}.`);
        console.log(`Let's try again, ${username}!`);
        return;
    }
}
}
if (attemptCounter === 3) {
    console.log(`Congratulations, ${ username }!`);
    }
export default gameGcd;
