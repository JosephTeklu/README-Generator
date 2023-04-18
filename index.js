const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// write the questions in a file and output them one by one
const questions = [];

function askQuestions(){
  const fs = require("fs");
  const readline = require("readline");
  const text = fs.createReadStream("./questions.txt")

  // populate the array with the questions from questions.txt
  const rl = readline.createInterface({
    input: text,
  })
  rl.on("line",(lineText)=> {
    questions.push(toString(lineText));
  })
  console.log("here" + questions.length)
  for (let i = 0; i < questions.length; i++) {
    console.log("here");
    console.log(questions[i] + ":" + i)
    
  }



  // // welcome the user to the application
  // console.log("\n---------------------------------")
  // console.log("   Welcome to README Generator\n");

  // for (let i = 0; i < questions.length; i+2) {
  //   inquirer
  //   .prompt([
  //     {
  //       type: 'input',
  //       message: `${questions[0]} \n ${questions[1]}`,
  //       name: 'project name',
  //     },
  //   ])
  //   .then((response) =>{
  //     // create the readme file and add it here
  //   });
  // }

}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

  askQuestions();

}

// Function call to initialize app
init();
