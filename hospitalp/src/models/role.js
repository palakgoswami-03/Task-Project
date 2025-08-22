import mongoose from "mongoose";
import Module from "./module.js";  // Correct relative path

const roleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  modules: [{ type: mongoose.Schema.Types.ObjectId, ref: "Module" }]
});

export default mongoose.model("Role", roleSchema);
