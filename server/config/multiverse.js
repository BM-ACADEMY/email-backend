const nodemailer = require("nodemailer");
require("dotenv").config();

const gmailTransporter = nodemailer.createTransport({
   host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: process.env.construction_USER,
    pass: process.env.construction_PASS, // Use App Password here
  },
});

gmailTransporter.verify((err) => {
  if (err) console.error("❌ Gmail SMTP Error:", err);
  else console.log("✅ construction Gmail SMTP Ready");
});

module.exports = gmailTransporter;