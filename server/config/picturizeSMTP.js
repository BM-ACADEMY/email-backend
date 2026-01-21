const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: process.env.PICTURIZE_EMAIL_USER,
    pass: process.env.PICTURIZE_EMAIL_PASS,
  },
});

transporter.verify(err => {
  if (err) console.error("Picturize SMTP Error:", err);
  else console.log("✅ Picturize SMTP Ready");
});

module.exports = transporter;