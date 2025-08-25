import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: 
  { 
    type: String, 
    required: true 
  },
  email: 
  {
     type: String 
  },
  phone:
  { 
    type: String, 
    required: true, 
    unique: true 
  },
  country: 
  { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Country" 
  },
  state: 
  { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "State" 
  },
  city: 
  { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "City" 
  },
  course: 
  { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Course" 
  }
});

export default mongoose.model("Student", studentSchema);
