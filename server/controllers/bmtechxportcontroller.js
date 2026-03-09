const transporter = require("../config/mailConfig");
const contactMail = require("../templates/bmtechxporttemplate");

exports.createContactForm = async (req, res) => {
  try {
    // 1. Destructure data from the frontend request
    const { username, email, phoneNumber, description } = req.body;

    // 2. Validate required fields
    if (!username || !email || !phoneNumber || !description) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // 3. Generate the email data
    const mailData = contactMail({ username, email, phoneNumber, description });

    // 4. Send the email to the admin/company email address
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email, // Replace with the email that should receive these inquiries
      subject: mailData.subject,
      html: mailData.html,
    });

    // 5. Send success response back to React (Triggers toast.success)
    res.status(200).json({ message: "Contact submitted successfully" });

  } catch (err) {
    console.error("Contact Form Mail Error:", err);
    // Send error response back to React (Triggers toast.error)
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
};