const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");

// questions array
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "Please enter your project name",
  },

  {
    type: "input",
    name: "description",
    message: "Please enter a description",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter usage instruction",
  },
  {
    type: "list",
    name: "license",
    choices: [
      "MIT License",
      "Apache License 2.0",
      "Mozilla Public License 2.0",
      "GNU General Public License v3.0",
    ],
    message: "Please select the License you are using ",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please enter any contributing data",
  },
  {
    type: "input",
    name: "tests",
    message: "please provide instruction to run test",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide an email",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Please enter your GitHub username",
  },
];
