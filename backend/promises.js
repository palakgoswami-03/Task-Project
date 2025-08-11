// fetch('https://something.com').then().catch().finally()
// const promiseOne = new Promise(function(resolve,reject)
//  {
// do an async task
// DB calls,cryptography,network
// setTimeout(function(){
//     console.log('Async task is completed');
//     resolve()
// }, 1000)
// })
// promiseOne.then(function(){
//     console.log("promise consummed")
// })

// new Promise(function(resolve, reject){
    // setTimeout(function(){
        // console.log("async task2");
        // resolve()
    // }, 1000)
// }).then(function(){
    // console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//         resolve({username: "chai", email: "chai@gmail.com"})

//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);

// })

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "palak", password: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username    
}).then((username) =>{
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("the promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "javascript", password: "123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})
async function consumepromiseFive(){
     try {
        const response =await promiseFive
     console.log(response)
     }catch(error){
        console.log(error);
     }

}
consumepromiseFive()

// async function getAllUsers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     // console.log(response);
//     const data = await response.json()
//     console.log(data);
//     }catch(error){
//         console.log("E:",error);
//     } 
// }
// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error) => console.log(error))

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error))