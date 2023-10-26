#!/usr/bin/env node
// ---WORD COUNTER ---//
import inquirer from "inquirer";

const result:{
    Sentence:string
} = await inquirer.prompt([
{
    type:"input",
    name:"Sentence",
    message:"Add Words Here "
}])

const word = result.Sentence.trim().split(" ");
console.log( `Your Sentence Word Count Is ${word.length}`)
