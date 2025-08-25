import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import { importStudents } from "./controllers/studentcontroller.js";

const app = express();
const PORT = 5000;
mongoose.connect("mongodb://127.0.0.1:27017/studentdb")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

app.post("/upload", upload.single("file"), importStudents);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
