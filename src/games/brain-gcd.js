import getRandomNumber from "../getRandomNumber.js";
import readlineSync from "readline-sync";
import startGames from "../startGames.js";

startGames ();
const username = readlineSync.question("May I have your name? ");
console.log(`Hello, ${username}!`);
console.log('Find the greatest common divisor of given numbers.');
const gameGcd = () => {
const a = getRandomNumber();
const b = getRandomNumber();
const number = `${a} ${b}`;
console.log('Question: a b' );
