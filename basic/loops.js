// for loop

// for(let i=0;i<10;i++)
// {
    // console.log(i);
//     console.log(`for loop number: ${i}`)
// }

// while loop
// let i = 0; 
// while(i < 10) {
//     console.log(`while loop number : ${i}`);
//     i++;

// }
// const todos = [
//     {
//         id: 1,
//         text: 'take out trash',
//         iscompleted: true
//     },
//     {
//         id: 2,
//         text: 'meeting with bosss',
//         iscompleted: true
//     },
//     {
//         id: 3,
//         text: 'dentist appt',
//         iscompleted: false
//     }
// ];
//  for(let i = 0; i < todos.length; i++){
//     console.log(todos[i].text);
//  }
//  for (let todo of todos){
//     console.log(todo.id,todo.text);
//  }

// todos.forEach(function(todo){
//     console.log(todo.text);
// });
//  const todoText = todos.map(function(todo){
//     return todo.text;

//  });
//  console.log(todoText);

// const todoCompleted = todos.filter(function(todo) 
// {
// return todo.iscompleted === true;
// }).map(function(todo) {
//     return todo.text;
// })

// console.log(todoCompleted);

// +++foreach+++++++

// const coding = ["js","ruby","python","java"]

// coding.forEach(function(val){
//     console.log(val)
// })

// coding.forEach( (item) =>{
//     console.log(item);
// })

// function printme (item){
//     console.log(item);
// }
// coding.forEach(printme)

// coding.forEach((item,index,arr)=> {
//     console.log(index);

// })

// const mycoding =[
//     {
//     languagename:"javascript",
//     languageFilename:"js"
//     },
//     {
//     languagename:"java",
//     languageFilename:"java"
//     },
//     {
//     languagename:"python",
//     languageFilename:"py"
//     }
// ]
// mycoding.forEach((item)=>{
// console.log(item.languagename);
// })
// const coding = ["js","ruby","python","java"]

//  const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })
// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num) =>{ 
//      return num > 4})
// console.log(newNums);

// const newNums =  []
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

// const  books = [
//     {title: 'book one', genre: 'fiction',
//          publish: 1981, edition: 2004},
//      {title: 'book two', genre: 'non-fiction',
//          publish: 1991, edition: 2008},
//           {title: 'book three', genre: 'history',
//          publish: 1992, edition: 2009},
//           {title: 'book four', genre: 'science',
//          publish: 1985, edition: 2000},
//           {title: 'book five', genre: 'fiction',
//          publish: 1987, edition: 2006},           
// ];

// const userBooks = books.filter((bk)=>{
//     if(bk.genre === "fiction" || bk.genre === "history"){
//         return bk
//     }
    
// })
// console.log(userBooks);

// const userBooks = books.filter((bk) => bk.publish===1987)
// console.log(userBooks)


// const userBooks =books.filter((bk)=>
//     {return bk.publish >=1987 && bk.genre==="history"})
// console.log(userBooks);

// const myNumers =[1,2,3,4,5,6,7,8,9,10]
//  const newNumers = myNumers.map((num)=> num+ 10)
// console.log(newNumers)
// const newnum =myNumers.map((num)=>{return num+100})
// console.log(newnum)

// const newnum = myNumers
// .map((num)=>num*10)
// .map((num)=>num+1)
// .filter((num)=>num>40)
// console.log(newnum);

// function user (num,calback){
    //  const result = num+4
    //  return num
// }

// user ((num) => num +2 )
 

//  const newuser = (user(num=2))
//  console.log(newuser)
//  function addnums(num1,result){
//     return result =num1+2
//  }
// addnums()

function add (a,b,cb){
    let result = a+b;
    cb(result);
    return () =>console.log(result);
}
let resultFunction = add(2,4,()=>{});
resultFunction();
// add(2,4,function (val){
//     console.log(val);
// });

// add(2,4,(val) => console.log(val));
// add(100,10,(res)=>console.log(res));


