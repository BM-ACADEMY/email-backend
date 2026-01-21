const router = require("express").Router();
const { sendPicturizeMail } = require("../controllers/picturizeController");

router.post("/contact", sendPicturizeMail);

module.exports = router;