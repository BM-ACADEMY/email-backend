const router = require("express").Router();
const { sendEnquiryMail } = require("../controllers/multiverseconstructioncontroller");

router.post("/multiverse-construction-email", sendEnquiryMail);

module.exports = router;
