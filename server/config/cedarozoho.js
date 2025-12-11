const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: process.env.CREDARO_EMAIL_USER,
    pass: process.env.CREDARO_EMAIL_PASS,
  },
});

transporter.verify(err => {
  if (err) console.error("SMTP Error:", err);
  else console.log("✅ Cedaro SMTP Ready");
});

module.exports = transporter;
