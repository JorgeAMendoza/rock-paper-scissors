//global score for tracking purposes
let playerScore, computerScore;

//Attach buttons to JavaScript items
const playerOptions = document.querySelectorAll(".game-choice");
const playButton = document.querySelector("button");
const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");
const roundResult = document.querySelector("#result");
const roundExplanation = document.querySelector("#how");


//Function used to get computer's move.
function computerMove(){
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

//Play the rock,paper,scissors game
function playRound(playerSelection, computerSelection = computerMove()){

    if(playerSelection == computerSelection){
        roundExplanation.textContent = "Throw Again";
        roundResult.textContent = "Draw!"

    }else if(playerSelection == "rock" && computerSelection == "scissors"||
             playerSelection == "paper" && computerSelection == "rock"||
             playerSelection == "scissors" && computerSelection == "paper"){

        playerScoreText.textContent = ++playerScore;
        roundResult.textContent = "Player Wins!"
        roundExplanation.textContent = `${playerSelection} beats ${computerSelection}`;
    } else{
        computerScoreText.textContent = ++computerScore;
        roundResult.textContent = "Computer Wins!"
        roundExplanation.textContent = `${computerSelection} beats ${playerSelection}`;
    }
}

//Funciton to call when the script fully loads, plays the game 5 times. 
function playGame(){
    playerScore = 0;
    computerScore = 0;
    roundResult.textContent = "first one to 5 wins!";
    playerScoreText.textContent = 0;
    computerScoreText.textContent = 0;
}

//initalize all event listenrs and begin playing the game.
function start(){
    //Event Listeners for Player Options
    playerOptions[0].addEventListener("click", ()=>{
        playRound("rock");
    })
    playerOptions[1].addEventListener("click", ()=>{
        playRound("paper");
    })
    playerOptions[2].addEventListener("click", ()=>{
        playRound("scissors");
    })

    playButton

    playGame();
}

window.addEventListener("load", start);
