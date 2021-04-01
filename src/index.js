import readlineSync from 'readline-sync';

export const randomInteger = (min = 1, max = 20) => {
// случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const logicGame = (task, answers) => {
  const name = greeting();
  console.log(task);
  let current = 0;
  while (current < 3) {
    const answerS = answers();
    const userAnswer = answerS[1];
    const trueAnswer = answerS[0];
    if (trueAnswer === userAnswer) {
      current += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.
      Let's try again, ${name}`);
      break;
    }
  }
  if (current === 3) {
    console.log(`Congratulations, ${name}`);
  }
};
