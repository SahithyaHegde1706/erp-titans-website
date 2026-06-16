import nodemailer from 'nodemailer';

export async function sendEmail({
  to,
  subject,
  html,
  attachments
}: {
  to: string;
  subject: string;
  html: string;
  attachments?: { name: string; contentBytes: string; contentType: string }[];
}) {
  const user = process.env.OUTLOOK_EMAIL;
  const pass = process.env.OUTLOOK_PASSWORD;

  if (!user || !pass) {
    throw new Error("Missing OUTLOOK_EMAIL or OUTLOOK_PASSWORD in environment variables.");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: user,
      pass: pass
    },
    tls: {
      ciphers: 'SSLv3'
    }
  });

  const mailOptions: any = {
    from: `"ERP Titans" <${user}>`,
    to: to,
    subject: subject,
    html: html,
  };

  if (attachments && attachments.length > 0) {
    mailOptions.attachments = attachments.map(att => ({
      filename: att.name,
      content: Buffer.from(att.contentBytes, 'base64'),
      contentType: att.contentType,
    }));
  }

  try {
    await transporter.sendMail(mailOptions);
  } catch (error: any) {
    throw new Error(`Failed to send email via Outlook SMTP: ${error.message}`);
  }
}
