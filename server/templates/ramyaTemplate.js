const ramyaTemplate = (data) => {
  const date = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  

  return {
    subject: `💧 New Service Enquiry: ${data.serviceType || "General Enquiry"} - ${data.name}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); background-color: #f8fafc;">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); color: #ffffff; padding: 35px 25px; text-align: center;">
          <h1 style="margin: 0; font-size: 26px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase;">Ramya Aquafier</h1>
          <p style="margin: 8px 0 0; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; opacity: 0.9;">Service & Installation Request</p>
        </div>
        
        <!-- Content Body -->
        <div style="padding: 35px 30px; background-color: #ffffff;">
          <p style="font-size: 15px; color: #475569; line-height: 1.6; margin-top: 0; margin-bottom: 25px;">
            Hello Admin, you have received a new service enquiry from the <strong>Ramya Aquafier</strong> website contact form.
          </p>
          
          <!-- Details Table -->
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px; background-color: #f0f9ff; border-radius: 12px; overflow: hidden; border: 1px solid #e0f2fe;">
            <tr>
              <td style="padding: 14px 18px; border-bottom: 1px solid #e0f2fe; font-weight: 700; color: #0369a1; width: 35%; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Full Name:</td>
              <td style="padding: 14px 18px; border-bottom: 1px solid #e0f2fe; color: #0f172a; font-size: 14px; font-weight: 600;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 14px 18px; border-bottom: 1px solid #e0f2fe; font-weight: 700; color: #0369a1; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Phone Number:</td>
              <td style="padding: 14px 18px; border-bottom: 1px solid #e0f2fe; color: #0f172a; font-size: 14px; font-weight: 600;">${data.phone}</td>
            </tr>
            <tr>
              <td style="padding: 14px 18px; border-bottom: 1px solid #e0f2fe; font-weight: 700; color: #0369a1; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Email Address:</td>
              <td style="padding: 14px 18px; border-bottom: 1px solid #e0f2fe; font-size: 14px;">
                <a href="mailto:${data.email}" style="color: #0284c7; text-decoration: none; font-weight: 700;">${data.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 14px 18px; font-weight: 700; color: #0369a1; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Service Type:</td>
              <td style="padding: 14px 18px; color: #0f172a; font-size: 14px; font-weight: 600; background-color: #e0f2fe;">${data.serviceType || "Not Specified"}</td>
            </tr>
          </table>

          <!-- Message Block -->
          <div style="margin-bottom: 25px;">
            <h3 style="color: #0f172a; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-top: 0; margin-bottom: 12px; font-weight: 800; border-left: 4px solid #0284c7; padding-left: 12px;">Customer Message</h3>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 10px; color: #334155; line-height: 1.7; border: 1px solid #e2e8f0; font-size: 14px; white-space: pre-line;">
              ${data.message || "No specific details provided."}
            </div>
          </div>


          
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f1f5f9; color: #64748b; padding: 20px; text-align: center; font-size: 11px; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Ramya Aquafier Portal</p>
          <p style="margin: 4px 0 0;">Received at: ${date}</p>
        </div>
      </div>
    `,
  };
};

module.exports = ramyaTemplate;
