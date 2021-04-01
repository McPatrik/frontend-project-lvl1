import readlineSync from 'readline-sync';
import { randomInteger } from '../src/index.js';

export const randomn = () => {
  const randomNumber = [];
  const operator = ['+', '*', '-'];
  const operatorIndex = randomInteger(0, operator.length - 1);
  const randomOperator = operator[operatorIndex];
  const randomNumber1 = randomInteger();
  const randomNumber2 = randomInteger();
  randomNumber.push(randomNumber1);
  randomNumber.push(randomNumber2);
  randomNumber.push(randomOperator);
  return randomNumber;
};
export const task = 'What is the result of the expression?';
export const answerS = () => {
  const answers = [];
  const numbers = randomn();
  const sign = numbers[2];
  const st = `${numbers[0]} ${sign} ${numbers[1]}`;
  // eslint-disable-next-line no-eval
  const trueAnswer = eval(st);
  answers.push(trueAnswer);
  console.log(`Question: ${numbers[0]}${sign}${numbers[1]}`);
  const answerUser = Number(readlineSync.question('Your answer: '));
  answers.push(answerUser);
  console.log(answerUser);
  return answers;
};
