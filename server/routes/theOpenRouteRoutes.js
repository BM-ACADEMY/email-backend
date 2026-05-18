const express = require("express");
const router = express.Router();
const theOpenRouteController = require("../controllers/theOpenRouteController");

// Endpoint for sending email from "The Open Route" website
router.post("/send-email", theOpenRouteController.sendTheOpenRouteMail);

module.exports = router;
