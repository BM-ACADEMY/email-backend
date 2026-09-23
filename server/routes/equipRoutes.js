const express = require("express");
const router = express.Router();
const equipController = require("../controllers/equipController");

router.post("/send-email", equipController.sendEquipMail);

module.exports = router;
