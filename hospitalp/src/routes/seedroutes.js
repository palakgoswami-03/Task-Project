import express from "express";
import {seed} from "../seed.js"; // optional: can trigger seed via API
const router = express.Router();
router.get("/", (req, res) => {
  seed().then(() => res.send("Database seeded via API"));
});
export default router;
