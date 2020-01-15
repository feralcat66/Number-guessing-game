import compareNumbers from './test/compare-number.js';




const button = document.getElementById('submitButton');
const highOrlow = document.getElementById('highOrlow');
const winner = document.getElementById('winOrlose');
const remainingGuesses = document.getElementById('remainingGuesses');
const input = document.getElementById ('guess')

const random = Math.floor(Math.random()*50);
let remaining = 4;



button.addEventListener('click', () => {
    const guessNumber = Number(input.value);   
    const result = compareNumbers(random, guessNumber);
    if (result === 0) {
        highOrlow.textContent = 'Right on the Money!';
        winner.textContent = 'You Guessed the Right Number!'; 
    } else if (result === -1) {
        highOrlow.textContent = 'Too Low';
        winner.textContent = 'Try Again';
        remaining -= 1;
        remainingGuesses.textContent = remaining;
    } else if (result === 1) {
        highOrlow.textContent = 'Too High';
        winner.textContent = 'Try Again';
        remaining -= 1;
        remainingGuesses.textContent = remaining;
    } if (remaining === 0) {
        document.getElementById('submitButton').disabled = true
    }
    
});



