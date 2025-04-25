import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,          // 👈 from .env.local
        pass: process.env.EMAIL_PASS           // 👈 from .env.local
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,             // 👈 sends it to yourself
      subject: "New Quote Request Submitted!",
      html: `
        <h2>New Quote Request</h2>
        <p><strong>First Name:</strong> ${data.firstName}</p>
        <p><strong>Last Name:</strong> ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Event Date:</strong> ${data.eventDate}</p>
        <p><strong>Event Time:</strong> ${data.eventTime}</p>
        <p><strong>Hours Needed:</strong> ${data.hoursNeeded}</p>
        <p><strong>Venue Address:</strong> ${data.venueAddress}, ${data.city}, ${data.state} ${data.zipCode}</p>
        <p><strong>Guest Count:</strong> ${data.guestCount}</p>
        <p><strong>Venue Type:</strong> ${data.venue}</p>
        <p><strong>Event Type:</strong> ${data.eventType}</p>
        <p><strong>Referral Source:</strong> ${data.referralSource}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ message: "Failed to send email" }, { status: 500 });
  }
}
