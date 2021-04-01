import readlineSync from 'readline-sync';
import { randomInteger } from '../src/index.js';

const progressionNumbers = () => {
  const stepArr = [2, 3, 4, 5, 3, 4, 2, 5, 2];
  const step = stepArr[randomInteger(0, stepArr.length - 1)];
  const startValue = randomInteger();
  const numbers = [];
  numbers.push(startValue);
  let x = startValue;
  for (let i = 1; i <= 9; i += 1) {
    x += step;
    numbers.push(x);
  }
  return numbers;
};
export const task = 'What number is missing in the progression?';
export const answerS = () => {
  const answers = [];
  let numbers = progressionNumbers();
  const hiddenIndex = randomInteger(0, numbers.length - 1);
  const trueAnswer = numbers[hiddenIndex];
  answers.push(trueAnswer);
  numbers[hiddenIndex] = '..';
  numbers = numbers.join(' ');
  console.log(`Question: ${numbers}`);
  const answerUser = Number(readlineSync.question('Your answer: '));
  answers.push(answerUser);
  return answers;
};
