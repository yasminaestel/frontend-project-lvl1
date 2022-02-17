import readlineSync from "readline-sync";

    console.log("Welcome to the Brain Games!");
    export const username = readlineSync.question("May I have your name? ");
    console.log(`Hello, ${username}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const getRandomNumber = () => Math.floor(Math.random() * 100);
    let correctAnswerCounter = 0;
    const numberRandom = getRandomNumber();
    export const youAnswer = readlineSync.question('You answer: ');
    for (i = 1; i <= 3; i += 1) {
	console.log('Question:' numberRandom);
        if (numberRandom % 2 === 0 && youAnswer === 'yes') {
            console.log('Correct!');
            correctAnswerCounter += 1;
            console(youAnswer);
        } else if (numberRandom % 2 !== 0 && youAnswer == 'no') {
            console.log('Correct!');
            correctAnswerCounter += 1;
            console(youAnswer);
        } else if (numberRandom % 2 !== 0 && youAnswer === 'yes') {
            console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
            console.log("Let's try again, ${username}!");
            break;
        } else if (numberRandom % 2 === 0 && youAnswer === 'no') {
            console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
            console.log("Let's try again, ${username}!");
            break;
        } else {
            if (numberRandom % 2 === 0) {
                console.log("'${youAnswer}' is wrong answer ;(. Correct answer was 'yes'.");
                console.log("Let's try again, ${username}!");
                break;
            } else {
                console.log("'${youAnswer}' is wrong answer ;(. Correct answer was 'no'.");
                console.log("Let's try again, ${username}!");
                break;
            }
        }
    };
    if (correctAnswerCounter === 3) {
        console.log('Congratulations, ${ username }!')};

