const Manager = require('./lib/Manager')
const inquirer = require('inquirer');



function start() {
    inquirer.prompt([
    {
        type:"input",
        name:"name",
        message:"what is your name?",
    }
    ])
    .then(function (answers) {
        var newManager = new Manager(
            answers.name
        ) 
        console.log
    })

}

start()