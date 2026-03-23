const express = require("express");
const { barberRegisterController, barberLoginController, fetchAllBarberController } = require("../controllers/barber.auth.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/register",authMiddleware,barberRegisterController);
router.post("/login",authMiddleware,barberLoginController)
router.post("/fetch",fetchAllBarberController)



module.exports = router