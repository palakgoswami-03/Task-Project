// const user = {
//     username : "palak",
//     logincount:8,
//     signedIn:true,

//     getuserDetails: function(){
//         console.log("got user details from database")
//         console.log(`username : ${this.username}`);
//         console.log(this);
//     } 


// }
// console.log(user.username);
// console.log(user.getuserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()

// function User(username,loginCount,isLoggedIn){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn
//     this.greeting = function(){
//         console.log(`welcome ${this.username}`)
//     }
//     return this   
// }
// const userOne =new  User("hitesh",12,true)
// const userTwo = new User("chaiAurcode",11,false)   
// console.log(userOne.constructor );
// console.log(userTwo);

// function multipleBy5(num){
//     return num*5
// }
// multipleBy5.power = 2
// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

// function createUser(username,score){
//     this.username = username
//     this.score = score
// }
// createUser.prototype.increment = function(){
//     this.score++
// }
// createUser.prototype.printMe = function(){
//     console.log(`Price is ${this.score}`);
// }
// const chai = new createUser("chai",25)
// const tea = new createUser("tea",250)

// chai.printMe()


// let myName = "palak"
// console.log(myName.truelength);

// let myHeros = ["thor","spiderman"]

// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower:function(){
//         console.log(`spidy power is ${this.spiderman}`);
//     }
// }
// Object.prototype.hitesh = function(){
//     console.log(`hitesh is present in all objects`)

// }
// Array.prototype.heyHitesh = function(){
//     console.log(`hitesh says hello`);
// }
// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// `heroPower.heyHitesh()

// const User = {
//     name: "chai",
//     email: "chai@gmail.com"
// }

// const Teacher = {
//     makevideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport ={
//     makeAssignment: 'JS assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }
// Teacher__proto__ = User
//  Object.setPrototypeOf(TeachingSupport,Teacher)

//  let anotherUsername = "chaiAurcode"

//  String.prototype.trueLength = function(){
//     console.log(`${this}`);
    // console.log(`${this.name}`);
//     console.log(`True length is: ${this.trim().length}`);
//  }
//  anotherUsername.trueLength()
//  "palak".trueLength()
//  "icetea".trueLength()


//  function SetUsername(username){
//     this.username = username
//     console.log("called");
//  }

//  function createUser(username,email,password){
//     SetUsername.call(this, username)
//     this.email = email
//     this.password = password
//  }
//  const chai = new createUser("chai","chai@fb.com","123")
//  console.log(chai);

// ES6

// class User{
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new User("chai","chai@gmail.com","123")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// bts

// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password
// }
// User.prototype.encryptPassword=function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUsername = function(){
//         return `${this.username.toUpperCase()}`
//     }
// const tea = new User("tea","tea@gmail.com","123")
// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());


// class User{
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`USERNAME IS ${this.username}`);
//     }
// }

// class Teacher extends User{
//     constructor(username,email,password){
//         super(username)
//         this.email = email
//         this.password = password
//     }
//     addCourse(){
//         console.log(`A new course was added by ${this.username} `);
//     }
// }
// const chai =new Teacher("chai","chai@teacher.com","123")

// chai.addCourse()
// const masalaChai = new User("masalaChai")
// masalaChai.logMe()
// console.log(chai instanceof Teacher);

// class User {
//     constructor(username){
//         this.username = username
//     }
//     logMe(){
//         console.log(`Username: ${this.username}`);
//     }
//      static createId(){
//         return `123`
//     }
// }
// const hitesh = new User("hitesh")
// //  console.log(hitesh.createId())

// class Teacher extends User{
//     constructor(username,email){
//         super(username)
//         this.email = email
//     }
// }
// const iphone = new Teacher("iphone","i@phone.com")
// console.log(iphone.createId());

//+++++++++++++Mathpi.js+++++++++++++
 const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);
//  console.log(Math.PI);

// Math.PI = 5
// console.log(Math.PI);
const chai ={
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderchai: function(){
        console.log("chai nahi bani")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    // writable: false,
    enumerable : false

})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for(let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){


    console.log(`${key} : ${value}`);
    }
}