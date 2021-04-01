import readlineSync from 'readline-sync';
import { randomInteger } from '../src/index.js';

const numbersRandom = () => {
  const numbers = [];
  const firstNumber = randomInteger();
  const secondNumber = randomInteger();
  if (firstNumber > secondNumber) {
    numbers.push(secondNumber);
    numbers.push(firstNumber);
  } else {
    numbers.push(firstNumber);
    numbers.push(secondNumber);
  }
  return numbers;
};
const trueAnswer = (minNumber, maxNumber) => {
  let answer = 1;
  if (maxNumber % minNumber === 0) {
    return minNumber;
  }
  for (let i = Math.floor(minNumber / 2); i >= 1; i -= 1) {
    if (minNumber % i === 0 && maxNumber % i === 0) {
      if (i > answer) {
        answer = i;
      }
    }
  }
  return answer;
};
export const task = 'Find the greatest common divisor of given numbers.';
export const answerS = () => {
  const answers = [];
  const numbers = numbersRandom();
  const minNumber = numbers[0];
  const maxNumber = numbers[1];
  const trueanswer = trueAnswer(minNumber, maxNumber);
  answers.push(trueanswer);
  console.log(`Question: ${minNumber} ${maxNumber}`);
  const answerUser = Number(readlineSync.question('Your answer: '));
  answers.push(answerUser);
  return answers;
};
