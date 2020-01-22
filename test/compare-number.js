export default function compareNumbers(random, guessNumber) {
    if (random === guessNumber) return 0;
    if (random > guessNumber) return -1;
    if (random < guessNumber) return 1;  
}

