'use strict';

/* 
console.log(document.querySelector('.Start_guessing').textContent);
document.querySelector('.Start_guessing').textContent = 'Correct Number';
*/
const random_number = Math.trunc(Math.random() * 10) + 1;
document.querySelector('.corrent_number').textContent = random_number;

document.querySelector('.check_button').addEventListener('click', function () {
  const guess_number = Number(document.querySelector('.guess_number').value);
  console.log(guess_number, typeof guess_number);

  if (!guess_number) {
    document.querySelector('.Start_guessing').textContent = 'no Number.';
  } else if (guess_number === random_number) {
    document.querySelector('.Start_guessing').textContent = 'Correct Number';
  } else if (guess_number > random_number) {
    document.querySelector('.Start_guessing').textContent = 'Too high';
  } else if (guess_number < random_number) {
    document.querySelector('.Start_guessing').textContent = 'Too low.';
  }
});
