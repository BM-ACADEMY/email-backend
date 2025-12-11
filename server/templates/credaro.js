module.exports = function enquiryMail({ name, email, company, industry, location, mobile, message }) {
  return {
    adminSubject: "📨 New Enquiry Received",
    userSubject: "🧾 Your Enquiry Has Been Received – Thank You!",

    adminHtml: `
      <div style="font-family:Arial;background:#f4f7fb;padding:40px;">
        <div style="max-width:650px;margin:auto;background:white;padding:30px;border-radius:12px;">
          <h2 style="color:#192d51;margin-bottom:20px;">📨 New Enquiry Received</h2>

          <p style="color:#333;font-size:15px;">
            A new enquiry has been submitted. Below are the details:
          </p>

          <div style="margin-top:20px;padding:20px;background:#f9fafc;border-radius:10px;border:1px solid #e5e7eb;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile:</strong> ${mobile}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Industry:</strong> ${industry}</p>
            <p><strong>Location:</strong> ${location || "Not Provided"}</p>
            <p><strong>Message:</strong> ${message || "No message"}</p>
          </div>
        </div>
      </div>
    `,

    userHtml: `
      <div style="font-family:Arial;background:#f4f7fb;padding:40px;">
        <div style="max-width:650px;margin:auto;background:white;padding:30px;border-radius:12px;text-align:center;">
          
          <h2 style="color:#192d51;margin-bottom:10px;">Thank You, ${name}! 🎉</h2>
          <p style="color:#333;font-size:15px;line-height:1.6;">
            We have received your enquiry and our team will contact you soon.
          </p>

          <div style="margin-top:20px;padding:20px;background:#f9fafc;border-radius:10px;border:1px solid #e5e7eb;text-align:left;">
            <h3>Your Submission Details</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile:</strong> ${mobile}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Industry:</strong> ${industry}</p>
            <p><strong>Location:</strong> ${location || "Not Provided"}</p>
            <p><strong>Message:</strong> ${message || "No message provided"}</p>
          </div>

          <p style="margin-top:20px;color:#666;font-size:13px;">
            This is an automated receipt for your enquiry.
          </p>
        </div>
      </div>
    `
  };
};
