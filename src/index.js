import readlineSync from "readline-sync";
export const username = readlineSync.question("May I have your name? ");
export const startGames = () => {
  console.log("Welcome to the Brain Games!");
 const myName = username;
  console.log(`Hello, ${myName}!`);}

