// loading up libraries needed for file minuplitation and user input
const inquirer = require('inquirer');
const fs = require("fs");

// array for questions to ask the user
var questions = [];
// array for collecting user's answers
var answers = [];

function askQuestions(){
  // populate the questions array from the text file
  questions = fs.readFileSync('./questions.txt').toString().split(":");

  // loop through the questions array and ask the user what they world like in their README.md
  for (i in questions) 
  {
    // output for greeting
    if(i == 0)
    {
      inquirer
      .prompt([
        {
          type: 'confirm',
          message: `${questions[i]}`,
          name: 'response',
        },
      ])
    }
    if(i == 1 | i == 2 | i == 3 | i == 4 | i == 5 | i == 6 | i == 7)
    {
      inquirer
      .prompt([
        {
          type: 'input',
          message: `${questions[i]}`,
          name: 'response'
        },
      ])  
      .then((response)=>
        writeToFile(response)
      );
    }
  }

}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  answers.push(data);

}

// TODO: Create a function to initialize app
function init() {

  askQuestions();

}

// Function call to initialize app
init();
