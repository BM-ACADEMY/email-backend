const enquiryTemplate = (data) => {
  return {
    subject: `New Client Enquiry: ${data.fullName} - ${data.urgency} Urgency`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #4f46e5; padding: 20px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0;">New Counselling Enquiry</h2>
        </div>
        
        <div style="padding: 20px; background-color: #f9fafb;">
          
          <h3 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 5px;">👤 Personal Information</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px;">
            <tr><td style="padding: 8px; font-weight: bold;">Full Name:</td><td style="padding: 8px;">${data.fullName}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">DOB:</td><td style="padding: 8px;">${data.dob}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Gender:</td><td style="padding: 8px;">${data.gender}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${data.phone}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Preferred Contact:</td><td style="padding: 8px;">${data.preferredContact}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Country:</td><td style="padding: 8px;">${data.country}</td></tr>
          </table>

          <h3 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 5px;">📅 Appointment Details</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px;">
            <tr><td style="padding: 8px; font-weight: bold;">Mode:</td><td style="padding: 8px;">${data.counsellingMode}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Requested Time:</td><td style="padding: 8px;">${data.preferredDateTime}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Time Zone:</td><td style="padding: 8px;">${data.timeZone}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Counselor Pref:</td><td style="padding: 8px;">${data.counselorPreference}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Urgency:</td><td style="padding: 8px; color: ${data.urgency === 'Urgent' ? 'red' : 'black'}; font-weight: bold;">${data.urgency}</td></tr>
          </table>

          <h3 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 5px;">📝 Reason & History</h3>
          <p><strong>Reason for Enquiry:</strong><br/>${data.reason}</p>
          <p><strong>Previous Counselling:</strong> ${data.previousCounselling}</p>
          ${data.previousDetails ? `<p><strong>Previous Details:</strong><br/>${data.previousDetails}</p>` : ''}

          <h3 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 5px;">✅ Consent & Signature</h3>
          <p style="font-size: 12px; color: #555;">
            Emergency Consent: ${data.consentEmergency ? 'Yes' : 'No'}<br/>
            Participation Consent: ${data.consentParticipate ? 'Yes' : 'No'}<br/>
            Privacy Consent: ${data.consentPrivacy ? 'Yes' : 'No'}
          </p>
          <p><strong>Signed by:</strong> ${data.signature}</p>
          <p><strong>Date:</strong> ${data.date}</p>

        </div>
        <div style="background-color: #333; color: white; padding: 10px; text-align: center; font-size: 12px;">
          Sent via ABM Groups Enquiry System
        </div>
      </div>
    `,
  };
};

module.exports = enquiryTemplate;