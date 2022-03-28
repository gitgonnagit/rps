const selection = document.querySelectorAll('button');

selection.forEach(btn => btn.addEventListener("click", playRound));

let playerScore = 0;
let compScore = 0;

function computerPlay() {
   let x = Math.floor(Math.random() * 3);
   switch(x){
       case 0:
           x = "rock";
           break;
        case 1:
            x = "paper";
            break;
        case 2:
            x = "scissors";
            break;
   }
   return x;
}


function playRound(e, computerSelection) {
    
    
    // Computer selection
    computerSelection = computerPlay();
    console.log("Computer: " + computerSelection);

    // Player selection
    playerSelection = e.target.className;
    console.log("Player: " + playerSelection);

    // Display winner
    let winner = document.querySelector('.winner');

    // Computer Score
    let compScore = document.querySelector('.compscore').textContent;

    // Player Score
    let playerScore = document.querySelector('.playerscore').textContent;


    if(playerSelection == computerSelection){
        winner.textContent = "Tie!";
    }
    //Computer picks rock
    else if(computerSelection == "rock"){
        switch(playerSelection){
            case "paper":
                winner.textContent = 'You win! Paper beats rock!'               
                playerScore++;
                document.querySelector('.playerscore').textContent = playerScore;
                checkScore();
                break;
            case "scissors":
                winner.textContent =  "You lose! Rock beats scissors!";
                compScore++;
                document.querySelector('.compscore').textContent = compScore;
                checkScore();
                break;
        }
    }
    else if(computerSelection == "paper"){
        switch(playerSelection){
            case "rock":
                winner.textContent =  "You lose! Paper beats rock!"
                compScore++;
                document.querySelector('.compscore').textContent = compScore;
                checkScore();
                break;
            case "scissors":
                winner.textContent =  "You win! Scissors beats paper!";
                playerScore++;
                document.querySelector('.playerscore').textContent = playerScore;
                checkScore();
                break;
        }
    }
    else if (computerSelection == "scissors"){
        switch(playerSelection){
            case "rock":
                winner.textContent =  "You win! Rock beats scissors!";
                playerScore++;
                document.querySelector('.playerscore').textContent = playerScore;
                checkScore();
                break;
            case "paper":
                winner.textContent =  "You lose! Paper beats scissors!";
                compScore++;
                document.querySelector('.compscore').textContent = compScore;
                checkScore();
                break;
        }
    }
}


function checkScore() {
    // Display winner
    let winner = document.querySelector('.winner');

    // Computer Score
    let compScore = document.querySelector('.compscore').textContent;

    // Player Score
    let playerScore = document.querySelector('.playerscore').textContent;

    if(playerScore == 5){
    winner.textContent =  "GAME OVER! Player wins!";
    document.querySelector('.playerscore').textContent = 0;
    document.querySelector('.compscore').textContent = 0
    }
    else if(compScore == 5){
    winner.textContent =  "GAME OVER! Computer wins!";
    document.querySelector('.playerscore').textContent = 0;
    document.querySelector('.compscore').textContent = 0
    }
}



