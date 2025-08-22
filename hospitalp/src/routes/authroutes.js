import express from "express";
import { login, me ,register } from "../controllers/authcontroller.js";
import { protect } from "../middleware/authmiddleware.js";



const router = express.Router();

router.post("/login", login);
router.get("/me", protect, me); // protected route
router.post("/register", register);
export default router;