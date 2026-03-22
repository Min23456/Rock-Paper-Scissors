let playerScore = 0;
let computerScore =0;
function playGame(playerChoice){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];
    let result = "";
    if (computerChoice === playerChoice) {
        result = "It was a Stalemate!"
    } else if ((computerChoice==="rock" && playerChoice==="paper")||(computerChoice==="paper" && playerChoice==="scissors")||(computerChoice==="scissors" && playerChoice==="rock")){
        result = "It is with profound admiration that I declare you have not merely succeeded, but have absolutely prevailed, carrying the day with unparalleled mastery and distinction." 
        playerScore = playerScore+1;
        

        
    }  else {
        result = "It appears that your strategic endeavors have culminated in an inescapable impasse, signifying that your human cognitive efforts have been thoroughly eclipsed by the superior analytical processing and relentless computational efficiency of the opposing artificial intelligence. Thus it is with absolute certainty that I must inform you that the final position is wholly untenable, marking a decisive victory for the machine and the conclusive end of this engagement, as you have succumbed to a flawlessly calculated, unyielding, and superior digital adversary. (You lost Btw)"
        computerScore = computerScore+1;
    }

    document.getElementById("player-choice").textContent = playerChoice;
    document.getElementById("computer-choice").textContent = computerChoice;
    document.getElementById("result-text").textContent = result;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;



}




function resetGame(){
    playerScore = 0;
    computerScore = 0;
    document.getElementById("player-choice").textContent = "-";
    document.getElementById("computer-choice").textContent = "-";
    document.getElementById("result-text").textContent = "Start the game!";
    document.getElementById("player-score").textContent = "0";
    document.getElementById("computer-score").textContent = "0";
}

