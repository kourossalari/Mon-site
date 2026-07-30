import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRouter from "./routes/contact.js";

dotenv.config();

const app = express();

const allowedOrigins = [
  "https://mon-site-17aw-e711kzulk-kourossalaris-projects.vercel.app/",
  "http://localhost:3000"
];

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.use(express.json());

app.use("/api/contact", contactRouter);

app.get("/", (req, res) => {
  res.send("Backend OK 🚀");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});