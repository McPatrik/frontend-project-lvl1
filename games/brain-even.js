import readlineSync from 'readline-sync';

import { randomInteger } from '../src/index.js';

export const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export const answerS = () => {
  const randomNumber = randomInteger();
  const answers = [];
  let trueAnswer;
  if (randomNumber % 2 === 0) {
    trueAnswer = 'yes';
  }
  if (randomNumber % 2 > 0) {
    trueAnswer = 'no';
  }
  answers.push(trueAnswer);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  console.log(userAnswer);
  answers.push(userAnswer);
  return answers;
};
