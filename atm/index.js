#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        type: "input",
        name: "UserId",
        message: "Kindly Enter your Id"
    },
    {
        type: "number",
        name: "UserPin",
        message: "kindly Enter Your Pin"
    },
    {
        type: "list",
        name: "account_type",
        choices: ["Current", "Saving"],
        message: "Kindly Select Your Account Type",
    },
    {
        type: "list",
        name: "transaction_type",
        choices: ["Fast Cash", "withdraw"],
        message: "Select Your transaction Type",
        when(answer) {
            return answer.account_type;
        }
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 5000, 1000],
        message: "Kindly Select Your Amount ",
        when(answer) {
            return answer.transaction_type == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Kindly Enter Your Amount ",
        when(answer) {
            return answer.transaction_type == "withdraw";
        },
    }
]);
if (answer.UserId && answer.UserPin) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const enteramount = answer.amount;
    if (balance >= enteramount) {
        const remaining = balance - enteramount;
        console.log("Your Remaining Balance Is :", remaining);
    }
    else {
        console.log("Insuficient Balance");
    }
}
