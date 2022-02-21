import getRandomNumber from "../getRandomNumber.js";
import readlineSync from "readline-sync";
import startGames from "../startGames.js";

startGames();
const username = readlineSync.question("May I have your name? ");
console.log(`Hello, ${username}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const gamePrime = () => {
  let attemptCounter = 0;
  for (let i = 1; i <= 3; i += 1) {
    let number = getRandomNumber();
    console.log(`Question: ${number}`);
    let correctAnswer;
   const isPrime = (number) =>{
 if (number < 2) {
    return correctAnswer = "no";
    }
    if (number === 2) {
    return correctAnswer = "yes"; 
    }
    for (let i = 2; i <= number / 2; i += 1) {
        if (number % i === 0) {
           return correctAnswer = "no";
        }
    }
 return correctAnswer = "yes";}
isPrime(number);
 const yourAnswer = readlineSync.question("You answer: ");
  if (yourAnswer === correctAnswer) {
    console.log("Correct!");
    attemptCounter += 1;
  } else {
    console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${username}!`);
    return;
  }

  if (attemptCounter === 3) {
    console.log(`Congratulations, ${username}!`);
  }
}
}
export default gamePrime;
