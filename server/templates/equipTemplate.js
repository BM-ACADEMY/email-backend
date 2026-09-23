const equipTemplate = (data) => {
    return {
      subject: `New Contact Inquiry: ${data.subject || data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
          <div style="background-color: #2b6cb0; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">Equip Foundation</h1>
            <p style="margin: 5px 0 0; font-size: 14px; font-weight: bold; opacity: 0.8;">New Contact Inquiry</p>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="font-size: 16px; color: #333;">You have received a new inquiry from the <strong>Equip Foundation</strong> website.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555; width: 35%;">Full Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Organisation:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${data.organisation}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Email Address:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;"><a href="mailto:${data.email}" style="color: #2b6cb0; text-decoration: none;">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Phone Number:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${data.phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Subject:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${data.subject}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Engagement Type:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${data.engagementType}</td>
              </tr>
            </table>
  
            <div style="margin-top: 25px;">
              <h4 style="color: #555; margin-bottom: 10px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; border-left: 4px solid #2b6cb0; padding-left: 10px;">Message:</h4>
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; color: #444; line-height: 1.6; border: 1px solid #eee; white-space: pre-wrap;">${data.message || "No message provided."}</div>
            </div>
  
            <div style="margin-top: 30px; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
              <p style="font-size: 12px; color: #999;">This inquiry was sent automatically from the Equip Foundation Contact Form.</p>
            </div>
          </div>
        </div>
      `,
    };
  };
  
  module.exports = equipTemplate;
