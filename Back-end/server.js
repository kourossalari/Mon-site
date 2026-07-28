const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;

    console.log(name);
    console.log(email);
    console.log(message);

    res.status(200).json({
        message: "Message reçu"
    });
});


app.listen(3000, () => {
    console.log("Serveur lancé sur le port 3000");
});