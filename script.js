//JS file for Rock Paper Scissors - The Odin Project

function computerPlay(){
    // randomly return rock, paper or scissors
    let randomNo = Math.floor(Math.random()*3);
    if (randomNo === 1){
        return "rock";
    } else if (randomNo === 2){
        return "paper";
    } else {
        return "scissors";
    }
}

computerPlay();

