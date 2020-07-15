//global score for tracking purposes
let playerScore, computerScore;

//Attach buttons to JavaScript items
const playerOptions = document.querySelectorAll(".game-choice");
const playButton = document.querySelector("#play-button");
const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");
const roundResult = document.querySelector("#result");
const roundExplanation = document.querySelector("#how");
const computerThrow = document.querySelector("#computer-throw");


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


    //See if somebody Won
    if(playerScore == 5){
        roundResult.textContent = "You Win the Game!";
        roundExplanation.textContent = "Click the button below to play again!";
        playButton.classList.toggle("btn-disabled");
        playButton.disabled = false;
        for(let i = 0; i < playerOptions.length - 1; i++){
            playerOptions[i].disabled = true;
        }
    }else if(computerScore == 5){
        roundResult.textContent = "Computer Wins the Game!";
        roundExplanation.textContent = "Click the button below to try again!";
        playButton.disabled = false;
        playButton.classList.toggle("btn-disabled");
        for(let i = 0; i < playerOptions.length - 1; i++){
            playerOptions[i].disabled = true;
        }
    }
}

//Funciton to call when the page fully loads, starts the game the first time and allow replays;
function playGame(){
    playerScore = 0;
    computerScore = 0;

    for(let i = 0; i < playerOptions.length - 1; i++){
        playerOptions[i].disabled = false;
    }

    roundResult.textContent = "First One to Five Wins!";
    roundExplanation.textContent = "";
    playerScoreText.textContent = 0;
    computerScoreText.textContent = 0;
    playButton.disabled = true;
    playButton.classList.toggle("btn-disabled");
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

    playButton.addEventListener("click", () =>{
        playGame();
    })

    playGame();
}

window.addEventListener("load", start);
