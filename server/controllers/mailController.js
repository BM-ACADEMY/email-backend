const transporter = require("../config/mailConfig");
const registrationMail = require("../templates/registrationMail");

// digital marketing webinar for bmacademy
exports.sendRegistrationMail = async (req, res) => {
  try {
    const { name, email, phone, city, status, date, source } = req.body;

    if (!name || !phone || !date)
      return res.status(400).json({ message: "Required fields missing!" });

    const mailData = registrationMail({ name, email, phone, city, status, date, source });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: mailData.subject,
      html: mailData.html,
    });

    res.json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Mail Error:", err);
    res.status(500).json({ message: "Failed to send email", error: err.message });
  }
};
