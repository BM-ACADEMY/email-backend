module.exports = function registrationMail({ name, email, phone, city, status, date, source }) {
  return {
    subject: "🎉 Webinar Registration Received!",
    html: `
    <div style="font-family: Arial; background:#f5f7fa; padding: 40px;">
      <div style="max-width:600px; margin:auto; background:white; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.1);">
        <div style="background:#ffb100; padding:25px; text-align:center;">
          <h1 style="color:#000; margin:0; font-size:24px;">🎉 Registration Confirmed!</h1>
          <p style="color:#222; margin-top:8px; font-size:16px;">Ai full stack development Webinar</p>
        </div>
        <div style="padding:30px;">
          <p style="font-size:16px; color:#333;">Hi <strong>${name}</strong>,</p>
          <p style="color:#555; line-height:1.6;">
            Thank you for registering! We're excited to have you join us.
          </p>
          <div style="background:#f9fafc; border:1px solid #e5e7eb; border-radius:10px; padding:20px; margin-top:20px;">
            <h3>Your Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email || "Not Provided"}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>Status:</strong> ${status}</p>
            <p><strong>Preferred Date:</strong> ${date}</p>
            <p><strong>Source:</strong> ${source}</p>
          </div>
        </div>
        <div style="text-align:center; padding:20px; background:#ffffff; border-top:1px solid #eee; border-radius:0 0 12px 12px;">
          <p style="font-size:14px; color:#666; margin:0 0 10px;">
            Have any doubts or questions?
          </p>
          <a href="https://chat.whatsapp.com/CsLBGBa3jjvGL8Sygb8CpP" 
             style="display:inline-block; font-size:15px; color:#ff3b30; text-decoration:none; font-weight:bold;">
            Whatsapp Groups
          </a>
        </div>
      </div>
    </div>`
  };
};


