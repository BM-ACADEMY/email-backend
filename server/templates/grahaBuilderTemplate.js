const grahaBuilderTemplate = (data) => {
    return {
      subject: `New Technical Inquiry: ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
          <div style="background-color: #e4a11e; color: black; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">Graha Builders</h1>
            <p style="margin: 5px 0 0; font-size: 14px; font-weight: bold; opacity: 0.8;">Technical Consultation Request</p>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="font-size: 16px; color: #333;">You have received a new inquiry from the <strong>Graha Builders</strong> website.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555; width: 30%;">Full Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Email Address:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;"><a href="mailto:${data.email}" style="color: #e4a11e; text-decoration: none;">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Phone Number:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${data.phone}</td>
              </tr>
            </table>
  
            <div style="margin-top: 25px;">
              <h4 style="color: #555; margin-bottom: 10px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; border-left: 4px solid #e4a11e; padding-left: 10px;">Message / Project Description:</h4>
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; color: #444; line-height: 1.6; border: 1px solid #eee;">
                ${data.message || "No message provided."}
              </div>
            </div>
  
            <div style="margin-top: 30px; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
              <p style="font-size: 12px; color: #999;">This inquiry was sent automatically from the Graha Builders Contact Form.</p>
            </div>
          </div>
          <div style="background-color: #000; color: #fff; padding: 15px; text-align: center; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">
            Precision Engineering • Dedicated Support
          </div>
        </div>
      `,
    };
  };
  
  module.exports = grahaBuilderTemplate;
