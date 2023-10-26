#!/usr/bin/env node
// Guessing Game Project//
// 1st step import Inruirer//


import inquirer from "inquirer"; 


const  systemGuess = Math.floor( Math.random()*10);


const answer  = await inquirer.prompt([{

      type :"number",
      name : "userGuess",
      message:"What is your Guess /In between 1 to 10"
      

      
}]);


const {userGuess}= answer;
console.log(userGuess, "userGuess","But Answer Is", systemGuess)

if ( userGuess === systemGuess){
    console.log ("Yeaaa your answer is right \n you win")
}
else{
    console.log("Please try again")
}