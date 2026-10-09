const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EQUIP_EMAIL_USER,
    pass: process.env.EQUIP_EMAIL_PASS,
  },
});

transporter.verify((err) => {
  if (err) console.error("❌ Equip Foundation SMTP Error:", err);
  else console.log("✅ Equip Foundation SMTP Ready");
});

module.exports = transporter;
