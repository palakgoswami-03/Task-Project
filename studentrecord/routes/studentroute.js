import express from "express";
import {
  addStudent,
  addMultipleStudents,
  getStudents,
  searchStudents,
  updateStudent,
  deleteStudent,
  sortStudents,
  countByCourse,
  exportToText
} from "../controllers/studentcontroller.js";

const router = express.Router();

router.post("/", addStudent);
router.post("/multiple", addMultipleStudents);
router.get("/", getStudents);
router.get("/search", searchStudents);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);
router.get("/sort", sortStudents);
router.get("/count", countByCourse);
router.get("/export", exportToText);

export default router;
