const router = require("express").Router();
const { sendEnquiryMail } = require("../controllers/credaroenquiryController");

router.post("/credaro-email", sendEnquiryMail);

module.exports = router;
