const barberModel = require("../models/barbar.model");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt")

const barberRegisterController = async (req, res) => {
  try {
    const userId = req.user.id; // comes from auth middleware

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized user",
      });
    }

    // Check if the user is already a barber
    const existingBarber = await barberModel.findOne({ userId });
    if (existingBarber) {
      return res.status(400).json({
        success: false,
        message: "This user is already registered as a barber",
      });
    }

    const { shopName, experience, location } = req.body;

    if (!shopName || !experience || !location || !location.city || !location.pincode || !location.address ) {
      return res.status(400).json({
        success: false,
        message: "All fields (shopName, experience, location) are required",
      });
    }

    // Create new barber
    const newBarber = await barberModel.create({
      userId,
      shopName,
      experience,
      location,
    });

    return res.status(201).json({
      success: true,
      message: "Barber registration request submitted successfully",
      data: newBarber,
    });

  } catch (error) {
    console.error("Barber Registration Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


const barberLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }


    const barber = await barberModel.findOne({ userId: user._id });
    if (!barber) {
      return res.status(403).json({
        success: false,
        message: "This user is not registered as a barber",
      });
    }

    // if (!barber.isApproved) {    iskko baaad me dekh lenge
    //   return res.status(403).json({
    //     success: false,
    //     message: "Barber registration is not approved yet",
    //   });
    // }
    const userResponse = {
      id: user._id,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      barberDetails: barber,
    };

    return res.status(200).json({
      success: true,
      message: "Logged in as barber successfully",
      user: userResponse,
    });
  } catch (error) {
    console.error("Login as Barber Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


const fetchAllBarberController = async (req, res) => {
  try {
    const { location } = req.body;

    // ✅ validation
    if (!location?.pincode && !location?.city) {
      return res.status(400).send({
        success: false,
        message: "Pincode or City is required",
      });
    }

    // 🔥 1. Search by pincode first
    let barbers = await barberModel
      .find({
        "location.pincode": location.pincode,
        isApproved: true,
      })
      .populate("userId", "name email mobile");

    // 🔥 2. If not found → search by city
    if (barbers.length === 0) {
      barbers = await barberModel
        .find({
          "location.city": location.city,
          isApproved: true,
        })
        .populate("userId", "name email mobile");
    }

    return res.status(200).send({
      success: true,
      count: barbers.length,
      barbers,
    });

  } catch (error) {
    console.log("Search Error:", error);

    return res.status(500).send({
      success: false,
      message: "Error while fetching barbers",
      error: error.message,
    });
  }
};



module.exports = { barberRegisterController,barberLoginController,fetchAllBarberController };