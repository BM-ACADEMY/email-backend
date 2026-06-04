const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.RAMYA_EMAIL_USER,
    pass: process.env.RAMYA_EMAIL_PASS, // App Password
  },
});

transporter.verify((err) => {
  if (err) console.error("❌ Ramya Agency SMTP Error:", err);
  else console.log("✅ Ramya Agency SMTP Ready");
});

module.exports = transporter;
