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


function playRound(playerSelection, computerSelection) {
    
    //Computer selection
    computerSelection = computerPlay();
    console.log("Computer: " + computerSelection);

    //Player input
    while(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
    playerSelection = window.prompt("Enter rock, paper, or scissors").toLowerCase();
    }
    console.log("Player: " + playerSelection);


    if(playerSelection == computerSelection){
        return "Tie!";
    }
    //Computer picks rock
    else if(computerSelection == "rock"){
        switch(playerSelection){
            case "paper":
                return "You win! Paper beats rock!"
                break;
            case "scissors":
                return "You lose! Rock beats scissors!";
                break;
        }
    }
    else if(computerSelection == "paper"){
        switch(playerSelection){
            case "rock":
                return "You lose! Paper beats rock!"
                break;
            case "scissors":
                return "You win! Scissors beats paper!";
                break;
        }
    }
    else if (computerSelection == "scissors"){
        switch(playerSelection){
            case "rock":
                return "You win! Rock beats scissors!";
                break;
            case "paper":
                return "You lose! Paper beats scissors!";
                break;
        }
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        console.log(playRound());
    }
}

console.log(game());