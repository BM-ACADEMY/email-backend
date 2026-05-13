const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.graha_builder_email,
    pass: process.env.graha_builder_pass, // Use App Password here
  },
});

transporter.verify((err) => {
  if (err) console.error("❌ Graha Builders SMTP Error:", err);
  else console.log("✅ Graha Builders SMTP Ready");
});

module.exports = transporter;
