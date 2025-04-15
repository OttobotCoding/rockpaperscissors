let playerScore = 0;
let computerScore = 0;

function getHumanChoice() {
    let playerSelection = window.prompt("Do you choose Rock, Paper or Scissors?");
    return playerSelection.toLowerCase();
};

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return computerSelection = options[Math.floor(Math.random() * options.length)];
};

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "scissors"
        || playerChoice === "paper" && computerChoice === "rock"
        || playerChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        console.log("You Win! " + playerChoice + " beats " + computerChoice);
    
    }   else if (playerChoice === "rock" && computerChoice === "paper"
        || playerChoice === "paper" && computerChoice === "scissors"
        || playerChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("You Lose! " + computerChoice + " beats " + playerChoice);
    
    }   else {
        console.log("Its a Draw!!");
    };
    
    if (playerScore > 5 || computerScore > 5) {
        playRound(playerChoice, computerChoice);
    } else if (playerScore === 5) {
        console.log("Congratulations, You Won");
    } else if (computerScore === 5) {
        console.log("You lost it all, pal!");
    }

};

// function playGame() {
//     if (playerScore === 5) {
//         console.log("Congratulations, you have beat the Computer!")
//     } else if (computerScore === 5) {
//         console.log("Wow, you are really bad at RPS, try again!");
//     } else {
//         playRound(playerChoice, computerChoice);
//     };
// };

const playerChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log(playerChoice);
console.log(computerChoice);

playRound(playerChoice, computerChoice);


// return user;
    
// console.log("Great, you picked " + user);