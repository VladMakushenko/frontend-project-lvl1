import readlineSync from 'readline-sync';
import getUserName from './utils/getUserName.js';

const numberOfRounds = 3;

const getAnswer = () => readlineSync.question('Your answer: ');
const isCorrectAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

export default (gameRules, initGameRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  console.log(gameRules);

  for (let i = 1; i <= numberOfRounds; i += 1) {
    const { question, correctAnswer } = initGameRound();

    console.log('Question:', question);

    const userAnswer = getAnswer();

    if (isCorrectAnswer(userAnswer, correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (i === numberOfRounds) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
