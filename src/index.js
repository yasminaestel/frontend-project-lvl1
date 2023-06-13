import readlineSync from 'readline-sync';

export default (rules, functionGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  const attemptСounter = 3;
  for (let i = 0; i < attemptСounter; i += 1) {
    const [question, correctAnswer] = functionGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
