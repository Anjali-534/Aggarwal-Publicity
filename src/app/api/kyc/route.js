// app/api/kyc/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const form = await req.json();

    const {
      fullName, entityType, dobOrIncorporation, pan, gstin,
      address, mobile, email, bankName, accountNumber,
      accountType, ifsc, branchAddress, product
    } = form;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"KYC Form" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: 'New KYC Submission',
      html: `
        <h2>New KYC Submission</h2>
        <p><strong>Full Name / Company:</strong> ${fullName}</p>
        <p><strong>Entity Type:</strong> ${entityType}</p>
        <p><strong>DOB / Incorporation:</strong> ${dobOrIncorporation}</p>
        <p><strong>PAN:</strong> ${pan}</p>
        <p><strong>GSTIN:</strong> ${gstin || 'N/A'}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interested Product:</strong> ${product}</p>
        <h3>Bank Details</h3>
        <p><strong>Bank Name:</strong> ${bankName}</p>
        <p><strong>Account Number:</strong> ${accountNumber}</p>
        <p><strong>Account Type:</strong> ${accountType}</p>
        <p><strong>IFSC:</strong> ${ifsc}</p>
        <p><strong>Branch Address:</strong> ${branchAddress}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
