import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const DESTINATION_EMAIL = "ana@laneta.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      mainAccountUrl,
      subject,
      message,
    } = body;

    if (!fullName || !email || !phone || !mainAccountUrl || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const toEmail = DESTINATION_EMAIL;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASSWORD;

    if (!smtpUser || !smtpPass) {
      console.error("SMTP credentials not configured");
      return NextResponse.json(
        { error: "Email service not configured. Please contact support." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Email body with ALL form variables visible - no information lost
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #6641ed, #ff47ac); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f8f9fa; padding: 24px; border: 1px solid #e2e8f0; border-top: none; }
    .field { margin-bottom: 16px; }
    .label { font-weight: bold; color: #6641ed; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
    .value { background: white; padding: 12px; border-radius: 6px; border-left: 4px solid #6641ed; }
    .message-box { background: white; padding: 16px; border-radius: 6px; border-left: 4px solid #ff47ac; white-space: pre-wrap; }
    .footer { margin-top: 20px; font-size: 12px; color: #64748b; }
  </style>
</head>
<body>
  <div class="header">
    <h2 style="margin: 0;">📬 New Creator Inquiry</h2>
    <p style="margin: 8px 0 0 0; opacity: 0.9;">Meta Breakthrough Bonus - Contact Form</p>
  </div>
  <div class="content">
    <div class="field">
      <div class="label">Full Name</div>
      <div class="value">${escapeHtml(fullName)}</div>
    </div>
    <div class="field">
      <div class="label">Email</div>
      <div class="value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></div>
    </div>
    <div class="field">
      <div class="label">Phone Number (with country code)</div>
      <div class="value">${escapeHtml(phone)}</div>
    </div>
    <div class="field">
      <div class="label">Main Account (Instagram / TikTok / YouTube URL)</div>
      <div class="value"><a href="${escapeHtml(mainAccountUrl)}" target="_blank">${escapeHtml(mainAccountUrl)}</a></div>
    </div>
    <div class="field">
      <div class="label">Subject</div>
      <div class="value">${escapeHtml(subject)}</div>
    </div>
    <div class="field">
      <div class="label">Message</div>
      <div class="message-box">${escapeHtml(message)}</div>
    </div>
    <div class="footer">
      Received from La Neta landing page • Meta Breakthrough Bonus Program
    </div>
  </div>
</body>
</html>
    `.trim();

    const textContent = `
New Creator Inquiry - Meta Breakthrough Bonus Program
====================================================

FULL NAME: ${fullName}
EMAIL: ${email}
PHONE: ${phone}
MAIN ACCOUNT (URL): ${mainAccountUrl}
SUBJECT: ${subject}

MESSAGE:
${message}

---
Received from La Neta landing page
    `.trim();

    await transporter.sendMail({
      from: `"La Neta Landing" <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `[Creator Inquiry] ${subject} - ${fullName}`,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to send message",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
