#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = ["Maheen", "Zunaira"];
async function createTodo(todo) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "Selete an operation",
            name: "select",
            choices: ["Add", "Update", "View", "Delete", "Exit"]
        });
        if (ans.select === "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add an items",
                name: "todo"
            });
            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(chalk.green(todo)));
            //console.log(todos);
        }
        if (ans.select === "Update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "Update items of the list",
                name: "todo",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add an items",
                name: "todo"
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            todos.forEach(todo => console.log(chalk.yellow(todo)));
            //console.log(todos);
        }
        if (ans.select === "View") {
            console.log("*** TO DO LIST ***");
            todos.forEach(todo => console.log(chalk.cyan(todo)));
            //console.log(todos);
        }
        if (ans.select === "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "Update items of the list",
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            todos.forEach(todo => console.log(chalk.red(todo)));
            //console.log(todos);
        }
        if (ans.select === "Exit") {
            console.log(chalk.gray.bold.italic("Exiting..."));
            process.exit(0);
        }
    } while (true);
}
createTodo(todos);
