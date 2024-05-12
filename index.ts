#! /usr/bin/env node

//step1: import programs:

import inquirer from "inquirer";
import {differenceInSeconds} from  "date-fns"

//step:2 make user input

const response = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: "enter amount of seconds!",

    validate: (input)=> {
        if(isNaN(input)){
            return "please enter a valid number!"
        }else if (input > 60 ){
            return "seconds must be in 60!"
        }else { 
            return true;
        }
    }
    }
    
);

//step: make variable and functions:

let input = response.userInput

function startTime(val: number){
    const initTime = new Date().setSeconds(new Date().getSeconds() + val);
    const IntervalTime = new Date(initTime);
    setInterval((()=>{
        const currentTime = new Date()
        const timeDiffrence = differenceInSeconds(IntervalTime, currentTime);

        if (timeDiffrence <= 0){
            console.log("Timer expired");
            process.exit();
            
        }
        const min = Math.floor((timeDiffrence%(3600*24))/3600);
        const sec = Math.floor(timeDiffrence%60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
        
    }),1000)

}
startTime(input)




