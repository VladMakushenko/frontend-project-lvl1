import getRandomNum from '../utils/getRandomNum.js';
import calcExpression from '../utils/calcExpression.js';
import playGame from '../index.js';

const gameRules = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const initGameRound = () => {
  const firstNum = getRandomNum();
  const secondNum = getRandomNum();
  const operator = getRandomNum(0, operations.length - 1);

  const question = `${firstNum} ${operations[operator]} ${secondNum}`;
  const correctAnswer = String(calcExpression(firstNum, secondNum, operations[operator]));

  return { question, correctAnswer };
};

export default () => playGame(gameRules, initGameRound);
