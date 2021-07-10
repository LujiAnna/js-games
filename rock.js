let btnRock = document.getElementById('rock');
let btnPaper = document.getElementById('paper');
let btnScissors = document.getElementById('scissors');
let btnPlay = document.getElementById('play');
let msg = document.getElementById('msg');

// TODO: list of computer choices
let computerValues = ['rock', 'paper', 'scissors'];

function getRandomInteger(max) {
  return Math.floor(Math.random() * max); //0, 0..., 0.9 * 3 -> 0, 1, 2
}

// console.log(getRandomInt(3));
// expected output: 0, 1 or 2

// console.log(computerValues[getRandomInt(3)]);

// TODO:  List of user choices
var btnChoice = document.getElementsByClassName('btnChoice');
// console.log(btnChoice);

var userChoice;
for (let i = 0; i < btnChoice.length; i++) {
  btnChoice[i].addEventListener('click', function() {
    // Do your button things.
     userChoice= btnChoice[i].innerHTML;
     console.log(userChoice);
  }); // close eventlistener
}   //close for loop

 // TODO: Have a play button to have the computer pick one randomly
 btnPlay.addEventListener('click', play);
 // TODO: Possible outcomes: draw (when both chose the same thing) or player won/lost
 // TODO: Announce the winner -No alert box, add a message to your html 
 function play() {
   console.log(computerChoice = computerValues[getRandomInteger(3)]);  
   // draw
   if(userChoice === computerChoice) {
   msg.innerHTML = 'draw';
   } else if (userChoice == 'rock' && computerChoice == 'scissors') {
   msg.innerHTML = `You win!`;
   } else if (userChoice == 'rock' && computerChoice == 'paper') {
   msg.innerHTML = `You lose!`;
   } else if (userChoice == 'paper' && computerChoice == 'scissors') {
   msg.innerHTML = `You lose!`;
   } else if (userChoice == 'paper' && computerChoice == 'rock') {
   msg.innerHTML = `You win!`;
   } else if (userChoice == 'scissors' && computerChoice == 'rock') {
   msg.innerHTML = `You lose!`;
   } else if (userChoice == 'scissors' && computerChoice == 'paper') {
   msg.innerHTML = `You win!`;
   }
 };
