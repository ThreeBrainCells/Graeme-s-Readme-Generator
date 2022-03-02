const inquirer = require("inquirer")
const fs = require("fs")
const genMark = require("./utils/generateMarkdown.js");
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name",
        default: "Your Name Here"
    },{
        type: "input",
        message: "What is your project's name?",
        name: "title",
        default: "Project Title"
    },{
        type: "input",
        message: "Would you like to describe your project?",
        name: "description",
        default: "Describe Project Here"
    },{
        type: "input",
        message: "How do i install this project?",
        name: "install",
        default: "run npm i"
    },{
        name: "input",
        message: "How do i use this project?",
        name: "usage",
        default: "Usage Instruction Here"
    },{
        type: "input",
        message: "How should i test this project?",
        name: "test",
        default: "Just run the program"
    },{
        type: "input",
        message: "Who all contributed to this project?",
        name: "contributors",
        default: "names"
    },{
        type: "input",
        message: "Please provide a link to your GITHUB page.",
        name: "github",
        default: "https://github.com/YourNameHere"
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