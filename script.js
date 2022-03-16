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

const p_status = document.querySelector(".p_status");
const p_playerScore = document.querySelector(".player_score");
const p_compScore = document.querySelector(".comp_score");

    //Step #4 - This function takes 2 parameters, then returns a string declaring the winner of the round
    function playRound (playerSelection,computerSelection){

        if (playerSelection === computerSelection) {
            p_status.textContent = "It's a tie!";

            } else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
                (playerSelection == "Paper" && computerSelection == "Rock") ||
                (playerSelection == "Scissors" && computerSelection == "Paper")) {

                    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                    p_status.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
                    playerWins = playerWins + 1;
                    p_playerScore.textContent = playerWins;
                  
            } else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
                (playerSelection == "Paper" && computerSelection == "Scissors") ||
                (playerSelection == "Scissors" && computerSelection == "Rock")){

                    console.log( `You lose! ${computerSelection} beats ${playerSelection}`);
                    p_status.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
                    compWins = compWins + 1;
                    p_compScore.textContent = compWins;
            }      

            if (playerWins == 5|| compWins == 5){
                declareWinner();
            }
    }

function declareWinner(){
    if (playerWins > compWins){
        p_status.textContent = `First to 5! You win!`;
    } else {
        p_status.textContent = `Computer was first to 5... you lose!`;
    }

    playerWins = 0;
    compWins = 0;
    p_playerScore.textContent = 0;
    p_compScore.textContent = 0;
}










