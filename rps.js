/Rock Paper Scissors Script/


const selection = ["rock", "paper", "scissors"];
let playerSelection = prompt('Do you choose rock, paper, scissors').toLowerCase();
console.log(playerSelection);


function getComputerChoice() {
    return(selection[(Math.floor(Math.random() * selection.length))]);
}

let computerSelection = getComputerChoice();
console.log(computerSelection);

function compare(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        alert ("The result is a tie!");
        playerSelection = prompt('Would you like to play again? rock,paper,scissors');
        console.log(playerSelection);
        computerSelection = getComputerChoice();
        console.log(computerSelection);
    }
    if (computerSelection === "rock") {
        if (playerSelection === "scissors") {
            return "rock wins";
        } else { 
            if (playerSelection === "paper") {
                return "paper wins";
            }
        }
    }
    if (computerSelection === "paper") {
        if (playerSelection === "rock") {
            return "paper wins";
        } else {
            if (playerSelection === "scissors") {
                return "scissors wins";
            }
        }
    }
    if (computerSelection === "scissors") {
        if (playerSelection === "rock") {
            return "rock wins";
        } else {
            if (playerSelection === "paper") {
                return "scissors wins";
                }
            }
        }
    };

console.log(compare(computerSelection,playerSelection));