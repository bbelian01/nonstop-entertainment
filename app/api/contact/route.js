import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const data = await req.json()
    console.log('Form data received:', { ...data, message: '[REDACTED]' })

    // Log email configuration (safely)
    console.log('Email configuration:', {
      host: 'smtp.gmail.com',
      port: 587,
      user: process.env.EMAIL_USER,
      hasPassword: !!process.env.EMAIL_PASS
    })

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Test the connection
    await transporter.verify()
    console.log('SMTP connection verified successfully')

    const emailContent = `
      New Contact Form Submission
      
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone || 'Not provided'}
      Event Type: ${data.eventType}
      Event Date: ${data.eventDate || 'Not provided'}
      Guest Count: ${data.guestCount || 'Not provided'}
      
      Message:
      ${data.message}
    `

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "info@nonstopentertainers.com",
      subject: `New Inquiry from ${data.name}`,
      text: emailContent,
    })

    console.log('Email sent successfully:', info.messageId)
    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Detailed error:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    })
    
    return NextResponse.json(
      { error: error.message || 'Failed to send email' },
      { status: 500 }
    )
  }
}
