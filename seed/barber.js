require("dotenv").config();
const connectDB = require("../config/db");
const barberModel = require("../models/barbar.model");
const seedBarbers = async () => {
  try {
    await connectDB();

    console.log("Connected ✅");

    // ❌ delete old barbersfdf
    await barberModel.deleteMany();
    console.log("Old barbers deleted");

    const barbers = [
      {
        userId: "69c0c91b8d3337e9a8cded2b",
        shopName: "Vikas Salon",
        experience: 3,
        location: {
          pincode: 462022,
          city: "Bhopal",
          address: "Sonagiri, Bhopal",
        },
        isApproved: true,
      },
      {
        userId: "69c0c91b8d3337e9a8cded27",
        shopName: "Neha Beauty Studio",
        experience: 4,
        location: {
          pincode: 462022,
          city: "Bhopal",
          address: "Sonagiri, Bhopal",
        },
        isApproved: true,
      },
      {
        userId: "69c0c91b8d3337e9a8cded25",
        shopName: "Rahul Hair Art",
        experience: 2,
        location: {
          pincode: 462022,
          city: "Bhopal",
          address: "Sonagiri, Bhopal",
        },
        isApproved: true,
      },
      {
        userId: "69c0c91b8d3337e9a8cded2c",
        shopName: "Pooja Salon",
        experience: 5,
        location: {
          pincode: 462022,
          city: "Bhopal",
          address: "Sonagiri, Bhopal",
        },
        isApproved: true,
      },
      {
        userId: "69c0c91b8d3337e9a8cded2d",
        shopName: "Deepak Grooming Hub",
        experience: 3,
        location: {
          pincode: 462022,
          city: "Bhopal",
          address: "Sonagiri, Bhopal",
        },
        isApproved: true,
      }
    ];

    await barberModel.create(barbers);

    console.log("Barbers inserted successfully 💈🔥");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

seedBarbers();