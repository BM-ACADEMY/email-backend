const transporter = require("../config/equipSMTP");
const equipTemplate = require("../templates/equipTemplate");

exports.sendEquipMail = async (req, res) => {
  try {
    const { name, organisation, email, phone, subject, engagementType, message } = req.body;

    // Basic Validation (name, email, message are required based on Contact.jsx)
    if (!name || !email || !message || !engagementType || !phone || !subject || !organisation) {
      return res.status(400).json({ success: false, message: "Required fields (Name, Email, Message) are missing!" });
    }

    const mailData = equipTemplate({ name, organisation, email, phone, subject, engagementType, message });

    // Send to Admin
    await transporter.sendMail({
      from: process.env.EQUIP_EMAIL_USER,
      to: process.env.EQUIP_EMAIL_USER,
      subject: mailData.subject,
      html: mailData.html,
    });

    console.log(`✅ Equip Foundation inquiry received from ${name}`);
    res.status(200).json({ success: true, message: "Enquiry submitted successfully!" });

  } catch (err) {
    console.error("❌ Equip Foundation Mail Error:", err);
    res.status(500).json({ success: false, message: "Failed to submit enquiry", error: err.message });
  }
};
