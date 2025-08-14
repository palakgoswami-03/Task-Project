const fs = require("fs");
// const os = require("os");
// console.log(os.cpus().length);
//sync..
// fs.writeFileSync('./test.txt',"Hello world")
// fs.writeFile("./test.txt","hello world asynchronus",(err)=>{})
//  
// fs.readFile("./contaxt.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error",err);
//     }else{
//         console.log(result);
//     }
// })
// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString())
// fs.appendFileSync("./test.txt",`Hey Ther\n`);
// fs.appendFileSync("./test.txt",`${Date.now()} Hey There\n`);
// fs.cpSync('./test.txt','./copy.txt');
// fs.unlinkSync('./copy.txt')
// console.log(fs.statSync('./test.txt').isFile)
// fs.mkdirSync("my-docs/a/b",{recursive: true});
// fs.writeFileSync("./abc.txt","hello vs");
// fs.rmdirSync("my-docs")
// fs.mkdirSync("abxx")
// fs.rmdirSync("abxx")
// console.log("1");
const result = fs.readFile('contaxt.txt','utf-8',(err, result) =>{
//     console.log(result);
 })
// console.log(result);
// console.log("2")

