const transporter = require("../config/cedarozoho");
const enquiryMail = require("../templates/credaro");

exports.sendEnquiryMail = async (req, res) => {
  try {
    const { name, email, company, industry, location, mobile, message } = req.body;

    if (!name || !email || !mobile || !company || !industry) {
      return res.status(400).json({ message: "Required fields missing!" });
    }

    const mailData = enquiryMail({ name, email, company, industry, location, mobile, message });

    // 1. SEND TO ADMIN
    await transporter.sendMail({
      from: process.env.CREDARO_EMAIL_USER,
      to: process.env.CREDARO_EMAIL_USER,
      subject: mailData.adminSubject,
      html: mailData.adminHtml
    });

    // 2. SEND RECEIPT TO USER
    await transporter.sendMail({
      from: process.env.CREDARO_EMAIL_USER,
      to: email,
      subject: mailData.userSubject,
      html: mailData.userHtml
    });

    return res.json({ success: true, message: "Enquiry submitted successfully!" });

  } catch (err) {
    console.error("Mail Error:", err);
    return res.status(500).json({ message: "Failed to send email", error: err.message });
  }
};
