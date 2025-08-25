import fs from "fs";
import csv from "csv-parser";
import Country from "../models/country.js";
import State from "../models/state.js";
import City from "../models/city.js";
import Course from "../models/course.js";
import Student from "../models/student.js";

export const importStudents = async (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });

  const results = [];

  try {
    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on("data", row => results.push(row))
      .on("end", async () => {
        const countryMap = {};
        const stateMap = {};
        const cityMap = {};
        const courseMap = {};
        const studentOps = [];

        for (const row of results) {
          const studentName = row.name?.trim();
          const phone = row.phone?.trim();
          const email = row.email?.trim() || null;
          const countryName = row.country?.trim() || null;
          const stateName = row.state?.trim() || null;
          const cityName = row.city?.trim() || null;
          const courseName = row.course?.trim() || null;

          if (!studentName || !phone) continue;

          let countryId = null;
          let stateId = null;
          let cityId = null;
          let courseId = null;

          if (countryName) {
            if (!countryMap[countryName]) {
              let country = await Country.findOne({ name: countryName });
              if (!country) country = await Country.create({ name: countryName });
              countryMap[countryName] = country._id;
            }
            countryId = countryMap[countryName];
          }

          if (stateName && countryId) {
            if (!stateMap[stateName + countryId]) {
              let state = await State.findOne({ name: stateName, country: countryId });
              if (!state) state = await State.create({ name: stateName, country: countryId });
              stateMap[stateName + countryId] = state._id;
            }
            stateId = stateMap[stateName + countryId];
          }

          if (cityName && stateId) {
            if (!cityMap[cityName + stateId]) {
              let city = await City.findOne({ name: cityName, state: stateId });
              if (!city) city = await City.create({ name: cityName, state: stateId });
              cityMap[cityName + stateId] = city._id;
            }
            cityId = cityMap[cityName + stateId];
          }

          if (courseName) {
            if (!courseMap[courseName]) {
              let course = await Course.findOne({ name: courseName });
              if (!course) course = await Course.create({ name: courseName });
              courseMap[courseName] = course._id;
            }
            courseId = courseMap[courseName];
          }

          studentOps.push({
            updateOne: {
              filter: { phone },
              update: {
                $set: {
                  name: studentName,
                  email,
                  country: countryId,
                  state: stateId,
                  city: cityId,
                  course: courseId
                }
              },
              upsert: true
            }
          });
        }

        if (studentOps.length > 0) await Student.bulkWrite(studentOps);

        fs.unlinkSync(req.file.path);
        res.json({ message: "CSV imported successfully", imported: studentOps.length });
      });
  } catch (err) {
    res.status(500).json({ message: "CSV import failed", error: err.message });
  }
};
