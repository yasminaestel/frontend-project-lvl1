import getRandomNumber from "../getRandomNumber.js";
import readlineSync from "readline-sync";
import getRandomOperation from "../getRandomOperation.js";


  console.log("Welcome to the Brain Games!");
  const username = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${username}!`);
  console.log('What is the result of the expression?');
  const gameCalc = () => {
    let attemptCounter = 0;
    for (let i = 1; i <= 3; i += 1) {
      const a = getRandomNumber();
      const b = getRandomNumber();
      const operations = getRandomOperation();
    const number = `${a} ${operations} ${b}`;
      let numberAnswer = 0;
      switch (operations) {
        case '+':
          numberAnswer = a + b;
          break;
        case '-':
          numberAnswer = a - b;
          break;
       case '*':
          numberAnswer = a * b;
          break;
      }
    console.log("Question:" + number);
    const youAnswer = readlineSync.question("You answer: ");
    if (youAnswer === `${numberAnswer}`) {
      console.log("Correct!");
      attemptCounter += 1;
    } else {
      console.log(`'${youAnswer}' is wrong answer \;\(. Correct answer was ${numberAnswer}.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
  };
  if (attemptCounter === 3) {
    console.log(`Congratulations, ${ username }!`);
    }
  }
export default gameCalc;
