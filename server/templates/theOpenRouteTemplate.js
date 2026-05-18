const theOpenRouteTemplate = (data) => {
  return {
    subject: `The Open Route - New Inquiry: ${data.subject || "Contact Form Submission"}`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 30px auto; border: 1px solid #edf2f7; border-radius: 16px; overflow: hidden; box-shadow: 0 12px 30px rgba(0,0,0,0.04); background-color: #FAF9F0;">
        
        <!-- Premium Brand Header in Brand Coral Red -->
        <div style="background-color: #FF3E3E; color: #ffffff; padding: 40px 30px; text-align: center; position: relative;">
          <h1 style="margin: 0; font-size: 28px; font-weight: 800; letter-spacing: 4px; text-transform: uppercase; color: #ffffff;">The Open Route</h1>
          <div style="width: 60px; height: 3px; background-color: #FAF9F0; margin: 15px auto 10px auto; border-radius: 2px;"></div>
          <p style="margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 2px; color: #FAF9F0; text-transform: uppercase; opacity: 0.9;">New Website Inquiry Received</p>
        </div>
        
        <!-- Elegant Body Content -->
        <div style="padding: 40px 35px; background-color: #ffffff;">
          <p style="font-size: 15px; color: #4a5568; line-height: 1.6; margin-top: 0; margin-bottom: 30px; text-align: center;">
            You have received a new contact submission from your website's inquiry form. The details of the request are outlined below:
          </p>
          
          <!-- Structured Details Card with Warm Cream Background -->
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 35px; background-color: #FAF9F0; border-radius: 12px; overflow: hidden; border: 1px solid #f3eed8;">
            <tr>
              <td style="padding: 16px 20px; border-bottom: 1px solid #f3eed8; font-weight: 700; color: #FF3E3E; width: 30%; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Full Name:</td>
              <td style="padding: 16px 20px; border-bottom: 1px solid #f3eed8; color: #1a202c; font-size: 14px; font-weight: 600;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 16px 20px; border-bottom: 1px solid #f3eed8; font-weight: 700; color: #FF3E3E; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Email Address:</td>
              <td style="padding: 16px 20px; border-bottom: 1px solid #f3eed8; font-size: 14px;">
                <a href="mailto:${data.email}" style="color: #FF3E3E; text-decoration: none; font-weight: 700; border-bottom: 1px dashed rgba(255, 62, 62, 0.4);">${data.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 16px 20px; border-bottom: 1px solid #f3eed8; font-weight: 700; color: #FF3E3E; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Subject:</td>
              <td style="padding: 16px 20px; border-bottom: 1px solid #f3eed8; color: #1a202c; font-size: 14px; font-weight: 600;">${data.subject}</td>
            </tr>
          </table>

          <!-- Message Block with Left Border in Brand Red -->
          <div style="margin-bottom: 30px;">
            <h3 style="color: #1a202c; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-top: 0; margin-bottom: 12px; font-weight: 800; border-left: 4px solid #FF3E3E; padding-left: 12px;">Inquiry Message</h3>
            <div style="background-color: #FAF9F0; padding: 25px; border-radius: 10px; color: #2d3748; line-height: 1.8; border: 1px solid #f3eed8; font-size: 14px; white-space: pre-line; box-shadow: inset 0 2px 4px rgba(0,0,0,0.01);">
              ${data.message || "No message content provided."}
            </div>
          </div>
        </div>
        
        <!-- Premium Brand Footer in Brand Red -->
        <div style="background-color: #FF3E3E; color: #ffffff; padding: 20px; text-align: center; font-size: 10px; text-transform: uppercase; letter-spacing: 3px; font-weight: 600; border-top: 1px solid #FF3E3E;">
          The Open Room 
        </div>
      </div>
    `,
  };
};

module.exports = theOpenRouteTemplate;

