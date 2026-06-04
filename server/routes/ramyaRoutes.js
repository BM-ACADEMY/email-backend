const express = require("express");
const router = express.Router();
const ramyaController = require("../controllers/ramyaController");

// Endpoint for sending email from Ramya Aquafier / Ramya Agency
router.post("/send-email", ramyaController.sendRamyaMail);

module.exports = router;
