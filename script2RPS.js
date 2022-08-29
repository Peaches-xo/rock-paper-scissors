//original attempt script.js for RPS - Version 1
let computerSelection = 
function computerPlay(){
// Step #3 - This function will randomly choose rock, paper or scissors and return that value to variable computerSelection
let randomNo = Math.floor(Math.random()*3);
if (randomNo === 1){
    return "Rock";
} else if (randomNo === 2){
    return "Paper";
} else {
    return "Scissors";
}
};

function game(){

let playerSelection = prompt("Enter your selection:");
playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();

console.log ("playerSelection:" + playerSelection); // adds player selection to console

for (let i=0; i < 5; i++){
let result = playRound(playerSelection,computerSelection);
console.log(result);
game();
}


function playRound(playerSelection, computerSelection){
    //this function compares players selection to computers selection and returns the results
    switch(playerSelection){
        case "Rock" :{
            if (computerSelection === "Rock"){
                return("Computer Selected Rock - Its a tie!");
            } else if (computerSelection ==="Paper"){
                return("Computer Selected Paper - You lose!");
            } else {
                return("Computer Selected Scissors - You win!");
            }
            break;
        }
        case "Scissors":{
            if (computerSelection === "Rock"){
                return("Computer Selected Rock - You lose!");
            } else if (computerSelection ==="Paper"){
                return("Computer Selected Paper - You win!");
            } else {
                return("Computer Selected Scissors - Its a tie!");
            }
            break;
        } 
        case "Paper":{
            if (computerSelection === "Rock"){
                return("Computer Selected Rock - You win!");
            } else if (computerSelection ==="Paper"){
                return("Computer Selected Paper - It's a tie");
            } else {
                return("Computer Selected Scissors - You lose!");
            }
            break;
        }
        default: {
            return("Not a valid weapon - please try again!");
            break;
        }
    }
}

}

game();

