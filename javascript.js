function getHumanChoice() {
    let user = window.prompt("Do you choose Rock, Paper or Scissors?");
    return user
}

console.log(getHumanChoice());

function getComputerChoice(max) {
    return Math.floor(Math.random() * max);
}

let random = getComputerChoice(3);

if (random === 0) {
    console.log("Rock");
} else if (random === 1) {
    console.log("Paper");
} else {
    console.log("Scissors");
}
    


// return user;
    
// console.log("Great, you picked " + user);