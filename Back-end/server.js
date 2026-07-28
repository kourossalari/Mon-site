import express from "express";
import cors from "cors";
import contactRouter from "./routes/contact.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Backend fonctionne"
  });
});

app.use("/api/contact", contactRouter);

app.listen(3001, () => {
  console.log("Serveur lancé sur le port 3001");
});