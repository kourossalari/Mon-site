import express from "express";
import { sendEmail } from "../config/mailer.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const success = await sendEmail(name, email, message);

    if (success) {
      res.status(200).json({
        message: "Message envoyé avec succès",
      });
    } else {
      res.status(500).json({
        message: "Erreur lors de l'envoi",
      });
    }

  } catch (error) {
    console.error("Erreur RESEND :", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;