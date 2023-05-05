let maxNumber = parseInt(prompt('Enter the maximum number:'));

while (!maxNumber) {
    maxNumber = parseInt(prompt('Invalid number! Please, enter the maximum number: (Press "q if you want to quit the game")'));
}

const targetNumber = Math.floor(Math.random() * maxNumber) + 1;

let guessNumber = parseInt(prompt('Enter your first guess number:'));
let attempts = 1;

while (parseInt(guessNumber) !== targetNumber) {
    if (guessNumber === 'q') {
        break;
    } else {
        guessNumber = parseInt(guessNumber);
        attempts++;
    }

    if (guessNumber > targetNumber) {
        guessNumber = prompt('The number is too high! Enter a new guess number:');
        attempts++;
    } else if (guessNumber < targetNumber) {
        guessNumber = prompt('The number is too low! Enter a new guess number:');
        attempts++;
    }
}

if (guessNumber === 'q') {
    console.log('Ok, next time. Bye');
} else {
    console.log('Congrats');
    console.log(`It took you ${attempts} guesses to get the number!`);
}