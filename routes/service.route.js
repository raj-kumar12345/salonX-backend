const express = require("express");
const router = express.Router();
const serviceModel = require("../models/service.model");


router.get("/", async (req, res) => {
  try {
    const services = await serviceModel.find({});
    res.status(200).json({ success: true, services });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});


module.exports = router;