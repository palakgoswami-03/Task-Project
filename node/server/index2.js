const http = require("http")
const express = require("express")

const app = express();
app.get('/',(req,res)=>{
    return res.send("Hello from homepage ")
})
app.get('/about',(req,res)=>{
    return res.end("hello from about page")
});
app.listen(8000,()=>console.log("server started!"));
// const myServer = http.createServer(app);
// myServer.listen(8000, () => console.log("server started:"));