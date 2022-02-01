//JS file for Rock Paper Scissors - The Odin Project

let playerSelection = prompt("Enter your selection:");
playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();
console.log (playerSelection);
 
 


let computerSelection = function computerPlay(){
    // This function will randomly return rock, paper or scissors and put that value to computerSelection
    let randomNo = Math.floor(Math.random()*3);
    if (randomNo === 1){
        return "Rock";
    } else if (randomNo === 2){
        return "Paper";
    } else {
        return "Scissors";
    };
}


    function playRound(playerSelection, computerSelection){
        //this function compares players selection to computers selection and returns the results
        switch(playerSelection){
            case "Rock" :{
                if (computerSelection === "Rock"){
                    console.log("Computer Selected Rock - Its a tie!");
                } else if (computerSelection ==="Paper"){
                    console.log("Computer Selected Paper - You lose!");
                } else {
                    console.log("Computer Selected Scissors - You win!");
                }
                break;
            }
            case "Scissors":{
                if (computerSelection === "Rock"){
                    console.log("Computer Selected Rock - You lose!");
                } else if (computerSelection ==="Paper"){
                    console.log("Computer Selected Paper - You win!");
                } else {
                    console.log("Computer Selected Scissors - Its a tie!");
                }
                break;
            } 
            case "Paper":{
                if (computerSelection === "Rock"){
                    console.log("Computer Selected Rock - You win!");
                } else if (computerSelection ==="Paper"){
                    console.log("Computer Selected Paper - It's a tie");
                } else {
                    console.log("Computer Selected Scissors - You lose!");
                }
                break;
            }
            default: {
                console.log("Not a valid weapon - please try again!");
                break;
            }
        }
    }
    
playRound(playerSelection, computerSelection);
