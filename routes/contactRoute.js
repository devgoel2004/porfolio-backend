const express = require("express");
const { sendingEmail } = require("../controllers/contactController");
const router = express.Router();

router.route("/sendEmail").post(sendingEmail);
module.exports = router;
