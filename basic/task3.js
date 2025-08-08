// const { log } = require('console');
// const { resolve } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let history =[];
function grnumber(number,callback) {
  
  let num = [];
  let spins = 10;
  let count = 0;

    function spin(){

      let randomNumber = Math.floor(Math.random() * 10) + 1;
      console.log("randomNumber:" ,randomNumber);
      num.push(randomNumber);
      count++;

      if(count < spins){
        setTimeout(spin, 1000);
      } else {
        if(num.includes(Number(number))){
          console.log("win");
          history.push("win");
          
          
        } else {
          console.log("lose");
          history.push("lose");
        }
        if(history.length > 5){
          history.shift();
        }
        console.log(history);
        if(typeof callback ==="function"){
        callback();
        }
      }
    }

    console.log("spinning..");
    spin()
    

}

// for(let i= 0; i< 5; i++){
function asking(){
 rl.question('guess number between 1 to 10 : ', (answer) => {
  console.log(`entered number : ${answer}`);
  grnumber(answer,()=>{
    rl.question('you want to play again', (result) => {
  if(result == "yes"){
   asking(); 
  }
  else{
    console.log("thank u for playing");
    console.log(history);
    rl.close();
  }
  });
  });
  });
}
 asking();


