#!/usr/bin/env node

//--Quiz Aap--//
import chalk from "chalk";
import inquirer from "inquirer";

const apiLink: string =
  "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple";

let fetchData = async (data: string) => {
  try {
    let fetchQuiz: any = await fetch(data);
    let res = await fetchQuiz.json();
    return res.results; // Assuming the API response has a 'results' property
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error}`);
  }
};

(async () => {
  try {
    let score: number = 0;
    let data = await fetchData(apiLink);

    let name = await inquirer.prompt({
      type: "input",
      name: "fname",
      message: "What Is Your Name",
    });

    for (let i = 0; i < data.length; i++) {
      let answers = [...data[i].incorrect_answers, data[i].correct_answer];
      let ans = await inquirer.prompt({
        type: "list",
        name: "quiz",
        message: data[i].question,
        choices: answers.map((val: any) => val),
      });
      if (ans.quiz === data[i].correct_answer) {
        ++score;
      }
    }

    console.log(`Hello, ${name.fname}! Your score is: ${score}`);
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();
