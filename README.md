# rock-paper-scissors
The Odin Project // Rock, Paper, Scissors Game

Goal - Phase 1:
  Create a console version of rock, paper, scissors to get the logic down. 
  First step -> write out pseudocode of expected inputs & outputs.
  
Goal - Phase 2: 
  Create a GUI with buttons & text to upgrade the playing experience. 
  
  Ideas -> I would like to have closed fist icons/ images that bounce up and down similar to how you would move your hands playing IRL.
  On the third 'bounce', both choices would be revealed. The results would then be stored in a table to visually keep track of past choices 
  & who is winning. Bounce could be added with CSS animation/ keyframes but would need to look into this further. 


Issues that came up & how I overcame them:
  For a single round - 
  Program would run but results were incorrect. Console would always log a tie even though both selections were different. Found playRound function was comparing playerSelection &
  computerSelection as functions, hence my if statement was always returning "it's a tie" as they are both functions. I wanted the if statement to compare the values returned by the functions, not the functions themselves. 
  I fixed this by adding () around the function expressions which returned the value to the corresponding variables, instead of returning the function. 

  For playing multiple rounds - 
  Code would run 5 times but only was logging results of the first round 5 times. Moved position of the loop 
  to outside of the game function.

  Console text was all the same, hard to visually differentiate where one round finished & the next started. 
  Added some styling with %c to visually break up each round. Added fun rainbow text at the end to show the winner. 