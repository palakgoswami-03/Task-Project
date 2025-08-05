// function addNums(num1 = 1, num2 = 1) {
//     // console.log(num1 + num2);
//      return num1 + num2;

// const { redirectDocument } = require("react-router-dom")

// }

// console.log(addNums(10, 10));

// const addNums = (num1 = 1, num2=1) => {
//     console.log(num1 + num2);
// }
// addNums(2,5);


// const addNums = (num1 = 1, num2 =1) =>num1 + num2;
// console.log(addNums(5,5));

// const addNums = num1 => num1 + 5;
// console.log(addNums(8));

// function  Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
    // this.getBirthyear = function(){
    //     return this.dob.getFullYear();

    // }
    // this.getFullName = function(){
    //     return `${this.firstName} ${this.lastName}` ;
    // }
// }
// Person.prototype.getBirthyear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName =function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// class Person {
//     constructor(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     }
//     getBirthyear(){ 
//         return this.dob.getFullYear();

    
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }

// }

// const person1 = new Person('john','doe','4-3-1980');
// const person2 = new Person('Mary','smith','3-6-1970');

// console.log( person1.getBirthyear());
// console.log(person1.getFullName());
// console.log(person1,person2.getBirthyear());

// console.log(person2.getFullName());
// console.log(person1);


// +++++++++++++++++++++++++ arrow function ++++++++++++++

// const user = {
//     username: "palak",
//     price : 999,

// welcomeMessage : function() {
//     console.log(`${this.username},welcome to my website`)
//     console.log(this);
// }
     
// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = 'palak';
//     console.log(this.username);
// }
// chai()

// const chai = () => {
//     let username = "hitesh"
//      console.log(this.username);
// }

// chai()


// const addtwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addtwo(3,4))

// const addtwo = (num1,num2) => num1+num2
// console.log(addtwo(5,6))

// const addtwo = (num1,num2) => ({username: "palak"})
// console.log(addtwo(3,4))

// const myArray = [2,5,3,7,8]


// +++++++++++++++++++iife+++++++++++++++++++

(function chai (){
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('palak')