let username =prompt("enter username :");
let taskname = prompt('enter taskname :')
let startdate = prompt("enter startdate :");
let enddate =prompt("enter enddate :");



let user = {
username:username,
taskname:taskname,
startdate:startdate,
enddate:enddate
    
}

// console.log( "user entered" , user);


function createUser(user){
        if (user.startdate ==''){
        user.startdate = new Date().toLocaleDateString();
            }
   if(user.enddate ==''){
        user.enddate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toLocaleDateString();
    }
    
    return user;
}
// createUser(user)
// console.log(createuser)

 var usergot = createUser(user)
 console.log(usergot)

  function readuser(){
     if (username == ''){
        console.log("empty");
     }
     else{
         console.log(user.username)
     }
     if (taskname ==''){
     console.log("empty");
     }
     else
     {
         console.log(user.taskname)
     }
     console.log(user.startdate);
     console.log(user.enddate);
 }
  readuser()
  
 
 function updateuser(user){
     user.username =prompt("enter username for update :");
     user.taskname = prompt("enter taskname for update :");
     user.startdate = prompt("enter startdate for update:");
     user.enddate =prompt("enter enddate for update :");
     
    if (user.username ==''){
        console.log(user.username)
            }
    else{
        console.log(readuser(username))
    }
   if(user.taskname ==''){
       console.log(user.taskname)
   }
    if (user.startdate ==''){
        user.startdate = new Date().toLocaleDateString();
            }
   if(user.enddate ==''){
        user.enddate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toLocaleDateString();
    } 
    //  console.log(user)
 }
 updateuser(user)
 
 function deluser(user){
     delete user[username];
     delete user[taskname];
     delete user[startdate];
     delete user[enddate];
 }
 deluser(user)
 
 
 