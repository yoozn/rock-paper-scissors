function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3 + 1);

    if (randomNum == 1) {
        let compChoice = 'Rock';
    }
    else if (randomNum == 2) {
        let compChoice = 'Paper';
    }
    else if (randomNum == 3) {
        let compChoice = 'Scissors';
    }
    return compChoice;
}


function singleRound(playerSelection, computerSelection) {
    //if player and computer pick same object
    if (playerSelection == computerSelection) {
        return 0;
    //if player picks the winning object
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") || 
               (playerSelection == "Scissors" && computerSelection == "Paper") ||
               (playerSelection == "Paper" && computerSelection == "Rock")) {
                return 1;
    //if player picks losing object
    } else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
               (playerSelection == "Scissors" && computerSelection == "Rock") ||
               (playerSelection == "Paper" && computerSelection == "Scissors")) {
                return -1;
               }
                 
}

function game() {
    let round = 0;
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    while (round < 5) {
        round++;
        playerSelection = prompt("Rock, paper or scissors?");
        computerSelection = getComputerChoice();
        //convert selections to lowercase
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
        //capitalize first letter of selections
        playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
        computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1);
        result = singleRound(playerSelection, computerSelection);
        if (result == 1) {
            playerScore++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        } else if (result == 0) {
            tieScore++;
            console.log(`Tie. You both chose ${playerSelection}`);
        } else if (result == -1) {
            computerScore++;
            console.log(`You lose. ${computerSelection} beats ${playerSelection}`);
        }
    }
    console.log(`You won: ${playerScore}/${round}, the computer won ${computerScore}/${round}, and there were ${tieScore} ties.`);
}

game();
