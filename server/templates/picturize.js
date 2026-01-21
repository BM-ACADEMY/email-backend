module.exports = function picturizeMail({ firstName, lastName, email, phone, subject, message }) {
  const fullName = `${firstName} ${lastName}`;
  
  return {
    adminSubject: `New Picturize Inquiry: ${subject}`,
    userSubject: "We've received your Picturize inquiry!",
    
    adminHtml: `
      <div style="font-family:Arial; background:#fff5f7; padding:40px;">
        <div style="max-width:600px; margin:auto; background:white; padding:30px; border-radius:20px; border: 2px solid #ff0040;">
          <h2 style="color:#ff0040;">New Website Inquiry</h2>
          <p><strong>From:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top:20px; padding:15px; background:#f8f8f8; border-radius:10px;">
            <strong>Message:</strong><br/>${message}
          </div>
        </div>
      </div>
    `,

    userHtml: `
      <div style="font-family:Arial; text-align:center; padding:40px;">
        <h1 style="color:#ff0040;">Hello ${firstName}!</h1>
        <p>Thanks for reaching out to Picturize regarding <strong>${subject}</strong>.</p>
        <p>Our team will get back to you shortly.</p>
        <hr style="border:none; border-top:1px solid #eee; margin:20px 0;">
        <small style="color:#888;">This is an automated response from Picturize.</small>
      </div>
    `
  };
};