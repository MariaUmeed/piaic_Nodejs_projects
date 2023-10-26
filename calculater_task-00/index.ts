#!/usr/bin/env node
import { log } from "console";
import inquirer from "inquirer";

let answers: {
    firstNumber:number,
    secNumber:number,
    operators:string


}= await inquirer.prompt([{
   type: "number",
   name:"firstNumber",
   message:"Kindly Enter Your First Number"
},
{
    type:"number",
    name:"secNumber",
    message:"Kindly Enter Your First Number"

},
{

    type:"list",
    name:"operators",
    choices:["+","-","*","/"],
    message:"Select Your Operator"
}


]);

const {firstNumber,secNumber,operators}=answers;
if(firstNumber && secNumber && operators){

    let result:number=0;
    if( operators === "+" ){
    
   result= firstNumber+secNumber
}

else if ( operators === "-"){
    result= firstNumber-secNumber
    
}

if (operators === "*"){
    
    result= firstNumber*secNumber
}
if (  operators === "/"){
    result = firstNumber/secNumber
}

console.log("Your result is:", result)}

else { 
    console.log( "Kindly Enter Valid Input")
}



 


