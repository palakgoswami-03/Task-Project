const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;
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
    res.json({ status: "pending"});
})
.delete((req,res)=>{
    res.json({status: "pending"});
});


// app.get('/api/users/:id',(req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user)=>user.id ===id);
//     return res.json(user);
// });

// app.post('/api/users',(req,res)=>{
//     //tood:create new user
//     return res.json({ status:"pending"});
// })

// app.patch("/api/users/:id",(req,res)=>{
// //tood: edit the user with id
// return res.json({status:"pending"});
// })
// app.delete("api/users/:id",(req,res)=>{
//     //todo: delete the user with id
//     return res.json({ status:"pending"});
// })


app.listen(PORT,() => console.log(`Server started at PORT : ${PORT}`))