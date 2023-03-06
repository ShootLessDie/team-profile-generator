const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer))
const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer
  .prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team manager's name?",
    },
    {
      type: "input",
      name: "managerID",
      message: "What is the team manager's ID?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the team manager's email address?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the office number?",
    },
    {
        type: "loop",
        name: "selection",
        choices: ["Add an engineer", "Add an intern", "Finish building team"],
        message: "What would you like to do next?",
    }

  ])
  .then((answers) => {
console.log(answers)
  });
