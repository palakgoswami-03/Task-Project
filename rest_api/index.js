const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express();
const PORT = 8000;
app.use(express.urlencoded({ extended : false}));
//ROUTES
app.get("/api/users",(req,res)=>{
    return res.json(users);
})
// app.get("/users",(req,res)=>{
//     const html = `
//     <ul>
//         ${users.map((user) =>`<li>${user.first_name}</li>`).join("")}
//     </ul>
//     `;
//     res.send(html)
// })

app
.route('/api/users/:id')
.get((req,res) => {
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id ===id);
    return res.json(user);
})
.patch((req,res) =>{
    return res.json({ status: "pending"});
})
.delete((req,res)=>{
    const body = req.body;
    users.delete({...body,id:users.length});
    fs.unlink('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
    return res.json({ status:"success",id: users.length});
    })
    console.log('body',body)
});



// app.get('/api/users/:id',(req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user)=>user.id ===id);
//     return res.json(user);
// });

app.post('/api/users',(req,res)=>{
    // tood:create new user
    const body = req.body;
    users.push({...body,id:users.length + 1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
    return res.json({ status:"success",id: users.length});
    })
    console.log('body',body)
    
})

// app.patch("/api/users/:id",(req,res)=>{
// //tood: edit the user with id
// return res.json({status:"pending"});
// })
// app.delete("api/users/:id",(req,res)=>{
//     //todo: delete the user with id
//     return res.json({ status:"pending"});
// })


app.listen(PORT,() => console.log(`Server started at PORT : ${PORT}`))