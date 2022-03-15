//JS file for Rock Paper Scissors index.html - The Odin Project

// Create three buttons, one for each selection. 
const rockBtn = document.querySelector("#btn_rock");
const paperBtn = document.querySelector("#btn_paper");
const scissorsBtn = document.querySelector("#btn_scissors");
const img_left = document.querySelector(".img_left");
const img_right = document.querySelector(".img_right");


//Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked.
rockBtn.addEventListener('click', function() { 
    img_left.classList.add('anim'); //add anim class to img_left 
    img_right.classList.add('anim'); //add anim class to img_right

    let computerSelection = (function(){ //get compSelection
        let randomNo = Math.floor(Math.random()*3);
        if (randomNo === 1){
            return "Rock";
        } else if (randomNo === 2){
            return "Paper";
        } else {
            return "Scissors";
        }
    })();

    img_left.onanimationend = function(){  //when animation ends...
        img_left.setAttribute('src', "../rock-paper-scissors/RockL.png"); //...change L img to selected 
        img_right.setAttribute('src',`../rock-paper-scissors/${computerSelection}R.png`); //change R img
        img_left.classList.remove('anim'); //..remove anim 
        img_right.classList.remove('anim');
        playRound("Rock",computerSelection); //call round
    }
    img_left.setAttribute('src', "../rock-paper-scissors/RockL.png"); //reset img back to rock
    img_right.setAttribute('src', "../rock-paper-scissors/RockR.png");
}); 

paperBtn.addEventListener('click', function() { 
    img_left.classList.add('anim'); //add anim class to img_left 
    img_right.classList.add('anim'); //add anim class to img_right

    let computerSelection = (function(){
        let randomNo = Math.floor(Math.random()*3);
        if (randomNo === 1){
            return "Rock";
        } else if (randomNo === 2){
            return "Paper";
        } else {
            return "Scissors";
        }
    })();

    img_left.onanimationend = function(){ //when animation ends..
        img_left.setAttribute('src', "../rock-paper-scissors/PaperL.png");
        img_right.setAttribute('src',`../rock-paper-scissors/${computerSelection}R.png`); //change R img
        img_left.classList.remove('anim');
        img_right.classList.remove('anim');
        playRound("Paper",computerSelection);
    }
    img_left.setAttribute('src', "../rock-paper-scissors/rockL.png");
    img_right.setAttribute('src', "../rock-paper-scissors/RockR.png");
 }); 

scissorsBtn.addEventListener('click', function() {
    img_left.classList.add('anim'); //add anim class to img_left 
    img_right.classList.add('anim'); //add anim class to img_right

    let computerSelection = (function(){
        let randomNo = Math.floor(Math.random()*3);
        if (randomNo === 1){
            return "Rock";
        } else if (randomNo === 2){
            return "Paper";
        } else {
            return "Scissors";
        }
    })();

    img_left.onanimationend = function(){ //when animation ends... 
        img_left.setAttribute('src', "../rock-paper-scissors/scissorsL.png");
        img_right.setAttribute('src',`../rock-paper-scissors/${computerSelection}R.png`);
        img_left.classList.remove('anim');
        img_right.classList.remove('anim');
        playRound("Scissors",computerSelection); 
    }
    img_left.setAttribute('src', "../rock-paper-scissors/rockL.png");
    img_right.setAttribute('src', "../rock-paper-scissors/RockR.png");

}); 

let playerWins = 0;
let compWins = 0;

// function game(){

    const p_status = document.querySelector(".p_status");
    const p_playerScore = document.querySelector(".player_score");
    const p_compScore = document.querySelector(".comp_score");

    //Step #4 - This function takes 2 parameters, then returns a string declaring the winner of the round
    function playRound (playerSelection,computerSelection){
        const scoreStyle = 'font-weight: bold; font-size: 20px;color: green';
        console.log("Computer selected: " + computerSelection);

        if (playerSelection === computerSelection) {
            p_status.textContent = "It's a tie!";

            } else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
                (playerSelection == "Paper" && computerSelection == "Rock") ||
                (playerSelection == "Scissors" && computerSelection == "Paper")) {

                    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                    p_status.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
                    playerWins = playerWins + 1;
                    p_playerScore.textContent = playerWins;
                    console.log("%c playerWins: " + playerWins + " | " + "compWins: " + compWins, scoreStyle);
                     

            } else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
                (playerSelection == "Paper" && computerSelection == "Scissors") ||
                (playerSelection == "Scissors" && computerSelection == "Rock")){

                    console.log( `You lose! ${computerSelection} beats ${playerSelection}`);
                    p_status.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
                    compWins = compWins + 1;
                    p_compScore.textContent = compWins;
                    console.log("%c playerWins: " + playerWins + " | " + "compWins: " + compWins, scoreStyle);     
            }      

            if (playerWins == 5|| compWins == 5){
                declareWinner();
            }
    }
//     return(playRound(playerSelection,computerSelection));
// }


// let i = 0;
// let noOfTimes = 5;
//     while (i < noOfTimes){
//         game();
//         i++;
//     }

function declareWinner(){
    if (playerWins > compWins){
        const style = 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)';
        console.log('%c You win!', style);
        p_status.textContent = `First to 5! You win!`;
        playerWins = 0;
        compWins = 0;
        p_playerScore.textContent = 0;
        p_compScore.textContent = 0;
    } else {
        const style = 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)';
        console.log('%c You lose!', style);
        p_status.textContent = `Computer was first to 5... you lose!`;
        playerWins = 0;
        compWins = 0;
        p_playerScore.textContent = 0;
        p_compScore.textContent = 0;
    }
}










