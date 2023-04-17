// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

var inquirer = require('inquirer');
inquirer
  .prompt([{
    type: "input",
    message: 'what is your name',
    name: "name",
  }])
  .then((answers) => {console.log(answers)})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
