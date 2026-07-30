import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRouter from "./routes/contact.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    "https://mon-site-17aw.vercel.app",
    "http://localhost:3000"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true,
}));

app.options("*", cors()); // 👈 important pour les preflight

app.use(express.json());

app.use("/api/contact", contactRouter);

app.get("/", (req, res) => {
  res.send("Backend OK 🚀");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});