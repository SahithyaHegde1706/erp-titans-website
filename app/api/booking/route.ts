import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { createTeamsMeeting } from '@/lib/graph';

function generateICS(selectedDate: string, selectedTime: string, teamsUrl: string) {
  // selectedDate: "YYYY-MM-DD"
  // selectedTime: "HH:MM"
  const dateStr = selectedDate.replace(/-/g, '');
  const timeStr = selectedTime.replace(':', '') + '00';
  
  // Calculate end time (+1 hour)
  const [hourStr, minStr] = selectedTime.split(':');
  const startHour = parseInt(hourStr, 10);
  const endHour = (startHour + 1).toString().padStart(2, '0');
  const endTimeStr = endHour + minStr + '00';

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//ERP Titans//Health Audit Booking//EN
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VEVENT
SUMMARY:ERP Health Audit Consultation
DTSTART;TZID=America/Denver:${dateStr}T${timeStr}
DTEND;TZID=America/Denver:${dateStr}T${endTimeStr}
LOCATION:${teamsUrl}
DESCRIPTION:ERP Titans Health Audit Consultation.\\n\\nJoin Microsoft Teams Meeting: ${teamsUrl}
STATUS:CONFIRMED
SEQUENCE:0
BEGIN:VALARM
TRIGGER:-PT15M
ACTION:DISPLAY
DESCRIPTION:Reminder
END:VALARM
END:VEVENT
END:VCALENDAR`;

  return Buffer.from(icsContent).toString('base64');
}

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

    let teamsMeetingUrl = '';
    console.log("--> [Booking Flow] Attempting to create Teams meeting...");
    try {
      const start = new Date(`${selectedDate}T${selectedTime}:00-06:00`);
      const end = new Date(start.getTime() + 60 * 60 * 1000);
      console.log(`--> [Booking Flow] Calculated Times - Start: ${start.toISOString()}, End: ${end.toISOString()}`);
      
      teamsMeetingUrl = await createTeamsMeeting(
        `ERP Health Audit - ${fullName}`,
        start.toISOString(),
        end.toISOString()
      );
      console.log("--> [Booking Flow] SUCCESS: Teams Meeting Created:", teamsMeetingUrl);
    } catch (error: any) {
      console.error("--> [Booking Flow] ERROR: Failed to create Teams meeting:", error?.message);
      // Fallback for local testing if Graph API is not configured
      teamsMeetingUrl = 'https://teams.microsoft.com/l/meetup-join/fallback';
      console.log("--> [Booking Flow] WARNING: Using fallback Teams URL:", teamsMeetingUrl);
    }

    const adminRecipient = 'tech@erptitans.com';
    console.log("Email Recipient:", adminRecipient);

    const icsAttachmentBase64 = generateICS(selectedDate, selectedTime, teamsMeetingUrl);

    // 2. Send emails via Outlook SMTP
    try {
      // Send Admin Notification
      await sendEmail({
        to: adminRecipient,
        subject: 'ERP Health Audit Booking Notification',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #334155; line-height: 1.6;">
            <!-- Header Banner -->
            <div style="background-color: #1a365d; color: white; padding: 24px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; font-size: 24px;">ERP Titans</h1>
            </div>
            
            <!-- Main Content -->
            <div style="padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px; background-color: white;">
              <h2 style="margin-top: 0; color: #1e3a8a; font-size: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px;">New ERP Health Audit Booking</h2>
              
              <div style="background-color: #f0f9ff; border-left: 4px solid #1e3a8a; padding: 20px; border-radius: 0 8px 8px 0; margin: 24px 0;">
                <h3 style="margin-top: 0; color: #1e3a8a; font-size: 16px;">Meeting Details</h3>
                <p style="margin: 8px 0;"><strong>Date:</strong> ${selectedDate}</p>
                <p style="margin: 8px 0;"><strong>Time:</strong> ${selectedTime} (MT)</p>
                <p style="margin: 8px 0;"><strong>Teams Link:</strong> <a href="${teamsMeetingUrl}" style="color: #2563eb; text-decoration: underline;">Join Meeting</a></p>
              </div>

              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 24px 0;">
                <h3 style="margin-top: 0; color: #1e3a8a; font-size: 16px;">Contact Information</h3>
                <p style="margin: 8px 0;"><strong>Name:</strong> ${fullName}</p>
                <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: underline;">${email}</a></p>
                <p style="margin: 8px 0;"><strong>Phone:</strong> ${phone}</p>
                <p style="margin: 8px 0;"><strong>Company:</strong> ${company}</p>
                <p style="margin: 8px 0; margin-top: 16px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;"><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
              </div>
            </div>
          </div>
        `,
      });

      // Send User Confirmation with ICS
      await sendEmail({
        to: email,
        subject: 'Your ERP Health Audit Confirmation',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #334155; line-height: 1.6;">
            <!-- Header Banner -->
            <div style="background-color: #1a365d; color: white; padding: 32px 24px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; font-size: 24px;">✅ Meeting Confirmed!</h1>
              <p style="margin: 8px 0 0 0; font-size: 14px; color: #e2e8f0;">Your ERP Health Audit has been scheduled</p>
            </div>
            
            <!-- Main Content -->
            <div style="padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px; background-color: white;">
              <p style="margin-top: 0;">Dear ${fullName},</p>
              
              <p>Thank you for scheduling a consultation with <strong>ERP Titans</strong>. We're looking forward to discussing your ERP journey with you.</p>
              
              <!-- Dark Blue Meeting Summary Card -->
              <div style="background-color: #1a365d; color: white; padding: 24px; border-radius: 8px; margin: 24px 0;">
                <p style="margin: 0 0 16px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #cbd5e1;">YOUR MEETING IS CONFIRMED FOR</p>
                <div style="font-size: 18px; font-weight: bold; margin-bottom: 12px; display: flex; align-items: center;">
                  <span style="margin-right: 8px;">📅</span> ${new Date(selectedDate + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
                <div style="font-size: 16px; display: flex; align-items: center;">
                  <span style="margin-right: 8px;">🕒</span> ${selectedTime} MT (Mountain Time)
                </div>
              </div>
              
              <!-- Meeting Details Box -->
              <div style="background-color: #f8fafc; padding: 24px; border-radius: 8px; margin: 24px 0;">
                <h3 style="margin-top: 0; color: #1e3a8a; font-size: 16px;">Meeting Details</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tbody>
                    <tr><td style="padding: 8px 0; width: 120px; color: #64748b;">Date:</td><td style="padding: 8px 0; font-weight: 500;">${new Date(selectedDate + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</td></tr>
                    <tr><td style="padding: 8px 0; color: #64748b;">Time:</td><td style="padding: 8px 0; font-weight: 500;">${selectedTime} Mountain Time</td></tr>
                    <tr><td style="padding: 8px 0; color: #64748b;">Format:</td><td style="padding: 8px 0; font-weight: 500;">Microsoft Teams Meeting</td></tr>
                    <tr><td style="padding: 8px 0; color: #64748b;">Join Link:</td><td style="padding: 8px 0; font-weight: 500;"><a href="${teamsMeetingUrl}" style="background-color: #2563eb; color: white; padding: 8px 16px; border-radius: 6px; text-decoration: none; display: inline-block; margin-top: 4px;">Join Teams Meeting</a></td></tr>
                    <tr><td style="padding: 8px 0; color: #64748b;">Name:</td><td style="padding: 8px 0; font-weight: 500;">${fullName}</td></tr>
                    <tr><td style="padding: 8px 0; color: #64748b;">Company:</td><td style="padding: 8px 0; font-weight: 500;">${company}</td></tr>
                  </tbody>
                </table>
              </div>

              <!-- What to Prepare Box -->
              <div style="background-color: #fef9c3; border-left: 4px solid #eab308; padding: 20px; border-radius: 0 8px 8px 0; margin: 24px 0;">
                <h3 style="margin-top: 0; color: #854d0e; font-size: 16px;">What to Prepare</h3>
                <ul style="margin-bottom: 0; padding-left: 20px; color: #713f12;">
                  <li style="margin-bottom: 4px;">Overview of your current ERP system and any known issues</li>
                  <li style="margin-bottom: 4px;">Key business processes that are impacted</li>
                  <li>Your team's availability for implementation discussions</li>
                </ul>
              </div>
              
              <!-- Reschedule & Footer -->
              <div style="margin-top: 32px;">
                <p style="margin: 0 0 4px 0; font-weight: bold; color: #1e3a8a;">Need to Reschedule?</p>
                <p style="margin: 0 0 24px 0;">Contact us at <a href="mailto:sales@erptitans.com" style="color: #2563eb; text-decoration: underline;">sales@erptitans.com</a> and we'll find another time that works.</p>
                
                <p>Best regards,</p>
                
                <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
                
                <p style="margin: 4px 0; font-weight: bold; color: #475569;">ERP Titans</p>
                <p style="margin: 4px 0; color: #64748b;">ERP Recovery Specialists for Global SMEs</p>
                <p style="margin: 4px 0;">📧 <a href="mailto:sales@erptitans.com" style="color: #2563eb; text-decoration: none;">sales@erptitans.com</a></p>
                <p style="margin: 4px 0;">🌐 <a href="http://www.erptitans.com" style="color: #2563eb; text-decoration: none;">www.erptitans.com</a></p>
              </div>
            </div>
          </div>
        `,
        attachments: [
          {
            name: 'invite.ics',
            contentType: 'text/calendar',
            contentBytes: icsAttachmentBase64,
          }
        ]
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
