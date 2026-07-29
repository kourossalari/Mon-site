import express from "express";
import transporter from "../config/mailer.js";

const router = express.Router();

router.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log("Nom :", name);
    console.log("Email :", email);
    console.log("Message :", message);
    console.log("Tentative d'envoi du mail...");

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

    console.log("Email envoyé avec succès !");

    res.status(200).json({
      message: "Message envoyé avec succès",
    });

  } catch (error) {
    console.error("Erreur Nodemailer :", error);

    res.status(500).json({
      message: "Erreur lors de l'envoi",
    });
  }
});

export default router;