import express from "express";
import mongoose from "mongoose";
import studentRoutes from "./routes/studentroute.js";

const app = express();
app.use(express.json());

app.use("/students", studentRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/studentrecorddb", { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));
