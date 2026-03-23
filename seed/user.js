require("dotenv").config();
const connectDB = require("../config/db")
const mongoose = require("mongoose");
const userModel = require("../models/user.model");

const seedUsers = async () => {
  try {
    await connectDB(); // 👈 FIRST connect

    console.log("Connected, now seeding...");

    await userModel.deleteMany();

    const users = [
      {
        name: "Amit Kumar",
        email: "amit1@gmail.com",
        mobile: "9876543210",
        password: "123456",
        role: "user",
        isVerified: true,
      },
      {
        name: "Rahul Sharma",
        email: "rahul2@gmail.com",
        mobile: "9876543211",
        password: "123456",
        role: "user",
        isVerified: true,
      },
      {
        name: "Priya Singh",
        email: "priya3@gmail.com",
        mobile: "9876543212",
        password: "123456",
        role: "user",
        isVerified: true,
      },
      {
        name: "Neha Verma",
        email: "neha4@gmail.com",
        mobile: "9876543213",
        password: "123456",
        role: "user",
        isVerified: true,
      },
      {
        name: "Rohit Yadav",
        email: "rohit5@gmail.com",
        mobile: "9876543214",
        password: "123456",
        role: "user",
        isVerified: true,
      },
      {
        name: "Ankit Gupta",
        email: "ankit6@gmail.com",
        mobile: "9876543215",
        password: "123456",
        role: "user",
        isVerified: true,
      },
      {
        name: "Sneha Patel",
        email: "sneha7@gmail.com",
        mobile: "9876543216",
        password: "123456",
        role: "user",
        isVerified: true,
      },
      {
        name: "Vikas Mishra",
        email: "vikas8@gmail.com",
        mobile: "9876543217",
        password: "123456",
        role: "user",
        isVerified: true,
      },
      {
        name: "Pooja Sharma",
        email: "pooja9@gmail.com",
        mobile: "9876543218",
        password: "123456",
        role: "user",
        isVerified: true,
      },
      {
        name: "Deepak Singh",
        email: "deepak10@gmail.com",
        mobile: "9876543219",
        password: "123456",
        role: "user",
        isVerified: true,
      },
    ];


    await userModel.create(users);

    console.log("Seeding done ✅");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

seedUsers();