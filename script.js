let round = 0;
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

//get rock, paper, scissors buttons initialized
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) =>
    {
        if ((playerScore < 5) && (computerScore < 5)) game(e.target.id);
    });
});

const results = document.querySelector('#results');

const userScoreText = document.querySelector('#user-score');
const computerScoreText = document.querySelector('#computer-score');

const leftImg = document.querySelector('#left-img');
const rightImg = document.querySelector('#right-img');

const leftImgDiv = document.querySelector('#left-img-div');
const rightImgDiv = document.querySelector('#right-img-div');

const rightImgText = document.querySelector('#right-img-text');
const leftImgText = document.querySelector('#left-img-text');

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3 + 1);
    let compChoice;
    if (randomNum == 1) {
        compChoice = 'Rock';
    }
    else if (randomNum == 2) {
        compChoice = 'Paper';
    }
    else {
        compChoice = 'Scissors';
    }
    rightImg.src = "./images/" + compChoice + ".png";
    rightImgText.textContent = compChoice;
    return compChoice;
}


function singleRound(playerSelection, computerSelection) {
    //if player and computer pick same object
    if (playerSelection == computerSelection) {
        rightImgText.style.color = 'white';
        leftImgText.style.color = 'white';
        leftImgDiv.style.borderColor = 'white';
        rightImgDiv.style.borderColor = 'white';
        return 0;
    //if player picks the winning object
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") || 
               (playerSelection == "Scissors" && computerSelection == "Paper") ||
               (playerSelection == "Paper" && computerSelection == "Rock")) {
                leftImgText.style.color = '0cdd04';
                leftImgDiv.style.borderColor = '0cdd04';
                rightImgText.style.color = 'red'; 
                rightImgDiv.style.borderColor = 'red';
                return 1;
    //if player picks losing object
    } else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
               (playerSelection == "Scissors" && computerSelection == "Rock") ||
               (playerSelection == "Paper" && computerSelection == "Scissors")) {
                leftImgText.style.color = 'red'
                leftImgDiv.style.borderColor = 'red'
                rightImgText.style.color = '0cdd04';
                rightImgDiv.style.borderColor = '0cdd04'
                return -1;
               }
                 
}



function game(playerSelection) {
    // while (round < 5) {
        leftImg.src = "./images/" + playerSelection + ".png";
        leftImgText.textContent = playerSelection;
        round++;
        computerSelection = getComputerChoice();
        result = singleRound(playerSelection, computerSelection);
        if (result == 1) {
            playerScore++;
            results.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        } else if (result == 0) {
            tieScore++;
            results.textContent = `Tie. You both chose ${playerSelection}`;
        } else if (result == -1) {
            computerScore++;
            results.textContent = `You lose. ${computerSelection} beats ${playerSelection}`;
        }
        userScoreText.textContent = playerScore + "/" + round;
        computerScoreText.textContent = computerScore + "/" + round;
        if (playerScore >= 5 || computerScore >= 5) 
        {
            results.textContent = `Winner: ${(playerScore > computerScore) ? "You" : "Computer"}`;
            results.style.color = (playerScore > computerScore) ? '#0cdd04' : 'red';
            results.style.fontSize = '3em';
            results.style.marginTop = '2em';
        }
        else {

    results.textContent = `You won: ${playerScore}/${round}, the computer won ${computerScore}/${round}, and there were ${tieScore} ties.`;
        }
    }
//}

// game();
