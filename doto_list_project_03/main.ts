#!/usr/bin/env node
// Project ---03-- ToDo List//

import inquirer from "inquirer";
import { todo } from "node:test";
import { types } from "util";

// todos_list comes in this array then go to push in user_todo object key //



let todos_list:string[]=[];
let loop =true

while(loop){let answers :
    
     {
        user_toDo:string,
        add_more:boolean
    }
    = await inquirer.prompt([{

    type:"input",
    name:"user_toDo",
    message:" What you want to add in your todo list"


},
{
    type:"confirm",
    name:"add_more",
    message:"do you want to add more ",
    default:false
}])


const {user_toDo,add_more } = answers;

console.log(answers);

loop = add_more

if( user_toDo ){
todos_list.push(user_toDo)
    
}
else{

    console.log (  "Kindle Enter Valid ToDo")
}
}
if(todos_list.length >0 ){
    
    
    console.log("Your Todo List is here:")


    todos_list.forEach(doit => {

    console.log(doit)

  });}

   
else{
    console.log("No todo list found")
}
