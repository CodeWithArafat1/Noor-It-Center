import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // 1. Destructure 'phone' instead of 'email'
    const { name, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Lead from Noor IT Center: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-w: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
          <h2 style="color: #00B87A; margin-top: 0;">New Contact Form Submission</h2>
          <p style="margin-bottom: 8px;"><strong>Name:</strong> ${name}</p>
          <p style="margin-bottom: 8px;"><strong>Phone Number:</strong> <a href="tel:${phone}">${phone}</a></p>
          <p style="margin-top: 20px; margin-bottom: 8px;"><strong>Message:</strong></p>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; color: #334155; line-height: 1.6;">
            ${message.replace(/\n/g, '<br/>')}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}