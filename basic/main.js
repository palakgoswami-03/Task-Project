// console.log("hello world");
// console.error("this is an error")
// console.warn("this is an error ")

// let vare 
// let age = 50;
// age = 50;
// console.log(age);

const score = 20;
console.log(score);

//data type 

// const name ='palak';
// const year = 39;
// const rating = 4.5;
// const iscool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof name );
// console.log(typeof age);
// console.log(typeof rating );
// console.log( typeof iscool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// concatination

// const name= 'john';
// const age = 20;

// console.log('My name is ' + name + ' and I am ' + age);
// const hello =`my name is ${name} and I am ${age}` ;
// console.log(hello);

// const s = 'Hello world';
// console.log(s.length);
// console.log(s.toLowerCase());
// console.log(s.toUpperCase());
// console.log(s.substring(0,5).toUpperCase());
// console.log(s.split(' '));

// const p = 'technology, computer, it, code';
// console.log(p.split(', '));

// const number = new Array(1,2,3,);
// console.log(number)

// const fruits = ['apples', 'oranges','pears',1,2];
// fruits[3] = 'graps';
// fruits.push('mangos');
// fruits.unshift('papaya');
// fruits.pop(2);
// console.log(fruits);
// console.log(Array.isArray(fruits));

// const person = {
//     firstName: 'john',
//     lastname: 'doe',
//     age: 30,
//     hobbies: ['music','movies','sports'],
//     address: {
//         street: '50 main st',
//         city: 'boston',
//         state : 'MA',
//     }
// }
// console.log(person.address); 
// const { firstName, lastname, address: { city }} = person;
// console.log(city);
// person.email = 'psg@gmail.com';
// console.log(person);

const todos = [
    {
        id: 1,
        text: 'take out trash',
        iscompleted: true
    },
    {
        id: 2,
        text: 'meeting with bosss',
        iscompleted: true
    },
    {
        id: 3,
        text: 'dentist appt',
        iscompleted: false
    }
];
console.log(todos);
console.log(todos[1].text);
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

const user = {
    name: 'palak',
    age: 1,
}
user.age=25
console.log(user)
