import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Validation helper
function validateFields({ name, email, message }) {
  if (!name || !email || !message) {
    return 'All fields are required.';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Invalid email address.';
  }
  return null;
}

// Sanitize message to prevent HTML injection
function sanitize(input) {
  return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export async function POST(req) {
  try {
    const body = await req.json();
    console.log('📨 Incoming Form Submission:', body);

    // 1. ✅ Validate
    const validationError = validateFields(body);
    if (validationError) {
      return NextResponse.json({ success: false, error: validationError }, { status: 400 });
    }

    const { name, email, message } = body;

    // 2. ✉️ Setup transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 3. 🧪 Verify SMTP
    await transporter.verify();
    console.log('✅ SMTP transporter is ready');

    // 4. 📤 Send email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_USER,
      subject: 'New Contact Form Submission',
      text: message,
      html: `
        <h2>Contact Form</h2>
        <p><strong>Name:</strong> ${sanitize(name)}</p>
        <p><strong>Email:</strong> ${sanitize(email)}</p>
        <p><strong>Message:</strong><br/>${sanitize(message)}</p>
      `,
    });

    console.log('✅ Email sent successfully');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('❌ Error in /api/contact:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
