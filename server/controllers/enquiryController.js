const gmailTransporter = require("../config/gmailConfig");
const enquiryTemplate = require("../templates/jkenquiryform");

exports.sendEnquiryMail = async (req, res) => {
  try {
    const formData = req.body;

    // Basic Validation
    if (!formData.fullName || !formData.email || !formData.phone) {
      return res.status(400).json({ message: "Required fields (Name, Email, Phone) are missing!" });
    }

    // Generate Email Content
    const mailData = enquiryTemplate(formData);

    // Send Mail using Gmail Transporter
    await gmailTransporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.EMAIL_USER, // Sending TO the admin (or you can use GMAIL_USER)
      replyTo: formData.email,   // So you can reply directly to the client
      subject: mailData.subject,
      html: mailData.html,
    });

    console.log(`✅ Enquiry received from ${formData.fullName}`);
    res.status(200).json({ message: "Enquiry submitted successfully!" });

  } catch (err) {
    console.error("❌ Enquiry Mail Error:", err);
    res.status(500).json({ message: "Failed to submit enquiry", error: err.message });
  }
};