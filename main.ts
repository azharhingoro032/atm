#! /usr/bin/env node

import inquirer from "inquirer";

let mybalance = 10000; //dollar
let mypin = 1234;

let pinanswer = await inquirer.prompt({
    name: "pin",
    message: "enter your pin",
    type: "number"
});

if (pinanswer.pin === mypin) { 
    console.log("correct pin code!!!");

    let operationans = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fastcash"]
        }
    ]);

    if (operationans.operation === "withdraw") {
        let amountans = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);

        if (amountans.amount > mybalance) {
            console.log("Insufficient funds. Your balance is: " + mybalance);
        } else {
            mybalance -= amountans.amount;
            console.log("your remaining balance is: " + mybalance);
        }
    } else if (operationans.operation === "check balance") {
        console.log("Your balance is: " + mybalance);
    } else if (operationans.operation === "fastcash") {
        let fastCashAmount = await inquirer.prompt([
            {
                name: "fastcashAmount",
                message: "Please select a fastcash amount",
                type: "list",
                choices: [2000, 5000, 10000]
            }
        ]);
        
        if (fastCashAmount.fastcashAmount > mybalance) {
            console.log("Insufficient funds. Your balance is: " + mybalance);
        } else {
            mybalance -= fastCashAmount.fastcashAmount;
            console.log("Fastcash withdrawn. Your remaining balance is: " + mybalance);
        }
    }
} else {
    console.log("incorrect pin number");
}

    

