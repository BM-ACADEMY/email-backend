module.exports = function multiverseEmail({ name, email, phone, message }) {
  const mainColor = "#00224D"; // Navy
  const accentColor = "#ea580c"; // Orange
  const date = new Date().toLocaleString("en-US", { timeZone: "Asia/Qatar" });

  return {
    adminSubject: `🚀 New Enquiry: ${name}`,
    userSubject: `Thank you for contacting Multiverse International`,

    // --- ADMIN EMAIL ---
    adminHtml: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f7fb; padding: 40px 0;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
          <div style="background-color: ${mainColor}; padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Website Enquiry</h1>
          </div>
          <div style="padding: 40px;">
            <p style="color: #555;"><strong>Hello Admin,</strong><br>You have a new message.</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr><td style="padding: 10px; border-bottom: 1px solid #eee; color: #888;">Name</td><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">${name}</td></tr>
              <tr><td style="padding: 10px; border-bottom: 1px solid #eee; color: #888;">Email</td><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">${email}</td></tr>
              <tr><td style="padding: 10px; border-bottom: 1px solid #eee; color: #888;">Phone</td><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">${phone}</td></tr>
            </table>
            <div style="background-color: #f9fafc; padding: 20px; border-left: 4px solid ${accentColor}; margin-top: 25px;">
              <p style="margin: 0; color: #666;">"${message}"</p>
            </div>
            <p style="text-align: right; color: #999; font-size: 12px; margin-top: 30px;">Received: ${date}</p>
          </div>
        </div>
      </div>
    `,

    // --- USER RECEIPT EMAIL ---
    userHtml: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f7fb; padding: 40px 0;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
          <div style="background-color: ${mainColor}; padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px;">Multiverse International</h1>
          </div>
          <div style="padding: 40px; text-align: center;">
            <h2 style="color: ${mainColor}; margin-top: 0;">We received your message!</h2>
            <p style="color: #555; line-height: 1.6;">
              Hi <strong>${name}</strong>,<br>
              Thank you for reaching out. Our team will contact you shortly at <strong>${phone}</strong>.
            </p>
            <div style="margin: 30px 0; border-top: 1px solid #eee; padding-top: 20px;">
              <a href="https://multiverseint.com" style="background-color: ${accentColor}; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Visit Website</a>
            </div>
          </div>
        </div>
      </div>
    `
  };
};