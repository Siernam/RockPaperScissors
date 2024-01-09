/Rock Paper Scissors Script/

const selection = ["rock", "paper", "scissors"];
let playerSelection = prompt('Do you choose rock, paper, scissors');

function getComputerChoice() {
    console.log(selection[(Math.floor(Math.random() * selection.length))]);
    }
getComputerChoice();

let computerSelection = getComputerChoice();