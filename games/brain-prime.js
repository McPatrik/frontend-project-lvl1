import readlineSync from 'readline-sync';
import { randomInteger } from '../src/index.js';

const isPrime = (number) => {
  let answer;
  let current = 0;
  for (let i = 2; i < Math.floor(number / 2); i += 1) {
    if (number % i === 0) {
      current += 1;
    }
  }
  if (current > 0) {
    answer = 'no';
  } else {
    answer = 'yes';
  }
  return answer;
};
export const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const answerS = () => {
  const answers = [];
  const number = randomInteger();
  const trueAnswer = isPrime(number);
  answers.push(trueAnswer);
  console.log(`Question: ${number}`);
  const answerUser = readlineSync.question('Your answer: ');
  answers.push(answerUser);
  return answers;
};
