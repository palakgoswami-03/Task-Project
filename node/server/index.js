const http = require("http");
const fs = require("fs");
const url = require("url");
const myServer = http.createServer((req,res)=>{
    if(req.url==="/favicon.ico")return res.end();
    const log = `${Date.now()}:${req.method} ${req.url} new Req Recieved\n`
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(myUrl.pathname){
        case '/':
        if(req.method === 'GET') res.end("HomePage");
        break
        case'/about':
        const username = myUrl.query.myname
        res.end(`Hi,${username}`);
        break;
        case '/signup':
        if(req.method === 'GET')res.end('This is signup form')
        else if(req.method === "POST"){
            res.end("Success");
        }
        default:
        res.end("404 Not Found");
        }
    })
    
});
myServer.listen(8000,()=>console.log("Server started!"));
