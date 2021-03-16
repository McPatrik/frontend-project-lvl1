/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import readlineSync from 'readline-sync';
const witam = (x) => {

    console.log("Welcome to the Brain Games!")

    const name = readlineSync.question('May I have your name? ');

    console.log(`Hello, ${name}`);
}
export default witam;