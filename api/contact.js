// api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // 1. Setup the transporter (connect to your email provider)
  // Note: For Gmail, you must use an "App Password", not your normal password.
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // We will set these in Vercel later
      pass: process.env.EMAIL_PASS, 
    },
  });

  try {
    // 2. Send the email
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Sender address
      to: 'avlon020@gmail.com', // Your personal email to receive messages
      replyTo: email, // When you click reply, it goes to the user
      subject: `Portfolio Contact: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error sending email', error: error.message });
  }
}