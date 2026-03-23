const express = require("express");
const { authMiddleware } = require("../middlewares/auth.middleware");
const { newAppointmentController } = require("../controllers/appointment.controller");

const router = express.Router();


router.post("/book",authMiddleware,newAppointmentController)



module.exports = router