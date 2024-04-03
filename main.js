#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let askadd = await inquirer.prompt([
        {
            name: "add",
            type: "input",
            message: "What you want to add in your Todos?",
        },
        {
            name: "delete",
            type: "confirm",
            message: "Do you want to delete this item:",
            default: "false",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more item in your todos?:",
            default: "false",
        }
    ]);
    todos.push(askadd.add);
    condition = askadd.addMore;
    if (askadd.delete == true) { // DELETE OPTION IS AVAILABLE
        todos.pop();
        console.log(todos);
    }
    else {
        console.log(todos);
    }
}
let question = await inquirer.prompt([
    {
        name: "questionask",
        type: "list",
        message: "Select one of this:",
        choices: ["Read your todos", "Adding in your todos"], //READ YOUR TODO AND ADD SOMETHING IN YOUR TODO
    },
]);
if (question.questionask == "Read your todos") {
    console.log("Your todos list is this:" + (todos));
}
let condition1 = true;
if (question.questionask == "Adding in your todos") {
    while (condition1) {
        let adding = await inquirer.prompt([
            {
                name: "addingtask",
                type: "input",
                message: "What you want to add in your todos:",
            },
            {
                name: "addMore1",
                type: "confirm",
                message: "Do you want to add more item in your todos?:",
                default: "false",
            },
        ]);
        todos.push(adding.addingtask);
        console.log(todos);
        condition1 = adding.addMore1;
    }
}
