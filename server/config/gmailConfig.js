const nodemailer = require("nodemailer");
require("dotenv").config();

const gmailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS, // Use App Password here
  },
});

gmailTransporter.verify((err) => {
  if (err) console.error("❌ Gmail SMTP Error:", err);
  else console.log("✅ Gmail SMTP Ready");
});

module.exports = gmailTransporter;