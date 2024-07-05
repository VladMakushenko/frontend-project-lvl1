import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  const greeting = `Hello, ${userName}!`;
  console.log(greeting);
};
