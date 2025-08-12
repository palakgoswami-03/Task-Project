import readline from "readline"
import { stdin as input, stdout as output } from 'node:process';
import { resolve } from "node:path";

let rl = readline.createInterface({
    input,
    output
})

const GueesNum = await new Promise(resolve =>  rl.question("Guess a Number Between 1 To 10 : ", resolve))

let randomNumStore = [];

let history = [];

let randomNumber;

async function wheelSpin(num){
    try {
        if(GuesNum){
            let spins = 10;
            let count = 0;
            function spin(){
                
                randomNumber = Math.floor(Math.random() * 10) + 1;
                console.log("Random Number:", randomNumber);
                if(randomNumber)
                randomNumStore.push(randomNumber);
                count++;
                
                if(count < spins){
                    setTimeout(spin, 1000)
                } else {
                    console.log("last Element Of The Array :", randomNumStore[9]);
                    if(randomNumStore.includes(Number(randomNumber))){
                        console.log("win");
                        history.push("win");
                    } else {
                        console.log("loos");
                        history.push("loos")          
                    } 
                } 
                rl.close();
            }
            console.log("Spinning...");
            spin();
        } else {
            console.log("Please Enter The Number Other Wise I can not Spinnning...!");
                return
            }
        } catch (error) {
           console.log(error.massage);       
        }    
    }
wheelSpin(GueesNum)