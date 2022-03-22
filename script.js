'use strict';
////////////////////////////////////////////////////////////////////////////
//CODE WITHOUT REFACTORING
// let secret_number = Math.trunc(Math.random() * 20 + 1);
// console.log(secret_number);

// const bodyEl = document.querySelector('body');
// const btnAgainEl = document.querySelector('.again');
// let inputEl = document.querySelector('.guess');
// const btnCheckEl = document.querySelector('.check');
// const messageEl = document.querySelector('.message');
// let scoreEl = document.querySelector('.score');
// let highScoreEl = document.querySelector('.highscore');
// let numberEl = document.querySelector('.number');

// btnCheckEl.addEventListener('click', function () {
//   console.log(inputEl.value);
//   const score = Number(scoreEl.textContent);
//   const highscore = Number(highScoreEl.textContent);
//   if (inputEl.value === '') {
//     messageEl.textContent = '⛔️ No number!';
//     return;
//   }
//   if (+inputEl.value === secret_number) {
//     messageEl.textContent = 'Correct number!';
//     if (score > highscore) highScoreEl.textContent = scoreEl.textContent;
//     bodyEl.style.backgroundColor = '#60b347';
//     numberEl.textContent = secret_number;
//     numberEl.style.width = '30rem';
//     btnCheckEl.disabled = true;
//   } else {
//     if (score > 1) {
//       messageEl.textContent =
//         inputEl.value < secret_number ? 'Too low!' : 'Too high!';
//       scoreEl.textContent -= 1;
//     } else {
//       messageEl.textContent = '💥You lost the game!';
//       scoreEl.textContent -= 1;
//       btnCheckEl.disabled = true;
//     }
//   }
// });

// btnAgainEl.addEventListener('click', function () {
//   secret_number = Math.trunc(Math.random() * 20 + 1);
//   console.log(secret_number);
//   messageEl.textContent = 'Start guessing...';
//   scoreEl.textContent = '20';
//   bodyEl.style.backgroundColor = '#222';
//   numberEl.style.width = '15rem';
//   inputEl.value = '';
//   numberEl.textContent = '?';
//   btnCheckEl.disabled = false;
// });
////////////////////////////////////////////////////////////////////////////////

//REFACTORED CODE
// generate the secret number
let secret_number = Math.trunc(Math.random() * 20 + 1);
// console.log(secret_number);
let score = 20;
let highscore = 0;

// function to display the status message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// add an Event Listener to the Check Button
// this function takes the user input and compare it with the generated secret
// number;
document.querySelector('.check').addEventListener('click', function () {
  const userInput = document.querySelector('.guess').value;
  console.log(userInput);
  // when there is no input
  if (!userInput) {
    displayMessage('⛔️ No number!');
  }
  // when player win
  else if (+userInput === secret_number) {
    displayMessage('Correct number!');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secret_number;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.check').disabled = true;
  }
  // if user input is different than the secret number
  else {
    if (score > 1) {
      displayMessage(userInput < secret_number ? 'Too low!' : 'Too high!');
    } else {
      displayMessage('💥You lost the game!');
      document.querySelector('.check').disabled = true;
    }
    score--;
    document.querySelector('.score').textContent = score;
  }
});

// create an Event Listener for the Again Button;
// the Again Button resets all values except the Highscore Value
document.querySelector('.again').addEventListener('click', function () {
  secret_number = Math.trunc(Math.random() * 20 + 1);
  // console.log(secret_number);
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.check').disabled = false;
});
