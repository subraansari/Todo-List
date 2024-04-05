#! /usr/bin/env node

import inquirer from "inquirer";
let todoList : string[] = [];
let condition : boolean = true;

while(condition === true)
{
                //options   
let option  = await inquirer.prompt(
    [
        {
            name: "userOption",
            type: "list",
            message: "Select an option",
            choices: ["Add","Remove"]
        },
        
    ]
);
                    //Add   
     if(option.userOption === "Add") {
        let answer = await inquirer.prompt([{
            name: "userAnswer",
            type: "input",
            message: "Write Something that you want to Add in your todo list"
        }])
        if(answer.userAnswer !== "") {
            todoList.push(answer.userAnswer);
            console.log(todoList);
        } else {
            console.log("Please write Something to Add in the todo List");
        }
     }
                    //remove
        else if(option.userOption === "Remove") {
            let removeChoice = await inquirer.prompt([{
                name:"removeItem" ,
                type: "list",
                message: "Select item to remove",
                choices: todoList
            }]);

            let indexToRemove = todoList.indexOf(removeChoice.removeItem);

            if(indexToRemove >= 0){
                todoList.splice(indexToRemove, 1);
                console.log("You Removed : ", removeChoice.removeItem);
                console.log(todoList);
            }
        }
                    //Confirmation
    let userAnswer = await inquirer.prompt([{
        name: "Selection",
        type: "confirm",
        message: "\nDo You Want to Continue?",
        default: true
    }])
    if(userAnswer.Selection === false) {
        condition = false;
    }
}
console.log(`Thanks For using todo list`);