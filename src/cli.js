import readlineSync from "readline-sync";
console.log('Welcome to the Brain Games!');
export const username = readlineSync.question("May I have your name? ");
console.log(`Hello, ${username}!`);
