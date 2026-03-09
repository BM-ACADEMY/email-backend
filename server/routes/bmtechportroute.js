const router = require("express").Router();
const { createContactForm } = require("../controllers/bmtechxportcontroller");

router.post("/send-email-bmtechxport", createContactForm);

module.exports = router;
