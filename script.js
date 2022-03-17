//JS file for Rock Paper Scissors index.html - The Odin Project
const img_left = document.querySelector(".img_left");
const img_right = document.querySelector(".img_right");

let playerSelection;
let computerSelection;

const btnDiv = document.querySelector(".btn_div"); //select btn div
btnDiv.addEventListener('click',function(e){ //give me which btn was clicked 
    playerSelection = e.target.textContent; //& put in playerSelection

    addAnim();
    computerSelection = (getCompSelection());

    img_left.onanimationend = function(){  
        showHands(playerSelection, computerSelection); 
        removeAnim();
        playRound(playerSelection,computerSelection); 
    }
   resetHands();
});

function addAnim(){ //adds class .anim to imgs
    img_left.classList.add('anim'); 
    img_right.classList.add('anim'); 
}

function removeAnim(){ //removes class .anim from imgs
    img_left.classList.remove('anim'); 
    img_right.classList.remove('anim');
}

function getCompSelection(){
        let randomNo = Math.floor(Math.random()*3);
        if (randomNo === 1){
            return "Rock";
        } else if (randomNo === 2){
            return "Paper";
        } else {
            return "Scissors";
        }
}

function showHands(playerSelection, computerSelection){ //shows hands with selection
    img_left.setAttribute('src', `../rock-paper-scissors/${playerSelection}L.png`); 
    img_right.setAttribute('src',`../rock-paper-scissors/${computerSelection}R.png`); 
}

function resetHands(){ //reset imgs back to rock for next round
    img_left.setAttribute('src', "../rock-paper-scissors/RockL.png"); 
    img_right.setAttribute('src', "../rock-paper-scissors/RockR.png");
}

let playerWins = 0;
let compWins = 0;

const p_status = document.querySelector(".p_status");
const p_playerScore = document.querySelector(".player_score");
const p_compScore = document.querySelector(".comp_score");

function playRound (playerSelection,computerSelection){
    if (playerSelection === computerSelection) {
        p_status.textContent = "It's a tie!";

        } else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
            (playerSelection == "Paper" && computerSelection == "Rock") ||
            (playerSelection == "Scissors" && computerSelection == "Paper")) {

            p_status.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            playerWins = playerWins + 1;
            p_playerScore.textContent = playerWins;
                  
        } else if ((playerSelection == "Rock" && computerSelection == "Paper") ||
            (playerSelection == "Paper" && computerSelection == "Scissors") ||
            (playerSelection == "Scissors" && computerSelection == "Rock")){

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
        p_status.textContent = `Your score: ${playerWins}. Comp Score ${compWins}. You win!`;
    } else {
        p_status.textContent = `Your score: ${playerWins}. Comp Score ${compWins}. You lose!`;
    }

    playerWins = 0;
    compWins = 0;
    p_playerScore.textContent = 0;
    p_compScore.textContent = 0;
}










