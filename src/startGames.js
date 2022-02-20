const startGames = () => {
console.log("Welcome to the Brain Games!");
  const username = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${username}!`);
  console.log('What is the result of the expression?');
}

export default startGames;
export const username = readlineSync.question("May I have your name? ");
