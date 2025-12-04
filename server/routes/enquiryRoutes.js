const router = require("express").Router();
const { sendEnquiryMail } = require("../controllers/enquiryController");

// Endpoint: POST /api/enquiry/submit
router.post("/jkform", sendEnquiryMail);

module.exports = router;