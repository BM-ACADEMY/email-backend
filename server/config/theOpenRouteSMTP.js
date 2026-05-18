const nodemailer = require("nodemailer");
require("dotenv").config();

const port = parseInt(process.env.THE_OPEN_ROUTE_PORT || "465");

const transporter = nodemailer.createTransport({
  host: process.env.THE_OPEN_ROUTE_HOST || "smtpout.secureserver.net",
  port: port,
  secure: port === 465, // true for 465 (SSL), false for 587 (STARTTLS)
  auth: {
    user: process.env.THE_OPEN_ROUTE_USER,
    pass: process.env.THE_OPEN_ROUTE_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Prevents certificate validation issues
  },
});

transporter.verify((err) => {
  if (err) console.error("❌ The Open Route SMTP Error:", err);
  else console.log("✅ The Open Route SMTP Ready");
});

module.exports = transporter;

