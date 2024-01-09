/Rock Paper Scissors Script/

const selection = ["rock", "paper", "scissors"]

function getComputerChoice() {
    console.log(selection[(Math.floor(Math.random() * selection.length))]);
    }
getComputerChoice()

