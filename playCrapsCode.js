//plays craps, a game in which you roll two dice and the outcome determines whether you win or lose. 
var wins = 0
//sets up the variable "wins" which counts the amount of Craps wins the user has and must be outside of the function so that it doesn't reset
var losses = 0
//sets up the variable "losses" which counts the amount of Craps losses the user has
var ties = 0
//sets up the variable "ties" which counts the amount of Craps ties the user has
function playCraps(){
//creates the function "playCraps"
    console.log("playCraps() started...")
    //marks in the console the start of the function
    var die1 = 6 * Math.random();
    //sets a new variable "die1" to a random number between 0 and 1 and multiplies it by 6
    var roundDie1 = Math.ceil(die1);
    //sets another new variable "roundDie1" to die1 rounded up
    console.log("The rounded number is: " + roundDie1);
    //adds the first die roll to the console log
    document.getElementById("die1Res").innerHTML = "Die 1: " + roundDie1
    //adds the result of the first die roll to the main page
    var die2 = 6 * Math.random();
    //recreates the setup of die1 as die2
    var roundDie2 = Math.ceil(die2);
    //rerounds die2 up to make the roundDie2 variable
    console.log("The rounded number is: " + roundDie2);
    //adds the result of the second die roll to the console log
    document.getElementById("die2Res").innerHTML = "Die 2: " + roundDie2
    //adds the result of the second die roll to the main page
    var sum = roundDie1 + roundDie2;
    //adds both die rolls together into a new variable "sum"
    console.log("The sum of the two dice rolls is: " + sum);
    //adds the sum of both rolls to the console log
    document.getElementById("sumRes").innerHTML = "Sum: " + sum
    //writes the sum onto the main page
    if(sum == 7 || sum == 11){
    //sets up the parameters for the loss condition in an if statement, transferring to the else if and eventually the else statement if the condition isn't met
        document.getElementById("crapsRes").innerHTML = "You lose... Try again!"
        //informs the user that they've lost, writing over the "crapsRes" section of the main page
        losses = losses + 1
        //adds 1 to the losses variable, keeping a tally of the user's losses
        document.getElementById("crapsLosses").innerHTML = "Craps Losses: " + losses
        //updates the user's loss counter on the main page
    } else if(roundDie1 == roundDie2 && roundDie1 % 2 == 0){
        document.getElementById("crapsRes").innerHTML = "You win! One more time?"
        //informs the user that they've won, writing over the "crapsRes" section of the main page
        wins = wins + 1
        //adds 1 to the wins variable, keeping a tally of the user's wins
        document.getElementById("crapsWins").innerHTML = "Craps Wins: " + wins
        //updates the user's win counter on the main page
    } else {
        document.getElementById("crapsRes").innerHTML = "Tied, give it another shot!"
        //informs the user that they've tied, writing over the "crapsRes" section of the main page
        ties = ties + 1
        //adds 1 to the ties variable, keeping a tally of the user's ties
        document.getElementById("crapsTies").innerHTML = "Craps Ties: " + ties
        //updates the user's tie counter on the main page
    }
    //ends the ifelse setup
}
//ends the function's code