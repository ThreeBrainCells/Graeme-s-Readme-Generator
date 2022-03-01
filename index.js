const inquirer = require("inquirer")
const fs = require("fs")
const genMark = require("./utils/generateMarkdown.js");
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },{
        type: "input",
        message: "What is your project's name?",
        name: "title"
    },{
        type: "list",
        message: "What license are you using?",
        name: "license",
        choices:["MIT", "Apache", "GPL", "BSD3", "No License"]
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        
        fs.writeFile('README.md', genMark.generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('README WRITTEN!'))
    })

}

// Function call to initialize app
init();


//