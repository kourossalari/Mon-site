import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRouter from "./routes/contact.js";

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:3000"
];

app.use(cors({
  origin: (origin, callback) => {
    console.log("ORIGIN RECUE :", origin);

    // Autorise les requêtes sans origine (Postman, tests backend...)
    if (!origin) {
      return callback(null, true);
    }

    // Autorise toutes les URLs Vercel du projet
    if (origin.endsWith(".vercel.app")) {
      return callback(null, true);
    }

    // Autorise localhost en développement
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Origine non autorisée par CORS"));
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true
}));

app.use(express.json());

app.use("/api/contact", contactRouter);

app.get("/", (req, res) => {
  res.send("Backend OK 🚀");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});