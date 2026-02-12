const nodemailer = require("nodemailer");
require("dotenv").config();

// Rename to multiverseTransporter or zohoTransporter
const multiverseTransporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.construction_USER,
    pass: process.env.construction_PASS, 
  },
});

multiverseTransporter.verify((err) => {
  if (err) console.error("❌ Multiverse/Construction SMTP Error:", err); // Updated label
  else console.log("✅ Multiverse SMTP Ready");
});

module.exports = multiverseTransporter;