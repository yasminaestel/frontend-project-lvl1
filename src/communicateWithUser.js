const startGames = () => console.log('Welcome to the Brain Games!');

const getNegativeAnswer = (answer, userName) => {
  console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.`);
  console.log(`Let's try again, ${userName}!`);
}

const getPossitiveAnswer = () => console.log('Correct!');

const endGame = (userName) => console.log(`Congratulations, ${userName}!`);

export {
  startGames,
  getNegativeAnswer,
  getPossitiveAnswer,
  endGame
};