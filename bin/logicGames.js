import readlineSync from 'readline-sync';

const randomInteger = (min = 1, max = 100) => {
// случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let trueAnswer;
  let current = 0;
  while (current < 3) {
    const randomNumber = randomInteger();
    if (randomNumber % 2 === 0) {
      trueAnswer = 'yes';
    }
    if (randomNumber % 2 > 0) {
      trueAnswer = 'no';
    }
    const question = `Question: ${randomNumber}`;
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === trueAnswer) {
      current += 1;
      console.log('Correct!');
    } else {
      console.log('sorry');
      break;
    }
  }
  if (current === 3) {
    console.log(`Congratulations, ${name}`);
  }
};

export default game;
