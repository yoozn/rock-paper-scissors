function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 3 + 1);

    if (randomNum == 1) {
        compChoice = 'Rock';
    }
    else if (randomNum == 2) {
        compChoice = 'Paper';
    }
    else if (randomNum == 3) {
        compChoice = 'Scissors';
    }
    return compChoice;
}


function singleRound(playerSelection, computerSelection) {
    //convert selections to lowercase
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    //capitalize first letter of selections
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1);

    if (playerSelection == computerSelection) {
        console.log("Its a tie! You both chose " + playerSelection);
        return 0;
    } else if (playerSelection == 'Rock') {
        if (computerSelection == 'Paper') {
            console.log("You lose! Paper beats Rock!");
            return -1;
        }
        else {
            console.log("You win! Rock beats Scissors!");
            return 1;
        }
    } else if (playerSelection == 'Paper') {
        if (computerSelection == 'Scissors') {
            console.log("You lose! Scissors beats Paper!");
            return -1;
        } else {
            console.log("You win! Paper beats Rock!");
            return 1;
        }
    } else {
        if (computerSelection == 'Rock') {
            console.log("You lose! Rock beats Scissors!");
            return -1;
        } else {
            console.log("You win! Scissors beats Paper!");
            return 1;
        }
    }
}

function game() {
    round = 1;
    playerScore = 0;
    computerScore = 0;
    tieScore = 0;
    while (round < 6) {
        playerSelection = prompt("Rock, paper or scissors?");
        computerSelection = getComputerChoice();
        result = singleRound(playerSelection, computerSelection);
        if (result == 1) {
            playerScore++;
        } else if (result == 0) {
            tieScore++;
        } else if (result == -1) {
            computerScore++;
        }
        round++;
    }
    console.log(`You won: ${playerScore}/${round}, the computer won ${computerScore}/${round}, and there were ${tieScore} ties.`);
}

game();
