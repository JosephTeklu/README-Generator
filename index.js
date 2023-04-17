// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// write the questions in a file and output them one by one
const questions = ["What is the name of your project?", "Make sure your title is 3 or less words that describe your project."];

function askQuestions(){
  
  // welcome the user to the application
  console.log("\n---------------------------------")
  console.log("   Welcome to README Generator\n");

  for (let i = 0; i < questions.length; i+2) {
    inquirer
    .prompt([
      {
        type: 'input',
        message: `${questions[0]} \n ${questions[1]}`,
        name: 'project name',
      },
    ])
    .then((response) =>{
      // create the readme file and add it here
    });
  }

}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

  askQuestions();

}

// Function call to initialize app
init();
