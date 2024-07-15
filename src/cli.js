import getUserName from './utils/getUserName.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
};
