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

const todoCompleted = todos.filter(function(todo) 
{
return todo.iscompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);