import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Nom :", name);
  console.log("Email :", email);
  console.log("Message :", message);

  res.status(200).json({
    message: "Message reçu avec succès"
  });
});

export default router;