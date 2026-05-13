const transporter = require("../config/grahaBuilderSMTP");
const grahaBuilderTemplate = require("../templates/grahaBuilderTemplate");

exports.sendGrahaBuilderMail = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Basic Validation
    if (!name || !email || !phone) {
      return res.status(400).json({ success: false, message: "Required fields (Name, Email, Phone) are missing!" });
    }

    const mailData = grahaBuilderTemplate({ name, email, phone, message });

    // 1. Send to Admin (md@graha.builders)
    await transporter.sendMail({
      from: process.env.graha_builder_email,
      to: process.env.graha_builder_email,
      subject: mailData.subject,
      html: mailData.html,
    });

    // 2. Optional: Send confirmation to user
    // await transporter.sendMail({
    //   from: process.env.graha_builder_email,
    //   to: email,
    //   subject: "We received your inquiry - Graha Builders",
    //   html: `<p>Dear ${name}, thank you for contacting Graha Builders. We will get back to you shortly.</p>`
    // });

    console.log(`✅ Graha Builders inquiry received from ${name}`);
    res.status(200).json({ success: true, message: "Enquiry submitted successfully!" });

  } catch (err) {
    console.error("❌ Graha Builders Mail Error:", err);
    res.status(500).json({ success: false, message: "Failed to submit enquiry", error: err.message });
  }
};
