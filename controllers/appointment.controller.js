const appointmentModel = require("../models/appointment.model");
const barberModel = require("../models/barbar.model");

const newAppointmentController = async (req, res) => {
  try {
    const { location, date, time, service } = req.body;
    const userId = req.user.id;

    // ✅ validation
    if (!date || !time) {
      return res.status(400).send({
        success: false,
        message: "Date and time are required",
      });
    }

    // ✅ create appointment
    const newAppointment = await appointmentModel.create({
      user: userId,
      service,
      location: {
        city: location?.city || "",
        houseNo: location?.houseNo || "",
        pincode: location?.pincode || "",
      },
      date,
      time,
    });

    // 🔥 SEARCH BARBERS LOGIC

    // 1. Try pincode
    let barbers = await barberModel
      .find({
        "location.pincode": location?.pincode,
        isApproved: true,
      })
      .populate("userId", "name email mobile");

    // 2. If not found → city
    if (barbers.length === 0) {
      barbers = await barberModel
        .find({
          "location.city": location?.city,
          isApproved: true,
        })
        .populate("userId", "name email mobile");
    }

    return res.status(201).send({
      success: true,
      message: "Appointment booked & barbers fetched ✅",
      appointment: newAppointment,
      barbers, // 👈 THIS IS IMPORTANT
    });

  } catch (error) {
    console.log("Booking Error:", error);

    return res.status(500).send({
      success: false,
      message: "Error while booking appointment",
      error: error.message,
    });
  }
};

module.exports = { newAppointmentController };