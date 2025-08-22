import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Role from "./role.js";  // Import Role


const userSchema = new mongoose.Schema({
  name: String,
  email:
  { 
    type: String, 
    unique: true 
  },
  password: String,
  role: 
  { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Role" 
  }
}, 
{ 
  timestamps: true 
});

userSchema.pre("save", async function(next) 
{
  if (!this.isModified("password")) 
  return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export default mongoose.model("User", userSchema);
