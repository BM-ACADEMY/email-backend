module.exports = function contactMail({ username, email, phoneNumber, description }) {
  return {
    subject: "🚀 New Client Inquiry via Contact Form Bmtechx Portfolio",
    html: `
    <div style="font-family: Arial, sans-serif; background:#f5f7fa; padding: 40px;">
      <div style="max-width:600px; margin:auto; background:white; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.1);">
        <div style="background:#ffb100; padding:25px; text-align:center; border-radius:12px 12px 0 0;">
          <h1 style="color:#000; margin:0; font-size:24px;">New Project Inquiry!</h1>
        </div>
        <div style="padding:30px;">
          <p style="font-size:16px; color:#333;">Hello Admin,</p>
          <p style="color:#555; line-height:1.6;">
            A new user has submitted a contact form to share their project idea. Here are the details:
          </p>
          <div style="background:#f9fafc; border:1px solid #e5e7eb; border-radius:10px; padding:20px; margin-top:20px;">
            <p><strong>Name:</strong> ${username}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phoneNumber}</p>
            <p><strong>Project Details:</strong></p>
            <blockquote style="border-left: 4px solid #ffb100; margin: 10px 0; padding-left: 10px; color:#555;">
              ${description}
            </blockquote>
          </div>
        </div>
      </div>
    </div>`
  };
};