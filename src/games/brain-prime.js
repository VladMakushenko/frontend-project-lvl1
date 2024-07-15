import getRandomNum from '../utils/getRandomNum.js';
import isPrime from '../utils/isPrime.js';
import playGame from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const initGameRound = () => {
  const randomNum = getRandomNum() + 1;
  const question = `${randomNum}`;
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => playGame(gameRules, initGameRound);
