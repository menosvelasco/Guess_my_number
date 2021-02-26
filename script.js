'use strict';

/* 
console.log(document.querySelector('.Start_guessing').textContent);
document.querySelector('.Start_guessing').textContent = 'Correct Number';
*/
let random_number = Math.trunc(Math.random() * 10) + 1;

let score = 10;
let highScore = 0;

const startGuessing = function (startguess) {
  document.querySelector('.Start_guessing').textContent = startguess;
};

document.querySelector('.check_button').addEventListener('click', function () {
  const guess_number = Number(document.querySelector('.guess_number').value);
  console.log(guess_number, typeof guess_number);

  if (!guess_number) {
    // when there is no input
    // document.querySelector('.Start_guessing').textContent = 'no Number.';
    startGuessing('no Number');
  } else if (guess_number === random_number) {
    // when player wins
    // document.querySelector('.Start_guessing').textContent = 'Correct Number';
    startGuessing('Correct Number');

    document.querySelector('.corrent_number').textContent = random_number;

    document.querySelector('body').style.backgroundColor = '#60b119';

    // document.querySelector('.corrent_number').style.width = '1rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.high-score').textContent = highScore;
    }
    // when guess_number is wrong
  } else if (guess_number !== random_number) {
    if (score > 1) {
      //   document.querySelector('.Start_guessing').textContent =
      //     guess_number > random_number ? 'Too high' : 'Too low';
      startGuessing(guess_number > random_number ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.Start_guessing').textContent =
      //     'You lost the game.😂';
      startGuessing('You lost the game.😂');
      document.querySelector('.score').textContent = 0;
    }
  }
  //else if (guess_number < random_number) {
  //     // when guess is too low
  //     if (score > 1) {
  //       document.querySelector('.Start_guessing').textContent = 'Too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.Start_guessing').textContent =
  //         'You lost the game.😂';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again_button').addEventListener('click', function () {
  score = 10;
  random_number = Math.trunc(Math.random() * 10) + 1;

  //   document.querySelector('.Start_guessing').textContent = 'start guessing';
  startGuessing('start guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.corrent_number').textContent = '?';
  document.querySelector('.guess_number').value = '';
  document.querySelector('body').style.backgroundColor = 'wheat';
});
