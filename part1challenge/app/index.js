// app/index.js
//credit: https://stackoverflow.com/questions/36540996/how-to-take-two-consecutive-input-with-the-readline-module-of-node-js


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter First Number? ', (answer1) => {
  rl.question('Enter Second Number? ', (answer2) => {
    var result = (+answer1) + (+answer2);
    console.log(`The sum of above two numbers is ${result}`);
        rl.close();
  });
});