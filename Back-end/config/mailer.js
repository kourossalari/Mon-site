import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (name, email, message) => {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL_RECEIVER,
      subject: "Nouveau message de contact",
      html: `
        <h2>Nouveau message</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("EMAIL SENT:", response);

    return true;
  } catch (error) {
    console.log("RESEND ERROR:", error);
    return false;
  }
};