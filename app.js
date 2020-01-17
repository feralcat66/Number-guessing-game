import compareNumbers from './test/compare-number.js';




const button = document.getElementById('submitButton');
const highOrlow = document.getElementById('highOrlow');
const winner = document.getElementById('winOrlose');
const remainingGuesses = document.getElementById('remainingGuesses');
const input = document.getElementById ('guess');
const imageOne = document.getElementById('imgOne');

const random = Math.floor(Math.random() * 50);
let remaining = 4;



button.addEventListener('click', () => {
    const guessNumber = Number(input.value);   
    const result = compareNumbers(random, guessNumber); 

    console.log(random);

    if (result === 0) {
        highOrlow.textContent = 'Right on the Money!';
        winner.textContent = 'You Guessed the Right Number!'; 
        imageOne.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHgEwAH1fyEN3Qk1m57e-bdMsGnMcWeIJ8UFraeTxTpNEMX6zb';

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
        document.getElementById('submitButton').disabled = true;
        winner.textContent = 'You are loser!';
        imageOne.src = 'https://i.pinimg.com/236x/d9/94/bc/d994bced120a29bbb93d241896faeefe.jpg';

    }
    
});



