import getRandomNum from '../utils/getRandomNum.js';
import playGame from '../index.js';

const gameRules = 'What number is missing in the progression?';

const hideNumInProgression = (progression, indexToHide) => progression.map((num, i) => (i === indexToHide ? '..' : num));

const genArithmeticProgression = (start, step, len = 10) => {
  if (len < 5) throw new Error('Invalid progression length');

  const progression = [];

  for (let i = 0; i < len; i += 1) {
    progression.push(start + (step * i));
  }

  return progression;
};

const initGameRound = () => {
  const progressionStart = getRandomNum();
  const progressionStep = getRandomNum(1, 10);
  const progressionLen = getRandomNum(5, 10);

  const progression = genArithmeticProgression(progressionStart, progressionStep, progressionLen);

  const indexToHide = getRandomNum(0, progression.length - 1);

  const hiddenProgression = hideNumInProgression(progression, indexToHide);

  const question = `${hiddenProgression.join(' ')}`;
  const correctAnswer = String(progression[indexToHide]);

  return { question, correctAnswer };
};

export default () => playGame(gameRules, initGameRound);
