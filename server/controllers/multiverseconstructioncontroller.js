const transporter = require("../config/multiverse");
const multiverseEmail = require("../templates/multiverseEmail");

exports.sendEnquiryMail = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validation
    if (!name || !email || !phone) {
      return res.status(400).json({ success: false, message: "Name, Email, and Phone are required." });
    }

    const mailData = multiverseEmail({ name, email, phone, message });

    // 1. Send to Admin
    await transporter.sendMail({
      from: process.env.construction_USER,
      to: process.env.construction_USER,
      replyTo: email,
      subject: mailData.adminSubject,
      html: mailData.adminHtml
    });

    // 2. Send Receipt to User
    await transporter.sendMail({
      from: process.env.construction_USER,
      to: email,
      subject: mailData.userSubject,
      html: mailData.userHtml
    });

    return res.status(200).json({ success: true, message: "Message sent successfully!" });

  } catch (err) {
    console.error("Mail Error:", err);
    return res.status(500).json({ success: false, message: "Failed to send email." });
  }
};