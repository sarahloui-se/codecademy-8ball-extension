/* Set a username
TODO: let variable be filled in by user
*/
let userName = 'Sarah';

(userName) ? console.log(`Hello, ${userName}!`) : console.log(`Hello, stranger!`);
  // Workflow: Set username. Username not empty? Hello, ${userName}! Else username = 'Stranger' then Hello, ${userName}! (set to lowercase because grammar)

/* Ask the 8 ball a question
TODO:
- let question be filled in by user
- switch statement for if there's a question or not. Refer Python version of code for wording of strings
*/
let userQuestion = 'Is this a question?';

console.log(`${userName} asked: "${userQuestion}"`);
// future: check for a question mark in string in userQuestion, adjust accordingly. Maybe RegEx to ensure only questions are asked?

/* RNG for 8 ball replies */
let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

// 8 ball replies based on RNG above
let eightBall = '';
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    console.log('Undefined answer.');
    break;
}

// Print answer
console.log(eightBall);