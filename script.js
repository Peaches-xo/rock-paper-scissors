//JS file for Rock Paper Scissors - The Odin Project
let playerWins = 0;
let compWins = 0;

function game(){

    //this function gets user input and returns in correct case. Calls function & logs selection. 
    let playerSelection = (function(){
    let input = prompt("enter your selection:");
        input = input.slice(0,1).toUpperCase() + input.slice(1).toLowerCase();
        return input;
    })();
    console.log("You selected: " + playerSelection);

    // Step #3 - This function will randomly choose rock, paper or scissors and 
    // return that value to variable computerSelection
    let computerSelection = (function (){
        let randomNo = Math.floor(Math.random()*3);
        if (randomNo === 1){
            return "Rock";
        } else if (randomNo === 2){
            return "Paper";
        } else {
            return "Scissors";
        }
    })();
    console.log("Computer selected: " + computerSelection);


    //Step #4 - This function takes 2 parameters, then returns a string declaring the winner of the round
    function playRound (playerSelection,computerSelection){
        const scoreStyle = 'font-weight: bold; font-size: 20px;color: green';
    
        if (playerSelection === computerSelection) {
            console.log( "%c It's a tie", scoreStyle);
            

            } else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
                (playerSelection == "Paper" && computerSelection == "Rock") ||
                (playerSelection == "Scissors" && computerSelection == "Paper")) {
                    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                    playerWins = playerWins + 1;
                    console.log("%c playerWins: " + playerWins + " | " + "compWins: " + compWins, scoreStyle);
                     

            } else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
                (playerSelection == "Paper" && computerSelection == "Scissors") ||
                (playerSelection == "Scissors" && computerSelection == "Rock")){
                    console.log( `You lose! ${computerSelection} beats ${playerSelection}`);
                    compWins = compWins + 1;
                    console.log("%c playerWins: " + playerWins + " | " + "compWins: " + compWins, scoreStyle);
                    
            }      
    }
    
 
    return(playRound(playerSelection,computerSelection));
}


let i = 0;
let noOfTimes = 5;
    while (i < noOfTimes){
        game();
        i++;
    }

if (i = noOfTimes) {
if (playerWins > compWins){
    const style = 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)';
    console.log('%c You win!', style);
} else {
    const style = 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)';
    console.log('%c You lose!', style);
}

    }










