
let humanScore = 0;
let computerScore = 0;



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






function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors:");
}





function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;

        console.log(
            `You win! ${humanChoice} beats ${computerChoice}`
        );
    } 
    else {
        computerScore++;

        console.log(
            `You lose! ${computerChoice} beats ${humanChoice}`
        );
    }

    
}



for (let i = 1; i <= 5; i++) {
    console.log(`\n--- Round ${i} ---`);
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    if (!humanSelection) {
        console.log("No choice made, skipping round.");
        continue;
    }

    console.log(`You chose: ${humanSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    playRound(humanSelection, computerSelection);
}

console.log(`\nFinal Score - You: ${humanScore}, Computer: ${computerScore}`);



