
// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const readmeTemplate = require('./Utils/generateMarkdown')



const readmePromptFunc = () => {
return inquirer
.prompt([
    {
    type: 'input',
    name: 'project',
    message: 'What is the name of your project?',
    validate: dataInput => {
        if (dataInput){
            return true
        } else {
            console.log('Please enter project name')
            return false
        }
    }
},
{
    type: 'input',
    name: 'Intro',
    message: 'Provide a description of your project:',
    validate: dataInput => {
        if (dataInput){
            return true
        } else {
            console.log('You must enter an description/introduction to your project')
            return false
        }
    }
},
{
    type: 'input',
    name: 'install',
    message: 'What is required for installation?'
},
{
    type: 'checkbox',
    name: 'tech',
    message: 'Select technologies that were used',
    choices: ['JavaScript', 'JQuery', 'Bootstrap', 'Node', 'HTML', 'CSS', 'other']
},
{
    type: 'input',
    name: 'collab',
    message: 'Who collanorated on this project with you?'
},
{
    type: 'list',
    name: 'license',
    message: 'licence: (MIT)',
    choices: ['MIT', 'Apache', 'GNU', 'Mozilla', 'Unlicense']
}
])
.then(readmeData => {
fs.writeFile('./README.md', readmeTemplate(readmeData) , err => {
 if (err) throw err;

    console.log('Your README file has been created, navigate to your new README.md in your directory to check it out!')
})
})
}
readmePromptFunc()
