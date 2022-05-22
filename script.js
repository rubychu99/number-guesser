let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(userGuess, computerGuess, targetNumber) {
    if (getAbsoluteDistance(userGuess, targetNumber) < getAbsoluteDistance(computerGuess, targetNumber) || getAbsoluteDistance(userGuess, targetNumber) == 0) {
        return true; //user wins
    } else {
        return false; //computer wins
    }
}

function updateScore(winner) {
    if (winner === 'human' ) {
        humanScore ++;
    } else if (winner === 'computer') {
        computerScore ++;
    }
}

function advanceRound() {
    currentRoundNumber ++;
}

function getAbsoluteDistance(guessNumber, targetNumber) {
  return Math.abs(guessNumber - targetNumber);
}


  

//updateScore('human');
//console.log(humanScore);

//updateScore('computer');
//console.log(humanScore);