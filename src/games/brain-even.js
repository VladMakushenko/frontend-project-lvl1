import getRandomNum from '../utils/getRandomNum.js';
import isEven from '../utils/isEven.js';
import playGame from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const initGameRound = () => {
  const randomNum = getRandomNum();
  const question = `${randomNum}`;
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => playGame(gameRules, initGameRound);
