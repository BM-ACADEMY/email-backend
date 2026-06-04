const transporter = require("../config/ramyaSMTP");
const ramyaTemplate = require("../templates/ramyaTemplate");

exports.sendRamyaMail = async (req, res) => {
  try {
    const { name, fullName, email, phone, phoneNumber, serviceType, message, imageReference, image, imageUrl } = req.body;

    // Normalize field names to support different frontend implementations
    const finalName = name || fullName;
    const finalPhone = phone || phoneNumber;
    const finalImage = imageReference || image || imageUrl;

    // Strictly validate required fields
    if (!finalName || !email || !finalPhone) {
      return res.status(400).json({
        success: false,
        message: "Required fields (Name, Email, and Phone) are missing!",
      });
    }

    // Generate the email data
    const mailData = ramyaTemplate({
      name: finalName,
      email,
      phone: finalPhone,
      serviceType,
      message,
      imageReference: finalImage,
    });

    // Send email using SMTP
    await transporter.sendMail({
      from: `"${finalName} (via Ramya Aquafier)" <${process.env.RAMYA_EMAIL_USER}>`,
      to: process.env.RAMYA_EMAIL_USER, // Sends inquiry to admin email address
      replyTo: email, // Direct reply back to customer's email
      subject: mailData.subject,
      html: mailData.html,
    });

    console.log(`✅ Ramya Aquafier service inquiry received from ${finalName} (${email})`);
    res.status(200).json({
      success: true,
      message: "Enquiry submitted successfully!",
    });

  } catch (err) {
    console.error("❌ Ramya Aquafier Mail Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to submit enquiry. Please try again later.",
      error: err.message,
    });
  }
};
