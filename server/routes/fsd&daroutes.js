const router = require("express").Router();
const { sendFSDRegistrationMail } = require("../controllers/Fsdmailcontroller");
const { sendDARegistrationMail } = require("../controllers/damailcontroller");

router.post("/send-email-fsd", sendFSDRegistrationMail);
router.post("/send-email-da", sendDARegistrationMail);

module.exports = router;
