const inquirer = require('inquirer');
const fs = require('fs');

class CLI {
    constructor() {

    }

    run() {
        return inquirer
            .prompt([
                {
                type: 'input',
                message: 'What would you like your logo to say. Logos must be between 1 - 3 letters long.',
                name: 'logoLetters',
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
                choices: ['Square', 'Circle', 'Star', 'Triangle'],
                }
                
            ])
            .then((data) => {
                console.log(data);
                if (data.logoShape === 'Square') {
                    Square.render(data.logoLetters, data.logoColor);
                };
                if (data.logoShape === 'Circle') {
                    Circle.render(data.logoLetters, data.logoColor)
                };
                if (data.logoShape === 'Star') {
                    Star.render(data.logoLetters, data.logoColor)
                };
                if (data.logoShape === 'Triangle') {
                    Triangle.render(data.logoLetters, data.logoColor)
                };

            })
    }
}