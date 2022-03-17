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



  PHASE 2 - RPS UI

Positives: I noticed a lot of my code was repeating as I had the same code for each of the three player Selection buttons. I was able to refactor my code successfully from 180 lines down to 98
by using one eventListener on my button div, rather than 3 individual event listeners. This also allowed me to use the textContent of the button that was clicked as the playerSelection. 

Challenges I overcame:
Once I was ready to release this little treasure to the world, I noticed the images wouldnt load on change. I found the images were saved in github with a lowercase first letter, but with an uppercase first letter on my computer. 
I changed the letters manually to match github but my terminal wouldnt recognise the change. A quick google, and I found I have to use git mv old_filename new_filename to change them all. This was an unexpected pain but was solved quickly. 

To look into: 
Would like to dive deeper into why git in the terminal didnt recognise the changes made in the folder. 
