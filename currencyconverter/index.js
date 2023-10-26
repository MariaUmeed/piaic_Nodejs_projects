#!/usr/bin/env node
//---Currancy Converter--//
import inquirer from "inquirer";
let convertion = {
    "PKR": {
        "USD": 0.0034,
        "GBP": 0.0027,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.24,
        "PKR": 367.15,
        "GBP": 1
    },
    "USD": {
        "PKR": 296.42,
        "GBP": 0.81,
        "USD": 1
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Your Currency"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Your Convertion Currency"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your Convertion Amount"
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = convertion[from][to] * amount;
    console.log(`Your Conferstion ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid Input");
}
