// TODO: Generate (secret) number between 1 and 15(class learners) 
let getRandomInt = max => Math.floor(Math.random() * max) + 1;
console.log('start script');

const verouTeam = 15;
// console.log(getRandomInt(verouTeam)); //important to check
// let secretNumber = getRandomInt(verouTeam);
// console.log(secretNumber); //important to check

// TODO: Title
document.getElementById('title').innerHTML = `We have selected a random number between 1 and ${verouTeam}.`

// TODO: Grab guessed number from user after being submitted by button, and write in the board
// Get tags needed for these actions
let submitBtn = document.getElementById('submitBtn');
let userGuess = document.getElementById('userGuess');
let messageBoard = document.getElementById('messageBoard');
console.log('variable initialized');

submitBtn.addEventListener('click', getMessage);

// TODO: Compare numbers secret vs generated
let compareValues = () => {
  let secretNumber = getRandomInt(verouTeam);
  let guessNumber = userGuess.value;
  console.log(secretNumber); 
  return secretNumber == guessNumber;
}
console.log('compared values');
  

// TODO: Generate and show message in an alert
// TODO: Fix Error- message disappear soon as I release button, but if I click 3 times, it sticks
// DONE: Removed form tag around the input and button as it has a default refresh page behavior. 

function getMessage() {
  console.log('click detected');
  compareValues() ? messageBoard.innerHTML = `Awesome! Your number was correct. You can be named many things, hungry not being one of them.`
  : messageBoard.innerHTML = `Bummer... You guessed wrong`;
}

