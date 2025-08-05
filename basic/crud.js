const username =prompt("enter username");
const task = prompt('enter task');
const startdate = prompt("enter startdate");
const enddate =prompt("enter enddate");


const user = {}
user.name = username;
user.t1 = task;
user.sd = startdate;
user.ed = enddate;
console.log(user);

// function obj(user){
//     return username,task,startdate,enddate;
// }
// obj();
// console.log(obj);


