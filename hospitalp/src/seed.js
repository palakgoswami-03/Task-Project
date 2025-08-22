import mongoose from "mongoose";
import User from "./models/user.js";
import Role from "./models/role.js";
import Module from "./models/module.js";
import bcrypt from "bcryptjs";

export async function seed() {
  await mongoose.connect("mongodb://127.0.0.1:27017/hospitaldb");

  await User.deleteMany();
  await Role.deleteMany();
  await Module.deleteMany();

  // Modules
  const moduleNames = 
    [
    "User Management",
    "Patient Records",
    "Appointments",
    "Reports & Analytics"
    ];
  const modules = await Module.insertMany(moduleNames.map(name => ({ name })));

  // Roles
  const rolesData = [
    { 
      name: "SUPER_ADMIN", 
      modules: modules.map(m => m._id) 
    },
    { 
      name: "ADMIN", 
      modules: modules.map(m => m._id) 
    },
    { 
      name: "DOCTOR", 
      modules: [modules[1]._id, modules[2]._id] 
    },
    { 
      name: "PATIENT", 
      modules: [modules[2]._id] 
    }
  ];
  const roles = await Role.insertMany(rolesData);

  // Super Admin
  const superAdminRole = roles.find(r => r.name === "SUPER_ADMIN");
  await User.create({
    name: "Super Admin",
    email: "superadmin@example.com",
    password: "Super@123",
    role: superAdminRole._id
  });
  const adminRole = roles.find(r => r.name === "ADMIN");
await User.create({
  name: "Admin User",
  email: "admin@example.com",
  password: "Admin@123",
  role: adminRole._id
});

const doctorRole = roles.find(r => r.name === "DOCTOR");
await User.create({
  name: "Dr. John Doe",
  email: "doctor@example.com",
  password: "Doctor@123",
  role: doctorRole._id
});

const patientRole = roles.find(r => r.name === "PATIENT");
await User.create({
  name: "Patient Jane",
  email: "patient@example.com",
  password: "Patient@123",
  role: patientRole._id
});


  console.log("Database seeded successfully!");
  mongoose.disconnect();
}

seed();
// password: await bcrypt.hash("Super@123", 10),
