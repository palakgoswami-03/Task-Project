import Student from "../models/student.js";
import fs from "fs";

export const addStudent = async (req, res) => {
  try {
    const { name, age, course } = req.body;
    if (!name || !age || !course)
      return res.status(400).json({ message: "Name, Age, and Course are required" });

    const student = await Student.create({ name, age, course });
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addMultipleStudents = async (req, res) => {
  try {
    const { students } = req.body;
    if (!students || !Array.isArray(students) || students.length === 0)
      return res.status(400).json({ message: "Students array is required" });

    const result = await Student.insertMany(students);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const searchStudents = async (req, res) => {
  try {
    const { name, age, course } = req.query;
    let query = {};

    if (name) query.name = { $regex: name, $options: "i" };
    if (age) query.age = Number(age);
    if (course) query.course = { $regex: course, $options: "i" };

    const students = await Student.find(query);
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const student = await Student.findByIdAndUpdate(id, updatedData, { new: true });
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndDelete(id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const sortStudents = async (req, res) => {
  try {
    const { sortBy } = req.query; // name or age
    const students = await Student.find().sort({ [sortBy]: 1 });
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Count students by course
export const countByCourse = async (req, res) => {
  try {
    const result = await Student.aggregate([
      { $group: { _id: "$course", count: { $sum: 1 } } }
    ]);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Export students to text file
export const exportToText = async (req, res) => {
  try {
    const students = await Student.find();
    let content = students.map(s => `${s.name}, ${s.age}, ${s.course}`).join("\n");
    fs.writeFileSync("students.txt", content);
    res.download("students.txt");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
