// app/api/send-po/route.js

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { name, email, message, product } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `🧾 PO Query for ${product}`,
      text: `
New Purchase Order Query:

👤 Name: ${name}
📧 Email: ${email}
📦 Product: ${product}
💬 Message: ${message || 'N/A'}
      `,
    });

    return NextResponse.json({ message: 'Email sent ✅' });
  } catch (err) {
    console.error('Email send failed:', err);
    return NextResponse.json({ error: 'Failed to send email ❌' }, { status: 500 });
  }
}
