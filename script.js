'use strict';

/* 
console.log(document.querySelector('.Start_guessing').textContent);
document.querySelector('.Start_guessing').textContent = 'Correct Number';
*/
const random_number = Math.trunc(Math.random() * 10) + 1;

let score = 10;

document.querySelector('.corrent_number').textContent = random_number;

document.querySelector('.check_button').addEventListener('click', function () {
  const guess_number = Number(document.querySelector('.guess_number').value);
  console.log(guess_number, typeof guess_number);

  if (!guess_number) {
    document.querySelector('.Start_guessing').textContent = 'no Number.';
  } else if (guess_number === random_number) {
    document.querySelector('.Start_guessing').textContent = 'Correct Number';
  } else if (guess_number > random_number) {
    if (score > 1) {
      document.querySelector('.Start_guessing').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.Start_guessing').textContent =
        'You lost the game.😂';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess_number < random_number) {
    if (score > 1) {
      document.querySelector('.Start_guessing').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.Start_guessing').textContent =
        'You lost the game.😂';
      document.querySelector('.score').textContent = 0;
    }
  }
});
