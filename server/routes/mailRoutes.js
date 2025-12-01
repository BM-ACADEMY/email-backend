const router = require("express").Router();
const { sendRegistrationMail } = require("../controllers/mailController");

router.post("/send-email", sendRegistrationMail);

module.exports = router;
