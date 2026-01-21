const transporter = require("../config/picturizeSMTP");
const picturizeTemplate = require("../templates/picturize");

exports.sendPicturizeMail = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, subject, message } = req.body;

    // Validation
    if (!firstName || !email || !subject) {
      return res.status(400).json({ message: "Please fill in all required fields." });
    }

    const mailData = picturizeTemplate({ firstName, lastName, email, phone, subject, message });

    // 1. Send to Admin
 await transporter.sendMail({
  from: process.env.PICTURIZE_EMAIL_USER,
  to: `${process.env.PICTURIZE_EMAIL_USER}, godwin@picturize.co.in`,
  subject: mailData.adminSubject,
  html: mailData.adminHtml
});


    // 2. Send Receipt to User
    await transporter.sendMail({
      from: process.env.PICTURIZE_EMAIL_USER,
      to: email,
      subject: mailData.userSubject,
      html: mailData.userHtml
    });

    return res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Picturize Mail Error:", error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};