import getRandomNum from '../utils/getRandomNum.js';
import playGame from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const sortArr = (arr) => arr.sort((a, b) => a - b);

const getGCD = (nums) => {
  const [firstNum, secondNum] = sortArr(nums);

  let divisor = 1;

  for (let i = secondNum; i > 0; i -= 1) {
    if ((firstNum % i === 0) && (secondNum % i === 0)) {
      divisor = i;
      break;
    }
  }

  return divisor;
};

const initGameRound = () => {
  const firstNum = getRandomNum();
  const secondNum = getRandomNum();

  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = String(getGCD([firstNum, secondNum]));

  return { question, correctAnswer };
};

export default () => playGame(gameRules, initGameRound);
