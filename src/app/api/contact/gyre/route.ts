import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const DESTINATION_EMAIL = "ana@laneta.com";
const GYRE_SUBJECT = "Gyre opportunity – Contact";

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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, message, phone, channelUrl } = body;

    if (!fullName?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASSWORD;

    if (!smtpUser || !smtpPass) {
      console.error("SMTP credentials not configured");
      return NextResponse.json(
        { error: "Email service not configured. Please try again later." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #F20544; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f8f9fa; padding: 24px; border: 1px solid #e2e8f0; border-top: none; }
    .field { margin-bottom: 16px; }
    .label { font-weight: bold; color: #F20544; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
    .value { background: white; padding: 12px; border-radius: 6px; border-left: 4px solid #F20544; }
    .message-box { background: white; padding: 16px; border-radius: 6px; border-left: 4px solid #F20544; white-space: pre-wrap; }
    .footer { margin-top: 20px; font-size: 12px; color: #64748b; }
  </style>
</head>
<body>
  <div class="header">
    <h2 style="margin: 0;">Gyre – Contact</h2>
    <p style="margin: 8px 0 0 0; opacity: 0.9;">Let's talk & start streaming</p>
  </div>
  <div class="content">
    <div class="field">
      <div class="label">Full Name</div>
      <div class="value">${escapeHtml(fullName.trim())}</div>
    </div>
    <div class="field">
      <div class="label">Email</div>
      <div class="value"><a href="mailto:${escapeHtml(email.trim())}">${escapeHtml(email.trim())}</a></div>
    </div>
    ${phone?.trim() ? `<div class="field"><div class="label">Phone</div><div class="value">${escapeHtml(phone.trim())}</div></div>` : ""}
    ${channelUrl?.trim() ? `<div class="field"><div class="label">Channel / profile URL</div><div class="value"><a href="${escapeHtml(channelUrl.trim())}" target="_blank">${escapeHtml(channelUrl.trim())}</a></div></div>` : ""}
    <div class="field">
      <div class="label">Message</div>
      <div class="message-box">${escapeHtml(message.trim())}</div>
    </div>
    <div class="footer">
      Received from La Neta landing page • Gyre opportunity
    </div>
  </div>
</body>
</html>
    `.trim();

    const textContent = [
      "Gyre – Contact (Let's talk & start streaming)",
      "=============================================",
      "",
      `FULL NAME: ${fullName.trim()}`,
      `EMAIL: ${email.trim()}`,
      ...(phone?.trim() ? [`PHONE: ${phone.trim()}`, ""] : []),
      ...(channelUrl?.trim() ? [`CHANNEL URL: ${channelUrl.trim()}`, ""] : []),
      "MESSAGE:",
      message.trim(),
      "",
      "---",
      "Received from La Neta landing page • Gyre opportunity",
    ].join("\n");

    await transporter.sendMail({
      from: `"La Neta Landing" <${smtpUser}>`,
      to: DESTINATION_EMAIL,
      replyTo: email.trim(),
      subject: `[Gyre] ${GYRE_SUBJECT} – ${fullName.trim()}`,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Gyre contact form error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to send message",
      },
      { status: 500 }
    );
  }
}
