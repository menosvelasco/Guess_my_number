'use strict';

/* 
console.log(document.querySelector('.Start_guessing').textContent);
document.querySelector('.Start_guessing').textContent = 'Correct Number';
*/
document.querySelector('.check_button').addEventListener('click', function () {
  const guess_number = Number(document.querySelector('.guess_number').value);
  console.log(guess_number, typeof guess_number);

  if (!guess_number) {
    document.querySelector('.Start_guessing').textContent = 'no Number.';
  }
});
