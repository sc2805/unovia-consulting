// =============================================================================
// Email Utility — Contact Form Email Sender via Resend
// =============================================================================

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL || "info@unoviaconsulting.com";

  // In development without API key, just log the email
  if (!apiKey) {
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("📧 Contact Form Submission (dev mode)");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log(`Name:    ${data.name}`);
    console.log(`Email:   ${data.email}`);
    console.log(`Phone:   ${data.phone}`);
    console.log(`Service: ${data.service}`);
    console.log(`Message: ${data.message}`);
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    return { success: true, id: "dev-mode" };
  }

  // Send via Resend API
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Unovia Consulting <noreply@unoviaconsulting.com>",
      to: [contactEmail],
      subject: `New Inquiry: ${data.service} — ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0F2B5B; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #C5A55A; margin: 0; font-size: 20px;">New Consultation Request</h1>
          </div>
          <div style="background: #ffffff; padding: 24px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 120px;">Name</td>
                <td style="padding: 8px 0; font-weight: 600;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Phone</td>
                <td style="padding: 8px 0;">${data.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Service</td>
                <td style="padding: 8px 0;">${data.service}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
            <p style="color: #6b7280; margin: 0 0 8px;">Message:</p>
            <p style="margin: 0; line-height: 1.6;">${data.message}</p>
          </div>
          <div style="background: #f9fafb; padding: 16px 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
            <p style="margin: 0; font-size: 12px; color: #9ca3af;">Sent from Unovia Consulting website contact form</p>
          </div>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to send email");
  }

  return await response.json();
}
