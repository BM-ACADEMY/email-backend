const transporter = require("../config/mailConfig");
const contactMail = require("../templates/bmtechxporttemplate");

exports.createContactForm = async (req, res) => {
  try {
    const { username, email, phoneNumber, description } = req.body;

    // Validate required fields
    if (!username || !email || !phoneNumber || !description) {
      return res.status(400).json({
        message: "All fields are required!",
      });
    }

    // Website and form identification
    const website = "portfolio-of.bmtechx.in";
    const form = "Contact Form";

    // Generate email template
    const mailData = contactMail({
      username,
      email,
      phoneNumber,
      description,
    });

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER, // Admin email from .env (fallback to EMAIL_USER)
      subject: `New Enquiry - ${website}`,
      html: `
        <h2>New Contact Form Enquiry</h2>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Form:</strong> ${form}</p>
        <hr />
        ${mailData.html}
      `,
      replyTo: email,
    });

    // Send data to n8n webhook
    try {
      const webhookResponse = await fetch(
        "https://leados-n8n.abmgroups.org/webhook/contact-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            website,
            form,
            username,
            email,
            phoneNumber,
            description,
          }),
        }
      );

      if (!webhookResponse.ok) {
        console.error(
          "n8n Webhook Error:",
          webhookResponse.status,
          await webhookResponse.text()
        );
      }
    } catch (webhookErr) {
      console.error("Webhook Error:", webhookErr);
    }

    return res.status(200).json({
      message: "Contact submitted successfully",
    });
  } catch (err) {
    console.error("Contact Form Mail Error:", err);

    return res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  }
};