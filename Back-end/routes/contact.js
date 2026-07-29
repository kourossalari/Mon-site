import express from "express";
import transporter from "../config/mailer.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `Nouveau message de ${name}`,
      text: `
Nom : ${name}
Email : ${email}

Message :
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: "Message envoyé avec succès",
    });

  } catch (error) {
  console.error("Erreur Nodemailer COMPLETE :", error);

  res.status(500).json({
    message: error.message,
  });
}
});

export default router;