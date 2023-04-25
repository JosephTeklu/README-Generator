const inquirer = require('inquirer');
const fs = require("fs");
const markdown = require("./utils/generateMarkdown.js");
const generateMarkdown = require('./utils/generateMarkdown');

// filled up array with objects to send to inquirer 
var questions = [
{type: "confirm", message:"Welcome to README Generator\n\n", name:"greeting"},
{type: "input", message:"What is the title of your project?\nMake sure your title is 3 or less words that describe your project.\n\n", name:"title"},
{type: "input", message:"Now lets work on the description.\nProvide a short paragraph explaning the what, why, and how of your project.\nWhat was your motivation? Why did you build this project? What problem does it solve? What did you learn?\n\n", name:"description"},
{type: "input", message:"Installation\nWhat are the steps required to install your project?\nProvide a step-by-step description of how to get the development environment running.\n\n", name:"installation"},
{type: "input", message:"Usage\nProvide small instructions and examples for use.\n\n", name:"usage"},
{type: "input", message:"Contributing Guidlines\nIf you would like other developers to contribute write a short description on how to help.\n\n", name:"contributing"},
{type: "input", message:"Tests\nProvide examples on how to run tests here.\n\n", name:"tests"},
{type: "input", message:"Questions\nProvide your github username as well as your email for users to contat you about your project.\n\n", name:"questions"},
{type:"list", message:"License\nA high-quality README includes a license. This lets other developers know what they can and cannot do with your project.\nPick one of the options below and a license will be created for you.\n\n", name:"license",
choices:["Apache License 2.0","MIT","IBM", "Perl"]},
{type:"confirm", message:"Would you like to add a table of contents, this will help your users easily access what they need.\n\n", name:"toc"},
// choices:["Description","Installation","Usage","Contributing Guidlines","Tests","Questions","License"]},
{type:"input", message:"What would you like to name this file?\n\n", name:"fileName"}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName,data, (err) =>
    err? console.error(err) : console.log(data)
  );
}

// TODO: Create a function to initialize app
function init() {
  // sending inquirer the array and it will output each question one by one
  inquirer.prompt(questions) 
  .then((response)=>{
    // send the name of the file as well as the responses
    writeToFile(response.fileName, generateMarkdown({...response}))
  });
}

init();
 