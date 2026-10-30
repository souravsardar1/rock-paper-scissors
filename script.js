

let humanScore = 0;
let computerScore = 0;


const buttons = document.querySelectorAll("button");

const roundResult = document.querySelector("#round-result");
const humanScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const winnerDisplay = document.querySelector("#winner");



function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}



function playRound(humanChoice, computerChoice) {

    let result = "";

    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    }

    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;

        result = `You win! ${humanChoice} beats ${computerChoice}`;
    }

    else {
        computerScore++;

        result = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

  
    roundResult.textContent = result;

  
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;


    if (humanScore === 5) {
        winnerDisplay.textContent = "You win the game! 🎉";
        disableButtons();
    }

    else if (computerScore === 5) {
        winnerDisplay.textContent = "Computer wins the game! 🤖";
        disableButtons();
    }
}



function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}


buttons.forEach(button => {

    button.addEventListener("click", () => {

        const humanSelection = button.id;
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

    });

});
