// stack (primitive ) & heap (non primitive)
// let myigid = "palakgoswami"
// let another = myigid
// another = 'ps';

// console.log(myigid);
// console.log(another);

// let user = {
//     email : "pg8718809@gmail.com",
//     upi :"ps@ybl"
// }
// let usertwo = user
// usertwo.email = "pg@gmail.com"
// console.log(user.email);
// console.log(usertwo.email);

// numbers and maths 

// const score = 400
// console.log(score);
// const balance = new Number (100)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
// const otherNumber = 1123.8966
// console.log(otherNumber.toPrecision(3));
// const hundreads = 1000000
// console.log(hundreads.toLocaleString('en-IN'));

//maths
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.min(4,3,6,7));
// console.log(Math.max(3,4,5,6));


// console.log(Math.random());
// console.log(Math.random()*10 + 1);
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

// const min = 20;
// const max = 30;

// console.log(Math.floor(Math.random() * (max-min +1))+min);

//dates january 1970,


// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate); 

// let myCreateDate = new Date(2023,0,23)
// let myCreateDate = new Date(2023,0,23)
// console.log(myCreateDate.toLocaleDateString());
// let myCreateDate = new Date(2023,0,23,5,5)
// console.log(myCreateDate.toLocaleString());

// let myCreateDate = new Date("2023-01-12");
// console.log(myCreateDate.toLocaleString());
// let myCreateDate = new Date("2023-01-12");
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getFullYear());

// `${newDate.getDate()} and the time`
newDate.toLocaleString('default',{
    weekday : "long",
    
})