function getComputerChoice(){
    var choice = "Rock";
    var randomNumber = (Math.floor(Math.random() * 3));
    switch(randomNumber) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scrissors";
            break;
        default:
            console.log("Random Machine Broke :D");
    }
    return choice.toLowerCase();
}

function getPlayerSelection(){
    var choice = prompt("Please select your choice:\nRock\nPaper\nScrissors").toLowerCase();
   return choice;
}

var playerScore = 0;
var computerScore = 0;


function game(){
    

        var computerSelection = getComputerChoice();
        var playerSelection = getPlayerSelection();

        switch(computerSelection){
            case "rock":
                if(playerSelection == "rock"){
                    console.log("tie");
                }
                else if(playerSelection == "paper"){
                    console.log("You won! The computer chose Rock");
                    playerScore++;
                }
                else if(playerSelection == "scrissors"){
                    console.log("You lost! The computer chose Rock");
                    computerScore++;
                }
                break;
        
            case "paper":
                if(playerSelection == "rock"){
                    console.log("You lost! The computer chose Paper");
                    computerScore++;
                }
                else if(playerSelection == "paper"){
                    console.log("tie");
                }
                else if(playerSelection == "scrissors"){
                    console.log("You won! The computer chose Paper");
                    playerScore++;
                }
                break;
        
            case "scrissors":
                if(playerSelection == "rock"){
                    console.log("You won! The computer chose Scrissors");
                    playerScore++;
                }
                else if(playerSelection == "paper"){
                    console.log("You lost! The computer chose Scrissors");
                    computerScore++;
                }
                else if(playerSelection == "scrissors"){
                    console.log("tie");
                }
                break;
        }
        console.log("Player Score is: " + playerScore + " and Computer Score is: " + computerScore);
        if(playerScore == 5)
        {
            console.log("Congrats! you won!");
            playerScore = 0;
            computerScore = 0;
        }
        else if (computerScore == 5){
            console.log("boohoo! you lost!");
            playerScore = 0;
            computerScore = 0;
        }
        game();
    }


game();