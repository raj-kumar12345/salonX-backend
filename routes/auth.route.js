const express = require("express");
const { userRegisterController, userLoginController, verifyOTPController, currentUserController } = require("../controllers/auth.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");

const router = express.Router();


router.post("/register",userRegisterController);
router.post("/verify-otp",verifyOTPController)
router.post("/login",userLoginController);

router.get("/current-user",authMiddleware,currentUserController)


module.exports = router