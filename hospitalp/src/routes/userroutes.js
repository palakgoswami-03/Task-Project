import express from "express";
import { protect } from "../middleware/authmiddleware.js";

const router = express.Router();

// Example routes for testing roles
router.get("/superadmin", protect, (req, res) => {
  if (req.user.role.name !== "SUPER_ADMIN") return res.status(403).json({ message: "Access denied" });
  res.json({ message: "Welcome Super Admin!" });
});

router.get("/admin", protect, (req, res) => {
  if (!["SUPER_ADMIN", "ADMIN"].includes(req.user.role.name)) return res.status(403).json({ message: "Access denied" });
  res.json({ message: "Welcome Admin!" });
});

router.get("/doctor", protect, (req, res) => {
  if (req.user.role.name !== "DOCTOR") return res.status(403).json({ message: "Access denied" });
  res.json({ message: "Welcome Doctor!" });
});

router.get("/patient", protect, (req, res) => {
  if (req.user.role.name !== "PATIENT") return res.status(403).json({ message: "Access denied" });
  res.json({ message: "Welcome Patient!" });
});

export default router;
