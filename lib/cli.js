const inquirer = require('inquirer');
const fs = require('fs');
const writeToFile = require('./writeFile');
const Logo = require('./logo.js');

class CLI {
    constructor() {

    }

    run() {
        return inquirer
            .prompt([
                {
                type: 'input',
                message: 'What would you like your logo to say. Logos must be between 1 - 3 letters long.',
                name: 'logoText',
                },
                {
                type: 'input',
                message: 'What color would you like your logo?',
                name: 'logoColor',
                },
                {
                type: 'list',
                message: 'What shape would you like your logo?',
                name: 'logoShape',
                choices: ['Square', 'Circle', 'Triangle'],
                }
                
            ])
            .then((data) => {
                let newData = new Logo(data.logoShape, data.logoColor, data.logoText);
                writeToFile('logo.svg', newData.render());
                console.log(data);
                
            })
    }
}

module.exports = CLI