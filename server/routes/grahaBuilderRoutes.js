const express = require("express");
const router = express.Router();
const grahaBuilderController = require("../controllers/grahaBuilderController");

router.post("/send-email", grahaBuilderController.sendGrahaBuilderMail);

module.exports = router;
