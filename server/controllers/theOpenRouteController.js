const transporter = require("../config/theOpenRouteSMTP");
const theOpenRouteTemplate = require("../templates/theOpenRouteTemplate");

exports.sendTheOpenRouteMail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Strict validation for required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "Required fields (Name, Email, Subject, Message) are missing!" 
      });
    }

    // Load template with user-submitted data
    const mailData = theOpenRouteTemplate({ name, email, subject, message });

    // Send email from authorized server address to the admin address
    await transporter.sendMail({
      from: `"${name} (via The Open Route)" <${process.env.THE_OPEN_ROUTE_USER}>`, 
      to: process.env.THE_OPEN_ROUTE_USER, // Receives inquiry at the same professional address
      replyTo: email, // Direct reply to sender
      subject: mailData.subject,
      html: mailData.html,
    });

    console.log(`✅ The Open Route inquiry received from ${name} (${email})`);
    res.status(200).json({ success: true, message: "Your message has been sent successfully!" });

  } catch (err) {
    console.error("❌ The Open Route Mail Error:", err);
    res.status(500).json({ 
      success: false, 
      message: "Failed to send message. Please try again later.", 
      error: err.message 
    });
  }
};
