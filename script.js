function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 3 + 1);

    if (randomNum == 1) {
        compChoice = 'rock';
    }
    else if (randomNum == 2) {
        compChoice = 'paper';
    }
    else if (randomNum == 3) {
        compChoice = 'scissors';
    }
    return compChoice;
}


