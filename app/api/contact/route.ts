import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, company, industry, currentERP, message } = body;

    console.log("=== CONTACT FORM SUBMISSION RECEIVED ===");
    console.log("Form Data:", { fullName, email, phone, company, industry, currentERP, message });

    // 1. Basic validation
    if (!fullName || !email || !phone || !company || !industry || !message) {
      console.log("Status: Validation Failed (Missing Fields)");
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const adminRecipient = 'tech@erptitans.com';
    console.log("Email Recipient:", adminRecipient);

    // 2. Send emails via Outlook SMTP
    try {
      // Send Admin Notification
      await sendEmail({
        to: adminRecipient,
        subject: 'New ERP Titans Contact Form Submission',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #334155; line-height: 1.6;">
            <!-- Header Banner -->
            <div style="background-color: #1a365d; color: white; padding: 24px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; font-size: 24px;">ERP Titans</h1>
            </div>
            
            <!-- Main Content -->
            <div style="padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px; background-color: white;">
              <h2 style="margin-top: 0; color: #1e3a8a; font-size: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px;">New Contact Form Submission</h2>
              
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 24px 0;">
                <p style="margin: 8px 0;"><strong>Name:</strong> ${fullName}</p>
                <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: underline;">${email}</a></p>
                <p style="margin: 8px 0;"><strong>Phone:</strong> ${phone}</p>
                <p style="margin: 8px 0;"><strong>Company:</strong> ${company}</p>
                <p style="margin: 8px 0;"><strong>Industry:</strong> ${industry}</p>
                <p style="margin: 8px 0;"><strong>Current ERP:</strong> ${currentERP || 'Not specified'}</p>
                <p style="margin: 8px 0; margin-top: 16px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;"><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
              </div>

              <h3 style="color: #1e3a8a; font-size: 16px; margin-bottom: 8px;">Message:</h3>
              <div style="background-color: #f0f9ff; border-left: 4px solid #1e3a8a; padding: 16px; border-radius: 0 8px 8px 0; white-space: pre-wrap;">${message}</div>
            </div>
          </div>
        `,
      });

      // Send User Confirmation
      await sendEmail({
        to: email,
        subject: 'Thank You for Contacting ERP Titans',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #334155; line-height: 1.6;">
            <!-- Header Banner -->
            <div style="background-color: #1a365d; color: white; padding: 24px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; font-size: 24px;">Thank You for Your Inquiry</h1>
            </div>
            
            <!-- Main Content -->
            <div style="padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px; background-color: white;">
              <p style="margin-top: 0;">Dear ${fullName},</p>
              
              <p>Thank you for reaching out to <strong>ERP Titans</strong>. We appreciate your interest in our ERP recovery and optimization services.</p>
              
              <p>We have received your inquiry and our team is reviewing the details you provided. We understand that ERP challenges can impact your business operations, and we're committed to providing you with a thoughtful and comprehensive response.</p>
              
              <!-- What to Expect Box -->
              <div style="background-color: #f0f9ff; border-left: 4px solid #1e3a8a; padding: 20px; border-radius: 0 8px 8px 0; margin: 24px 0;">
                <h3 style="margin-top: 0; color: #1e3a8a; font-size: 16px;">What to Expect:</h3>
                <p style="margin-bottom: 0;">Our specialists will analyze your situation and reach out within <strong>24 hours</strong> with initial insights and next steps tailored to your specific needs. If you have any urgent questions in the meantime, please don't hesitate to contact us directly at <a href="mailto:sales@erptitans.com" style="color: #2563eb; text-decoration: underline;">sales@erptitans.com</a>.</p>
              </div>
              
              <!-- Your Information Box -->
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 24px 0;">
                <h3 style="margin-top: 0; color: #1e3a8a; font-size: 16px;">Your Information:</h3>
                <p style="margin: 8px 0;"><strong>Name:</strong> ${fullName}</p>
                <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: underline;">${email}</a></p>
                <p style="margin: 8px 0;"><strong>Phone:</strong> ${phone}</p>
                <p style="margin: 8px 0;"><strong>Company:</strong> ${company}</p>
                <p style="margin: 8px 0;"><strong>Industry:</strong> ${industry}</p>
              </div>

              <p>We look forward to partnering with you to unlock your ERP system's full potential and drive your business forward.</p>
              
              <p>Best regards,</p>
              
              <!-- Footer / Signature -->
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
              
              <p style="margin: 4px 0; font-weight: bold; color: #475569;">ERP Titans</p>
              <p style="margin: 4px 0; color: #64748b;">ERP Recovery Specialists for Global SMEs</p>
              <p style="margin: 4px 0;">📧 <a href="mailto:sales@erptitans.com" style="color: #2563eb; text-decoration: none;">sales@erptitans.com</a></p>
              <p style="margin: 4px 0;">🌐 <a href="http://www.erptitans.com" style="color: #2563eb; text-decoration: none;">www.erptitans.com</a></p>
            </div>
          </div>
        `,
      });

      console.log("Status: Success");
      return NextResponse.json({ success: true }, { status: 200 });

    } catch (apiErr: any) {
      console.log("Status: Catch Block Failure (Outlook SMTP)");
      console.error(apiErr);
      return NextResponse.json({ error: apiErr?.message || 'Email sending failed' }, { status: 500 });
    }
  } catch (error: any) {
    console.log("Status: Catch Block Failure (Internal)");
    console.error(error);
    return NextResponse.json(
      { error: error?.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
