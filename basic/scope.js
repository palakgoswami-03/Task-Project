// const requestUrl = 'https://api.github.com/users/hiteshchaudhary'
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET',requestUrl)
//     xhr.onreadystatechange=function(){
//         console.log(xhr.readyState);
//         if(xhr.readyState === 4){
//             console.log(this.responseText);
//         }
//     }
//     // console.log(xhr.readyState);
//     xhr.send()  

const XMLHttpRequest = require('xhr2'); // import xhr2 for Node.js

const requestUrl = 'https://api.github.com/users/hiteshchaudhary';
const xhr = new XMLHttpRequest();

xhr.open('GET', requestUrl);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState); // logs state changes: 1, 2, 3, then 4

  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText)
    console.log(typeof data); // 200 means success
    console.log(data.followers);

  }
};

xhr.send();
