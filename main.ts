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
      name: "addMore",
      type: "confirm",
      message: "Do you want to add more:",
      default: "false",
    },
  ]);
  todos.push(askadd.add);
  condition = askadd.addMore;
  //console.log(todos);
  let dcut = await inquirer.prompt([
    {
      name: "delete",
      type: "confirm",
      message: "Do you delete this item",
      default:"false",
    },]);
    if (dcut.delete==true){
    todos.pop();
  }
    console.log(todos);
    
}
