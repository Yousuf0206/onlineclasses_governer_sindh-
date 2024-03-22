#! /usr/bin/env node

import inquirer from "inquirer"

const answer =  await inquirer.prompt([{
    name :  "num1",
    type : "number", 
    message : "Enter  First number:"},

{ 
    name : "num2",
    type : "number", 
    message: " Enter Second number: "},

{ 
    name : "operator",
    type : "list",
    message : "Select any operator to perform command",
    choices : ["addition" , "subtraction", "multiplication" , "division", "percentage"], 
}])


if (answer.operator ===  "addition"){
console.log (answer.num1+answer.num2)}

else if (answer.operator ===  "subtraction"){
console.log (answer.num1-answer.num2)}

else if (answer.operator ===  "multiplication"){
console.log (answer.num1*answer.num2)}

else if (answer.operator ===  "division"){
console.log (answer.num1/answer.num2)}

else if (answer.operator ===  "percentage"){
console.log (answer.num1/(answer.num2)*100 )
}