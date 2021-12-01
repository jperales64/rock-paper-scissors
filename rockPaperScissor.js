
let userCount = 0;
let cpuCount = 0;
let computerSelection;

function computerPlay() {
    let computerSelection;
    let computerNumberSelection = Math.floor(Math.random() * 3)
    if (computerNumberSelection == 0) {
        computerSelection = "rock";
    }
    else if (computerNumberSelection == 1) {
        computerSelection = "paper";
    }
    else {
        computerSelection = "scissors";
    }

    return computerSelection;
}

function round(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        return playerSelectedrock(computerSelection);
    }

    else if (playerSelection == "paper") {
        return playerSelectedPaper(computerSelection);
    }

    else if (playerSelection == "scissors"){
        return playerSelectedScissors(computerSelection);
    }
}

function playerSelectedrock(computerSelection) {

    if (computerSelection == "rock") {

        return "TIE";
    }

    else if (computerSelection == "paper") {

        cpuCount++;
        return "LOSS";
    }

    else if (computerSelection == "scissors") {

        userCount++;
        return "WIN";
    }

    else{
        alert("wtf rock");
    }
}

function playerSelectedPaper(computerSelection) {

    if (computerSelection == "rock") {
        userCount++;
        return "WIN";
    }

    else if (computerSelection == "paper") {

        return "TIE";
    }

    else if (computerSelection == "scissors"){
        cpuCount++;
        return "LOSS";
    }
    else{
        alert("wtf paper");
    }
}

function playerSelectedScissors(computerSelection) {

    if (computerSelection == "rock") {
        cpuCount++;
        return "LOSS";
    }

    else if (computerSelection == "paper") {
        userCount++;
        return "WIN";
    }

    else if (computerSelection == "scissors") {

        return "TIE";
    }

    else{
        alert("wtf scissors");
    }
}
const userScore = document.querySelector('.user-score');
const cpuScore = document.querySelector('.cpu-score');
const gameInfo = document.querySelector('.game-info');
const buttons = document.querySelectorAll('.button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        computerSelection = computerPlay();
        gameInfo.innerHTML = `You chose ${button.id}! The Computer chose ${computerSelection}! <br>The result is a ${round(button.id, computerSelection)}!`;
        userScore.innerHTML = userCount;
        cpuScore.innerHTML = cpuCount;

    });
});



