import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, company, selectedDate, selectedTime } = body;

    console.log("=== BOOKING FORM SUBMISSION RECEIVED ===");
    console.log("Form Data:", { fullName, email, phone, company, selectedDate, selectedTime });

    // 1. Basic validation
    if (!fullName || !email || !phone || !company || !selectedDate || !selectedTime) {
      console.log("Status: Validation Failed (Missing Fields)");
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Replace with client's production email after Resend domain verification
    // Example: sales@erptitans.com
    const adminRecipient = 'hegdesahithya251@gmail.com';
    console.log("Email Recipient:", adminRecipient);

    // 2. Send email via Resend
    try {
      const response = await resend.emails.send({
        from: 'ERP Titans <onboarding@resend.dev>',
        to: adminRecipient,
        subject: 'ERP Health Audit Booking Confirmation',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0f4c81;">New ERP Health Audit Booking</h2>
            <p>A new health audit has been requested with the following details:</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tbody>
                <tr><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><strong>Full Name:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${fullName}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><strong>Email:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${email}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><strong>Phone:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${phone}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><strong>Company:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${company}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><strong>Selected Date:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${selectedDate}</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><strong>Selected Time:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${selectedTime} (MT)</td></tr>
                <tr><td style="padding: 10px;"><strong>Timestamp:</strong></td><td style="padding: 10px;">${new Date().toISOString()}</td></tr>
              </tbody>
            </table>
          </div>
        `,
      });

      console.log("Resend Response:", JSON.stringify(response, null, 2));

      if (response.error) {
        console.log("Status: Failure (Resend Error)");
        return NextResponse.json({ error: response.error.message || 'Failed to send email', details: response.error }, { status: 500 });
      }

      console.log("Status: Success");
      return NextResponse.json({ success: true, data: response.data }, { status: 200 });
    } catch (resendErr: any) {
      console.log("Status: Catch Block Failure (Resend SDK)");
      console.error(resendErr);
      return NextResponse.json({ error: resendErr?.message || 'Resend Promise failed' }, { status: 500 });
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
